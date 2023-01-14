# PostCafe
coffee diary app that allows you to document and track your coffee journey. With PostCafe, you can easily post pictures of your daily cup and keep track of your coffee experiences. 

//Add this to the App.js when moving LoginScreen.js and OnboardingScreen.js
//Also download the library npm install react-native-onboarding-swiper for OnboardingScreen.js


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from './screens/OnBoardingScreen';
import LoginScreen from './screens/LoginScreen';

const App = () => {
    return(
        <NavigationContainer>
            <AppStack.Navigator headerMode = "none">
                <AppStack.Screen name="Onboarding" component={OnboardingScreen}/>
                <AppStack.Screen name="Login" component={LoginScreen}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

https://www.youtube.com/watch?v=ql4J6SpLXZA
