const apiHost = 'https://www.googleapis.com/books/v1/volumes?q=wild'
const singleBook = 'https://www.googleapis.com/books/v1/volumes/'

export default {

async fetchInitialBooks(){
  try {
    let response = await fetch(apiHost);
    let responseJson = await response.json();
    return responseJson.items;

  } catch(error){
    console.error(error);
}

},

    async fetchBookDetail(bookId){
      try {
        const response = await fetch(singleBook + bookId);
        const responseJson = await response.json();
        return responseJson;

      } catch(error){
        console.error(error);

      }

    }

  };
