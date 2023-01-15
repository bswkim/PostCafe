import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const UploadScreen = () => {
  const [date, setDate] = useState(date);
  const [rating, setRating] = useState(rating);
  const [image, setImage] = useState(image);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e3d3b3",
      }}
    >
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <Button title="Post this image" onPress={() => {}} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Date"
            onChangeText={(date) => setDate(date)}
            style={styles.input}
          />
          <TextInput
            placeholder="Rating"
            onChangeText={(rating) => setRating(rating)}
            style={styles.input}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
export default UploadScreen;

const styles = StyleSheet.create({
  whole: {
    backgroundColor: "#e3d3b3",
  },
  container: {
    backgroundColor: "#e3d3b3",
    height: "20%",
    width: "60%",
    marginTop: 10,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
});
