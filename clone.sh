echo cloning new component: $1
mkdir -p $1
echo ==copy demo folder
cp -rf ./demo $1/
echo ==copy component folder
cp -rf ./component $1/component
echo ==copy .gitignore
cp ./.gitignore $1/
echo ==copy .npmignore
cp ./.npmignore $1/
echo ==copy README.md
cp ./README-COMPONENT.md $1/README.md
echo ==copy RELEASES.md
cp ./RELEASES.md $1/
echo ==copy todo
cp ./todo-component $1/todo
echo ==copy webpack.config.js
cp ./webpack.config.js $1/
echo ==copy package.json
cp ./package.json $1/
echo "==DON'T forget to update package.json with new component related data"
