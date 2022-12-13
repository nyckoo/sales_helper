import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import styles from "./style";
import { Default, Page404 } from "./pages"
import { Navbar, Footer } from "./components";

const App = () => (
  <BrowserRouter>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Default />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  </BrowserRouter>
);

export default App;