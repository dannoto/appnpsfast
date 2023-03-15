import React,  { useState, useEffect } from 'react';
import { I18nManager, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';

import Login from '../screens/Login';
import Recuperacao from '../screens/Recuperacao';

import AsyncStorage from '@react-native-async-storage/async-storage';

import ColorsApp from '../config/ColorsApp';

import Home from '../screens/Home';
import PontosContato from '../screens/PontosContato';
import RunPesquisa from '../screens/RunPesquisa';


import RadioBottom from '../screens/Questoes/RadioBottom';
import CheckBox from '../screens/Questoes/CheckBox';
import CaixaDeTexto from '../screens/Questoes/CaixaDeTexto';
import Emoji from '../screens/Questoes/Emoji';
import Label from '../screens/Questoes/Label';


import StepContact from '../screens/StepContact';
import StepObrigado from '../screens/StepObrigado';


import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const RootStack = createStackNavigator();

export default function DrawerNavigation(props) {

	const navigation = useNavigation();

	const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

	const [iconSize, setIconSize] = useState("")
 
    useEffect(() => {

          if ( screenWidth >= 768) {
			setIconSize(50)
		  } else {
			setIconSize(40)
		  }

    }, []);

	const onChangeScreen = (screen) => {
        navigation.navigate(screen);
    };

	const buttonBack = () => {
		return (
			<IconButton icon={I18nManager.isRTL ? "arrow-right" : "arrow-left"} style={{ marginLeft: 15, color: "transparent" }} size={24} onPress={() => navigation.goBack()} />
		)
	};

	const Logout = async () => {

		console.log('logout')
		AsyncStorage.removeItem('codFilial');
		AsyncStorage.removeItem('auth');

		onChangeScreen('login')
	}

	const ButtonLogout = () => {
		return (
			<IconButton icon={"logout"} style={{ marginHorizontal: 15, color:  "black", marginVertical:15 }} size={iconSize} onPress={() => Logout()} />
			
		)
	};

	const navigatorOptions = {
		headerStyle: {
			shadowColor: 'transparent',
			elevation: 0,
			shadowOpacity: 0,
		},
		presentation: 'modal',
		headerTitleStyle: {
			
			fontSize: 18,
		},
		headerTintColor: "black",
		headerBackTitleVisible: false,
		headerTitleAlign: 'center',
		gestureEnabled: true,
		/*cardOverlayEnabled: true,
		...TransitionPresets.ModalPresentationIOS*/
	}

	return (

		<RootStack.Navigator screenOptions={(route) => { return navigatorOptions }}>

 
      <RootStack.Screen name="login" component={Login} options={{ title: null, headerTransparent: true }} />
			<RootStack.Screen name="recuperacao" component={Recuperacao} options={{ title: null, headerTransparent: true,   headerLeft: () => buttonBack() }} />
			<RootStack.Screen name="home" component={Home} options={{ title: null,  headerTransparent: true,  headerLeft: ()=> ButtonLogout() }} />
      <RootStack.Screen name="pontoscontato" component={PontosContato} options={{ title: null, headerTransparent: true,  headerLeft: () => buttonBack() }}  />
      <RootStack.Screen name="runpesquisa" component={RunPesquisa} options={{ title: null, headerTransparent: true,  headerLeft: ()=> null, }}  />
			
			<RootStack.Screen name="radiobottom" component={RadioBottom} options={{ title: null, headerTransparent: true,  headerLeft: ()=> null, }}  />
			<RootStack.Screen name="caixadetexto" component={CaixaDeTexto} options={{ title: null, headerTransparent: true,  headerLeft: ()=> null, }}  />
			<RootStack.Screen name="check" component={CheckBox} options={{ title: null, headerTransparent: true,  headerLeft: ()=> null, }}  />
			<RootStack.Screen name="label" component={Label} options={{ title: null, headerTransparent: true,  headerLeft: ()=> null, }}  />
			<RootStack.Screen name="emoji" component={Emoji} options={{ title: null, headerTransparent: true,  headerLeft: ()=> null, }}  />


			<RootStack.Screen name="stepcontact" component={StepContact} options={{ title: null, headerTransparent: true,  headerLeft: ()=> null, }}  />
			<RootStack.Screen name="stepobrigado" component={StepObrigado} options={{ title: null, headerTransparent: true,  headerLeft: ()=> null, }}  />



		</RootStack.Navigator>
	)
}