import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Alert, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Text, TextInput, Button, IconButton } from 'react-native-paper';
import Styles from '../../config/Styles';
import ColorsApp from '../../config/ColorsApp';


import { map } from 'lodash';
import Empty from '../../components/Empty';


import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Emoji(props) {


    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [orientation, setOrientation] = useState("PORTRAIT");
    const [IconSize, setIconSize] = useState(80);

    const [question, setQuestion] = useState([]);


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


        function getQuestion() {

            setQuestion(props.question);
        }

        getQuestion() 

    }, []);



    const onChangeScreen = (screen) => {
        props.navigation.navigate(screen);
    };


    const Next = async () => {
        onChangeScreen('stepcontact')
    }


    console.log(orientation)


    return (

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={{ flex: 1, height: '100%', backgroundColor: '#FFF' }}>
                <Header />
                <ScrollView style={screenWidth >= 768 ? Styles.ContainerSugestionTablet : Styles.ContainerSugestion}>


                    {/* <Text style={screenWidth >= 768 ? Styles.TitleSugestionTablet : Styles.TitleSugestion} >Deseja deixar alguma <Text style={{ fontWeight: 600 }}>sugestão</Text> ou <Text style={{ fontWeight: 600 }}>comentário</Text>?</Text> */}

                    <Text style={screenWidth >= 768 ? Styles.TitleSugestionTablet : Styles.TitleSugestion} >{question.descQuestao}</Text>

                    <Text style={screenWidth >= 768 ? Styles.LabelSugestionTablet : Styles.LabelSugestion} >Sua Mensagem</Text>

                    <TextInput
                        multiline={true}
                        numberOfLines={30}
                        textAlignVertical={"top"}
                        style={screenWidth >= 768 ? Styles.InputSugestionTablet : Styles.InputSugestion}
                    />

                    <TouchableOpacity onPress={() => { Next() }} style={[screenWidth >= 768 ? Styles.ButtonNpsFullTablet : Styles.ButtonNpsFull]} >
                        {/* <View style={screenWidth >= 768 ? Styles.ButtonViewSugestionTablet : Styles.ButtonViewSugestion} > */}
                        <Text style={screenWidth >= 768 ? Styles.ButtonTextSugestionTablet : Styles.ButtonTextSugestion} >AVANÇAR</Text>
                        <IconButton icon="arrow-right-thin" iconColor={ColorsApp.PRIMARY} size={40} style={screenWidth >= 768 ? Styles.ButtonIconSugestionTablet : Styles.ButtonIconSugestion} ></IconButton>
                        {/* </View> */}
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => { Next() }}  >

                        <Text style={screenWidth >= 768 ? Styles.NextSugestionTablet : Styles.NextSugestion} >PULAR ESSA ETAPA</Text>

                    </TouchableOpacity>

                </ScrollView>
                <Footer />
            </SafeAreaView>
        </ScrollView>

    );



}
