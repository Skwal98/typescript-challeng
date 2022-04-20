
/* _____________ Your Code Here _____________ */

type TupleToObject<T extends ReadonlyArray<string>> = { [P in T[number]]: P }


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type cases = [
    Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>



//comments
type test = typeof tuple[number]; //"tesla" | "model 3" | "model X" | "model Y" (extract array items)
type result = { [P in test ] : P };
const a: result = {
    tesla: 'tesla',
    'model 3': 'model 3', 
    'model X': 'model X', 
    'model Y': 'model Y'
}