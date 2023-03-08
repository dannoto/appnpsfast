import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import ColorsApp from '../config/ColorsApp.js';

export default function AppLoading(){

		return(
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: ColorsApp.PRIMARY}}>
			<ActivityIndicator color={'#FFF'} size={"large"} />
			</View>
			);
}