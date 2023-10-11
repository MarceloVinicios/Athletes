import styled from "styled-components";

export const PostInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  position: relative;
  width: 95%;
  input {
    padding: 8px 95px 8px 20px;
    border: 1px solid #25252590;
    border-radius: 25px;
    background-color: #c4c4c43e;
    color: black;
  }
  .publish-text {
    position: absolute;
    right: 20px;
    top: 8px;
    color: blue;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const CommentList = styled.li`
  display: flex;
  align-items: start;
  gap: 10px;
`;

export const ContainerComments = styled.div`
  margin: 0 auto;
  width: 98%;
  border-top: 1px solid #cec8c89d;
`;

export const ContainerComment = styled.li`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
`;

export const Comment = styled.p`
  color: #000000;
`;

export const InputCommentPost = styled.input`
  display: block;
`;

export const NoContent = styled.p`
  color: #000000;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px;
`;
