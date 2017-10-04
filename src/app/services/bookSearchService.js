var transformData = ({
    items
  }) => {
    let [first] = items;
    
    if (first && first.volumeInfo) {
      let volumeInfo = first.volumeInfo;
      let isbn = volumeInfo.industryIdentifiers[0].identifier;
      let obj = {};
      let value = {
        title: volumeInfo.title,
        meta: volumeInfo.authors,
        imgSrc: volumeInfo.imageLinks.thumbnail,
        isRead: false,
        isbn: isbn,
        body: volumeInfo.description.split("\n")
      };
  
      obj[isbn] = value;
  
      console.log("Retrieved book: ", obj[isbn]);

      return obj[isbn];
      
    }
  }

export default (bookTitleOrISBN) => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${bookTitleOrISBN}`;

    return fetch(url, {
        method: "GET",
        mode: "cors"
    })
    .then(response => response.ok? response.json() : Promise.reject())
    .then(data => { return transformData(data) });
}