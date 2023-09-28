const helpers = {
  toTitleCase: function (str) {
    return str.replace(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  },
  getBadge: function (status) {
    switch (status) {
      case 'active': return 'success'
      case 'inactive': return 'danger'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      case 'published': return 'success'
      case 'generated': return 'danger'
      case 'approved': return 'success'
      case 'rejected': return 'danger'
      default: return 'primary'
    }
  },

  getBadgeStatusChange: function (status) {
    switch (status) {
      case 'active': return 'danger'
      case 'inactive': return 'success'

      default: return 'primary'
    }
  },

  getAttendanceApplicationStatus: function (status) {
    switch (status) {
      case 1: return 'Approved'
      case 0: return 'Rejected'
      default: return status
    }
  },

  getAttendanceApplicationStatusReverse: function (status) {
    switch (status) {
      case 0: return 'Approve'
      case 1: return 'Reject'
      default: return status
    }
  },


  getBadgeLeaveApplicationStatus: function (status) {
    switch (status) {
      case 1: return 'primary'
      case 2: return 'success'
      case 3: return 'danger'
      case 4: return 'danger'
      default: return 'primary'
    }
  },

  getLeaveApplicationStatus: function (status) {
    switch (status) {
      case 0: return ''
      case 1: return 'Pending'
      case 2: return 'Approved'
      case 3: return 'Rejected'
      case 4: return 'Cancel'
      default: return 'Deleted'
    }
  },

  getAttendanceApplicationStatus: function (status) {
    switch (status) {
      case 0: return ''
      case 1: return 'Waiting for approval'
      case 2: return 'Approved'
      case 3: return 'Rejected'
      case 4: return 'Cancel'
      default: return 'Deleted'
    }
  },

  getLeaveType: function (type) {
    switch (type) {
      case 'single_day': return 'Single Day'
      case 'multiple_days': return 'Multiple Days'
      case 'hours': return 'Hours'
      default: return 'Unknown'
    }
  },

  getAttendanceBtnColor: function (status) {
    //console.log("status"+status)
    switch (status) {
     
      case 0: return 'primary'
      case 1: return 'danger'
      case 2: return 'success'
      case 3: return 'warning'
      default: return 'secondary'
    }
  },


  getSalaryBtnColor: function (status) {
    //console.log("status"+status)
    switch (status) {
      case 0: return 'primary'
      case 1: return 'success'
      case 2: return 'secondary'
      default: return 'primary'
    }
  },

  getSalaryStatus: function (status) {
    //console.log("status"+status)
    switch (status) {
      case 0: return 'Generated'
      case 1: return 'Published'
      case 2: return 'Printed'
      default: return 'Generated'
    }
  },

  convertDateToLocal: function (date) {
    if (date === null || date === '') {
      return ""
    }
    //console.log(date);
    //console.log(new Date(date).toLocaleDateString());
    return new Date(date).toLocaleDateString().slice(0, 10);
    //return new Date(date).toLocaleDateString();
  },
  convertDateToISO: function (date) {
    if (date === null || date === '') {
      return ""
    }
    //console.log(date);
    //console.log(new Date(date).toLocaleDateString());
    return new Date(date).toISOString().slice(0, 10);
    //return new Date(date).toLocaleDateString();
  },


  getCurrentMonth: function () {
    var d = new Date();
    var month = d.getMonth() + 1;
    return month
  },

  getCurrentYear: function () {
    var d = new Date();
    var year = d.getFullYear();
    return year
  },

  checkNull: function (value, defaultValue = '') {
    if (value === undefined || value === null) {
      return defaultValue
    }
    else {
      return value
    }
  },

  convertSecondsToHour: function (valueInSeconds, defaultValue = '') {
    if (valueInSeconds === undefined || valueInSeconds === null) {
      return defaultValue
    }
    else {
      let hours = parseInt(valueInSeconds / 3600);
      let seconds = valueInSeconds % 3600;
      var minutes = 0
      if (seconds > 0) {
        minutes = parseInt(seconds / 60);
      }
      let hoursString = (hours > 9 ? hours : "0" + hours) + ":" + (minutes > 9 ? minutes : "0" + minutes)
      return hoursString
    }
  },

  convertPayslipMonthYear: function (month, year) {
    let payslip_month = month + " - " + year
    return payslip_month
  },

  getLeaveTypeName: function (leave_type) {
    switch (leave_type) {
      case "single_day": return "Single Day"
      case "multiple_days": return "Multiple Days"
      case "hours": return "Hours"
      default: return leave_type
    }
  },

  getJobEmploymentTypeName: function (employment_type) {
    switch (employment_type) {
      case "contractual": return "Contractual"
      case "full_time": return "Full Time"
      case "part_time": return "Part Time"
      default: return employment_type
    }
  },

  getBadgeJobStatus: function (status) {
    switch (status) {
      case 'published': return 'success'
      case 'unpublished': return 'danger'
      default: return 'primary'
    }
  },

  getJobStatusName: function (status) {
    switch (status) {
      case 'published': return 'Published'
      case 'unpublished': return 'Unpublished'
      default: return status
    }
  },

  getJobInterviewStatusName: function (status) {
    switch (status) {
      case 'scheduled': return 'Scheduled'
      case 'completed': return 'Completed'
      case 'cancelled': return 'Cancelled'
      default: return status
    }
  },
  getBadgeJobApplicantStatus: function (status) {
    switch (status) {
      case 0: return 'primary'
      case 1: return 'success'
      case 2: return 'danger'
      default: return 'primary'
    }
  },
  getBadgeJobInterviewStatus: function (status) {
    switch (status) {
      case 'scheduled': return 'primary'
      case 'completed': return 'success'
      case 'cancelled': return 'danger'
      default: return 'primary'
    }
  },
  getHolidayLocationName: function (location) {
    switch (location) {
      case 'kolkata': return 'Kolkata'
      case 'delhi': return 'Delhi'
      default: return location
    }
  },


  getPayrollHeadName: function (column) {
    //Format: payrollhead_<id>_<type>_<head name>
    let fields = column.split("_");
    var columnName = "";
    for (let i = 3; i < fields.length; i++) {
      columnName = columnName + " " + fields[i];
    }
    return columnName;
  },

  getPayrollHeadType: function (column) {
    //Format: payrollhead_<id>_<type>_<head name>
    let fields = column.split("_");
    return fields[2];
  },

  getPayrollHeadId: function (column) {
    //Format: payrollhead_<id>_<type>_<head name>
    let fields = column.split("_");
    return fields[1];
  },

  trimString: function (string, showCharacters = 50) {
    if (string === undefined || string === null) {
      return ''
    }
    var trimmedString = string.length > showCharacters ?
      string.substring(0, showCharacters - 3) + "..." :
      string;
    return trimmedString
  },

  getDifferenceInDays: function (date1, date2) {
    const diffDays =  Math.ceil(Math.abs(new Date(date2) - new Date(date1)) / (1000 * 60 * 60 * 24))
    return diffDays;
  },

  getReverseDate: function (date) {
    const dateVal = date.split("/").reverse().join("/"); 
    return dateVal;
  },

  getSplit: function (date) {
    const dateVal = date.split("/"); 
    return dateVal;
  },

  getActiveEmployee: function () {
    var status = "active";
    return status
  },

  getMonthName: function (month) {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month - 1];
  },

   getDiff_hours: function (dt2, dt1) 
  {
    console.log(dt2,dt1)
 
   var diff =(dt2 - dt1) / 1000;
   console.log(diff)
   diff /= (60 * 60);
   return Math.abs(Math.round(diff));
 
  },
  
  getDaysInMonth: function(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }


  



}





export default helpers;