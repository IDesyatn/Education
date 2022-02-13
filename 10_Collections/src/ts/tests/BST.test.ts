import {BST} from "../BST"

let testTree;
beforeEach(() => {
    testTree = new BST();
})

describe('Tests for BSTree', () => {
    test('test for method init', () => {
        testTree.init([8, 10, 2, 3]);
        expect(testTree.toArray()).toStrictEqual([2, 3, 8, 10])
    })
    test('test for method clear', () => {
        testTree.init([8, 10, 2, 3]);
        testTree.clear()
        expect(testTree.toArray()).toStrictEqual([])
    })
    test('test for method height (empty)', () => {
        expect(testTree.height()).toBe(0)
    })
    test('test for method height (should return height size)', () => {
        testTree.init([8, 10, 2, 3]);
        expect(testTree.height()).toBe(3);
    })
    test('test for method insert', () => {
        testTree.init([8, 10, 2, 3]);
        testTree.insert(9)
        expect(testTree.toArray()).toStrictEqual([2, 3, 8, 9, 10])
    })
    test('test for method insert (5,5)', () => {
        testTree.init([5]);
        testTree.insert(5);
        expect(testTree.toArray()).toStrictEqual([5,5]);
    })
    test('test for method leaves', () => {
        testTree.init([8, 10, 2, 3]);
        expect(testTree.leaves()).toBe(2);
    })
    test('test for method maxNode', () => {
        testTree.init([8, 10, 2, 3]);
        expect(testTree.maxNode()).toBe(10);
    })
    test('test for method minNode', () => {
        testTree.init([8, 10, 2, 3]);
        expect(testTree.minNode()).toBe(2);
    })
    test('test for method nodes', () => {
        testTree.init([8, 10, 2, 3]);
        expect(testTree.nodes()).toBe(4);
    })
    test('test for method print', () => {
        testTree.init([8, 10, 2, 3, 6, 12]);
        expect(testTree.toArray()).toStrictEqual([2,3,6,8,10,12]);
    })
    test('test for method remove (null)', () => {
        testTree.init([8, 10, 2, 3, 6, 12]);
        expect(testTree.remove(null)).toBeUndefined();
    })
    test('test for method remove (empty)', () => {
        testTree.init([]);
        expect(testTree.remove(1)).toBe(null);
    })
    test('test for method remove (should return result)', () => {
        testTree.init([8, 10, 2, 3, 6, 12]);
        expect(testTree.remove(1)).toBe(8);
    })
    test('should remove [2,3,4] current.left == null', () => {
        testTree.init([2,3,4]);
        expect(testTree.remove(3)).toBe(2);
    })
    test('should remove [2,3,4] current.left == null', () => {
        testTree.init([2,3,4]);
        expect(testTree.remove(2)).toStrictEqual(3);
    })
    test('should remove, current.left == null', () => {
        testTree.init([8, 10, 2, 3, 6, 12]);
        expect(testTree.remove(3)).toBe(8);
    })
    test('should remove', () => {
        testTree.init([8, 10, 2, 3, 6, 12]);
        expect(testTree.remove(8)).toBe(8);
    })
    test('test for method reverse (left)', () => {
        testTree.init([8, 10, 2, 3, 6, 12]);
        testTree.reverse();
        expect(testTree.toArray()).toStrictEqual([12,10, 8,6,3,2]);
    })
    test('test for method reverse (right)', () => {
        testTree.init([5, 2]);
        testTree.reverse();
        expect(testTree.toArray()).toStrictEqual([5,2]);
    })
    test('test for method reverse (undefined)', () => {
        testTree.reverse();
        expect(testTree.reverse()).toBeUndefined();
    })
    test('test for method search right', () => {
        testTree.init([8, 10, 2, 3, 6, 12]);
        expect(testTree.search(12)).toBe(12)
    })
    test('test for method search left', () => {
        testTree.init([8, 10, 2, 3]);
        expect(testTree.search(2)).toBe(2);
    })
    test('test for method search undefined', () => {
        testTree.init([5, 2]);
        expect(testTree.search(12)).toBeUndefined();
    })
    test('test for method size', () => {
        testTree.init([8, 10, 2, 3, 6, 12]);
        expect(testTree.size()).toBe(6)
    })
    test('test for method width', () => {
        testTree.init([8, 10, 2, 3, 6, 12]);
        expect(testTree.width()).toBe(2)
    })
    test('test for method width (arr === null)', () => {
        expect(testTree.width()).toBe(0);
    })
    test('test for method width (1 el in arr)', () => {
        testTree.init([8]);
        expect(testTree.width()).toBe(1);
    })
})
