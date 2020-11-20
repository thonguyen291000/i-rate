import styled from 'styled-components';

const StyleBanner = styled.header`
    min-height: 40vh;
    background: url(${props => props.img}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default StyleBanner;