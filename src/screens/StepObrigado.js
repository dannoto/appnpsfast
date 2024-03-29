import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Alert, TouchableOpacity, Image, Dimensions, Text, TextInput, Button } from 'react-native';
import Styles from '../config/Styles';
import ColorsApp from '../config/ColorsApp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IconButton } from 'react-native-paper';

import Footer from '../components/Footer';
import Header from '../components/Header';

import { npsEnviarRespostas } from '../config/DataApp';
import { useIsFocused } from "@react-navigation/native";
import { useKeepAwake } from 'expo-keep-awake';

import AppLoading from '../components/AppLoading';
import * as Device from 'expo-device';

export default function StepObrigado(props) {

    useKeepAwake();

    const [deviceType, setDeviceType] = useState("")
    const [orientation, setOrientation] = useState("PORTRAIT");

    Device.getDeviceTypeAsync().then((v) => {
        setDeviceType(v)
    })

    // Orientation   

    useEffect(() => {

        Dimensions.addEventListener('change', ({ window: { width, height } }) => {

            if (width < height) {

                setOrientation("PORTRAIT")


            } else {

                setOrientation("LANDSCAPE")


            }
            console.log(orientation)

        })


    }, [orientation]);

    console.log('======== PAGINA - STEP OBRIGADO =============')

    const isFocused = useIsFocused();

    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [loading, setLoading] = useState(false);



    const [IconSize, setIconSize] = useState("");
    const [countDown, setCountDown] = useState();


    useEffect(() => {

        const interval = setInterval(() => {

            AsyncStorage.getItem('final_expiration', (error, Xexpiracao) => {


                if (Xexpiracao) {

                    console.log(' TEM FINAL_EXPIRATION');

                    const currentTimestamp = Math.floor(Date.now() / 1000);
                    console.log('EXPIRAÇÃO FINAL : HORA AGORA: ' + currentTimestamp + ' timestamp armazenado SALVO  ' + Xexpiracao)

                    if (currentTimestamp >= Xexpiracao) {

                        console.log('[*] EXPIROU O TEMPO ' + Xexpiracao)
                        onChangeScreen('runpesquisa')

                    } else {
                        console.log('.')
                    }

                } else {

                    console.log('NÃO TEM FINAL_EXPIRATION, CRIANDO');

                    const storageExpirationTimeInMinutes = 10; // in this case, we only want to keep the data for 30min

                    const now = new Date();
                    now.setSeconds(now.getSeconds() + storageExpirationTimeInMinutes); // add the expiration time to the current Date time
                    const expiryTimeInTimestamp = Math.floor(now.getTime() / 1000); // convert the expiry time in UNIX timestamp

                    console.log('=================NOVA EXPIRAÇÃO '+expiryTimeInTimestamp)

                    AsyncStorage.setItem(
                        'final_expiration',
                        JSON.stringify(expiryTimeInTimestamp)
                    );
                }
            });

        }, 1000);

        return () => clearInterval(interval);
    }, [countDown]);



    useEffect(() => {


        if (deviceType != 1) {
            setIconSize(120)

        } else {

            setIconSize(80)
        }



        const resetRoute = () => {

            AsyncStorage.setItem(
                'currentIndex',
                JSON.stringify(0)
            );

            AsyncStorage.removeItem('dataAnswer');
            AsyncStorage.removeItem('dataRespondente');
            AsyncStorage.removeItem('final_expiration');
            // AsyncStorage.removeItem('currentType');
            // AsyncStorage.removeItem('codCliente');
            // AsyncStorage.removeItem('dataQuestions');
        }


        const sendResposta = async () => {

            var token = null;
            var codCliente = null;
            var codFilial = null;
            var contato = null;
            var email = null;
            var ddd1 = null;
            var telefone1 = null;
            var codPontoContato = null;
            var respostas = [];

            await AsyncStorage.getItem('codFilial', (error, result) => {
                console.log('Pegou codFilial: ' + result)

                if (result) {
                    // console.log(result)
                    codFilial = parseInt(result)

                } else {
                    codFilial = null
                }
            }
            )

            await AsyncStorage.getItem('auth', (error, result) => {
                console.log('Pegou auth: ' + result)

                var data = JSON.parse(result)

                if (data.token) {
                    // console.log(result)
                    token = data.token

                } else {
                    token = null
                }
            }
            )

            await AsyncStorage.getItem('codCliente', (error, result) => {
                console.log('Pegou codCliente: ' + result)

                if (result) {
                    // console.log(result)
                    codCliente = parseInt(result)

                } else {
                    codCliente = null
                }
            }
            )

            await AsyncStorage.getItem('dataRespondente', (error, result) => {
                console.log('Pegou dataRespondente: ' + result)

                if (result) {

                    var data = JSON.parse(result)
                    // console.log(result)
                    if (data.nome.length > 0) {

                        contato = data.nome
                    } else {
                        contato = "Anonimo"
                    }
                    email = data.email
                    telefone1 = data.telefone.substring(2);
                    ddd1 = data.telefone.substring(0, 2);
                    
    
                } else {
                    contato = "Anonimo"
                    email = null
                    telefone1 = null
                    ddd1 = null
                }
            }
            )

            await AsyncStorage.getItem('codPontoContato', (error, result) => {
                console.log('Pegou codPontoContato: ' + result)

                if (result) {
                    // console.log(result)
                    codPontoContato = parseInt(result)

                } else {
                    codPontoContato = null
                }
            })

            await AsyncStorage.getItem('dataAnswer', (error, result) => {
                console.log('Pegou dataAnswer: ')
                // console.log(result)

                if (result) {

                    var data = JSON.parse(result)

                    console.log(data.answers)

                    respostas = data.answers

                } else {
                    respostas = []
                }
            }
            )


            let data = new Date();
            let data2 = new Date(data.valueOf() - data.getTimezoneOffset() * 60000);
            var dataFormatada = data2.toISOString().replace(/\.\d{3}Z$/, '');

            var dataResposta = {
                // "dataEntrevista": dataFormatada,
                "codClienteFastQuest": codCliente,
                "codFilial": codFilial,
                "contato": contato,
                "email": email,
                "ddd1": ddd1,
                "dataEntrevista": dataFormatada,
                "telefone1": telefone1,
                "codPontoContato": codPontoContato,
                "codStatus": 102,
                "respostas": respostas
            }


            if (respostas.length > 0) {

                npsEnviarRespostas(token, dataResposta).then((response) => {

                    console.log("[*] RESPOSTA ENVIADA : ")
                    console.log(response)

                }).catch((error) => {

                    console.log("[??] ERRO AO ENVIAR RESPOSTA : ")
                    console.log(error)

                })


            } else {
                console.log("[*] NÃO EXISTE RESPOSTA PARA ENVIAR : ")

            }
            resetRoute();
            setLoading(true)



        }




        sendResposta()
        // resetRoute();




    }, [isFocused]);

    const onChangeScreen = (screen) => {
        props.navigation.navigate(screen);
    };


    useEffect(() => {

        const checkAutentication = async () => {

            // console.log('running auth')

            try {

                await AsyncStorage.getItem('auth', (error, result) => {

                    if (result) {
                        console.log(result);

                        var data = JSON.parse(result)

                        if (data.token) {

                            console.log('sucessfull check autentiocatoin')


                        } else {
                            console.log('no data.token  check autentiocatoin')
                            onChangeScreen('login')


                        }

                    } else {

                        console.log('result false check autentiocatoin')
                        onChangeScreen('login')
                    }

                });

            } catch (error) {

                console.log('catch erroe check autentiocatoin')
                onChangeScreen('login')

            }
        }

        checkAutentication()



    }, []);

    const sendNPS = async () => {

        onChangeScreen('runpesquisa')
    }



    if (!loading) {

        return (

            <AppLoading />

        );

    } else {

       if (orientation == "PORTRAIT") {

        return (

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <SafeAreaView style={{ flex: 1, backgroundColor: ColorsApp.BACK }}>


                    <Header />

                    <View style={deviceType != 1 ? Styles.ContainerObrigadoTablet : Styles.ContainerObrigado}>

                        <View style={{ flex: 1, alignItems: 'center', marginTop:0 }}>

                            <IconButton icon="check-decagram" iconColor={ColorsApp.THIRD} size={IconSize} style={deviceType != 1 ? Styles.IconObrigadoTablet : Styles.IconObrigado} />

                            <Text style={deviceType != 1 ? Styles.TitleObrigadoTablet : Styles.TitleObrigado}>SUA RESPOSTA foi ENVIADA com sucesso</Text>
                            <Text style={deviceType != 1 ? Styles.SubtitleObrigadoTablet : Styles.SubtitleObrigado}>Volte sempre, adoramos ter você por aqui.</Text>


                            <TouchableOpacity onPress={() => { sendNPS() }} style={{ marginTop: 25,  marginBottom:30 }}>
                                <Text style={deviceType != 1 ? Styles.ReturnTextObrigadoTablet : Styles.ReturnTextObrigado}>retornar para a tela principal</Text>
                            </TouchableOpacity>


                        </View>
                    </View>

                    <Footer />



                </SafeAreaView>
            </ScrollView>


        );

       } else {

        return (

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: ColorsApp.BACK }}>


                <Header />

                <View style={deviceType != 1 ? Styles.ContainerObrigadoTablet : Styles.ContainerObrigado}>

                    <View style={{ flex: 1, alignItems: 'center', marginTop:0 }}>

                        <IconButton icon="check-decagram" iconColor={ColorsApp.THIRD} size={IconSize} style={deviceType != 1 ? Styles.IconObrigadoTablet : Styles.IconObrigado} />

                        <Text style={deviceType != 1 ? Styles.TitleObrigadoTablet : Styles.TitleObrigado}>SUA RESPOSTA foi ENVIADA com sucesso</Text>
                        <Text style={deviceType != 1 ? Styles.SubtitleObrigadoTablet : Styles.SubtitleObrigado}>Volte sempre, adoramos ter você por aqui.</Text>


                        <TouchableOpacity onPress={() => { sendNPS() }} style={{ marginTop: 25,  marginBottom:30 }}>
                            <Text style={deviceType != 1 ? Styles.ReturnTextObrigadoTablet : Styles.ReturnTextObrigado}>retornar para a tela principal</Text>
                        </TouchableOpacity>


                    </View>
                </View>

                <Footer />



            </SafeAreaView>
        </ScrollView>

        );

       }

    }
}
