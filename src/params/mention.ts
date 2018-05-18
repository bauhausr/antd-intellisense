export default {
    suggestions:    '| 建议内容 | Array<string\|Mention.Nav> | [] |',
    suggestionStyle: '| 弹出下拉框样式 | object | {} |',
    onSearchChange: '| 输入框中 @ 变化时回调 | function(value:string, trigger: string) | [] |',
    onChange: '| 输入框内容变化时回调 | function(contentState: ContentState) | null |',
    onSelect: '| 下拉框选择建议时回调 | function(suggestion: string, data?: any) | null |',
    notFoundContent: "| 未找到时的内容 | string | '无匹配结果，轻敲空格完成输入' |",
    loading: '| 加载中 | boolean | false |',
    multiLines: '| 多行模式 | boolean | false |',
    prefix: "| 触发弹出下拉框的字符 | string or Array<string> | '@' |",
    placeholder: '| 输入框默认文字 | string | null |',
    defaultValue: '| 默认值 | ContentState, 可以用 `Mention.toContentState(text)` 或 `Mention.toEditorState(text)`  把文字转换成 ContentState | null |',
    value: '| 值 | ContentState | null |',
    getSuggestionContainer: '| 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位| function() | () => document.body |',
    onFocus: '| 获得焦点时回调 |  function(e) | null |',
    onBlur: '| 失去焦点时回调 | function(e) | null |',
    readOnly: '| 是否只读. | boolean | false |',
    disabled: '| 是否禁用状态. | boolean | false |'
}