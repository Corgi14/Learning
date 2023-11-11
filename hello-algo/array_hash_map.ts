{
    class Pair {
        public key: number
        public val: string

        constructor(key: number, val: string) {
            this.key = key
            this.val = val
        }
    }

    class ArrayHashMap {
        private readonly buckets: (Pair | null)[]

        constructor() {
            this.buckets = new Array(100).fill(null)
        }

        private hashFunc(key: number): number {
            return key % 100
        }

        public get(key: number): string | null {
            let index = this.hashFunc(key)
            let pair = this.buckets[index]
            if (pair === null) return null
            return pair.val
        }

        public set(key: number, val: string) {
            let index = this.hashFunc(key)
            this.buckets[index] = new Pair(key, val)
        }

        public delete(key: number) {
            let index = this.hashFunc(key)
            this.buckets[index] = null
        }

        public entries(): (Pair | null)[] {
            let arr: (Pair | null)[] = []
            for (let i = 0; i < this.buckets.length; i++) {
                if (this.buckets[i]) {
                    arr.push(this.buckets[i])
                }
            }
            return arr
        }

        public keys(): (number | undefined)[] {
            let arr: (number | undefined)[] = []
            for (let i = 0; i < this.buckets.length; i++) {
                if (this.buckets[i]) {
                    arr.push(this.buckets[i]!.key)
                }
            }
            return arr
        }

        public values(): (string | undefined)[] {
            let arr: (string | undefined)[] = [];
            for (let i = 0; i < this.buckets.length; i++) {
                if (this.buckets[i]) {
                    arr.push(this.buckets[i]!.val);
                }
            }
            return arr;
        }
    }
}

{
    class Pair {
        public key: number
        public val: string

        constructor(key: number, val: string) {
            this.key = key
            this.val = val
        }
    }

    class HashMapChaining {

        #buckets: Pair[][]
        #capacity: number

        constructor() {
            this.#capacity = 4
            this.#buckets = new Array(this.#capacity).fill(null).map(() => [])
        }

        #hashFunc(key: number): number {
            return key % this.#capacity
        }

        get(key: number): string | null {
            const index = this.#hashFunc(key)
            const bucketTmp = this.#buckets[index]
            for (const pair of bucketTmp) {
                if (pair.key === key) {
                    return pair.val
                }
            }
            return null
        }

        put(key: number, val: string): void {
            const index = this.#hashFunc(key)
            const bucketTmp = this.#buckets[index]
            for (const pair of bucketTmp) {
                if (pair.key === key) {
                    pair.val = val
                    return
                }
            }
            const pair = new Pair(key, val)
            bucketTmp.push(pair)
        }

        remove(key: number) {
            const index = this.#hashFunc(key)
            const bucketTmp = this.#buckets[index]
            for (let i = 0; i < bucketTmp.length; i++) {
                if (bucketTmp[i].key === key) {
                    bucketTmp.slice(i, 1)
                    break
                }
            }
        }

        #extend() {
            
        }
    }
}