import HeroSection from "@/components/hero"

//  import SalesItem from "@/components/sale"
import FeaturedCollection from "./feature"
import Footer from "@/footer"
import DiscountedItems from "./discount"
import FAQ from "./faq"
import PerfumeVideo from "./video"



function Home(){
  return(
      <div className="bg-pink-50">
        <HeroSection/>
        <FeaturedCollection/>
        <DiscountedItems/>
        <FAQ/>
        <PerfumeVideo/>
      
        <Footer/>
        {/* <SalesItem/> */}
        
      
        

      </div>
  )
}
export default Home