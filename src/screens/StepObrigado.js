import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Alert, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Text, TextInput, Button, IconButton } from 'react-native-paper';
import Styles from '../config/Styles';
import ColorsApp from '../config/ColorsApp';

import Footer from '../components/Footer';
import Header from '../components/Header';
// import { ScrollView } from 'react-native-web';


export default function StepObrigado(props) {


    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [orientation, setOrientation] = useState("PORTRAIT");
    const [IconSize, setIconSize] = useState("");

    useEffect(() => {

 
          if (screenWidth >= 768 ) 
          { 
              setIconSize(150)   
  
          } else { 
  
              setIconSize(80)  
          } 


  
    }, []);
  
    const onChangeScreen = (screen) => {
      props.navigation.navigate(screen);
  };


  const Next = async () => {
      onChangeScreen('stepnps')
  }
    // return orientation;

    // console.log(orientation)

    // if (orientation == "LANDSCAPE") { 

       

    // } else {  

       
    // }


    return (

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView style={{ flex: 1 , height:'100%', backgroundColor:'#FFF'}}>


            <Header />

            <View style={screenWidth >= 768 ? Styles.ContainerObrigadoTablet : Styles.ContainerObrigado}>

                <View style={{ flex: 1}}>
                    

                        <IconButton icon="check-decagram" iconColor={"green"} size={ IconSize } style={ screenWidth >= 768 ? Styles.IconObrigadoTablet : Styles.IconObrigado} />

                        <Text style={screenWidth >= 768 ? Styles.TitleObrigadoTablet : Styles.TitleObrigado}>Seu cadastro foi efetuado com sucesso</Text>
                        <Text style={screenWidth >= 768 ? Styles.SubtitleObrigadoTablet : Styles.SubtitleObrigado}>Volte sempre adoramos ter você por aqui.</Text>


                        <TouchableOpacity onPress={() => { Next() }} style={{marginTop:'5%'}}>
                            <Text style={screenWidth >= 768 ? Styles.ReturnTextObrigadoTablet : Styles.ReturnTextObrigado}>retornar para a tela principal</Text>
                        </TouchableOpacity>

                </View>
            </View>

            <Footer />



        </SafeAreaView>
      </ScrollView>


    );
}
