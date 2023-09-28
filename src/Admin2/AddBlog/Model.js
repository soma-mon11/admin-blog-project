import React, { useState } from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import { useEffect } from 'react'
const Modals1 = () => {

    const [modal, setModal] = useState(false)
    const [large, setLarge] = useState(false)
    const [small, setSmall] = useState(false)
    const [primary, setPrimary] = useState(false)
    const [success, setSuccess] = useState(false)
    const [warning, setWarning] = useState(false)
    const [danger, setDanger] = useState(false)
    const [info, setInfo] = useState(false)


   
        const [postData, setPostData] = useState([]);
      
    
        useEffect(() => {
          fetchData();
        }, []);
      
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:8000/getposts',  
            {
            method: "GET",
            credentials: 'include',
            headers: {
                "Content-type": "application/json"
              }
            });
            console.log(response)
            if (response.ok) {
              const data = await response.json();
              setPostData(data);
              
            } else {
              console.error('Error fetching post data from the API');
            }
          } catch (error) {
            console.log(error);
            alert('An error occurred while fetching post data.');
          }
        };
    
   return (
        <CRow>
            <CCol>
            <CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Success modal</CButton>
                <CModal
                    show={success}
                    onClose={() => setSuccess(!success)}
                    color="success"
                >
                    <CModalHeader closeButton>
                        <CModalTitle>{postData[0].post_title}</CModalTitle>
                    </CModalHeader>
                    <CModalBody ><h1>hwrdjkashdj</h1>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="success" onClick={() => setSuccess(!success)}>Do Something</CButton>{' '}
                        <CButton color="secondary" onClick={() => setSuccess(!success)}>Cancel</CButton>
                    </CModalFooter>
                </CModal>
            </CCol>
        </CRow>
    )
}

export default Modals1
