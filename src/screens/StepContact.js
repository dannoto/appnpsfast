import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Alert, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';
import { Text, Button, IconButton } from 'react-native-paper';
import Styles from '../config/Styles';
import ColorsApp from '../config/ColorsApp';
import { useNavigation } from '@react-navigation/native';

import Footer from '../components/Footer';
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useKeepAwake } from 'expo-keep-awake';


export default function StepContact(props) {

    useKeepAwake();

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
                codCliente = result

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
                telefone1 = data.telefone

            } else {
                contato = "Anonimo"
                email = null
                telefone1 = null
            }
        }
        )

        await AsyncStorage.getItem('codPontoContato', (error, result) => {
            console.log('Pegou codPontoContato: ' + result)

            if (result) {
                // console.log(result)
                codPontoContato = result

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


        var resposta = {
            "codClienteFastQuest": codCliente,
            "codFilial": codFilial,
            "contato": contato,
            "email": email,
            "ddd1": ddd1,
            "telefone1": telefone1,
            "codPontoContato": codPontoContato,
            "codStatus": 102,
            "respostas": respostas
        }

        console.log(resposta)


        if (respostas.length > 0) {

            npsEnviarRespostas(token, respostas).then((response) => {

                console.log("resposta enviada")
                console.log(response)

            }).catch((error) => {

                console.log("erro ao enviar resposta")
                console.log(error)

            })


        } else {
            console.log("nao tem respostas, ent n enviou")

        }

        resetRoute();
        onChangeScreen('runpesquisa')



    }






    useEffect(() => {
        const interval = setInterval(() => {


            var savedData = "";


            AsyncStorage.getItem('expiration', (error, result) => {

                if (result) {
                    // console.log(result);
                    savedData = result
                    //   var data = JSON.parse(result)

                    //   if (data.expiration) {

                    //    savedData = data.expiration

                    //   } else {

                    //     // savedData = "00"

                    //   }

                } else {
                    // savedData = "99"
                }

            });

            console.log(savedData)

            // if (savedData !== null) {
            //     // check if we got a valid data before calling JSON.parse
            //     savedData = JSON.parse(savedData);
            //     console.log(savedData)
            // } else {
            //     console.log('savedData é null')
            // }

            const currentTimestamp = Math.floor(Date.now() / 1000); // get current UNIX timestamp. Divide by 1000 to get seconds and round it down

            if (currentTimestamp >= savedData) {
                console.log('   expirouuuuuu')

                sendResposta()
                const storageExpirationTimeInMinutes = 3; // in this case, we only want to keep the data for 30min

                const now = new Date();
                now.setMinutes(now.getMinutes() + storageExpirationTimeInMinutes); // add the expiration time to the current Date time
                const expiryTimeInTimestamp = Math.floor(now.getTime() / 1000); // convert the expiry time in UNIX timestamp


                AsyncStorage.setItem(
                    'expiration',
                    JSON.stringify(expiryTimeInTimestamp)
                );
            } else {
                console.log(' nao  expirouuuuuu')
            }

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


        AsyncStorage.setItem(
            'dataRespondente',
            JSON.stringify({ nome: nome, email: email, telefone: telefone })
        );





        onChangeScreen('stepobrigado')
    }


    console.log(orientation)


    return (

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

            <SafeAreaView style={{ flex: 1, height: '100%', backgroundColor: '#FFF' }}>
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
                    <TextInput
                        multiline={false}
                        numberOfLines={1}
                        value={telefone}
                        onChangeText={text => setTelefone(text)}
                        keyboardType="numeric"
                        style={screenWidth >= 768 ? Styles.InputDefaultTablet : Styles.InputDefault}
                    />

                    <Text style={{ marginBottom: 20 }}></Text>

                    <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ButtonNpsFullTablet : Styles.ButtonNpsFull]} >
                        {/* <View style={screenWidth >= 768 ? Styles.ButtonViewSugestionTablet : Styles.ButtonViewSugestion} > */}
                        <Text style={screenWidth >= 768 ? Styles.ButtonTextSugestionTablet : Styles.ButtonTextSugestion} >AVANÇAR</Text>
                        <IconButton icon="arrow-right-thin" iconColor={ColorsApp.PRIMARY} size={40} style={screenWidth >= 768 ? Styles.ButtonIconSugestionTablet : Styles.ButtonIconSugestion} ></IconButton>
                        {/* </View> */}
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => { sendNPS() }} >

                        <Text style={screenWidth >= 768 ? Styles.NextSugestionTablet : Styles.NextSugestion} >RETORNAR PARA A TELA PRINCIPAL</Text>

                    </TouchableOpacity>

                </View>
                <Footer />
            </SafeAreaView>
        </ScrollView>

    );



}
