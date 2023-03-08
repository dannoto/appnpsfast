import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Alert, TouchableOpacity, Image, Dimensions } from 'react-native-web';
import { Text, TextInput, Button, IconButton } from 'react-native-paper';
import Styles from '../config/Styles';
import ColorsApp from '../config/ColorsApp';

import Footer from '../components/Footer';
import Header from '../components/Header';


export default function StepFullNps(props) {


    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [orientation, setOrientation] = useState("PORTRAIT");
    const [IconSize, setIconSize] = useState("");



    useEffect(() => {

    

                if (screenWidth >= 768) {
                    setIconSize(75)

                } else {

                    setIconSize(40)
                }


    }, []);



    const onChangeScreen = (screen) => {
        props.navigation.navigate(screen);
    };


    const Next = async () => {
        onChangeScreen('stepsugestion')
    }


    console.log(orientation)


    return (

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={{ flex: 1, height: '100%', backgroundColor: '#FFF' }}>
                <Header />
                <View style={screenWidth >= 768 ? Styles.ContainerNPSFullTablet : Styles.ContainerNPSFull}>

                    <Text style={screenWidth >= 768 ? Styles.TitleContactTablet : Styles.TitleContact} > <Text style={{ fontWeight: 600 }}> Queremos melhorar sua experiência em nossas lojas.</Text> </Text>
                    <Text style={screenWidth >= 768 ? Styles.SubTitleFullNpsTablet : Styles.SubTitleFullNps} >Você pode nos ajudar deixando sua opinião.</Text>


                    <View style={screenWidth >= 768 ? Styles.DivFullTablet : Styles.DivFull}>
                        <View style={screenWidth >= 768 ? Styles.ItemFullTablet : Styles.ItemFull}>

                            <View style={screenWidth >= 768 ? Styles.ItemLabelTablet : Styles.ItemLabel}>
                                <Text style={screenWidth >= 768 ? Styles.TextFullTablet : Styles.TextFull}>Atendimento</Text>
                            </View>

                            <View style={screenWidth >= 768 ? Styles.ItemFaceTablet : Styles.ItemFace}>
                                {/* <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'green'}}> */}
                                <TouchableOpacity>
                                    <IconButton icon="emoticon-happy-outline" size={IconSize} color={"green"} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <IconButton icon="emoticon-sad-outline" size={IconSize} color={"green"} />
                                </TouchableOpacity>
                                {/* </View> */}

                            </View>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemFullTablet : Styles.ItemFull}>

                            <View style={screenWidth >= 768 ? Styles.ItemLabelTablet : Styles.ItemLabel}>
                                <Text style={screenWidth >= 768 ? Styles.TextFullTablet : Styles.TextFull}>Tempo de Espera</Text>
                            </View>

                            <View style={screenWidth >= 768 ? Styles.ItemFaceTablet : Styles.ItemFace}>
                                {/* <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'green'}}> */}
                                <TouchableOpacity>
                                    <IconButton icon="emoticon-happy-outline" size={IconSize} color={"green"} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <IconButton icon="emoticon-sad-outline" size={IconSize} color={"green"} />
                                </TouchableOpacity>
                                {/* </View> */}

                            </View>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemFullTablet : Styles.ItemFull}>

                            <View style={screenWidth >= 768 ? Styles.ItemLabelTablet : Styles.ItemLabel}>
                                <Text style={screenWidth >= 768 ? Styles.TextFullTablet : Styles.TextFull}>Preço</Text>
                            </View>

                            <View style={screenWidth >= 768 ? Styles.ItemFaceTablet : Styles.ItemFace}>
                                {/* <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'green'}}> */}
                                <TouchableOpacity>
                                    <IconButton icon="emoticon-happy-outline" size={IconSize} color={"green"} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <IconButton icon="emoticon-sad-outline" size={IconSize} color={"green"} />
                                </TouchableOpacity>
                                {/* </View> */}

                            </View>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemFullTablet : Styles.ItemFull}>

                            <View style={screenWidth >= 768 ? Styles.ItemLabelTablet : Styles.ItemLabel}>
                                <Text style={screenWidth >= 768 ? Styles.TextFullTablet : Styles.TextFull}>Variedades</Text>
                            </View>

                            <View style={screenWidth >= 768 ? Styles.ItemFaceTablet : Styles.ItemFace}>
                                {/* <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'green'}}> */}
                                <TouchableOpacity>
                                    <IconButton icon="emoticon-happy-outline" size={IconSize} color={"green"} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <IconButton icon="emoticon-sad-outline" size={IconSize} color={"green"} />
                                </TouchableOpacity>
                                {/* </View> */}

                            </View>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemFullTablet : Styles.ItemFull}>

                            <View style={screenWidth >= 768 ? Styles.ItemLabelTablet : Styles.ItemLabel}>
                                <Text style={screenWidth >= 768 ? Styles.TextFullTablet : Styles.TextFull}>Ambiente</Text>
                            </View>

                            <View style={screenWidth >= 768 ? Styles.ItemFaceTablet : Styles.ItemFace}>
                                {/* <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'green'}}> */}
                                <TouchableOpacity>
                                    <IconButton icon="emoticon-happy-outline" size={IconSize} color={"green"} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <IconButton icon="emoticon-sad-outline" size={IconSize} color={"green"} />
                                </TouchableOpacity>
                                {/* </View> */}

                            </View>
                        </View>

                    </View>




                    <TouchableOpacity onPress={() => { Next() }} style={[screenWidth >= 768 ? Styles.ButtonNpsFullTablet : Styles.ButtonNpsFull]} >
                        {/* <View style={screenWidth >= 768 ? Styles.ButtonViewSugestionTablet : Styles.ButtonViewSugestion} > */}
                        <Text style={screenWidth >= 768 ? Styles.ButtonTextSugestionTablet : Styles.ButtonTextSugestion} >AVANÇAR</Text>
                        <IconButton  icon="arrow-right-thin" iconColor={ColorsApp.PRIMARY} size={40} style={screenWidth >= 768 ? Styles.ButtonIconSugestionTablet : Styles.ButtonIconSugestion} ></IconButton>
                        {/* </View> */}
                    </TouchableOpacity>





                </View>
                <Footer />
            </SafeAreaView>
        </ScrollView>

    );



}
