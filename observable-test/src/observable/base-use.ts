import { of, Observable } from "rxjs";

// 1. Use RXJS of method
const myObservable = of(1, 2, 3);

const myObserver = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
};

myObservable.subscribe(myObserver);


// 2. Create a Observable object
function sequenceSubscriber(observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();

    return { unsubscribe() { } };
}

const sequence = new Observable(sequenceSubscriber);

sequence.subscribe({
    next(num) { console.log(num); },
    complete() { console.log('Finished sequence'); }
});


// 3. Use case in Event
function fromEvent(target, eventName) {
    return new Observable((observer) => {
        const handler = (e) => observer.next(e);

        // Add the event handler to the target
        target.addEventListener(eventName, handler);

        return () => {
            // Detach the event handler from the target
            target.removeEventListener(eventName, handler);
        };
    });
}

const ESC_KEY = 27;
const nameInput = document.getElementById('name') as HTMLInputElement;

const subscription = fromEvent(nameInput, 'keydown')
    .subscribe((e: KeyboardEvent) => {
        if (e.keyCode === ESC_KEY) {
            nameInput.value = '';
        }
    });


// 4. 多播，第一种对挂事件的每个对象，都完整调用
function sequenceSubscriber1(observer) {
    const seq = [1, 2, 3];
    let timeoutId;

    // Will run through an array of numbers, emitting one value
    // per second until it gets to the end of the array.
    function doSequence(arr, idx) {
        timeoutId = setTimeout(() => {
            observer.next(arr[idx]);
            if (idx === arr.length - 1) {
                observer.complete();
            } else {
                doSequence(arr, ++idx);
            }
        }, 1000);
    }

    doSequence(seq, 0);

    // Unsubscribe should clear the timeout to stop execution
    return {
        unsubscribe() {
            clearTimeout(timeoutId);
        }
    };
}

// Create a new Observable that will deliver the above sequence
const sequence1 = new Observable(sequenceSubscriber1);

// 第一个订阅者
sequence1.subscribe({
    next(num) { console.log(num); },
    complete() { console.log('Finished sequence'); }
});

// 第二个订阅者
setTimeout(() => {
    sequence1.subscribe({
        next(num) { console.log('2nd subscribe: ' + num); },
        complete() { console.log('2nd sequence finished.'); }
    });
}, 3000);

// 5. 多播，第一种对挂事件的每个对象，时间错过了不调用了
function multicastSequenceSubscriber() {
    const seq = [1, 2, 3];
    const observers = [];
    let timeoutId;

    return (observer) => {
        observers.push(observer);
        if (observers.length === 1) {
            timeoutId = doSequence({
                next(val) {
                    observers.forEach(obs => obs.next(val));
                },
                complete() {
                    observers.slice(0).forEach(obs => obs.complete());
                }
            }, seq, 0);
        }

        return {
            unsubscribe() {
                observers.splice(observers.indexOf(observer), 1);
                if (observers.length === 0) {
                    clearTimeout(timeoutId);
                }
            }
        };
    };
}

function doSequence(observer, arr, idx) {
    return setTimeout(() => {
        observer.next(arr[idx]);
        if (idx === arr.length - 1) {
            observer.complete();
        } else {
            doSequence(observer, arr, ++idx);
        }
    }, 1000);
}

const multicastSequence = new Observable(multicastSequenceSubscriber());

multicastSequence.subscribe({
    next(num) { console.log('1st subscribe: ' + num); },
    complete() { console.log('1st sequence finished.'); }
});


setTimeout(() => {
    multicastSequence.subscribe({
        next(num) { console.log('2nd subscribe: ' + num); },
        complete() { console.log('2nd sequence finished.'); }
    });
}, 1500);