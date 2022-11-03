cmd.super()
{
    cmd.trap && source $_file "$_arguments"
}


cmd.__guard()
{
    local files=( ${BASH_SOURCE[@]} )
    local file_ct=${#files[@]}
    local files_=${files[@]}
    files_=${files_%%"$_CMD_HOME/core/main.sh"*}
    files=( $files_ )
    if [[ $file_ct == 0 || $file_ct == ${#files[@]} || -z $_subprocess_check ]]
    then
        echo "[$FUNCNAME]"
        echo\
 $'\t'"The function set in the 'cmd' module\
 only can be used when written in 'cmd' related scripts."
        return 1
    fi
}


cmd.trap()
{
    cmd.__guard || return 1
    trap '\
local err_code=$?
local err_line=$(( $LINENO - 2 ))
local err_path=$( cd $( dirname $BASH_SOURCE ) && pwd )
local err_file=$err_path/${BASH_SOURCE##*/}
[[ $err_file == $_CMD_HOME/core/main.sh ]] ||\
 echo "[ERROR] $err_file:$err_line ($err_code)" >&2
return $err_code' ERR
}


cmd.check-bash()
{(
    cmd.__guard || return 1

    local chk=$( bash --version | grep -E "\W5\.1\.[0-9]+\W" )
    [[ -z $chk ]] || return

    cd $_CMD_HOME/env

    local dir_name=bash-5.1.8
    local zip_file=$dir_name.tar.gz
    local src_path=./$dir_name

    wget https://ftp.gnu.org/gnu/bash/$zip_file
    tar -xvf $zip_file

    (
        cd $src_path
        ./configure
        make
    )

    [[ ! -e bin ]] && mkdir bin
    cp $src_path/bash ./bin
    rm -rf $zip_file $src_path
)}
