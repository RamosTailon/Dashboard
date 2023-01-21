import React from 'react';
import styled from 'styled-components';

const AddStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
        
    .form_task {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2em;
        font-size: 1.3em;
    }

    .select {
        margin-left: 15px;
        min-width: 120px;
        text-align: center;
        font-size: .85em;
    }

    .form_task input[type='submit'] {
        border-radius: 8px;
        background-color: ${props => props.theme.theme.button_color};
        color: #fff;
        border: none;
        min-width: 100px;
        width: 8rem;
        min-height: 2.5rem;
        cursor: pointer;
        font-size: 1.1em;
        font-weight: bold;
    }
`

export default AddStyle;


