import './App.scss';

import Header from './Components/partials/Header';
import Footer from './Components/partials/Footer';
import Album from './Components/partials/Album';

function App() {
  return (
    <div className="areaGeral">
      <Header />
      <Album />
      <Footer />
    </div>
  );
}

export default App;
