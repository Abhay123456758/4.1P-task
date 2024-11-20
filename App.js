import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css"; // Importing Semantic UI styles
import { generateArticles } from "./data/articles"; // Import articles generator
import Header from "./components/Header"; // Import Header component
import Banner from "./components/Banner"; // Import Banner component
import FeaturedSection from "./components/FeaturedSection"; // Import FeaturedSection component
import Footer from "./components/Footer"; // Import Footer component

const App = () => {
  const [articles, setArticles] = useState([]);

  // Generate articles on mount
  useEffect(() => {
    const generatedArticles = generateArticles(6);
    setArticles(generatedArticles);
  }, []);

  return (
    <div>
      <Header />
      <Banner />
      <FeaturedSection articles={articles} />
      <Footer />
    </div>
  );
};

export default App;
