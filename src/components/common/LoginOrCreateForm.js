import React, { Component } from "react";
import { Button, View, Text, TextInput, StyleSheet,ImageBackground, } from "react-native";
import { Actions } from "react-native-router-flux";
import axios from "axios";


const image = require("../../../assets/images/loginbg2.jpg");

const image1 = require("../../../assets/signup.jpg");

class LoginOrCreateForm extends Component {
  state = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };

  onUsernameChange(text) {
    this.setState({ username: text });
  }

  onPasswordChange(text) {
    this.setState({ password: text });
  }

  onFirstNameChange(text) {
    this.setState({ firstName: text });
  }

  onLastNameChange(text) {
    this.setState({ lastName: text });
  }
  onEmailChange(text) {
    const {password} = this.state;
    alert(password);
    let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (reg.test(password) === false) {
      alert("Invalid Email format");
      this.setState({ email: password });
      return false;
    } else {
      this.setState({ email: password });
      console.log("Email is Correct");
    }
          // this.setState({ email: text });


  }

  handleRequest() {
    const endpoint = this.props.create ? "register" : "login";
    const payload = {
      username: this.state.username,
      password: this.state.password,
    };

    if (this.props.create) {
      payload.first_name = this.state.firstName;
      payload.last_name = this.state.lastName;
      payload.email = this.state.email;
    }
    console.log(payload);

    axios
      .post(`/auth/${endpoint}/`, payload)
      .then((response) => {
        const { token, user } = response.data;

        // We set the returned token as the default authorization header
        axios.defaults.headers.common.Authorization = `Token ${token}`;

        // Navigate to the home screen
        Actions.main();
      })    


      .catch((error) => alert("Invalid username or password"));
  }

  renderCreateForm() {
    const { fieldStyle, textInputStyle } = styles;
    if (this.props.create) {
      return (
        <View style={styles.formContainerStyle}>
       
            <View style={{backgroundColor:"rgba(0,0,0,0.0)", width:"100%", marginTop:10}}>
            <View style={fieldStyle}>
             <TextInput
                  placeholder="First name"
                  placeholderTextColor="#fff"
                  autoCorrect={false}
                  onChangeText={this.onFirstNameChange.bind(this)}
                  style={styles.inputStyle1}
                />
                </View>
                <View style={fieldStyle}>
                <TextInput
                  placeholder="Last name"
                  placeholderTextColor="#fff"
                  autoCorrect={false}
                  onChangeText={this.onLastNameChange.bind(this)}
                  style={styles.inputStyle1}
                />
                </View>
                <View style={fieldStyle}>
                <TextInput
                  placeholder="email"
                  placeholderTextColor="#fff"
                  autoCorrect={false}
                  style={styles.inputStyle1}
                  ref={ref => (this.passwordInput = ref)}
                  value={this.state.password}
                  onChangeText={password => this.setState({password})}
                  onSubmitEditing={this.onEmailChange.bind(this)}
                />
                </View>
            </View>
               
              
           
          
          
        </View>
      );
    }
  }

  renderButton() {
    const buttonText = this.props.create ? "Create" : "Login";

    return (
      <Button title={buttonText} onPress={this.handleRequest.bind(this)} />
    );
  }

  renderCreateLink() {
    if (!this.props.create) {
      const { accountCreateTextStyle } = styles;
      return (
        <Text style={accountCreateTextStyle}>
          Or
          <Text style={{ color: "blue" }} onPress={() => Actions.register()}>
            {" Sign-up"}
          </Text>
        </Text>
      );
    }
  }

  render() {
    const {
      formContainerStyle,
      fieldStyle,
      textInputStyle,
      buttonContainerStyle,
      accountCreateContainerStyle,
    } = styles;

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
      <ImageBackground
            source={image}
            style={{ width: "100%", height: 615 }}
            
          >
        <View style={formContainerStyle}>
          <View style={fieldStyle}>
            <TextInput
              placeholder="username"              
              placeholderTextColor="#fff" 
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={this.onUsernameChange.bind(this)}
              style={styles.inputStyle}
            />
          </View>
          <View style={fieldStyle}>
            <TextInput
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="password"             
              placeholderTextColor="#fff" 
              onChangeText={this.onPasswordChange.bind(this)}
              style={styles.inputStyle}
            />
          </View>
          {this.renderCreateForm()}
        </View>
        <View style={buttonContainerStyle}>
          {this.renderButton()}
          <View style={accountCreateContainerStyle}>
            {this.renderCreateLink()}
          </View>
        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainerStyle: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop:30,
  },
  
  inputStyle: {
    width: "60%",
    height: 50,
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    backgroundColor: 'rgba(242, 255, 251, 0.1)',
    borderRadius:25,
    alignItems: "center",
    textAlign: "center",
    paddingTop:10,
    color:"white",
  },
  inputStyle1: {
    width: "75%",
    height: 50,
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    backgroundColor: 'rgba(242, 255, 251, 0.1)',
    borderRadius:25,
    alignItems: "center",
    textAlign: "center",
    paddingTop:10,
    color:"white",
  },
  fieldStyle: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainerStyle: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    width: "75%",
    borderRadius: 55,
    alignSelf:"center",
  },
  accountCreateTextStyle: {
    color: "black",
  },
  accountCreateContainerStyle: {
    padding: 25,
    alignItems: "center",
  },
});

export default LoginOrCreateForm;