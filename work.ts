function add (a:number,b:number):number{
  let result = a + b;
  return result;
}

interface Truth {
  name : string;
  age : number;
  job : "추노";
}

function minam():Truth{
  let obj : Truth= {
    name : "신지윤",
    age : 25,
    job : "미덕"
  }
  return obj;
}