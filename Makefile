# run: make
build:
	vsce package
	
publish: test
	vsce publish

test:
	npm run test

upgrade_dependencies:
	# Edit package.json first
	npm i --package-lock-only
