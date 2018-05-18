"use strict";
exports.__esModule = true;
exports["default"] = {
    trigger: "触发下拉的行为   | Array<'click'\|'hover'> | ['hover']        |",
    overlay: '菜单         | [Menu](/components/menu) | -     |',
    getPopupContainer: '菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 | Function(triggerNode) | () => document.body |',
    visible: '菜单是否显示 | boolean   | -           |',
    onVisibleChange: '菜单显示状态改变时调用，参数为 visible | Function(visible) | - |',
    placement: '菜单弹出位置：`bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight` | String | `bottomLeft` |'
};
