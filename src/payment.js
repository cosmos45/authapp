import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View, Image, ScrollView, Button, ImageBackground, TouchableOpacity, TextInput, SafeAreaView, } from "react-native";
import {Text, Icon,} from 'react-native-elements';
import { Feather } from "react-native-vector-icons";
import PaystackWebView from "react-native-paystack-webview";


export default class Payment extends Component {
  constructor () {
    super();
    this.state = {
    };
  };

_submitForm = () => {
    const { name } = this.state;
    const { email } = this.state;
    const { phone } = this.state;
    const { adults } = this.state;
    const { child } = this.state;
    console.log(name);
    console.log(email);
    console.log(phone, adults, child);
    
}
  
  render() {
    const { navigation } = this.props;
    const { route }= this.props;
    const price = route.params.paramkey1;
    const intprice = parseInt(price);
    const tt = price * 5 / 100;
    const inttt = parseInt(tt);
    const total = inttt + intprice;
    
    return (
      <View style={{marginTop: 20, marginLeft: 20, marginRight:20, backgroundColor:"#ebfcfc", borderRadius: 25}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.payment}> Payment </Text>
      <Text style={styles.personal}> Personal Information</Text>
      <TextInput
            style={styles.inputStyle}
            placeholder="Name"
            placeholderTextColor="black"
            ref={ref => (this.passwordInput = ref)}
            value={this.state.name}
            onChangeText={name => this.setState({name})}
               
     />
     <TextInput
            style={styles.inputStyle}
            placeholder="Email"
            placeholderTextColor="black"
            ref={ref => (this.passwordInput = ref)}
            value={this.state.email}
            keyboardType= "email-address"
            onChangeText={email => this.setState({email})}
               
     />
     <TextInput
            style={styles.inputStyle}
            placeholder="Phone"
            placeholderTextColor="black"
            ref={ref => (this.passwordInput = ref)}
            value={this.state.phone}
            keyboardType= "numeric"
            onChangeText={phone => this.setState({phone})}
                
     />
     <Text style={styles.personal}> Trip Details </Text>
     
     <View style={{flex:1, flexDirection:"row"}}>
     <View style={{flex: 3}}>
     <Text> No. of Adults</Text>
     </View>
     <View style={{flex:2}}>
     
     <TextInput
            style={styles.inputStyle}
            placeholder="0"
            placeholderTextColor="black"
            ref={ref => (this.passwordInput = ref)}
            value={this.state.adults}
            keyboardType= "numeric"
            onChangeText={adults => this.setState({adults})}
                
     />
     </View>
     </View>
     <View style={{flex:1, flexDirection:"row"}}>
     <View style={{flex: 3}}>
     <Text> No. of Children</Text>
     </View>
     <View style={{flex:2}}>
     
     <TextInput
            style={styles.inputStyle}
            placeholder="0"
            placeholderTextColor="black"
            ref={ref => (this.passwordInput = ref)}
            value={this.state.child}
            keyboardType= "numeric"
            onChangeText={child => this.setState({child})}
              
     />
     </View>
     </View>
     <Text style={styles.personal}> Payment details</Text>
     <View style={{flex:1, flexDirection:"row" , marginTop: 10}}>
     <View style={{flex: 3 }}>
     <Text> Trip Amount</Text>
     </View>
     <View style={{flex:2}}>
     
    <Text style={{textAlign: "right", paddingRight: 15}}> {route.params.paramkey1}</Text>
     </View>
     </View>
      <View style={{flex:1, flexDirection:"row"  , marginTop: 15}}>
     <View style={{flex: 3}}>
     <Text> GST - 5%</Text>
     </View>
     <View style={{flex:2}}>
     
    <Text style={{textAlign: "right", paddingRight: 15}}>{tt} </Text>
     </View>
     </View>
      <View style={{flex:1, flexDirection:"row"  , marginTop: 15}}>
     <View style={{flex: 3}}>
     <Text> Total Amount</Text>
     </View>
     <View style={{flex:2}}>
     
    <Text style={{textAlign: "right", paddingRight: 15}}> {total}</Text>
     </View>
     </View>
     

     

     <TouchableOpacity onPress={this._submitForm} 
     style={{backgroundColor:"#0c8a62", 
     width:"30%",
     borderRadius:30,
     marginTop:20,
     height: 40,
     alignSelf:"center",
     marginBottom:30
     }}>
          <Text style={{paddingTop:10, textAlign:"center", color:"white"}}>Submit</Text>
        </TouchableOpacity>
        <SafeAreaView>
           
            
            <PaystackWebView
        buttonText="Pay Now"
        showPayButton={true}
        paystackKey="pk_test_ebb05a681f159a28d7b1defd6b2254a7f5a1e908"
        amount={total}
        billingEmail="astleribeiro@gmail.com"
        billingMobile="0978654362"
        billingName="Olakei"
        ActivityIndicatorColor="green"
        
      onCancel={(e) => {
          console.log("cancel")
        }}
        onSuccess={(res) => {
          return(
              <View>
              <Text></Text>
              </View>
          )
        }}
        autoStart={false}
      />
            </SafeAreaView>
       


      
        
        </ScrollView>

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
  inputStyle: {
    width: "90%",
    height: 50,
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    backgroundColor: '#dee0e0',
    borderRadius:25,
    alignItems: "center",
    textAlign: "center",
    paddingTop:10,
    
  },
  payment:{
      fontSize: 21,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        paddingTop:20,
        
  },

  personal:{
      fontSize: 15,
        fontWeight: "bold",
        color: "#0ead7b",
        textAlign: "center",
        paddingTop:20,
        paddingBottom: 20,

  }
});