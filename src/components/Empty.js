import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import ColorsApp from '../config/ColorsApp.js';
import Styles from '../config/Styles';


export default function Emptry() {


    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50, marginBottom: 50 }}>
            <Text styles={screenWidth >= 768 ? Styles.emptyTitleTablet : Styles.emptyTitle}>NENHUM RESULTADO ENCONTRADO.</Text>
        </View>
    );
}