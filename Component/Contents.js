import React, {Component} from "react";
import {View, StatusBar,TextInput, TouchableOpacity, StyleSheet } from "react-native";
import {Container, Header, Content, Button, Text} from "native-base";


export default class Contents extends Component {

  constructor () {
    super();
    this.state = {
      hasil : 0,
      output : "+",
      inputan: "",
      inputan1: "",
      inputan2:""
    }
  }


  handletambah = () => {
    this.setState({
      output : this.state.output = "+"
    })
  }

  handlekurang = () => {
    this.setState({
      output : this.state.output = "-"
    })
  }

  handlebagi = () => {
    this.setState({
      output : this.state.output = "/"
    })
  }

  handlekali = () => {
    this.setState({
      output : this.state.output = "*"
    })
  }



  handlehitung =()=>{
    var inputan1 = parseInt(this.state.inputan1);
    var inputan2 = parseInt(this.state.inputan2);
    if(this.state.output === "+"){

      this.setState({
        hasil :  inputan1 + inputan2
      })
    }
    else if(this.state.output === "-"){
      this.setState({
        hasil :  inputan1 - inputan2
      })
    }

    else if(this.state.output === "/"){
      this.setState({
        hasil :  inputan1 / inputan2
      })
    }

    else if(this.state.output === "*"){
      this.setState({
        hasil :  inputan1 * inputan2
      })
    }
  }



  render() {
      return (
        <View>

          <TextInput style={{marginLeft:10}}
          onChangeText={(e)=>{this.setState({inputan1:e})}}
          placeholder="Masukkan Angka"
          keyboardType="numeric"
          value={this.state.Inputan1}/>

          <Text style={{color:"blue", fontSize:50, textAlign:"center"}}> {this.state.output} </Text>

          <TextInput style={{marginLeft:10, marginBottom:-10}}
          onChangeText={(e)=>{this.setState({inputan2:e})}}
          value={this.state.inputan2}
          placeholder="Masukkan Angka"
          keyboardType="numeric"/>

          <Text style={{textAlign:"center"}}> {this.props.garis}</Text>
            <Text style={{fontSize:50, textAlign:"center", margin:20}}> {this.state.hasil} </Text>
          <Text style={{textAlign:"center"}}> {this.props.garis} </Text>
          <Text style={{margin:10, marginTop:20, marginBottom:10}}> Operator </Text>

          <Content horizontal style={{flexDirection:"row"}}>
            <Button rounded onPress = {this.handletambah}
            style={{margin:10}}>
              <Text>+</Text>
            </Button>
            <Button rounded onPress = {this.handlekurang}
            style={{margin:10}}>
              <Text>-</Text>
            </Button>
            <Button rounded onPress = {this.handlebagi}
            style={{margin:10}}>
              <Text>/</Text>
            </Button>
            <Button rounded onPress = {this.handlekali}
            style={{margin:10}}>
              <Text>*</Text>
            </Button>
            <Button rounded success onPress = {this.handlehitung}
            style={{margin:10}}>
              <Text>HITUNG</Text>
            </Button>
          </Content>

        </View>

              )
            }
          }
