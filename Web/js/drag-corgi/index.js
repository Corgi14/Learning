(function () {
    // const reset = document.getElementById("reset")
    // reset.addEventListener("click", (e) => {
    //     channel.postMessage("message it self")
    // })
    const channel = new BroadcastChannel("demo-channel")
    channel.addEventListener("message", (e) => {
        data = e.data
        block.style.left = data.x - window.screenX + "px"
        block.style.top = data.y - window.screenY + "px"
    })
    const block = document.getElementById("block")
    block.addEventListener("mousedown", (e) => {
        var initialX = e.clientX;
        var initialY = e.clientY;

        // 记录目标div元素的初始位置
        var targetX = block.offsetLeft;
        var targetY = block.offsetTop;

        // 在鼠标按下事件监听函数中给文档添加鼠标移动事件监听器
        document.addEventListener("mousemove", updatePosition);

        // 在鼠标松开事件监听函数中移除鼠标移动事件监听器
        document.addEventListener("mouseup", function () {
            document.removeEventListener("mousemove", updatePosition);
        });

        function updatePosition(event) {
            // 计算当前鼠标位置和初始位置的差值
            var deltaX = event.clientX - initialX;
            var deltaY = event.clientY - initialY;

            // 更新目标div的位置
            block.style.left = targetX + deltaX + "px";
            block.style.top = targetY + deltaY + "px";
            channel.postMessage({ x: targetX + deltaX + window.screenX, y: targetY + deltaY + window.screenY })
        }
    })
})()