import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Header from './Header';
import HeaderHome from './HeaderHome';
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
import { BrowserRouter as Router, Switch, Route, HashRouter, Link, Redirect} from 'react-router-dom';
import AdminLogin from './admin/login';
import RegisterCustomer from './components/Accounts/register';
import Clogin from './components/Accounts/login';
import CustomerBook from './components/Booking/book';
import CaseStudies from './components/Case Studies';
import Confirm from './components/Booking/Confirm';
import CompleteFormBooks from './components/Booking/CompleteForm2'
/*admin*/
import AdminLayout from './admin/layout';
function App() {
  return (
    
    <Router>
     
      <Layout className="App">
          <Switch>
            
          <Route path="/admin/:link" render={() => <AdminsLayout> <AdminLayout/></AdminsLayout>} exact />
            <Route path="/admin" render={() => <ClientLayout> <AdminLogin/> </ClientLayout>}  exact />
            <Route path="/" component={Home}   exact />
            <Route path="/confirm" component={Confirm} />
            <Route path="/signup"render={() => <ClientLayout> <RegisterCustomer/></ClientLayout>} exact />
            <Route path="/login" render={() => <ClientLayout> <Clogin/></ClientLayout>}  exact />
            <Route path="/booking" render={() => <ClientLayout> <CompleteFormBooks/></ClientLayout>}  exact />
            <Route path="/case-studies" render={() => <ClientLayout> <CaseStudies/></ClientLayout>}  exact />
          </Switch>
         </Layout>
       
    </Router>
  );
}

const ClientLayout = ({ children }) => (
  <Layout className="App">
    <Header/>
    {children}
    <Footer/>
  </Layout>
);
const AdminsLayout = ({ children }) => (
  <div>
    {children}
  </div>
);
const Home = () => (
  <div className="App">
     <HeaderHome/>
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
    <Footer/>
  </div>
);




export default App;
