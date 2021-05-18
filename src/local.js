import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, ScrollView, } from "react-native";
import {Text} from 'react-native-elements';
import Swiper from "react-native-swiper";
import GradientButton from "react-native-gradient-buttons";

export default class Local extends Component {
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
    fetch("http://172.20.10.2:8000/api/locals")
      .then((results) => results.json())
      .then((results) => this.setState({ items: results }));
  };

  render() {
    return (
      <View style={styles.container}>
      <Swiper style={styles.wrapper} showsButtons={false} loop={false} showsPagination={false} bounces={true}>
        {this.state.items.map(function (locals, index) {
          return (
            <>
            <View style={{height: 120}}>
            <Text style={{color: "#000",
                    fontSize: 18,
                    fontWeight: "bold",
                    top: 5,
                    left: 10,
                    }}>
                {locals.locality}</Text>
            <Text style={{color: "#000",
                    fontSize: 12,
                    fontWeight: "bold",
                    top: 10,
                    left: 10,
                    }}>
                {locals.city}, {locals.state}</Text>
                
              <Text style={{color: "#000",
                  fontSize: 9,
                  
                  top: 16,
                  left: 10,
                  paddingRight: 28,}}> 
                  {locals.description}</Text>
                  <Text style={{color: "#000",
                  fontSize: 11,
                  fontWeight: "bold",
                  top: 19,
                  left: 8,
                  paddingRight: 28,}}> Also find : {locals.also_find}</Text>
            </View>

            <View style={{height: 490}}>
             <ImageBackground source={{ uri: `${locals.image}` }}
               style={{ width: "100%", height: 485, marginTop:30 }}
               imageStyle={{
              borderTopRightRadius: 35,
              borderTopLeftRadius: 35,
            }}>
               

            </ImageBackground>
            </View>
            
            
           
            
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