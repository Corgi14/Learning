{
    interface IPerson<T> {
        id: T
        numList: T[]
        getID: (value: T) => void
    }

    const p: IPerson<number> = {
        id: 1,
        numList: [0, 0, 1],
        getID: (value: number) => {

        }
    }

    type MyPick<T, K extends keyof T> = {
        [key in K]: T[key]
    }

    interface TState {
        name: string
        age: number
        like: string[]
    }

    interface TSingleState extends MyPick<TState, "name" | "age"> { }
    let a: Pick<TState, "name" | "age"> = { name: '', age: 1 }
}