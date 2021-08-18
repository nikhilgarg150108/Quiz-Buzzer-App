import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      redState: true,
      greenState: true,
      blueState: true,
      yellowState: true,
      purpleState: true,
      orangeState: true,
      pinkState: true,
      greyState: true
    }
  }
  goToBuzzerScreen = (buzzercolor) => {
    var teamRef = db.ref('teams/'+buzzercolor);
    teamRef.update({
      enable: false,
    });
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });
  };
  componentDidMount(){
    var teamsRef = db.ref("teams");
    teamsRef.on("value", data=>{
      var teamDetails = data.val()
      this.setState({
        redState: teamDetails.red.enable,
        blueState: teamDetails.blue.enable,
        yellowState: teamDetails.yellow.enable,
        greenState: teamDetails.green.enable,
        purpleState: teamDetails.purple.enable,
        orangeState: teamDetails.orange.enable,
        pinkState: teamDetails.pink.enable,
        greyState: teamDetails.grey.enable,
      })
    })
  }
  render() {
    return (
      <View>
        <AppHeader />

        <TouchableOpacity
          disabled = {!this.state.redState}
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => {
            this.goToBuzzerScreen('red');
          }}>
          <Text style={styles.buttonText}>Player 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled = {!this.state.greenState}
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => {
            this.goToBuzzerScreen('green');
          }}>
          <Text style={styles.buttonText}>Player 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled = {!this.state.blueState}
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => {
            this.goToBuzzerScreen('blue');
          }}>
          <Text style={styles.buttonText}>Player 3</Text>
        </TouchableOpacity>


        <TouchableOpacity
          disabled = {!this.state.yellowState}
          style={[styles.button, { backgroundColor: '#ffdb0f' }]}
          onPress={() => {
            this.goToBuzzerScreen('yellow');
          }}>
          <Text style={styles.buttonText}>Player 4</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled = {!this.state.purpleState}
          style={[styles.button, { backgroundColor: 'purple' }]}
          onPress={() => {
            this.goToBuzzerScreen('purple');
          }}>
          <Text style={styles.buttonText}>Player 5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled = {!this.state.orangeState}
          style={[styles.button, { backgroundColor: '#ff830f' }]}
          onPress={() => {
            this.goToBuzzerScreen('orange');
          }}>
          <Text style={styles.buttonText}>Player 6</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled = {!this.state.pinkState}
          style={[styles.button, { backgroundColor: '#ff49e9' }]}
          onPress={() => {
            this.goToBuzzerScreen('pink');
          }}>
          <Text style={styles.buttonText}>Player 7</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled = {!this.state.greyState}
          style={[styles.button, { backgroundColor: '#bcbaba' }]}
          onPress={() => {
            this.goToBuzzerScreen('grey');
          }}>
          <Text style={styles.buttonText}>Player 8</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 12,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
