import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Works, Tech } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Contact />
        <div className="relative z-0"></div>
      </div>
    </BrowserRouter>
  )
}

export default App
