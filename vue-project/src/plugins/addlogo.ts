function AddLogo() {
    return {
        name: 'add-logo',
        transformIndexHtml() {
            const [html] = arguments
            return (
                `<!--
                ██████╗ ██████╗ ██████╗  ██████╗ ██╗
                ██╔════╝██╔═══██╗██╔══██╗██╔════╝ ██║
                ██║     ██║   ██║██████╔╝██║  ███╗██║
                ██║     ██║   ██║██╔══██╗██║   ██║██║
                ╚██████╗╚██████╔╝██║  ██║╚██████╔╝██║
                 ╚═════╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝
--->
                ` + html
            )
        }
    }
}

export default AddLogo