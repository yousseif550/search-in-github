import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,Button, Alert, ActivityIndicator } from 'react-native';
// import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";


export default class Search extends Component {
  
  
  constructor() {
    super();
    this.state = { 
      name: '', 
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {

    this.props.navigation.navigate('Dashboard', {
      user_name: this.state.name.toLowerCase(),
    })
  }

  render() {

    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}>    
        <TextInput
          style={styles.inputStyle}
          placeholder="Nom d'utilisateur Git"
          value={this.state.name}
          onChangeText={(val) => this.updateInputVal(val, 'name')}
        />
        {/* <Link to="/account?name=netflix">
          <Button
            color="#3740FE"
            title="Valider"
            onPress={() => this.registerUser()}>
            Netflix
          </Button>
        </Link>  */}
        <Button
          color="#3740FE"
          title="Valider"
          onPress={() => this.registerUser()}
        />     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});
// import React, { useEffect, useState } from 'react';
// import { StyleSheet, View, Button, TextInput } from 'react-native';  
  
// export default class HomeScreen extends React.Component {  
  
//     constructor(props) {  
//         //constructor to set default state  
//         super(props);  
//         this.state = {  
//             username: '',  
//         };  
//     }  
  
//     render() {  
//         const { navigate } = this.props.navigation;  
//         return (  
//             <View style={styles.container}>  
//             <TextInput  
//         value={this.state.username}  
//         onChangeText={username => this.setState({ username })}  
//         placeholder={'Enter Any value'}  
//         style={styles.textInput}  
//         />  
//         <View style={styles.buttonStyle}>  
//             <Button  
//         title="Submit"  
//         color="#00B0FF"  
//         onPress={() =>  
//         this.props.navigation.navigate('Dashboard', {  
//             userName: this.state.username,  
//             otherParam: '101',  
//         })  
//     }  
//         />  
//         </View>  
//         </View>  
//     );  
//     }  
// }  
// const styles = StyleSheet.create({  
//     container: {  
//         flex: 1,  
//         backgroundColor: '#fff',  
//         alignItems: 'center',  
//         padding: 16,  
//     },  
//     textInput: {  
//         height: 45,width: "95%",borderColor: "gray",borderWidth: 1,fontSize:20,  
//     },  
//     buttonStyle:{  
//         width: "93%",  
//         marginTop: 50,  
//         backgroundColor: "red",  
//     }  
// });  