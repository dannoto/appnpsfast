import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Alert, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import Styles from '../config/Styles';
import ColorsApp from '../config/ColorsApp';
import Filiais from '../components/Filiais';
import AppLoading from '../components/AppLoading';


import AsyncStorage from '@react-native-async-storage/async-storage';

import { useIsFocused } from "@react-navigation/native";



export default function Home(props) {


    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [loading, setLoading] = useState(false);
    const [filiais, setFiliais] = useState([]);

    const onChangeScreen = (screen) => {
        navigation.navigate(screen);
    };
    const isFocused = useIsFocused();


    useEffect(() => {

        AsyncStorage.removeItem('dataAnswer');
        AsyncStorage.removeItem('currentIndex');
        AsyncStorage.removeItem('currentType');
        AsyncStorage.removeItem('codCliente');
        AsyncStorage.removeItem('dataQuestions');
        AsyncStorage.removeItem('dataRespondente');

            setLoading(true)

    }, [isFocused]);



    if (!loading) {

        return (

            <AppLoading />

        );

    } else {

        return (


            <ScrollView style={{ backgroundColor: '#FFF' }}>
                <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>

                    <View style={screenWidth >= 768 ? Styles.HomeContentTablet : Styles.HomeContent}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'left' }}>
                                <Text style={screenWidth >= 768 ? Styles.HomeTitleTablet : Styles.HomeTitle}>olá <Text style={{ color: ColorsApp.PRIMARY, fontWeight: 500 }}>Bem-vindo</Text>,</Text>

                            </View>
                            <View style={{ flex: 1 }}>
                                <Image source={require('./../../assets/logo.png')} resizeMode={'contain'} style={Styles.AuthLogo} />
                            </View>
                        </View>
                        <View style={{ marginBottom: 50 }}>
                            <View>
                                <Text style={screenWidth >= 768 ? Styles.HomeSubtitleTablet : Styles.HomeSubtitle}>MINHAS FILIAIS</Text>
                            </View>

                            <Filiais />
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>


        );
    }
}
