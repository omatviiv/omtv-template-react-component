echo cloning new component: $1
mkdir -p $1
echo ==copy demo folder
cp -rf ./demo $1/
echo ==copy component folder
cp -rf ./component $1/component
echo ==copy scripts folder
cp -rf ./scripts $1/scripts
echo ==copy .gitignore
cp ./.gitignore $1/
echo ==copy .npmignore
cp ./.npmignore $1/
echo ==copy jestsetup.js
cp ./jestsetup.js $1/
echo ==copy jest.config.js
cp ./jest.config.js $1/
echo ==copy .flowconfig
cp .flowconfig $1/
echo ==copy .babelrc
cp .babelrc $1/
echo ==copy README.md
cp ./README-COMPONENT.md $1/README.md
echo ==copy RELEASES.md
cp ./RELEASES.md $1/
echo ==copy todo
cp ./todo-component.md $1/todo.md
echo ==copy webpack.config.js
cp ./webpack.config.js $1/
echo ==copy package.json
cp ./package.json $1/
echo "==DON'T forget to update package.json with new component related data"
