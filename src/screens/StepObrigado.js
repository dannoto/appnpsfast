import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Alert, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Text, TextInput, Button, IconButton } from 'react-native-paper';
import Styles from '../config/Styles';
import ColorsApp from '../config/ColorsApp';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Footer from '../components/Footer';
import Header from '../components/Header';
// import { ScrollView } from 'react-native-web';

import { npsEnviarRespostas } from '../config/DataApp';


export default function StepObrigado(props) {


    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


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
            // AsyncStorage.removeItem('currentIndex');
            // AsyncStorage.removeItem('currentType');
            // AsyncStorage.removeItem('codCliente');
            // AsyncStorage.removeItem('dataQuestions');
        }


        const sendResposta = async () => {

            // try {

            //     await AsyncStorage.getItem('auth', (error, result) => {

            //         if (result) {
            //             // console.log(result);

            //             var data = JSON.parse(result)

            //             if (data.token) {

            //                 // console.log(data.token)

            //                 var resposta = {
            //                     "codClienteFastQuest": 94,
            //                     "codFilial": 12,
            //                     "contato": "Daniel Ribeiro",
            //                     "email": "dantars@outlook.com",
            //                     "ddd1": "62",
            //                     "telefone1": "993615459",
            //                     "codPontoContato": 5,
            //                     "codStatus": 102,
            //                     "respostas": [
            //                         {
            //                             "codQuestao": 23,
            //                             "resposta": "5"
            //                         }
            //                     ]
            //                 }

            //                 console.log(resposta)

            //                 npsEnviarRespostas(data.token, resposta)

            //             } else {
            //                 console.log('nao logado')
            //                 return false;


            //             }

            //         } else {

            //             // return false;
            //             console.log('false get auth sendResposta')

            //             // setIsLogged(false)

            //         }

            //     });

            // } catch (error) {

            //     // return false;

            //     console.log('catch sendResposta')
            //     // setIsLogged(false)


            // }

            console.log("resposta enviada")



        }




        sendResposta()
        resetRoute();




    }, []);

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
            <SafeAreaView style={{ flex: 1, height: '100%', backgroundColor: '#FFF' }}>


                <Header />

                <View style={screenWidth >= 768 ? Styles.ContainerObrigadoTablet : Styles.ContainerObrigado}>

                    <View style={{ flex: 1 }}>


                        <IconButton icon="check-decagram" iconColor={"green"} size={IconSize} style={screenWidth >= 768 ? Styles.IconObrigadoTablet : Styles.IconObrigado} />

                        <Text style={screenWidth >= 768 ? Styles.TitleObrigadoTablet : Styles.TitleObrigado}>Seu RESPOSTA foi ENVIADA com sucesso</Text>
                        <Text style={screenWidth >= 768 ? Styles.SubtitleObrigadoTablet : Styles.SubtitleObrigado}>Volte sempre adoramos ter você por aqui.</Text>


                        <TouchableOpacity onPress={() => { sendNPS() }} style={{ marginTop: '5%' }}>
                            <Text style={screenWidth >= 768 ? Styles.ReturnTextObrigadoTablet : Styles.ReturnTextObrigado}>retornar para a tela principal</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <Footer />



            </SafeAreaView>
        </ScrollView>


    );
}
