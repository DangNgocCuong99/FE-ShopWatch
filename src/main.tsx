import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';

import './index.css'
import App from './App'
import { store } from './stores/index';
import './locales/i18n'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store} >
      <App />
    </Provider>
)
