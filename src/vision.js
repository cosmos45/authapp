import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { Text, View, Dimensions, StyleSheet, FlatList,  ScrollView, TextInput, Button, TouchableOpacity, Image} from "react-native";
import Swiper from "react-native-swiper";
import GradientButton from "react-native-gradient-buttons";
import axios from "axios";
import { SearchBar } from "react-native-elements";
import { CardFive, CardNine, CardSeven, CardEleven} from "react-native-card-ui";


const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputStyle1: {
    width: "60%",
    height: 50,
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    backgroundColor: 'rgba(242, 255, 251, 1)',
    borderRadius:25,
    alignItems: "center",
    textAlign: "center",
    marginTop:20,
    paddingTop:10,
    color:"black",
  },
});

export default class Vision extends Component {
  state = {
    search: "",
    
  };

  constructor() {
    super();
    this.state = {   
      items: [],
      data:[],

    };
  }

  componentDidMount = () => {
    
  };


   _submitForm = () => {
    const { password } = this.state;
    
    console.log(password);
    fetch("https://google-ai-vision.p.rapidapi.com/cloudVision/imageLandmarksDetection", {
"method": "POST",
	"headers": {
		"content-type": "application/json",
		"x-rapidapi-key": "548cc865f6msh21a7b6952f52b6ap1d0e92jsn2c27102c0675",
		"x-rapidapi-host": "google-ai-vision.p.rapidapi.com"
	},
	"body": JSON.stringify({
		source: `${ password } `,
		sourceType: "url"
	})
}).then((response) => response.json())

    
      .then((response) => this.setState({ data: response.landmarks[0] }))
      .then((response) => {
        console.log(this.state.data);
      });

    // do some stuff here…
  };

  render() {
    
    
    return (
      <>
        
        <TextInput
          ref={ref => (this.passwordInput = ref)}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          onSubmitEditing={this._submitForm}
          style={styles.inputStyle1}
          placeholder="Enter URL"             
          placeholderTextColor="#636363" 
        />

        <TouchableOpacity onPress={this._submitForm}>
          <Text style={{textAlign: "center"}}>Submit</Text>
        </TouchableOpacity>
        <ScrollView>
        <View style={{alignSelf:"center"}}>
        <Text style={{fontSize: 16,
                fontWeight: "bold",
                color: "black",
                marginTop: 15,
                textAlign:"center",}}>{this.state.data}</Text>
        <Image source={{uri : `${this.state.password}`}} style={{width:300, height:300}}></Image>
 
        </View>
        
        </ScrollView>

        
      </>
    );
  }
}
