import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import { COFFEE } from "../../data/coffee";

const Posts = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {COFFEE.map((post, index) => (
          <Image source={{ uri: post.image }} style={styles.post} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#776d63",
  },
});

export default Posts;
