import React, { useState } from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CCollapse,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CFade,
    CForm,
    CFormGroup,
    CFormText,
    CValidFeedback,
    CInvalidFeedback,
    CTextarea,
    CInput,
    CInputFile,
    CInputCheckbox,
    CInputRadio,
    CInputGroup,
    CInputGroupAppend,
    CInputGroupPrepend,
    CDropdown,
    CInputGroupText,
    CLabel,
    CSelect,
    CRow,
    CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
function AddList() {

    const [write, setWrite] = useState({
        postWrite: '',
        post_title: '',
        Photo_upload: '',
        postDate:'',
        user_id:"178"

    })

    function handleInput(e) {
        const { name, value, files } = e.target;
        setWrite({ ...write, [name]: files ? files[0] : value });
    }
    function handleCategory(category) {
        setWrite({ ...write, postCategory: category });
    }

    const HandleClick = async (e) => {
        e.preventDefault();
        // const postDate = moment(Date.now()).format("YYYY-MM-DD");

        // const user_id = currentUser.user_id;
        try {
            const form = new FormData();
            form.append('post_title', write.post_title);
            form.append('postWrite', write.postWrite);
            form.append('Photo_upload', write.Photo_upload);
            form.append('postCategory', write.postCategory);
            form.append('postDate', write.postDate);
            form.append('user_id',write.user_id);
            // form.append('writeid',state.writeid)


            const response = await fetch(`http://localhost:8000/write`, {
                method: 'POST',
                body: form,
            })


            if (response.ok) {
             alert("posted successfully")
            } else {
                
                console.error('Error creating/updating the post');
            }
        } catch (error) {
            console.log(error);
            alert('An error occurred while submitting the form.');
            alert("ERROR")
        }
    }

    return (
        <CRow style={{justifyContent:"center"}}>
            <CCol xs="12" md="6">
                <CCard>

                    <CCardBody>
                        <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">

                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="text-input">TITLE</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput id="text-input" name="post_title" placeholder="Text" value={write.post_title} onChange={handleInput} />

                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="date-input">Date Input</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput type="date" id="date-input" name="postDate" value={write.postDate} placeholder="date" onChange={handleInput} />
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="textarea-input">WRITE YOUR BLOG</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CTextarea
                                        name="postWrite"
                                        id="textarea-input"
                                        rows="9"
                                        placeholder="Content..."
                                        value={write.postWrite}
                                        onChange={handleInput}

                                    />
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel>CATAGORIES</CLabel>
                                </CCol>
                                <CCol md="9">
                                    <CFormGroup variant="custom-radio" inline>
                                        <CInputRadio custom id="inline-radio1" name="inline-radios" value="option1" />
                                        <CLabel variant="custom-checkbox"onClick={() => handleCategory("Art")}htmlFor="inline-radio1">ART</CLabel>
                                    </CFormGroup>
                                    <CFormGroup variant="custom-radio" inline>
                                        <CInputRadio custom id="inline-radio2" name="inline-radios" value="option2" />
                                        <CLabel variant="custom-checkbox" onClick={() => handleCategory("Science")} htmlFor="inline-radio2">SCIENCE</CLabel>
                                    </CFormGroup>
                                    <CFormGroup variant="custom-radio" inline>
                                        <CInputRadio custom id="inline-radio3" name="inline-radios" value="option3" />
                                        <CLabel variant="custom-checkbox" onClick={() => handleCategory("Technology")} htmlFor="inline-radio3">TECHNOLOGY</CLabel>
                                    </CFormGroup>
                                    <CFormGroup variant="custom-radio" inline>
                                        <CInputRadio custom id="inline-radio4" name="inline-radios" value="option3" />
                                        <CLabel variant="custom-checkbox" onClick={() => handleCategory("Food")} htmlFor="inline-radio4">FOOD</CLabel>
                                    </CFormGroup>
                                    <CFormGroup variant="custom-radio" inline>
                                        <CInputRadio custom id="inline-radio5" name="inline-radios" value="option3" />
                                        <CLabel variant="custom-checkbox" onClick={() => handleCategory("Cenima")} htmlFor="inline-radio5">CENIMA</CLabel>
                                    </CFormGroup>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CLabel col md="3" htmlFor="file-input">File input</CLabel>
                                <CCol xs="12" md="9">
                                    <CInputFile id="file-input" name="Photo_upload"  onChange={handleInput}/>
                                </CCol>
                            </CFormGroup>


                        </CForm>
                    </CCardBody>
                    <CCardFooter>
                        <CButton type="submit" size="sm" color="primary" onClick={HandleClick}><CIcon name="cil-scrubber" /> Submit</CButton>

                    </CCardFooter>
                </CCard>

            </CCol>

        </CRow>
    );


}
export default AddList