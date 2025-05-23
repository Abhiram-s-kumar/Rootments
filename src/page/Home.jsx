import Collections from "../components/Collections"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import HomeBanner from "../components/HomeBanner"
import HowItWork from "../components/HowItWork"
import LargeCard from "../components/LargeCard"
import LocationPage from "../components/LocationPage"
import Nav from "../components/Nav"

const Home = () => {

  return (
    <div className="">
      <div>
        <Nav />
      </div>
      <div className="mt-[140px]">
        <HomeBanner />
      </div>

      <div className="lg:mx-[100px] md:mx-[70px] mx-[50px]">
        <Collections />
      </div>

        <div >
        <LargeCard />
      </div>

       <div >
        <HowItWork />
      </div>


      <div>
        <ContactSection/>
      </div>

      
      <div>
        <LocationPage/>
      </div>


       <div>
        <Footer/>
      </div>

    </div>
  )
}

export default Home