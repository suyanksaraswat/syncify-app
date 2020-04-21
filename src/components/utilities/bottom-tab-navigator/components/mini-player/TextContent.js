import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const TextContentWrapper = styled(View)`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('58%')}px;
  padding-horizontal: ${({ theme }) => theme.metrics.smallSize}px;
  justify-content: center;
  height: 100%;
`;

const AuthorText = styled(Text)`
  font-family: CircularStd-Medium;
  color: ${({ theme }) => theme.colors.subtext};
  font-size: ${({ theme }) => theme.metrics.mediumSize * 1.2}px;
`;

const TitleText = styled(Text)`
  margin-bottom: ${({ theme }) => theme.metrics.extraSmallSize}px;
  font-family: CircularStd-Bold;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.metrics.largeSize}px;
`;

const TextContent = ({ author, title }) => (
  <TextContentWrapper>
    <TitleText>{title}</TitleText>
    <AuthorText
      numberOfLines={1}
    >
      {author}
    </AuthorText>
  </TextContentWrapper>
);

export default TextContent;
