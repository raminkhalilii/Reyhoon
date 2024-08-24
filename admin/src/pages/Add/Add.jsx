import React, {useEffect, useState} from 'react';
import "./Add.css"
import upload from "../../assets/upload_area.png"

function Add() {
    const [image, setImage] = useState(false)
    const [data, setData] = useState({
        name:"",
        description:"",
        category:"salad",
        price:""
    })

    const onClickHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data=>({...data, [name]: value}))
    }


    return (
        <div className="Add">
            <form className="flex-col">
                <div className="add-image-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image?URL.createObjectURL(image):upload} alt=""/>
                    </label>
                    <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden={true} required/>
                </div>
                <div className="add-product-name flex-col">
                    <p>Product name</p>
                    <input onChange={onClickHandler} type="text" name="name" placeholder="Type here" required />
                </div>
                <div className="add-product-description flex-col">
                    <p>Product Description</p>
                    <textarea onChange={onClickHandler} name="description" placeholder="Description" rows="6" />
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product category</p>
                        <select name="category" onChange={onClickHandler}>
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>

                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product price</p>
                        <input onChange={onClickHandler} type="Number" name="price" placeholder="Price" required />
                    </div>
                </div>
                <button type="submit" className="add-btn">Add</button>
            </form>
        </div>
    )
}

export default Add;