{
    function loggingIdentity<T extends Lengthwise>(arg: T) {
        console.log(arg.length)
        return arg
    }

    interface Lengthwise {
        length: number
    }
}