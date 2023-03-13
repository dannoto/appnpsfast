import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Alert, TouchableOpacity, Image, Dimensions } from 'react-native-web';
import { Text, TextInput, Button, IconButton } from 'react-native-paper';
import Styles from '../config/Styles';
import ColorsApp from '../config/ColorsApp';
import { useNavigation } from '@react-navigation/native';

import Footer from '../components/Footer';
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TextInputMask } from 'react-native-text-input-mask';

export default function StepContact(props) {


    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [loading, setLoading] = useState(false);

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");


    const [orientation, setOrientation] = useState("PORTRAIT");
    const [IconSize, setIconSize] = useState(80);

    useEffect(() => {

        Dimensions.addEventListener('change', ({ window: { width, height } }) => {
            if (width < height) {

                setOrientation("PORTRAIT")

                if (screenWidth >= 768) {
                    setIconSize(150)

                } else {

                    setIconSize(80)
                }

            } else {

                setOrientation("LANDSCAPE")

                if (screenWidth >= 768) {
                    setIconSize(80)

                } else {

                    setIconSize(20)
                }


            }
        })

    }, []);


    const navigation = useNavigation();

    const onChangeScreen = (screen) => {
        navigation.navigate(screen);
    };


    const sendNPS = async () => {


        AsyncStorage.setItem(
            'dataRespondente',
            JSON.stringify({nome:nome, email:email, telefone:telefone})
        );





        onChangeScreen('stepobrigado')
    }


    console.log(orientation)


    return (

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            
            <SafeAreaView style={{ flex: 1, height: '100%', backgroundColor: '#FFF' }}>
                <Header />
                <View style={screenWidth >= 768 ? Styles.ContainerSugestionTablet : Styles.ContainerSugestion}>


                    <Text style={screenWidth >= 768 ? Styles.TitleContactTablet : Styles.TitleContact} > <Text style={{ fontWeight: 600 }}> Muito Obrigado por deixar sua opinião.</Text> </Text>
                    <Text style={screenWidth >= 768 ? Styles.SubTitleContactTablet : Styles.SubTitleContact} >Aproveite e cadastre-se para receber ofertas exclusivas:</Text>


                    <Text style={screenWidth >= 768 ? Styles.LabelSugestionTablet : Styles.LabelSugestion} >Seu Nome</Text>
                    <TextInputMask
                        multiline={false}
                        numberOfLines={1}
                        value = {nome}
                        onChangeText = { 
                            
                            
                            text => setNome(text)
                        }
                        style={screenWidth >= 768 ? Styles.InputDefaultTablet : Styles.InputDefault}
                    />

                    <Text style={screenWidth >= 768 ? Styles.LabelSugestionTablet : Styles.LabelSugestion} >Seu E-mail</Text>
                    <TextInputMask
                        multiline={false}
                        numberOfLines={1}
                        value = {email}
                        onChangeText = {

                          
                                text => setEmail(text)
                              
                        }
                        style={screenWidth >= 768 ? Styles.InputDefaultTablet : Styles.InputDefault}
                    />

                    <Text style={screenWidth >= 768 ? Styles.LabelSugestionTablet : Styles.LabelSugestion} >Seu Telefone</Text>
                    <TextInputMask
                        multiline={false}
                        numberOfLines={1}
                        mask="(99) 999-9999"
                        value = {telefone}
                        onChangeText = {

                            (formatted, extracted) => {
                                console.log(formatted); // +1 (123) 456-7890
                                console.log(extracted); // 1234567890
                                text => setTelefone(extracted)
                              }
                        }
                        keyboardType="numeric"
                        style={screenWidth >= 768 ? Styles.InputDefaultTablet : Styles.InputDefault}
                    />

                    <Text style={{marginBottom:20}}></Text>

                    <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ButtonNpsFullTablet : Styles.ButtonNpsFull]} >
                        {/* <View style={screenWidth >= 768 ? Styles.ButtonViewSugestionTablet : Styles.ButtonViewSugestion} > */}
                        <Text style={screenWidth >= 768 ? Styles.ButtonTextSugestionTablet : Styles.ButtonTextSugestion} >AVANÇAR</Text>
                        <IconButton icon="arrow-right-thin" iconColor={ColorsApp.PRIMARY} size={40} style={screenWidth >= 768 ? Styles.ButtonIconSugestionTablet : Styles.ButtonIconSugestion} ></IconButton>
                        {/* </View> */}
                    </TouchableOpacity>


                    <TouchableOpacity  onPress={() => { sendNPS() }} >

                        <Text style={screenWidth >= 768 ? Styles.NextSugestionTablet : Styles.NextSugestion} >RETORNAR PARA A TELA PRINCIPAL</Text>

                    </TouchableOpacity>

                </View>
                <Footer />
            </SafeAreaView>
        </ScrollView>

    );



}
