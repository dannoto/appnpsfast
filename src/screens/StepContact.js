import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Alert, TouchableOpacity, Image, Dimensions } from 'react-native-web';
import { Text, TextInput, Button, IconButton } from 'react-native-paper';
import Styles from '../config/Styles';
import ColorsApp from '../config/ColorsApp';

import Footer from '../components/Footer';
import Header from '../components/Header';


export default function StepContact(props) {


    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


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



    const onChangeScreen = (screen) => {
        props.navigation.navigate(screen);
    };


    const Next = async () => {
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
                    <TextInput
                        multiline={false}
                        numberOfLines={1}
                        style={screenWidth >= 768 ? Styles.InputDefaultTablet : Styles.InputDefault}
                    />

                    <Text style={screenWidth >= 768 ? Styles.LabelSugestionTablet : Styles.LabelSugestion} >Seu E-mail</Text>
                    <TextInput
                        multiline={false}
                        numberOfLines={1}
                        style={screenWidth >= 768 ? Styles.InputDefaultTablet : Styles.InputDefault}
                    />

                    <Text style={screenWidth >= 768 ? Styles.LabelSugestionTablet : Styles.LabelSugestion} >Seu Telefone</Text>
                    <TextInput
                        multiline={false}
                        numberOfLines={1}
                        style={screenWidth >= 768 ? Styles.InputDefaultTablet : Styles.InputDefault}
                    />

                    <Text style={{marginBottom:20}}></Text>

                    <TouchableOpacity onPress={() => { Next() }} style={[screenWidth >= 768 ? Styles.ButtonNpsFullTablet : Styles.ButtonNpsFull]} >
                        {/* <View style={screenWidth >= 768 ? Styles.ButtonViewSugestionTablet : Styles.ButtonViewSugestion} > */}
                        <Text style={screenWidth >= 768 ? Styles.ButtonTextSugestionTablet : Styles.ButtonTextSugestion} >AVANÇAR</Text>
                        <IconButton icon="arrow-right-thin" iconColor={ColorsApp.PRIMARY} size={40} style={screenWidth >= 768 ? Styles.ButtonIconSugestionTablet : Styles.ButtonIconSugestion} ></IconButton>
                        {/* </View> */}
                    </TouchableOpacity>


                    <TouchableOpacity  onPress={() => { Next() }} >

                        <Text style={screenWidth >= 768 ? Styles.NextSugestionTablet : Styles.NextSugestion} >RETORNAR PARA A TELA PRINCIPAL</Text>

                    </TouchableOpacity>

                </View>
                <Footer />
            </SafeAreaView>
        </ScrollView>

    );



}
