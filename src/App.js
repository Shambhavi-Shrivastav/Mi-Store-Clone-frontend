
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PreNavbar from './components/PreNavbar'
import Navbar from './components/Navbar'
import Slider from './components/Slider.js'
import data from './data/data.json'
import Offers from './components/Offers.js'
import Heading from './components/Heading';
import StarProduct from './components/StarProduct.js'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'
import HotAccessories from './components/HotAccessories.js'
import ProductReviews from './components/ProductReviews.js'
import Videos from './components/Videos.js'
import EndSlider from './components/EndSlider.js'
import Footer from './components/Footer.js'
// import { Route } from 'react-router-dom';

function App() {
  return (
    < Router >
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text='STAR PRODUCTS' />
      <StarProduct starProduct={data.starProduct} />
      <Heading text='HOT ACCESSORIES' />
      <HotAccessoriesMenu />
      <Routes>
        <Route exact path='/music'
          element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}>
        </Route>
        <Route exact path='/smartDevies'
          element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />}>
        </Route>
        <Route exact path='/home'
          element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />}>
        </Route>
        <Route exact path='/lifestyle'
          element={<HotAccessories lifestyle={data.hotAccessories.lifestyle} lifestyleCover={data.hotAccessoriesCover.lifestyle} />}>
        </Route>
        <Route exact path='/mobileAccessories'
          element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}>
        </Route>
      </Routes>
      <Heading text='PRODUCT REVIEWS' />
      <ProductReviews productReviews={data.productReviews} />
      <Heading text='VIDEOS' />
      <Videos videos={data.videos} />
      <Heading text='IN THE PRESS' />
      <EndSlider end={data.banner.end} />
      <Footer />
    </Router >
  );
}

export default App;
