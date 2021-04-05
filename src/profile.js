import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground, Button, Alert } from "react-native";
import { CardOne, CardThree } from "react-native-card-ui";
import { ScrollView } from "react-native-gesture-handler";
import GradientButton from "react-native-gradient-buttons";

const image = require("../assets/images/bg1.jpg");


const pp = require("../assets/images/profile.jpg");

const Separator = () => <View style={styles.separator} />;


const profile = ({navigation}) => {
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
              paddingTop: 190,
              alignItems: "center",
            }}
          >
            <CardOne
              height={100}
              width={100}
              borderRadius={55}
              shadowColor={"white"}
              image={pp}
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
          <GradientButton
            style={{ marginVertical: 8 }}
            text="Sign In"
            textStyle={{ fontSize: 14, color: "black" }}
            gradientBegin="#e6e6e6"
            gradientEnd="#bfbfbf"
            gradientDirection="diagonal"
            height={40}
            width={110}
            radius={20}
            impact
            impactStyle="Light"
            onPressAction={gotologin}
          />
        </View>
        <Separator />
        <View style={{ paddingBottom: 10 }}>
          <GradientButton
            text="Personal Information"
            textStyle={{ fontSize: 20, color: "black" }}
            gradientBegin="#e6e6e6"
            gradientEnd="#e6e6e6"
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
            text="Payment Options"
            textStyle={{ fontSize: 20, color: "black" }}
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
            textStyle={{ fontSize: 20, color: "black" }}
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
            textStyle={{ fontSize: 20, color: "black" }}
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
