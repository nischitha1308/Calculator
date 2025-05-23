function clearresult(value){
    document.getElementById('result').value="";
}
function appendtoresult(value){
    document.getElementById('result').value+=value;
}
function calculateresult(value){
    const resultfield=document.getElementById('result');
    try{
        resultfield.value=eval(resultfield.value);
    }
    catch(error){
        alert("Invalid calculation");
        clearresult();
    }
}