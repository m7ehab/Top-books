import { useState } from "react";

function Contact() {
    const [title , setTitle]=useState('');
    const [author , setAuthor]=useState('')

    return ( 
        <div className="container">
            <h1>Your Favourite books</h1>
            <input type="text" value={title} onChange={e=>setTitle(e.target.value)}/>
            <input type="text" value={author} onChange={e=>setAuthor(e.target.value)} />
            <button disabled={!(title&&author)}>Add</button>
            <h2>{title}</h2>
            <h1>{author}</h1>
        </div>

    );
}

export default Contact;