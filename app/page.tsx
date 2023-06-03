import Image from "next/image";
import Header from "./Component/Header"
import Hero from "./Component/Hero"
import EqInfo from "./Component/EqInfo"
import ScrollBox from "./Component/ScrollBox"
import SelfImprovement from "./Component/SelfImprovement"
import Meet from "./Component/Meet"
import Sign from "./Component/Sign"
import  Anonymous  from "./Component/Anonymous";
import Work from "./Component/Work"
import Vaccancy from "./Component/Vaccancy"
import Footer from "./Component/Footer"
export default function Home() {
  return (
    <div>
      <Header/>
    <div className="p-20 overflow-hidden ">
      <Hero/>
      <EqInfo/>
      <ScrollBox/>
      <Meet/>
      <SelfImprovement/>
      <EqInfo/>
      <Anonymous/>
      <Sign/>
      <Work/>
      <Vaccancy/>
      <Footer/>
    </div>

    </div>
  );
}
