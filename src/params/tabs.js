"use strict";
exports.__esModule = true;
exports["default"] = {
    activeKey: '| 当前激活 tab 面板的 key                      | string   | 无            |',
    defaultActiveKey: '| 初始化选中面板的 key，如果没有设置 activeKey | string   | 第一个面板    |',
    onChange: '| 切换面板的回调                               | Function | 无            |',
    onTabClick: '| tab 被点击的回调                             | Function | 无            |',
    onPrevClick: '| prev 按钮被点击的回调                         | Function | 无            |',
    onNextClick: '| next 按钮被点击的回调                         | Function | 无            |',
    tabBarExtraContent: '| tab bar 上额外的元素                       | React.ReactNode | 无          |',
    tabBarStyle: '| tar bar 的样式对象                           | object   | -             |',
    type: "| 页签的基本样式，可选 `line`、`card` `editable-card` 类型   | string   | 'line'      |",
    size: "| 大小，提供 `default` 和 `small` 两种大小，仅当 `type='line'` 时生效。  | string   | 'default'      |",
    tabPosition: "| 页签位置，可选值有 `top` `right` `bottom` `left`  | string   | 'top'      |",
    onEdit: '| 新增和删除页签的回调，在 `type="editable-card"` 时有效 | (targetKey, action): void | 无 |',
    hideAdd: '| 是否隐藏加号图标，在 `type="editable-card"` 时有效 | boolean   | false    |',
    animated: '| 是否使用动画切换 Tabs，在 `tabPosition=top|bottom` 时有效 | boolean \| {inkBar:boolean, tabPane:boolean} | true |'
};
