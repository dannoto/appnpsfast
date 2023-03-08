import React, { useState, useEffect } from 'react';
import { ScrollView, View, ImageBackground, Text, Dimensions } from 'react-native';
import Styles from '../config/Styles';

import { IconButton, Button } from "react-native-paper";

import { useNavigation } from '@react-navigation/native';
import InnerLoading from './InnerLoading';
import Empty from './Empty';

import { TouchableOpacity } from 'react-native-web';
import ColorsApp from '../config/ColorsApp';
import { npsFiliais } from '../config/DataApp';
import { map } from 'lodash';



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
        var token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJDb2RDbGllbnQiOiI5NCIsIm5hbWVpZCI6Ijk0IiwidW5pcXVlX25hbWUiOiJ3YWduZXIucGFuc2FuaUBoc3J0ZWNoLmNvbS5iciIsIm5iZiI6MTY3NzIwNzA1NiwiZXhwIjoxNjgzMjA3MDU2LCJpYXQiOjE3MDg3NDMwNTYsImlzcyI6Im5wc2Zhc3QiLCJhdWQiOiJodHRwczovL2FwcC5ucHNmYXN0LmNvbS5ici8ifQ.ittJT6XsMxj2S7IScritoA2MmK3RcDwngpC3SRj9kP2ZgbCVhgpUjhQQyhF98Ggamdj8vVi3FSFnehcyH_AjMg"
        
        npsFiliais(token).then((response) => {

            try {

                if (response.results.length > 0) {

                    setFiliais([])
                    setFiliais(response.results)
                    
                } else {
                    console.log("vazio")
                }
                
                setIsLoaded(true)

            } catch (error) {

                console.log(error)
                console.log('Suas filiais estão incorretas.')

                setIsLoaded(true)
                // Alert.alert('Opss', 'Suas credenciais estão incorretas.', [

                //     { text: 'OK', onPress: () => console.log('OK Pressed') },
                // ]);
            }

        }).catch((error) =>

            console.log("Erro na requisição. Contate o suporte.")
        )


    }

    useEffect(() => {

        // setIsLoaded(true)

        getFiliais()


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


                        {map(filiais, (item, i) => (

                            // filiais.length > 0 ?


                            <View key={i} style={screenWidth >= 768 ? Styles.FiliaisBoxTablet : Styles.FiliaisBox}>
                                <TouchableOpacity onPress={() => StartPesquisa(item.codFilial)}>
                                    <IconButton icon="crosshairs-gps" iconColor={ColorsApp.SECONDARY} size={IconSize} style={Styles.FiliaisBoxIcon} />
                                    <Text style={screenWidth >= 768 ? Styles.FiliaisTextBoxTablet : Styles.FiliaisTextBox} numberOfLines={1} >{item.nomeFilial}</Text>
                                </TouchableOpacity>
                            </View>


                        ))}

                        {
                            filiais.length == 0 ?

                                <Empty/>

                                :

                                null
                        }



                    </View>
                </View>
            </ScrollView>
        );
    }
}