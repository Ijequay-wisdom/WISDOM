<!DOCTYPE html>
<html>
<head>
   <title>Java Script 2</title>
</head>
<body>
  <script>

 let data = [
   {principal: 2500, time: 1.8},
   {principal: 1000, time: 5},
   {principal: 3000, time: 1},
   {principal: 2000, time: 3}
 ]    
 
 
 function interestCalculator(array) {
   let rate, interest;
   let interestData = []
   
   array.forEach((i) => {
     if(i.principal >= 2500 && (i.time > 1 && i.time < 3)){
       rate = 3;
       interest = (i.principal * rate * i.time)/ 100;
       interestData.push({'principal': i.principal, 'rate' : rate,  'time': i.time, 'interest' : interest });
     }
     else if(i.principal >= 2500 && (i.time >= 3)){
       rate = 4;
       interest = (i.principal * rate * i.time)/ 100;
       interestData.push({'principal': i.principal, 'rate' : rate,  'time': i.time, 'interest' : interest });
     }else if(i.principal < 2500 || (i.time <= 1)){
       rate = 2;
         interest = (i.principal * rate * i.time)/ 100;
       interestData.push({'principal': i.principal, 'rate' : rate,  'time': i.time, 'interest' : interest });
     } else {
       rate = 1;
       interest = (i.principal * rate * i.time)/ 100;
       interestData.push({'principal': i.principal, 'rate' : rate,  'time': i.time, 'interest' : interest });
     }
    console.log(interestData);
     return interestData;
   })
  
 }
 
 interestCalculator(data);

      </script>
    </body>
</html>