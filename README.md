
function reqListener() {
    const countryArr=JSON.parse(this.responseText)
    console.log(countryArr)
    for(let country of countryArr)
    console.table(country.name.common)
    console.log(countryArr.flags.png)
    console.log(countryArr.regions)
    console.log(countryArr.sub-regions)
  
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();

 QUESTION NO :1
let obj1 = {name:"person 1", age: 5};
let obj2 = {age: 5, name:"person1"}
console.log(areobjectsequal(obj1,obj2))
    
  
