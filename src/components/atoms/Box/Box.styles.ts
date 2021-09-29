import styled from 'styled-components/native';
import { media, mediaProperty, IBreakpoint, IRuleset } from 'app/styles';

type Align = 'center' | 'start' | 'end' | 'between' | 'around';
type FlexDir = 'row' | 'column' | 'row-reverse' | 'column-reverse';

interface BoxProps {
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width?: number;
  height?: number;
  flex?: boolean;
  flexWrap?: boolean;
  flexDir?: FlexDir | IRuleset<FlexDir>;
  align?: Align | IRuleset<Align>;
  justify?: Align | IRuleset<Align>;
  hideAt?: IBreakpoint;
  showAt?: IBreakpoint;
  p?: number | IRuleset<number>;
  pt?: number | IRuleset<number>;
  pb?: number | IRuleset<number>;
  pr?: number | IRuleset<number>;
  pl?: number | IRuleset<number>;
  m?: number | IRuleset<number>;
  mt?: number | IRuleset<number>;
  mb?: number | IRuleset<number>;
  mr?: number | IRuleset<number>;
  ml?: number | IRuleset<number>;
}

export const Box = styled.View<BoxProps>`
  ${({ position }) => position && `position: ${position}`};
  ${({ top }) => top && `top: ${top}`};
  ${({ right }) => right && `right: ${right}`};
  ${({ bottom }) => bottom && `bottom: ${bottom}`};
  ${({ left }) => left && `left: ${left}`};
  ${({ right }) => right === '50%' && 'transform: translateX(-50%)'};
  ${({ width }) => width && `width: ${width}%`};
  ${({ height }) => height && `height: ${height}%`};
  display: ${({ hideAt }) => (hideAt ? 'none' : 'flex')};
  ${({ flexWrap }) => flexWrap && `flex-wrap: wrap`};
  ${({ flexDir }) => flexDir && `flex-direction: ${flexDir}`};
  ${({ hideAt }) => hideAt && media(hideAt, 'display: flex')};
  ${({ showAt }) => showAt && media(showAt, 'display: none')};
  ${({ align }) => mediaProperty('align-items', align)};
  ${({ justify }) => mediaProperty('justify-content', justify)};
  ${({ p }) => mediaProperty('padding', p)};
  ${({ pt }) => mediaProperty('padding-top', pt)};
  ${({ pb }) => mediaProperty('padding-bottom', pb)};
  ${({ pr }) => mediaProperty('padding-right', pr)};
  ${({ pl }) => mediaProperty('padding-left', pl)};
  ${({ m }) => mediaProperty('margin', m)};
  ${({ mt }) => mediaProperty('margin-top', mt)};
  ${({ mb }) => mediaProperty('margin-bottom', mb)};
  ${({ mr }) => mediaProperty('margin-right', mr)};
  ${({ ml }) => mediaProperty('margin-left', ml)};
`;
