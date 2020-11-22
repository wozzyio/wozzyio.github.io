all: build clean moveBuild

build:
	cd wozzyio; npm run deploy;

clean:
	find . ! -name 'Makefile' ! -name 'LICENSE' ! -name 'CHANGELOG.md' ! -name 'wozzyio' ! -name '.git' ! -name '.gitignore' ! -name 'README.md' -type d -exec rm -rf {} +

moveBuild:
	cd wozzyio/public; cp -r * ../../
