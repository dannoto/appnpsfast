import React, { useState, useEffect } from 'react';
import { ScrollView, View, ImageBackground, Text, Dimensions,TouchableOpacity } from 'react-native';
import Styles from '../config/Styles';

import { IconButton, Button } from "react-native-paper";

import { useNavigation } from '@react-navigation/native';
import InnerLoading from './InnerLoading';
import Empty from './Empty';


import ColorsApp from '../config/ColorsApp';
import { npsFiliais } from '../config/DataApp';
import { map } from 'lodash';

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Filiais(props) {

    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [isLoaded, setIsLoaded] = useState(false);
    const [filiais, setFiliais] = useState([]);
    const [IconSize, setIconSize] = useState("");



    const navigation = useNavigation();

    const onChangeScreen = (screen) => {
        navigation.navigate(screen);
    };


    const getFiliais = async () => {

        try {

            await AsyncStorage.getItem('auth', (error, result) => {

                if (result) {

                    var data = JSON.parse(result)

                    if (data.token) {

                        npsFiliais(data.token).then((response) => {

                            console.log(response)

                            try {

                                if (response.results.length > 0) {

                                    setFiliais([])
                                    setFiliais(response.results)

                                } else {
                                    console.log("vazio")
                                }

                                setIsLoaded(true)

                            } catch (error) {

                                // console.log(error)
                                console.log('Suas filiais estão incorretas.')

                                // setIsLoaded(true)
                
                            }

                        }).catch((error) =>

                            console.log("npsFiliais(data.token).then((response) => {")
                            // setIsLoaded(true)
                           
                        )



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
            // setIsLoaded(true)
        }
    }




    useEffect(() => {

        getFiliais()


        if (screenWidth >= 768) {
            setIconSize(80)

        } else {

            setIconSize(40)
        }



    }, []);

    const toPontosContato = async (nomeFilial) => {

        onChangeScreen('pontoscontato');

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


                        {map(filiais, (item, i) => (



                            <View key={i} style={screenWidth >= 768 ? Styles.FiliaisBoxTablet : Styles.FiliaisBox}>
                                <TouchableOpacity onPress={() => toPontosContato(item.codFilial)}>
                                    <IconButton icon="crosshairs-gps" iconColor={ColorsApp.SECONDARY} size={IconSize} style={Styles.FiliaisBoxIcon} />
                                    <Text style={screenWidth >= 768 ? Styles.FiliaisTextBoxTablet : Styles.FiliaisTextBox} numberOfLines={1} >{item.nomeFilial}</Text>
                                </TouchableOpacity>
                            </View>


                        ))}

                        {
                            !filiais ?

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