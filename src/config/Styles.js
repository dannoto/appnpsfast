'use strict';

import { StyleSheet, Dimensions } from "react-native";
import ColorsApp from './ColorsApp';
import hexToRgba from 'hex-to-rgba';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const PrimaryColor = ColorsApp.PRIMARY;

export default StyleSheet.create({














    OnzeTabletButton: { width: '80%', marginLeft: '10%', backgroundColor: ColorsApp.PRIMARY, height: 60, paddingTop:10,  borderRadius:5 },
    OnzeButton: { width: '80%', marginLeft: '10%', backgroundColor: ColorsApp.PRIMARY, height: 50,  paddingTop:10, borderRadius:5 },

    OnzeTabletButtonText: { color: '#FFF', textAlign: 'center', verticalAlign: 'middle', fontSize: 23 },
    OnzeButtonText: { color: '#FFF', textAlign: 'center', verticalAlign: 'middle', fontSize: 16 },
    //////////////////////// LOGIN/SIGNUP

    AuthTitle: {
        width: '100%',
        maxHeight: '100%',
        marginBottom: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },

    AuthLogo: {
        width: '100%',
        height: screenHeight / 7,
        maxHeight: '100%',
        marginBottom: 50,
        marginTop: 50
    },

    RecuperacaoLogo: {
        width: '100%',
        height: screenHeight / 7,

        maxHeight: '100%',
        marginBottom: 20,
        marginTop: 120
    },


    AuthContentTablet: {
        marginHorizontal: 50
    },

    AuthContent: {
        marginHorizontal: 20
    },



    RecuperacaoContentTablet: {
        marginHorizontal: 50
    },

    RecuperacaoContent: {
        marginHorizontal: 20
    },

    HomeContentTablet: {
        marginHorizontal: 50
    },

    HomeContent: {
        marginHorizontal: 20
    },

    HomeSubtitleTablet: { fontSize: 30, fontWeight: 'bold' },
    HomeSubtitle: { fontSize: 18, fontWeight: 'bold' },

    HomeTitleTablet: { textTransform: 'uppercase', fontSize: 30, fontWeight: 'bold' },
    HomeTitle: { textTransform: 'uppercase', fontSize: 18, fontWeight: 'bold' },



    AuthInput: {
        marginBottom: 20,
        backgroundColor: "transparent",
        height: 56,
        fontSize: 16
    },

    TabletAuthInput: {
        marginBottom: 20,
        backgroundColor: "transparent",
        height: 80,
        fontSize: 22
    },

    TabletAuthButton: {
        marginTop: 15,
        borderRadius: 0,
        elevation: 0,
        paddingTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ColorsApp.PRIMARY,
        height: 80
    },


    AuthButton: {
        marginTop: 15,
        borderRadius: 0,
        elevation: 0,
        paddingTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ColorsApp.PRIMARY,
        height: 55
    },

    AuthButtonContent: {
        paddingVertical: 6,
    },

    AuthButtonContentTablet: {
        paddingVertical: 8,
    },

    AuthButtonLabel: {
        letterSpacing: 0,
        fontWeight: 'bold',

    },


    TabletAuthButtonLabel: {
        letterSpacing: 0,
        fontWeight: 'bold',
        fontSize: 25
    },


    AuthButInputel: {
        letterSpacing: 0,

    },


    TabletAuthInputLabel: {
        letterSpacing: 0,
        fontSize: 25
    },

    AuthCheckBoxLabel: {
        textTransform: 'capitalize',
        marginLeft: 5,
        letterSpacing: 0,
    },

    AuthCheckBoxContent: {
        //backgroundColor: '#fff'
    },

    AuthBottomText: {
        fontSize: 16
    },

    AuthBottomContent: {
        marginTop: 20,
        alignItems: 'center'
    },

    ForgotPass: {
        fontSize: 16,
        marginVertical: 10,
        alignSelf: 'flex-end',
        marginHorizontal: 4,
        textTransform: "uppercase",
        color: ColorsApp.SECONDARY
    },

    TabletForgotPass: {
        fontSize: 25,
        marginVertical: 30,
        alignSelf: 'flex-end',
        marginHorizontal: 4,
        textTransform: "uppercase",
        color: ColorsApp.SECONDARY
    },


    textArea: {
        //backgroundColor: '#fff'
    },

    //////////////////////// DRAWER MENU

    Drawer: {
        flex: 1,
        paddingBottom: 30
    },

    DrawerHeader: {
        paddingTop: screenHeight / 17,
        paddingBottom: screenHeight / 24,
        justifyContent: 'center',
        alignItems: 'center'
    },

    DrawerImage: {
        width: '100%',
        height: screenHeight / 10,
        maxHeight: '100%',
        marginVertical: 10
    },

    DrawerMenuItem: {
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 6
    },

    DrawerTitleMenu: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    DrawerIconMenu: {
        fontSize: 30,
        marginRight: 15,
    },

    DrawerIconRightMenu: {
        fontSize: 25,
        opacity: 0.3
    },

    DrawerButton: {
        borderRadius: 6,
        marginHorizontal: 15,
        marginVertical: 10,
    },

    DrawerButtonLabel: {
        textTransform: 'capitalize',
        fontSize: 17,
    },

    DrawerButtonContent: {
        height: 50,
        width: '100%'
    },

    DrawerTitleHeader: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 8
    },

    DrawerSubTitleHeader: {
        fontSize: 14,
    },

    DrawerFooter: {
        height: screenHeight * 0.10,
        width: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        bottom: 0
    },

    DrawerSearchInput: {
        marginHorizontal: 15,
        marginVertical: 15
    },

    //////////////////////// HEADING

    headingTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    headingSubTitle: {
        fontSize: 16,
    },

    headingButton: {

        borderWidth: 2,
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 50
    },

    headingButtonText: {
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

    //////////////////////// BUTTONS

    Button1: {
        alignItems: 'center',
        flexDirection: 'row',
        height: screenHeight * 0.065,
        width: '100%',
        paddingHorizontal: 55,
        position: 'relative',
        marginTop: 10
    },

    Button1Text: {
        fontSize: 16,
    },

    Button1IconLeft: {
        color: PrimaryColor,
        position: 'absolute',
        left: 20,
        fontSize: 20,
    },

    Button1IconRight: {
        color: PrimaryColor,
        position: 'absolute',
        right: 15,
        fontSize: 20
    },

    //////////////////////// PROFILE

    HeaderProfile: {
        width: '100%',
        height: screenHeight * 0.30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },

    ImageProfile: {
        borderRadius: 100,
        width: screenWidth * 0.28,
        height: 'auto',
        minHeight: screenWidth * 0.28,
        marginBottom: 20
    },

    ButtonProfile: {
        borderRadius: 60,
        width: '40%',
        marginHorizontal: 15,
        marginTop: 20,
    },

    ButtonLabelProfile: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    ButtonContentProfile: {
        height: screenHeight * 0.05,
        width: '100%'
    },

    SubTextProfile: {
        fontSize: 16,
    },

    SmallTextProfile: {
        fontSize: 14,
        marginTop: 5,
        opacity: 0.5,
    },

    TextProfile: {
        fontSize: 18,
        marginRight: 4,
        fontWeight: 'bold',
        marginBottom: 5
    },

    SignButton: {
        marginHorizontal: 15,
        marginVertical: 10,
    },

    SignButtonLabel: {
        //color: '#fff',

    },

    SignButtonContent: {
        paddingVertical: 10,
        backgroundColor: PrimaryColor,
        width: '100%',
    },

    SignButtonTextContent: {
        marginVertical: 20,
        fontSize: 16
    },

    ////////////////////////////////////////////////

    card1_gradient: {
        position: 'absolute',
        padding: 15,
        left: 0,
        right: 0,
        bottom: 0,
        height: screenHeight * 0.23,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        borderRadius: 8
    },

    card1_background: {
        width: screenWidth * 0.75,
        height: screenHeight * 0.23,
        alignItems: 'flex-start',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        padding: 15,
        marginBottom: 20,
        marginLeft: 25,
        position: 'relative'
    },

    card1_title: {
        color: "#fff",
        fontWeight: 'bold',
    },

    card1_subtitle: {
        color: PrimaryColor,
        fontWeight: 'bold',
    },

    card1_viewicon: {
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: 100,
        padding: 10,
        position: 'absolute',
        right: 10,
        top: 10
    },

    card1_icon: {
        color: PrimaryColor,
        fontWeight: 'bold'
    },

    card2_view: {
        width: screenWidth * 0.23,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    card2_content: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    card2_title: {
        marginTop: 10,
        fontSize: 15,
        textAlign: 'center',
    },

    card3_title: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    },

    card3_subtitle: {
        color: '#FFF',
        fontSize: 14,
        opacity: 0.8,
        marginVertical: 6
    },

    card3_category: {
        marginBottom: 6,
        color: PrimaryColor,
        fontWeight: 'bold',
        fontSize: 16,
    },

    card3_gradient: {
        position: 'absolute',
        padding: 15,
        left: 0,
        right: 0,
        bottom: 0,
        height: screenHeight * 0.23,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        borderRadius: 8
    },

    card3_background: {
        width: screenWidth * 0.9,
        height: screenHeight * 0.23,
        alignItems: 'flex-start',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        padding: 15,
        marginBottom: 20
    },

    card3_viewicon: {
        flexDirection: 'row',
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: 100,
        padding: 10,
        position: 'absolute',
        left: 10,
        top: 10
    },

    card3_rate: {
        flexDirection: 'row',
        padding: 10,
        position: 'absolute',
        right: 10,
        top: 7
    },

    card3_icon: {
        color: '#fff',
        marginLeft: 8,
        fontSize: 12
    },

    card4_title: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    },

    card4_viewicon: {
        flexDirection: 'row',
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: 100,
        padding: 3,
        paddingHorizontal: 10,
        marginBottom: 3
    },

    card4_gradient: {
        position: 'absolute',
        padding: 15,
        left: 0,
        right: 0,
        bottom: 0,
        height: screenHeight * 0.15,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        borderRadius: 8
    },

    card4_background: {
        width: '100%',
        height: screenHeight * 0.15,
        alignItems: 'flex-start',
        alignSelf: 'center',
        justifyContent: 'flex-end',
    },

    card5_title: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    },

    card5_border: {
        backgroundColor: PrimaryColor,
        width: 25,
        height: 4,
        marginVertical: 8
    },

    card5_gradient: {
        position: 'absolute',
        padding: 15,
        left: 0,
        right: 0,
        bottom: 0,
        height: screenHeight * 0.19,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        borderRadius: 8
    },

    card5_background: {
        width: '100%',
        height: screenHeight * 0.19,
        alignItems: 'flex-start',
        alignSelf: 'center',
        justifyContent: 'flex-end',
    },

    card6_view: {
        width: screenWidth * 0.35,
        marginLeft: 15,
    },

    card6_background: {
        width: screenWidth * 0.35,
        height: screenHeight * 0.13,
        marginLeft: 10,
    },

    card6_gradient: {
        width: screenWidth * 0.35,
        height: screenHeight * 0.13,
        backgroundColor: hexToRgba(PrimaryColor, '0.5'),
        borderRadius: 8,
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },

    card6_title: {
        fontSize: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
        color: '#fff',
        fontWeight: 'bold'
    },

    itemListView: {
        width: 70,
        height: 70,
        backgroundColor: PrimaryColor,
        borderRadius: 100,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },

    itemListImage: {
        width: 45,
        height: 45,
    },

    itemListView2: {
        width: 90,
        height: 90,
        backgroundColor: '#fff',
        borderRadius: 100,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },

    itemListImage2: {
        width: 70,
        height: 70,
    },

    title_categories: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold'
    },

    title_categories_background: {
        width: screenWidth * 0.9,
        alignItems: 'center',
        padding: 15,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },

    title_categories_border: {
        height: 2,
        backgroundColor: PrimaryColor,
        width: 50
    },

    gradient_categories: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: screenHeight * 0.21,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderRadius: 8
    },

    background_categories: {
        width: screenWidth * 0.9,
        alignSelf: 'center',
        height: screenHeight * 0.21,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 10,
        borderRadius: 8
    },

    switchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

    LoadMore: {
        borderRadius: 100,
        borderWidth: 1.5,
        borderColor: PrimaryColor,
        width: '93%',
        height: screenHeight * 0.07,
        marginHorizontal: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },

    NoMoreItems: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginBottom: 60
    },

    PageLogo: {
        width: '100%',
        height: screenHeight / 10,
        maxHeight: '100%',
        marginBottom: 50,
    },

    AnimatedScrollScreen: {
        width: '100%',
        paddingVertical: 45,
        paddingHorizontal: 10,
        flex: 1,
    },

    ContentScreen: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        flex: 1,
    },

    ModalScreen: {
        width: '100%',
        paddingHorizontal: 10,
        flex: 1,
    },

    PageScreen: {
        width: '100%',
        paddingVertical: 30,
        paddingHorizontal: 30,
        flex: 1,
    },

    GuestPageScreen: {
        width: '100%',
        paddingVertical: 30,
        paddingHorizontal: 30,
        flex: 1,
    },

    RowBackground: {
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },

    RowBorder: {
        width: 60,
        height: 4,
        marginTop: 10,
        backgroundColor: PrimaryColor
    },

    SearchInput: {
        marginHorizontal: 15,
        marginVertical: 15,
        elevation: 0,
        borderWidth: 1
    },

    SearchInputStyle: {
        fontSize: 17,
    },

    ExerciseImage: {
        width: screenWidth * 0.85,
        height: screenHeight * 0.25,
        marginBottom: 20,
        alignSelf: 'center',
        position: 'relative'
    },

    ExerciseImageView: {
        width: screenWidth * 0.85,
        height: screenHeight * 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },

    ExerciseTitle: {
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: 'bold',
    },

    ExerciseSubTitle: {
        fontWeight: 'bold',
        color: PrimaryColor
    },

    ExerciseCol: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10

    },

    ExerciseColTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },

    ExerciseColSubTitle: {
        fontSize: 18,
    },

    ExerciseColIcon: {
        color: PrimaryColor,
        fontSize: 32,
        marginBottom: 8
    },

    ExerciseAccordion: {
    },

    ExerciseAccordionTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },

    ExerciseAccordionView: {
        marginHorizontal: 20,
        marginTop: 15
    },

    ExerciseInfoCaption: {
        fontSize: 15,
        marginBottom: 15
    },

    HeaderImage: {
        width: screenWidth,
        height: screenHeight * 0.40,
    },

    HeaderGradient: {
        width: screenWidth,
        height: screenHeight * 0.40,
        justifyContent: 'center',
        alignItems: 'center',
    },

    HeaderTitle: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 16,
        marginBottom: 8,
        paddingTop: 40
    },

    HeaderSubTitle: {
        fontWeight: 'bold',
        color: PrimaryColor,
        fontSize: 16
    },

    Header2Image: {
        width: screenWidth,
        height: screenHeight * 0.40,
    },

    Header2Gradient: {
        width: screenWidth,
        height: screenHeight * 0.40,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingVertical: 30,
        paddingHorizontal: 25
    },

    Header2Category: {
        fontWeight: 'bold',
        color: PrimaryColor,
        fontSize: 16,
    },

    Header2Title: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 20,
        marginVertical: 8,
    },

    Header2SubTitle: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 16
    },

    WorkoutGrid: {
        backgroundColor: PrimaryColor
    },

    WorkoutGridCol: {
        padding: 10,
        alignItems: 'center',
    },

    WorkoutGridTitle: {
        fontSize: 16,
        color: 'rgba(0,0,0,0.7)',
        fontWeight: 'bold',
    },

    WorkoutGridSubTitle: {
        fontSize: 16,
        color: 'rgba(0,0,0,0.5)',
    },

    DietGrid: {
        backgroundColor: PrimaryColor
    },

    DietGridCol: {
        padding: 15,
        alignItems: 'center',
    },

    DietGridTitle: {
        fontSize: 16,
        marginBottom: 5,
        color: 'rgba(0,0,0,0.7)',
        fontWeight: 'bold',
    },

    DietGridSubTitle: {
        fontSize: 16,
        color: 'rgba(0,0,0,0.5)',
    },

    DayList: {
        paddingVertical: 15,
        marginHorizontal: 10,
        backgroundColor: 'rgba(255,255,255,0.1)',
        flexDirection: 'row',
        marginVertical: 5,
        borderRadius: 8,
        paddingHorizontal: 15,
        position: 'relative'
    },

    DayListText: {
        fontSize: 15,
    },

    DayListIcon: {
        color: PrimaryColor,
        fontSize: 22,
        right: 10,
        top: 13,
        position: 'absolute'
    },

    FiliaisBox: {
        width: '46%',
        margin: '2%',
        backgroundColor: ColorsApp.PRIMARY,
        padding: 5
    },

    FiliaisBoxTablet: {
        width: '46%',
        margin: '2%',
        backgroundColor: ColorsApp.PRIMARY,
        padding: 5
    },

    FiliaisTextBox: {
        color: '#FFF',
        fontSize: 15,
        textAlign: 'center',
        fontSize: 12,
        textTransform: 'uppercase',
        marginBottom: 20
    },

    FiliaisTextBoxTablet: {
        color: '#FFF',
        fontSize: 22,
        textAlign: 'center',
        fontSize: 22,
        textTransform: 'uppercase',
        marginBottom: 20
    },
    FiliaisBoxIcon: {
        fontSize: 50,
        color: '#f5a31f',
        // backgroundColor: '#f5a31f',

        marginTop: 25,
        marginBottom: 15
    },

    IconObrigado: {

        marginTop: 0,
        marginBottom: 15
    },


    IconObrigadoTablet: {


        marginTop: 0,
        marginBottom: 30

    },

    TitleObrigadoTablet: {

        fontSize: 27, fontWeight: 'bold', marginTop: 20, textTransform: 'uppercase', textAlign: 'center'
    },

    SubtitleObrigadoTablet: {
        fontSize: 25, fontWeight: 'normal', marginTop: 5, textTransform: 'uppercase', textAlign: 'center'
    },

    ReturnTextObrigadoTablet: {
        fontSize: 27, fontWeight: 'bold', textTransform: 'uppercase', color: ColorsApp.PRIMARY, textAlign: 'center'
    },

    ContainerObrigadoTablet: {
        flex: 1,
        marginHorizontal: 50,
        marginTop: 20
    },

    ContainerObrigado: {
        flex: 1,
        marginHorizontal: 25,
        marginTop: 20
    },


    TitleObrigado: {
        fontSize: 14, fontWeight: 'bold', marginTop: 10, textTransform: 'uppercase', textAlign: 'center'
    },

    SubtitleObrigado: {
        fontSize: 14, fontWeight: 'normal', marginTop: 5, textTransform: 'uppercase', textAlign: 'center'
    },

    ReturnTextObrigado: {
        fontSize: 14, fontWeight: 'bold', textTransform: 'uppercase', color: ColorsApp.PRIMARY, textAlign: 'center'
    },


    ImageHeaderTablet: {
        width: '50%',
        height: 80,
        marginBottom: 10
    },
    ImageHeader: {
        width: '50%',
        height: 40,
        marginBottom: 5
    },


    ImageFooterTablet: {
        width: 220, height: 80,
    },
    ImageFooter: {
        width: 120, height: 40,
    },




    // Daqui pra baixo

    TitleSugestionTablet: {
        textAlign: 'center',
        fontSize: 27,
        fontWeight: 'bold',
        marginTop: 30
    },

    TitleSugestion: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 30
    },

    LabelSugestionTablet: {
        textAlign: 'left',
        marginTop: 30,
        fontSize: 22,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

    LabelSugestion: {
        textAlign: 'left',
        marginTop: 30,
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

    ContainerSugestionTablet: {
        marginHorizontal: 50
    },
    ContainerSugestion: {
        marginHorizontal: 25
    },

    InputSugestionTablet: {
        marginTop: 20,
        marginBottom: 30,
        borderRadius:5,
        height: 200,
        width: '100%',
        borderColor: ColorsApp.PRIMARY,
        borderWidth: 1,

        backgroundColor: 'transparent',
        fontSize: 22,
        padding: 10

    },

    InputSugestion: {

        marginTop: 20,
        marginBottom: 30,
        borderRadius:5,
        height: 200,
        width: '100%',
        borderColor: ColorsApp.PRIMARY,
        borderWidth: 1,

        backgroundColor: 'transparent',
        fontSize: 15,
        padding: 10


    },

    ButtonTextSugestionTablet: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        color: ColorsApp.PRIMARY
    },
    ButtonTextSugestion: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: ColorsApp.PRIMARY
    },

    ButtonTextAuthTablet: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFF'
    },
    ButtonTextAuth: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF'
    },





    NextSugestionTablet: {
        textAlign: 'center',
        fontSize: 25,
        marginTop: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: ColorsApp.PRIMARY
    },
    NextSugestion: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 10,
        fontWeight: 'bold',
        marginBottom: 50,
        color: ColorsApp.PRIMARY
    },


    ButtonSugestionTablet: {
        marginTop: 30,
        padding: 15,
        marginBottom: 30,
        height: 70,
        // flex:1,
        // flexDirection:'row',
        // justifyContent:'space-between',
        borderWidth: 2,
        borderColor: ColorsApp.PRIMARY,

    },
    ButtonSugestion: {
        marginTop: 30,
        padding: 15,
        marginBottom: 30,
        height: 70,
        borderWidth: 2,
        borderColor: ColorsApp.PRIMARY,
    },


    // StepNPS

    TitleNPS: { fontSize: 17, marginTop: 15, marginBottom: 15, fontWeight: 'bold', textAlign: 'center' },


    ItemNPS: { height: 40, width: '9%' },

    ItemNPSPortraitUp: { height: 40, width: '15%' },
    ItemNPSPortraitDown: { height: 40, width: '15%' },



    HorizontalDezesseisDivNPS: {
        flex: 1, width: '100%', flexDirection: 'row', margin: 'auto', marginTop: 20
    },
    HorizontalDezesseisDivNPSTablet: {
        flex: 1, width: '100%', flexDirection: 'row', margin: 'auto', marginTop: 20 
    },

    VerticalDezesseisDivNPS: {
        flex: 1, width: '100%', flexDirection: 'column', margin: 'auto', marginTop: 20
    },
    VerticalDezesseisDivNPSTablet: {
        flex: 1, width: '100%', flexDirection: 'column', margin: 'auto', marginTop: 20 
    },

    VerticalDoisDivNPS: {
        flex: 1, width: '100%', flexDirection: 'column', margin: 'auto', marginTop: 5
    },
    VerticalDoisDivNPSTablet: {
        flex: 1, width: '100%', flexDirection: 'column', margin: 'auto', marginTop: 5 
    },


    VerticalDoisItemNPS: {
        height:'auto',minHeight:50, width: '90%', margin:10, flex:1,  marginBottom:5, marginLeft:'5%'
     },
     VerticalDoisItemNPSTablet: {
        height:'auto',minHeight:70, width: '90%', margin:20, flex:1,  marginBottom:5, marginLeft:'5%'
     },

     VerticalUmItemNPS: {
        height:'auto',minHeight:50, width: '90%', margin:10, flex:1,  marginBottom:5, marginLeft:'5%'
     },
     VerticalUmItemNPSTablet: {
        height:'auto',minHeight:70, width: '90%', margin:10, flex:1,  marginBottom:5, marginLeft:'5%'
     },


    VerticalDezesseisItemNPS: {
       height:65, width: '50%', flex:1, margin:'auto', marginBottom:20, marginLeft:'25%'
    },
    VerticalDezesseisItemNPSTablet: {
       height:80, width: '50%', flex:1, margin:'auto', marginBottom:20, marginLeft:'25%'
    },

    VerticalTrezeItemNPS: {
        height:65, width: '80%', flex:1, margin:'auto', marginBottom:20, marginLeft:'25%'
     },
     VerticalTrezeItemNPSTablet: {
        height:80, width: '80%', flex:1, margin:'auto', marginBottom:20, marginLeft:'25%'
     },

    VerticalTrezeItemNPS: {
        height:65, width: '50%', flex:1, borderRadius:5,  margin:'auto', marginBottom:20, marginLeft:'25%'
     },
     VerticalTrezeItemNPSTablet: {
        height:80, width: '50%', flex:1, borderRadius:5,  margin:'auto', marginBottom:20, marginLeft:'25%'
     },

    HorizontalDezesseisItemNPS: {
        height:100, width: '20%', flex:1, margin:'auto', marginBottom:20, marginLeft:'3%'
     },
     HorizontalDezesseisItemNPSTablet: {
        height:100, width: '30%', flex:1, margin:'auto', marginBottom:20, marginLeft:'3%'
     },

     HorizontalTresDezesseisItemNPS: {
        height:65, width: '10%', flex:1, margin:'auto', marginBottom:20, marginLeft:'3%'
     },
     HorizontalTresDezesseisItemNPSTablet: {
        height:80, width: '20%', flex:1, margin:'auto', marginBottom:20, marginLeft:'3%'
     },


    DezesseisItemTouchNPSTablet: { height: 'auto', flex: 1, justifyContent: 'center', margin: 1 },
    DezesseisItemTouchNPS: { height: 'auto', flex: 1, justifyContent: 'center', margin: 1 },

    LANDDezesseisItemTouchNPSTablet: { height: 'auto', flex: 1, justifyContent: 'center', margin: 1 },
    LANDDezesseisItemTouchNPS: { height: 'auto', flex: 1, justifyContent: 'center', margin: 1 },

    LANDTrezeItemTouchNPSTablet: { height: 'auto', flex: 1, justifyContent: 'center', margin: 1 },
    LANDTrezeItemTouchNPS: { height: 'auto', flex: 1, justifyContent: 'center', margin: 1 },

    UmItemTouchNPSTablet: { height: 'auto', flex: 1, justifyContent: 'center', margin: 1 },
    UmItemTouchNPS: { height: 'auto', flex: 1, justifyContent: 'center', margin: 1 },

    DezesseisItemImagem: {
        width: '100%',
        height: '100%',
        // width:200,
        // backgroundColor:'orange',
        // height:200
        // marginBottom: 20,
        // marginTop: 120
    },


    ItemTouchNPS: { height: 40, flex: 1, justifyContent: 'center', margin: 1 },

    ItemTextNPS: { textAlign: 'center', fontWeight: 'bold', color: '#FFF' },


    ItemTextDoisNPS: { textAlign: 'left', fontWeight: 'bold', color: '#FFF' },
    ItemTextDoisNPSTablet: { textAlign: 'left', fontSize: 30, fontWeight: 'bold', color: '#FFF' },


    // ContainerNPSTablet: {flex:1,height:'100%', paddingTop: 30, marginHorizontal: 20 },
    ContainerNPSFullTablet: { flex: 1, height: '100%', paddingTop: 20, marginBottom:30, marginHorizontal: 50 },
    ContainerNPSFull: { flex: 1, height: '100%', paddingTop: 20, marginHorizontal: 20 },

    ContainerNPS: { paddingTop: 30, marginHorizontal: 15 },
    ContainerNPSTablet: { flex: 1, height: '100%', paddingTop: 30, marginHorizontal: 30 },


    TitleNPSTablet: { fontSize: 27, marginTop: 30, marginBottom: 30, fontWeight: 'normal', textAlign: 'center' },

    DivNPSTablet: { flex: 1, width: '100%', flexDirection: 'row', height: 100, margin: 'auto', marginTop: 20 },
    DivNPS: { flex: 1, width: '100%', flexDirection: 'row', height: 40, margin: 'auto', marginTop: 20 },

    OnzeDivNPSTablet: { flex: 1, width: '100%', flexDirection: 'row', marginTop: 20 },
    OnzeDivNPS: { flex: 1, width: '100%', flexDirection: 'row',  marginTop: 20 },


    ItemNPSTablet: { height: 80, width: '9%' },

    ItemTouchNPSTablet: { height: 80, flex: 1, justifyContent: 'center', margin: 2 },

    ItemTextNPSTablet: { textAlign: 'center', fontSize: 30, fontWeight: 'bold', color: '#FFF' },

    LabelNPS0: {
        backgroundColor: '#ff0000'
    },
    LabelNPS1: {
        backgroundColor: '#fe473c'
    },
    LabelNPS2: {
        backgroundColor: '#fe473c'
    },
    LabelNPS3: {
        backgroundColor: '#fd8e78'
    },
    LabelNPS4: {
        backgroundColor: '#fd8e78'
    },
    LabelNPS5: {
        backgroundColor: '#fdb186'
    },
    LabelNPS6: {
        backgroundColor: '#fcd5b4'
    },
    LabelNPS7: {
        backgroundColor: '#c1da81'
    },
    LabelNPS8: {
        backgroundColor: '#a2d07f'
    },
    LabelNPS9: {
        backgroundColor: '#83c77d'
    },
    LabelNPS10: {
        backgroundColor: '#63be7b'
    },

    // StepNPS


    // Contact

    TitleContactTablet: {
        textAlign: 'center',
        fontSize: 27,
        fontWeight: 'bold',
        marginTop: 20,

    },

    TitleContact: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 20,

    },



    SubTitleFullNpsTablet: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'normal',
        marginTop: 5,

    },

    SubTitleFullNps: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'normal',
        marginTop: 5,

    },
    SubTitleContactTablet: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'normal',
        marginTop: 5,
        marginBottom: 10
    },

    SubTitleContact: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'normal',
        marginTop: 5,
        marginBottom: 10
    },

    // Contact


    // Default
    InputDefaultTablet: {
        height: 70,
        width: '100%',
        borderColor: ColorsApp.PRIMARY,
        borderWidth: 2,
        marginTop: 10,
        borderWidth: 1,
        borderRadius:5,

        borderColor: ColorsApp.PRIMARY,
        backgroundColor: 'transparent',
        // textAlignVertical: 'top',
        fontSize: 22,
        padding: 12
    },

    InputDefault: {
        height: 50,
        width: '100%',
        borderColor: ColorsApp.PRIMARY,
        borderWidth: 2,
        marginTop: 10,
        borderWidth: 1,
        borderRadius:5,
        borderColor: ColorsApp.PRIMARY,
        fontSize: 15,
        backgroundColor: 'transparent',
        // textAlignVertical: 'top',
        padding: 12

    },

    ButtonIconSugestionTablet: {
        color: ColorsApp.PRIMARY
    },
    ButtonIconSugestion: {
        color: ColorsApp.PRIMARY
    },

    ButtonNpsFullTablet: {
        marginTop: 2,
        padding: 10,
        paddingTop:7,
        marginBottom: 10,
        height: 65,
        // flex:1,
        borderRadius:5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // justifyContent:'space-between',
        borderWidth: 1,
        borderColor: ColorsApp.PRIMARY,

    },
    ButtonNpsFull: {
        marginTop: 2,
        padding: 10,
        paddingTop:7,
        marginBottom: 10,
        height: 50,
        borderRadius:5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: ColorsApp.PRIMARY,
    },
    ButtonDefaultTablet: {
        marginTop: 10,
        padding: 15,
        marginBottom: 10,
        height: 70,
        // flex:1,
        // flexDirection:'row',
        // justifyContent:'space-between',
        borderWidth: 2,
        borderColor: ColorsApp.PRIMARY,

    },
    ButtonDefault: {
        marginTop: 10,
        padding: 15,
        marginBottom: 10,
        height: 70,
        borderWidth: 2,
        borderColor: ColorsApp.PRIMARY,
    },

    // Default


    // 
    TextFull: { fontSize: 15, fontWeight: 'normal' },
    TextFullTablet: { fontSize: 25, fontWeight: 'normal' },

    DivFull: { marginTop: 10, marginBottom: 15 },
    DivFullTablet: { marginTop: 10, marginBottom: 15, marginHorizontal: 50 },

    ItemFull: { flex: 1, height: 20, width: '100%', flexDirection: 'row' },
    ItemFullTablet: { flex: 1, height: 20, width: '100%', flexDirection: 'row' },

    ItemLabel: { flex: 50, justifyContent: 'center', width: '70%' },
    ItemLabelTablet: { flex: 70, justifyContent: 'center', width: '70%' },

    ItemFace: { flex: 50, flexDirection: 'row', justifyContent: 'flex-center', width: '30%' },
    ItemFaceTablet: { flex: 30, flexDirection: 'row', justifyContent: 'flex-center', width: '30%' },

    emptyTitleTablet: {
        fontSize: 27
    },

    emptyTitle: {
        fontSize: 17,
    },




    // LANDSCAPE

    LANDImageHeaderTablet: {
        width: '30%',
        height: 40,
        marginBottom: 10
    },
    LANDImageHeader: {
        width: '30%',
        height: 30,
        marginBottom: 5
    },

    LANDImageFooterTablet: {
        width: 150, height: 60,
    },
    LANDImageFooter: {
        width: 70, height: 30,
    },

    

    LANDContainerSugestionTablet: {
        marginHorizontal: 250
    },
    LANDContainerSugestion: {
        marginHorizontal: 150
    },

    LANDContainerObrigadoTablet: {
        flex: 1,
        marginHorizontal: 250,
        marginTop: 0,
        marginBottom:20
    },

    LANDContainerObrigado: {
        flex: 1,
        marginHorizontal: 150,
        marginTop: 0,
        marginBottom:20
    },


    LANDInputSugestionTablet: {
        marginTop: 20,
        marginBottom: 15,
        borderRadius:5,

        height: 100,
        width: '100%',
        borderColor: ColorsApp.PRIMARY,
        borderWidth: 1,

        backgroundColor: 'transparent',
        fontSize: 22,
        padding: 10

    },

    LANDInputSugestion: {

        marginTop: 20,
        marginBottom: 15,
        borderRadius:5,

        height: 100,
        width: '100%',
        borderColor: ColorsApp.PRIMARY,
        borderWidth: 1,

        backgroundColor: 'transparent',
        fontSize: 15,
        padding: 10

    },

    LANDTitleSugestionTablet: {
        textAlign: 'center',
        fontSize: 27,
        fontWeight: 'bold',
        marginTop: 15
    },

    LANDTitleSugestion: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'normal',
        marginTop: 15
    },


    LANDLabelSugestionTablet: {
        textAlign: 'left',
        marginTop: 15,
        fontSize: 22,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

    LANDLabelSugestion: {
        textAlign: 'left',
        marginTop: 15,
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },


});