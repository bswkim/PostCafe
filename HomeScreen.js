import * as React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Header from "../Components/home/Header";
import Posts from "../Components/home/Posts";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Posts />
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
