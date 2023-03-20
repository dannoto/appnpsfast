import React,  { useState, useEffect } from 'react';
import { I18nManager, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';

import Login from '../screens/Login';
import Recuperacao from '../screens/Recuperacao';




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

			<RootStack.Screen name="recuperacao" component={Recuperacao} options={{ title: null, headerLeft: () => buttonBack() }} />



		</RootStack.Navigator>
	)
}