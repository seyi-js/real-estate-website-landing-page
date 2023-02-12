import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;500&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        transition: all .5s ease-in-out;
        
    }

    #root {
        margin: 0 auto;
    }

    body {
        background: #F5F5F5;
        font-family: 'Poppins', sans-serif;
        transition: all 1s ease-in;
    }
`;