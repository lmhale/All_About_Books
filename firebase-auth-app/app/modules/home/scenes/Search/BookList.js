import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  FlatList
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
     <View>
            {
                this.props.books.map((b, i) => {

                    return (

                        <View>

                       <BookItem book={b}  onPress={this.props.onItemPress}/>
                       </View>
                    );
                })
            }</View>

    );
  }
}
const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
    width: '100%',
  },
});
export default BookList;
