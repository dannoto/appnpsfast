import React from 'react';
import { I18nManager } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';

import Home from '../screens/Home';



// import StepObrigado from '../screens/StepObrigado';



const Stack = createStackNavigator();

export default function StackNavigation(props){


	const {navigation} = props;
	
	const navigatorOptions = {
		headerStyle: {
			shadowColor: 'transparent',
			elevation: 0,
			shadowOpacity: 0,
			backgroundColor: theme === "light" ? '#fff' : '#000'
		},
		headerTitleAlign: 'center'
	}

// ******************************** Buttons

const buttonBack = () => {
	return (
		<IconButton icon={I18nManager.isRTL ? "arrow-right" : "arrow-left"} style={{marginLeft:15}} size={24} onPress={() => navigation.goBack()}/>
		)
};

const buttonSearch = () => {
	return (
		<IconButton icon="magnify" size={24} style={{marginLeft:15}} onPress={() => navigation.goBack()}/>
		)
};

const buttonMenu = () => {
	return (
		<IconButton icon="menu" size={24} style={{marginLeft:15}} onPress={() => navigation.openDrawer()}/>
		)
};

return (
	<Stack.Navigator screenOptions={navigatorOptions}>
	<Stack.Screen name="home" component={Home} options={{title: "Home", headerLeft: () => buttonMenu()}} />
	{/* <Stack.Screen name="stepobrigado" component={StepObrigado} options={{title: "Obrigado", headerLeft: () => buttonMenu()}} /> */}


	</Stack.Navigator>
	)
}