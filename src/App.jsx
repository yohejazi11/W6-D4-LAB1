import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [category,setCategory] = useState("men's clothing");
  const [product,setProduct] = useState([])

  useEffect(() => {
    return () => {
      axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        console.log(response.data);
        setProduct(response.data)
      });
    };

  }, []);

  return (
    <>
    <nav>
      <ul className='flex gap-x-[2rem]'>
        <li><button onClick={()=>{setCategory("men's clothing")}}>men's clothing</button></li>
        <li><button onClick={()=>{setCategory("women's clothing")}}>women's clothing</button></li>
        <li><button onClick={()=>{setCategory("jewelery")}}>jewelery</button></li>
        <li><button onClick={()=>{setCategory("electronics")}}>electronics</button></li>

      </ul>
    </nav>

    <div className='flex flex-wrap pt-[15vh] w-[100%] gap-x-[2rem] gap-y-[2rem]'>
    {product.map((item , index)  =>{
      if(item.category==category)
      {
        return(
          <div key={index} className='flex flex-col w-[20vw] h-[50vh] justify-center items-start gap-y-[15px]'>
          <img className='w-[15vw] h-[30vh]' src={item.image}></img>
          <div className='w-[18vw] text-[1.5rem] font-bold'>{item.title}</div>
          <p>Price: {item.price}</p>
          <p>{item.description}</p>
        </div>
        )

      }
    })}
    </div>

    </>
  )
}

export default App
