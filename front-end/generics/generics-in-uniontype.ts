{
    interface A {
        name: string
    }

    interface B {
        age: number
    }

    let a: A = {name: 'a'}
    let b: B = {age: 0}

    let c: A | B = {age:2}
    c=a

    let d: string | number = 1
    d = 'D'
}
