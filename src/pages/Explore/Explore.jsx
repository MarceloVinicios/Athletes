import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, ContainerCategory, Category } from "./StyledExplore";
import { GetAllCategory } from "../../api/CategoryApi";
import useFetch from "../../hooks/useFetch";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../../components/helper/LoadingContainer";

const StyledContainerCategory = styled(ContainerCategory)`
  background-size: cover;
  background-position: center;
  color: white;
  padding: 20px;
`;

const Explore = () => {
  const [categoriesApi, setCategoriesApi] = useState([]);
  const { loading, error, request } = useFetch();
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    async function getAllCategoryOfApi() {
      const token = await getAccessTokenSilently();
      const { url, options } = GetAllCategory(token);
      const { response, json } = await request(url, options);
      if (response.status === 200) {
        setCategoriesApi(json.categoriesData);
      }
    }
    getAllCategoryOfApi();
  }, [getAccessTokenSilently, request]);


  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      {categoriesApi.map((category) => (
        <a href="/" key={category.id}>
          <StyledContainerCategory
            style={{ backgroundImage: `url(${category.picture})` }}
          >
            <Category>{category.category}</Category>
          </StyledContainerCategory>
        </a>
      ))}
    </Container>
  );
};

export default Explore;
