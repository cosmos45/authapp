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
    fetch("http://172.20.10.2:8000/api/food")
      .then((results) => results.json())
      .then((results) => this.setState({ items: results }));
  };

  render() {
    return (
      <View style={styles.container}>
      <Swiper style={styles.wrapper}  showsButtons={false} loop={false} showsPagination={false} bounces={true}>
        {this.state.items.map(function (food, index) {
          return (
            <>
            
            
            <ImageBackground source={{ uri: `${food.image}` }}
               style={{ width: "100%", height: 375,  }}
               imageStyle={{
              borderBottomRightRadius: 35,
              borderBottomLeftRadius: 35,
            }}>
               <Text style={{color: "#000",
                    fontSize: 25,
                    fontWeight: "bold",
                    top: 380,
                    left: 20,
                    }}>
                {food.restaurant}
               
                </Text>
                
                 <Text  style={{color: "#3d403d",
                    fontSize: 10,
                    fontWeight: "bold",
                    top: 382,
                    left: 14,
                    }}>  {food.city}, {food.state}</Text>
                     <Text  style={{color: "#000",
                    fontSize: 12,
                    fontWeight: "bold",
                    top: 387,
                    left: 16,
                    }}> Cost for 2 - {food.cost_for_2}</Text>
                    <Text  style={{color: "#000",
                    fontSize: 12,
                    fontWeight: "bold",
                    top: 388,
                    left: 16,
                    }}> Must Try - {food.must_try}</Text>
              <Text style={{color: "#000",
                  fontSize: 11,
                  
                  top: 390,
                  left: 20,
                  paddingRight: 28,}}> 
                  {food.description}</Text>
                  

                 
          
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