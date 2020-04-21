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
