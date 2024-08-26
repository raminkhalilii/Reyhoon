import React, {useState} from 'react';
import "./Add.css"
import upload from "../../assets/upload_area.png"
import axios from "axios";
import { toast } from 'react-toastify';

function Add() {
    const [image, setImage] = useState(false)
    const [data, setData] = useState({
        name: "",
        description: "",
        category: "salad",
        price: ""
    })
    const url = "http://localhost:4000"

    const onClickHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({...data, [name]: value}))
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description)
        formData.append("category", data.category)
        formData.append("price", Number(data.price))
        formData.append("image", image);
        const response = await axios.post(`${url}/api/food/add`, formData)
        if (response.data.success) {
            setData({
                name: "",
                description: "",
                category: "salad",
                price: ""
            })
            toast.success("Added successfully.");
            setImage(false)
        }
        else {
            toast.error(response.data.message)
        }
    }

    return (
        <div className="Add">
            <form className="flex-col" onSubmit={onSubmitHandler}>
                <div className="add-image-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : upload} alt=""/>
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden={true} required/>
                </div>
                <div className="add-product-name flex-col">
                    <p>Product name</p>
                    <input onChange={onClickHandler} value={data.name} type="text" name="name" placeholder="Type here"
                           required/>
                </div>
                <div className="add-product-description flex-col">
                    <p>Product Description</p>
                    <textarea onChange={onClickHandler} value={data.description} name="description"
                              placeholder="Description" rows="6"/>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product category</p>
                        <select name="category" onChange={onClickHandler} value={data.category}>
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
                        <input onChange={onClickHandler} value={data.price} type="Number" name="price"
                               placeholder="Price" required/>
                    </div>
                </div>
                <button type="submit" className="add-btn">ADD</button>
            </form>
        </div>
    )
}

export default Add;