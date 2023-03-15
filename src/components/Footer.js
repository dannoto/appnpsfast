import React, { useState, useEffect } from 'react';
import { ScrollView, View, ImageBackground, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import Styles from '../config/Styles';
// import {map} from 'lodash';
import Loading from './InnerLoading';
import { IconButton, Button } from "react-native-paper";

// import { getLatestWorkouts } from "../config/DataApp";
// import TouchableScale from 'react-native-touchable-scale';
// import { Paragraph, Text} from 'react-native-paper';
// import { LinearGradient } from 'expo-linear-gradient';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import InnerLoading from './InnerLoading';
import ColorsApp from '../config/ColorsApp';
// import LevelRate from './LevelRate';
export default function Filiais(props) {

    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);



    const navigation = useNavigation();

    const onChangeScreen = (screen) => {
        navigation.navigate(screen);
    };

    useEffect(() => {
        // getLatestWorkouts().then((response) => {
        //     setItems(response);
        setIsLoaded(true);
        // });
    }, []);


    const toFiliais = () => {
        console.log('to filiais')
        onChangeScreen('home');
    }

    const StartPesquisa = async () => {


        console.log('StartPesquisa')

        onChangeScreen('stepobrigado');

    }



    if (!isLoaded) {
        return (
            <InnerLoading />
        );
    }

    if (isLoaded) {
        return (

            <View style={{  }}>
                <View style={{ borderTopColor: ColorsApp.SECONDARY, borderTopWidth: 5, paddingTop:15,paddingLeft:10, paddingRight:10, paddingBottom:10, flexDirection: 'row', justifyContent:'space-between', backgroundColor: ColorsApp.BACK  }}>
                   
                        <TouchableOpacity onPress={() => { toFiliais()}}>
                            <Image resizeMode={"contain"}  source={require('./../../assets/logo.png')} style={screenWidth >= 768 ? Styles.ImageFooterTablet : Styles.ImageFooter} ></Image>
                        </TouchableOpacity>
                      
                            <Image resizeMode={"contain"} source={require('./../../assets/hsr.png')} style={screenWidth >= 768 ? Styles.ImageFooterTablet : Styles.ImageFooter} ></Image>
                        
                  

                </View>
            </View>

        );
    }
}