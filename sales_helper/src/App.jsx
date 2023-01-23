import { Route, Routes } from 'react-router-dom';

import styles from "./style";
import { Navbar, Footer, RequireAuth } from "./components";
import { Default, Offers, LoginPage, Page404, UnauthorizedPage, Employees } from "./pages";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary min-h-screen ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Default />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="unauthorized" element={<UnauthorizedPage />}></Route>
          {/* Protected */}
          <Route element={<RequireAuth />}>
            <Route path="offers" element={<Offers />}></Route>
            <Route path="employees" element={<Employees />}></Route>
          </Route>
          {/* Unrecognized */}
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
