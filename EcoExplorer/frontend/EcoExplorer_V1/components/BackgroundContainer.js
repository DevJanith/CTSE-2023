import { View, Text } from "react-native";
import React from "react";

const BackgroundContainer = ({ children }) => {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
      }}
    >
      {children}
    </View>
  );
};

export default BackgroundContainer;
