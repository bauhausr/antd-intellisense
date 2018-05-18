export default {
    type:       '| 指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error`   | string     | `info`，`banner` 模式下默认值为 `warning`    |',
    closable:   '| 默认不显示关闭按钮                                  | boolean   | 无    |',
    closeText:  '| 自定义关闭按钮                                     | string\|ReactNode   | 无    |',
    message:   '| 警告提示内容                                       | string\|ReactNode   | 无    |',
    description: '| 警告提示的辅助性文字介绍                            | string\|ReactNode   | 无    |',
    onClose:     '| 关闭时触发的回调函数                                | Function   | 无    |',
    showIcon:   '| 是否显示辅助图标                                 | boolean   | false，`banner` 模式下默认值为 true    |',
    banner:   '| 是否用作顶部公告                                 | boolean   | false    |'
}