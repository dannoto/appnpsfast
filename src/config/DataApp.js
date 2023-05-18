import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';






export async function npsLogin(Login, password) {

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
            "Login": Login,
            "Password": password  
          }
        )
      });
    let responseJson = await response.json();
    console.log(responseJson)
    return responseJson;
  } catch (error) {
    console.log(error)

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
  // try {

    // const url = 'https://ccoanalitica.com/npsfast/?endpoint=account/login&login='+email+'&password='+password;
  //   const url = 'https://app.npsfast.com.br/api/Account/Login';

  //   let response = await fetch(url,
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(
  //         {
  //           "Login": email,
  //           "Password": password
  //         }
  //       )
  //     }
  //   );

  //   let responseJson = await response.json();

  //   console.log(responseJson)
  //   return responseJson;



  // } catch (error) {

  //   console.log(error)

    // 

    //   Alert.alert('Opss', error.message, [
    //     {
    //         text: 'Cancel',
    //         onPress: () => console.log('Cancel Pressed'),
    //         style: 'cancel',
    //     },
    //     { text: 'OK', onPress: () => console.log('OK Pressed') },
    // ]);

  //   return error;

  // }
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
    console.log(responseJson)
    return responseJson;
  } catch (error) {
    console.log(error)

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

    // var data =

    // {
    //   "results": [
    //     // {
          
    //     //   "codFilial": 0,
    //     //   "nomeFilial": "string",
    //     //   "flagAtivo": true
    //     // },
    //     {
          
    //       "codFilial": 0,
    //       "nomeFilial": "string",
    //       "flagAtivo": true
    //     },
        
        
    
        
    //   ]
    // };

    // return data;

  } catch (error) {

    console.log(error)

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

export async function npsJornadas(token) {
  try {
    const url = 'https://app.npsfast.com.br/api/jornadas';
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

    // var responseJson =

    // {
    //   "results": [
    //     {
    //       "codCliente": 94,
    //       "codJornada": 3
    //       // "nomeFilial": "string",
    //       // "flagAtivo": true
    //     },
    //     {
    //       "codCliente": 94,
    //       "codJornada": 5
    //       // "nomeFilial": "string",
    //       // "flagAtivo": true
    //     },
    //   ]
    // };

    // return responseJson;



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

export async function npsPontosContato(token, codJornada) {
  try {
    const url = 'https://app.npsfast.com.br/api/PontosContato?codJornada=' + codJornada;
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

    // var responseJson =

    //   // {
    //   // "results": [

    //   [{
    //     "codPontoContato": 2,
    //     "descPontoContato": "Teste 1",
    //     "codTipoColeta": 5
    //   },
    //   {
    //     "codPontoContato": 2,
    //     "descPontoContato": "Teste 2",
    //     "codTipoColeta": 5

    //   },
    //     // {
    //     //   "codPontoContato": 2,
    //     //   "descPontoContato": "Teste 3",
    //     //   "codTipoColeta": 5

    //     // },
    //     // {
    //     //   "codPontoContato": 2,
    //     //   "descPontoContato": "Teste 4",
    //     //   "codTipoColeta": 5

    //     // }
    //   ]

    // ]
    // };

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

export async function npsQuestoes(token, codPontoContato) {
  try {
    const url = 'https://app.npsfast.com.br/api/Questoes?codPontoContato=' + codPontoContato;
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

    // let responseJson =
    // {
    //   "results": [
    //     {
    //       "visivel": true,
    //       "opcoes": [],
    //       "codQuestao": 35,
    //       "codTipoQuestao": 11,
    //       "codPaginaQuestao": 3,
    //       "nrQuestao": "APRESENTACAO",
    //       "descQuestao": "<p><span style=\"font-size: 18px;\"><b>Obrigado por responder a pesquisa, ela será bem rápida!</b></span><br></p>",
    //       "textoRodape": null,
    //       "flagObrigatorio": false,
    //       "qtdMin": null,
    //       "qtdMax": null,
    //       "responseJsonInclusao": "2023-03-15T11:17:00",
    //       "configuracoes": "{\"QuantidadeOpcoes\":0,\"Emojis\":false,\"RespostaObrigatoria\":false,\"RURM\":{\"RespostasNaVertical\":false},\"Aberta\":{\"MultiplasLinhas\":false}}"
    //     },
    //     {
    //       "visivel": true,
    //       "opcoes": [
    //         {
    //           "flagMostrar": true,
    //           "ordem": 10,
    //           "opcao": 0,
    //           "descOpcao": "0",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2022-10-25T12:07:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 20,
    //           "opcao": 1,
    //           "descOpcao": "1",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2022-10-25T12:07:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 30,
    //           "opcao": 2,
    //           "descOpcao": "2",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2022-10-25T12:07:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 40,
    //           "opcao": 3,
    //           "descOpcao": "3",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2022-10-25T12:07:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 50,
    //           "opcao": 4,
    //           "descOpcao": "4",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2022-10-25T12:07:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 60,
    //           "opcao": 5,
    //           "descOpcao": "5",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2022-10-25T12:07:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 70,
    //           "opcao": 6,
    //           "descOpcao": "6",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2022-10-25T12:07:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 80,
    //           "opcao": 7,
    //           "descOpcao": "7",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2022-10-25T12:07:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 90,
    //           "opcao": 8,
    //           "descOpcao": "8",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2022-10-25T12:07:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 100,
    //           "opcao": 9,
    //           "descOpcao": "9",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2022-10-25T12:07:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 110,
    //           "opcao": 10,
    //           "descOpcao": "10",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2022-10-25T12:07:00"
    //         }
    //       ],
    //       "codQuestao": 10,
    //       "codTipoQuestao": 12,
    //       "codPaginaQuestao": 3,
    //       "nrQuestao": "NPS",
    //       "descQuestao": "<span style=\"font-size: 18px;\"><b>Em uma escala de 0 a 10, o quanto você recomendaria?</b></span>",
    //       "textoRodape": null,
    //       "flagObrigatorio": false,
    //       "qtdMin": null,
    //       "qtdMax": null,
    //       "dataInclusao": "2022-10-25T12:07:00",
    //       "configuracoes": "{\"QuantidadeOpcoes\":0,\"Emojis\":false,\"RespostaObrigatoria\":false,\"RURM\":{\"RespostasNaVertical\":false},\"Aberta\":{\"MultiplasLinhas\":false}}"
    //     },
    //     {
    //       "visivel": true,
    //       "opcoes": [],
    //       "codQuestao": 11,
    //       "codTipoQuestao": 14,
    //       "codPaginaQuestao": 3,
    //       "nrQuestao": "NPS_V",
    //       "descQuestao": "<span style=\"font-size: 18px;\"><b>Por qual motivo você informou a nota acima?</b></span>",
    //       "textoRodape": null,
    //       "flagObrigatorio": false,
    //       "qtdMin": null,
    //       "qtdMax": null,
    //       "dataInclusao": "2022-10-25T12:07:00",
    //       "configuracoes": "{\"QuantidadeOpcoes\":0,\"Emojis\":false,\"RespostaObrigatoria\":false,\"RURM\":{\"RespostasNaVertical\":false},\"Aberta\":{\"MultiplasLinhas\":false}}"
    //     },
    //     {
    //       "visivel": true,
    //       "opcoes": [
    //         {
    //           "flagMostrar": true,
    //           "ordem": 10,
    //           "opcao": 1,
    //           "descOpcao": "<img src=\"/images/sbw1.png\" class=\"emoji-descricao smile\" />",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:17:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 20,
    //           "opcao": 3,
    //           "descOpcao": "<img src=\"/images/sbw3.png\" class=\"emoji-descricao smile\" />",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:17:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 30,
    //           "opcao": 5,
    //           "descOpcao": "<img src=\"/images/sbw5.png\" class=\"emoji-descricao smile\" />",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:17:00"
    //         }
    //       ],
    //       "codQuestao": 36,
    //       "codTipoQuestao": 16,
    //       "codPaginaQuestao": 3,
    //       "nrQuestao": "SATISFACAO_VERTICAL_3",
    //       "descQuestao": "<p><span style=\"font-size: 18px;\"></span><span style=\"font-size: 18px;\"><b>Pergunta de satisfação na vertical com 3</b></span><br></p>",
    //       "textoRodape": null,
    //       "flagObrigatorio": true,
    //       "qtdMin": null,
    //       "qtdMax": null,
    //       "dataInclusao": "2023-03-15T11:17:00",
    //       "configuracoes": "{\"QuantidadeOpcoes\":3,\"Emojis\":true,\"RespostaObrigatoria\":true,\"RURM\":{\"RespostasNaVertical\":true},\"Aberta\":{\"MultiplasLinhas\":false}}"
    //     },
    //     {
    //       "visivel": true,
    //       "opcoes": [
    //         {
    //           "flagMostrar": true,
    //           "ordem": 10,
    //           "opcao": 1,
    //           "descOpcao": "<img src=\"/images/sbw1.png\" class=\"emoji-descricao smile\" />",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:17:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 20,
    //           "opcao": 2,
    //           "descOpcao": "<img src=\"/images/sbw2.png\" class=\"emoji-descricao smile\" />",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:17:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 30,
    //           "opcao": 3,
    //           "descOpcao": "<img src=\"/images/sbw3.png\" class=\"emoji-descricao smile\" />",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:17:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 40,
    //           "opcao": 4,
    //           "descOpcao": "<img src=\"/images/sbw4.png\" class=\"emoji-descricao smile\" />",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:17:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 50,
    //           "opcao": 5,
    //           "descOpcao": "<img src=\"/images/sbw5.png\" class=\"emoji-descricao smile\" />",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:17:00"
    //         }
    //       ],
    //       "codQuestao": 37,
    //       "codTipoQuestao": 16,
    //       "codPaginaQuestao": 3,
    //       "nrQuestao": "SATISFACAO_VERTICAL_5",
    //       "descQuestao": "<p><span style=\"font-size: 18px;\"><b>Pergunta de satisfação na vertical com 5</b></span><br></p>",
    //       "textoRodape": null,
    //       "flagObrigatorio": true,
    //       "qtdMin": null,
    //       "qtdMax": null,
    //       "dataInclusao": "2023-03-15T11:17:00",
    //       "configuracoes": "{\"QuantidadeOpcoes\":5,\"Emojis\":true,\"RespostaObrigatoria\":true,\"RURM\":{\"RespostasNaVertical\":true},\"Aberta\":{\"MultiplasLinhas\":false}}"
    //     },
    //     {
    //       "visivel": true,
    //       "opcoes": [
    //         {
    //           "flagMostrar": true,
    //           "ordem": 10,
    //           "opcao": 1,
    //           "descOpcao": "<img src=\"/images/sbw1.png\" class=\"emoji-descricao smile\" />",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:17:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 20,
    //           "opcao": 3,
    //           "descOpcao": "<img src=\"/images/sbw3.png\" class=\"emoji-descricao smile\" />",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:17:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 30,
    //           "opcao": 5,
    //           "descOpcao": "<img src=\"/images/sbw5.png\" class=\"emoji-descricao smile\" />",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:17:00"
    //         }
    //       ],
    //       "codQuestao": 38,
    //       "codTipoQuestao": 16,
    //       "codPaginaQuestao": 3,
    //       "nrQuestao": "SATISFACAO_HORIZONTAL_3",
    //       "descQuestao": "<p><span style=\"font-size: 18px;\"><b>Pergunta de satisfação na horizontal</b></span><br></p>",
    //       "textoRodape": null,
    //       "flagObrigatorio": true,
    //       "qtdMin": null,
    //       "qtdMax": null,
    //       "dataInclusao": "2023-03-15T11:17:00",
    //       "configuracoes": "{\"QuantidadeOpcoes\":3,\"Emojis\":true,\"RespostaObrigatoria\":true,\"RURM\":{\"RespostasNaVertical\":false},\"Aberta\":{\"MultiplasLinhas\":false}}"
    //     },
    //     {
    //       "visivel": true,
    //       "opcoes": [
    //         {
    //           "flagMostrar": true,
    //           "ordem": 10,
    //           "opcao": 1,
    //           "descOpcao": "<img src=\"/images/sbw1.png\" class=\"emoji-descricao smile\" />",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:17:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 20,
    //           "opcao": 2,
    //           "descOpcao": "<img src=\"/images/sbw2.png\" class=\"emoji-descricao smile\" />",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:17:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 30,
    //           "opcao": 3,
    //           "descOpcao": "<img src=\"/images/sbw3.png\" class=\"emoji-descricao smile\" />",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:17:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 40,
    //           "opcao": 4,
    //           "descOpcao": "<img src=\"/images/sbw4.png\" class=\"emoji-descricao smile\" />",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:17:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 50,
    //           "opcao": 5,
    //           "descOpcao": "<img src=\"/images/sbw5.png\" class=\"emoji-descricao smile\" />",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:17:00"
    //         }
    //       ],
    //       "codQuestao": 39,
    //       "codTipoQuestao": 16,
    //       "codPaginaQuestao": 3,
    //       "nrQuestao": "SATISFACAO_HORIZONTAL_5",
    //       "descQuestao": "<p><span style=\"font-size: 18px;\"><b>Pergunta de satisfação na horizontal com 5</b></span><br></p>",
    //       "textoRodape": null,
    //       "flagObrigatorio": true,
    //       "qtdMin": null,
    //       "qtdMax": null,
    //       "dataInclusao": "2023-03-15T11:17:00",
    //       "configuracoes": "{\"QuantidadeOpcoes\":5,\"Emojis\":true,\"RespostaObrigatoria\":true,\"RURM\":{\"RespostasNaVertical\":false},\"Aberta\":{\"MultiplasLinhas\":false}}"
    //     },
    //     {
    //       "visivel": true,
    //       "opcoes": [
    //         {
    //           "flagMostrar": true,
    //           "ordem": 10,
    //           "opcao": 1,
    //           "descOpcao": "Opção 1",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:18:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 20,
    //           "opcao": 2,
    //           "descOpcao": "Opção 2",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:18:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 30,
    //           "opcao": 3,
    //           "descOpcao": "Opção 3",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:18:00"
    //         }
    //       ],
    //       "codQuestao": 40,
    //       "codTipoQuestao": 1,
    //       "codPaginaQuestao": 3,
    //       "nrQuestao": "RESPOSTA_UNICA_VERTICAL",
    //       "descQuestao": "<p><span style=\"font-size: 18px;\"><b>Pergunta de resposta única na vertical</b></span><br></p>",
    //       "textoRodape": null,
    //       "flagObrigatorio": true,
    //       "qtdMin": null,
    //       "qtdMax": null,
    //       "dataInclusao": "2023-03-15T11:18:00",
    //       "configuracoes": "{\"QuantidadeOpcoes\":0,\"Emojis\":false,\"RespostaObrigatoria\":true,\"RURM\":{\"RespostasNaVertical\":true},\"Aberta\":{\"MultiplasLinhas\":false}}"
    //     },
    //     {
    //       "visivel": true,
    //       "opcoes": [
    //         {
    //           "flagMostrar": true,
    //           "ordem": 10,
    //           "opcao": 1,
    //           "descOpcao": "Opção 1",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:34:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 20,
    //           "opcao": 2,
    //           "descOpcao": "Opção 2",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:34:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 30,
    //           "opcao": 3,
    //           "descOpcao": "Opção 3",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:34:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 40,
    //           "opcao": 4,
    //           "descOpcao": "Opção 4",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:34:00"
    //         }
    //       ],
    //       "codQuestao": 41,
    //       "codTipoQuestao": 1,
    //       "codPaginaQuestao": 3,
    //       "nrQuestao": "RESPOSTA_UNICA_HORIZONTAL",
    //       "descQuestao": "<p><span style=\"font-size: 18px;\"></span><span style=\"font-weight: bolder; font-size: 18px; color: rgb(51, 51, 51);\">Pergunta de resposta única na horizontal</span></p>",
    //       "textoRodape": null,
    //       "flagObrigatorio": true,
    //       "qtdMin": null,
    //       "qtdMax": null,
    //       "dataInclusao": "2023-03-15T11:34:00",
    //       "configuracoes": "{\"QuantidadeOpcoes\":0,\"Emojis\":false,\"RespostaObrigatoria\":true,\"RURM\":{\"RespostasNaVertical\":false},\"Aberta\":{\"MultiplasLinhas\":false}}"
    //     },
    //     {
    //       "visivel": true,
    //       "opcoes": [
    //         {
    //           "flagMostrar": true,
    //           "ordem": 10,
    //           "opcao": 1,
    //           "descOpcao": "Opção 1",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:37:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 20,
    //           "opcao": 2,
    //           "descOpcao": "Opção 2",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:37:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 30,
    //           "opcao": 3,
    //           "descOpcao": "Opção 3",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:37:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 40,
    //           "opcao": 4,
    //           "descOpcao": "Opção 4",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:37:00"
    //         }
    //       ],
    //       "codQuestao": 42,
    //       "codTipoQuestao": 2,
    //       "codPaginaQuestao": 3,
    //       "nrQuestao": "RESPOSTA_MULTIPLA_VERTICAL",
    //       "descQuestao": "<p><b><span style=\"font-size: 18px;\">Pergunta de resposta múltipla na vertical</span><span style=\"font-size: 18px;\"></span></b><br></p>",
    //       "textoRodape": null,
    //       "flagObrigatorio": true,
    //       "qtdMin": null,
    //       "qtdMax": null,
    //       "dataInclusao": "2023-03-15T11:37:00",
    //       "configuracoes": "{\"QuantidadeOpcoes\":0,\"Emojis\":false,\"RespostaObrigatoria\":true,\"RURM\":{\"RespostasNaVertical\":true},\"Aberta\":{\"MultiplasLinhas\":false}}"
    //     },
    //     {
    //       "visivel": true,
    //       "opcoes": [
    //         {
    //           "flagMostrar": true,
    //           "ordem": 10,
    //           "opcao": 1,
    //           "descOpcao": "Opção 1",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:37:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 20,
    //           "opcao": 2,
    //           "descOpcao": "Opção 2",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:37:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 30,
    //           "opcao": 3,
    //           "descOpcao": "Opção 3",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:37:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 40,
    //           "opcao": 4,
    //           "descOpcao": "Opção 4",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:37:00"
    //         }
    //       ],
    //       "codQuestao": 43,
    //       "codTipoQuestao": 2,
    //       "codPaginaQuestao": 3,
    //       "nrQuestao": "RESPOSTA_MULTIPLA_HORIZONTAL",
    //       "descQuestao": "<p><span style=\"font-size: 18px;\"></span><span style=\"font-size: 18px; font-weight: bolder;\">Pergunta de resposta múltipla na horizontal</span><br></p>",
    //       "textoRodape": null,
    //       "flagObrigatorio": true,
    //       "qtdMin": null,
    //       "qtdMax": null,
    //       "dataInclusao": "2023-03-15T11:37:00",
    //       "configuracoes": "{\"QuantidadeOpcoes\":0,\"Emojis\":false,\"RespostaObrigatoria\":true,\"RURM\":{\"RespostasNaVertical\":false},\"Aberta\":{\"MultiplasLinhas\":false}}"
    //     },
    //     {
    //       "visivel": true,
    //       "opcoes": [],
    //       "codQuestao": 44,
    //       "codTipoQuestao": 3,
    //       "codPaginaQuestao": 3,
    //       "nrQuestao": "VERBALIZACAO",
    //       "descQuestao": "<p><span style=\"font-size: 18px;\"></span><span style=\"font-size: 18px;\">Pergunta de verbalização</span><br></p>",
    //       "textoRodape": null,
    //       "flagObrigatorio": false,
    //       "qtdMin": null,
    //       "qtdMax": null,
    //       "dataInclusao": "2023-03-15T11:58:00",
    //       "configuracoes": "{\"QuantidadeOpcoes\":0,\"Emojis\":false,\"RespostaObrigatoria\":false,\"RURM\":{\"RespostasNaVertical\":false},\"Aberta\":{\"MultiplasLinhas\":false}}"
    //     },
    //     {
    //       "visivel": true,
    //       "opcoes": [],
    //       "codQuestao": 45,
    //       "codTipoQuestao": 4,
    //       "codPaginaQuestao": 3,
    //       "nrQuestao": "VERBALIZACAO_GRANDE",
    //       "descQuestao": "<p><span style=\"font-size: 18px;\">Pergunta de verbalização múltiplas linhas</span><br></p>",
    //       "textoRodape": null,
    //       "flagObrigatorio": false,
    //       "qtdMin": null,
    //       "qtdMax": null,
    //       "dataInclusao": "2023-03-15T11:58:00",
    //       "configuracoes": "{\"QuantidadeOpcoes\":0,\"Emojis\":false,\"RespostaObrigatoria\":false,\"RURM\":{\"RespostasNaVertical\":false},\"Aberta\":{\"MultiplasLinhas\":true}}"
    //     },
    //     {
    //       "visivel": true,
    //       "opcoes": [
    //         {
    //           "flagMostrar": true,
    //           "ordem": 10,
    //           "opcao": 1,
    //           "descOpcao": "Sim",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:58:00"
    //         },
    //         {
    //           "flagMostrar": true,
    //           "ordem": 20,
    //           "opcao": 2,
    //           "descOpcao": "Não",
    //           "codQuestaoOpcaoAcao": null,
    //           "dataInclusao": "2023-03-15T11:58:00"
    //         }
    //       ],
    //       "codQuestao": 46,
    //       "codTipoQuestao": 13,
    //       "codPaginaQuestao": 3,
    //       "nrQuestao": "CL",
    //       "descQuestao": "<p><span style=\"font-size: 18px;\"><b>Pergunta de close the loop</b></span><br></p>",
    //       "textoRodape": null,
    //       "flagObrigatorio": true,
    //       "qtdMin": null,
    //       "qtdMax": null,
    //       "dataInclusao": "2023-03-15T11:58:00",
    //       "configuracoes": "{\"QuantidadeOpcoes\":0,\"Emojis\":false,\"RespostaObrigatoria\":true,\"RURM\":{\"RespostasNaVertical\":false},\"Aberta\":{\"MultiplasLinhas\":false}}"
    //     }
    //   ]
    // };
    // return responseJson;

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

export async function npsRespostas(token, codCliente) {
  try {
    const url = 'https://app.npsfast.com.br/api/Respostas?codRespondente=' + codCliente;
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

export async function npsEnviarRespostas(token, resposta) {

  console.log('========== CORPO DA RESPOSTA ENVIADA ==============')

  console.log(resposta)


  try {
    const url = 'https://app.npsfast.com.br/api/Respondentes';
    let response = await fetch(url,
      {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resposta)
      }
    );


    let responseJson = await response.json();

    // let responseJson = await response.json();
    console.log('========== RETURN DA RESPOTA ==============')

    console.log(responseJson)
    return true;

  } catch (error) {

    // return error;
    console.log('========== RETURN COM ERRO DA RESPOTA ==============')
    console.log(error)
    return false;

  }
}

export async function npsClienteLogo(token, codCliente) {


  try {
    const url = 'https://app.npsfast.com.br/api/clientes/' + codCliente;
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

    // let responseJson = {
    //   imagem: null,
    //   nomeImagem: "teste"
    // };
    // return responseJson;


  } catch (error) {

    // return error;
    console.log('========== RETURN COM ERRO DA LOGO CLIENTE ==============')
    console.log(error)
    // return  false;

  }
}
