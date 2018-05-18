export default {
    type:     '| 类型，可选 `line` `circle` `dashboard` | string   | line      |',
    percent:  '| 百分比 | number | 0 |',
    format:   "| 内容的模板函数 | function(percent)   | `percent => percent + '%'` |",
    status:   '| 状态，可选：`success` `exception` `active` | string   | - |',
    showInfo: '| 是否显示进度数值或状态图标 | boolean | true  |',
    strokeWidth1: 'strokeWidth`(type=line)` | 进度条线的宽度，单位 px | number | 10 |',
    strokeWidth2: 'strokeWidth`(type=circle)` | 圆形进度条线的宽度，单位是进度条画布宽度的百分比 | number | 6 |',
    width: '`(type=circle)` | 圆形进度条画布宽度，单位 px | number | 132 |'
}