# run: make
build:
	vsce package
	
publish:
	vsce publish

test:
	npm run test