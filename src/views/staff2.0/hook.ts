const tinhTuoi=(timestamp:number) =>{       
    var dob = new Date(timestamp/1000);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    if (
      today.getMonth() < dob.getMonth() ||
      (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
    ) {
      age--;
    }
    return age;
  }

  export default tinhTuoi