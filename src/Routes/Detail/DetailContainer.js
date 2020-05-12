import React, { useEffect, useState } from "react";
import DetailPresenter from "./DetailPresenter";
import { useParams } from "react-router-dom";

export default () =>  {
    const {id} = useParams();
    const [productData,setProductData] = useState([]);
    const form = {
        data:productData
    }
      useEffect(()=>{
        fetch(process.env.REACT_APP_HOST + "/product/" + id, {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
          })
            .then(response => response.json())
            .then(data => setProductData({productData:data[0]}) );
        },[setProductData]);
        console.log(productData,"DetailContainer")
        
    return(
        <DetailPresenter id={id} data={productData}/>
    )
}
