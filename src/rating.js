import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,

} from 'react-native';

const rating = ({navigation}) => {

    // To set the default Star Selected
  const [defaultRating, setDefaultRating] = useState(5);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  // Filled Star. You can also give the path from local
  const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  // Empty Star. You can also give the path from local
  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

  const rate1 = require("../assets/rating/11.png"); 
  const rate2 = require("../assets/rating/22.png"); 
  const rate3 = require("../assets/rating/33.png"); 
  const rate4 = require("../assets/rating/44.png"); 
  const rate5 = require("../assets/rating/55.png"); 


  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? {uri: starImageFilled}
                    : {uri: starImageCorner}
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {(() => {

            if (defaultRating == 1) {

              return (

                <ImageBackground source={rate1}
            style={{ width: "100%", height: 600,}}>
            <View style={styles.square}>
      <Text style={styles.titleText}>
          Rate our App
        </Text>      
        {/* View to hold our Stars */}
        <CustomRatingBar />
        
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => alert(defaultRating)}>
          {/* Clicking on button will show the rating as an alert */}
          <Text style={styles.buttonTextStyle}>
            Get Selected Value
          </Text>
        </TouchableOpacity>
     </View>
      </ImageBackground>    
               )

            } else if (defaultRating == 2) {

              return (
                   <ImageBackground source={rate2}
            style={{ width: "100%", height: 600,}}>
            <View style={styles.square}>
      <Text style={styles.titleText}>
          Rate our App
        </Text>
        
        
        {/* View to hold our Stars */}
        <CustomRatingBar />
        
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => alert(defaultRating)}>
          {/* Clicking on button will show the rating as an alert */}
          <Text style={styles.buttonTextStyle}>
            Get Selected Value
          </Text>
        </TouchableOpacity>
     </View>

      </ImageBackground>

                 
              )

            }

            else if (defaultRating == 3) {

              return (
                   <ImageBackground source={rate3}
            style={{ width: "100%", height: 600,}}>
            <View style={styles.square}>
      <Text style={styles.titleText}>
          Rate our App
        </Text>
        
        
        {/* View to hold our Stars */}
        <CustomRatingBar />
        
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => alert(defaultRating)}>
          {/* Clicking on button will show the rating as an alert */}
          <Text style={styles.buttonTextStyle}>
            Get Selected Value
          </Text>
        </TouchableOpacity>
     </View>

      </ImageBackground>

                 
              )

            }

            else if (defaultRating == 4) {

              return (
                   <ImageBackground source={rate4}
            style={{ width: "100%", height: 600,}}>
            <View style={styles.square}>
      <Text style={styles.titleText}>
          Rate our App
        </Text>
        
        
        {/* View to hold our Stars */}
        <CustomRatingBar />
        
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => alert(defaultRating)}>
          {/* Clicking on button will show the rating as an alert */}
          <Text style={styles.buttonTextStyle}>
            Get Selected Value
          </Text>
        </TouchableOpacity>
     </View>

      </ImageBackground>

                 
              )

            }
            
             else {

              return (

                <ImageBackground source={rate5}
            style={{ width: "100%", height: 600,}}>
            <View style={styles.square}>
      <Text style={styles.titleText}>
          Rate our App
        </Text>
        
        
        {/* View to hold our Stars */}
        <CustomRatingBar />
        
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => alert(defaultRating)}>
          {/* Clicking on button will show the rating as an alert */}
          <Text style={styles.buttonTextStyle}>
            Submit
          </Text>
        </TouchableOpacity>
     </View>

      </ImageBackground>

              )

            }

        })()}
     

    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 20,
    color: "white",
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: '#000',
    marginTop: 15,
  },
  textStyleSmall: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    marginTop: 15,
  },
  buttonStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15,
    padding: 15,
    backgroundColor: '#3d655d',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: "bold",
  },
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 1,
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },

  square: {
                
                marginTop: 420,
                width: "100%",
                height: 170,
                backgroundColor: "#60a0b0",
                borderRadius: 25
                
              },

});
export default rating;