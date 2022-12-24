var cel = document.getElementById("cel");
var
//Celsius to Fahrenheit
cel.addEventListener('input',  function(){
   let c = this.value;
   let f = (c*9/5)+32;
   if(!Number.isInteger(f)){
    f = f.toFixed(2);
   }
   feh.value = f;
});
//Fahrenheit to Celsius
feh.addEventListener('input', function(){
    let f = this.value;
    let c = (f-32)*5/9;
    if(!Number.isInteger(c)){
     c = c.toFixed(2);
    }
    cel.value = c;
});