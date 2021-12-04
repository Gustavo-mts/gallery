import React, { useEffect, useState } from "react";
import LazyLoad from 'react-lazyload';
import './styled.scss';

function App() {
  const photo:any = [];
  const photographer:any = [];
  const [images, setImages] = useState([]);
  const [imagens, setImagens] = useState<any>([]);
  const [ author, setAuthor] = useState([]);

  useEffect(()=>{
    function getPhotos (images:any) {
      images.map ((image:any) => { 
      photo.push(image)
      }) 
      setImagens(photo)
      console.log(images)
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
          imagens.map((i:any,k:any)=>
          <div className="photos" key={k}>
            <LazyLoad>
              <div className="photos--desc">
                <img src={i.src.original} />
                <p><a href={i.photographer_url} target="_blank">{i.photographer}</a></p>
              </div>
            </LazyLoad>
          </div>  
          )
        }    
      </div>     
    </>
  );
}

export default App;