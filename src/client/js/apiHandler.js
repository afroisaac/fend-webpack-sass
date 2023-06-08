const apiKey = '130ed56455ecea2e71298610442f8915&units=imperial';
/* Function to GET Web API Data*/
const pullWeatherData =  async (zip) => {
    const baseUrl =  'https://api.openweathermap.org/data/2.5/weather';
    const response = await fetch(`${baseUrl}?zip=${zip}&appid=${apiKey}`); 
    try{
        let result = await response.json();
        return result;
    }catch(error){
        console.log(error);
    }
}

export {pullWeatherData};
