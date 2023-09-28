import React, {useState} from 'react'
import { Link,Redirect,withRouter,useHistory } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { ToastContainer, toast } from 'react-toastify';
import User from '../../../models/User'

//import axios from 'axios'

import Constants from '../../../Utility/Constants'
import Service  from '../../../apis/Service'


const Login = () => {
  const history = useHistory();
  const [state , setState] = useState({
    username : "",
    password : ""
  })
  const [userNameErrors, setUserNameErrors] = useState();
  const [passwordErrors, setPasswordErrors] = useState();
  const handleChange = (e) => {
      const {id , value} = e.target   
      setState(prevState => ({
          ...prevState,
          [id] : value
      }))
  }
  const ValidateForm = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      LoginSubmitClick();
    } 
    else {
      toast.error("Please fill all the fields !", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  }



  const handleValidation = (e) => {
    let usernameErrors, passwordErrors;
    let formIsValid = true;

    //Name
    if (!state.username) {
      formIsValid = false;
      usernameErrors = "Username cannot be empty";
      setUserNameErrors(usernameErrors);
    } else {
      setUserNameErrors('');
    }

    //Email

    if (!state.password) {
      formIsValid = false;
      passwordErrors = "Password can not be empty";
      setPasswordErrors(passwordErrors);
    } else {
      formIsValid = true;
      setPasswordErrors('');
    }
  

   
    return formIsValid;
  }


  const LoginSubmitClick = (e) => {    
  //  e.preventDefault();
    let params = JSON.stringify({
      username: state.username,
      password: state.password
    })
        localStorage.setItem("hrms_auth","demo_token");
        console.log(localStorage.getItem("hrms_auth"));
        history.push("/");          
  }
  
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
       <ToastContainer />
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Username" id="username" autoComplete="username" value={state.username}
                       onChange={handleChange}/>
                      
                    </CInputGroup>
                    <span style={{ color: "red" }}>{userNameErrors}</span>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" id="password" autoComplete="current-password" value={state.password}
                       onChange={handleChange}/>
                       
                    </CInputGroup>
                    <span style={{ color: "red" }}>{passwordErrors}</span>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" style={{marginTop:10}} onClick={ValidateForm}>Login</CButton>
                      </CCol>
                      {/* <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>e-Commerce ADMIN<br></br>LOGIN</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link> */}
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default withRouter(Login)
