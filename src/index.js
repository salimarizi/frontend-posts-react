import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './store'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//pages
import HomePage from './pages/Home';
import BlogPage from './pages/Blog';
import BlogCreatePage from './pages/Blog/Create';
import AuthorPage from './pages/Author';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/posts/create" element={<BlogCreatePage />}/>
        <Route path="/posts/:postId" element={<BlogPage />}/>
        <Route path="/authors/:userId" element={<AuthorPage />}/>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
