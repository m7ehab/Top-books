import { NavLink } from 'react-router-dom';
import useFetch from './useFetch';

function Card() {
    const api='https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=';
    const key='dM0ypv3aAlGpKWR2QDHx3Z5OHN2B6yZw';
    const {data ,isLoading,error}=useFetch(api+key);
    let book ;
       if(data){ book=data.results.books ;} 
    return (
        <div className="books">
            {isLoading &&<h2> Loading... </h2>}
            {error &&<h2> {error} </h2>}
         
            {book &&  (book.map((book)=>(
                <div className="book" key={book.rank}>
                    <NavLink to={`/book/${book.rank}`}>
                    <p className="rank">{book.rank}</p>
                    <img src={book.book_image}/>
                    <div className="caption">
                        <h3>{book.title}</h3>
                        <p>{book.description}</p>
                        <p>{book.author}</p>

                    </div>
                   </NavLink>

                </div> )))
                }


        </div>
    );
};

export default Card;