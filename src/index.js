import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import preset from '@rebass/preset';
import {QueryClientProvider, QueryClient} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import './index.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import App from './App';


const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
  <ReactQueryDevtools initialIsOpen={false} />
  <ThemeProvider theme={preset}>
  <Router>
    <App />
    </Router>
    </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

