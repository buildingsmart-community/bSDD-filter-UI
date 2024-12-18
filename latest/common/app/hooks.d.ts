import { TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from './store';
export declare const useAppDispatch: () => AppDispatch;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
