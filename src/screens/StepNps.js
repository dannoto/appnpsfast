import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Alert, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Text, TextInput, Button, IconButton } from 'react-native-paper';
import Styles from '../config/Styles';
import ColorsApp from '../config/ColorsApp';

import Footer from '../components/Footer';
import Header from '../components/Header';


export default function StepNps(props) {


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


    const sendNPS = async () => {
        onChangeScreen('stepfullnps')
    }


    console.log(orientation)




    // if (screenWidth >= 768 || orientation == "LANDSCAPE") {

    return (


        
        <ScrollView  contentContainerStyle={{flexGrow: 1}}>
            <SafeAreaView style={{ flex: 1, height: '100%', backgroundColor: '#FFF', flexDirection: 'column', justifyContent: 'space-between'}}>
                <Header />
                <View style={screenWidth >= 768 ? Styles.ContainerNPSTablet : Styles.ContainerNPS}>
                    <Text style={screenWidth >= 768 ? Styles.TitleNPSTablet : Styles.TitleNPS}>Em uma escala de 0 a 10. Quanto você recomendaria?</Text>
                    <View style={screenWidth >= 768 ? Styles.DivNPSTablet : Styles.DivNPS}>
                        <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPS} >
                            <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS0]}>
                                <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>0</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPS} >
                            <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS1]}>
                                <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>1</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPS} >
                            <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS2]}>
                                <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>2</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPS} >
                            <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS3]}>
                                <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>3</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPS} >
                            <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS4]}>
                                <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>4</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPS} >
                            <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS5]}>
                                <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>5</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPS} >
                            <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS6]}>
                                <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>6</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPS} >
                            <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS7]}>
                                <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>7</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPS} >
                            <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS8]}>
                                <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>8</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPS} >
                            <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS9]}>
                                <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>9</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPS} >
                            <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS10]}>
                                <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>10</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>
                <Footer />
            </SafeAreaView>
        </ScrollView>

    );

    // } else {

    //     return (

    //         <SafeAreaView style={{ flex: 1, height: '100%' }}>
    //             <Header />
    //             <View style={screenWidth >= 768 ? Styles.ContainerNPSTablet : Styles.ContainerNPS}>

    //                 <Text style={screenWidth >= 768 ? Styles.TitleNPSTablet : Styles.TitleNPS}>Em uma escala de 0 a 10. Quanto você recomendaria?</Text>

    //                 <View style={screenWidth >= 768 ? Styles.DivNPSTablet : Styles.DivNPS}>
    //                     <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPSPortraitUp} >
    //                         <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS0]}>
    //                             <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>0</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                     <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPSPortraitUp} >
    //                         <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS1]}>
    //                             <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>1</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                     <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPSPortraitUp} >
    //                         <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS2]}>
    //                             <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>2</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                     <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPSPortraitUp} >
    //                         <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS3]}>
    //                             <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>3</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                     <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPSPortraitUp} >
    //                         <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS4]}>
    //                             <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>4</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                     <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPSPortraitUp} >
    //                         <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS5]}>
    //                             <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>5</Text>
    //                         </TouchableOpacity>
    //                     </View>

    //                 </View>
    //                 <View style={screenWidth >= 768 ? Styles.DivNPSTablet : Styles.DivNPS}>
    //                     <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPSPortraitDown} >
    //                         <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS6]}>
    //                             <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>6</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                     <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPSPortraitDown} >
    //                         <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS7]}>
    //                             <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>7</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                     <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPSPortraitDown} >
    //                         <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS8]}>
    //                             <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>8</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                     <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPSPortraitDown} >
    //                         <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS9]}>
    //                             <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>9</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                     <View style={screenWidth >= 768 ? Styles.ItemNPSTablet : Styles.ItemNPSPortraitDown} >
    //                         <TouchableOpacity onPress={() => { sendNPS() }} style={[screenWidth >= 768 ? Styles.ItemTouchNPSTablet : Styles.ItemTouchNPS, Styles.LabelNPS10]}>
    //                             <Text style={screenWidth >= 768 ? Styles.ItemTextNPSTablet : Styles.ItemTextNPS}>10</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                 </View>

    //             </View>
    //             <Footer />
    //         </SafeAreaView>

    //     );

    // }

}
