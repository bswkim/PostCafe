import * as React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import BottomTabs, { bottomTabIcons } from "../Components/home/BottomTabs";
import Header from "../Components/home/Header";
import Posts from "../Components/home/Posts";
import UploadScreen from "./UploadScreen";
import ProfileScreen from "./ProfileScreen";

const HomeScreen = (navigation) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Posts />
      <BottomTabs icons={bottomTabIcons} />
      <ProfileScreen />
      <UploadScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e3d3b3",
    flex: 1,
  },
});

export default HomeScreen;
