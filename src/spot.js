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
    fetch("http://172.20.10.2:8000/api/Spots")
      .then((results) => results.json())
      .then((results) => this.setState({ items: results }));
  };

  render() {
    return (
      <View style={styles.container}>
      <Swiper style={styles.wrapper}  showsButtons={false} loop={false} showsPagination={false} bounces={true}>
        {this.state.items.map(function (Spots, index) {
          return (
            <>
            
            
            <ImageBackground source={{ uri: `${Spots.image}` }}
               style={{ width: "100%", height: 615 }}>
               <View style={{
                margin: 10,
                marginTop: 365,
                width: 355,
                height: 170,
                backgroundColor: "#fff",
                borderRadius: 25
                }} >
                <Text style={{color: "#000",
                    fontSize: 16,
                    fontWeight: "bold",
                    top: 10,
                    left: 20,
                    }}>
                {Spots.spot_name}
                <Text  style={{color: "#000",
                    fontSize: 11,
                    fontWeight: "bold",
                    top: 10,
                    left: 20,
                    marginLeft: 5,}}>   {Spots.city}</Text>
                </Text>
              <Text style={{color: "#000",
                  fontSize: 10,
                  
                  top: 14,
                  left: 20,
                  paddingRight: 28,}}> 
                  {Spots.description}</Text>
                  <Text style={{color: "#000",
                  fontSize: 10,
                  fontWeight: "bold",
                  top: 17,
                  left: 20,
                  paddingRight: 28,}}> 
                  Cost : {Spots.cost}</Text>
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