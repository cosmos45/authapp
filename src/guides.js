import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, ScrollView, Dimensions, } from "react-native";
import {Text} from 'react-native-elements';
import Swiper from "react-native-swiper";
import GradientButton from "react-native-gradient-buttons";

export default class Guides extends Component {
  constructor () {
    super();
    this.state = {
      items: [],
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    };
  };

  componentDidMount = () => {
    this.getItems();
  };

  getItems = () => {
    fetch("http://172.20.10.2:8000/api/guides")
      .then((results) => results.json())
      .then((results) => this.setState({ items: results }));
  };

  render() {
    return (
      <View style={styles.container}>
      <Swiper style={styles.wrapper}  showsButtons={false} loop={false} showsPagination={false} bounces={true}>
        {this.state.items.map(function (guides, index) {
          return (
            <>
            
            
            <ImageBackground source={{ uri: `${guides.image}` }}
               style={{ width: "100%", height: 615 }}
               >
               <Text style={{color: "#fff",
                    fontSize: 34,
                    fontWeight: "bold",
                    top: 400,
                    left: 20,
                    }}>
                {guides.city}
                <Text  style={{color: "#fff",
                    fontSize: 16,
                    fontWeight: "bold",
                    top: 420,
                    left: 20,
                    marginLeft: 10,}}>   {guides.state}</Text>
                </Text>
              <Text style={{color: "#fff",
                  fontSize: 11,
                  fontWeight: "bold",
                  top: 400,
                  left: 20,
                  paddingRight: 28,}}> 
                  {guides.description}</Text>

                  <View style={{ top: 500, left: 15}}>
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
            
            </>


          );

        })}
        </Swiper>

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