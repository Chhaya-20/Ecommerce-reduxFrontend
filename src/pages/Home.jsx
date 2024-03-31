
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct} from "../reducers/Product";
import {addcart} from '../reducers/CartSlice'
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import '../styles.css';

function Home() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const[loading,setloading]=useState(false)
  const [items, setItems] = useState("");
  const products = useSelector((state) => state.Product.data);
  const token = localStorage.getItem('token');

  useEffect(() => {
    setloading(true)
    dispatch(getProduct())
      .then((response) => {
        setloading(false)
        setItems(response.payload);
      })
      .catch((error) => {
        setloading(false)
        console.error("Error fetching products:", error);
      });
  }, [dispatch]);

  const cart = (id, price) => {
    // dispatch(addcart({ id, price })) // Pass an object containing id and price
    //   .then((response) => {
    //     console.log(response)
    //     alert("Successfully Added To Cart");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     alert("Please First Login ");
    //   });
    dispatch(addcart({ id, price }))
      .then((response) => {
        console.log(response);
        if(response.type==='cart/addCart/rejected')
        {
          alert("Please First Login ");
        }
        else{
          alert("Successfully Added To Cart");
        }
        
      })
      .catch((error) => {
        console.log(error);
        if (error.message === "Failed to add item to cart") {
          alert("Failed to add item to cart. Please try again later.");
        } else {
          alert("Please First Login ");
        }
      });
  };


  return (
    <>
      <Navbar/>
      {loading ? (
      <div
        
        style={{ height: "100vh" , "width":"100vw"  , "display":"flex" , "justifyContent":"center" ,  "alignItems" : "center"}}
      >
        <img
          style={{ height: "10vh" }}
          src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"
          alt=""
        />
        <p>Loading....</p>
      </div>
      
    ) : items.length === 0 ? (
        <p>No products available</p>
      ) : (
        <>
          <div><h1 className="text-center">All Products</h1></div>
          
          <div className="p d-flex">
            {items.map((product) => (
              
              <div key={product.id} className="c" >
                <img src={product.image} className="card-img-top" alt="..." />
                
                  <h5 className="text-center">{product.title}</h5>
                  <p className=" text-center">{product.description}</p>
                  <p className=" text-center"><b>Category: </b>{product.category}</p>
                  <p className=" text-center"><b>Price: </b>{product.price}</p>

                  <button onClick={() => { cart(product._id,product.price) }} href="#" className="btn btn-primary mx-auto d-block">Add To Cart</button>
               
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Home;
