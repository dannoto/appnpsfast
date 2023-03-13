import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Alert, TouchableOpacity, Image, Dimensions } from 'react-native-web';
import { Text, TextInput, Button, IconButton } from 'react-native-paper';
import Styles from '../../config/Styles';
import ColorsApp from '../../config/ColorsApp';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';


import { map } from 'lodash';
import Empty from '../../components/Empty';


import Footer from '../../components/Footer';
import Header from '../../components/Header';



export default function RadioBottom(props) {

    // const { id, nome } = route.params;


    // console.log('INICIO QUESTAO')
    // console.log(props.route.params)
    // console.log('FIM QUESTAO')

    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [orientation, setOrientation] = useState("PORTRAIT");
    const [IconSize, setIconSize] = useState(80);

    const [question, setQuestion] = useState([]);



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


        function getQuestion() {
            setQuestion([]);
            setQuestion(props.route.params);
        }

        getQuestion()


    }, []);




    const navigation = useNavigation();

    const onChangeScreen = (screen) => {
        navigation.navigate(screen);
    };


    const sendNPS = async (codQuestao, resposta) => {


        // Envia a resposta

        const checkResposta = async (codQuestao, resposta) => {

            try {

                // Pegando Index
                await AsyncStorage.getItem('dataAnswer', (error, result) => {





                    if (result) {

                        console.log('JA TEM RESPOSTA, INSERINDO MAIS')

                        var oldAnswer = JSON.parse(result)

                        oldAnswer.answers.push({
                            "codQuestao": codQuestao,
                            "resposta": "" + resposta + ""
                        });

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
                                        {
                                            "codQuestao": codQuestao,
                                            "resposta": "" + resposta + ""
                                        }]
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


        checkResposta(codQuestao, resposta)
        manageRoute()




    }


    // console.log(orientation)




    // if (screenWidth >= 768 || orientation == "LANDSCAPE") {

    return (



        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={{ flex: 1, height: '100%', backgroundColor: '#FFF', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Header />
                <View style={screenWidth >= 768 ? Styles.ContainerNPSTablet : Styles.ContainerNPS}>
                    <Text style={screenWidth >= 768 ? Styles.TitleNPSTablet : Styles.TitleNPS}>{question.descQuestao}</Text>
                    {/* <Text style={screenWidth >= 768 ? Styles.TitleNPSTablet : Styles.TitleNPS}>DESCRICAO</Text> */}

                    <View style={screenWidth >= 768 ? Styles.DivNPSTablet : Styles.DivNPS}>

                        {map(question.opcoes, (item, i) => (

                            < View key={i} style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPS} >
                                <TouchableOpacity onPress={() => { sendNPS(question.codQuestao, item.opcao) }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS0]}>
                                    <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>{item.descOpcao}</Text>
                                </TouchableOpacity>
                            </View>

                        ))}

                        {/* {
                            question.opcoes.length == 0 ?

                                <Empty />

                                :

                                null
                        } */}
                        {/* 
                        <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPS} >
                            <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS0]}>
                                <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>0</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPS} >
                            <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS1]}>
                                <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>1</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPS} >
                            <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS2]}>
                                <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>2</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPS} >
                            <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS3]}>
                                <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>3</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPS} >
                            <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS4]}>
                                <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>4</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPS} >
                            <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS5]}>
                                <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>5</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPS} >
                            <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS6]}>
                                <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>6</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPS} >
                            <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS7]}>
                                <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>7</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPS} >
                            <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS8]}>
                                <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>8</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPS} >
                            <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS9]}>
                                <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>9</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPS} >
                            <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS10]}>
                                <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>10</Text>
                            </TouchableOpacity>
                        </View> */}


                    </View>
                </View>
                <Footer />
            </SafeAreaView>
        </ScrollView >

    );

    // } else {

    //     return (

    //         <SafeAreaView style={{ flex: 1, height: '100%' }}>
    //             <Header />
    //             <View style={screenWidth >= 768 ? Styles.ContainerNPSTablet : Styles.ContainerNPS}>

    //                 <Text style={screenWidth >= 768 ? Styles.TitleNPSTablet : Styles.TitleNPS}>Em uma escala de 0 a 10. Quanto você recomendaria?</Text>

    //                 <View style={screenWidth >= 768 ? Styles.DivNPSTablet : Styles.DivNPS}>
    //                     <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPSPortraitUp} >
    //                         <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS0]}>
    //                             <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>0</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                     <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPSPortraitUp} >
    //                         <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS1]}>
    //                             <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>1</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                     <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPSPortraitUp} >
    //                         <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS2]}>
    //                             <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>2</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                     <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPSPortraitUp} >
    //                         <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS3]}>
    //                             <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>3</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                     <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPSPortraitUp} >
    //                         <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS4]}>
    //                             <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>4</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                     <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPSPortraitUp} >
    //                         <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS5]}>
    //                             <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>5</Text>
    //                         </TouchableOpacity>
    //                     </View>

    //                 </View>
    //                 <View style={screenWidth >= 768 ? Styles.DivNPSTablet : Styles.DivNPS}>
    //                     <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPSPortraitDown} >
    //                         <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS6]}>
    //                             <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>6</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                     <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPSPortraitDown} >
    //                         <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS7]}>
    //                             <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>7</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                     <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPSPortraitDown} >
    //                         <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS8]}>
    //                             <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>8</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                     <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPSPortraitDown} >
    //                         <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS9]}>
    //                             <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>9</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                     <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPSPortraitDown} >
    //                         <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS10]}>
    //                             <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>10</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                 </View>

    //             </View>
    //             <Footer />
    //         </SafeAreaView>

    //     );

    // }

}
