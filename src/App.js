// css
import './App.css';

// import components
import Navbar from './compoments/Navbar';
import BelowNavbar from './compoments/BelowNavbar';
import Content from './compoments/Content';
import Level from './compoments/Level';
import Reviews from './compoments/Reviews';
import Adventure from './compoments/Adventure';
import FeatureCollage from './compoments/FeatureCollage';
import Aim from './compoments/Aim';
import Purpose from './compoments/Purpose';
import Footer from './compoments/Footer';

// main page 
export default function HomePage() {
  return (
    <div className='container'>
      {/* navbar */}
      <Navbar />

      {/* below navbar */}
      <BelowNavbar />

      {/* content */}
      <Content />

      {/* level */}
      <Level />

      {/* reviews */}
      <Reviews />

      {/* adventure */}
      <Adventure />

      {/* feature collage */}
      <FeatureCollage />

      {/* aim */}
      <Aim />

      {/* purpose */}
      <Purpose />

      {/* footer */}
      <Footer />
    </div>
  )
}