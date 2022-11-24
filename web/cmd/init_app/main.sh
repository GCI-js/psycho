addComand() {
    value=$1
    txt=$( cat package.json | grep -v "$value" )
    txt=$(
        echo "$txt" | sed 's/"scripts": {/"scripts": { \n    '"$value"',/' )
    echo "$txt" > package.json
}

if [[ -e package.json ]]; then
    rm -rf node_modules package.json package-lock.json
fi

yes | sed 's/y//p' | npm init > /dev/null

npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev sass
npm install --save-dev ts-loader style-loader css-loader sass-loader
npm install --save-dev @types/react @types/react-dom

npm install react react-dom

addComand '"build": "webpack --mode development"'
addComand '"serve": "webpack serve --no-open --host 0.0.0.0 --port 8080"'

if [[ ! -e src ]]; then
    mkdir src
    touch src/index.tsx
fi

line=fs.inotify.max_user_watches=524288
f=/etc/sysctl.conf
txt="\
$( sudo cat "$f" | grep -v "$line" )
$line"
echo "$txt" | sudo tee "$f" > /dev/null && sudo sysctl --load

# file-loader -d
# recharts
# axios
# echarts-for-react
# @react-oauth/google
# react-router-dom