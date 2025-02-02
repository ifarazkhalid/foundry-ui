import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { color, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { FoundryProvider } from '../../context';
import Text from '../Text';
import Card from '../Card';
import Button from '../Button';
import colorsEnum from '../../enums/colors';

const StyledTextContainer = styled(Text.Container)`
  margin-bottom: 1rem;
`;
const StyledCardContainer = styled(Card.Container)`
  margin-bottom: 1rem;
`;
const fontFamilyOptions = {
  Arial: 'Arial,Roboto,sans-serif',
  'Times New Roman': '"Times New Roman",Times,serif',
  Monospace: '"Lucida Console",Courier,monospace',
  unset: 'unset',
};

storiesOf('Global styles', module).add('Example', () => {
  const fontFamily = select(
    'font-family',
    ['Arial', 'Times New Roman', 'Monospace', 'unset'],
    'Arial',
  );
  const primary = color('primary', colorsEnum.primary);
  const grayDark = color('grayDark', colorsEnum.grayDark);
  const globalStyles = `
    font-family: ${fontFamilyOptions[fontFamily]};
  `;
  const colors = {
    primary,
    grayDark,
  };
  return (
    <FoundryProvider value={{ globalStyles, colors }}>
      <Text StyledContainer={StyledTextContainer}>Hello!</Text>
      <Card StyledContainer={StyledCardContainer} elevation={0} header="Title">
        These components all have a global set of styles applied to them through React's Context
        API.
      </Card>
      <Button onClick={action('click button')}>Example button</Button>
    </FoundryProvider>
  );
});
