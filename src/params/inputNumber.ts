export default {
    min:     '| 最小值   | number | -Infinity        |',
    max:     '| 最大值       | number      | Infinity           |',
    value:     '| 当前值       | number      |            |',
    step:     '| 每次改变步数，可以为小数  | number\|string      |  1      |',
    defaultValue:     '| 初始值       | number      |            |',
    onChange:     '| 变化回调       | Function(value: number \| string) |            |',
    disabled:     '| 禁用       | boolean      |      false      |',
    size:    '| 输入框大小  | string      |      无      |',
    formatter: '| 指定输入框展示值的格式 | function(value: number \| string): string | - |',
    parser: '| 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用 | function( string): number | - |'
}