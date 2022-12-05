import Nav from "./components/nav/Nav";
import Banner from "./components/banner/Banner";
import Abou from "./components/about/Abou";
import Training from "./components/training/training";
import Galery from "./components/Galery/Galery";
import Review from "./components/review/Review";
import Contact from "./components/contact/Contact";

function App() {
  return (
      <div>
        <Nav/>
      < Banner/>
      <Abou/>
      <Training/>
      <Galery />
      <Review />
      <Contact />
      </div>
  );
}

export default App;
