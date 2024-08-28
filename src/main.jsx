import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.css'

import { RouterProvider } from 'react-router-dom'
import router from './router/index'

import { Provider } from 'react-redux'
import store from './store/storeReducers'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Suspense>
  </React.StrictMode>
)
