import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import {
  Dropdown,
  MultiselectDropdown,


} from 'sharingan-rn-modal-dropdown';


const Maharashtra =[
     {
       value: 'Mumbai',
       label: 'Mumbai',
     },
     {
       value: 'Nashik',
       label: 'Nashik',
     },
     {
       value: 'Pune',
       label: 'Pune',
     },
     {
       value: 'Lonavala',
       label: 'Lonavala',
     },
     {
       value: 'Alibag',
       label: 'Alibag',
     },
   ];

   


   const data = [
    {
      value: 'Andra Pradesh',
      label: 'Andra Pradesh',      
    },
    {
      value: 'Arunachal Pradesh',
      label: 'Arunachal Pradesh',      
    },
    {
      value: 'Assam',
      label: 'Assam',
    },
    {
      value: 'Bihar',
      label: 'Bihar',
    },
    {
      value: 'Chhattisgarh',
      label: 'Chhattisgarh',      
    },
    {
      value: 'Goa',
      label: 'Goa',      
    },
    {
      value: 'Gujarat',
      label: 'Gujarat',      
    },
    {
      value: 'Haryana',
      label: 'Haryana',      
    },
    {
      value: 'Himachal Pradesh',
      label: 'Himachal Pradesh',      
    },
    {
      value: 'Jharkhand',
      label: 'Jharkhand',      
    },
    {
      value: 'Karnataka',
      label: 'Karnataka',      
    },
    {
      value: 'Kerala',
      label: 'Kerala',      
    },
    {
      value: 'Madhya Pradesh',
      label: 'Madhya Pradesh',      
    },
    {
      value: 'Maharashtra',
      label: 'Maharashtra',      
    },
    {
      value: 'Manipur',
      label: 'Manipur',      
    },
    {
      value: 'Meghalaya',
      label: 'Meghalaya',      
    },
    {
      value: 'Mizoram',
      label: 'Mizoram',      
    },
    {
      value: 'Nagaland',
      label: 'Nagaland',      
    },
    {
      value: 'Odisha',
      label: 'Odisha',      
    },
    {
      value: 'Punjab',
      label: 'Punjab',      
    },
    {
      value: 'Rajasthan',
      label: 'Rajasthan',      
    },
    {
      value: 'Sikkim',
      label: 'Sikkim',      
    },
    {
      value: 'Tamil Nadu',
      label: 'Tamil Nadu',      
    },
    {
      value: 'Telangana',
      label: 'Telangana',      
    },
    {
      value: 'Tripura',
      label: 'Tripura',      
    },
    {
      value: 'Uttar Pradesh',
      label: 'Uttar Pradesh',      
    },
    {
      value: 'Uttarakhand',
      label: 'Uttarakhand',      
    },
    {
      value: 'West Bengal',
      label: 'West Bengal',      
    },
    {
      value: 'Andaman and Nicobar Islands',
      label: 'Andaman and Nicobar Islands',      
    },
    {
      value: 'Chandigarh',
      label: 'Chandigarh',      
    },
    {
      value: 'Dadra & Nagar Haveli and Daman & Diu',
      label: 'Dadra & Nagar Haveli and Daman & Diu',      
    },
    {
      value: 'Delhi',
      label: 'Delhi',      
    },
    {
      value: 'Jammu and Kashmir',
      label: 'Jammu and Kashmir',      
    },
    {
      value: 'Lakshadweep',
      label: 'Lakshadweep',      
    },
    {
      value: 'Puducherry',
      label: 'Puducherry',      
    },
    {
      value: 'Ladakh',
      label: 'Ladakh',      
    },
    
  ];

  
const Budget = ({route}) => {
   

  const [valueMS, setValueMS] = useState([]);
  const [valueSS, setValueSS] = useState('');

  const onChangeMS = (value) => {
    setValueMS(value);
  };
  const onChangeSS = (value) => {
    setValueSS(value);
  };

  return (
    <View>
    <Text style={styles.custom}> Customized Vacations</Text>
    <View style = {styles.lineStyle} />
    <Text style={styles.budget}>Budget : {route.params.paramkey3}</Text>
      <View style={{width:"80%", alignSelf:"center"}}>          
      <ScrollView>
      <View>
      <Text style={styles.state} style={{marginTop:20}}>Select state</Text>
      <Dropdown
        label="select"
        data={data}
        enableSearch
        value={valueSS}
        onChange={onChangeSS}
      />
    </View>
    {(() => {

            if (valueSS == "Assam") {

              return (

                <Text>You are a Admin.</Text>

              )

            } else if (valueSS == "Maharashtra") {

              return (

                 <View>
         <Text style={styles.state} style={{marginTop:20}}>Select destinations</Text>
          <MultiselectDropdown
            label="select"
            data={Maharashtra}
            enableSearch
            chipType="outlined"
            value={valueMS}
            onChange={onChangeMS}
          />
        </View> 

              )

            } else {

              return (

                <Text>You are a User.</Text>

              )

            }

        })()}
    
        
        

        
        
       
      </ScrollView>
      </View>    
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

  custom:{
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
    marginTop:40,
    textAlign:"center",
  },

  lineStyle:{
    borderWidth: 0.5,
    borderColor:'black',
    margin:10,
},

budget:{
  fontSize: 20,
  fontWeight: "bold",
  color: "black",
  paddingLeft: 25,
  marginTop:20,
  textAlign:"center",
  marginBottom:10,
},

state:{
  fontSize: 16,
  color: "black", 
},


});
export default Budget;