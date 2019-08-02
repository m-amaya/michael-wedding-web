import React from 'react';
import { constants } from './constants';
import { theme } from './theme';

export const style = { constants, theme };

export const StyleContext = React.createContext(style);
export const useStyle = () => React.useContext(StyleContext);
