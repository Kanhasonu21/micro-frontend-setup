import React, { Suspense, useState } from "react";
import "./Home.css";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import ErrorBoundary from "./ErrorBoundary";

// Fallback UI for failed remote import
const ProductListingError = () => (
  <div
    style={{
      textAlign: "center",
      color: "#ff512f",
      background: "rgba(255,255,255,0.7)",
      borderRadius: 12,
      margin: "32px auto",
      maxWidth: 480,
      padding: 32,
      fontWeight: 600,
      boxShadow: "0 2px 12px #ff512f22",
    }}
  >
    Could not load product listing. The remote server may be down.
  </div>
);

// Safe lazy loader for remote component
function safeLazy(factory, fallback) {
  return React.lazy(() =>
    factory().catch(() => ({ default: fallback }))
  );
}

const FeaturedProducts = safeLazy(
  () => import("productListing/ProductListing"),
  ProductListingError
);

function Home() {
  return (
    <div className="landing-container">
      <HeroSection />
      <ErrorBoundary>
        <Suspense
          fallback={
            <div style={{ textAlign: "center", padding: 40 }}>
              Loading products...
            </div>
          }
        >
          <FeaturedProducts />
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default Home;
