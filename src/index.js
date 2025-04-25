import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import Layout from './layout'
import Account from './pages/account';
import Trending from './pages/trending';
import Bookmarks from './pages/bookmarks';

const PUBLISHABLE_KEY = "pk_test_bWFueS10YWRwb2xlLTUwLmNsZXJrLmFjY291bnRzLmRldiQ"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/account' element={<Account />} />
            <Route path='/trending' element={<Trending />} />
            <Route path='/bookmarked' element={<Bookmarks />} />
          </Routes>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
