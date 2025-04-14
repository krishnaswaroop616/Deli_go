import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from "react-toastify";

const List = ({url}) => {
    const [list, setList] = useState([]);

    const fetchList = async () => {
            const response = await axios.get(`${url}/api/food/list`);
            if (response.data.success) {
                setList(response.data.data);
            } else {
                toast.error("Error");
            }
    };

    const removeFood=async(id)=>{
        const response=await axios.post(`${url}/api/food/remove`,{id});
        await fetchList();
        if(response.data.success){
            toast.success(response.data.message);
        }
        else{
            toast.error(response.data.message);
        }
    }

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <div className="container mt-4" style={{ marginLeft: "250px" }}>
            <h3 className="mb-4">Food Items</h3>
            <div className="table-responsive">
                <table className="table  align-middle text-center">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item) => (
                            <tr key={item._id}>
                                <td>
                                    <img 
                                        src={`${url}/images/${item.image}`} 
                                        alt={item.name} 
                                        className="img-thumbnail" 
                                        style={{ width: '60px', height: '60px', objectFit: 'cover' }} 
                                    />
                                </td>
                                <td>{item.name}</td>
                                <td>₹{item.price}</td>
                                <td>{item.category}</td>
                                <td>
                                    <button className="btn btn-sm btn-danger" onClick={()=>removeFood(item._id)} >Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;
