import React, { Suspense } from "react";
import "./Home.css";
import Header from "./Header";
import HeroSection from "./HeroSection";
import FeaturedProducts from "productListing/ProductListing";
import Footer from "./Footer";
import ErrorBoundary from "./ErrorBoundary";

function Home() {
  return (
    <div className="landing-container">
      <Header />

      <HeroSection />
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <FeaturedProducts />
        </Suspense>
      </ErrorBoundary>

      <Footer />
    </div>
  );
}

export default Home;
