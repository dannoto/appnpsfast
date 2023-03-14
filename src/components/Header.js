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
export default function Header(props) {

    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);



    const navigation = useNavigation();

    const onChangeScreen = (screen) => {
        props.navigation.navigate(screen);
    };

    useEffect(() => {
        // getLatestWorkouts().then((response) => {
        //     setItems(response);
        setIsLoaded(true);
        // });
    }, []);

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

            <View >
                <View style={{ width:'100%' , margin:'auto', marginTop:20, borderBottomColor: '#d1d1d1', borderBottomWidth: 1 }}>
                    <View style={{  flexDirection: 'row', justifyContent: 'center', marginTop:10, marginBottom: 10 }}>
                            <Image resizeMode={"contain"} source={require('./../../assets/hsr.png')} style={ screenWidth >= 768 ? Styles.ImageHeaderTablet : Styles.ImageHeader} ></Image>
                    </View>
                </View>
            </View>

        );
    }
}