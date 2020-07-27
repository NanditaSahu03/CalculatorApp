var buttons=document.getElementsByClassName("button");
var display=document.getElementById("display");


var operand1=0;
var operand2=null;
var operator=null;

for(var i=0;i<buttons.length;i++){
   buttons[i].addEventListener('click',function(){
       var value=this.getAttribute('data-value');
       if(value=="+" || value=="*" || value=="-" || value=="/"){
         operator=value;
         operand1=parseFloat(display.textContent);
         display.innerText="";
       }
       else if(value=="sign"){
          operand1=parseFloat(display.textContent.trim());
          operand1=-1*operand1;
          display.textContent=operand1;
       }
       else if(value=="="){
           operand2=parseFloat(display.textContent);
           if(operator=="+"){
             console.log(eval(operand2+operand1));
             var ans=eval(operand1+operand2);
             display.innerText=ans;
           }
           else if(operator=='*'){
             console.log(eval(operand1*operand2));
             var ans=eval(operand1*operand2);
             display.innerText=ans;
           }
           else if(operator=='/'){
               console.log(eval(operand1/operand2));
               var ans=eval(operand1/operand2);
               display.innerText=ans;
           }
           else if(operator=='-'){
              console.log(eval(Math.abs(operand1-operand2)));
              var ans=eval(operand1-operand2);
              display.innerText=ans;
           }
           else if(operator=='%'){
            var ans=eval(operand1/100);
            display.innerText=ans;
           }
       }
       else if(value=="AC")
       {
           operand1=0;
           operand2=0;
           display.innerText="";
       }
       else{
           display.innerText+=value;
       }
   });
}