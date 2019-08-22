import React from 'react';
import './App.css';
import {Layout} from 'antd';
import Header from './Header'
import Banner from './components/section-1/banner';
import SectionTwo from './components/section-2';
import SectionThree from './components/section-3';
import SectionFour from './components/section-4/';
import SectionFive from './components/section-5/';
import SectionSix from './components/section-6/';
import SectionSeven from './components/section-7/';

import SignUp from './components/section-8/signup'
import PickCountry from './components/section-9/pickcountry'
import About from './components/pages/about/about'
import HowItWorksPage from './components/pages/how-it-works/howitworks'

import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Layout className="App">
        <Header className="header"/>
         <Switch>
            <Route path="/" component={Home} exact />
            {/* <Route path="/about" component={About} /> */}
            {/* <Route path="/how-it-works" component={HowItWorksPage}/> */}
         </Switch>
        {/* <Footer/> */}
      </Layout>
    </Router>
  );
}

const Home = () => (
  <div className="App">
    <Banner/>
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
    <SectionSeven />
    {/* <AboutUs/>
    <Brands/>
    <Testimonials/>
    <Subscribe/>
    <SeenOn/>
    <PickCountry/> */}
  </div>
);




export default App;
