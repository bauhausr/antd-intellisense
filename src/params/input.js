"use strict";
exports.__esModule = true;
exports["default"] = {
    type: '| 声明 input 类型，同原生 input 标签的 type 属性。另外提供 `type="textarea"`。 | string  | `text` |',
    id: '| 输入框的 id | string | |',
    value: '| 输入框内容 | string | |',
    defaultValue: '| 输入框默认内容 | string | |',
    size: '| 控件大小。注：标准表单内的输入框大小限制为 `large`。可选 `large` `default` `small` | string | `default` |',
    disabled: '| 是否禁用状态，默认为 false | boolean | false |',
    addonBefore: '| 带标签的 input，设置前置标签 | string\|ReactNode | |',
    addonAfter: '| 带标签的 input，设置后置标签 | string\|ReactNode | |',
    prefix: '| 带有前缀图标的 input | string\|ReactNode | |',
    suffix: '| 带有后缀图标的 input | string\|ReactNode | |',
    onPressEnter: '| 按下回车的回调 | function(e) | |',
    autosize: '| 自适应内容高度，只对 `type="textarea"` 有效，可设置为 `true|false` 或对象：`{ minRows: 2, maxRows: 6 }` | boolean\|object | false |'
};
