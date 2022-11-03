[[ -e mosquitto.conf ]] && rm -rf mosquitto.conf
echo "\
listener 1883 0.0.0.0
allow_anonymous true" | tee mosquitto.conf

docker run -it -p 1883:1883 -p 9001:9001\
    -v $PWD/mosquitto.conf:/mosquitto/config/mosquitto.conf\
    -v /mosquitto/data -v /mosquitto/log eclipse-mosquitto
