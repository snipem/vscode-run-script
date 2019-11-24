# run: make
build:
	vsce package
	
publish: test
	vsce publish

test:
	npm run test