import React from "react";
import { ImageBackground } from "react-native";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import GradientButton from "react-native-gradient-buttons";

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
    slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    top: 450,
    left: 20,
  },
  textbio: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "normal",
    top: 450,
    left: 20,
  },
});

const Guides = () => {
    const image = require("../assets/images/loginbg2.jpg");

    const SCREEN_HEIGHT = Dimensions.get("window").height;

  return (
    <Swiper style={styles.wrapper} showsButtons loop={false}>
      <View testID="Hello" style={styles.slide1}>
        <ImageBackground source={image} style={{ width: "100%", height: 620 }}>
          <View>
            <Text style={styles.text}>Kerala</Text>
            <Text style={styles.textbio}> Little biography about the place</Text>
            <Text style={styles.textbio}> In 2 lines max</Text>
          </View>
          <View style={{ top: 460, left: 15}}>
            <GradientButton
              text="Visit"
              textStyle={{ fontSize: 20, color: "black" }}
              gradientBegin="#e6e6e6"
              gradientEnd="#e6e6e6"
              height={40}
              width="25%"
              radius={20}
              impact
              impactStyle="Light"
              onPressAction={() => alert("You pressed me!")}
              
            />
          </View>
        </ImageBackground>
      </View>
      <View testID="Beautiful" style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View testID="Simple" style={styles.slide3}>
        <Text style={styles.text} >And simple </Text>
      </View>
    </Swiper>
  );
};
  
export default Guides;