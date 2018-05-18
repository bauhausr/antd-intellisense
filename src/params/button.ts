export default {
    ghost: '幽灵属性，使按钮背景透明，版本 2.7 中增加 | boolean | false',
    href: '点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | -',
    htmlType: '设置 button 原生的 type 值，可选值请参考 HTML 标准 | string | button',
    type: '设置按钮类型，可选值为 `primary` `dashed` `danger`(版本 2.7 中增加) 或者不设 | string | -',
    icon: '设置按钮的图标类型 | string | -',
    shape: '设置按钮形状，可选值为 `circle` 或者不设 | string | -',
    size: '设置按钮大小，可选值为 `small` `large` 或者不设 | string | `default`',
    loading: '设置按钮载入状态 | boolean \| { delay: number } | `false`',
    onClick: '`click` 事件的 handler | function | -'
}