<?php
 echo "test";
 $var=mysqli_connect("localhost:3306","root","root","groot");
 if($var->connect_error){
	die("Connection failed: ".$var->connect_error);
	}

 $nm=$_POST["nam"];
 $rn=$_POST["rn"];
 $br=$_POST["br"];
 $sql="INSERT INTO student(name,rollno,branch)values('".$nam."',"."$rn.",'".$br."');"";

 if(mysqli_query($var,$sql)){
	echo "NEW Record";}
 else {
	echo "Error: ".$sql."<br>" . mysqli_error($var);}

mysqli_close($var);
 ?>
