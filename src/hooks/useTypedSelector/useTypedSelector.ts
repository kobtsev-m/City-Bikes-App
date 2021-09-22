import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { store } from 'app/store';

export const useTypedSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
