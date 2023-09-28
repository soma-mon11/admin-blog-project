import API from '../apis/API';
import qs from 'querystring'

const accessToken = localStorage.getItem("hrms_auth");
const HolidayService = {
    allHolidays: function (params) {
        return new Promise((resolve, reject) => {
            let querystring = qs.stringify(params)

            console.log(querystring)
            API.get(`holidays?` + querystring,
                {
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
    holidayDetails: function (params) {
        return new Promise((resolve, reject) => {
            API.get(`holidays/` + params, {
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
    addHoliday: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`holidays/`, params,
                {
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
    updateHoliday: function (id, params) {
        return new Promise((resolve, reject) => {
            API.put(`holidays/` + id, params,
                {
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

    deleteHoliday: function (params) {
        return new Promise((resolve, reject) => {
            API.post(`holiday/delete`, params,
                {
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
}

export default HolidayService;