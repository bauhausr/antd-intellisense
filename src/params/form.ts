export default {
    form: '| 经 `Form.create()` 包装过的组件会自带 `this.props.form` 属性，直接传给 Form 即可。1.7.0 之后无需设置 | object | 无 |',
    layout: "| 表单布局(2.8 之后支持) | 'horizontal'\|'vertical'\|'inline' | 'horizontal' |",
    horizontal: '| 水平排列布局(2.8 之后废弃) | boolean | true |',
    vertical: '| 垂直排列布局(2.8 之后废弃) | boolean | false |',
    inline: '| 行内排列布局(2.8 之后废弃) | boolean | false |',
    onSubmit: '| 数据验证成功后回调事件 | Function(e:Event) |  |',
    hideRequiredMark: '| 隐藏所有表单项的必选标记 | Boolean | false |'
}