import { breakpoints } from 'app/styles';

export type IBreakpoint = keyof typeof breakpoints;

export type IRuleset<T = string> = {
  [k in IBreakpoint]?: T;
};
