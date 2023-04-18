import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Alert, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';
import { Text, Button, IconButton } from 'react-native-paper';
import Styles from '../config/Styles';
import ColorsApp from '../config/ColorsApp';
import { useNavigation } from '@react-navigation/native';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { npsEnviarRespostas } from '../config/DataApp';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useKeepAwake } from 'expo-keep-awake';

import { MaskedTextInput } from "react-native-mask-text";

import AppLoading from '../components/AppLoading';


export default function StepContact(props) {

    useKeepAwake();

    console.log('======== PAGINA - STEP CONTACT =============')
    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [loading, setLoading] = useState(false);

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");


    const [orientation, setOrientation] = useState("PORTRAIT");
    const [IconSize, setIconSize] = useState(80);

    // Start Expiration Pack
    const [countDown, setCountDown] = useState();


    const resetRoute = () => {

        AsyncStorage.setItem(
            'currentIndex',
            JSON.stringify(0)
        );

        AsyncStorage.removeItem('dataAnswer');
        AsyncStorage.removeItem('dataRespondente');
        // AsyncStorage.removeItem('currentIndex');
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
                codFilial = result

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

        // console.log(resposta)


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
        onChangeScreen('runpesquisa')



    }


    useEffect(() => {
        const interval = setInterval(() => {



            AsyncStorage.getItem('expiration', (error, Xexpiracao) => {


                if (Xexpiracao) {

                    AsyncStorage.getItem('currentIndex', (error, Xindex) => {

                        if (Xindex) {

                            const currentTimestamp = Math.floor(Date.now() / 1000);
                            console.log('HORA AGORA: ' + currentTimestamp + ' timestamp armazenado SALVO  ' + Xexpiracao)

                            if (currentTimestamp >= Xexpiracao) {

                                sendResposta()
                                const storageExpirationTimeInMinutes = 3; // in this case, we only want to keep the data for 30min

                                const now = new Date();
                                now.setMinutes(now.getMinutes() + storageExpirationTimeInMinutes); // add the expiration time to the current Date time
                                const expiryTimeInTimestamp = Math.floor(now.getTime() / 1000); // convert the expiry time in UNIX timestamp


                                AsyncStorage.setItem(
                                    'expiration',
                                    JSON.stringify(expiryTimeInTimestamp)
                                );

                                console.log('[*] EXPIROU O TEMPO ' + Xexpiracao)


                            } else {
                                console.log('.')
                            }




                        } else {
                            console.log('[????] ERROR GET CURRENT INDEX');
                        }

                    });

                } else {
                    console.log('[????] ERROR GET CURRENT EXPIRATION');
                }

            });




        }, 10000);

        return () => clearInterval(interval);
    }, [countDown]);

    //  End Expiration Pack

    useEffect(() => {

        Dimensions.addEventListener('change', ({ window: { width, height } }) => {
            if (width < height) {

                setOrientation("PORTRAIT")

                if (screenWidth >= 768) {
                    setIconSize(150)

                } else {

                    setIconSize(80)
                }

            } else {

                setOrientation("LANDSCAPE")

                if (screenWidth >= 768) {
                    setIconSize(80)

                } else {

                    setIconSize(20)
                }


            }
        })

    }, []);


    const navigation = useNavigation();

    const onChangeScreen = (screen) => {
        navigation.navigate(screen);
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
                            setLoading(true)


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


    const sendNPSSkip = () => {

        onChangeScreen('stepobrigado')

    }

    const sendNPS = async () => {

        const isValidEmail = (input) => {
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (input.match(validRegex)) {

                //   alert("Valid email address!");

                //   document.form1.text1.focus();

                return true;

            } else {

                //   alert("Invalid email address!");

                // document.form1.text1.focus();

                return false;

            }
        }

        const isValidTelefone = (val) => {

            if (telefone.length == 10 || telefone.length == 11) {

                return true;

            } else {
                return false;
            }

        }



        if (nome.length < 2) {

            console.log('nome invalido')
            Alert.alert('Opss', 'Insira um nome válido.', [

                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);

        } else if (!isValidEmail(email)) {
            console.log('email invalido')

            Alert.alert('Opss', 'Insira um e-mail válido.', [

                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);


        } else if (!isValidTelefone(telefone)) {
            console.log('telefone invalido')

            Alert.alert('Opss', 'Insira um telefone válido.', [

                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);


        } else {

            AsyncStorage.setItem(
                'dataRespondente',
                JSON.stringify({ nome: nome, email: email, telefone: telefone })
            );

            onChangeScreen('stepobrigado')

        }

    }


    console.log(orientation)

    if (!loading) {

        return (

            <AppLoading />

        );

    } else {

        return (

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <SafeAreaView style={{ flex: 1, height: '100%', backgroundColor: ColorsApp.BACK }}>
                    <Header />
                    <View style={screenWidth >= 768 ? Styles.ContainerSugestionTablet : Styles.ContainerSugestion}>


                        <Text style={screenWidth >= 768 ? Styles.TitleContactTablet : Styles.TitleContact} > <Text> Muito Obrigado por deixar sua opinião.</Text> </Text>
                        <Text style={screenWidth >= 768 ? Styles.SubTitleContactTablet : Styles.SubTitleContact} >Aproveite e cadastre-se para receber ofertas exclusivas:</Text>


                        <Text style={screenWidth >= 768 ? Styles.LabelSugestionTablet : Styles.LabelSugestion} >Seu Nome</Text>
                        <TextInput
                            multiline={false}
                            numberOfLines={1}
                            value={nome}
                            onChangeText={text => setNome(text)}
                            style={screenWidth >= 768 ? Styles.InputDefaultTablet : Styles.InputDefault}
                        />

                        <Text style={screenWidth >= 768 ? Styles.LabelSugestionTablet : Styles.LabelSugestion} >Seu E-mail</Text>
                        <TextInput
                            multiline={false}
                            numberOfLines={1}
                            value={email}
                            onChangeText={text => setEmail(text)}
                            style={screenWidth >= 768 ? Styles.InputDefaultTablet : Styles.InputDefault}
                        />

                        <Text style={screenWidth >= 768 ? Styles.LabelSugestionTablet : Styles.LabelSugestion} >Seu Telefone</Text>
                        <MaskedTextInput
                            // multiline={false}
                            // numberOfLines={1}
                            mask="99 9 9999-9999"
                            value={telefone}
                            placeholder={"(00) 0 0000-0000"}
                            // onChangeText={text => setTelefone(text)}
                            onChangeText={(text, rawText) => {
                                console.log(text);
                                console.log(rawText);
                                setTelefone(rawText)
                            }}
                            // keyboardType="numeric"
                            style={screenWidth >= 768 ? Styles.InputDefaultTablet : Styles.InputDefault}
                        />

                        <Text style={{ marginBottom: 20 }}></Text>

                        <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ButtonNpsFullTablet : Styles.ButtonNpsFull]} >
                            {/* <View style={screenWidth >= 768 ? Styles.ButtonViewSugestionTablet : Styles.ButtonViewSugestion} > */}
                            <Text style={screenWidth >= 768 ? Styles.ButtonTextSugestionTablet : Styles.ButtonTextSugestion} >AVANÇAR</Text>
                            <IconButton icon="arrow-right-thin" iconColor={ColorsApp.PRIMARY} size={40} style={screenWidth >= 768 ? Styles.ButtonIconSugestionTablet : Styles.ButtonIconSugestion} ></IconButton>
                            {/* </View> */}
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => { sendNPSSkip() }} >

                            <Text style={screenWidth >= 768 ? Styles.NextSugestionTablet : Styles.NextSugestion} >PULAR ESSA ETAPA</Text>

                        </TouchableOpacity>

                    </View>
                    <Footer />
                </SafeAreaView>
            </ScrollView>

        );

    }


}
