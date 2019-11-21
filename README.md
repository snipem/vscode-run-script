# run-script README

Run scripts via a comment in your file like `# run: bash the_script.sh`

## Features

Searches for a command starting with `run:` in your source file and executes the command following:

```bash
#!/bin/bash
# run: ./this_script.sh

echo "is now executed by run-script"
```

It runs a command in the current terminal. If there is no terminal it will open one. This is basically redundant to the VSCode launch settings but far quicker for easy script development.

Bind `extension.runscript` to a keybinding of your liking. I prefer `, s` together with the [Vim extension](http://aka.ms/vscodevim).

## Requirements

None