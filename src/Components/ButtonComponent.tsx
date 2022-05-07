import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export const BTN_COLOR = {
  start : {x: 0,y: 1 },
  end : {x: 1.5, y: 0 },
  color : ['#22273B', 'purple','#aa52a1','#aa52a1']
}

export default function MyButton(props:any) {
  return (
    <TouchableOpacity style ={styles.container} onPress={props.click}>
      <LinearGradient 
        style = {styles.bgButton} 
        colors = {BTN_COLOR.color} 
        start = {BTN_COLOR.start} 
        end = {BTN_COLOR.end}>           
        <Text style={styles.titleBtn}>{props.name}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: { 
    width:'100%',
    alignItems: 'center', 
    shadowColor: "#8559da",
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    elevation: 6,
  },
  bgButton :{ 
    width:'80%',
    padding:12, 
    borderRadius:13, 
    marginBottom:10,
  },
  titleBtn:{
    textAlign:'center', 
    color:'white', 
    fontWeight:'800', 
    fontSize:24
  }
});
