
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import CardHorizontal from "./components/CardHorizontal/Horizontal";
import Newsletter from "./components/Newsletter/Newsletter"

import "./App.css";
const App = () => {
  const obj = [
    {
      id: 1,
      name: "Builder 1",
      title: "WixPro 72-Inch Responsive Website Builder-",
      desc:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      highlights:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      grade: "exceptional",
      rank: 9.8,
      star: 5,
      isInfo: true,
      choice: "Best Choice"
    },
    {
      id: 2,
      name: "Builder",
      title: "SiteCraft 68-Inch Ultimate Web Design Studio-",
      desc:
        " Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      highlights:
        "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      grade: "excellent",
      rank: 9.5,
      star: 5,
      isInfo: true,
      choice: "Best Value"
    },
    {
      id: 3,
      name: "Builder 1",
      title: "WixPro 72-Inch Responsive Website Builder-",
      desc:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      highlights:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      grade: "exceptional",
      rank: 9.3,
      star: 5,
      isInfo: false,
    },
    {
      id: 4,
      name: "CDK",
      title: "CDK Resposive Builder:",
      desc:
        " An extensive library of widgets and apps, and detailed step-by-step guides",
      grade: "Amazing",
      main_highlights: ["9.9 Building Responsive", "8.9 Cool", "8.9 Docs"],
      like: ["Why we love it, Documentation", "Easy Use", "Out Of Box"],
      rank: 9.1,
      isInfo: true,
      ishighlight : true,
    },
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <Card obj={obj} />
      <CardHorizontal/>
      <Newsletter/>
      <Footer />
    </>
  );
};

export default App;
