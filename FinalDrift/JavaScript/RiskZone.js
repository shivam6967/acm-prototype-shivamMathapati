function getData(){
  fetch('http://localhost:8000/result')
  .then((res)=>res.json())
  .then((data)=>{
    // console.log(response);
    for(let i =0 ; i<data.dise.length;i++){
      if(data.dise[i] === "Dengue"){
        document.getElementById('city1').innerHTML = data.dist[i];
      } 
      else if(data.dise[i] === "malaria"){
        document.getElementById('city2').innerHTML = data.dist[i];
      } 
      else if(data.dise[i] === "Cough"){
        document.getElementById('city3').innerHTML = data.dist[i];
      } 
      else if(data.dise[i] === "fever"){
        document.getElementById('city4').innerHTML = data.dist[i];
      } 
    }
    if(document.getElementById('city1').innerHTML===""){
      document.getElementById('break1').innerHTML='No Breakout'
    }
    if(document.getElementById('city2').innerHTML===""){
      document.getElementById('break2').innerHTML='No Breakout'
    }
    if(document.getElementById('city3').innerHTML===""){
      document.getElementById('break3').innerHTML='No Breakout'
    }
    if(document.getElementById('city4').innerHTML===""){
      document.getElementById('break4').innerHTML='No Breakout'
    }
  })
}
getData();

