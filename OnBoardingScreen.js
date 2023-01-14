import React from "react";
import { View, Text, Button, StyleSheet} from 'react-native';
import Onboarding from "react-native-onboarding-swiper";

const OnBoardingScreen = ({navigation}) => {
    return(
        <Onboarding 
        onSkip={() => navigation.navigate("Login")}
        onDone={() => navigation.navigate("Login")}
        pages = {[
            {
                backgroundColor: '#fff',
                title: 'Onboarding',
                subtitle:'Done',
            },
            {
                backgroundColor: '#fff',
                title: 'Onboarding2'
            }
        ]}/>
    );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

