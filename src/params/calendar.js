"use strict";
exports.__esModule = true;
exports["default"] = {
    value: '| 展示日期       | [moment](http://momentjs.com/)     | 当前日期     |',
    defaultValue: '| 默认展示的日期  | [moment](http://momentjs.com/)     | 默认日期     |',
    mode: '| 初始模式，`month/year` | string | month  |',
    fullscreen: '| 是否全屏显示   | boolean     | true         |',
    dateCellRender: '| 自定义渲染日期单元格，返回内容会被追加到单元格| function(date: moment): ReactNode   | 无 |',
    monthCellRender: '| 自定义渲染月单元格，返回内容会被追加到单元格  | function(date: moment): ReactNode   | 无 |',
    dateFullCellRender: '| 自定义渲染日期单元格，返回内容覆盖单元格| function(date: moment): ReactNode   | 无 |',
    monthFullCellRender: '| 自定义渲染月单元格，返回内容覆盖单元格  | function(date: moment): ReactNode   | 无 |',
    locale: '| 国际化配置     | object   | [默认配置](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json)  |',
    onPanelChange: '| 日期面板变化回调 | function(date: moment, mode: string) | 无 |',
    onSelect: '| 点击选择日期回调 | function(date: moment）              | 无 |'
};
