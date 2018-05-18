"use strict";
exports.__esModule = true;
exports["default"] = {
    dataSource: '| 数据源，其中的数据将会被渲染到左边一栏中，`targetKeys` 中指定的除外。 | [TransferItem](https://git.io/vMM64)[] | [] |',
    render: '| 每行数据渲染函数，该函数的入参为 `dataSource` 中的项，返回值为 ReactElement | Function(record)  |     |',
    targetKeys: '| 显示在右侧框数据的key集合 | string[]  | [] |',
    selectedKeys: '| 设置哪些项应该被选中 | string[] | [] |',
    onChange: '| 选项在两栏之间转移时的回调函数 | (targetKeys, direction, moveKeys): void |  |',
    onSelectChange: '| 选中项发生改变时的回调函数 | (sourceSelectedKeys, targetSelectedKeys): void | |',
    onScroll: '| 选项列表滚动时的回调函数 | (direction, event): void | |',
    listStyle: '| 两个穿梭框的自定义样式 | object |  |',
    className: '| 自定义类 | string |  |',
    titles: "| 标题集合,顺序从左至右 | string[] | ['', ''] |",
    operations: '| 操作文案集合,顺序从上至下 | string[] | [] |',
    showSearch: '| 是否显示搜索框 | boolean | false |',
    filterOption: '| 接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`。| (inputValue, option): boolean | |',
    searchPlaceholder: "| 搜索框的默认值 | string | '请输入搜索内容' |",
    notFoundContent: "| 当列表为空时显示的内容 | string\|ReactNode | '列表为空'  |",
    footer: '| 底部渲染函数 | (props): ReactNode |  |',
    lazy: '| Transfer 使用了 [react-lazy-load](https://github.com/loktar00/react-lazy-load) 优化性能，这里可以设置相关参数 | object | `{ height: 32, offset: 32 }` |',
    onSearchChange: "| 搜索框内容时改变时的回调函数 | (direction: 'left'\|'right', event: Event): void | - |"
};
