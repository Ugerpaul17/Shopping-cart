import styled from 'styled-components';



export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 80%;
  border-radius: 20px;
  height: 80%;
  

  button {
      border-radius: 0 0 20px 20px;
      background-color: #3F51B5;
  }

  img {
      max-height: 70vh;
      max-width: 40vh;
      object-fit: cover; 
      border-radius: 20px 20px 0 0;
  }

  div {
      font-family: Arial, Helvetica, sans-serif;
      padding: 1rem;
      height: 100%;  
  }

`; 