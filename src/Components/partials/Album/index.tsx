import React, { useEffect, useState } from "react";
import './styled.scss';

function App() {
  const photo:any = [];
  const [images, setImages] = useState([]);
  const [imagens, setImagens] = useState([])

  useEffect(()=>{
    function getPhotos (images:any) {
      images.map ((image:any) => { 
      photo.push(image.src.original)
      }) 
      setImagens(photo)
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
      <div className="Album">
        {photo && 
          imagens.map((i,k)=>
            <img src={i} />
          )
        }
      </div>     
    </>
  );
}

export default App;