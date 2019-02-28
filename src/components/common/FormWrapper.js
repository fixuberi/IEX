import styled from 'styled-components';

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        font-size: 2em;
        padding: 0.5em;
    }
    form {
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;

        input[type="submit"] {
            padding:0.3em 1.2em;
            margin:0.3em 0 0.3em 0;
            border-radius:2em;
            border: none;    
            color:#FFFFFF;
            background-color:#4eb5f1;
            text-align:center;
            transition: all 0.2s;
        }
        input[type="submit"]:hover{
            background-color:#4095c6;
        }
        input[type="submit"]:focus {
            outline: none;
        }
    }
`;
export default FormWrapper;
