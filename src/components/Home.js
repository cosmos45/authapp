import React, { Component, useState } from "react";
import { Actions } from "react-native-router-flux";
import axios from "axios";
import { StyleSheet, Text, View, ImageBackground, Image,  ScrollView, TouchableOpacity, FlatList,  } from "react-native";
import { SearchBar, Card, Avatar, Button, Icon} from "react-native-elements";
import { Feather } from "react-native-vector-icons";
import { CardFive, CardNine, CardSeven, CardEleven} from "react-native-card-ui";
import Modal from 'react-native-modal';
import Slider from "react-native-slider";


  const Home = ({navigation}) => {
  
  const image = require("../../assets/images/bg1.jpg");

  const recent = require("../../assets/scrollview/place_8.jpg");

  const logo = require("../../assets/images/logoy.png");

  const hotel1 = require("../../assets/hotel1.png");

  const flight = require("../../assets/flight1.png");

  
const Separator = () => <View style={styles.separator} />;



 

  const [gallery, setgallery] = useState([
    {
      image1: require("../../assets/scrollview/place_1.jpg"),
      title: "Assam",
    },
    {
      image1: require("../../assets/scrollview/place_2.jpg"),
      title: "Orissa",
    },
    {
      image1: require("../../assets/scrollview/place_3.jpg"),
      title: "Jammu",
    },
    {
      image1: require("../../assets/scrollview/place_4.jpg"),
      title: "Goa",
    },
    {
      image1: require("../../assets/scrollview/place_5.jpg"),
      title: "Kerala",
    },
    {
      image1: require("../../assets/scrollview/place_6.jpg"),
      title: "Kashmir",
    },
    {
      image1: require("../../assets/scrollview/place_7.jpg"),
      title: "Rajastan",
    },
    {
      image1: require("../../assets/scrollview/place_8.jpg"),
      title: "Meghalaya",
    },
  ]);

  const [topjourney] = useState([
    {
      image: require("../../assets/topjourneys/1.jpg"),
      title: "Place1",
      subtitle: "be there, done that",
    },

    {
      image: require("../../assets/topjourneys/2.jpg"),
      title: "Place2",
      subtitle: "be there, done that",
    },
    {
      image: require("../../assets/topjourneys/3.jpg"),
      title: "Place3",
      subtitle: "be there, done that",
    },
    {
      image: require("../../assets/topjourneys/4.jpg"),
      title: "Place4",
      subtitle: "be there, done that",
    },
    {
      image: require("../../assets/topjourneys/5.jpg"),
      title: "Place5",
      subtitle: "be there, done that",
    },
    {
      image: require("../../assets/topjourneys/6.jpg"),
      title: "Place6",
      subtitle: "be there, done that",
    },
    {
      image: require("../../assets/topjourneys/7.jpg"),
      title: "Place7",
      subtitle: "be there, done that",
    },
  ]);
  
  const [isModalVisible, setModalVisible] = useState(false);

  

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  const [value, setValue] = useState(1000);

    
       const { buttonContainerStyle } = styles;

       
       
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <ImageBackground
            source={image}
            style={{ width: "100%", height: 270 }}
            imageStyle={{
              borderBottomRightRadius: 35,
              borderBottomLeftRadius: 35,
            }}
          >
            <View>
              <Image
                source={logo}
                style={{ width: "30%", height: 50, paddingTop: 50 }}
              ></Image>
            </View>
            
          </ImageBackground>
        </View>
        <Text style={styles.trending}>For You</Text>
        <View>
          <View style={styles.scroll}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={gallery}
              renderItem={({ item }) => {
                return (
                  <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Postdetails',{
                      title: item.title,

                     })}>
                      <ImageBackground
                        source={item.image1}
                        style={{
                          width: 100,
                          height: 150,
                          marginRight: 14,
                        }}
                        imageStyle={{
                          borderRadius: 7,
                        }}
                      >
                        <Feather
                          name="map-pin"
                          size={14}
                          color="white"
                          style={{
                            paddingTop: 128,
                            paddingLeft: 4,
                          }}
                        >
                          <Text style={styles.title}> {item.title}</Text>
                        </Feather>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                );
              }}
            ></FlatList>
          </View>
          <View>
        
      </View>
         
     
        </View>
       

        <View style={styles.square2} >
        
        
        <TouchableOpacity onPress={() => navigation.navigate('Hotels')}>
        <ImageBackground
            source={hotel1}
            style={{ width: "100%", height: 190 }}
            imageStyle={{
              borderBottomRightRadius: 25,
              borderBottomLeftRadius: 25,
            }}
            
          >
          
          
        </ImageBackground>
        
         
              </TouchableOpacity>
             
             
              </View>
              <Separator />
              <View style={styles.square3} >
        
        
        <TouchableOpacity onPress={() => navigation.navigate('Hotels')}>
        <ImageBackground
            source={flight}
            style={{ width: "100%", height: 190 }}
            imageStyle={{
              borderBottomRightRadius: 25,
              borderBottomLeftRadius: 25,
            }}
          >
          
        </ImageBackground>
              </TouchableOpacity>

              
       
             
             
              </View>

      </ScrollView>

      <Text>this is it</Text>
    </View>
  );
            };
            



            const styles = StyleSheet.create({


              container: {
                flex: 1,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
              },
              separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
              DarkOverlay: {
                position: "absolute",
                top: 0,
                right: 0,
                left: 0,
                height: 270,
                backgroundColor: "#000",
                opacity: 0.3,
                borderBottomRightRadius: 35,
                borderBottomLeftRadius: 35,
              },
            
              searchContainer: {
                paddingTop: 375,
                paddingLeft: 16,
              },
            
              UserGreet: {
                fontSize: 41,
                fontWeight: "bold",
                color: "white",
                paddingLeft: 25,
              },

              hotel:{
                fontSize: 41,
                fontWeight: "bold",
                color: "white",
                
                textAlign:"center",
                top:35

              },

              UserGreet3: {
                fontSize: 14,
                fontWeight: "bold",
                color: "white",
                marginRight:20,
                marginLeft:20,
                marginTop: 2,
                textAlign: "center",
                
              },
              UserLocation: {
                fontSize: 16,
                fontWeight: "normal",
                color: "white",
                paddingTop: 140,
                paddingLeft: 25,
            
              },
            
              trending:{
                fontSize:18,
                fontWeight:'bold',
                paddingTop: 25,
                paddingLeft: 25,
            
              },
              scroll:{
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 15,
              },
              title:{
                fontSize: 16,
                fontWeight: "bold",
            
                color: "white",
              },
              card:{
                borderRadius: 50,
              },
              square: {
                margin: 10,
                marginTop: 30,
                width: 355,
                height: 170,
                backgroundColor: "#1dbfa4",
                borderRadius: 25
                
              },
              square1: {
                margin: 10,
                marginTop: 30,
                width: 355,
                height: 200,
                backgroundColor: "#1dbfa4",
                borderRadius: 25
                
              },

              square2: {
                margin: 10,
                marginTop: 30,
                width: 355,
                height: 200,
                backgroundColor: "#0ec295",
                borderRadius: 25,
                
              },

              square3: {
                margin: 10,
                marginTop: 30,
                width: 355,
                height: 200,
                backgroundColor: "#12a695",
                borderRadius: 25,
                
              },

              centeredView: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 22
              },

              modalView: {
                margin: 20,
                backgroundColor: "white",
                borderRadius: 20,
                padding: 35,
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5
              },

              budget:{
                fontSize: 25,
                fontWeight: "bold",
                color: "black",
                textAlign: "center",
                paddingBottom: 20,
              },

              fixToText: {
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
            });

export default Home;
