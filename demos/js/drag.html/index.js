(function () {

    /**
     * @typedef  ChannelMessage
     * @property {string} type
     * @property {any}    data
     */

    /** 可移动元素 */
    let block = document.getElementById('block');

    /** 初始化按钮 */
    let btn = document.getElementById('init-btn');

    /** 跨标签通信广播 */
    let channel = new BroadcastChannel('DataTransfer');

    /** 页面相对于窗口边缘的水平距离 */
    let offsetX = 0;

    /** 页面相对于窗口边缘的垂直距离 */
    let offsetY = 0;

    /**
     * @description 转换坐标值
     * @param {'p2s'|'s2p'} type
     * @param {object} coords
     * @param {number} coords.x
     * @param {number} coords.y
     */
    function convertCoords(type, coords) {

        let { x, y } = coords;
        let { screenLeft, screenTop } = window;

        switch (type) {
            // 页面坐标 -> 屏幕坐标
            case 'p2s':
                return {
                    x: x + screenLeft + offsetX,
                    y: y + screenTop + offsetY,
                };
            // 屏幕坐标 -> 页面坐标
            case 's2p':
                return {
                    x: x - screenLeft - offsetX,
                    y: y - screenTop - offsetY,
                };
            default:
                console.error('转换失败：类型错误');
                return { x: 0, y: 0 };
        }

    }

    /**
     * @description 处理校准距离
     * @param {object} data
     * @param {number} data.x
     * @param {number} data.y
     */
    function handleAdjustOffset(data) {

        console.log('[AdjustOffset]', data);

        offsetX = data.x;
        offsetY = data.y;

        if (btn) {
            btn.remove();
        }

    }

    /**
     * @description 处理元素坐标更新
     * @param {object} data
     * @param {number} data.x 相对于屏幕的水平坐标
     * @param {number} data.y 相对于屏幕的垂直坐标
     */
    function handleUpdateCoords(data) {
        let { x, y } = convertCoords('s2p', data);
        block.style.left = x + 'px';
        block.style.top = y + 'px';
    }

    /** 初始化元素坐标 */
    function initElementCoords() {

        /** 元素宽度 */
        let elementW = block.clientWidth;

        /** 元素高度 */
        let elementH = block.clientHeight;

        /** 页面宽度 */
        let windowW = window.innerWidth;

        /** 页面高度 */
        let windowH = window.innerHeight;

        // 将元素移动到页面中心
        block.style.left = Math.round(windowW / 2 - elementW / 2) + 'px';
        block.style.top = Math.round(windowH / 2 - elementH / 2) + 'px';

    }

    /**
     * @description 解析广播消息
     * @param   {MessageEvent<ChannelMessage>} event
     * @returns {ChannelMessage}
     */
    function parseChannelMessage(event) {

        let data = event.data;

        if (data && data.type) {
            return data;
        } else {
            return {
                type: '',
                data: null,
            };
        }

    }

    // 处理元素拖拽
    block.addEventListener('mousedown', function (downEvent) {

        /** 元素相对于屏幕的坐标 */
        let elementCoords = convertCoords('p2s', {
            x: parseInt(block.style.left),
            y: parseInt(block.style.top),
        });

        /** 元素起始水平坐标 */
        let elementX = elementCoords.x;

        /** 元素起始垂直坐标 */
        let elementY = elementCoords.y;

        /** 鼠标起始水平坐标 */
        let cursorX = downEvent.screenX;

        /** 鼠标起始垂直坐标 */
        let cursorY = downEvent.screenY;

        /**
         * @description 处理鼠标移动
         * @param {MouseEvent} moveEvent
         */
        let handleMove = function (moveEvent) {

            let newX = elementX + (moveEvent.screenX - cursorX);
            let newY = elementY + (moveEvent.screenY - cursorY);

            let coords = { x: newX, y: newY };

            // 更新当前页面元素坐标
            handleUpdateCoords(coords);

            // 通知其他页面
            channel.postMessage({
                type: 'UpdateCoords',
                data: coords,
            });

        };

        let handleUp = function () {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleUp);
        };

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mouseup', handleUp);

    });

    // 处理按钮点击
    btn.addEventListener('click', function (ev) {

        let { pageX, pageY, screenX, screenY } = ev;

        let offsetX = 0, offsetY = 0;
        let relativeX = screenX - window.screenLeft;
        let relativeY = screenY - window.screenTop;

        while (relativeX > pageX) {
            offsetX++;
            relativeX--;
        }

        while (relativeY > pageY) {
            offsetY++;
            relativeY--;
        }

        // 更新当前页面数据
        handleAdjustOffset({
            x: offsetX,
            y: offsetY,
        });

        // 通知其他页面更新数据
        channel.postMessage({
            type: 'AdjustOffset',
            data: { x: offsetX, y: offsetY },
        });

        // 获取元素相对于屏幕的坐标，用于同步其他页面
        let coords = convertCoords('p2s', {
            x: parseInt(block.style.left),
            y: parseInt(block.style.top),
        });

        // 更新当前页面元素的坐标
        handleUpdateCoords(coords);

        // 通知其他页面更新元素坐标
        channel.postMessage({
            type: 'UpdateCoords',
            data: coords,
        });

    });

    // 处理广播消息
    channel.addEventListener('message', function (ev) {

        let { data, type } = parseChannelMessage(ev);

        switch (type) {
            case 'AdjustOffset':
                handleAdjustOffset(data);
                break;
            case 'UpdateCoords':
                handleUpdateCoords(data);
                break;
            default:
                break;
        }

    });

    initElementCoords();

})();