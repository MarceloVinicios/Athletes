// Em Register.js
import React, { useState } from "react";
import PersonalData from "./Personal/PersonalData";
import ProfessionalData from "./Professional/ProfessionalData";

const Register = () => {
  const [page, setPage] = useState(1);
  const [formUserData, setFormUserData] = useState(null);

  return (
    <div>
      {page === 1 && (
        <PersonalData setPage={setPage} formUserData={formUserData} setPersonalData={setFormUserData} />
      )}
      {page === 2 && <ProfessionalData formUserData={formUserData} />}
    </div>
  );
};

export default Register;
