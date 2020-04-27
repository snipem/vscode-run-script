# Development

This is a document about developing and testing the runscript extension

## Run the Extension

Use F5 -> Run Extension. A new VS Code instance should open, you can run the extension from their with the normal user experience with Cmd+P "Run Script".

## Run Tests of the Extension

Use F5 -> Extension Tests. A new VS Code instance will open and runs the tests in background. Open the "Debug Console" in the main VS Code instance (the one you're developing in) to see the results. The new instance will close after running the tests:

```
Write-Good Linter active...

  Extension Test Suite
    ✓ Parse run statement
  1 passing (240ms)
```

## Publishing the Extension

### Create token

Create token for `vsce` from https://dev.azure.com/matthiaskuech/_usersSettings/tokens.

### Login

```bash
$ vsce login matthiaskuech
Publisher 'matthiaskuech' is already known
Do you want to overwrite its PAT? [y/N] y
Personal Access Token for publisher 'matthiaskuech': ****************************************************
```

Check mails from Azure DevOps for Deep Link to the token creation screen.

> Summary
> Name	vscode-runscript
> Scopes	All scopes
> Expiring on	7/26/2020
> Origination IP	****
> User agent	Mozilla/5.0 ****

### Publish

`make publish`. Run in Terminal without VSCode for automated UI testing.

### Info

Get info about extension:

`vsce show matthiaskuech.run-script`
