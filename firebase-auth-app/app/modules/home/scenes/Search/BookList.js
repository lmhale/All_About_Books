import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  ImageBackground
} from 'react-native';
import Proptypes from 'prop-types';
import BookItem from './BookItem'

class BookList extends React.Component {
  static propTypes = {
    books: Proptypes.array.isRequired,
    onItemPress: Proptypes.func.isRequired,
  }

  render() {

    return (

 <ImageBackground source={require('./books.jpg')} style={styles.pic}>
<ScrollView>
            {

                this.props.books.map((b, i) => {

                    return (


                       <BookItem book={b}  onPress={this.props.onItemPress}/>


                    );
                })

            }   </ScrollView>

            </ImageBackground>

    );
  }
}
const styles = StyleSheet.create({
  pic: {
   width:'100%',
  },
  list: {
    backgroundColor: '#eee',
    width: '100%',
  },

});
export default BookList;
