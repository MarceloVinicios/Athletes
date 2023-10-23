import React, { useEffect, useState } from "react";
import PersonalData from "./Personal/PersonalData";
import ProfessionalData from "./Professional/ProfessionalData";
import useFetch from "../../hooks/useFetch";
import { useAuth0 } from "@auth0/auth0-react";
import { PostUser } from "../../api/UserApi";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [formUserData, setFormUserData] = useState(null);
  const [formContatoData, setFormContatoData] = useState(null);
  const { loading, request } = useFetch();
  const { getAccessTokenSilently } = useAuth0();
  const [warning, setWarning] = useState(null);

  useEffect(() => {
    const identificador = window.localStorage.getItem("identificador");
    if (identificador === "true") {
      navigate("/feed");
    }
  }, [navigate]);

  useEffect(() => {
    if (formUserData && formContatoData) {
      const saveUserAndAddress = async () => {
        try {
          const token = await getAccessTokenSilently();
          const formData = new FormData();
          formData.append("name", formUserData.name);
          formData.append("goal", formUserData.goal);
          formData.append("picture", formUserData.picture);
          formData.append("category_id", "1");
          formData.append("city", formContatoData.city);
          formData.append("state", formContatoData.state);
          formData.append("country", formContatoData.country);

          const { url, options } = PostUser(formData, token);
          const { response } = await request(url, options);
          if (response.status === 201) {
            setWarning(null);
            return navigate("/feed");
          }

          if (response.status === 409) {
            setWarning("O usuário já existe!");
          }

          if (response.status === 500) {
            setWarning("Falha ao cadastrar usuário!");
          }
        } catch (error) {
          console.error("Erro ao salvar usuário e endereço");
        }
      };

      saveUserAndAddress();
    }
  }, [
    formContatoData,
    formUserData,
    getAccessTokenSilently,
    request,
    navigate,
  ]);

  return (
    <div>
      {page === 1 && (
        <PersonalData
          setPage={setPage}
          formUserData={formUserData}
          setPersonalData={setFormUserData}
        />
      )}
      {page === 2 && (
        <ProfessionalData
          formUserData={formUserData}
          setFormContatoData={setFormContatoData}
          loading={loading}
          warning={warning}
        />
      )}
    </div>
  );
};

export default Register;
