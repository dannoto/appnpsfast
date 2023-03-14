import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Alert, TouchableOpacity, Image, Dimensions, Text, TextInput, Button } from 'react-native';
import Styles from '../config/Styles';
import ColorsApp from '../config/ColorsApp';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Footer from '../components/Footer';
import Header from '../components/Header';

import { npsEnviarRespostas } from '../config/DataApp';
import { useIsFocused } from "@react-navigation/native";


export default function StepObrigado(props) {
    const isFocused = useIsFocused();

    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [loading, setLoading] = useState(false);



    const [orientation, setOrientation] = useState("PORTRAIT");
    const [IconSize, setIconSize] = useState("");






    useEffect(() => {


        if (screenWidth >= 768) {
            setIconSize(150)

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
            // AsyncStorage.removeItem('currentIndex');
            // AsyncStorage.removeItem('currentType');
            // AsyncStorage.removeItem('codCliente');
            // AsyncStorage.removeItem('dataQuestions');
        }


        const sendResposta = async () => {


            var codCliente = null;
            var codFilial = null;
            var contato = null;
            var email = null;
            var ddd1 = null;
            var telefone1 = null;
            var codPontoContato = null;
            var respostas = [];

            await AsyncStorage.getItem('codCliente', (error, result) => {
                console.log('Pegou codCliente: '+result)

                        if (result) {
                            // console.log(result)
                            codCliente = result

                        } else {
                            codCliente = null
                        }
                }
            )

            await AsyncStorage.getItem('dataRespondente', (error, result) => {
                console.log('Pegou dataRespondente: '+result)

                        if (result) {

                            var data = JSON.parse(result)
                            // console.log(result)
                            contato = data.nome
                            email = data.email
                            telefone1 = data.telefone

                        } else {
                            contato = null
                            email = null
                            telefone1 = null
                        }
                }
            )

             await AsyncStorage.getItem('codPontoContato', (error, result) => {
                console.log('Pegou codPontoContato: '+result)

                        if (result) {
                            // console.log(result)
                            codPontoContato = result

                        } else {
                            codPontoContato = null
                        }
                }
            )

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


            if (respostas.length > 0 ) {
    
                console.log("resposta enviada")
            } else {
               console.log("nao tem respostas, ent n enviou")
    
            }
        
            resetRoute();



        }




        sendResposta()
        // resetRoute();




    }, [isFocused]);

    const onChangeScreen = (screen) => {
        props.navigation.navigate(screen);
    };


    const sendNPS = async () => {

      

        onChangeScreen('runpesquisa')
    }
    // return orientation;

    // console.log(orientation)

    // if (orientation == "LANDSCAPE") { 



    // } else {  


    // }


    return (

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={{ flex: 1,  backgroundColor: '#FFF' }}>


                <Header />

                <View style={screenWidth >= 768 ? Styles.ContainerObrigadoTablet : Styles.ContainerObrigado}>

                    <View style={{ flex: 1 }}>


                        <Text style={screenWidth >= 768 ? Styles.TitleObrigadoTablet : Styles.TitleObrigado}>SUA RESPOSTA foi ENVIADA com sucesso</Text>
                        <Text style={screenWidth >= 768 ? Styles.SubtitleObrigadoTablet : Styles.SubtitleObrigado}>Volte sempre adoramos ter você por aqui.</Text>


                        <TouchableOpacity onPress={() => { sendNPS() }} style={{ marginTop: 25 }}>
                            <Text style={screenWidth >= 768 ? Styles.ReturnTextObrigadoTablet : Styles.ReturnTextObrigado}>retornar para a tela principal</Text>
                        </TouchableOpacity>
                       

                    </View>
                </View>

                <Footer />



            </SafeAreaView>
        </ScrollView>


    );
}
