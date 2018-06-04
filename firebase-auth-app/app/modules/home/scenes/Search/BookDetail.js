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
     console.log(fullBook);
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
      <Text style={styles.back}> Back </Text>
      </TouchableOpacity>
      <View>
<Image style={styles.image} source={{uri: book.volumeInfo.imageLinks.thumbnail}} />
      </View>
         <ScrollView style={styles.info}>
           <Text style={styles.title}>{book.volumeInfo.title}</Text>
           <Text style={styles.description}>{book.volumeInfo.description}</Text>


          </ScrollView>
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
  title: {
    fontSize: 16,
    padding: 10,
    fontWeight: 'bold',

  },
  back: {
   color:'#0000EE',
  },
  // book: {
  //   marginHorizontal: 12,
  //   marginTop: 12,
  //   textAlign:'center',
  // },
  image: {
    width: 120,
    height: 150,
    backgroundColor: '#ccc',
    marginLeft:140,
    marginBottom:15,
    justifyContent: 'center',
    alignItems: 'center',


  },
  info: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 1,
    borderTopWidth: 0,
    width:'90%',
    height:350,
    marginLeft:20,

  },
  description: {
      // textAlign:'center',

  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign:'center',
  },
  // footer: {
  //   flexDirection: 'row',
  // },
  // cause: {
  //   flex: 2,
  // },

});


export default BookDetail;
