import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { Text, View, Dimensions, StyleSheet, FlatList,  ScrollView, } from "react-native";
import Swiper from "react-native-swiper";
import GradientButton from "react-native-gradient-buttons";
import axios from "axios";
import { SearchBar } from "react-native-elements";
import { CardFive, CardNine, CardSeven, CardEleven} from "react-native-card-ui";


export default class Hotels extends Component {
  state = {
    search: "",
  };

  constructor() {
    super();
    this.state = {
      hotels: [],
      items: [],
      mumbai: [],
    };
  }

  componentDidMount = () => {
    this.getItems();
    this.getItemsInMumbai();

  };
  getItems = (search) => {
    this.setState({ search });
    console.log(search);

    fetch(
      `https://hotels4.p.rapidapi.com/locations/search?query=${search}&locale=en_IN`,
      {
        "method": "GET",
	"headers": {
		"x-rapidapi-key": "548cc865f6msh21a7b6952f52b6ap1d0e92jsn2c27102c0675",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
        },
      }
    )
      .then((response) => response.json())
      .then((response) => this.setState({ items: response }))
      .then(() => {
        // const title = this.state.items;
        console.log(this.state.items);
        fetch(
          `https://hotels4.p.rapidapi.com/properties/list?adults1=1&pageNumber=1&destinationId=${this.state.items.suggestions[0].entities[0].destinationId}&pageSize=25&checkOut=2020-01-15&checkIn=2020-01-08&sortOrder=PRICE&locale=en_IN&currency=INR`,
          {
            "method": "GET",
	"headers": {
		"x-rapidapi-key": "548cc865f6msh21a7b6952f52b6ap1d0e92jsn2c27102c0675",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
            },
          }
        )
          .then((response) => response.json())
          .then((response) =>
            this.setState({ hotels: response.data.body.searchResults.results })
          )
          .then((response) => console.log(this.state.hotels));
      });
  };
  getItemsInMumbai = () => {
    fetch(
      "https://hotels4.p.rapidapi.com/properties/list?adults1=1&pageNumber=1&destinationId=1640701&pageSize=25&checkOut=2020-01-15&checkIn=2020-01-08&sortOrder=PRICE&locale=en_US&currency=USD",
      {
        "method": "GET",
	"headers": {
		"x-rapidapi-key": "548cc865f6msh21a7b6952f52b6ap1d0e92jsn2c27102c0675",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
        },
      }
    )
      .then((response) => response.json())
      .then((response) =>
        this.setState({ mumbai: response.data.body.searchResults.results })
      )
      .then((response) => console.log(this.state.mumbai));
  };
  renderItemComponent = (data) => (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingLeft: 85 }}>
          <CardNine
            title={data.item.name}
            subTitle={data.item.neighbourhood}
            image={{ uri: `${data.item.optimizedThumbUrls.srpDesktop}` }}
            price={33.5}
            onClicked={() => {
              alert("Hello!");
            }}
          />
        </View>
      </ScrollView>
    </View>
  );

  renderItemComponentMumbai = (data) => (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingLeft: 85 }}>
          <CardNine
            title={data.item.name}
            subTitle={data.item.neighbourhood}
            image={{ uri: `${data.item.optimizedThumbUrls.srpDesktop}` }}
            price={33.5}
            onClicked={() => {
              alert("Hello!");
            }}
          />
        </View>
      </ScrollView>
    </View>
  );

  renderList = () => {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={this.state.hotels}
          renderItem={(item) => this.renderItemComponent(item)}
        ></FlatList>

       
      </View>
    );
  };
  renderListMumbai = () => {

    return (
      <View style={styles.container}>
        

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={this.state.mumbai}
          renderItem={(item) => this.renderItemComponentMumbai(item)}
        ></FlatList>
      </View>
    );
    
  };

  render() {
    const { search } = this.state;

    return (
      <>
        <SearchBar
          style={{ paddingTop: 10 }}
          placeholder="Type Here..."
          onChangeText={this.getItems}
          value={search}
        />

        <View style={styles.container}>
          <Text h4 >Hotels in Mumbai</Text>

          <Text style={{ flex: 1 }}>{this.renderListMumbai()}</Text>
        </View>
        <View style={styles.container}>
          <Text>Search Results</Text>

          <Text style={{ flex: 1 }}>{this.renderList()}</Text>
        </View>
      </>
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