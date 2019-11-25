import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const AppText = styled.div`
  font-size: ${props => props.size || '12'}px;
  font-weight: ${props => theme[props.weight] || 'normal'};
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: 0.3px;
  color: ${props => theme[props.color] || theme.secondary};
  text-align: left;
`;

function Text({ text, ...rest }) {
  return <AppText {...rest}>{text}</AppText>;
}

export default Text;
