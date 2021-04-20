import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from 'react-native-elements';

const Postdetails = ({route}) => {
  
  return (
    <View>
      
      <ScrollView showsVerticalScrollIndicator={false}>

      <ImageBackground
      source={route.params.paramKey}
      style={{
        width: "100%",
        height: 380,

      }}
      imageStyle={{
        borderBottomLeftRadius: 70,
      }}
      >
      <View style={{flex: 1, flexDirection: "column"}}>
        <View style={{flex: 0.5}}></View>
        <View style={{flex: 2}}>
          <View style={{flex:1, flexDirection: "row"}}>
            <View style={{flex: 2}}></View>
            <View style={{flex: 1}}>
              <View style={{flex: 0.8, flexDirection: "row"}}>
                <View style={{flex:2, borderRightWidth: 4, borderRightColor: "white"}}>
                
                  <View style={{flex:1, flexDirection: "column"}}>
                    <View style={{flex: 1, borderBottomWidth: 2, borderBottomColor: "white", marginRight:4}}>
                    <Text style={styles.UserGreet1}>{route.params.paramKey3}</Text></View>
                    <View style={{flex: 1}}>
                    <Text style={styles.UserGreet2}>days</Text></View>
                  </View>
            
                </View>
                <View style={{flex:2}}>
                <View style={{flex:1, flexDirection: "column"}}>
                    <View style={{flex: 1, borderBottomWidth: 2, borderBottomColor: "white", marginLeft: 4}}>
                    <Text style={styles.UserGreet1}>{route.params.paramKey2}</Text></View>
                    <View style={{flex: 1}}>
                    <Text style={styles.UserGreet2}>cities</Text></View>
                  </View>
            </View>
              </View>
            
            </View>
          </View>
        </View>
        <View style={{flex: 3}}></View>
        
      </View></ImageBackground>

      <Text style={styles.UserGreet}>{route.params.paramKey1} <Text style={styles.small}>Tour package</Text></Text>
      <View style = {styles.lineStyle} />

      <View style={{flex: 1, flexDirection: "row"}}>
      <View style={{flex: 3}}>
      <Text style={styles.header}> Destinations</Text>
      <View style={{paddingTop: 10}}>
      <Text>
      <Icon
          name='add'
          type='ionicon'
          color='#517fa4'
          size={20}
          style={{
            paddingLeft: 40
          }}
      />
      <Text style={styles.city} >{route.params.paramKey5}</Text>
      
      </Text>
      <Text>
      <Icon
          name='add'
          type='ionicon'
          color='#517fa4'
          size={20}
          style={{
            paddingLeft: 40
          }}
      />
      <Text style={styles.city} >{route.params.paramKey6}</Text>
      </Text>
      <Text>
      <Icon
          name='add'
          type='ionicon'
          color='#517fa4'
          size={20}
          style={{
            paddingLeft: 40
          }}
      />
      <Text style={styles.city} >{route.params.paramKey7}</Text>
      </Text><Text>
      <Icon
          name='add'
          type='ionicon'
          color='#517fa4'
          size={20}
          style={{
            paddingLeft: 40
          }}
      />
      <Text style={styles.city} >{route.params.paramKey8}</Text>
      </Text>

      </View>
      </View>
      <View style={{flex: 2, borderColor: "black", borderWidth: 2, marginTop: 10, borderRadius: 10, marginRight: 5,}}>
      <View style={{paddingTop: 5, }}>
      <Text style={{
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
        paddingLeft: 10,
        textAlign: "left",

      }}> Total Expense</Text>

      <Button
        title={route.params.paramKey1}
        onPress={() => navigation.navigate("Home")} // We added an onPress event which would navigate to the About screen
      />
      </View>
      
      </View>
      </View>
      <View>
      <Text style={styles.header2}> Inclusions</Text>
      <Text style={styles.small1}>"To and Fro economy class airfare and airport taxes for tour guests as mentioned in the itinerary
      Baggage Allowance as per the airline policy for tour
      {"\n"}Tour Manager Services from Day 01 Meeting point till the dropping point on last day
      {"\n"}Travel by small cars or Tempo Travellers or Mini Buses or big buses depending on the respective tour group size.
      {"\n"}Entrance fees of all sightseeing places to be visited from inside
      {"\n"}Accommodation in comfortable and convenient hotels
      {"\n"}All Meals – Breakfast, Lunch, Dinner (set menu) as mentioned in the itinerary
      {"\n"}All Tips – Guide, Driver & Restaurants
      {"\n"}1 Lt. Water Bottle per person per day"</Text>


      <Text style={styles.header2}> Exclusions</Text>
      
      <Text style={styles.small1}>Govt Tax of 5.00% over and above the Tour Cost mentioned
      {"\n"}Any increase in Airfare, Airport taxes, Fuel Price for tours and any applicability of new taxes from Government
      {"\n"}Any upgradation in Airline class or hotel room category
      {"\n"}Cost of Insurance
      {"\n"}Cost of Pre/Post tour hotel accommodation
      {"\n"}Any extra expense such as route change, Airline change, Date change, Accommodation facilities, etc. incurred due to the unforeseen, unavoidable forced majeure circumstances during the tour
      {"\n"}Porterage (coolie charges), laundry, telephone charges, shopping, wines & alcoholic beverages, mineral water, items of personal nature and food or drink which is not part of a set group menu
      {"\n"}Any extra cost incurred on behalf of an individual due to illness, accident, hospitalization, or any personal emergency
      {"\n"}Any services or activity charges other than those included in the group tour itinerary
      {"\n"}Anything specifically not mentioned in the ‘tour price includes’ column</Text>

      <Text style={styles.header2}>Transport</Text>

      <Text style={styles.small1}>
      {"\n"}Air Travel:Mumbai – Srinagar / Srinagar – Mumbai
      {"\n"}We use Air India / Go Air / Indigo Airlines
      {"\n"}Coach Travel:AC Vehicle Type - Depends upon group size</Text>


      <Text style={styles.header2}>Travel Documents & Requirements</Text>

      <Text style={styles.small1}>
      {"\n"}ADULT: Voters ID / Passport / Aadhar Card / Driving Licence
      {"\n"}CHILD : Passport / Aadhar Card / School ID
      {"\n"}INFANT: Aadhar Card/ Birth certificate
      {"\n"}ID card, ID card type and ID card number is mandatory at time of booking, kindly carry the same ID card on tour.
      {"\n"}For NRI and Foreign National Guests alongwith Passport, Valid Indian Visa/ OCI Card/ PIO Card is mandatory.
      {"\n"}Carry two passport size photographs.</Text>

      <Text style={styles.header2}>Payment Terms</Text>

      <Text style={styles.small1}>
      Guest can pay by Cheque/ Demand Draft/ Debit card / Credit card/ NEFT/ RTGS/ IMPS. 
      {"\n"}For Debit / Credit card payment additional 1.8 % convenience charge will be applicable Cheque / Demand draft should be in favour of "Travel Boss Hospitality Pvt ltd"</Text>
      </View>
    
      
      </ScrollView>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  UserGreet: {
    fontSize: 41,
    fontWeight: "bold",
    color: "black",
    paddingLeft: 25,
    paddingTop: 10,
  },

  UserGreet1: {
    fontSize: 51,
    fontWeight: "bold",
    color: "white",
    fontFamily: "AvenirNextCondensed-Medium",
    textAlign:"center",
   
  },

  UserGreet2: {
    fontSize: 21,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontFamily: "AvenirNextCondensed-Medium",
      
  },

  small:{
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    paddingLeft: 25,
    paddingTop: 10,
  },

  small1:{
    fontSize: 10,
    fontWeight: "normal",
    color: "black",
    paddingLeft: 25,
    paddingTop: 10,
    paddingRight: 25,
  },

  header: {
    fontSize: 20,
    fontWeight: "normal",
    color: "black",
    paddingLeft: 25,
    paddingTop: 10,

  },

  header2: {
    fontSize: 16,
    fontWeight: "normal",
    color: "black",
    paddingLeft: 25,
    paddingTop: 10,

  },

  city: {
    fontSize: 16,
    fontWeight: "normal",
    color: "black",
    paddingLeft: 25,
    paddingTop: 10,

  },

  lineStyle:{
    borderWidth: 0.5,
    borderColor:'black',
    margin:10,
},


  
});

export default Postdetails;