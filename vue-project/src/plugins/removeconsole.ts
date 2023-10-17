const {transformSync} = require('@babel/core')
function RemoveConsole() {
    return {
        name: 'remove-console',
        transform() {
            const [src, id] = arguments
            const exclude = [/node_modules\//]
            const include = [/\.ts/]

            const check = !exclude.some(item => new RegExp(item).test(id)) && include.some(item => new RegExp(item).test(id))

            if (check) {
                const transformCode = transformSync(src, {
                    ast: true,
                    plugins: [removeASTConsole],
                }).code

                return {
                    code: transformCode,
                     map: null,
                }
            }
        }
    }
}

export default RemoveConsole