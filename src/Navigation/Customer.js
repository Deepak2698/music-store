import React from 'react'
import { useParams } from 'react-router-dom';

const  Customer  = () =>{
    const   params    = useParams();
    return (
            <div>
              <h1>Customer</h1>
              <h1>{params.id}</h1>      {/* Use the rooute parameter key to display it in the view*/}
              <h2>{params.name}</h2> 
            </div>
          )
};


export default Customer;