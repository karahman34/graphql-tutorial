import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <div className='App bg-gray-800 text-white min-h-screen'>
        <RouterProvider router={router()} />
      </div>
    </ApolloProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
