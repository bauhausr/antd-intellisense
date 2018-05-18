export default {
    visible:    '| 对话框是否可见 | boolean          | 无           |',
    confirmLoading: '| 确定按钮 loading | boolean    | 无           |',
    title:      '| 标题           | string\|ReactNode | 无           |',
    closable:   '| 是否显示右上角的关闭按钮 | boolean    | true        |',
    onOk:       '| 点击确定回调       | function(e)     | 无           |',
    onCancel:   '| 点击遮罩层或右上角叉或取消按钮的回调  | function(e)  | 无         |',
    width:      '| 宽度           | string\|number | 520           |',
    footer:     '| 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}` | string\|ReactNode | 确定取消按钮 |',
    okText:     '| 确认按钮文字    | string           | 确定       |',
    cancelText: '| 取消按钮文字    | string           | 取消       |',
    maskClosable: '| 点击蒙层是否允许关闭 | boolean   | true       |',
    style: '可用于设置浮层的样式，调整浮层位置等 | object   | - |',
    wrapClassName: '| 对话框外层容器的类名 | string   | - |',
    afterClose: '| Modal 完全关闭后的回调 | function | 无 |'
}