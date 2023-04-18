import React, { useState, useEffect } from 'react';
import { ScrollView, View, ImageBackground, Text, TextInput, Button, Modal, StyleSheet, Alert, Dimensions, Image, TouchableOpacity } from 'react-native';
import Styles from '../config/Styles';

import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import InnerLoading from './InnerLoading';
import ColorsApp from '../config/ColorsApp';


export default function Footer(props) {

    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const navigation = useNavigation();

    const onChangeScreen = (screen) => {
        navigation.navigate(screen);
    };


    // ==
    const [modalVisible, setModalVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (text) => {
        setInputValue(text);
    }

    const handleModalClose = () => {
        setModalVisible(false);
    }

    const handleModalOpen = () => {
        setModalVisible(true);
    }

    const handleSave = () => {
        // console.log(inputValue); 
        setModalVisible(false);

        if (inputValue == "159753") {
            onChangeScreen('home');
        } else {
            // console.log('Preencha a senha corretamente.')
            Alert.alert('Opss', 'SENHA INCORRETA.', [

                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
    }

    // ==

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            // backgroundColor:'transparent'
            // justifyContent: 'center',
            // alignItems: 'center',
        },
        modalContainer: {
            flex: 1,
            marginTop:50
            // backgroundColor:'transparent'
            // justifyContent: 'center',
            // alignItems: 'center',
        },
        modalHeader: {
            width: '100%',
            padding: 20,
            // backgroundColor:ColorsApp.SECONDARY
            // alignItems: 'flex-end',
        },
        modalContent: {
            padding: 20,
            // backgroundColor:ColorsApp.SECONDARY
            // alignItems: 'center',
        },
        TabletInput: {
            borderWidth: 1,
            borderColor: ColorsApp.PRIMARY,
            borderRadius: 4,
            padding: 10,
            marginBottom: 20,
            width: '100%',
            fontSize:23,
        },
        Input: {
            borderWidth: 1,
            borderColor: ColorsApp.PRIMARY,
            borderRadius: 4,
            padding: 10,
            marginBottom: 20,
            width: '100%',
            fontSize:16
        },
        button: {
            borderWidth: 1,
            borderColor: ColorsApp.PRIMARY,

            backgroundColor: ColorsApp.PRIMARY,
            borderRadius: 4,
            padding: 10,
            marginBottom: 20,
            width: '100%',
        },
        ButtonText:{
            textAlign:'center',
            color: '#FFF',
            fontSize:16
        }, 
        TabletButtonText:{
            textAlign:'center',
            color: '#FFF',
            fontSize:23
        },        
        TabletlabelText: {
            fontSize:23,
            color:'#000',
        }
    });

    useEffect(() => {
        // getLatestWorkouts().then((response) => {
        //     setItems(response);
        setIsLoaded(true);
        // });
    }, []);


    const toFiliais = () => {
        // console.log('to filiais')
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

            <View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={handleModalOpen}>
                        {/* <MaterialIcons name="add" size={24} color="black" /> */}
                    </TouchableOpacity>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={modalVisible}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalHeader}>
                                <TouchableOpacity onPress={handleModalClose}>
                                    <MaterialIcons name="close" size={50} color="black" />
                                </TouchableOpacity>
                            </View>
                            {/* <Text style={styles.labelText}>Digita a senha para retornar.</Text> */}
                            <View style={styles.modalContent}>
                                <TextInput
                                    style={ screenWidth >= 768 ? styles.TabletInput : styles.Input}
                                    onChangeText={handleInputChange}
                                    value={inputValue}
                                    placeholder="DIGITE A SENHA PARA RETORNAR"
                                />
                                <TouchableOpacity title="ENVIAR" style={styles.button} onPress={handleSave} >
                                    <Text style={ screenWidth >= 768 ? styles.TabletButtonText : styles.ButtonText}>ENVIAR</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>

                <View style={{}}>
                    <View style={{ borderTopColor: ColorsApp.SECONDARY, borderTopWidth: 5, paddingTop: 15, paddingLeft: 10, paddingRight: 10, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: ColorsApp.BACK }}>

                        <TouchableOpacity onPress={() => { handleModalOpen() }}>
                            <Image resizeMode={"contain"} source={require('./../../assets/logo.png')} style={screenWidth >= 768 ? Styles.ImageFooterTablet : Styles.ImageFooter} ></Image>
                        </TouchableOpacity>

                        <Image resizeMode={"contain"} source={require('./../../assets/hsr.png')} style={screenWidth >= 768 ? Styles.ImageFooterTablet : Styles.ImageFooter} ></Image>



                    </View>
                </View>
            </View>

        );
    }
}