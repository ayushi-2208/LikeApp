import React from 'react'
import { View,Text, StyleSheet,Image,TouchableWithoutFeedback,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import images from '../data.json'

const Card = ({ item, liked, onLike, id })=>{
    // console.log(data,"card")
    return(
      
         <View style={styles.card}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableWithoutFeedback onLongPress={() => onLike(id)}>
            <Image source={{uri: item.url}} style={styles.cardImg}/>
            </TouchableWithoutFeedback>
            {/* {
              images.forEach((image)=>{
                <Image source={{uri: image.url}} style={styles.cardImg}/>
              })
            } */}
            </View>
          <View style={styles.footer}>
            <Text style={[{flex:1},styles.actionBtn]}>Comment</Text>
            <Text style={[styles.actionBtn,{marginRight:5}]}>Like</Text>
            <TouchableOpacity onPress={() => onLike(id)}>
            <Icon name="heart" size={16} color={liked ? 'red' : 'grey'} />
            </TouchableOpacity>
          </View>
        </View>
     
       
    )
}
const styles = StyleSheet.create({
    footer:{
        flexDirection:'row',
        alignItems:'center',
        flex:1,
        paddingTop:10,
      },
      card:{
        
        backgroundColor:'white',
        height:250,
        marginHorizontal:30, 
        marginVertical:30,
        borderRadius:20,
        padding:20,
      },
      actionBtn:{
        fontSize:16,
      },
      cardImg:{
        width:310,
        height:180,
        resizeMode:'contain',
        borderRadius:20}
})
export default Card;
