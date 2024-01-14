import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import ContactMeForm from "./components/ContactMeForm";
import SocialMediaLinks from "./components/SocialMediaLinks";
export default function(){
  return(
    <>
    
    <HeroSection/>
    <AboutMeSection/>
    <ContactMeForm/>
    
    <SocialMediaLinks/></>
  )
}