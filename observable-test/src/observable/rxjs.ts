import { from, of, pipe } from 'rxjs';

// 1. Promise
const data = from(fetch('/api/endpoint'));
data.subscribe({
    next(response) { console.log(response); },
    error(err) { console.error('Error: ' + err); },
    complete() { console.log('Completed'); }
});

// 2. interval
import { interval } from 'rxjs';

const secondsCounter = interval(1000);
secondsCounter.subscribe(n =>
    console.log(`It's been ${n} seconds since subscribing!`));

// 3. Event
import { fromEvent } from 'rxjs';


const el = document.getElementById('my-element');

const mouseMoves = fromEvent(el, 'mousemove');

const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
    console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);

    if (evt.clientX < 40 && evt.clientY < 40) {
        subscription.unsubscribe();
    }
});



// 4. Ajax
import { ajax } from 'rxjs/ajax';

const apiData = ajax('/api/data');
apiData.subscribe(res => console.log(res.status, res.response));

// 5. Operators
import { map, filter, retry, catchError } from 'rxjs/operators';

const nums = of(1, 2, 3);
const squareValues = map((val: number) =>
    val * val);
const squaredNums = squareValues(nums);
squaredNums.subscribe(x =>
    console.log(x));


const nums1 = of(1, 2, 3, 4, 5);
const squareOddVals = pipe(
    filter((n: number) =>
        n % 2 !== 0),
    map(n =>
        n * n)
);
const squareOdd = squareOddVals(nums1);
squareOdd.subscribe(x =>
    console.log(x));

// 6. 可规定尝试的失败次数

const apiData2 = ajax('/api/data').pipe(
    retry(3),
    map(res => {
        if (!res.response) {
            throw new Error('Value expected!');
        }
        return res.response;
    }),
    catchError(err => of([]))
);

apiData2.subscribe({
    next(x) { console.log('data: ', x); },
    error(err) { console.log('errors already caught... will not run'); }
});