import React,{Suspense} from 'react';
import './App.scss';

import Header from './Components/partials/Header';
import Footer from './Components/partials/Footer';
const Album = React.lazy(() => import('./Components/partials/Album'));

function App() {
  return (
    <div className="generalArea">
      <div className="contentArea">
        <Header />
        <Suspense fallback={<div>Loading images...</div>}>
          <Album />
        </Suspense>
        <Footer />
      </div>
    </div>
  );
}

export default App;
