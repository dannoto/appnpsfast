import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Alert, TouchableOpacity, Dimensions, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { Text, TextInput, Button } from 'react-native-paper';
import Styles from '../config/Styles';
import ColorsApp from '../config/ColorsApp';

import { npsLogin } from '../config/DataApp'
import Loading from '../components/AppLoading';
import { useKeepAwake } from 'expo-keep-awake';


export default function Login(props) {
    useKeepAwake();

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


    if (!loading) {


        return (
            <Loading />

        );

    }



    if (loading) {



        return (
            <ScrollView style={{ backgroundColor: ColorsApp.BACK }}>


                <SafeAreaView style={{ flex: 1, justifyContent: 'center', marginBottom: 30 }}>
                    <Image source={require('../../assets/logo.png')} resizeMode={"contain"} style={Styles.AuthLogo} />

                    <View style={screenWidth >= 768 ? Styles.AuthContentTablet : Styles.AuthContent}>

                        <Text style={screenWidth >= 768 ? Styles.TabletAuthInputLabel : Styles.AuthInputLabel}>EMAIL</Text>
                        <TextInput onChangeText={text => setEmail(text)} mode="flat" autoCapitalize="none" style={screenWidth >= 768 ? Styles.TabletAuthInput : Styles.AuthInput} />

                        <Text style={screenWidth >= 768 ? Styles.TabletAuthInputLabel : Styles.AuthInputLabel}>SENHA</Text>
                        <TextInput onChangeText={text => setPassword(text)} mode="flat" secureTextEntry={true} style={screenWidth >= 768 ? Styles.TabletAuthInput : Styles.AuthInput} />
                        <TouchableOpacity activeOpacity={0.9} onPress={() => onChangeScreen('recuperacao')}>
                            <Text style={screenWidth >= 768 ? Styles.TabletForgotPass : Styles.ForgotPass}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                        <Button mode="contained" onPress={() => Authenticando()} dark={true} style={screenWidth >= 768 ? Styles.TabletAuthButton : Styles.AuthButton} contentStyle={screenWidth >= 768 ? Styles.AuthButtonContentTablet : Styles.AuthButtonContent} labelStyle={screenWidth >= 768 ? Styles.TabletAuthButtonLabel : Styles.AuthButtonLabel}>
                            <Text style={screenWidth >= 768 ? Styles.ButtonTextAuthTablet : Styles.ButtonTextAuth} >FAZER LOGIN</Text>

                        </Button>

                    </View>

                </SafeAreaView>

            </ScrollView>


        );
    }


}
