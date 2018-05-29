import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import { WebBrowser } from 'expo';





export default class HomeScreen extends React.Component {
  state = {

     items:[]
  };

getAllBooks(){
  fetch('https://www.googleapis.com/books/v1/volumes?q=wild')
    .then(data => {
      return data.json()
    })
    .then(books=> {
      this.setState({
        items: books.items

      })
      console.log(books.items);
    })

  }
  componentWillMount() {
   this.getAllBooks()
 }


    WholeNews() {
      return this.state.items.map(function(news, i){
        return(
          <View key={i}>
      <Text>{news.volumeInfo.title} </Text>
      <Text> Author: {news.volumeInfo.authors}</Text>
      <Text> Rating: {news.volumeInfo.averageRating}</Text>

            </View>
      


        );
      });
    }

  render() {

    return (
      <View style={styles.container}>
     {this.WholeNews()}

      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey',
    },
    image: {
   width: '100%',
   height: 150,
}

});
