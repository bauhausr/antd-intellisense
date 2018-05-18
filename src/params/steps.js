"use strict";
exports.__esModule = true;
exports["default"] = {
    current: '指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 `status` 属性覆盖状态 | number | 0 |',
    status: '指定当前步骤的状态，可选 `wait` `process` `finish` `error` | string | process |',
    size: '指定大小，目前支持普通（`default`）和迷你（`small`）| string | default |',
    direction: '指定步骤条方向。目前支持水平（`horizontal`）和竖直（`vertical`）两种方向 | string | horizontal  |',
    progressDot: '点状步骤条，可以设置为一个 function | Boolean or (iconDot, {index, status, title, description}) => ReactNode | false |'
};
