import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native-web';


export async function npsLogin(email, password) {
  try {

    const url = 'https://app.npsfast.com.br/api/Account/Login';
    let response = await fetch(url,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            "Login": email,
            "Password": password
          }
        )
      }
    );
    let responseJson = await response.json();

    return responseJson;

  } catch (error) {

    return error;

    //   Alert.alert('Opss', 'Erro na api.', [
    //     {
    //         text: 'Cancel',
    //         onPress: () => console.log('Cancel Pressed'),
    //         style: 'cancel',
    //     },
    //     { text: 'OK', onPress: () => console.log('OK Pressed') },
    // ]);

  }
}


export async function npsFiliais(token) {
  try {

    const url = 'https://app.npsfast.com.br/api/Filiais';

    let response = await fetch(url,
      {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );

    let responseJson = await response.json();

    return responseJson;

  } catch (error) {

    return error;

    //   Alert.alert('Opss', 'Erro na api.', [
    //     {
    //         text: 'Cancel',
    //         onPress: () => console.log('Cancel Pressed'),
    //         style: 'cancel',
    //     },
    //     { text: 'OK', onPress: () => console.log('OK Pressed') },
    // ]);

  }
}


export async function npsFilial(token, filial_id) {
  try {
    const url = 'https://ccoanalitica.com/npsfast/?endpoint=filiais&token=' + token + '&filial=' + filial_id + '';
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {

    return error;

    //   Alert.alert('Opss', 'Erro na api.', [
    //     {
    //         text: 'Cancel',
    //         onPress: () => console.log('Cancel Pressed'),
    //         style: 'cancel',
    //     },
    //     { text: 'OK', onPress: () => console.log('OK Pressed') },
    // ]);

  }
}


export async function npsRecuperacao(email) {
  try {
    const url = 'https://app.npsfast.com.br/api/Account/PasswordRecovery';
    let response = await fetch(url,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            "Email": email,
          }
        )
      });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {

    return error;

    //   Alert.alert('Opss', 'Erro na api.', [
    //     {
    //         text: 'Cancel',
    //         onPress: () => console.log('Cancel Pressed'),
    //         style: 'cancel',
    //     },
    //     { text: 'OK', onPress: () => console.log('OK Pressed') },
    // ]);

  }
}


