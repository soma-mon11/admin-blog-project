import React, { useEffect, useState } from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'

import { DocsLink } from 'src/reusable'

import usersData from '../../views/users/UsersData'


const getBadge = status_action => {
  switch (status_action) {
    case 'active': return 'success'
    case 'inactive': return 'danger'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const fields = ['user_id','user_name','email', 'role','status']
const UserList = () => {
    
      const [postData1, setPostData1] = useState([]);
      const[status,setStatus]=useState(1)

    
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8000/getall',  
          {method: "GET",
          headers: {
              "Content-type": "application/json"},

              
          });
       
          if (response.ok) {
            const data = await response.json();
            console.log(data)
            setPostData1(data);
            
          } else {
            console.error('Error fetching post data from the API');
          }
        } catch (error) {
          console.log(error);
          alert('An error occurred while fetching post data.');
        }
      };
      useEffect(() => {
        fetchData();
      }, []);
    
   
     
      
      const HandleSuspend = async (user_id, status_id) => {

        try {
          
            const apiUrl = `http://localhost:8000/mode`;
            const newStatus = status_id === 1 ? 0 : 1;
            const postData = JSON.stringify({"status_id":newStatus, "user_id":user_id}); 
            const res = await fetch(apiUrl, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body:postData
              
            })
            console.log(res)
          
            if (res.ok) {
              setStatus(0)
              alert ("status is updated")
              
            } else {
                alert("status is not updated");
            }
          
          
        } catch (err) {
            console.log(err);
        }

    }  
    const handleDelete = async (user_id) => {

      try {
       
          const apiUrl = `http://localhost:8000/deladmin1?user_id=${user_id}`;
          const res = await fetch(apiUrl, {
              method: "DELETE",
              credentials: 'include',
              headers: {
                  "Content-type": "application/json"
              }
          });
       
          if (res.ok) {
           
              alert("Your post is deleted");
              
          } else {
              alert("Your Post Is not Deleted");
          }
      } catch (err) {
          console.log(err);
      }

  }
   

    
  return (
    <>
      
        <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             <h1 style={{textAlign:"center"}}>TOTAL USER LIST</h1>
             
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={postData1}
              fields={fields}
              
              dark
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'user_id': (item) => (
                    <td>
                      {item.user_id}
                    </td>
                  ),
                  'user_name': (item) => (
                    <td>
                      {item.user_name}
                    </td>
                  ),
                  // 'password': (item) => (
                  //   <td>
                  //     {item.password}
                  //   </td>
                  // ),
                  'email': (item) => (
                    <td>
                      {item.email}
                    </td>
                  ),
                'role': (item) => (
                    <td>
                      <div style={{ display: 'flex', gap: '10px'}}>
                      <CButton color="danger" onClick={()=>handleDelete(item.user_id)}>
                        Delete
                      </CButton>
                      {/* <CButton color="warning">
                        Edit
                      </CButton> */}
                      <CButton color={item.status_id===1?"info":"success"} onClick={() => HandleSuspend(item.user_id, item.status_id)}>
                        {item.status_id===1?"Continue":"Suspend"}
                      </CButton>
                      </div>
                    </td>
                  ),
                  'status': (item) => (
                    <td>
                      <CBadge color={getBadge(item.status_action)}>
                        {item.status_action}
                      </CBadge>
                    </td>
                  ),
              }}
              
            
              
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default UserList
