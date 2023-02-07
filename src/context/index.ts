import { createContext } from 'react';
import { SectionsContextProps } from '../types/context/sections';


export const SectionsContext = createContext<SectionsContextProps | null>(null);
