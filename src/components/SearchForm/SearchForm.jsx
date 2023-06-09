import { useState } from "react";
const SearchForm = ({ oeMeEstoyEnviando }) => {
  const [searchLocation, setSearchLocation] = useState("");
  const [errorSearchLocation, setErrorSearchLocation] = useState("");
  const handleChange = (e) => {
    const newValue = e.target.value;
    //Valida que desde el principio hasta el final del string hayan solo numeros
    //if (!/^\d$/.test(newValue)) {
    if (newValue === "") {
      setErrorSearchLocation("");
    } else if (isNaN(Number(newValue))) {
      setErrorSearchLocation("El id debe ser un número");
    } else if (Number(newValue) < 1) {
      setErrorSearchLocation("El menor id existente es 1");
    } else if (Number(newValue) > 126) {
      setErrorSearchLocation("El id máximo existente es 126");
    } else {
      setErrorSearchLocation("");
    }
    setSearchLocation(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (errorSearchLocation) return;
    oeMeEstoyEnviando(searchLocation);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchLocation} onChange={handleChange} />
      <p style={{ color: "red" }} role="alert">
        {errorSearchLocation}
      </p>

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
