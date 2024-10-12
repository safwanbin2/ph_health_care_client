import Hero from "@/components/ui/Home/Hero/Hero";
import Specialties from "@/components/ui/Home/Specialties/Specialties";
import TopRatedDoctors from "@/components/ui/Home/TopRatedDoctors/TopRatedDoctors";
import React from "react";
import WhyChooseUs from "../../components/ui/Home/WhyChooseUs/WhyChooseUs";
import HowItWorks from "@/components/ui/Home/HowItWorks/HowItWorks";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Specialties />
      <TopRatedDoctors />
      <WhyChooseUs />
      <HowItWorks />
    </>
  );
};

export default HomePage;
