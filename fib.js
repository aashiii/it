//fibonacci series using recursion
function main_fib()
{	var i;
	var n=document.getElementById("fib").value;
	document.write("Fibonacci series:");
	for(i=1;i<=n;i++)
	{
		document.write("<br> "+ fib(i));
	}

	function fib(n)
	{
		if(n==1)
			return 0;
		else if(n==2)
			return 1;
		else if(n>=2)
			return fib(n-1)+fib(n-2);
	}
}
