import { useState } from "react";

const CompanyInfo = ({ foundedYear }) => {
  const [countryName, setCountryName] = useState("USA");

  const handleChangeCountryName = (event) => {
    setCountryName(event.target.value);
  };

  return (
    <div>
      <h2>Company info!!!</h2>
      <h4>Bosch</h4>
      <p>Founded Year: {foundedYear}</p>

      <input
        type="text"
        placeholder="Enter Country Name"
        value={countryName}
        onChange={handleChangeCountryName}
      />
      <p>Please visit Bosch {countryName} Website!</p>
    </div>
  );
};

export default CompanyInfo;
