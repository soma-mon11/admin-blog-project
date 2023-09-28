import React from 'react'
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
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import DOMPurify from 'dompurify'
import Modals1 from '../AddBlog/Model'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const fields = ['writeid', 'post_title', 'postWrite', 'Photo_upload', 'postDate', 'postCategory', 'user_id', 'role']

const BlogList = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    const token=localStorage.getItem('token')
    fetchData(token);
  }, []);
  const fetchData = async (token) => {
    try {
      const response = await fetch('http://localhost:8000/getposts',
        {
          method: "GET",
          credentials: 'include',
          headers: {
            "Content-type": "application/json",
            "token":token
          }
        });
      console.log(response)
      const data = await response.json();
      console.log(data)
      if (response.ok) {
      
        setPostData(data);
       

      } else {
        console.error('Error fetching post data from the API');
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred while fetching post data.');
    }
  };

  const handleDelete = async () => {

    try {

      const apiUrl = `http://localhost:8000/deladmin?writeid=${postData[0].writeid}`;
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
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };



  return (
    <>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <h1 style={{ textAlign: "center" }}>TOTAL BLOG LIST</h1>

            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={postData}
                fields={fields}

                dark
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  'postDate': (item) => (
                    <td>
                      {new Date(item.postDate).toLocaleDateString()}
                    </td>
                  ),
                  'user_id': (item) => (
                    <td>
                      {item.user_id}
                    </td>
                  ),
                  'writeid': (item) => (
                    <td>
                      {item.writeid}
                    </td>
                  ),
                  'postWrite': (item) => (
                    <td>
                      {/* {truncateText (item.postWrite,100)} */}
                      <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(truncateText(item.postWrite, 100)) }}></p>
                      {/* <Modals1 /> */}
                    </td>
                  ),
                  'postCategory': (item) => (
                    <td>
                      {item.postCategory}
                    </td>
                  ),
                  'Photo_upload': (item) => (
                    <td>
                      {item.Photo_upload}
                    </td>
                  ),
                  'post_title': (item) => (
                    <td>
                      {item.post_title}
                    </td>
                  ),

                  'status': (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                  'role': (item) => (
                    <td>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <CButton color="danger" onClick={() => { handleDelete() }}>
                          Delete
                        </CButton>
                        <CButton color="warning">
                          Edit
                        </CButton>
                        {/* <CButton color="info" >
                        Suspend
                      </CButton> */}
                      </div>
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

export default BlogList