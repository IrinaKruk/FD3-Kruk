import React from 'react';


import Shop from './components/Shop/Shop';
import './components/Shop/Shop.css';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Shop tab="home" />);


