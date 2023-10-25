import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Publicroute from './Publicroute';
import Privateroute from './Privateroute';
import Home from './Home/Home';
import Explore from './Home/Explore';
import WhatWeHave from './Home/WhatWeHave';
import Review from './Home/Review';
import Blog from './Home/Blog';
import Contact from './Home/Contact';
import Booking from './Home/Booking';
import Payment from './Home/Payment';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Publicroute />}>
            <Route index element={<Home />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/whatwehave' element={<WhatWeHave />} />
            <Route path='/review' element={<Review/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/booking' element={<Booking/>}/>
            <Route path='/payment' element={<Payment/>}/>


          </Route>



          {/* ******** Privateroute ****** */}
          <Route path="/" element={<Privateroute />}>

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
