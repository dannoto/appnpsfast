import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Alert, TouchableOpacity, Dimensions, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { Text, TextInput, Button } from 'react-native-paper';
import Styles from '../config/Styles';
import ColorsApp from '../config/ColorsApp';
import { npsLogin, makeRequest } from '../config/DataApp'
import Loading from '../components/AppLoading';
import { useKeepAwake } from 'expo-keep-awake';

import * as Device from 'expo-device';

export default function Home(props) {

    useKeepAwake();

    const [orientation, setOrientation] = useState("PORTRAIT");
    const [deviceType, setDeviceType] = useState("")

    // DeviceType
    Device.getDeviceTypeAsync().then((v) => {
        setDeviceType(v)
    })
    // DeviceType

    // Orientation
    useEffect(() => {

        Dimensions.addEventListener('change', ({ window: { width, height } }) => {

            if (width < height) {
                setOrientation("PORTRAIT")
            } else {
                setOrientation("LANDSCAPE")
            }

            console.log(orientation)
        })

    }, [orientation]);
    // Orientation

    console.log('======== PAGINA - LOGIN =============')

    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeScreen = (screen) => {
        props.navigation.navigate(screen);
    };

    useEffect(() => {

        const getItemFromStorage = async () => {

            // console.log('running auth')

            try {

                await AsyncStorage.getItem('auth', (error, result) => {

                    if (result) {
                        console.log(result);

                        var data = JSON.parse(result)

                        if (data.token) {

                            console.log('logado app.js')
                            // console.log(data.token)

                            onChangeScreen('home')

                        } else {
                            console.log('nao logado')
                            setLoading(true)
                            // return false;


                        }

                    } else {

                        // return false;
                        setLoading(true)

                        console.log('false 1')
                    }

                });

            } catch (error) {

                // return false;
                setLoading(true)

                console.log('false 2')

            }
        }

        getItemFromStorage()



    }, []);


    const Authenticando = async () => {

        if (email.length < 3) {

            console.log('Preencha o login corretamente.')
            Alert.alert('Opss', 'Preencha o email corretamente.', [

                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);

        } else if (password.length < 3) {

            console.log('Preencha a senha corretamente.')
            Alert.alert('Opss', 'Preencha a senha corretamente.', [

                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);

        } else {

            // fetch("")

            // onChangeScreen('home')
            npsLogin(email, password).then((response) => {



                try {


                    // var response = JSON.parse(response)
                    // console.log("==============")
                    // console.log(response)

                    if (response.token.length > 0) {
                        console.log('logado com sucesso')
                        console.log(response.token)

                        AsyncStorage.setItem(
                            'auth',
                            JSON.stringify(response)
                        );

                        onChangeScreen('home')



                    } else {
                        console.log('Suas credenciais estão incorretas.')
                        Alert.alert('Opss', 'Suas credenciais estão incorretas.', [

                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ]);
                    }

                } catch (error) {

                    console.log('Catch erro.')
                    Alert.alert('Opss', 'Suas credenciais estão incorretas.', [

                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ]);
                }


            }).catch((error) => {

                console.log("Erro na requisição. Contate o suporte.")

                Alert.alert('Opss', 'Suas credenciais estão incorretas.', [

                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]);
            }

            )
        }
    }


    if (orientation == "PORTRAIT") {

        return (
            <ScrollView style={{ backgroundColor: ColorsApp.BACK }}>
                <SafeAreaView style={{ flex: 1, justifyContent: 'center', marginBottom: 30, paddingVertical: 60 }}>
                    <Image source={require('../../assets/logo.png')} resizeMode={"contain"} style={Styles.AuthLogo} />
                    <View style={deviceType != 1 ? Styles.AuthContentTablet : Styles.AuthContent}>
                        <Text style={deviceType != 1 ? Styles.TabletAuthInputLabel : Styles.AuthInputLabel}>EMAIL</Text>
                        <TextInput onChangeText={text => setEmail(text)} mode="flat" autoCapitalize="none" style={deviceType != 1 ? Styles.TabletAuthInput : Styles.AuthInput} />
                        <Text style={deviceType != 1 ? Styles.TabletAuthInputLabel : Styles.AuthInputLabel}>SENHA</Text>
                        <TextInput onChangeText={text => setPassword(text)} mode="flat" secureTextEntry={true} style={deviceType != 1 ? Styles.TabletAuthInput : Styles.AuthInput} />
                        <TouchableOpacity activeOpacity={0.9} onPress={() => onChangeScreen('recuperacao')}>
                            <Text style={deviceType != 1 ? Styles.TabletForgotPass : Styles.ForgotPass}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                        <TouchableOpacity mode="contained" onPress={() => Authenticando()} dark={true} style={deviceType != 1 ? Styles.TabletAuthButton : Styles.AuthButton} contentStyle={deviceType != 1 ? Styles.AuthButtonContentTablet : Styles.AuthButtonContent} labelStyle={deviceType != 1 ? Styles.TabletAuthButtonLabel : Styles.AuthButtonLabel}>
                            <Text style={deviceType != 1 ? Styles.ButtonTextAuthTablet : Styles.ButtonTextAuth} >FAZER LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ScrollView>
        );

    } else {

        return (
            <ScrollView style={{ backgroundColor: ColorsApp.BACK }}>
                <SafeAreaView style={{ flex: 1, justifyContent: 'center', marginBottom: 30, paddingVertical: 60 }}>
                    <Image source={require('../../assets/logo.png')} resizeMode={"contain"} style={Styles.AuthLogo} />
                    <View style={deviceType != 1 ? Styles.AuthContentTablet : Styles.AuthContent}>
                        <Text style={deviceType != 1 ? Styles.TabletAuthInputLabel : Styles.AuthInputLabel}>EMAIL</Text>
                        <TextInput onChangeText={text => setEmail(text)} mode="flat" autoCapitalize="none" style={deviceType != 1 ? Styles.TabletAuthInput : Styles.AuthInput} />
                        <Text style={deviceType != 1 ? Styles.TabletAuthInputLabel : Styles.AuthInputLabel}>SENHA</Text>
                        <TextInput onChangeText={text => setPassword(text)} mode="flat" secureTextEntry={true} style={deviceType != 1 ? Styles.TabletAuthInput : Styles.AuthInput} />
                        <TouchableOpacity activeOpacity={0.9} onPress={() => onChangeScreen('recuperacao')}>
                            <Text style={deviceType != 1 ? Styles.TabletForgotPass : Styles.ForgotPass}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                        <TouchableOpacity mode="contained" onPress={() => Authenticando()} dark={true} style={deviceType != 1 ? Styles.TabletAuthButton : Styles.AuthButton} contentStyle={deviceType != 1 ? Styles.AuthButtonContentTablet : Styles.AuthButtonContent} labelStyle={deviceType != 1 ? Styles.TabletAuthButtonLabel : Styles.AuthButtonLabel}>
                            <Text style={deviceType != 1 ? Styles.ButtonTextAuthTablet : Styles.ButtonTextAuth} >FAZER LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ScrollView>
        );

    }


}
