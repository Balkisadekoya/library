document.addEventListener("DOMContentLoaded", function() {

    //grab the book container
    const bookContainer = document.getElementById("book-collection-container");

    const apiEndpoint = "http://localhost:4000/books"

    //fetch api
    fetch(apiEndpoint)
    .then(response => response.json())
    .then(libraryData => libraryData.map((book) => {
        bookContainer.innerHTML += `
        <div>
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <img src=${book.bookImage} width="400px" height"300px">
            <p>${book.description}</p>
        </div>
        `
    }))

    //post request
    const libraryForm = document.getElementById("book-form");
        libraryForm.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const tittleElem = document.getElementById("title").value;
        const authorElem = document.getElementById("author").value;
        const descritionElem = document.getElementById("description").value;
        const imageElem = document.getElementById("bookImage").value;


        //make a post request
        fetch(apiEndpoint, {
            method: "POST",
            body: JSON.stringify({
                title: tittleElem,
                author: authorElem,
                descrition: descritionElem,
                bookImage: imageElem
            }),
            headers: {
                "Content-Type": "application/json"
            }

        })
    }).then(response => response.json())
        .then((book) => {
        bookContainer.innerHTML += `
        <div>
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <img src=${book.bookImage} width="400px" height"300px">
            <p>${book.description}</p>
        </div>
        `
    })

})