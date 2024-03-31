
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';
import { getCart ,increases , buyproduct} from '../reducers/CartSlice';
import '../styles.css';

function Cart() {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [price,setprice]=useState(0);
  const [loading,setloading]=useState(false);

  useEffect(() => {
    setloading(true)
    dispatch(getCart())
      .then((response) => {
        setloading(false);
        setprice(response.payload.totalprice);
        console.log(response.payload.items)
        setItems(response.payload.items);
      })
      .catch((error) => {
        setloading(false);
        console.error('Error fetching products:', error);
      });
  }, [dispatch]);

  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 4
        }}
    />
);



 
  const increase = (id) => {
    console.log(id);
    const inc = "inc"; 
    dispatch(increases({ id, inc }))
      .then((response) => {
        console.log(response.payload);
       
        dispatch(getCart())
          .then((response) => {
            
            setItems(response.payload.items);
            setprice(response.payload.totalprice)
          })
          .catch((error) => {
            console.error('Error fetching products:', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }
  

  const decrease = (id) => {
    console.log(id);
    const inc = "dec";
    dispatch(increases({ id, inc }))
      .then((response) => {
        console.log(response.payload);
      
        dispatch(getCart())
          .then((response) => {
            console.log(response.payload);
            setItems(response.payload.items);
            setprice(response.payload.totalprice)
          })
          .catch((error) => {
            console.error('Error fetching products:', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }

  const buy = (id)=>{
    dispatch(buyproduct(id))
    .then((response) => {
      dispatch(getCart())
        .then((response) => {
         alert("Order placed Successfully")
          setItems(response.payload.items);
          setprice(response.payload.totalprice)
        })
        .catch((error) => {
          alert("An error occured while placing Order")
          console.error('Error fetching products:', error);
        });
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });

  }

  
  


return (
  <>
    <Navbar />
    {loading ? (
      <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img style={{ height: "10vh" }} src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif" alt="" />
        {/* <p>Loading....</p> */}
      </div>
    ) : items.length === 0 ? (
      <div className='empty'>
        <img src="https://hsnbazar.com/images/empty-cart.png" alt=""  />
      </div>
      
    ) : (
      <>
        <h1 className="text-center">Your Products</h1>
        <div className="p d-flex">
          {items.map((product) => (
            <div key={product._id} className="c">
              <img src={product.image} alt="..." />
              <h5 className="text-center">{product.title}</h5>
              <p className="text-center">{product.description}</p>
              <p className="text-center"><b>Quantity:</b> {product.quantity}</p>
              <p className="text-center"><b>Price:</b> {product.price}</p>
              <div className='d-flex'>
                <button onClick={() => { increase(product._id) }} className="btn btn-primary mx-auto d-block">+</button>
                <button onClick={() => { decrease(product._id) }} className="btn btn-primary mx-auto d-block">-</button>
              </div>
              <div className="button-container d-flex">
                <button onClick={() => { buy(product._id) }} className="btn btn-primary mx-auto d-block">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
        
      </>
    )}
  </>
);
}

export default Cart;
