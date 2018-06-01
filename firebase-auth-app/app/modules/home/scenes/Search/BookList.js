import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
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
      <View style={styles.list}>
        <FlatList
          data={this.props.books}
          renderItem={({item}) => (
          <BookItem book={item}  onPress={this.props.onItemPress}/>
          )}
        />
      </View>

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