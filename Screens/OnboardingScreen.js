import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";

const Dots = () => {
  return (
    <View
      style={{
        width: 5,
        height: 5,
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <TouchableOpacity {...props}>
    <Text>Skip</Text>
  </TouchableOpacity>
);
const Next = ({ ...props }) => (
  <TouchableOpacity {...props}>
    <Text>Next</Text>
  </TouchableOpacity>
);
const Done = ({ ...props }) => (
  <TouchableOpacity {...props}>
    <Text>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({}) => {
  const navigation = useNavigation();
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      onSkip={() => navigation.navigate("LoginScreen")}
      onDone={() => navigation.navigate("LoginScreen")}
      pages={[
        {
          backgroundColor: "#e3d3b3",
          image: <Image source={require("../assets/logo2.png")} />,
        },
        {
          backgroundColor: "#e3d3b3",
          title: "Welcome to PostCafe",
          subtitle: "Record your coffee journey!",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
