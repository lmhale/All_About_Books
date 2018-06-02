import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button


} from 'react-native';

import Gallery from './Gallery.js';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import { WebBrowser } from 'expo';

import BookList from './BookList';
import ajax from './ajax';
import BookDetail from './BookDetail';



export default class Search extends React.Component {
constructor(props){
    super(props);
this.state = {

     theBooks:[],
     currentBookId:null,
     query : '',
      info : [],
  }

  this.search=this.search.bind(this)
  this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  handleKeyPress(event){
    if(event.key ==='Enter')
    this.search();

  }

  search(){
    let query = this.state.query;
    let call = 'https://www.googleapis.com/books/v1/volumes?q='
    return fetch(call + query)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
        theBooks: responseJson.items,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }


  handleChange(e){
    this.setState({
       query: e.target.value
    })
  }

handleInput = (text) => {
      this.setState({ query: text })
   }


  // async componentDidMount() {
  //      const books = await ajax.fetchInitialBooks();
  //      this.setState({books});

  //        console.log(books);

  //    }

       setCurrentBook = (bookId) => {
        this.setState({
          currentBookId: bookId
        });

      }
      unsetCurrentBook = () => {
        this.setState({
          currentBookId: null,
        });

      }
     currentBook = () => {
       return this.state.theBooks.find(
         (book) => book.id === this.state.currentBookId
        );
     }


    render() {
 if(this.state.currentBookId){
        return <BookDetail book={this.currentBook()} onBack={this.unsetCurrentBook}/>
       }

      return (

     <View>

     <TextInput type="text" placeholder="Search for a book" onChange={this.handleChange}
    onChangeText = {this.handleInput} onKeyPress={this.handleKeyPress} value={this.state.query} name="query"/>

    <TouchableOpacity

               onPress ={this.search}>
               <Text> Submit </Text>
            </TouchableOpacity>

 <BookList books={this.state.theBooks} onItemPress={this.setCurrentBook}/>


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
