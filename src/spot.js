import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, ScrollView, } from "react-native";
import {Text} from 'react-native-elements';
import Swiper from "react-native-swiper";
import GradientButton from "react-native-gradient-buttons";

export default class Spot extends Component {
  constructor () {
    super();
    this.state = {
      items: [],
    };
  };

  componentDidMount = () => {
    this.getItems();
  };

  getItems = () => {
    fetch("http://172.20.10.2:8000/api/spots")
      .then((results) => results.json())
      .then((results) => this.setState({ items: results }));
  };

  render() {
    return (
      <View style={styles.container}>
      <Swiper style={styles.wrapper} showsButtons loop={false} showsPagination={false} bounces={true}>
        {this.state.items.map(function (spots, index) {
          return (
            <>
            
            
            <ImageBackground source={{ uri: `${spots.image}` }}
               style={{ width: "100%", height: 615 }}>
               <Text style={{color: "#fff",
                    fontSize: 34,
                    fontWeight: "bold",
                    top: 480,
                    left: 20,
                    }}>
                {spots.city}
                <Text  style={{color: "#fff",
                    fontSize: 16,
                    fontWeight: "bold",
                    top: 480,
                    left: 20,
                    marginLeft: 10,}}>   {spots.state}</Text>
                </Text>
              <Text style={{color: "#fff",
                  fontSize: 11,
                  fontWeight: "bold",
                  top: 480,
                  left: 20,
                  paddingRight: 28,}}> 
                  {spots.description}</Text>

                  <View style={{ top: 500, left: 15}}>
            
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