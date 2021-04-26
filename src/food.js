import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, ScrollView, } from "react-native";
import {Text} from 'react-native-elements';
import Swiper from "react-native-swiper";
import GradientButton from "react-native-gradient-buttons";

export default class Food extends Component {
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
    fetch("http://172.20.10.2:8000/api/food")
      .then((results) => results.json())
      .then((results) => this.setState({ items: results }));
  };

  render() {
    return (
      <View style={styles.container}>
      <Swiper style={styles.wrapper} showsButtons loop={false} showsPagination={false} bounces={true}>
        {this.state.items.map(function (food, index) {
          return (
            <>
            
            
            <ImageBackground source={{ uri: `${food.image}` }}
               style={{ width: undefined, height:undefined ,}}
               resizeMode={"contain"}>
               <Text style={{color: "#fff",
                    fontSize: 34,
                    fontWeight: "bold",
                    top: 480,
                    left: 20,
                    }}>
                {food.city}
                <Text  style={{color: "#fff",
                    fontSize: 16,
                    fontWeight: "bold",
                    top: 480,
                    left: 20,
                    marginLeft: 10,}}>   {food.state}</Text>
                </Text>
              <Text style={{color: "#fff",
                  fontSize: 11,
                  fontWeight: "bold",
                  top: 480,
                  left: 20,
                  paddingRight: 28,}}> 
                  {food.description}</Text>

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