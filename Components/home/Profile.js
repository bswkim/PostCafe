import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const ProfileImg = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity>
        <Image style={styles.img} source={require("../../assets/pfp.jpeg")} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 300,
    borderRadius: 300,
    marginBottom: 40,
    borderWidth: 3,
    borderColor: "#e3d3b3",
    resizeMode: "contain",
    marginTop: 100,
  },
});

export default ProfileImg;
