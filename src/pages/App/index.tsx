import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import HomeSection from "../../components/HomeSection";
import Navbar from "../../components/Navbar/navbar";
import WhatsAppButton from "../../components/WhatsAppButton";

export default function Home() {
  const [value, setValue] = useState("zero");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); 
  const [isMobileView, setMobileView] = useState(window.innerWidth <= 667);

  const handleTabChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    
  };

  const handleResize = () => {
    setMobileView(window.innerWidth <= 667);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const viewport = window.innerHeight + window.innerHeight / 3;
      if (scrollY < window.innerHeight) {
        setValue("zero");
      } else if (scrollY < viewport) {
        setValue("one");
      } else if (scrollY < viewport * 2) {
        setValue("two");
      } else if (scrollY < viewport * 3) {
        setValue("three");
      } else {
        setValue("four");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* <Popup /> */}      
      <HomeSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
