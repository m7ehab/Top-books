import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
const api='https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=';
const key='dM0ypv3aAlGpKWR2QDHx3Z5OHN2B6yZw';
function BookInfo(props) {
    const {id} = useParams();
    const {data ,isLoading,error}=useFetch(api+key);
    let book ;
    if(data){ book=data.results.books[id-1] ;} 
    
    const addFav=()=>{
        const fav={ title : book.title,
            image : book.book_image,
            author : book.author};
        fetch("http://localhost:7000/favlist",{
            method: 'POST',
            headers: {"Content-Type" :"application/json"},
            body: JSON.stringify(fav)
        })
        .then(()=>{
            console.log("added")
        })
    }

    return ( 
        <div className="book-container">
            {isLoading &&<h2> Loading... </h2>}
            {error &&<h2> {error} </h2>}
            {book && (
            <>
            <img src={book.book_image}/>
            <div className="caption">
                <p className="rank">{book.rank}</p>
                <p>{book.title}</p>
                <p>{book.description}</p>
                <p>{book.author}</p>
                <div className="links">
                    <a href={book.amazon_product_url}>Buy it</a>
                    <button onClick ={addFav}>Add to favourites</button>
                </div>
            </div>
            </>
            )}

        </div>
        
     );
}

export default BookInfo;