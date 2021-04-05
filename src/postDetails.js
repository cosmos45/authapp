import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Postdetails = ({navigation}) => {
  
  return (
    <View style={styles.container}>
     
      <Text>Post details</Text>
      <StatusBar style="auto" />
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate("Home")} // We added an onPress event which would navigate to the About screen
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Postdetails;