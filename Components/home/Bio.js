import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";

const Bio = () => {
  const [bio, onChangeBio] = React.useState("What is your favorite coffee?");
  return (
    <KeyboardAvoidingView style={{ paddingLeft: 50 }}>
      <Text style={styles.text}>Name: Sandy Cheeks</Text>
      <Text style={styles.text}>Username: SanSan </Text>
      <TextInput style={styles.bio} onChangeText={onChangeBio} value={bio} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#e3d3b3",
    fontSize: 20,
    paddingBottom: 20,
  },
  bio: {
    color: "#776d63",
    backgroundColor: "#e3d3b3",
    fontSize: 20,
    height: 100,
    width: "85%",
    borderRadius: 10,
  },
});

export default Bio;
