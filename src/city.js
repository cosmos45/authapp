import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, ScrollView, } from "react-native";
import {Text} from 'react-native-elements';
import Swiper from "react-native-swiper";
import GradientButton from "react-native-gradient-buttons";

export default class City extends Component {
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
    fetch("http://172.20.10.2:8000/api/cities")
      .then((results) => results.json())
      .then((results) => this.setState({ items: results }));
  };

  render() {
    return (
      <View style={styles.container}>
      <Swiper style={styles.wrapper}  showsButtons={false} loop={false} showsPagination={false} bounces={true}>
        {this.state.items.map(function (cities, index) {
          return (
            <>
            
            
            <ImageBackground source={{ uri: `${cities.image}` }}
               style={{ width: "100%", height: 615 }}>
               <Text style={{color: "#fff",
                    fontSize: 34,
                    fontWeight: "bold",
                    top: 400,
                    left: 20,
                    }}>
                {cities.city}
                <Text  style={{color: "#fff",
                    fontSize: 16,
                    fontWeight: "bold",
                    top: 420,
                    left: 20,
                    marginLeft: 10,}}>   {cities.state}</Text>
                </Text>
              <Text style={{color: "#fff",
                  fontSize: 9,
                  fontWeight: "bold",
                  top: 400,
                  left: 20,
                  paddingRight: 28,}}> 
                  {cities.description}</Text>

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