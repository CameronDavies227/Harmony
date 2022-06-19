import './index.css';
import React from 'react';
import ReactDOM from "react-dom";
import { App } from "./App";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
 
  const appElement = document.getElementById("app")
  ReactDOM.render(<App />, appElement)

  serviceWorkerRegistration.register();
