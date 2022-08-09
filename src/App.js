import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Shared/Footer';
import Navbar from './Component/Shared/Navbar';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Home from './Component/Page/Home';
import Aboutus from './Component/Aboutus/Aboutus';
import Allparters from './Component/Partner/Allparters';


function App() {
  return (
    <div className="">
      <MessengerCustomerChat
        pageId="102758198228272"
        appId="559555832235778"
      />
      <Navbar />


      <Routes>

        <Route path="/" element={<Home></Home>} />
        <Route path="aboutus" element={<Aboutus></Aboutus>} />
        <Route path='partners-institutes' element={<Allparters></Allparters>} />
      </Routes>
      <Footer />





    </div>
  );
}

export default App;

// live:
// https://ilhan-khondaker.netlify.app/