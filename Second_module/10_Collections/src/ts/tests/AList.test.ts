import {AList} from "../AList";

const aList = new AList()

aList.add(5);
aList.add(10);
aList.add(15);
aList.add(20);

describe('Tests for AList', () => {
    test('tests for method contains (should return true)', () => {
        expect(aList.contains(10)).toEqual(true)
    })
    test('tests for method contains (should return false)', () => {
        expect(aList.contains(11)).toEqual(false)
    })
    test('tests for method get (should return result)', () => {
        expect(aList.get(2)).toEqual(15)
    })
    test('tests for method getSize (should return result)', () => {
        expect(aList.getSize()).toEqual(4)
    })
    test('tests for method print (should be undefined)', () => {
        expect(aList.print()).toEqual([5,10,15,20])
    })
    test('tests for method minIndex (should return result)', () => {
        expect(aList.minIndex()).toEqual(0)
    })
    test('tests for method maxIndex (should return result)', () => {
        expect(aList.maxIndex()).toEqual(3)
    })
    test('tests for method maxValue (should return result)', () => {
        expect(aList.maxValue()).toEqual(20)
    })
    test('tests for method minValue (should return result)', () => {
        expect(aList.minValue()).toEqual(5)
    })
    test('tests for method retainAll (should return result)', () => {
        expect(aList.retainAll([5,10,15,20])).toEqual([5,10,15, 20])
    })
    test('tests for method reverse (should return result)', () => {
        expect(aList.reverse()).toEqual([20,15,10,5])
    })
    test('tests for method halfReverse (should return result)', () => {
        expect(aList.halfReverse()).toEqual([15,20,5,10])
    })
    test('tests for method toArray (should return result)', () => {
        expect(aList.toArray()).toEqual([5,10,15,20])
    })
    test('tests for method toString (should return result)', () => {
        expect(aList.toString()).toEqual('5101520')
    })
    test('tests for method sort (should return result)', () => {
        aList.add(4);
        aList.add(8);
        expect(aList.sort()).toEqual([4,5,8,10,15,20])
    })
    test('tests for method set (should return result)', () => {
        expect(aList.set(4,0)).toEqual([4,5,8,10,15,20])
    })
    test('tests for method set (should return result)', () => {
        expect(aList.set(5,-1)).toEqual([4,5,8,10,15,20])
    })
    test('tests for method removeAll (should return result)', () => {
        expect(aList.removeAll([5])).toEqual([4,undefined,8,10,15,20])
    })
    test('tests for method remove (should return result)', () => {
        expect(aList.remove(10)).toEqual(10)
    })
    test('tests for method clear (should return result)', () => {
        expect(aList.clear()).toEqual([])
    })
})