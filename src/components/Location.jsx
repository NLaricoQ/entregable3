import Proptypes from "prop-types";
const Location = ({ location }) => {
  return (
    <>
      <h2>{location.name}</h2>
      <ul>
        <li>
          <b>Type: </b>
          {location.type}
        </li>
        <li>
          <b>Dimension: </b>
          {location.dimension}
        </li>
        <li>
          <b>Population: </b>
          {location.residents.length}
        </li>
      </ul>
    </>
  );
};

Location.propTypes = {
  location: Proptypes.shape({
    name: Proptypes.string.isRequired,
    type: Proptypes.string.isRequired,
    dimension: Proptypes.string.isRequired,
    residents: Proptypes.array.isRequired,
  }),
};

export default Location;
