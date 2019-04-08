function validateform()
{
	var num=document.myform.num.value;
	var mail=document.myform.mail.value;
	var dob=document.getElementById("dob").value;
	if(!(/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/.test(dob)))
	{
		alert("Invalid date");
		return false;
	}
	
	if(num.length!=10)
	{
		alert("Number is invalid");
		return false;
	}
	if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)))
	{
		alert("Invalid email");
		return false;
	}
}
