import React, { Component } from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text, Image, StatusBar } from 'react-native';

class Botao extends Component{
  constructor(props){
    super(props);
    this.state = {};
    this.styles = StyleSheet.create({
      botao: {
        width: 250,
        height: 50,
        borderWidth: 2,
        borderColor: props.color,
        backgroundColor: 'transparent',
        borderRadius: 25
      },
      btArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      botaoText: {
        color: props.color,
        fontSize: 14,
        fontWeight: 'bold'
      }
    });
  }
  render(){
    return(
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        <View style={this.styles.btArea}>
          <Text style={this.styles.botaoText}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class BiscoitoSorte extends Component{
  constructor(props){
    super(props);
    this.state = {texto: ''};

    this.frases = [
    'Life will bring good things if you have patience.', 
    'Show love and joy at every opportunity and you will see that peace is born within you.',
    "Don't make up for anger what you lack in reason.", 
    'Defects and virtues are only two sides of the same coin.', 
    'The largest of all towers begins on the ground.', 
    "You don't have to be strong. You have to be flexible.", 
    'People every day fix their hair, why not the heart?',
    "No matter the size of the mountain, she can't cover the sun",
    'Common sense goes further than much knowledge.',
    'Anyone who wants to pick roses must bear the thorns.',
    'Youth is not a time of life, it is a state of mind.',
    'He who cares about the feelings of others is not a fool.',
    "You're young only once. Then you need to come up with another excuse.",
    'Laughter is the shortest distance between two people.',
    'All things are difficult before they become easy.'
    ];

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    this.fechar = this.fechar.bind(this);
  }
  quebrarBiscoito(){
    let s = this.state;
    let r = Math.floor(Math.random() * this.frases.length);
    s.texto = this.frases[r];
    this.setState(s);
  }
  fechar(){
    let s = this.state;
    let r = '';
    s.texto = this.frases[r];
    this.setState(s);
  }
  render(){
    return(
      <View style={styles.body}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#FFFFFF" translucent={true} />
        <Image source={require('./images/cookie.png')}/>
        <View style={styles.textoArea}>
          <Text style={styles.texto}>{this.state.texto}</Text>
        </View>
        <View style={styles.btnArea}>
          <Botao color="#b59619" text="Break Biscuit" onPress={this.quebrarBiscoito} />
        </View>
        <View style={styles.btnArea}>
          <Botao color="#b59619" text="Close Biscuit" onPress={this.fechar} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    fontSize: 17,
    color: '#b59619',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  btnArea: {
    margin: 10
  },
  textoArea: {
    height: 150
  }
});