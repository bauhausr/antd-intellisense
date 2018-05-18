export default {
    count:          '| 展示的数字，大于 overflowCount 时显示为 `${overflowCount}+`，为 0 时隐藏 | number | |',
    overflowCount:  '| 展示封顶的数字值                 | number | 99 |',
    showZero:      '| 当数值为 0 时，是否展示 Badge   | boolean | false |',
    dot:            '| 不展示数字，只有一个小红点       | boolean | false  |',
    status:         "| 设置 Badge 为状态点            | Enum{ 'success', 'processing, 'default', 'error', 'warning' } | '' |",
    text:           "| 在设置了 `status` 的前提下有效，设置状态点的文本  | string | '' |"
}