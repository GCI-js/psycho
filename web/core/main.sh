export _CMD_HOME=$( cd $( dirname $BASH_SOURCE )/.. && pwd )

if [[ "$1" != initialization ]]
then
    source $_CMD_HOME/core/main.sh initialization
    return
fi


__args()
{
    local arg
    echo
    for arg in $( ls $_CMD_HOME/cmd )
    do
        echo $'\t'$arg
    done
    echo
    for arg in $( ls $_CMD_HOME/core/cmd )
    do
        echo $'\t'$arg
    done
}

__tab() 
{
    local pat="^cmd\s+\S+\s+.*$"
    if [[ "${COMP_WORDS[@]}" =~ $pat ]]
    then
        compopt -o default
        COMPREPLY=()
    else
        COMPREPLY=(
            $( compgen -W "$( __args )" -- "${COMP_WORDS[COMP_CWORD]}" )
        )
    fi
}

__help()
{
    echo "[cmd]"
    __args
}


cmd()
{
    cd $_CMD_HOME
    local args=( $@ )
    local spell=${args[0]}
    local _arguments=${args[@]:1}
    
    local file=$_CMD_HOME/cmd/$spell/main.sh
    local _file=$_CMD_HOME/core/cmd/$spell/main.sh

    local chk=
    local _subprocess_check=
    [[ ! -e $_file ]] || chk=0
    [[ ! -e $file ]] || chk=1
    [[ ! -z $spell ]] || chk=
    if [[ -z $chk ]]
    then
        __help
        return 1
    fi
    [[ $spell =~ ^- ]] || _subprocess_check=0
    [[ $chk == 1 ]] || file=$_file

    if [[ -z $_subprocess_check ]]
    then
        source $file "$_arguments"
    fi

    (
        export PATH=$_CMD_HOME/env/bin${PATH:+:$PATH}
        export PYTHONPATH=$_CMD_HOME/core/src/python${PYTHONPATH:+:$PYTHONPATH}
        export PYTHONPATH=$_CMD_HOME/src/python:$PYTHONPATH
        alias python=python3

        local bash_src_path=$_CMD_HOME/core/src/bash
        . $bash_src_path/cmd/init.sh
        . $bash_src_path/tools/init.sh

        tools.mkdir env
        cmd.check-bash
        run()
        {
            cmd.trap && source $file "$_arguments"
        }
        eval run
    )
}


complete -F __tab cmd
__help
