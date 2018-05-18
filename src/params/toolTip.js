"use strict";
exports.__esModule = true;
exports["default"] = {
    placement: '| 气泡框位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string     | top    |',
    getPopupContainer: '| 浮层渲染父节点，默认渲染到 body 上。`2.5.2` 之前请使用 `getTooltipContainer` | Function(triggerNode) | () => document.body |',
    arrowPointAtCenter: '| 箭头是否指向目标元素中心，`antd@1.11+` 支持 | boolean | `false` |',
    visible: '| 用于手动控制浮层显隐                     | boolean       | false  |',
    onVisibleChange: '| 显示隐藏的回调                      | (visible) => void | 无     |',
    mouseEnterDelay: '| 鼠标移入后延时多少才显示 Tooltip，单位：秒 | number | 0 |',
    mouseLeaveDelay: '| 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 | number | 0.1 |',
    trigger: '| 触发行为，可选 `hover/focus/click`       | string        | hover  |',
    overlayClassName: '| 卡片类名                            | string | 无     |',
    overlayStyle: '| 卡片样式                            | object | 无     |'
};
