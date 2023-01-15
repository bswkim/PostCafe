import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    justifyContent: "center",
    alignItems: "center",
    width: 370,
    height: 100,
    resizeMode: "contain",
  },
});

export default Header;
