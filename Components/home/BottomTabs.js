import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export const bottomTabIcons = [
  {
    name: "Post",
    active: "https://cdn-icons-png.flaticon.com/512/3032/3032220.png",
    inactive: "https://cdn-icons-png.flaticon.com/512/3161/3161837.png",
  },
  {
    name: "Home",
    active: "https://cdn-icons-png.flaticon.com/512/924/924514.png",
    inactive: "https://cdn-icons-png.flaticon.com/512/924/924412.png",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const navigation = useNavigation();
  const Icon = ({ icon }) => (
    <View>
      <TouchableOpacity
        onPress={() => {
          setActiveTab(icon.name);
          icon.name === "Home"
            ? navigation.navigate("ProfileScreen")
            : navigation.navigate("UploadScreen");
        }}
      >
        <Image
          source={{
            uri: activeTab === icon.name ? icon.active : icon.inactive,
          }}
          style={[
            styles.icon,
            icon.name === "Profile" ? styles.profilePic : null,
          ]}
        />
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "3%",
    zIndex: 999,
    backgroundColor: "#e3d3b3",
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },

  icon: {
    width: 35,
    height: 35,
  },

  profilePic: {
    borderRadius: 50,
    borderColor: "white",
  },
});

export default BottomTabs;
