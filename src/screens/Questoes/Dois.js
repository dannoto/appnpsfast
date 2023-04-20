import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Alert, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import { TextInput, Button, IconButton } from 'react-native-paper';
import Styles from '../../config/Styles';
import ColorsApp from '../../config/ColorsApp';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';
import { npsEnviarRespostas } from '../../config/DataApp';


import { map } from 'lodash';
import Empty from '../../components/Empty';


import Footer from '../../components/Footer';
import Header from '../../components/Header';

import Loading from '../../components/AppLoading';

import { useKeepAwake } from 'expo-keep-awake';
import AppLoading from '../../components/AppLoading';

import { replaceDescription } from '../../config/Replace';


import * as Device from 'expo-device';


export default function Dois(props) {

    useKeepAwake();

    const [orientation, setOrientation] = useState("PORTRAIT");
    const [deviceType, setDeviceType] = useState("")

    // DeviceType
    Device.getDeviceTypeAsync().then((v) => {
        setDeviceType(v)
    })
    // DeviceType

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

        function getQuestion() {
            setQuestion([]);
            setQuestion(props.route.params);
            setLoading(true)
            // console.log('paraaaaaaaaaaamsssssssssss')
            // console.log(props.route.params)
        }

        getQuestion()

    }, [orientation]);
    // Orientation

    console.log('======== PAGINA - DOIS =============')

    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isActive, setIsActive] = useState(false);

    const [IconSize, setIconSize] = useState(80);

    const [question, setQuestion] = useState([]);
    const [getRespostas, setRespostas] = useState([])





    const labelStyles = [Styles.LabelNPS0, Styles.LabelNPS1, Styles.LabelNPS2, Styles.LabelNPS3, Styles.LabelNPS4, Styles.LabelNPS5, Styles.LabelNPS6, Styles.LabelNPS7, Styles.LabelNPS8, Styles.LabelNPS9, Styles.LabelNPS10];


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


                                if (Xindex != 0) {
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

                                    console.log('[*] EXPIROU O TEMPO, MAS ESTÁ NA 1 PERGUNTA... ' + Xexpiracao)

                                    const storageExpirationTimeInMinutes = 3; // in this case, we only want to keep the data for 30min

                                    const now = new Date();
                                    now.setMinutes(now.getMinutes() + storageExpirationTimeInMinutes); // add the expiration time to the current Date time
                                    const expiryTimeInTimestamp = Math.floor(now.getTime() / 1000); // convert the expiry time in UNIX timestamp


                                    AsyncStorage.setItem(
                                        'expiration',
                                        JSON.stringify(expiryTimeInTimestamp)
                                    );


                                    console.log('[*] CRIANDO UMA NOVA EXPIRAÇÃO... ' + expiryTimeInTimestamp)
                                }
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
                        // console.log(result);

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


    const updateRespostas = (codQuestao, opcao) => {


        const respostaIndex = getRespostas.findIndex((item) => item.codQuestao === codQuestao && item.resposta === "" + opcao + "");

        if (respostaIndex !== -1) {
            // se a resposta já foi selecionada, remove ela do array
            setRespostas([...getRespostas.slice(0, respostaIndex), ...getRespostas.slice(respostaIndex + 1)]);
        } else {
            // se a resposta ainda não foi selecionada, adiciona ela ao array
            setRespostas([...getRespostas, { codQuestao, resposta: "" + opcao + "" }]);
        }
        console.log(getRespostas)
    };

    const sendNPS = async () => {


        // console.log('CODIGO DA QUESTAO: ' + codQuestao + ' RESPOSTA: ' + resposta)

        // Envia a resposta

        const checkResposta = async () => {

            try {

                // Pegando Index
                await AsyncStorage.getItem('dataAnswer', (error, result) => {

                    if (result) {

                        console.log('JA TEM RESPOSTA, INSERINDO MAIS')


                        // var RespY = JSON.parse(getRespostas);

                        var oldAnswer = JSON.parse(result)

                        map(getRespostas, (item, i) => {

                            oldAnswer.answers.push({
                                "codQuestao": item.codQuestao,
                                "resposta": "" + item.resposta + ""
                            });
                        })


                        const newDataAnswer = oldAnswer

                        AsyncStorage.setItem(
                            'dataAnswer',
                            JSON.stringify(newDataAnswer)
                        );



                    } else {

                        AsyncStorage.setItem(
                            'dataAnswer',
                            JSON.stringify(
                                {
                                    answers: [
                                        getRespostas
                                    ]
                                }

                            )
                        );

                    }

                })

            } catch (error) {

                console.log('NAO TEM RESPOSTA, INSERINDO A PRIMEIRA')

            }


        }


        // Gerencia o route
        const newIndex = async (qtd, questions) => {


            try {

                // Pegando Index
                await AsyncStorage.getItem('currentIndex', (error, result) => {

                    if (result) {
                        // console.log('current index: ' + result)

                        // Pegando 
                        // getQuestion(result)
                        if (result == qtd) {

                            console.log('Finalizando ciclo. indo pra contato,  index atual: ' + novaIndex)

                            onChangeScreen('stepcontact')

                        } else {

                            // Icrementeando current index e atualizando
                            var novaIndex = parseInt(result) + 1
                            // console.log('incrementando. Nova index: '+novaIndex)

                            AsyncStorage.setItem(
                                'currentIndex',
                                JSON.stringify(novaIndex)
                            );

                            AsyncStorage.setItem(
                                'currentType',
                                JSON.stringify(questions[novaIndex].codTipoQuestao)
                            );

                            onChangeScreen('runpesquisa')
                        }




                    } else {
                        console.log('n tem current index')
                    }
                })

            } catch (error) {

                console.log('1 CACH ERROR GET INDEX')
                // setIsLoaded(true)
            }
        }

        const manageRoute = async () => {

            try {

                // Pegando Questoes Data
                await AsyncStorage.getItem('dataQuestions', (error, result) => {

                    var result = JSON.parse(result)

                    if (result.questions.length > 0) {

                        var qtd = (result.questions.length - 1)

                        // console.log('qtd total: '+ qtd)

                        // DEfinindo nova index e novo type
                        newIndex(qtd, result.questions)


                    } else {
                        console.log('n tem  questions')
                    }
                    // console.log(result)
                })

            } catch (error) {

                console.log('1 CACH ERROR  get questions')

                // setIsLoaded(true)
            }
        }



        if (getRespostas.length > 0) {
            checkResposta()
            manageRoute()
            // console.log(' > 0 ')

        } else {
            Alert.alert('Opss', 'Selecione ao menos uma resposta.', [

                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }



        // console.log(getRespostas)





    }

    const [selectedOptions, setSelectedOptions] = useState([]);

    const toggleOption = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };


    if (!loading) {
        return (
            <Loading />

        );


    } else {



        if (orientation == "PORTRAIT") {

            if (question.nrQuestao == "RESPOSTA_MULTIPLA_VERTICAL") {

                return (

                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <SafeAreaView style={{ flex: 1, height: '100%', backgroundColor: ColorsApp.BACK, flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Header />
                            <View style={deviceType != 1 ? Styles.ContainerNPSTablet : Styles.ContainerNPS}>
                                <Text style={deviceType != 1 ? Styles.TitleNPSTablet : Styles.TitleNPS}>{replaceDescription(question.descQuestao)}</Text>

                                <View style={deviceType != 1 ? Styles.VerticalDezesseisDivNPSTablet : Styles.VerticalDezesseisDivNPS}>

                                    {map(question.opcoes, (item, i) => (


                                        < View key={i} style={deviceType != 1 ? Styles.VerticalDezesseisItemNPSTablet : Styles.VerticalDezesseisItemNPS} >


                                            <TouchableOpacity onPress={() => { toggleOption(item.opcao); updateRespostas(question.codQuestao, item.opcao) }} style={[deviceType != 1 ? Styles.DezesseisItemTouchNPSTablet : Styles.DezesseisItemTouchNPS, { borderWidth: 1, borderColor: ColorsApp.PRIMARY, backgroundColor: selectedOptions.includes(item.opcao) ? ColorsApp.PRIMARY : "#FFF" }]}
                                            >

                                                <Text style={[deviceType != 1 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS, { color: selectedOptions.includes(item.opcao) ? "#FFF" : ColorsApp.PRIMARY }]}>{item.descOpcao}</Text>

                                            </TouchableOpacity>
                                        </View>


                                    ))}



                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => { sendNPS() }} style={[deviceType != 1 ? Styles.ButtonNpsFullTablet : Styles.ButtonNpsFull, { marginBottom: 30 }]} >
                                        {/* <View style={deviceType != 1 ? Styles.ButtonViewSugestionTablet : Styles.ButtonViewSugestion} > */}
                                        <Text style={deviceType != 1 ? Styles.ButtonTextSugestionTablet : Styles.ButtonTextSugestion} >AVANÇAR</Text>
                                        <IconButton icon="arrow-right-thin" iconColor={ColorsApp.PRIMARY} size={40} style={deviceType != 1 ? Styles.ButtonIconSugestionTablet : Styles.ButtonIconSugestion} ></IconButton>
                                        {/* </View> */}
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Footer />
                        </SafeAreaView>
                    </ScrollView >

                );



            } else if (question.nrQuestao == "RESPOSTA_MULTIPLA_HORIZONTAL") {

                return (

                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <SafeAreaView style={{ flex: 1, height: '100%', backgroundColor: ColorsApp.BACK, flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Header />
                            <View style={deviceType != 1 ? Styles.ContainerNPSTablet : Styles.ContainerNPS}>
                                <Text style={deviceType != 1 ? Styles.TitleNPSTablet : Styles.TitleNPS}>{replaceDescription(question.descQuestao)}</Text>

                                <View style={deviceType != 1 ? Styles.HorizontalDezesseisDivNPSTablet : Styles.HorizontalDezesseisDivNPS}>

                                    {map(question.opcoes, (item, i) => (

                                        < View key={i} style={deviceType != 1 ? Styles.HorizontalDezesseisItemNPSTablet : Styles.HorizontalDezesseisItemNPS} >
                                            <TouchableOpacity onPress={() => { toggleOption(item.opcao); updateRespostas(question.codQuestao, item.opcao) }} style={[deviceType != 1 ? Styles.DezesseisItemTouchNPSTablet : Styles.DezesseisItemTouchNPS, { borderWidth: 1, borderColor: ColorsApp.PRIMARY, backgroundColor: selectedOptions.includes(item.opcao) ? ColorsApp.PRIMARY : "#FFF" }]}
                                            >
                                                <Text style={[deviceType != 1 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS, { color: selectedOptions.includes(item.opcao) ? "#FFF" : ColorsApp.PRIMARY }]}>{item.descOpcao}</Text>
                                            </TouchableOpacity>
                                        </View>

                                    ))}
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => { sendNPS() }} style={[deviceType != 1 ? Styles.ButtonNpsFullTablet : Styles.ButtonNpsFull, { marginBottom: 30 }]} >
                                        {/* <View style={deviceType != 1 ? Styles.ButtonViewSugestionTablet : Styles.ButtonViewSugestion} > */}
                                        <Text style={deviceType != 1 ? Styles.ButtonTextSugestionTablet : Styles.ButtonTextSugestion} >AVANÇAR</Text>
                                        <IconButton icon="arrow-right-thin" iconColor={ColorsApp.PRIMARY} size={40} style={deviceType != 1 ? Styles.ButtonIconSugestionTablet : Styles.ButtonIconSugestion} ></IconButton>
                                        {/* </View> */}
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Footer />
                        </SafeAreaView>
                    </ScrollView >

                );


            }


        } else {


            if (question.nrQuestao == "RESPOSTA_MULTIPLA_VERTICAL") {

                return (

                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <SafeAreaView style={{ flex: 1, height: '100%', backgroundColor: ColorsApp.BACK, flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Header />
                            <View style={deviceType != 1 ? Styles.ContainerNPSTablet : Styles.ContainerNPS}>
                                <Text style={deviceType != 1 ? Styles.TitleNPSTablet : Styles.TitleNPS}>{replaceDescription(question.descQuestao)}</Text>

                                <View style={deviceType != 1 ? Styles.VerticalDezesseisDivNPSTablet : Styles.VerticalDezesseisDivNPS}>

                                    {map(question.opcoes, (item, i) => (


                                        < View key={i} style={deviceType != 1 ? Styles.VerticalDezesseisItemNPSTablet : Styles.VerticalDezesseisItemNPS} >


                                            <TouchableOpacity onPress={() => { toggleOption(item.opcao); updateRespostas(question.codQuestao, item.opcao) }} style={[deviceType != 1 ? Styles.DezesseisItemTouchNPSTablet : Styles.DezesseisItemTouchNPS, { borderWidth: 1, borderColor: ColorsApp.PRIMARY, backgroundColor: selectedOptions.includes(item.opcao) ? ColorsApp.PRIMARY : "#FFF" }]}
                                            >

                                                <Text style={[deviceType != 1 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS, { color: selectedOptions.includes(item.opcao) ? "#FFF" : ColorsApp.PRIMARY }]}>{item.descOpcao}</Text>

                                            </TouchableOpacity>
                                        </View>


                                    ))}



                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => { sendNPS() }} style={[deviceType != 1 ? Styles.ButtonNpsFullTablet : Styles.ButtonNpsFull, { marginBottom: 30 }]} >
                                        {/* <View style={deviceType != 1 ? Styles.ButtonViewSugestionTablet : Styles.ButtonViewSugestion} > */}
                                        <Text style={deviceType != 1 ? Styles.ButtonTextSugestionTablet : Styles.ButtonTextSugestion} >AVANÇAR</Text>
                                        <IconButton icon="arrow-right-thin" iconColor={ColorsApp.PRIMARY} size={40} style={deviceType != 1 ? Styles.ButtonIconSugestionTablet : Styles.ButtonIconSugestion} ></IconButton>
                                        {/* </View> */}
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Footer />
                        </SafeAreaView>
                    </ScrollView >

                );



            } else if (question.nrQuestao == "RESPOSTA_MULTIPLA_HORIZONTAL") {

                return (

                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <SafeAreaView style={{ flex: 1, height: '100%', backgroundColor: ColorsApp.BACK, flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Header />
                            <View style={deviceType != 1 ? Styles.ContainerNPSTablet : Styles.ContainerNPS}>
                                <Text style={deviceType != 1 ? Styles.TitleNPSTablet : Styles.TitleNPS}>{replaceDescription(question.descQuestao)}</Text>

                                <View style={deviceType != 1 ? Styles.HorizontalDezesseisDivNPSTablet : Styles.HorizontalDezesseisDivNPS}>

                                    {map(question.opcoes, (item, i) => (

                                        < View key={i} style={deviceType != 1 ? Styles.HorizontalDezesseisItemNPSTablet : Styles.HorizontalDezesseisItemNPS} >
                                            <TouchableOpacity onPress={() => { toggleOption(item.opcao); updateRespostas(question.codQuestao, item.opcao) }} style={[deviceType != 1 ? Styles.DezesseisItemTouchNPSTablet : Styles.DezesseisItemTouchNPS, { borderWidth: 1, borderColor: ColorsApp.PRIMARY, backgroundColor: selectedOptions.includes(item.opcao) ? ColorsApp.PRIMARY : "#FFF" }]}
                                            >
                                                <Text style={[deviceType != 1 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS, { color: selectedOptions.includes(item.opcao) ? "#FFF" : ColorsApp.PRIMARY }]}>{item.descOpcao}</Text>
                                            </TouchableOpacity>
                                        </View>

                                    ))}
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => { sendNPS() }} style={[deviceType != 1 ? Styles.ButtonNpsFullTablet : Styles.ButtonNpsFull, { marginBottom: 30 }]} >
                                        {/* <View style={deviceType != 1 ? Styles.ButtonViewSugestionTablet : Styles.ButtonViewSugestion} > */}
                                        <Text style={deviceType != 1 ? Styles.ButtonTextSugestionTablet : Styles.ButtonTextSugestion} >AVANÇAR</Text>
                                        <IconButton icon="arrow-right-thin" iconColor={ColorsApp.PRIMARY} size={40} style={deviceType != 1 ? Styles.ButtonIconSugestionTablet : Styles.ButtonIconSugestion} ></IconButton>
                                        {/* </View> */}
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Footer />
                        </SafeAreaView>
                    </ScrollView >

                );


            }
        }
    }

}


