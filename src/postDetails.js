import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, ScrollView, Button, SafeAreaView } from "react-native";
import {Text} from 'react-native-elements';
import Swiper from "react-native-swiper";
import GradientButton from "react-native-gradient-buttons";
import PaystackWebView from "react-native-paystack-webview";
import { Feather } from "react-native-vector-icons";
import { DataTable } from 'react-native-paper';


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
    
    const Separator = () => <View style={styles.separator} />;

    
    return (
      <View style={styles.container}>
      
        {this.state.items.map(function (state) {
          if (state.state == title) {
            return (
            
            <>
            <ScrollView showsVerticalScrollIndicator={false}>
            
             <Image 
                source={{ uri: `${state.image}` }}
                style={{ width: 370, height: 350, 
              borderBottomLeftRadius: 55,  }}
                ></Image>
                <Text style={{fontSize: 20,
                fontWeight: "bold",
                color: "black",
                marginTop: 10,
                marginLeft: 10}}>{state.state} - Rs.{state.total_expense}</Text>
                <Text style={{fontSize: 12,
                fontWeight: "bold",
                color: "black",
                marginTop: 5,
                marginLeft: 10}}>City Visits: {state.destinations}</Text>
                <View style={{flex: 1, flexDirection:"row"}}>
                <View style={{flex:4}}>
                
                <Feather
                          name="compass"
                          size={17}
                          color="black"
                          style={{
                            paddingTop: 10,
                            paddingLeft: 10,
                          }}
                        >
                          <Text> Cities: {state.no_of_cities}</Text>
                        </Feather>
                </View>
                <View style={{flex: 5}}>
                 <Feather
                          name="calendar"
                          size={17}
                          color="black"
                          style={{
                            paddingTop: 10,
                            paddingLeft: 10,
                          }}
                        >
                          <Text> Days: {state.no_of_days}</Text>
                        </Feather>
                </View>


                </View>
                <Separator />
                <Text style={{fontSize: 14,
                fontWeight: "bold",
                color: "black",
                marginTop: 5,
                marginLeft: 10}}>Includes</Text>
                <View style={{flex: 1, flexDirection:"row"}}>
                <View stye={{flex:1}}><Feather
                          name="home"
                          size={15}
                          color="black"
                          style={{
                            paddingTop: 10,
                            paddingLeft: 10,
                          }}
                        >
                          <Text> Hotel</Text>
                        </Feather></View>
                <View stye={{flex:1}}><Feather
                          name="truck"
                          size={15}
                          color="black"
                          style={{
                            paddingTop: 10,
                            paddingLeft: 10,
                          }}
                        >
                          <Text> Transport</Text>
                        </Feather></View>
                <View stye={{flex:1}}><Feather
                          name="camera"
                          size={15}
                          color="black"
                          style={{
                            paddingTop: 10,
                            paddingLeft: 10,
                          }}
                        >
                          <Text> Sight-Seeing</Text>
                        </Feather></View>
                        <View stye={{flex:1}}><Feather
                          name="coffee"
                          size={15}
                          color="black"
                          style={{
                            paddingTop: 10,
                            paddingLeft: 10,
                          }}
                        >
                          <Text> Food</Text>
                        </Feather></View>
                
                </View>
                <Text style={{fontSize: 14,
                fontWeight: "bold",
                color: "black",
                marginTop: 15,
                marginLeft: 10}}>Day Overview</Text>
                <Text style={{fontSize: 10,
                color: "black",
                marginTop: 5,
                marginLeft: 10,
                marginRight: 10,}}>{state.day_overview}</Text>
                
                <Button
              buttonStyle={{width:100, alignSelf:"center", marginTop:20, color:"white"}}
              onPress={() => navigation.navigate('Payment',{
                paramkey1: state.total_expense
                })}
              title="Tap now"
              titleStyle={{color:"white"}}
              containerStyle={{color:"white"}}
              
              
              
              accessibilityLabel="click here to make your vacation"
              />
                 
                        
            
             <Text style={{fontSize: 14,
                fontWeight: "bold",
                color: "black",
                marginTop: 15,
                marginLeft: 10}}>Tour Detailed Price</Text>
            <View style={{marginLeft: 20, marginRight: 20}}>
            <DataTable>
    <DataTable.Header>
      <DataTable.Title>Room Type</DataTable.Title>
      <DataTable.Title numeric>Deal Price</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell>Single Occupancy</DataTable.Cell>
      <DataTable.Cell numeric>Rs. {state.single_occupancy}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Twin Sharing</DataTable.Cell>
      <DataTable.Cell numeric>Rs. {state.twin_sharing}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Triple Sharing</DataTable.Cell>
      <DataTable.Cell numeric>Rs. {state.triple_sharing}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Infant</DataTable.Cell>
      <DataTable.Cell numeric>Rs. {state.infant}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Child (5 - 11) Mattress</DataTable.Cell>
      <DataTable.Cell numeric>Rs. {state.child_with_mat}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Child (2 - 4)</DataTable.Cell>
      <DataTable.Cell numeric>Rs. {state.child}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Child (5 - 11)</DataTable.Cell>
      <DataTable.Cell numeric>Rs. {state.child_without_mat}</DataTable.Cell>
    </DataTable.Row>

    

    
  </DataTable>
            </View>

            </ScrollView>
            
            
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
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});