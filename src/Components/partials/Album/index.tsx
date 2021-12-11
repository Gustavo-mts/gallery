import { useEffect, useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './styled.scss';

import { api } from '../../services/api';

function App() {
  const photo:any = [];
  const [imagens, setImagens] = useState<any>([]);

  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(()=>{
    AllPhotos();
  }, []);

  const AllPhotos = async () => {
    setLoading(true);
    let json = await api.getAllPhotos();   
    json.photos.map((i: any)=> {
      photo.push(i);
    });
    setImagens(photo);
    setLoading(false);
  }

  return (
    <>
      <div className="Album">
        {loading &&
          <div className="loading">Loading..</div>
        }
        {!loading && 
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
                <p><a href={i.photographer_url} target="_blank" rel="noopener noreferrer">{i.photographer}</a></p>
              </div>
          </div>  
          )
        }    
      </div>     
    </>
  );
}

export default App;