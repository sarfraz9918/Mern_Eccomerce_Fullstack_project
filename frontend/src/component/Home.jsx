
import FeaturedProducts from "./FeaturedProducts";
import TopsellingProducts from "./TopsellingProducts";
import TrendingProducts from "./TrendingProducts";
import Banner from "./Banner";

import Footer from "./Footer";
const Home=()=>{
    return(
        <>
         <div id="sliderImg">
        <Banner/>
      </div>
      <FeaturedProducts/>
      <TopsellingProducts/>
      <TrendingProducts/>
    
    <Footer/>
    
        </>
    )
}


export default Home;