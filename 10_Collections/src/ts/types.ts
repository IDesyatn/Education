export interface IList {
    clear: () => void
    add : (item) => void
    getSize: () => number
    set: (item,index) => void
    get : (index) => number
    remove : (item) => number
    toArray: () => number[]
    toString: () => string
    contains: (item) => boolean
    minValue: () => number
    maxValue: () =>  number
    minIndex: () => number
    maxIndex: () => number
    reverse: () => void
    halfReverse: () => void
    retainAll: (items: number[]) => void
    removeAll: (items: number[]) => void
    sort : () => number[]
    print: () => void
}