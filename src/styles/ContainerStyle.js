import React from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div`
    min-height: 67vh;
    padding: 1em 2em 3em;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.theme.body_primary};
    color:${props => props.theme.theme.font_color};
`

export default ContainerStyle