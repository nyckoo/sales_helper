import { Route, Routes } from 'react-router-dom';

import styles from "./style";
import { Navbar, Footer } from "./components";
import { Default, Dashboard, Page404 } from "./pages";

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
          <Route path="/" element={<Default />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
