// App.js
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./routing/Routers";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./compontent/Header";
import { LanguageProvider } from "./compontent/LanguageContext"; 

const App = () => {
  const [language, setLanguage] = useState("ltr"); 

  return (
    <Provider store={store}>
      <LanguageProvider value={{ language, setLanguage }}>
        {" "}
       
        <Router>
          <div className="container">
            <div dir={language}>
              <Header />
              <Routers />
            </div>
          </div>
        </Router>
      </LanguageProvider>
    </Provider>
  );
};

export default App;
