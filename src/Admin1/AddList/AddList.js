import { useEffect, useState } from 'react';
import './addlist.css'; // Import your custom CSS file
import user from './user.png'
import { CButton } from '@coreui/react';

const AddList = () => {
    const [postData1, setPostData1] = useState([]);

      useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8000/getall',  
          {
            method: "GET",
          headers: {
              "Content-type": "application/json"},

              
          });
        
        const data = await response.json();
        console.log(data)
        setPostData1(data);
       

        } catch (error) {
          console.log(error);
          alert('An error occurred while fetching post data.');
        }
      };
      const handleDelete = async () => {

        try {
              for(let i=0;i<postData1.length;i++){
            const apiUrl = `http://localhost:8000/deladmin1?user_id=${postData1[i].user_id}`;
            const res = await fetch(apiUrl, {
                method: "DELETE",
                credentials: 'include',
                headers: {
                    "Content-type": "application/json"
                }
            });
          console.log(postData1[i])
            if (res.ok) {
             
                alert("Your post is deleted");
                
            } else {
                alert("Your Post Is not Deleted");
            }
        }} catch (err) {
            console.log(err);
        }

    }
     
return (
   <>
    <div className="user-details-container">
   {postData1.map((post)=>(
    <>
    <div className="user-details-form" key={post.user_id}>
        <div className="user-profile">
          <h3>{post.user_name} Profile</h3>
          <p><strong>Username:</strong> {post.user_name}</p>
          <p><strong>Email:</strong> {post.email}</p>
      
          {post.profile_photo ? (
            <img style={{height:"15vh"}} src={`http://localhost:8000/${post.profile_photo}`} alt="Profile" />
          ):(<img src={user} alt='defaultPhoto'/>)}
          <div className='addlistbtn'>
           <CButton color="danger"  size="lg" onClick={() => {handleDelete(post.user_id)}}> Delete</CButton>
        
        </div>
        </div>
        
    
    </div>
    </>


   ))}
   </div>

{/* <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              Card title
              <DocsLink name="CCard"/>
            </CCardHeader>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCardBody>
            <CCardFooter>Card footer</CCardFooter>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              Card with icon
              <div className="card-header-actions">
                <CIcon name="cil-check" className="float-right"/>
              </div>
            </CCardHeader>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              Card with switch
              <div className="card-header-actions">
                <CSwitch className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />
              </div>
            </CCardHeader>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              Card with label
              <div className="card-header-actions">
                <CBadge color="success" className="float-right">Success</CBadge>
              </div>
            </CCardHeader>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              Card with label
              <div className="card-header-actions">
                <CBadge shape="pill" color="danger" className="float-right">42</CBadge>
              </div>
            </CCardHeader>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCardBody>
          </CCard>
        </CCol>
      </CRow> */}


{/* <CRow sx={{ maxWidth: 345 }}>
  <CCol>
    <CCard>
      <CMedia
        sx={{ height: 140 }}
        image={`http://localhost:8000/${currentUser.profile_photo}`}
        title="green iguana"
      />
      <CardHeader>
        <CCardBody gutterBottom variant="h5" component="div">
         {currentUser.user_name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
       <strong>Email :</strong> {currentUser.email}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
         {currentUser.user_name}
        </Typography>
        <Typography gutterBottom  component="div">
        <h5 style={{color:"red"}}>About Me</h5> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardHeader>
      <CardActions>
        <Button size="small"><Link to="/login">Login</Link></Button>
        <Button size="small" onClick={logout}>Logout</Button>
      </CardActions>
      </CCard>
      </CCol>
    </CRow> */}


   
    </>
  );
};

export default AddList;