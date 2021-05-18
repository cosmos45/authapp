import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View, Image, ScrollView, Button, ImageBackground, TouchableOpacity, } from "react-native";
import {Text} from 'react-native-elements'

const image = require("../assets/bossbot.jpg");

export default class visits extends Component {
  constructor () {
    super();
    this.state = {
      
    };
  };

  
  render() {
    const { navigation } = this.props;
    
    return (
      <View>
      <ScrollView>
      <Text h5>               Have a doubt ? Ask Boosbot</Text>
      <TouchableOpacity>
        <ImageBackground
            source={image}
            style={{ width: "100%", height: 440 }}
            imageStyle={{
              borderBottomRightRadius: 35,
              borderBottomLeftRadius: 35,
            }}
          >
          </ImageBackground>
      </TouchableOpacity>
       <Button
              buttonStyle={{width:100, alignSelf:"center", marginTop:20, color:"white"}}
              onPress={() => navigation.navigate('Bossbot')}
              title="Tap now"
              titleStyle={{color:"white"}}
              containerStyle={{color:"white"}}

              accessibilityLabel="click here to make your vacation"
              />
        <Button
              buttonStyle={{width:100, alignSelf:"center", marginTop:20, color:"white"}}
              onPress={() => navigation.navigate('rating')}
              title="Click here to review our App !"
              titleStyle={{color:"white"}}
              containerStyle={{color:"white"}}
              accessibilityLabel="click here to review our app"
              />

        
</ScrollView>

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});