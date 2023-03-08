import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import ColorsApp from '../config/ColorsApp';

export default function InnerLoading(){

		return(
			<View style={{marginVertical:50}}>
			<ActivityIndicator color={ColorsApp.PRIMARY} size={50} />
			</View>
			);
}