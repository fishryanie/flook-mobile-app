import { StyleSheet } from "react-native"
import { width, height } from '../../../Constants/DimensionsConstants';

export const styles = StyleSheet.create({
  headerItem:{
    padding: width/40,
    paddingBottom: height/50
  },
  headerItem_content:{
    borderLeftWidth:5,
    borderColor:'purple',
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingHorizontal: width/40,
    marginBottom: height/70
  },
  headerItem_title:{
    fontSize:25,
    lineHeight: 25,
    color:'#000',
    paddingTop: height/150,
    fontWeight: 'bold'
  },
  headerItem_seeMore:{
    fontSize: 14,
    lineHeight: 22,
    color:'#7D7E84',
    fontWeight: 'bold',
    alignSelf: 'flex-start', 
    textDecorationLine: 'underline', 
  },
})