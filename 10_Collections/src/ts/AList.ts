import {IList} from "./types";

export class AList implements IList{
    private array: number[];
    private size: number;

    constructor(array?) {
        this.array = array || [];
        this.size = this.array.length || 0;
    }

    add(item): void {
        this.array[this.size] = item;
        this.size++;
    }

    clear(): void {
        this.array.length = 0;
        this.size = 0;
    }

    contains(item): boolean {
        for(const itemElement of this.array){
            if(item === itemElement) {
                return true
            }
        }
        return false;
    }

    get(index): number{
        return this.array[index]; 
    }

    getSize(): number {
        return this.size;
    }

    halfReverse(): void {
        let tmp = 0;
        if (this.size % 2 === 0) {
            for (let i = 0; i < (this.size/2); i++){
                tmp = this.array[i]; 
                this.array[i] = this.array[this.size / 2 + i]
                this.array[this.size / 2 + i] = tmp; 
                tmp = 0;
            }    
        }
        else{
            for (let i = 0; i < Math.round(this.size/2)-1; i++){
                tmp = this.array[i]; 
                this.array[i] = this.array[Math.round(this.size / 2) + i]
                this.array[Math.round(this.size / 2) + i] = tmp; 
                tmp = 0;
            }    
        }
    }

    maxIndex(): number {
        let max = this.array[0]; 
        let indx = 0; 
        for (let i = 1; i < this.size; i++){
            if (this.array[i] > max) {
                max = this.array[i];
                indx = i;
            }
        }
        return indx;
    }

    maxValue(): number {
        let max = this.array[0]; 
        for (let i = 1; i < this.size; i++){
            if (this.array[i] > max) {
                max = this.array[i]; 
            }
        }
        return max;
    }

    minIndex(): number {
        let min = this.array[0]; 
        let indx = 0; 
        for (let i = 1; i < this.size; i++){
            if (this.array[i] < min) {
                min = this.array[i];
                indx = i;
            }
        }
        return indx;
    }

    minValue(): number {
        let min = this.array[0]; 
        for (let i = 1; i < this.size; i++){
            if (this.array[i] < min) {
                min = this.array[i]; 
            }
        }
        return min;
    }

    print(): void {
        for (let i = 0; i < this.size; i++){
            console.log(this.array[i]);
        }
    }

    remove(item): number {
        let newArr = [];
        let newArrSize = 0; 
        let count = 0; 
        let del = 0; 
        
        for (let i = 0; i < this.size; i++){
            if (this.array[i] === item && count === 0) {
                del = this.array[i];
                continue; 
            }
            newArr[newArrSize] = this.array[i];
            newArrSize++; 
        }
        
        this.array = newArr; 
        this.size = this.size - 1; 
        return del;
    }

    removeAll(items: number[]): void {
        let newArr = []; 
        let bool = false;
        for (let i = 0; i < this.size; i++){
            bool = false;
            for (let j = 0; j < items.length; j++){
                if (this.array[i] === items[j]) {
                    bool = true;
                }
            }

            if (bool !== true) {
                newArr[newArr.length] = this.array[i];
            }
        }
        this.array = newArr;
        this.size = newArr.length;
    }

    retainAll(items: number[]): void {
        let newArr = []; 
        let bool = false;
        for (let i = 0; i < this.size; i++){
            bool = false;
            for (let j = 0; j < items.length; j++){
                if (this.array[i] === items[j]) {
                    bool = true;
                }
            }

            if (bool === true) {
                newArr[newArr.length] = this.array[i];
            }
        }
        this.array = newArr;
        this.size = newArr.length;
    }

    reverse(): void {
        let rev = [];
        rev.length = this.size; 
        for (let i = 0; i < this.size; i++) {
            rev[rev.length - i - 1] = this.array[i];
        }
        this.array = rev;
    }

    set(item, index): void {
        if (this.array[index]) {
            this.array[index] = item;
        }
    }

    sort(): number[] {
        if (this.size < 2) {
            return this.array; 
    }
        let less = []; 
        let greater = [];
        let middleNum = Math.round(this.size / 2) - 1;
        let middle = this.array[middleNum];
        let lessCount = 0;
        let greaterCount = 0;

        for (let i = 0; i < this.size; i++){
            if (i === middleNum) {
            continue; 
        }

        if (this.array[i] < middle) {
            less[lessCount] = this.array[i];  
            lessCount++; 
        }
        else {
            greater[greaterCount] = this.array[i];  
            greaterCount++; 
        }
    }
        let lessList = new AList(less);
        let greaterList = new AList(greater);
        this.array = [...lessList.sort(), middle, ...greaterList.sort()]; 
        return this.array;
}

    toArray(): number[] {
        return this.array;
    }

    toString(): string {
        let str = '' + this.array[0];
        for (let i = 1; i < this.size; i++){
            str = str + ' ' + this.array[i];
        }
        return str;
    }

}

module.exports = {AList};








