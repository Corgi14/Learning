const audioElement = document.querySelector('audio')
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

function initCanvas(){
    const size = 500;
    canvas.width = size * devicePixelRatio
    canvas.height = size * devicePixelRatio
    canvas.style.width = canvas.style.height = size + 'px'
    // canvas.style.backgroundColor = 'black'
}

initCanvas()
// let arr = new Array(100).fill(1).map(() => Math.random() * 255)
// draw(arr)
// setInterval(() => {
//     let arr1 = new Array(100).fill(1).map(() => Math.random() * 255)
//     draw(arr1)
// }, 1000);
// draw(new Array(100).fill(1).map(() => Math.random() * 255))
function draw(data, maxvalue) {
    console.log(data)
    context.clearRect(0, 0, canvas.width, canvas.height)
    let centerX = canvas.width / 2
    let centerY = canvas.height / 2
    let radius = 200
    let minAngle = Math.PI/100 * 2
    context.beginPath()
    data.forEach((v, i) => {
        let startX = radius * Math.cos(minAngle * (i + 1)) + centerX
        let startY = radius * Math.sin(minAngle * (i + 1)) + centerY
        context.moveTo(startX, startY)
        let endX = (radius + v) * Math.cos(minAngle * (i + 1)) + centerX
        let endY = (radius + v) * Math.sin(minAngle * (i + 1)) + centerY
        context.lineTo(endX,endY)
        context.strokeStyle = 'rgb(255, i, 0)'
    })
    context.stroke()
}

let isInit = true
let analyser
let buffer

navigator.mediaDevices.getUserMedia({audio: true}).then
((stream) => {
    if (!isInit) return
    const audioContext = new AudioContext()
    analyser = audioContext.createAnalyser()
    analyser.fftSize = 512
    buffer = new Uint8Array(analyser.frequencyBinCount)

    const source = audioContext.createMediaStreamSource(stream)
    source.connect(analyser)

    // analyser.connect(audioContext.destination)
})

// audioElement.onplay = function() {
//     if (!isInit) return
//     const audioContext = new AudioContext()
//     analyser = audioContext.createAnalyser()
//     analyser.fftSize = 512
//     buffer = new Uint8Array(analyser.frequencyBinCount)

//     const source = audioContext.createMediaElementSource(audioElement)
//     source.connect(analyser)

//     analyser.connect(audioContext.destination)
//     isInit = true
// }

function update() {
    requestAnimationFrame(update)
    if(!isInit) return
    // let arr = new Array(100).fill(1).map(() => Math.random() * 255)
    // console.log(arr)
    analyser.getByteFrequencyData(buffer)
    draw(buffer, 255)
}

update()