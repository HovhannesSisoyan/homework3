const someArguments = function(arg1,arg2,arg3,arg4)   
{
const result = ((arg1+arg2-arg3)/arg4);
return result;
};
//function2
const noArguments = function()                            
{
const str="This function takes no arguments and returns this string";
return str;
};
//function3
const someArgumentsWithoutReturn = function(arg1,arg2,arg3,arg4)   
{
const result = ((arg1+arg2-arg3)/arg4);
console.log(result);
};
//function4
const fullName = function(firstName,lastName)                
{
const name = (firstName+" "+lastName);
return name;
};
//function5
const threeStrings = function(str1,str2,str3)                 
{
if (str1.length>=str2.length && str1.length>=str3.length) 
   return str1;
   else if (str2.length>=str1.length && str2.length>=str3.length)
   return str2;
   else return str3; 	
};
//function6
const twoNumbers = function(num1,num2)                         
{
	if (num1===num2) 
		return 0;
	else if (num1>num2)
		return 1;
	else return (-1);
};
//function7
const firstTruethy = function(val1,val2,val3)
{
return(val1 || val2 || val3);
};
console.log(someArguments(4,3,2,1));                   //call of function1
console.log(noArguments());                            //call of function2 
console.log(someArgumentsWithoutReturn(4,3,2,1));      //call of function3     
console.log(fullName("John","Smith"));                 //call of function4
console.log(threeStrings("a","ab","abc"));             //call of function5
console.log(twoNumbers(4,6));                          //call of function6
console.log(firstTruethy(0,"",1));                   //call of function7