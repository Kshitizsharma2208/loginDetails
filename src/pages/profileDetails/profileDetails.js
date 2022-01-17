
// import './.css';
// import Header from './components/header/Header';

import DefaultLayout from '../../layouts/default';
import CustomerDetails from "./components/ActivityLog/CustomerDetails";
import Main from "./components/main/Main";
import Alert from "./components/Alertpage/Alert";
import LoginSection from "./components/Login Page/LoginSection";

import './profileDetails.scss';

function ProfileDetail() {
  return (
    <DefaultLayout>
      <div className="bodyContainer">
        {/* FixMe 'Reaname to main to header' */}
        <Main />   
        {/* <CustomerDetails /> */}
        {/* <Alert /> */}
        <LoginSection />
      </div>    
     </DefaultLayout>
  );
}

export default ProfileDetail;
