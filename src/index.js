import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import store from "./Redux/reduxStore";


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntierTree = (state) => {



    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={state} dispatch={state.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntierTree(store)

store.subscribe(() => {
    rerenderEntierTree(store)
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
