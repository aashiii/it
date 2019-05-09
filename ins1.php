<?php
 
 $var=mysqli_connect("localhost","root","root","groot");
 if($var->connect_error){
	die("Connection failed: ".$var->connect_error);
	}
 $nm=$_POST["nam"];
 $rn=$_POST["rn"];
 $br=$_POST["br"];
 $gen=$_POST["gen"];
 $mail=$_POST["mail"];
 $add=$_POST["add"]; 
$sql="INSERT INTO stud_det(rollno,name,gender,branch,emailid,address)values(".$rn.",'".$nm."','".$gen."','".$br."','".$mail."','".$add."');";
 if(mysqli_query($var,$sql)){ 
	echo "NEW Record";}
 else {
	echo "Error: ".$sql."<br>" . mysqli_error($var);}
mysqli_close($var);
 ?>
