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

     <View style={styles.form}>

     <TextInput style={styles.input} type="text" placeholder="Search for a book" onChange={this.handleChange}
    onChangeText = {this.handleInput} onKeyPress={this.handleKeyPress} value={this.state.query} name="query"/>

    <TouchableOpacity
               style={styles.button}
               onPress ={this.search}>
               <Text style={styles.buttonText}> Search </Text>
            </TouchableOpacity>

 <BookList books={this.state.theBooks} onItemPress={this.setCurrentBook}/>


</View>



      );
    }
  }



const styles = StyleSheet.create({
  input: {
    height:40,
    marginHorizontal:12,
    borderBottomWidth: 1,

  },
  // container: {

   //    flex: 1,
   //    justifyContent: 'center',
   //    textAlign: 'center',
   //    backgroundColor: 'grey',

   //  },
    form: {
    backgroundColor: 'white',
    },
    field: {

      width:200,
   //    height:40,
   //    borderBottomColor:'#83B5C7',
      borderBottomWidth:2,
      justifyContent: 'center',
      alignItems: 'center',
      color:'white',
   //    borderTopColor:'#83B5C7',
   //    borderTopWidth:2,
   //    borderLeftColor:'#83B5C7',
   //    borderLeftWidth:2,
   //    borderRightColor:'#83B5C7',
   //    borderRightWidth:2,
   //    textAlign:'center',
    },


    buttonText: {
    backgroundColor: 'black',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    padding: 8,
    margin:10,
    marginLeft:150,
    width: 90,
    borderRadius:20,
    },
   //  image: {
   // width: '100%',
//    height: 150,
// }

});
