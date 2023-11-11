{
    interface A {
        name: string
    }
    
    interface B {
        age: number
    }
    
    let a: A = {name: 'a'}
    let b1: B = {age: 0}
    let c: A & B = {name: 'b', age: 1}
    
    a=c

}