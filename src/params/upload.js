"use strict";
exports.__esModule = true;
exports["default"] = {
    name: "| 发到后台的文件参数名                                         | string      | 'file'  |",
    defaultFileList: '| 默认已经上传的文件列表                           | object[] | 无  |',
    fileList: '| 已经上传的文件列表（受控），使用此参数时，如果遇到 `onChange` 只调用一次的问题，请参考 [#2423](https://github.com/ant-design/ant-design/issues/2423) | object[] | 无 |',
    action: '| 必选参数, 上传的地址                                         | string      | 无    |',
    data: '| 上传所需参数或返回上传参数的方法                   | object\|function(file) | 无    |',
    headers: '| 设置上传的请求头部，IE10 以上有效                    | object      | 无    |',
    showUploadList: '| 是否展示 uploadList, 可设为一个对象，用于单独设定 showPreviewIcon 和 showRemoveIcon | Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean } | true |',
    multiple: '| 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件。  | boolean     | false |',
    accept: '| 接受上传的文件类型    | string      | 无    |',
    beforeUpload: '| 上传文件之前的钩子，参数为上传的文件，若返回 `false` 或者 Promise 则停止上传。**注意：该方法不支持老 IE**。 | (file, fileList) => `boolean | Promise`    | 无    |',
    customRequest: '| 通过覆盖默认的上传行为，可以自定义自己的上传实现 | Function | 无 |',
    onChange: '| 上传文件改变时的状态，详见 onChange                | Function    | 无    |',
    listType: "| 上传列表的内建样式，支持两种基本样式 `text` or `picture`     | string      | 'text'|",
    onPreview: '| 点击文件链接或预览图标时的回调                              | Function(file) | 无    |',
    onRemove: '| 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。| Function(file): `boolean | Promise` | 无   |',
    supportServerRender: '| 服务端渲染时需要打开这个                           | boolean | false    |',
    disabled: '| 是否禁用                           | boolean | false    |',
    withCredentials: '| 上传请求时是否携带 cookie | boolean | false |'
};
