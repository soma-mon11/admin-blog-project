const masterData = {
  months:[
    {id: 1, name:'January'},
    {id: 2, name:'February'},
    {id: 3, name:'March'},
    {id: 4, name:'April'},
    {id: 5, name:'May'},
    {id: 6, name:'June'},
    {id: 7, name:'July'},
    {id: 8, name:'August'},
    {id: 9, name:'September'},
    {id: 10, name:'October'},
    {id: 11, name:'November'},
    {id: 12, name:'December'}
  ],
  years:[
    {id: 2017, name:'2017'},
    {id: 2018, name:'2018'},
    {id: 2019, name:'2019'},
    {id: 2020, name:'2020'},
    {id: 2021, name:'2021'},
    {id: 2022, name:'2022'},
    {id: 2023, name:'2023'},
    {id: 2024, name:'2024'},
    {id: 2025, name:'2025'},
    {id: 2026, name:'2026'},
    {id: 2027, name:'2027'},
    {id: 2028, name:'2028'},
    {id: 2029, name:'2029'},
    {id: 2030, name:'2030'},
  ],
  leaveCategories:[
    {id: 1, name:'Casual'},
    {id: 2, name:'Medical'},
  ],
  leaveApplicationStatuses:[
    {id: 1, name:'Pending'},
    {id: 2, name:'Approved'},
    {id: 3, name:'Rejected'},
    {id: 4, name:'Cancel'}        
  ],
  jobStatuses:[
    {id: 'published', name:'Published'},
    {id: 'unpublished', name:'Unpublished'},
  ],
  jobEmploymentTypes:[
    {id: 'contractual', name:'Contractual'},
    {id: 'full_time', name:'Full Time'},
    {id: 'part_time', name:'Part Time'},
  ],
  jobApplicantStatus:[
    {id: 0, name:'Pending'},
    {id: 1, name:'Accepted'},
    {id: 2, name:'Rejected'},
  ],
  jobInterviewStatuses:[
    {id: 'scheduled', name:'Scheduled'},
    {id: 'completed', name:'Completed'},
    {id: 'cancelled', name:'Cancelled'},
  ],
  holidayLocations:[
    {id: 'kolkata', name:'Kolkata'},
    {id: 'delhi', name:'Delhi'}
  ],
  usersType:[
    {id: 'kolkata', name:'Admin'},
    {id: 'Client', name:'Client'},
    {id: 'delhi', name:'Staff'}
  ],
  userLocations:[
    {id: 'kolkata', name:'Kolkata'},
    {id: 'delhi', name:'Delhi'},
    {id: 'bangalore', name:'Bangalore'}
  ],
  userFilter:[
    {id: 'all', name:'All Employees'},
    {id: 'active', name:'Active Employees'},
    {id: 'deactive', name:'Inactive Employees'},
    {id: 'department', name:'Department'},
  ],
  sortByFilter:[
    {id: 'employeeName', name:'Employee Name'},
    {id: 'joiningDate', name:'Date of Joining'},
  ],
  leaveStatusFilter:[
    {id: 'all', name:'All Employees'},
    {id: 'active', name:'Active Employees'},
    {id: 'inactive', name:'Inactive Employees'},
  ],
  leaveCategory:[
    {id: 'casual', name:'Casual'},
    {id: 'medicalleave', name:'Medical Leave'},
  ],
  leaveDuration:[
    {id: 'single_day', name:'Single day'},
    {id: 'multiple_days', name:'Multiple days'},
    {id: 'hours', name:'Hours'},
  ],
  leaveHours:[
    {id: '2', name:'0.25'},
    {id: '4', name:'0.5'},
    {id: '6', name:'0.75'},
  ],

  clockHistoryStatus:[
    {id: '1', name:'Pending'},
    {id: '2', name:'Approved'},
    {id: '3', name:'Rejected'},
  ],
  leaveSearchStatus:[
    {id: 'all', name:'All'},
    {id: 'pending', name:'Pending'},
  
  ],
}
  
export default masterData
  