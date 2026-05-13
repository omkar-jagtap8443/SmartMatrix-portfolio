import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "./components";

const Feedbacks = lazy(() => import("./components/Feedbacks"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Suspense fallback={null}>
          <Feedbacks />
        </Suspense>
        <div className='relative z-0'>
          <Contact />
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
