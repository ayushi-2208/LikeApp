/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';


const App = () => {
 const [data, setData] = useState([
  {
    id: 1,
    url: "https://cdn.pixabay.com/photo/2023/05/30/17/25/door-8029228_1280.jpg",
    liked: false
    
  },
  {
    id: 2,
    url: "https://cdn.pixabay.com/photo/2023/07/04/21/22/fritillary-butterfly-8107096_640.jpg",
    liked: false
  },
  {
    id: 3,
    url: "https://cdn.pixabay.com/photo/2023/07/05/04/45/european-shorthair-8107433_640.jpg",
    liked: false
  }
  ,
  {
      id: 4,
      url: "https://cdn.pixabay.com/photo/2023/06/12/16/41/wild-bee-8058943_640.jpg",
      liked: false
    },
    {
      id: 5,
      url: "https://cdn.pixabay.com/photo/2023/06/15/07/53/ladybug-8064737_640.jpg",
      liked: false
    },
    {
      id: 6,
      url: "https://cdn.pixabay.com/photo/2023/04/30/11/44/spring-7960360_640.jpg",
      liked: false
    },
    {
      id: 7,
      url: "https://cdn.pixabay.com/photo/2023/06/28/12/43/flower-8094368_640.jpg",
      liked: false
    },
    {
      id: 8,
      url: "https://cdn.pixabay.com/photo/2023/06/04/23/09/desert-8041047_640.jpg",
      liked: false
    },
    {
      id: 9,
      url: "https://cdn.pixabay.com/photo/2023/06/01/08/53/strawberries-8033204_640.jpg",
      liked: false
    },
    {
      id: 10,
      url: "https://cdn.pixabay.com/photo/2023/07/08/22/05/cabbage-8115231_640.jpg",
      liked: false
    }
 ])
 const onPicLike = (id) => {
  setData((prevData) =>
    prevData.map((el) => {
      if (el.id === id) {
        el.liked = !el.liked;
      }
      return el;
    })
  );
};

const liked_only = data.filter((el) => el.liked);

  return (
   <ScrollView style={styles.container}>
      <Header counter={liked_only.length}/>
      <View style={styles.body}>

       {/* <Card /> */}
       {
        data.map((item)=>(
          <Card key={item.id}
          item={item}
          id={item.id}
          liked={item.liked}
          onLike={onPicLike}/>
        ))
       }
       
      </View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#D0CEE2',
      
    },
    body:{
      flex:1,
      backgroundColor:'#EEEEEE',
    },
    
})

export default App;
