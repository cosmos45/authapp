import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, ScrollView, } from "react-native";
import {Text} from 'react-native-elements';
import Swiper from "react-native-swiper";
import GradientButton from "react-native-gradient-buttons";

export default class Postdetails extends Component {
  constructor (props) {
    super(props);
    this.state = {
      items: [],
    };
   
  };

  componentDidMount = () => {
    this.getItems();
  };

   static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.route.params.title,
        };
    };

  getItems = () => {
    fetch("http://172.20.10.2:8000/api/state")
      .then((results) => results.json())
      .then((results) => this.setState({ items: results }));
  };

  render() {
    const { navigation } = this.props;
    const title = this.props.route.params.title;
    
    return (
      <View style={styles.container}>
      
        {this.state.items.map(function (state) {
          if (state.state == title) {
            return (
            
            <>
            
            <Text style={{margin:10}}>HI </Text>
            <Text>{title}</Text>
            <Text>{state.state}</Text>
            <Text>{state.total_expense}</Text>
            
            </>
          );
            
          }
          

        })}
       

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