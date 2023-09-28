import API from '../apis/API';

const JobService={
    allJobs:function(params){
        return new Promise((resolve,reject)=>{
            API.get(`jobs`, {})
            .then(res => {
                console.log(res);
                console.log(res.data.data);
                resolve(res.data);
            })
            .catch(error=>{
                console.log(error);                
                reject(error);
            })

        })
    },
    jobDetails:function(params){
        return new Promise((resolve,reject)=>{
            API.get(`jobs/`+params, {})
            .then(res => {
                console.log(res);
                console.log(res.data.data);
                resolve(res.data);
            })
            .catch(error=>{
                console.log(error);                
                reject(error);
            })

        })
    },
    addJob:function(params){
        return new Promise((resolve,reject)=>{
            API.post(`jobs/`, params)
            .then(res => {
                console.log(res);
                console.log(res.data.data);
                resolve(res.data);
            })
            .catch(error=>{
                console.log(error);                
                reject(error);
            })

        })
    },
    updateJob:function(id,params){
        return new Promise((resolve,reject)=>{
            API.put(`jobs/`+id,params)
            .then(res => {
                console.log(res);
                console.log(res.data.data);
                resolve(res.data);
            })
            .catch(error=>{
                console.log(error);                
                reject(error);
            })

        })
    },
    allJobApplicants:function(params){
        return new Promise((resolve,reject)=>{
            API.get(`job-applicants-by-circular/`+params, {})
            .then(res => {
                console.log(res);
                console.log(res.data.data);
                resolve(res.data);
            })
            .catch(error=>{
                console.log(error);                
                reject(error);
            })

        })
    },
    jobApplicantsDetails:function(params){
        return new Promise((resolve,reject)=>{
            API.get(`job-applicants/`+params, {})
            .then(res => {
                console.log(res);
                console.log(res.data.data);
                resolve(res.data);
            })
            .catch(error=>{
                console.log(error);                
                reject(error);
            })

        })
    },
    addJobApplicant:function(params){
        return new Promise((resolve,reject)=>{
            API.post(`job-applicants/`, params)
            .then(res => {
                console.log(res);
                console.log(res.data.data);
                resolve(res.data);
            })
            .catch(error=>{
                console.log(error);                
                reject(error);
            })

        })
    },
    updateJobApplicant:function(id,params){
        return new Promise((resolve,reject)=>{
            API.put(`job-applicants/`+id,params)
            .then(res => {
                console.log(res);
                console.log(res.data.data);
                resolve(res.data);
            })
            .catch(error=>{
                console.log(error);                
                reject(error);
            })

        })
    },
    //======================
    allJobInterviews:function(job_appliactions_id){
        let params="?job_applications_id="+job_appliactions_id
        return new Promise((resolve,reject)=>{
            API.get(`job-interviews`+params, {})
            .then(res => {
                console.log(res);
                console.log(res.data.data);
                resolve(res.data);
            })
            .catch(error=>{
                console.log(error);                
                reject(error);
            })

        })
    },
    jobInterviewDetails:function(params){
        return new Promise((resolve,reject)=>{
            API.get(`job-interviews/`+params, {})
            .then(res => {
                console.log(res);
                console.log(res.data.data);
                resolve(res.data);
            })
            .catch(error=>{
                console.log(error);                
                reject(error);
            })

        })
    },
    addJobInterview:function(params){
        return new Promise((resolve,reject)=>{
            API.post(`job-interviews/`, params)
            .then(res => {
                console.log(res);
                console.log(res.data.data);
                resolve(res.data);
            })
            .catch(error=>{
                console.log(error);                
                reject(error);
            })

        })
    },
    updateJobInterview:function(id,params){
        return new Promise((resolve,reject)=>{
            API.put(`job-interviews/`+id,params)
            .then(res => {
                console.log(res);
                console.log(res.data.data);
                resolve(res.data);
            })
            .catch(error=>{
                console.log(error);                
                reject(error);
            })

        })
    },
}

export default JobService;