import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import db from '../config';
import firebase from 'firebase';

class SoundButton extends React.Component{
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3',
      },
      { shouldPlay: true }
    );
  };
  isButtonPressed(buttonColor){
    
    var team = db.ref('teams/'+buttonColor+'/');
    team.update({
      isButtonPressed: true,
      timeStamp: firebase.database.ServerValue.TIMESTAMP,
    })
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: this.props.color }]}
        onPress={() => {
          var buttonColor=this.props.color
          this.isButtonPressed(buttonColor)
          this.playSound()

        }


        }>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 100,
    marginLeft: 80,
    borderWidth: 3,
    borderColor: 'rgb(0)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'red',
    borderRadius: 200,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default SoundButton;
