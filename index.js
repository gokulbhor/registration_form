function valid() 
{
var na = document.getElementById("nm").value;
var ag = document.getElementById("age").value;
var em = document.getElementById("eid").value.indexOf("@");
var mno = document.getElementById("pno").value;
if(na==""||na==null)
{
alert("Enter The Name");
return false;
}
else if(isNaN(ag)||ag<1||ag>100)
{
alert("The age must be a number between 1 and 100");
return false;
}
else if(em==-1) 
{  
alert("E-mail ID is not valid");
return false;
}
else if(mno==""||mno==null)
{
alert("Enter The Phone No");
return false;
}
else if(isNaN(mno)||mno.length>10||mno.length<10)
{
alert("Enter mobile number only 10 digits");
return false;
}
else
alert("Information Submitted Successfully");
location.reload()
event.preventDefault()
}