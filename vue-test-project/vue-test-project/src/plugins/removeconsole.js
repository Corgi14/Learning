import { transformSync } from '@babel/core'

function removeASTConsole(api) {
    const { types } = api
    return {
        visitor: {
            CallExpression(path) {
                if (
                    types.isMemberExpression(path.node.callee) &&
                    types.isIdentifier(path.node.callee.object, {
                        name: 'console',
                    })
                ) {
                    path.remove()
                }
            }
        }
    }
}

export default function RemoveConsole() {
    return {
        name: 'remove-console',
        transform() {
            const [src, id] = arguments

            const exclude = [/node_modules\//]
            const include = [/\.js/]

            const check =
                !exclude.some(item => new RegExp(item).test(id)) &&
                include.some(item => new RegExp(item).test(id))

            if (check) {
                const transformedCode = transformSync(src, {
                    ast: true,
                    plugins: [removeASTConsole],
                }).code
                return {
                    code: transformedCode,
                    map: null,
                }
            }
        }
    }
}