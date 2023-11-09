import { createContext } from 'react';
import { ILoaderConsumer } from './types';


export const CLoader = createContext<ILoaderConsumer>({ loading: false, transition: false });