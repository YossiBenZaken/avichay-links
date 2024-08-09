import { useState } from 'react';
import './App.css';
import link1 from './assets/link1.jpg'
import { Link } from './components/link/link.component'
function App() {
  const [links] = useState([
    {
      link: 'https://www.facebook.com/zodiacofavichaythewitch',
      title: 'קריאה בקלפים',
      image: link1
    },
    {
      link: 'https://share.amuse.io/track/avichay-ben-zaken-la-mgy-ly',
      title: 'מוזיקה'
    }
  ]);
  return (
    <div className="App">
      {links.map(item => <Link link={item.link} title={item.title} image={item.image} key={item.title} />)}
    </div>
  );
}

export default App;
