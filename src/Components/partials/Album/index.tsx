import React, { useEffect, useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
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
              <div className="photos--desc">
                <div className="photos--desc-photo">
                  <LazyLoadImage
                    src={i.src.original}   
                    effect="blur" 
                    width="100%"
                    height="100%"
                  />
                </div>
                <p><a href={i.photographer_url} target="_blank">{i.photographer}</a></p>
              </div>
          </div>  
          )
        }    
      </div>     
    </>
  );
}

export default App;


// olhar responsividade do lazyloadImage