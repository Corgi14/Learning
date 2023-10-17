export default function AddLogo() {
    return {
        name: 'add-logo',
        transformIndexHtml() {
            const [html] = arguments
            return (
                `
                <!--
                 ██████╗   ██████╗   ██████╗    ██████╗   ██╗
                ██╔════╝  ██╔═══██╗  ██╔══██╗  ██╔════╝   ██║
                ██║       ██║   ██║  ██████╔╝  ██║  ███╗  ██║
                ██║       ██║   ██║  ██╔══██╗  ██║   ██║  ██║
                ╚██████╗  ╚██████╔╝  ██║  ██║  ╚██████╔╝  ██║
                 ╚═════╝   ╚═════╝   ╚═╝  ╚═╝   ╚═════╝   ╚═╝
                                                                     
-->                
                ` + html
            )
        }
    }
}