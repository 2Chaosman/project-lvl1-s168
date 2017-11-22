install:
	npm install -g
start:
	npm run babel-node -- src/bin/brain-games.js
publish:
	npm publish
lint:
	npm run eslint /brain-games/src/
braineven:
	npm run babel-node -- src/bin/brain-even.js
braincalc:
	npm run babel-node -- src/bin/brain-calc.js
