function age(){
    const ageValue = Number(document.getElementById("t1").value);
    if(ageValue>=18)
    {
        document.getElementById("res").innerHTML="ELIGIBLE FOR VOTE";
    }
    else
    {
        document.getElementById("res").innerHTML="NOT ELIGIBLE FOR VOTE";
    }
    
}