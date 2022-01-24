import {IList} from "./types";

class Node {
    value: number;
    next: Node;
    constructor(value: number, next?: Node) {
        this.value = value
        this.next = next || null
    }
}

export class LList implements IList {
    private root: Node | null;
    private size: number;
    private tail: Node | null;

    constructor(input?)
   {

        if (input && Array.isArray(input)) {
            for (let i = 0; i < input.length; i++) {
                this.add(input[i])
            }
        } else if (input && typeof input === 'number') {
            for (let i = 0; i < input; i++) {
                this.add(0)
            }
        } else if (!input) {
            this.root = null;
            this.tail = null;
            this.size = 0;
        } else {
            throw new Error('Invalid input data')
        }
    }

    add(item): void {
        const node = new Node(item, null)

        if (this.tail) {
            this.tail.next = node;
        }

        if (!this.root) {
            this.root = node;
        }

        this.tail = node;
        this.size++
    }

    clear(): void {
        this.root = null;
        this.tail = null;
    }

    contains(item): boolean {
        return false;
    }

    get(idx): number {
        if (this.root === null) {
            return;
        }
        let node = this.root;
        let index = 0;
        while (node){
            if (index === idx) {
                return node.value;
            }
            node = node.next;
            index++
        }
    }

    getSize(): number {
        let count = 0; 
        let current = this.root;

        while(current) {
            count++
            current = current.next
        }
        return count;
    }


    halfReverse(): void {
         let arr = this.toArray()

        if (arr.length < 1) {
            return
        }

        const half = Number((arr.length / 2).toFixed(0));
        let res = []
        for (let i = half - 1; i < this.size; i++) {
            res[res.length] = arr[i]
        }
        for (let i = 0; i < half - 1; i++) {
            res[res.length] = arr[i]
        }
        this.clear()

        for (let i = 0; i < res.length; i++) {
            this.add(res[i])
        }
    }


    maxIndex(): number {
        let max = this.root.value; 
        let current = this.root; 
        let counter = 0;
        let indx = 0; 

        while (current) {
            if (max < current.value) {
                max = current.value;
                indx = counter;
            }
            counter++;
            current = current.next; 
        }
        return indx;
    }

    maxValue(): number {
        let max = this.root.value; 
        let current = this.root; 
        
         while (current) {
            if (max < current.value) {
                max = current.value;
            }
            current = current.next; 
        }

        return max;
    }

    minIndex(): number {
        let min = this.root.value; 
        let current = this.root; 
        let counter = 0;
        let indx = 0; 

        while (current) {
            if (min > current.value) {
                min = current.value;
                indx = counter;
            }
            counter++;
            current = current.next; 
        }

        return indx;
    }

    minValue(): number {
        let min = this.root.value; 
        let current = this.root; 
        
         while (current) {
            if (min > current.value) {
                min = current.value;
            }
            current = current.next; 
        }

        return min;
    }

    print(): void {
        let current = this.root; 

        for (let i = 0; i < this.size; i++){
            console.log(current.value); 
            current = current.next;
        }
    }

    remove(value): number {
        let counter = 0;
        let current = this.root;
        let prev = null;

        while(counter < this.size) {

            if (current.value === value) {
                const result = current.value

                if (current.next !== null) {
                    current.value = current.next.value
                    current.next = current.next.next
                } else {

                    if (prev !== null) {
                        prev.next = null
                        this.tail = prev
                    } else {
                        this.root = null;
                        this.tail = null;
                    }
                }
                this.size--
                if (this.size === 1) {
                    this.tail = null;
                }
                return result
            } else {
                counter++
                prev = current;
                current = current.next
            }
        }

    
    }

    removeAll(items: number[]): void {
         let current = this.root;
        let prev = null;

        while(current) {

            if (items.includes(current.value)) {
                if (current.next !== null) {
                    current.value = current.next.value;
                    current.next = current.next.next
                } else {
                    if (prev === null) {
                        this.root = null;
                        this.tail = null;
                        current = null;
                    }

                    if (prev !== null) {
                        prev.next = null
                        current = prev
                    }
                }
            } else {
                prev = current
                current = current.next
            }
        }
        this.size = this.getSize()

        if (this.size === 1) {
            this.tail = null;
        }
    }

    retainAll(items: number[]): void {
    }

    reverse(): void {
        let arr = this.toArray()

        if (arr.length < 1) {
            return
        }

        this.clear()
        let result = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            result[arr.length - 1 - i] = arr[i];
        }
        for (let i = 0; i < result.length; i++) {
            this.add(result[i])
        }
    
    }

    set(item, idx): void {
        if (this.root === null) {
            return;
        }
        let node = this.root;
        let index = 0;
        while (node){
            if (index === idx) {
                 node.value = item;
                 return;
            }
            node = node.next;
            index++
        }
    }

    sort(): number[] {
        return [];
    }

    toArray(): number[] {
        let arr = []; 
        let current = this.root; 
                
        while (current) {
            arr[arr.length] = current.value;
            current = current.next; 
        }

        return arr;
    }

    toString(): string{
        let str = ''; 
        let current = this.root; 
                
        while (current) {
            str = str + ' ' + current.value;
            current = current.next; 
        }
        
        return str;
    }

}

const test1 = new LList([2,5,6]);
test1.add(1); 
console.log(test1.toArray())
test1.add(2); 
console.log(test1.toArray())

module.exports = {LList};
