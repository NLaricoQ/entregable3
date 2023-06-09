import PropTypes from "prop-types";
import ResidentCard from "../ResidentCard/ResidentCard";
import { useState } from "react";
const ResidentList = ({ residents = [] }) => {
  const [quantityPagination, setQuantityPagination] = useState(6);
  const [numberPage, setNumberPage] = useState(1);
  const lowerLimit = quantityPagination * (numberPage - 1);
  const upperLimit = quantityPagination * numberPage - 1;
  const residentsSlice = residents.slice(lowerLimit, upperLimit + 1);

  return (
    <>
      {!residentsSlice.length && <p>No hay residentes en esta ubicación</p>}
      {Boolean(residentsSlice.length) && (
        <ul>
          {residentsSlice.map((residentUrl) => (
            <li key={residentUrl}>
              <ResidentCard url={residentUrl} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
ResidentList.propTypes = {
  residents: PropTypes.array.isRequired,
};

export default ResidentList;
