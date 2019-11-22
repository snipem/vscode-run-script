import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as runscript from '../../extension';
import * as path from 'path';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');
	const pathToTestScripts = path.resolve(__dirname, '../../../') + "/test_workspace/";

	test('Parse run statement', () => {
		assert.equal(runscript.getCommandFromFile(pathToTestScripts + "example_test_script.sh", "utf-8"), "./example_test_script.sh && echo done");
		assert.equal(runscript.getCommandFromFile(pathToTestScripts + "example_test_script.js", "utf-8"), "uname -a");
	});

	test('Run Script in acutal VSCode', () => {

	});
});
