import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Profile from "../Components/home/Profile";
import Bio from "../Components/home/Bio";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Profile />
      <Bio />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#776d63",
    flex: 1,
  },
});

export default ProfileScreen;
