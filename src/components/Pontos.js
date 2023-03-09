import React, { useState, useEffect } from 'react';
import { ScrollView, View, ImageBackground, Text, Dimensions } from 'react-native';
import Styles from '../config/Styles';

import { IconButton, Button } from "react-native-paper";

import { useNavigation } from '@react-navigation/native';
import InnerLoading from './InnerLoading';
import Empty from './Empty';

import { TouchableOpacity } from 'react-native-web';
import ColorsApp from '../config/ColorsApp';
import { npsJornadas, npsPontosContato } from '../config/DataApp';
import { map } from 'lodash';

import AsyncStorage from '@react-native-async-storage/async-storage';
import PontosContato from '../screens/PontosContato';


export default function Pontos(props) {

    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [isLoaded, setIsLoaded] = useState(false);
    const [pontosdeContato, setPontosdeContato] = useState([]);
    const [IconSize, setIconSize] = useState("");



    const navigation = useNavigation();

    const onChangeScreen = (screen) => {
        navigation.navigate(screen);
    };


    const getJornadas = async () => {

        try {

            await AsyncStorage.getItem('auth', (error, result) => {

                if (result) {

                    var data = JSON.parse(result)

                    if (data.token) {


                        // Inicio Pegando Jornadas
                        npsJornadas(data.token).then((response) => {

                            try {

                                if (response.results.length > 0) {

                                    var jornadas = response.results

                                    jornadas.forEach(resp => {

                                        // Inicio Pontos de Contato
                                        npsPontosContato(data.token, resp.codJornada).then((respPC) => {


                                            respPC.forEach(respPCEach => {
                                
                                                setPontosdeContato(oldArray => [...oldArray, { codPontoContato: respPCEach.codPontoContato, descPontoContato: respPCEach.descPontoContato}]);

                                            })

                                            setIsLoaded(true)

                                        }).catch((error) =>

                                            setIsLoaded(true)

                                        )
                                        // Fim Pontos de Contato




                                    });


                                } else {
                                    console.log("vazio")
                                    setIsLoaded(true)
                                }


                            } catch (error) {

                                console.log(error)
                                console.log('Suas Jornadas estão incorretas.')

                                setIsLoaded(true)

                            }

                        }).catch((error) =>

                            // console.log("Erro na requisição. Contate o suporte.")
                            setIsLoaded(true)

                        )
                        // Fim Pegando jornadas




                    } else {
                        console.log('if (data.token) {')
                        // setIsLoaded(true)

                    }

                } else {

                    console.log('if (result) {')
                    // setIsLoaded(true)

                }


            });

        } catch (error) {
            console.log('1 CACH ERROR')
            setIsLoaded(true)
        }
    }



    useEffect(() => {

        // setIsLoaded(true)

        getJornadas()

        console.log(pontosdeContato)


        if (screenWidth >= 768) {
            setIconSize(80)

        } else {

            setIconSize(40)
        }



    }, []);

    const StartPesquisa = async (nomeFilial) => {
        onChangeScreen('stepnps');
    }



    if (!isLoaded) {
        return (
            <InnerLoading />
        );
    }

    if (isLoaded) {
        return (
            <ScrollView>
                <View style={{ marginTop: 10 }}>

                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start' }}>


                        {map(pontosdeContato, (item, i) => (

                            <View key={i} style={screenWidth >= 768 ? Styles.FiliaisBoxTablet : Styles.FiliaisBox}>
                                <TouchableOpacity onPress={() => StartPesquisa(item.codPontoContato)}>
                                    <IconButton icon="crosshairs-gps" iconColor={ColorsApp.SECONDARY} size={IconSize} style={Styles.FiliaisBoxIcon} />
                                    <Text style={screenWidth >= 768 ? Styles.FiliaisTextBoxTablet : Styles.FiliaisTextBox} numberOfLines={1} >x{item.descPontoContato}</Text>
                                </TouchableOpacity>
                            </View>

                        ))}

                        {
                            pontosdeContato.length == 0 ?

                                <Empty />

                                :

                                null
                        }



                    </View>
                </View>
            </ScrollView>
        );
    }
}