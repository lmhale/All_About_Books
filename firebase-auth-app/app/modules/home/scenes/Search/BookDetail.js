import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import Proptypes from 'prop-types';


class BookDetail extends React.Component {
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
      <TouchableOpacity style={styles.book} onPress={this.handlePress}>
        
          <View style={styles.info}>
           <Text>{book.volumeInfo.title}</Text>
            <Text>{book.volumeInfo.authors}</Text>
            <Text>{book.volumeInfo.averageRating}</Text>
          </View>
     
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  book: {
    marginHorizontal: 12,
    marginTop: 12,
    textAlign:'center',
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
  info: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 1,
    borderTopWidth: 0,
    width:250,
    height:200,
   
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
  },
  cause: {
    flex: 2,
  },
  
});


export default BookDetail;
