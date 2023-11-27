const display =document.getElementById('screen');
const buttons =document.querySelectorAll('button');


for(let button of buttons){
  button.addEventListener('click' ,(e) =>{
      const text =e.target.innerText;
      if(text ==='C'){
        display.value =" ";
      }
      else if(text ==='X'){
        display.value += '*';
      }
      else if(text ==='='){
       try{
        display.value =eval(display.value);
       }
        catch(error){
            display.value ="Invalid Operator!" ;
        }
      }
      else{
        display.value +=text;
      }
  });
}