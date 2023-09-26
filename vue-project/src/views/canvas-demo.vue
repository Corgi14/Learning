<template>
    <div>
        <canvas id="myCanvas"></canvas>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
let canvas: HTMLCanvasElement
let context: CanvasRenderingContext2D
let arrSin: number[] = []
let arrCos: number[] = []
let circle: Circle
class Circle {
    x: number
    y: number
    deg: number
    constructor() {
        this.x = 100
        this.y = 100
        this.deg = 0
    }
    update() {
        this.deg += 0.01
    }
    draw() {
        let x = 80 * Math.cos(this.deg) + this.x
        let y = 80 * Math.sin(this.deg) + this.y
        context.beginPath()
        context.arc(x, y, 3, 0, 2 * Math.PI)
        context.fillStyle = "white"
        context.fill()
        context.beginPath()
        context.arc(this.x, this.y, 80, 0, 2 * Math.PI)
        context.strokeStyle = "white"
        context.stroke()
        arrSin.push(y)
        arrCos.push(x)
        context.moveTo(this.x, this.y)
        context.lineTo(x, y)
        context.stroke()
        context.strokeStyle = "yellow"
        context.beginPath()
        context.moveTo(x, y)
        context.lineTo(x, 200)
        context.moveTo(x, y)
        context.lineTo(200, y)
        context.moveTo(200, 300)
        context.lineTo(canvas.width, 300)
        context.moveTo(0, 200)
        context.lineTo(canvas.width, 200)
        context.moveTo(100, 100)
        context.lineTo(canvas.width, 100)
        context.moveTo(200, 0)
        context.lineTo(200, canvas.height)
        context.moveTo(100, 100)
        context.lineTo(100, 200)
        context.stroke()
        context.beginPath()
        context.arc(200, 200, 200 - x, Math.PI / 2, Math.PI)
        context.stroke()
        context.beginPath()
        context.arc(200, 200, 100, Math.PI / 2, Math.PI)
        context.stroke()
    }
}
onMounted(() => {
    canvas = document.getElementById("myCanvas") as HTMLCanvasElement
    canvas.width = 600
    canvas.height = 400
    context = canvas.getContext("2d") as CanvasRenderingContext2D
    setInterval(ani, 100 / 6)
    circle = new Circle()
})

const ani = () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    circle.update()
    circle.draw()
    if (arrSin.length > 314 * 2 * 2) {
        arrSin.splice(0, 1)
        arrCos.splice(0, 1)
    }
    for (let index in arrSin) {
        let i: number = parseInt(index)
        context.beginPath()
        context.arc(200 + i / 1.57, arrSin[arrSin.length - i], 0.5, 0, 2 * Math.PI)
        context.fillStyle = 'red'
        context.fill()
        context.beginPath()
        context.arc(200 + i / 1.57, 400 - arrCos[arrSin.length - i], 0.5, 0, 2 * Math.PI)
        context.fillStyle = 'blue'
        context.fill()
    }
}
</script>