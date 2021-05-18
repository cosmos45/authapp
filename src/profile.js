import { StatusBar } from "expo-status-bar";
import React from "react";
import { Actions } from "react-native-router-flux";
import axios from "axios";
import { StyleSheet, Text, View, ImageBackground, Button, Alert } from "react-native";
import { CardOne, CardThree } from "react-native-card-ui";
import { ScrollView } from "react-native-gesture-handler";
import GradientButton from "react-native-gradient-buttons";
import ProfilePicture from "react-native-profile-picture";

const image = require("../assets/images/bg1.jpg");


const pp = require("../assets/images/profile.jpg");

const Separator = () => <View style={styles.separator} />;


const profile = ({navigation}) => {
  const handleRequest = () => {
    // This request will only succeed if the Authorization header
    // contains the API token
    axios
      .get("/auth/logout/")
      .then((response) => {
        axios.defaults.headers.common.Authorization = null;
        Actions.auth();
      })
      .catch((error) => console.log(error));
  };
  const gotologin = () => {
    navigation.navigate("SignIn");
  };
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={image}
          style={{ width: "100%", height: 270 }}
          imageStyle={{
            borderBottomRightRadius: 35,
            borderBottomLeftRadius: 35,
          }}
        >
          <View
            style={{
              paddingTop: 240,
              alignItems: "center",
            }}
          >
            <ProfilePicture
              isPicture={false}
              user="FirstName ListName"
              shape='circular'
            />
          </View>
        </ImageBackground>
        <Text style={styles.UserGreet}>Astle Ribeiro</Text>
        <Text style={styles.status}>Something like a status</Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          
           <View>
                <Button
                  title="Logout"
                  onPress={handleRequest.bind(this)}
                />
               
              </View>
        </View>
        <Separator />
        
        <View style={{ paddingBottom: 10 }}>
          <GradientButton
            text="Payment Options"
            textStyle={{ fontSize: 14, color: "black" }}
            gradientBegin="#cfcfcf"
            gradientEnd="#cfcfcf"
            height={60}
            width={StyleSheet.lineWidth}
            radius={25}
            impact
            impactStyle="Light"
            onPressAction={() => alert("You pressed me!")}
          />
        </View>
        <View style={{ paddingBottom: 10 }}>
          <GradientButton
            text="FeedBack"
            textStyle={{ fontSize: 14, color: "black" }}
            gradientBegin="#b8b8b8"
            gradientEnd="#b8b8b8"
            height={60}
            width={StyleSheet.lineWidth}
            radius={25}
            impact
            impactStyle="Light"
            onPressAction={() => alert("You pressed me!")}
          />
        </View>
        <View style={{ paddingBottom: 10 }}>
          <GradientButton
            text="Terms and Services"
            textStyle={{ fontSize: 14, color: "black" }}
            gradientBegin="#a1a1a1"
            gradientEnd="#a1a1a1"
            height={60}
            width={StyleSheet.lineWidth}
            radius={25}
            impact
            impactStyle="Light"
            onPressAction={() => alert("You pressed me!")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  UserGreet: {
    fontSize: 36,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    paddingTop: 60,
  },
  status: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default profile;
