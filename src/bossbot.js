import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import ChatBot from 'react-native-chatbot-expo'; 

//steps are to instruct what message chat bot will fire and when to take input from user
const steps = [
  {
    id:'0',
    message:'Hello! How may I help you?',
    trigger:'1'
  },
  {
    id:'1',
    user:true,
    trigger:'2'
  },
  {
    id:'2',
    message:'Sorry for the inconvenience.',
    trigger:'4'
  },
   
  {
    id:'4',
    message:'Are these one of your issues?',
    trigger:'5'
  },
  {
    id:'5',
    options: [
      { value: 4, label: 'Covid', trigger: '11' },
      { value: 5, label: 'Payment', trigger: '12' },
      { value: 6, label: 'Booking', trigger: '13' },
    ], 
  },
  //Covid situation
  {
    id:'11',
    user:true,
    trigger:'21'
  },
  {
    id:'21',
    message:'Travelling during the lockdown requires a negative test result of a COVID done 2 days prior',
    trigger:'6' 
  },
  //Payment related
  {  id:'12',
    user:true,
    trigger:'22'
  },
  {
    id:'22',
    message:'Sorry for the inconvenience.You will get your payment back shortly',
    trigger:'6'
  },
  //Booking related
  {  id:'13',
    user:true,
    trigger:'23'
  },
  {
    id:'23',
    message:'Booking dates cannot be changed once payment is done',
    trigger:'6'
  },
 

  //closing statements
  {
    id:'6',
    message:'Was your issue resolved?',
    trigger:'7'
  },
  {
    id: '7',
    options: [
      { value: 1, label: 'YES', trigger: '8' },
      { value: 2, label: 'NO', trigger: '10' },
    ], 
   },
   {
    id:'8',
    message:'Please rate us.',
    trigger:'9'
   },
   {
    id:'10',
    message:'You will receive call from our customer support, shortly.',
    trigger:'9'
   },
   {
     id:'9',
     message:'Thank you!!',
     end:true
   }

]


export default class Bossbot extends Component {
  render(){
    return(
      <SafeAreaView>
        <ChatBot
        steps={steps}/>
      </SafeAreaView>
    )
  }
}
