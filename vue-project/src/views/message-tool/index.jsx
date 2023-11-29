import {createApp} from 'vue'
import { styled } from '@styils/vue'

const MessageBox = {
    props: {
        msg:{
            type: String,
            required: true,
        }
    },
    render(ctx) {
        const {$props, $emit} = ctx
        return <DivModal>
            <div class='box'>
                <div class='text'>{$props.msg}</div>
                <Button click={$emit('onClick')}>Confirm</Button>
            </div>
        </DivModal>
    }
}
const DivModal = styled('div', {
    position: 'fixed',
    width: '100%',
    height: '100%',
    left:'0',
    top: '0',
    zIndex: '99',
    background: '#00000050',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

})

export default function showMsg(msg, click) {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const app = createApp(MessageBox, {
        msg,
        onClick(){
            click(() => {
                app.unmount()
                div.remove()
            })
        }
    })
    app.mount(div)
}