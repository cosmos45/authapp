import React, { Component, useState } from "react";
import { Actions } from "react-native-router-flux";
import axios from "axios";
import { StyleSheet, Text, View, ImageBackground, Image, Button, ScrollView, TouchableOpacity, FlatList,  } from "react-native";
import { SearchBar, Card, Avatar} from "react-native-elements";
import { Feather } from "react-native-vector-icons";
import { CardFive, CardNine, CardSeven, CardEleven} from "react-native-card-ui";

const Home = ({navigation}) => {
  const handleRequest = () => {
    // This request will only succeed if the Authorization header
    // contains the API token
    axios
      .get("/auth/logout/")
      .then((response) => {
        axios.defaults.headers.common.Authorization = null;
        Actions.auth();
      })
      .catch((error) => console.log(error));
  };
  const image = require("../../assets/images/bg1.jpg");

  const recent = require("../../assets/scrollview/place_8.jpg");

  const logo = require("../../assets/images/logoy.png");

  const gotopost = () => {
    navigation.navigate("Postdetails");
  };

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
  
  


    
       const { buttonContainerStyle } = styles;

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <ImageBackground
            source={image}
            style={{ width: "100%", height: 370 }}
            imageStyle={{
              borderBottomRightRadius: 35,
              borderBottomLeftRadius: 35,
            }}
          >
            <View>
              <Image
                source={logo}
                style={{ width: "30%", height: 50, paddingTop: 90 }}
              ></Image>
            </View>
            <View style={styles.DarkOverlay}></View>

            <Text style={styles.UserLocation}>You're in Mumbai</Text>
            <Text style={styles.UserGreet}>
              Hi,
              <View style={buttonContainerStyle}>
                <Button
                  title="Logout"
                  onPress={handleRequest.bind(this)}
                />
               
              </View>
            </Text>

            <SearchBar
              lightTheme
              autoCapitalize="none"
              icon={{ type: "font-awesome", name: "search" }}
              placeholder="Search destination"
              inputContainerStyle={{
                backgroundColor: "white",
                borderRadius: 50,
              }}
              containerStyle={{
                backgroundColor: "transparent",
                borderBottomColor: "transparent",
                borderTopColor: "transparent",
                paddingTop: 7,
                display: "flex",
                flex: 1,
                width: 360,
                paddingLeft: 28,
              }}
            />
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
                    <TouchableOpacity onPress={gotopost}>
                      <ImageBackground
                        source={item.image1}
                        style={{
                          width: 100,
                          height: 180,
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
                            paddingTop: 158,
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
          <Text style={styles.trending}> Top Journeys</Text>
          <View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={topjourney}
              renderItem={({ item }) => {
                return (
                  <View style={{ paddingLeft: 85 }}>
                    <CardNine
                      title={item.title}
                      subTitle={item.subtitle}
                      image={item.image}
                      price={33.5}
                      onClicked={() => {
                        alert("Hello!");
                      }}
                    />
                  </View>
                );
              }}
            ></FlatList>

            <View style={{ flex: 3 }}>
              <Text style={styles.trending}>Stories</Text>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={topjourney}
                renderItem={({ item }) => {
                  return (
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={{
                        alignItems: "center",
                        paddingStart: 5,
                        paddingEnd: 5,
                      }}
                    >
                      <Avatar
                        rounded
                        source={item.image}
                        size="large"
                        containerStyle={{
                          flex: 1,
                          marginTop: 10,
                          marginLeft: 10,
                          borderColor: "#18c1a5",
                          borderWidth: 2,
                        }}
                      ></Avatar>
                    </ScrollView>
                  );
                }}
              ></FlatList>
            </View>

            <Text style={styles.trending}>Last Minute Deals</Text>
            <View>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={topjourney}
                renderItem={({ item }) => {
                  return (
                    <View>
                      <CardFive
                        title={item.title}
                        subTitle={item.subtitle}
                        image={item.image}
                        icon={"star"}
                        nbStar={3}
                        iconColor={"#FFC57C"}
                      />
                    </View>
                  );
                }}
              ></FlatList>
            </View>

            <Text style={styles.trending}>Hotels</Text>
            <View>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={topjourney}
                renderItem={({ item }) => {
                  return (
                    <View>
                      <CardEleven
                        price={"$900/month"}
                        title={item.title}
                        subTitle={item.subtitle}
                        stars={4}
                        tags={["wifi", "Air cond.", "TV", "Kitchen"]}
                        image1={require("../../assets/explore/country.jpg")}
                        image2={require("../../assets/explore/country.jpg")}
                        backgroundImage={item.image}
                        onClickedShare={() => alert("Hello")}
                        onClickedPlus={() => alert("Hello")}
                      />
                    </View>
                  );
                }}
              ></FlatList>
            </View>

            <Text style={styles.trending}>Air Tickets</Text>

            <CardSeven
              title={"Vinny’s Barber"}
              subTitle={"852 N Virgil Ave, Beverly Hills"}
              image={require("../../assets/explore/country.jpg")}
              icon1={"share"}
              iconColor1={"#fff"}
              iconBackground1={"purple"}
              onClicked1={() => {
                alert("Hello!");
              }}
              icon2={"heart"}
              iconColor2={"#fff"}
              iconBackground2={"red"}
              onClicked2={() => {
                alert("Hello!");
              }}
            />
          </View>
        </View>
      </ScrollView>

      <Text>this is it</Text>
    </View>
  );
            };
            



const styles = StyleSheet.create({
  buttonContainerStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default Home;
