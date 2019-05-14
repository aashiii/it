function primeval()
{
	
	var x=document.getElementById("prim").value;
	var f=1,i;
	
	if(x==1)
	{
		document.getElementById("1").innerHTML="Not Prime";
	}
	else
	{	for(i=2;i<=(x/2);i++)
		{	
			if(x%i==0)
			{
				f=0;
				break;
			}
		}	
		if(f==1)
		{
			document.getElementById("1").innerHTML="Prime";
		}
		else
			document.getElementById("1").innerHTML="Not Prime";
	}
}

function palval()
{
	var x=document.getElementById("pal").value;
	var z=x,i=0,r;
	while(z>0)
	{
		r=z%10;
		i=i*10;
		i=i+r;
		z=parseInt(z/10);
	}
	if(i==x)
		document.getElementById("2").innerHTML="Palindrome";
	else
		document.getElementById("2").innerHTML="Not a palindrome";
}

function armvalue()
{
	var x=document.getElementById("arm").value;
	var y=x,i,s=0;;
	while(y>0)
	{
		i=y%10;
		i=i*i*i;
		s=s+i;
		y=parseInt(y/10);
	}
	if(s==x)
		document.getElementById("3").innerHTML="Armstrong";
	else
		document.getElementById("3").innerHTML="Not Armstrong";

}
function neovalue()
{
	var x=document.getElementById("neo").value;
	var y=x*x;
	var i=0,r=0;
	while(y>0)
	{
		r=y%10;
		i=i+r;
		y=parseInt(y/10);
		
	}
	if(i==x)
	{	document.getElementById("4").innerHTML="Neon";}
	else
	{	document.getElementById("4").innerHTML="Not Neon";}

}


	
	
