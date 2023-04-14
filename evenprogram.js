const back = document.querySelector(".back");
let no;
function Even(){
    no = document.getElementById("a").value;
    if(no == "")
    {
        alert("Error : Number Not Entered");
        return null;
    }
    else if(no % 2 == 0)
    {
        document.getElementById("b").innerHTML = no + " " + "is even" ; 

    }
    else
    { 
        document.getElementById("b").innerHTML = no + " " + "is not even(odd)"; 
        
    }
};
