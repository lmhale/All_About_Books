import React, { Component } from 'react';

import {

  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Proptypes from 'prop-types';


class BookItem extends React.Component {
  static propTypes = {
    books: Proptypes.object.isRequired,
    onPress: Proptypes.func.isRequired,
  };
  handlePress = () => {
    this.props.onPress(this.props.book.id);
  };
  render() {
    const book = this.props.book;
    return (

      <TouchableOpacity style={styles.bookBox} onPress={this.handlePress}>

          <View style={styles.info}>
           <Text style={styles.title}>{book.volumeInfo.title}</Text>
            <Text style={styles.author}>Author: {book.volumeInfo.authors}</Text>
            <Text style={styles.rating}>Rating: {book.volumeInfo.averageRating}</Text>

          </View>

      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  bookBox: {
    marginHorizontal: 12,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
    width: '30%',
    height: 115,

  },
  author: {
   fontSize:12,
   color: '#bc8f8f',
  },
  rating: {
    fontSize:12,
   color: '#bc8f8f',
  },
  info: {
    padding: 10,
    backgroundColor: '#F5F5F5',
    width:'55%',
    height:225,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#bc8f8f',
  },

  // footer: {
  //   flexDirection: 'row',
  // },
  // cause: {
  //   flex: 2,
  // },

});


export default BookItem;
