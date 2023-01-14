import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, Button, StyleSheet} from 'react-native';
import Onboarding from "react-native-onboarding-swiper";

const Dots = () =>{
    return (
        <View
            style={{
                width:5,
                height:5,
            }}
        />
    );
};

const Skip = ({...props}) => (
    <TouchableOpacity {...props} ><Text>Skip</Text></TouchableOpacity>
);
const Next = ({...props}) => (
    <TouchableOpacity {...props}><Text>Next</Text></TouchableOpacity>
);
const Done = ({...props}) => (
    <TouchableOpacity {...props}><Text>Done</Text></TouchableOpacity>
);

const OnBoardingScreen = ({navigation}) => {
    return(
        <Onboarding
        SkipButtonComponent={Skip} 
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        onSkip={() => navigation.navigate("Login")}
        onDone={() => navigation.navigate("Login")}
        pages = {[
            {
                backgroundColor: '#e3d3b3',
                title: 'Welcome to PostCafe',
                subtitle:'Record your coffee journey!',
            },
            {
                backgroundColor: '#e3d3b3',
                title: 'Lets start by log in page.'
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

