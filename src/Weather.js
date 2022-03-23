import { useEffect, useState } from "react";
import "./Weather.css"
let APIKey = "3fbb2b31fd3e77c536be64abc677a4d1";
let URL = "https://api.openweathermap.org/data/2.5/forecast";
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let currdateFormer = (d) => {
let day=days[d.getDay()]
let date=d.getDate()
let month=months[d.getMonth()]
let year=d.getFullYear()
return `${day},${date} ${month}, ${year}`
};
let Weather = (props) => {
  let [forecastData, setData] = useState();
  useEffect(() => {
    if(props.city!==""){
      getDetails();
    }
  }, [props.city]);
  let getDetails = () => {
    const finalUrl = `${URL}?&q=${props.city}&APPID=${APIKey}&units=metric`;
    fetch(finalUrl)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setData(data);
      });
  };
return(<>
{(typeof forecastData!=='undefined')?<>
<div className="city-name">
{forecastData.city.name},{forecastData.city.country}
              </div>
          <div className="date">
          {currdateFormer(new Date())}
              </div>
         <div className="temp">
         {Math.round(forecastData.list[0].main.temp)}&deg;C
             </div>
             <div className="weather-type">
             {forecastData.list[0].weather[0].main}
                 </div>
</>:("")
}
</>)
};
export default Weather;


let FiveDay=(props)=>{
  let [showData, setShowData] = useState(Array(5).fill({Day:"",Temp:""}));
  let [forecastData, setData] = useState();
  useEffect(() => {
    if(props.city!==""){
      getDetails();
    }
   
  }, [props.city]);
  let getDetails = () => {
    const finalUrl = `${URL}?&q=${props.city}&APPID=${APIKey}&units=metric`;
    fetch(finalUrl)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setData(data)
        setFiveDays(data);
      });
  };
  let setFiveDays=(data)=>{
    let today=new Date().getDay();
    setShowData([{Day:days[(today+1)%days.length],Temp:data.list[7].main.temp},
    {Day:days[(today+2)%days.length],Temp:data.list[10].main.temp},
    {Day:days[(today+3)%days.length],Temp:data.list[13].main.temp},
    {Day:days[(today+4)%days.length],Temp:data.list[16].main.temp},
    {Day:days[(today+5)%days.length],Temp:data.list[19].main.temp}])
  }
  return(<>
{(typeof forecastData!=='undefined')?<>
<div className="five-day">
{showData.map((el,id)=><><div key={el.Day}>{el.Day}</div><div key={id}>{el.Temp}</div></>)}

</div>
</>:("")
}
  </>)
}
export {FiveDay};