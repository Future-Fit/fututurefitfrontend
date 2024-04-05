"use client"
import MobileMenu from "../../header/MobileMenu";
import DefaulHeader2 from "@/components/header/DefaultHeader";
import LoginPopup from "@/components/common/form/login/LoginPopup";
import { useEffect, useState } from "react";
import DashboardHeader from "@/components/header/DashboardEmployerHeader";
import DashboardJobseekerHeader from "@/components/header/DashboardJobseekerHeader";
import DashboardAdminHeader from '../../header/DashboardAdminHeader'
import DashboardEmployerHeader from '../../header/DashboardEmployerHeader'
import DashboardStudentHeader from '../../header/DashboardStudentsHeader'
import Register2 from "../../common/form/register/Register2";
import Register from "@/components/common/form/register/Register";
import FormContent from "@/components/common/form/register/FormContent";
import FormContent2 from "@/components/common/form/register/FormContent2";
import { Toast } from 'react-bootstrap';

const index = () => {
  const [userType, setUserType] = useState();

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [registrationMessage, setRegistrationMessage] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const myError = () => {

  }
  const myToast = () => {

  }
  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      setUserType(JSON.parse(storedUserType));
    }
  }, []);

  return (
    <>
      <Toast
        onClose={() => {

          setPasswordError('');
          setRegistrationMessage(null);
        }}
        show={Boolean(registrationMessage || passwordError)} // Show toast if there's a message
        delay={900000}
        autohide
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '200px',
          zIndex: 10000,
        }}
      >
        <Toast.Header closeButton={true} style={{ fontSize: '15px' }}>
          <strong className="me-auto" style={{ fontSize: '20px' }}>
            {passwordError ? 'Error' : 'Message'}
          </strong>
          {/* Increased font size for the title */}
        </Toast.Header>
        <Toast.Body style={{ fontSize: '18px' }}>
          {passwordError ? passwordError : registrationMessage}

        </Toast.Body>
      </Toast>

      {  <LoginPopup myError={(value) => setPasswordError(value)} myToast={(value) => setRegistrationMessage(value)} closeMe={() => {
        const element = document.getElementById("btn-del");
        element.click();
      }} />}

      {/* { <LoginPopup />} */}
      {userType === 1 && <DashboardAdminHeader />}
      {userType === 3 && <DashboardEmployerHeader />}
      {userType === 4 && <DashboardJobseekerHeader />}
      {userType === 5 && <DashboardStudentHeader />}
      {userType !== 1 && userType !== 3 && userType !== 4 && userType !== 5 && <DefaulHeader2 />}
      {/* <!--End Main Header -->  */}

      <MobileMenu />

      {/* End MobileMenu */}

      {<div className="login-section">
        <div
          className="image-layer"
          style={{ backgroundImage: "url(/images/background/17.jpeg)" }}
        ></div>
        <div className="outer-box">

          {/* <!-- Login Form --> */}
          {isModalOpen && <div className="login-form default-form">
            <Register myError={(value) => setPasswordError(value)} myToast={(value) => setRegistrationMessage(value)} closeMe={() => {

              setTimeout(() => {
                window.location.replace('/login');
              }, 4000);

            }} />
          </div>}
          {/* <!--End Login Form --> */}
        </div>
      </div>}
      {/* <!-- End Info Section --> */}
    </>
  );
};

export default index;
