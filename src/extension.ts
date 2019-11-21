// run: vsce package
import * as vscode from 'vscode';
import { match } from 'minimatch';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('extension.runscript', () => {

		if ( vscode.window.activeTextEditor ) {
			console.debug("Run script: "+ vscode.window.activeTextEditor.document.fileName);

			var fs = require("fs");

			// TODO Use encoding of editor
			var text = fs.readFileSync(vscode.window.activeTextEditor.document.fileName).toString('utf-8');
			var textByLine = text.split("\n");

			textByLine.forEach((line: string) => {
				// TODO end after first match

				// TODO Use comment symbol from syntax highlighter
				var string_to_match = "^(#|\/\/) run: (.*)$";
				var matched_string = line.match(string_to_match);

				if (matched_string && matched_string.index === 0) {
					var run_command = matched_string[2];
					console.debug("Found run command " + run_command);

					var terminal;
					if (vscode.window.activeTerminal) {
						terminal = vscode.window.activeTerminal;
					}
					else {
						terminal = vscode.window.createTerminal();
					}
					terminal.sendText(run_command);
				}
			});
		}

	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
