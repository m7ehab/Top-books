import useFetch from "./useFetch";

function FavList({id}) {
    const {data:book ,isLoading ,error}=useFetch("http://localhost:7000/FavList")

     return ( 
        <div className="fav-list">
            <h2 >Your Favourtie Books</h2>
            <div className="books">
                {isLoading &&<h2> Loading... </h2>}
                {error &&<h2> {error} </h2>}
                {book &&  (book.map((book)=>(
                <div className="book" key={book.id}>
                    <p className="rank">{book.id}</p>
                    <img src={book.image}/>
                    <div className="caption">
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                    </div>
                </div>
                )))}
                        </div>
        </div>
    );}


export default FavList;