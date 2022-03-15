import {IList} from "./types";

export class AList implements IList {
    private array: number[]
    private size: number;

    constructor() {
        this.array = [];
        this.size = 0;
    }

    add(item: number): void {
        this.array[this.size] = item;
        this.size++;
    }

    clear(): number[] {
        this.array.length = 0;
        this.size = 0;
        return this.array
    }

    contains(item): boolean {
        for (let i = 0; i < this.size; i++) {
            const element = this.array[i];
            if (element === item) {
                return true;
            }
        }
        return false;
    }

    get(index: number): number {
        return this.array[index];
    }

    getSize(): number {
        return this.size;
    }

    halfReverse(): number[] {
        const oldArray = this.array
        const firstPartLen = Math.floor(oldArray.length / 2)
        const secondPartLen = oldArray.length - firstPartLen
        const newArr = []
        for (let i = 0; i < secondPartLen; i++) {
            newArr[i] = oldArray[i + firstPartLen]
        }
        for (let i = 0; i < firstPartLen; i++) {
            newArr[i + secondPartLen] = oldArray[i]
        }
        return newArr
    }

    maxIndex(): number {
        let max;
        for (let i = 0; i < this.size; i++) {
            if (i === 0) {
                max = i;
            }
            if (max < this.array[i]) {
                max = i;
            }
        }
        return max;
    }

    minIndex(): number {
        let min;
        for (let i = 0; i < this.size; i++) {
            if (i === 0) {
                min = i;
            }
            if (min > this.array[i]) {
                min = i;
            }
        }
        return min;
    }

    maxValue(): number {
        let max = this.array[0]
        for (let i = 0; i < this.array.length; i++) {
            if (max < this.array[i]) {
                max = this.array[i];
            }
        }
        return max;
    }

    minValue(): number {
        let min = this.array[0];
        for(let i = 0; i < this.array.length; i++){
            if (min > this.array[i]) {
                min = this.array[i]
            }
        }
        return min;
    }

    print(): number[] {
        for (let i = 0; i < this.size; i++) {
            console.log(this.array[i]);
        }
        return this.array
    }

    remove(item): number {
        const oldArray = this.array;
        this.array = [];
        this.size = 0;
        let returnValue;

        for (let i = 0; i < oldArray.length; i++) {
            const element = oldArray[i];
            if (element !== item) {
                this.add(element);
            } else {
                returnValue = element;
            }
        }
        return returnValue;
    }


    removeAll(items: number[]): number[] {
        const oldArray = this.array;

        for (let i = 0; i < oldArray.length; i++) {
            for (let j = 0; j < items.length; j++) {
                if (oldArray[i] === items[j]) {
                    oldArray[i] = undefined;
                    this.size--;
                }
            }
        }
        return oldArray;

    }

    retainAll(items: number[]): number[] {
        const oldArray = this.array;

        for (let i = 0; i < oldArray.length; i++) {
            let checker = false
            for (let j = 0; j < items.length; j++) {
                const innerItem = items[j];
                if (oldArray[i] === innerItem) {
                    checker = true;
                    break;
                }
            }
            if (!checker) {
                oldArray[i] = undefined;
                this.size--;
            }
        }

        return oldArray;
    }

    reverse(): number[] {
        const oldArray = this.array;
        const newArr = []

        for (let i = 0; i < oldArray.length; i++) {
            newArr[i] = oldArray[oldArray.length - i - 1]
        }
        return newArr
    }

    set(item, index: number): number[] {
        const oldArray = this.array;
        this.array = [];
        this.size = 0;

        if(index < 0) {
            console.log(false);
        }
        for (let i = 0; i < oldArray.length; i++) {
            const element = oldArray[i];
            if (i === index) {
                this.add(item);
            } else {
                this.add(element);
            }
        }
        return this.array;
    }

    sort(): number[] {
        let oldArray = this.array

        for (let i = 0, endI = oldArray.length - 1; i < endI; i++) {
            let wasSwap = false
            for (let j = 0, endJ = endI - i; j < endJ; j++) {
                if (oldArray[j] > oldArray[j + 1]) {
                    let swap = oldArray[j]
                    oldArray[j] = oldArray[j + 1]
                    oldArray[j + 1] = swap
                    wasSwap = true
                }
            }
            if (!wasSwap) break
        }
        return oldArray
    }

    toArray(): number[] {
        return this.array;
    }

    toString(): string {
        const oldArray = this.array
        let str = ''
        for (let i = 0; i < oldArray.length; i++) {
            str += oldArray[i]
        }
        return str
    }
}