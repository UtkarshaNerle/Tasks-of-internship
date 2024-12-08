function relation(){

    if(document.getElementById("t1").value == document.getElementById("t2").value){
        document.getElementById("res").innerHTML="BOTH ARE EQUAL";
    }

    else if(document.getElementById("t1").value > document.getElementById("t2").value){
        document.getElementById("res").innerHTML="FIRST NUMBER IS GREATER THAN SECOND NUMBER"

    }

    else{
        document.getElementById("res").innerHTML="FIRST NUMBER IS SMALLER THAN SECOND NUMBER"

    }
}