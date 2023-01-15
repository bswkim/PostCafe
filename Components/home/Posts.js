import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import { COFFEE } from "../../data/coffee";
import { Rating } from "react-native-rating-element";

const Posts = () => {
  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      {COFFEE.map((post, index) => (
        <View key={index} style={{ alignItems: "center" }}>
          <Text style={styles.text}>{post.date}</Text>
          <Image source={{ uri: post.image }} style={styles.post} />
          <View style={styles.rating}>
            <Rating
              type="custom"
              rated={post.rating}
              totalCount={10}
              size={30}
              onIconTap={(position) => console.log(`User pressed: ${position}`)}
              selectedIconImage={require("../../assets/filled.png")}
              emptyIconImage={require("../../assets/empty.png")}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  post: {
    width: 350,
    height: 350,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#776d63",
  },
  text: {
    color: "#776d63",
    fontSize: 16,
    fontWeight: "1000",
    marginBottom: 10,
  },
  rating: {
    marginBottom: 80,
    marginTop: 10,
  },
});

export default Posts;
