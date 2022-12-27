import { Route, Routes } from 'react-router-dom';

import styles from "./style";
import { Navbar, Footer, RequireAuth } from "./components";
import { Default, Dashboard, LoginPage, Page404 } from "./pages";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div> */}
    <div className={`bg-primary min-h-screen ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Default />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          {/* Protected */}
          {/* <Route element={<RequireAuth />}> */}
          <Route path="/dashboard" element={<Dashboard />}></Route>
          {/* </Route> */}
          {/* Unrecognized */}
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
