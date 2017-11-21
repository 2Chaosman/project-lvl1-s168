install:
	npm install
start:
	npm run babel-node -- src/bin/brain-games.js
publish:
	npm publish
lint:
	npm run eslint /brain-games/src/
start brain-even:
	npm run babel-node -- src/bin/brain-even.js
