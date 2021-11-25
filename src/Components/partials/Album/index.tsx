import React, { useEffect, useState } from "react";


export default function App() {
  const [user, setUser] = useState();

  useEffect(()=>{
    function getPhotos (images:any) {
      images.map ((image:any) => { 
      console.log (image) 
      }) 
    }
     fetch("https://api.pexels.com/v1/search?query=people",{
       headers: {
        Authorization: '563492ad6f91700001000001623b9853bf6e460eb6ef3ad569eb07e8'
       }
     })
        .then(resp => {
          return resp.json()
        })
        .then(data => {
          getPhotos(data.photos);
        })
  }, [])

  return (
    <>
      ...
    </>
  );
}