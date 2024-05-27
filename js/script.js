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
  
