import React, { FC } from 'react';
import { TouchableHighlightProps } from 'react-native';
import {
  CustomButtonText,
  CustomButtonWrapper,
  CustomButtonProps,
  CustomButtonTextProps
} from './Buttons.styles';

export const CustomButton: FC<IProps> = (props) => {
  const { children, color, ...restProps } = props;
  return (
    <CustomButtonWrapper underlayColor='#DDDDDD' {...restProps}>
      <CustomButtonText color={color}>{children}</CustomButtonText>
    </CustomButtonWrapper>
  );
};

interface IProps
  extends TouchableHighlightProps,
    CustomButtonProps,
    CustomButtonTextProps {}
