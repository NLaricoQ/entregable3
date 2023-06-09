import { useEffect } from "react";
import "./App.css";
import { getLocationById } from "./services/getLocationById";
import { useState } from "react";
import { getRandomNumber } from "./utils/getRandomNumber";
import Location from "./components/Location";
import Loader from "./components/Loader/Loader";
import ResidentList from "./components/ResidentList/ResidentList";
import SearchForm from "./components/SearchForm/SearchForm";

//El valor de un input no puede ser ni null ni undefined
function App() {
  const [location, setLocation] = useState(null);

  const handleOeMeEstoyEnviando = async (dataId) => {
    let locationInfo;
    if (!dataId) {
      const randomId = getRandomNumber(1, 126);
      locationInfo = await getLocationById(randomId);
    } else {
      locationInfo = await getLocationById(dataId);
    }
    setLocation(locationInfo);
  };
  useEffect(() => {
    const loadLocation = async () => {
      const randomId = getRandomNumber(1, 126);
      const locationInfo = await getLocationById(randomId);
      setLocation(locationInfo);
    };
    loadLocation();
  }, []);
  return (
    <>
      <h1>Rick and Morty</h1>
      <SearchForm oeMeEstoyEnviando={handleOeMeEstoyEnviando} />
      {location ? <Location location={location} /> : <Loader />}
      <h2>Residents</h2>

      <ResidentList residents={location?.residents} />
    </>
  );
}

export default App;
