'use strict';
exports.__esModule = true;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode_1 = require("vscode");
var params_1 = require("./params");
var completionTriggerChars = ['"', "'", " ", "."];
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "test" is now active!');
    var jsProvider = vscode_1.languages.registerCompletionItemProvider.apply(vscode_1.languages, ['javascript', {
            provideCompletionItems: function (document, position) {
                var start = new vscode_1.Position(0, 0);
                var range = new vscode_1.Range(start, position);
                var text = document.getText(range);
                // 暂时只匹配import方式引入
                var importRegex = /import[\s\S]*from\s'antd'/g;
                var componentRegex = /<([A-Z][a-zA-Z0-9][^<>]*)\b[^<>]*$/g;
                if (importRegex.test(text) && componentRegex.test(text)) {
                    text.match(componentRegex);
                    var name_1 = RegExp.$1;
                    var params_2 = params_1["default"][name_1];
                    var properties = Object.keys(params_2);
                    var completionItems = properties.map(function (prop) {
                        // CompletionItemKind用于决定提示项前面的icon图标，有多种类型，Class是其中一种
                        // https://code.visualstudio.com/docs/extensionAPI/vscode-api#CompletionItemKind
                        var completionItem = new vscode_1.CompletionItem(prop, vscode_1.CompletionItemKind.Variable);
                        completionItem.detail = params_2[prop];
                        return completionItem;
                    });
                    return completionItems;
                }
                return [];
            }
        }].concat(completionTriggerChars));
    // Add to a list of disposables which are disposed when this extension is deactivated.
    context.subscriptions.push(jsProvider);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
