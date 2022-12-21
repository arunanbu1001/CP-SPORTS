import React from 'react'
import Nav from "../nav/Nav";
import Banner from "../banner/Banner";
import Abou from "../about/Abou";
import Training from "../training/training";
import Galery from "../Galery/Galery";
import Review from "../review/Review";
// import Contact from "../contact/Contact";
import Form  from "../form/Form";
// import Uniq from '../unique/Uniq';
import Key from '../Key/key';
// import Uniq from "../components/unique/Uniq";

const Home = () => {
  return (
    <div>
      <Nav/>
      < Banner/>
      <Abou/>
      <Training/>
      <Galery />
      <Review />
      {/* <Contact /> */}
      <Form />
      {/* <Uniq /> */}
     <Key />
    </div>
  )
}

export default Home
