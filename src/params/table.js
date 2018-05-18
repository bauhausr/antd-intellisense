"use strict";
exports.__esModule = true;
exports["default"] = {
    rowSelection: '| 列表项是否可选择，[配置项](#rowSelection) | object  | null  |',
    pagination: '| 分页器，配置项参考 [pagination](/components/pagination/)，设为 false 时不展示和进行分页 | object |  |',
    size: '| 正常或迷你类型，`default` or `small`  | string | default |',
    dataSource: '| 数据数组 | any[] |            |',
    columns: '| 表格列的配置描述，具体项见下表 | [ColumnProps](https://git.io/vMMXC)[] | - |',
    rowKey: "| 表格行 key 的取值，可以是字符串或一个函数 | string\|Function(record):string | 'key' |",
    rowClassName: '| 表格行的类名      | Function(record, index):string | - |',
    expandedRowRender: '| 额外的展开行 | Function | - |',
    defaultExpandedRowKeys: '| 默认展开的行 | string[] | - |',
    expandedRowKeys: '| 展开的行，控制属性 | string[] | - |',
    defaultExpandAllRows: '| 初始时，是否展开所有行 | boolean | false |',
    onExpandedRowsChange: '| 展开的行变化时触发 | Function(expandedRows) | |',
    onExpand: '| 点击展开图标时触发 | Function(expanded, record) | |',
    onChange: '| 分页、排序、筛选变化时触发 | Function(pagination, filters, sorter) |  |',
    loading: '| 页面是否加载中 | boolean | false |',
    locale: "| 默认文案设置，目前包括排序、过滤、空数据文案 | object | filterConfirm: '确定' <br> filterReset: '重置' <br> emptyText: '暂无数据' <br> [默认值](https://github.com/ant-design/ant-design/issues/575#issuecomment-159169511) |",
    indentSize: '| 展示树形数据时，每层缩进的宽度，以 px 为单位 | number   | 15 |',
    onRowClick: '| 处理行点击事件 | Function(record, index)   | - |',
    bordered: '| 是否展示外边框和列边框 | boolean | false      |',
    showHeader: '| 是否显示表头 | boolean          | true      |',
    footer: '| 表格尾部         | Function(currentPageData)   | |',
    title: '| 表格标题         | Function(currentPageData)   | |',
    scroll: '| 横向或纵向支持滚动，也可用于指定滚动区域的宽高度：`{{ x: true, y: 300 }}` | object   | -  |'
};
