import styled from 'styled-components';

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.3em;
    width: 300px;
    label {
        padding-left: 0.5em;
        padding-bottom: 0.1em;
        color: #666;
    }
    input {
        border: 2px solid #1797be;
        border-radius: 0.3em;
        height: 1.5em;
        padding: 0 0.5em;
    }
    input.incorrect-input {
        border-color: #ff000073;
    }
    .error-message {
        padding: 0.5em;
        background: #ff000040;
        margin-top: 0.1em;
        border-radius: 0.3em;
    }
`;
export default InputWrapper;