
var test= "imthebestbabe "; 

console.log(test[9]);
// alert("foxisthebest".charAt(2));  

        // 

        console.log(parseInt("9")+9); 
         
        // pour add >>> push 
        // pour dellete >> pop 

        var  tab=[1,2,3,4,"foxmassat"] 
     tab.push(34); 
     tab.pop(); 

        console.log(tab.indexOf("foxmassat"));

     // var name=  prompt("enter your name :","your name here") ;

     // confirm("are you really "+name);  



      // somme 

      function somme()
     {
         var a= parseInt(document.getElementById("a").value) ; 
         var b = parseInt(document.getElementById("b").value) ; 

         var  s= a+b;  
         var m=a*b; 
         var so=a-b; 
         var de=a/b

          var d=document.getElementById("d"); 
          d.innerHTML="A + B = "+s+"<br/>A * B = "+m+"<br/>A - B = "+so+"<br/>A / B = "+de ; 
        d.style.font="bold";  
        d.style.fontSize="30px";
        d.style.paddingLeft="162px"

     } 

     function dele(){ 

        

        var d=document.getElementById("d"); 
        d.innerHTML=" bye bye :)"
     }