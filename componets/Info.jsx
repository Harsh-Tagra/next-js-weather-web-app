import Data from "./Data";
const Info = (props) => {
  const api = props.Api;

  const Windspeed = api?.wind.speed;
  const sunr = api?.sys.sunrise;
  const sunsuns = api?.sys.sunset;
  const deg = api?.wind.deg;

  const humidity = api?.main.humidity;
  const visibility = api?.visibility;
 
  const sunset = new Date(sunsuns * 1000).toLocaleTimeString();
  const sunrise = new Date(sunr * 1000).toLocaleTimeString();

  var d2d = require("degrees-to-direction");

  return (
    <>
      <div className="row">
        <Data text="Humidity" value={`${humidity} %`} image="/Humidity.png" />
        <Data
          text="Windspeed"
          value={`${Windspeed} m/s`}
          image="/Wind speed.png"
        />
      </div>

      <div className="row">
        <Data
          text="Wind direction"
          value={d2d(deg)}
          image="/Wind direction.png"
        />
        <Data
          text="Visibility"
          value={`${visibility / 1000} km`}
          image="/Visibility.png"
        />
      </div>
      <div className="row">
        <Data text="Sunrise" value={sunrise} image="/Sunrise.png" />{" "}
        <Data text="Sunset" value={sunset} image="/Sunset.png" />
      </div>
    </>
  );
};
export default Info;
