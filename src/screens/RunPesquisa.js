import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Alert, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import Styles from '../config/Styles';
import ColorsApp from '../config/ColorsApp';

import AppLoading from '../components/AppLoading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Pontos from '../components/Pontos';

import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from "@react-navigation/native";



import RadioBottom from './Questoes/RadioBottom';
import CaixaDeTexto from './Questoes/CaixaDeTexto';
import CheckBox from './Questoes/CheckBox';
import Label from './Questoes/Label';
import Emoji from './Questoes/Emoji';


export default function RunPesquisa(props) {

    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [loading, setLoading] = useState(false);

    const isFocused = useIsFocused();


    const navigation = useNavigation();

    const onChangeScreen = (screen, params) => {
        navigation.navigate(screen, params);
    };


    // Definir route
    const routeQuestion = (currentQuestion, currentType) => {

        // console.log('============ rota questions =================')

        // console.log('currentType')
        // console.log(currentType)
        // console.log('currentQuestion')
        // console.log(currentQuestion)

        // console.log('============ fim  questions =================')


        if (currentType == 1 || currentType == 12 || currentType == 13) {
            //Radio Buttom
            // var data = {question: currentQuestion}
            // var data = {question: currentQuestion}
            onChangeScreen('radiobottom', currentQuestion);
            // console.log('radio bottom , currentType: '+currentType)

        } else if (currentType == 3 || currentType == 4 || currentType == 14) {
            // Caixa de texto
            onChangeScreen('caixadetexto', currentQuestion);


        } else if (currentType == 2) {

            // Checkbox
            onChangeScreen('checkbox', currentQuestion);


        } else if (currentType == 11 || currentType == 15) {

            // Label
            onChangeScreen('label', currentQuestion);


        } else if (currentType == 16) {

            // Emoji
            onChangeScreen('emoji', currentQuestion);

        }

    }

    const getQuestion = async (data) => {

        // console.log('chamou getQuestion')


        try {

            // Pegando Questoes Data
            await AsyncStorage.getItem('dataQuestions', (error, result) => {

                var result = JSON.parse(result)

                if (result.questions.length > 0) {

                    // console.log('questions length: ' + result.questions.length)
                    // console.log(result)

                    var currentQuestion = result.questions[data]
                    var currentType = result.questions[data].codTipoQuestao

                    routeQuestion(currentQuestion, currentType)

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

    const getIndex = async () => {

        // console.log('chamou getIndex')


        try {

            // Pegando Index
            await AsyncStorage.getItem('currentIndex', (error, result) => {

                if (result) {
                    // console.log('current index: ' + result)

                    // Pegando 
                    getQuestion(result)




                } else {
                    console.log('n tem current index')
                }
            })

        } catch (error) {

            console.log('1 CACH ERROR GET INDEX')
            // setIsLoaded(true)
        }
    }

    useEffect(() => {


        // console.log('ESTE É O RUN PESQUISA')
      

        getIndex()
        setLoading(true)

        // Call only when screen open or when back on screen 
        // if(isFocused){ 
        //     console.log('FOCUSED');
        // }

    }, [isFocused]);


    if (!loading) {

        return (

            <AppLoading />

        );

    } else {

        return (
            <View>
                <Text>Estou em run pesquisa</Text>
            </View>
        )
    };
}
