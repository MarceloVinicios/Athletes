import React, { useEffect, useState } from "react";
import PersonalData from "./Personal/PersonalData";
import ProfessionalData from "./Professional/ProfessionalData";
import useFetch from "../../hooks/useFetch";
import { useAuth0 } from "@auth0/auth0-react";
import { PostUser } from "../../api/UserApi";
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [formUserData, setFormUserData] = useState(null);
  const [formContatoData, setFormContatoData] = useState(null);
  const { loading, request } = useFetch();
  const { getAccessTokenSilently } = useAuth0();
  const [warning, setWarning] = useState(null);

  useEffect(() => {
    if (formUserData && formContatoData) {
      const saveUserAndAddress = async () => {
        try {
          const token = await getAccessTokenSilently();
          console.log(formUserData.picture)
          const { url, options } = PostUser(
            {
              user: {
                name: formUserData.name,
                picture: formUserData.picture,
                goal: formUserData.goal,
                category_id: 1,
              },
              address: {
                city: formContatoData.city,
                state: formContatoData.state,
                country: formContatoData.country,
              },
            },
            token
          );

          const { response } = await request(url, options);
          if (response.status === 201) {
            setWarning(null)
            return navigate('/feed');
          }

          if (response.status === 409) {
            setWarning("O usuário já existe!")
          }

          if (response.status === 500) {
            setWarning("Falha ao cadastrar usuário!")
          }
        } catch (error) {
          console.error("Erro ao salvar usuário e endereço");
        }
      };

      saveUserAndAddress();
    }
  }, [formContatoData, formUserData, getAccessTokenSilently, request, navigate]);

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
