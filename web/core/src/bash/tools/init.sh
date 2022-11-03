alias tools.path='echo $( cd $( dirname $BASH_SOURCE ) && pwd )'

tools.is-path()
{
    local err_code=0
    local path=$@
    [[ -d "$path" ]] || err_code=$?
    return $err_code
}

tools.mkdir()
{
    local args=( $@ )
    local tgt_path=${args[0]}/
    local str=$tgt_path
    local path=
    while [[ ! -z $str ]]
    do
        str=${str#*/}
        path=${tgt_path%$str}
        [[ -e $path ]] && continue
        echo $path
        mkdir $path
    done
}

tools.rm()
{
    local paths=$@
    local path
    for path in $paths
    do
        [[ ! -e $path ]] || rm -rf $path
    done
}

tools.cd()
{
    local args=( $@ )
    local path=${args[0]}
    utils.mkdir $path
    cd $path
}

tools.parse()
{
    local key="$1" target="$2"
    python -m tools.parse "$key" "$target" 2> /dev/null
}
