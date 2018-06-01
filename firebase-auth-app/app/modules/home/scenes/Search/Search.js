import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,

} from 'react-native';
import { WebBrowser } from 'expo';

import BookList from './BookList';
import ajax from './ajax';
import BookDetail from './BookDetail';



export default class Search extends React.Component {
  state = {

     books:[],
     currentBookId:null,
  };

  async componentDidMount() {
       const books = await ajax.fetchInitialBooks();
       this.setState({books});

         console.log(books);

     }

       setCurrentBook = (bookId) => {
        this.setState({ 
          currentBookId: bookId 
        });

      }
     currentBook = () => {
       return this.state.books.find(
         (book) => book.id === this.state.currentBookId
        );
     }


    render() {
       if(this.state.currentBookId){
        return <BookDetail book={this.currentBook()} />
       }
       if (this.state.books.length > 0){
       return <BookList books={this.state.books} onItemPress={this.setCurrentBook}/>
        
       }
      return (
        <View style={styles.container}>
       
        <Text style={styles.header}>BookApp</Text>
   
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
