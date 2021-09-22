import React, { FC } from 'react';
import { CustomButtonText, CustomButtonWrapper } from './Buttons.styles';
import { TouchableHighlightProps } from 'react-native';

export const CustomButton: FC<IProps> = (props) => {
  const { children, ...restProps } = props;
  return (
    <CustomButtonWrapper underlayColor='#DDDDDD' {...restProps}>
      <CustomButtonText>{children}</CustomButtonText>
    </CustomButtonWrapper>
  );
};

interface IProps extends TouchableHighlightProps {}
