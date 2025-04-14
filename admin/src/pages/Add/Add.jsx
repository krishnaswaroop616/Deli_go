import React, { useEffect, useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";


const Add = ({url}) => {
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"
    });




    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", data.price);
        formData.append("category", data.category);
        formData.append("image", image);
        const response = await axios.post(`${url}/api/food/add`, formData);
        if (response.data.success) {
            setData({
                name: "",
                description: "",
                price: "",
                category: ""
            })
            setImage(false);
            toast.success(response.data.message);
        }
        else {
            toast.error(response.data.message);
        }
    }


    return (
        <div className="add">
            <form className="flex-col" onSubmit={onSubmitHandler} >
                <div className="add-product-name form-items flex-col">
                    <p>Product name</p>
                    <input type="text" onChange={onChangeHandler} value={data.name} name="name" required ></input>
                </div>
                <div className="add-product-description flex-col">
                    <p>Product description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" required></textarea>
                </div>
                <div className="add-img-upload form-items flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="Preview" />

                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" required></input>
                </div>
                <div className="add-product-price-category">
                    <div className="add-product-price form-items flex-col">
                        <p>Product price</p>
                        <input onChange={onChangeHandler} value={data.price} type="number" name="price" required></input>
                    </div>

                    <div className="add-product-category form-items flex-col">
                        <p>Product category</p>
                        <select onChange={onChangeHandler} name="category">
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Desserts">Desserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>

                    </div>
                </div>

                <button type="submit" className="btn btn-danger w-25 mt-3">ADD</button>

            </form>
        </div>
    );
}

export default Add;