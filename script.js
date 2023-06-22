const  element = document.getElementsByTagName("strong");
function highlight() {
    //Write your code here
	for(let i=0;i<element.length;i++)
		{
			element[i].style.color="green";
		}


}


function return_normal() {
    //Write your code here
	for(let i=0;i<element.length;i++)
		{
			element[i].style.color="black";
		}

    
}
