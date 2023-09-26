{
    interface Person {
        name: string;
        age: number;
      }

      interface Person {
        name: string;
        age: number;
      }

      type Partial<T> = {
        [P in keyof T]? : T[P]
      }

      type Readonly<T> = {
        readonly [P in keyof T]: T[P]
      }

      type PartialPerson = Partial<Person>
      type ReadonlyPerson = Readonly<Person>

    //Property 'age' is missing in type '{ name: string; }' but required in type 'Person'.
    //   let p: Person = {name: 'a'} //
      let pp: PartialPerson = {name: 'a'}
      let rp: ReadonlyPerson = {name:'b', age: 0}
    //Cannot assign to 'name' because it is a read-only 
    //   rp.name = 9
}