{
    function identity<T>(arg: T): T {
        return arg;
    }

    let output = identity<number>(1)

    interface GenericIdentityFn {
        <T>(arg: T): T
    }

    interface GenericIdentityFn1<T> {
        (arg: T): T
    }

    let mIdentity: GenericIdentityFn = identity
    let mIdentity1: GenericIdentityFn1<string> = identity

    let add: (x: number, y: number) => number = function (x: number): number { console.log(x); return x }
    add(1, 2)
    // add(1)

    let x = (b: number): { name: string, age: number } => ({ name: "Ann", age: 1 });
    let y = (a: number): { name: string } => ({ name: 'Jam' });

    y = x; // x的返回值兼容y的参数列表
}