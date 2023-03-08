import React,  { useState, useEffect } from 'react';
import { I18nManager, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Recuperacao from '../screens/Recuperacao';


import StepNps from '../screens/StepNps';
import StepFullNps from '../screens/StepFullNps';
import StepSugestion from '../screens/StepSugestion';
import StepContact from '../screens/StepContact';
import StepObrigado from '../screens/StepObrigado';



import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const RootStack = createStackNavigator();

export default function GuestNavigation(props) {

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


	const buttonBack = () => {
		return (
			<IconButton icon={I18nManager.isRTL ? "arrow-right" : "arrow-left"} style={{ marginLeft: 15, color: "transparent" }} size={24} onPress={() => navigation.goBack()} />
		)
	};

	const Logout = () => {
		// if (theme === "dark") {
		// 	toggleTheme("dark");

		// } else {
		// 	toggleTheme("light");
		// }
		console.log('deslogado')
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
			fontWeight: 600,
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
			<RootStack.Screen name="recuperacao" component={Recuperacao} options={{ title: null, headerLeft: () => buttonBack() }} />

			<RootStack.Screen name="home" component={Home} options={{ title: null,  headerTransparent: false, Style: {headerBackground:'#FFFF'}, headerLeft: ()=> ButtonLogout(), }} />
			<RootStack.Screen name="stepnps" component={StepNps} options={{ title: null, headerTransparent: true, headerLeft: ()=> null, }}  />
			<RootStack.Screen name="stepfullnps" component={StepFullNps} options={{ title: null, headerTransparent: true, headerLeft: ()=> null, }}  />
			<RootStack.Screen name="stepsugestion" component={StepSugestion} options={{ title: null, headerTransparent: true, headerLeft: ()=> null, }}  />
			<RootStack.Screen name="stepcontact" component={StepContact} options={{ title: null, headerTransparent: true, headerLeft: ()=> null, }}  />
			<RootStack.Screen name="stepobrigado" component={StepObrigado} options={{ title: null, headerTransparent: true, headerLeft: ()=> null, }}  />


		</RootStack.Navigator>
	)
}