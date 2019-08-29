import React from 'react';
// import './App.css';
import { Layout } from 'antd';
import Header from './Header';
import Footer from './Footer';
import Banner from './components/section-1/banner';
import SectionTwo from './components/section-2';
import SectionThree from './components/section-3';
import SectionFour from './components/section-4/';
import SectionFive from './components/section-5/';
import SectionSix from './components/section-6/';
import SectionSeven from './components/section-7/';
import SectionEight from './components/section-8/';
import SectionNine from './components/section-9/';
import SectionTen from './components/section-10/';
import SectionEleven from './components/section-11/';
import SectionTwelve from './components/section-12/';
import SectionThirteen from './components/section-13/';
import SectionFourteen from './components/section-14/';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import login from './admin/login';
import register from './components/Accounts/register';
import Clogin from './components/Accounts/login';
import CustomerBook from './components/Booking/book';
import CaseStudies from './components/Case Studies';
import CompleteFormBook from './components/Booking/CompleteForm'
/*admin*/
import AdminLayout from './admin/layout';
function App() {
  return (
    <Router>
      <Layout className="App">
          <Switch>
            <Route path="/admin/:link" component={AdminLayout} exact />
            <Route path="/admin" component={login} exact />
            <Route path="/" component={Home} exact />
            <Route path="/signup" component={register} exact />
            <Route path="/login" component={Clogin} exact />
            <Route path="/booking" component={CompleteFormBook} exact />
            <Route path="/case-studies" component={CaseStudies} exact />
          </Switch>
         </Layout>
        
    </Router>
  );
}


const Home = () => (
  <div className="App">
   <Header className="header" />

    <Banner />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
    <SectionSeven />
    <SectionEight />
    <SectionNine />
    <SectionTen />
    <SectionEleven />
    <SectionTwelve />
    <SectionThirteen />
    <SectionFourteen />
 
    <Footer />
  </div>
);




export default App;
