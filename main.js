function calculateBtn(){
    let weight=parseFloat(document.getElementById('weightInput').value);
    let height= parseFloat(document.getElementById('heightInput').value)

    let result = weight/(height * height);
    //console.log(result)
    if(result<18.5){
        document.getElementById("bmi").innerHTML=result.toFixed(2);
        document.getElementById("category").innerHTML="You are uderweight";
    }else if(result >=18.5 && result<24.9)
    {   document.getElementById("bmi").innerHTML=result.toFixed(2);
        document.getElementById("category").innerHTML="You are Normal";
    }else{
        document.getElementById("bmi").innerHTML=result.toFixed(2);
        document.getElementById("category").innerHTML="You are Obese";

    }
}