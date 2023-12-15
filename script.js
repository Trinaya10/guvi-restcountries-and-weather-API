fetch("https://restcountries.com/v3.1/all",{method:'GET'})
.then(req => req.json())
.then(data => createData(data))
.then(data => weatherData(weather))
.catch(error => console.log(error))

function createData(data)
{
    const [country1,country2,country3]=["Afghanisthan","Aland Islands","Albania"]
    console.log(country1.capital)
    console.log()
}