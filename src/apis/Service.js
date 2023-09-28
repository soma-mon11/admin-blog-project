import API from '../apis/API';
const accessToken = localStorage.getItem("hrms_auth");

const Service = {
    login: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`login`, params, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => {
                    // sessionStorage.setItem('user_id',responseJson.data.data[0].UserID);
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },



    loginExam: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`login`, params, {
                headers:{
                    'Content-Type': 'application/json',
                  }
            })
                .then(res => {
                    // sessionStorage.setItem('user_id',responseJson.data.data[0].UserID);
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },


    users: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`users`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    departments: function (params) {
        return new Promise((resolve, reject) => {
            API.get(`get-all-department/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },


    designations: function (params) {
        return new Promise((resolve, reject) => {
            API.get(`designations/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    userDetails: function (params) {

        return new Promise((resolve, reject) => {
            //API.get(`users/`+params, {},
            API.get(`users/` + params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    createUser: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`users/add`, params, {
                headers: {
                    'Content-Type': 'application/form-data',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })

        })
    },

    // updateUser:function(userId,params){
    //     return new Promise((resolve,reject)=>{
    //         API.put(`users/`+userId,params)
    //         .then(res => {
    //             console.log(res);
    //             console.log(res.data.data);
    //             resolve(res.data);
    //         })
    //         .catch(error=>{
    //             console.log(error);                
    //             reject(error);
    //         })

    //     })
    // },

    updateUser: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`users/update`, params, {
                headers: {
                    'Content-Type': 'application/form-data',
                    "Authorization": `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })

        })
    },

    confirmProbationEmployee: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`confirm-employee`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })

        })
    },


    locations: function (params) {
        return new Promise((resolve, reject) => {
            API.get(`get-all-location/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    employee_status: function (params) {
        return new Promise((resolve, reject) => {
            API.get(`get-all-employment-status/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    employee_type: function (params) {
        return new Promise((resolve, reject) => {
            API.get(`get-all-employment-type/`, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    leaveCategory: function (params) {
        return new Promise((resolve, reject) => {
            API.get(`leaveCategory/`, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    employeeStatusChange: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`users/update/status`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })

        })
    },

    employeeEmailSend: function (params) {
        console.log(accessToken)
        return new Promise((resolve, reject) => {
            API.post(`send-welcome-email/` + params, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })

        })
    },

    leaves: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`leaves`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    leaveDetails: function (params) {
        return new Promise((resolve, reject) => {
            API.get(`leaves/` + params, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    leaveHistory: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`leave-history`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    leaveSummary: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`leave-summary`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })
        })
    },

    applyLeave: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`leave/add`, params, {
                headers: {
                    'Content-Type': 'application/form-data',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })

        })
    },

    updateLeaveStatus: function (leave_application_id, params) {
        return new Promise((resolve, reject) => {
            API.put(`leaves/` + leave_application_id, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },


    leaveHistoryDetails: function (params) {
        return new Promise((resolve, reject) => {
            API.get(`leave-history/` + params, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    editLeaveHistory: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`update-leave-history`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })
        })
    },

    deleteLeave: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`delete-leave`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })
        })
    },

    attendanceByUser: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`attendance`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })
        })
    },

    clockHistoryList: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`clock-history`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })
        })
    },



    addAttendance: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`attendance/add`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })
        })
    },

    editAttendance: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`attendance/update`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })
        })
    },


    attendanceDetails: function (params) {
        return new Promise((resolve, reject) => {
            API.get(`attendance/` + params, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    attendanceDetailsByClockId: function (params) {
        return new Promise((resolve, reject) => {
            API.get(`clock/` + params, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },



    updateAttendanceApprovalStatus: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`update-attendance-status`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })
        })
    },

    updateAttendanceStatus: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`attendance/update/status`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })
        })
    },

    deleteAttendance: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`attendance/delete`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })
        })
    },


    monthlyAttendance: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`attendance/register`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    compOffList: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`compoffs`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })
        })
    },

    applyCompOff: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`compoff/add`, params, {
                headers: {
                    'Content-Type': 'application/form-data',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })

        })
    },

    compOffDetails: function (params) {
        return new Promise((resolve, reject) => {
            API.get(`compoff/` + params, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    deleteCompOff: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`delete-compoff`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })
        })
    },

    updateCompOffDetails: function (comp_off_id, params) {
        return new Promise((resolve, reject) => {
            API.put(`compoff/` + comp_off_id, params, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    expenceHead: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`salaryheads-by-type`, params, {
                headers: {
                    'Content-Type': 'application/json',

                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })

        })
    },

    incomeHead: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`salaryheads-by-type`, params, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })

        })
    },

    addExpense: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`salaryhead-add`, params, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })

        })
    },

    addIncome: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`salaryhead-add`, params, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })

        })
    },

    editIncome: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`salaryhead-update`, params, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })

        })
    },

    editExpense: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`salaryhead-update`, params, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })

        })
    },

    loans: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`loans`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    createLoan: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`add-loan`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })

        })
    },

    updateLoanDetails: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`update-loan`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })

        })
    },

    loanDetails: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`get-loan-details`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    deleteLoan: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`delete-loan`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })
        })
    },

    salaryConfigurations: function (params) {
        return new Promise((resolve, reject) => {
            API.get(`salaryconfiguration-by-user/` + params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    salaryConfigurationDetails: function (params) {
        return new Promise((resolve, reject) => {
            API.get(`salaryconfigurations/` + params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    salaryCalculations: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`salary-calculation` , params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    createSalaryConfiguration: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`salaryconfigurations`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })

        })
    },

    updateSalaryConfiguration: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`salaryconfiguration-update`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })

        })
    },

    deleteSalaryConfiguration: function (params) {
        return new Promise((resolve, reject) => {
            API.delete(`salaryconfigurations/` + params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })

        })
    },

    payslipsByUser: function (params) {
        return new Promise((resolve, reject) => {
            API.get(`payslip-by-user/` + params, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    generateSalaryDetails: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`get-details-by-salary-id`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },


    lastSalaryConfiguration: function (params) {
        return new Promise((resolve, reject) => {
            API.get(`lastsalaryconfiguration/` + params, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    allCVs: function (params) {
        return new Promise((resolve, reject) => {
            API.get(`cvs/`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    addCV: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`cvs`, params, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })
        })
    },

    allCVRepositoryCategories: function (params) {
        return new Promise((resolve, reject) => {
            API.get(`cvrepositorycategories/`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    appraisalDetails: function (id) {
        return new Promise((resolve, reject) => {
            API.get(`appraisals-details/` + id, {}, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    allAppraisals: function (year) {
        return new Promise((resolve, reject) => {
            API.get(`appraisals/` + year, {}, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },

    generateSalary: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`generate-salary`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })
        })
    },

    allPublishPayslip: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`all-published-salary`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })
        })
    },


    regenerateSalary: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`update-salary`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })

        })
    },

    publishStatusChange: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`update-salary-status`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })

        })
    },


    allPayslips: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`payslips`, params, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })
        })
    },

    payslipDetails: function (params) {
        return new Promise((resolve, reject) => {
            API.get(`payslips/` + params, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })
        })
    },

    publishPayslips: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`publish-payslips`, params, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })
        })
    },

    createPayslip: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`create-payslip`, params, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => {
                    console.log(res);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })
        })
    },

    leads: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`leads`, params, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log(error);

                    reject(error);
                })

        })
    },


}

export default Service;
