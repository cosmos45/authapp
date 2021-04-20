import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import {Text} from 'react-native-elements'

export default class visits extends Component {
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
    fetch("http://192.168.43.108:8000/api/item")
      .then((results) => results.json())
      .then((results) => this.setState({ items: results }));
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.items.map(function (item, index) {
          return (
            <View style={{flex: 1}}>
              <Text h4 key={index}>
                {item.title}
                {"\n"}
                {item.description} {"\n"}
              </Text>
               <Image
                source={{ uri: `${item.image}` }}
                style={{ width: "30%", height: 50, paddingTop: 90 }}
              />

            </View>


          );

        })}


        <Text>Visit screen</Text>


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