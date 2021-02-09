import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router'
export default props => {
    const { id } = props;
    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [price, setPrice] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8000/api/find/' + id)
            .then(res => {
                setTitle(res.data.title);
                setDesc(res.data.description);
                setPrice(res.data.price);
            })
    }, [])
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/find/' + id, {
            title,
            description,
            price,
        })
            .then(res => console.log(res));
            
    }
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDesc(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
            <br/>
            <Link to={`/`}>Home</Link>
        </div>
    )
}