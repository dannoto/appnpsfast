import React, { useState } from 'react';
import { SafeAreaView, View, Alert, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import Styles from '../config/Styles';
import ColorsApp from '../config/ColorsApp';

import { npsRecuperacao } from '../config/DataApp'
import { ScrollView } from 'react-native-gesture-handler';
import { useKeepAwake } from 'expo-keep-awake';

export default function Recuperacao(props) {

    useKeepAwake();

    console.log('======== PAGINA - RECUPERACAO =============')

    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');

    const onChangeScreen = (screen) => {
        props.navigation.navigate(screen);
    };

    const Recuperacao = async () => {

        if (email.length < 3) {

            console.log('Preencha o email corretamente.')
                        Alert.alert('Opss', 'Preencha o email corretamente.', [

                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ]);
        } else {

            npsRecuperacao(email).then((response) => {


                try {

                    // var data = JSON.parse(response)
                    // console.log(response)

                    if (response == "Sucesso") {

                        console.log("Email enviado com sucesso.")
                        Alert.alert('', 'Email enviado com sucesso.', [

                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ]);

                    } else if (response == "E-mail inexistente!") {

                        console.log("Nenhuma conta com este e-mail.")
                        Alert.alert('Opss', 'Nenhuma conta com este e-mail.', [

                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ]);
                    }


                } catch (error) {

                    console.log('Erro na requisição. Tente novamente.')
                    Alert.alert('Opss', 'Erro na requisição. Tente novamente.', [

                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ]);


                }


            }).catch((error) =>

                console.log("Erro na requisição. Contate o suporte.")
            )
        }

    }

    return (


        <ScrollView style={{ backgroundColor: ColorsApp.BACK }}>
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', marginBottom: 30 }}>
                <Image source={require('../../assets/logo.png')} resizeMode={"contain"} style={Styles.RecuperacaoLogo} />

                <View style={screenWidth >= 768 ? Styles.RecuperacaoContentTablet : Styles.RecuperacaoContent}>

                    <Text style={screenWidth >= 768 ? Styles.TabletAuthInputLabel : Styles.AuthInputLabel}>EMAIL</Text>
                    <TextInput onChangeText={text => setEmail(text)} mode="flat" autoCapitalize="none" style={screenWidth >= 768 ? Styles.TabletAuthInput : Styles.AuthInput} />


                    <Button mode="contained" onPress={() => Recuperacao()} dark={true} style={screenWidth >= 768 ? Styles.TabletAuthButton : Styles.AuthButton} contentStyle={Styles.AuthButtonContent} labelStyle={screenWidth >= 768 ? Styles.TabletAuthButtonLabel : Styles.AuthButtonLabel}>
                        <Text style={screenWidth >= 768 ? Styles.ButtonTextAuthTablet : Styles.ButtonTextAuth} >RECUPERAR</Text>

                    </Button>

                </View>

            </SafeAreaView>
        </ScrollView>


    );
}
