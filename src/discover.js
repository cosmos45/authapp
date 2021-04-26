import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { Feather } from "react-native-vector-icons";




const discover = ({navigation}) => {

const explore = [
  {
    name: "Guides",
    image2: require("../assets/explore/guides1.jpg"),
  },
  {
    name: "Countries and Cities",
    image2: require("../assets/explore/country.jpg"),
  },
  {
    name: "Food",
    image2: require("../assets/explore/food.jpg"),
  },
  {
    name: "Locals",
    image2: require("../assets/explore/locals.jpg"),
  },
  {
    name: "Spots",
    image2: require("../assets/explore/spots.jpg"),
  },
  
];
  return (
    <View>
      <ScrollView>
        
        <View style={styles.scroll}>
          <FlatList
            vertical={true}
            showsHorizontalScrollIndicator={false}
            data={explore}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity
                    style={{
                      paddingTop: 10,
                    }}

                    onPress={ () => {
                      if (item.name == "Guides") {
                        navigation.navigate('Guide');
                      }
                      else if (item.name == "Food"){
                        navigation.navigate('Food');
                      }
                      else if (item.name == "Locals"){
                        navigation.navigate('Local');
                      }
                      else if (item.name == "Spots"){
                        navigation.navigate('Spot');
                      }
                      else{
                        navigation.navigate('City')
                      }

                    }}
                  >
                    <ImageBackground
                      source={item.image2}
                      style={{
                        width: 350,
                        height: 120,
                        marginRight: 14,
                      }}
                      imageStyle={{
                        borderRadius: 7,
                      }}
                    >
                      <Feather
                        style={{
                          paddingTop: 87,
                          paddingLeft: 4,
                        }}
                      >
                        <Text style={styles.name}> {item.name}</Text>
                      </Feather>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
              );
            }}
          ></FlatList>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
  UserGreet: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
    paddingLeft: 25,
    paddingTop: 30,
    textAlign: "center",

  },

  scroll: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 40,
  },
  name:{
    fontSize: 18,
    fontWeight: "bold",
    color:"white",
    


  }
});

export default discover;
