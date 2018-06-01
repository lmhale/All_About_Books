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
import ajax from './ajax';

class BookDetail extends React.Component {
  static propTypes = {
    initalBookData:Proptypes.object.isRequired,
  };
  state = {
    book: this.props.initalBookData,
  }
  async componentDidMount(){
    const fullBook = await ajax.fetchBookDetail(this.state.book.id)
     console.log(fullDeal);
     this.setState({
       book: fullBook,
       onBack: Proptypes.func.isRequired,
     })
  }

  render() {
    const book = this.props.book;
    return (
      <View style={styles.book} >
      <TouchableOpacity onPress={this.props.onBack}>
      <Text> Back </Text>
      </TouchableOpacity>
      <View>
<Image style={styles.image} source={{uri: book.volumeInfo.imageLinks.thumbnail}} />
      </View>
         <View style={styles.info}>
           <Text>{book.volumeInfo.title}</Text>
           <Text>{book.volumeInfo.description}</Text>

            
          </View>
        {book.imageLinks && (
      <View>
      
      </View>
      )}
     <View>
    <Text>{book.description}</Text>
     </View>

      </View>

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
    width: 120,
    height: 150,
    backgroundColor: '#ccc',
    margin:20,
  },
  info: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 1,
    borderTopWidth: 0,
    width:'100%',
    height:350,
   
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
