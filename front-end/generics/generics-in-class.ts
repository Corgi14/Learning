{
    class GenericNumber<T> {
        zeroValue: T;
        add: (x: T, y: T) => T;
    }
    let myGenericNumber = new GenericNumber<number>()
    myGenericNumber.zeroValue = 0
    myGenericNumber.add = (x: number, y: number) => {
        return x + y
    }
}