import Navbar from "@/components/layout/navbar/Navbar";

import HeaderCategories from "@/components/home/headerCategories/HeaderCategories";

import FeaturedCategories from "@/components/home/featuredCategories/FeaturedCategories";

import Hero from "@/components/home/hero/Hero";

import Brands from "@/components/home/brands/Brand";

import BudgetSection from "@/components/home/budget/BudgetSection";

import FeaturedProducts from "@/components/home/featured/FeaturedProduct";

import BestSellers from "@/components/home/best-sellers/BestSellers";

import Occasion from "@/components/home/occasion/Occasion";

import LuxuryCollection from "@/components/home/luxury/LuxuryCollection";

import Trending from "@/components/home/trending/Trending";

import Personalised from "@/components/home/personalised/Personalised";


 

export default function Home() {

  return (

    <main>

      <Navbar />

      <HeaderCategories />

      <FeaturedCategories />

      <Hero/>

      <Brands />

      <BudgetSection />

      <FeaturedProducts />


      <BestSellers />

      <Occasion />


      <LuxuryCollection />

      <Trending />

      <Personalised />






      <footer/>

 

    </main>

  );

}
