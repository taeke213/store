import React, { useEffect, useState } from "react";
import { UserItems } from "../context/itemcontext";

function getdata(){

      console.log(data)
    return data
}
export function Store() {
  const { item, setItem } = UserItems();
  const [data, setdata] = useState(null)
  const [loading, setLoading] = useState(true);
  const handleAddOne = (m) => {
    setItem([...item,m]);
  };
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/', { mode: "cors" })
      .then((response) => response.json())
      .then((response) => setdata(response))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <>
             <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
    <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
  
    <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

    <div className="items">
    {data.map((f) => {
        return(
            <div className="storeitem">
                <h2>{f.title}</h2>
                <img src={f.image} alt="" />
                <h3>{"$" + f.price}</h3>
                <div className="stars">
                    <h3>{f.rating.rate}<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="256px" height="256px" viewBox="0 0 32 32">
                 <defs>
                   <linearGradient id="grad">
                     <stop offset="100%" stop-color="yellow"/>
                   </linearGradient>
                 </defs>
                 <path fill="url(#grad)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
               l11.547-1.2L16.026,0.6L20.388,10.918z"/>
               </svg></h3>
                </div>
                <button onClick={() => {
                    handleAddOne(f)
                }}>add to cart</button>
            </div>
        )
    })}
    </div>
    <div id="bottom">
            <div id="info">
                <div id="infol">
                    <h1>Contact me</h1>
                    <p>5236 al</p>
                    <p>streetname, california</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>+31 06 238429</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email</title><path d="M5,5H18C19.66,5 21,6.34 21,8V17C21,18.66 19.66,20 18,20H5C3.34,20 2,18.66 2,17V8C2,6.34 3.34,5 5,5M5,6C4.5,6 4.06,6.17 3.72,6.47L11.5,11.5L19.28,6.47C18.94,6.17 18.5,6 18,6H5M11.5,12.71L3.13,7.28C3.05,7.5 3,7.75 3,8V17C3,18.1 3.9,19 5,19H18C19.1,19 20,18.1 20,17V8C20,7.75 19.95,7.5 19.87,7.28L11.5,12.71Z" /></svg> example@gmail.com</p>
                </div>
                <div id="infor">
                    <div>
                        <div>
                            <i className="devicon-github-original colored"></i>
                            <i className="devicon-facebook-plain colored"></i>
                            <i className="devicon-twitter-original colored"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );

}

