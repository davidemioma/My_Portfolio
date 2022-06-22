import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Layout from "./components/layout/Layout";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <div>
      <Header />

      <Layout>
        <Hero />

        <About />

        <Projects />

        <Contact />

        <Footer />
      </Layout>
    </div>
  );
};

export default App;
