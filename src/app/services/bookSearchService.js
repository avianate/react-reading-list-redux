var transformData = ({ items }) => {
    let [first, ...rest] = items,
        volumeInfo = first.volumeInfo,
        isbn = volumeInfo.industryIdentifiers[0].identifier,
        obj = {},
        value = {
            title: volumeInfo.title,
            subtitle: volumeInfo.subtitle,
            author: volumeInfo.authors,
            image: volumeInfo.imageLinks.thumbnail,
            isRead: false,
            isbn
        };

    obj[isbn] = value;

    console.log(obj);

    return obj;
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