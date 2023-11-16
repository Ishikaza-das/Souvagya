import React, { useEffect, useState } from 'react';
import axios from "axios";
import Products from './Products';

const Products = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      let response = await axios.get("");
      if (response && response.data) {
        console.log('data', response.data);
        setProducts(response.data);
      } else {
        alert("Error in fetching data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const deleteProduct = async (productId) => {
    try {
      // Add your delete logic here using axios or any other method
      console.log("Deleting product with id:", productId);
      // After deletion, you may want to refresh the product list
      getAllProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <h2>Your Products</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products && products.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
              <td><img src={`${process.env.PUBLIC_URL}/images/${item.image}`} alt="" width="80" /></td>
              <td>
                <button
                  onClick={() => {
                    window.location = `/editProduct/${item._id}`;
                  }}
                  className="btn btn-primary"
                  type="button"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    deleteProduct(item._id);
                  }}
                  className="btn btn-danger"
                  type="button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
