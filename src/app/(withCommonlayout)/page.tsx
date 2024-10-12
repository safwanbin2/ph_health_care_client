import Hero from "@/components/ui/Home/Hero/Hero";
import Specialties from "@/components/ui/Home/Specialties/Specialties";
import TopRatedDoctors from "@/components/ui/Home/TopRatedDoctors/TopRatedDoctors";
import React from "react";
import WhyChooseUs from "../../components/ui/Home/WhyChooseUs/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Specialties />
      <TopRatedDoctors />
      <WhyChooseUs />
    </>
  );
};

export default HomePage;
