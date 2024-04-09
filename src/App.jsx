import { useState } from 'react'

import Sidebar from "./components/base-components/Sidebar";
import All from "./components/sections/All";

function App() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white text-black dark:bg-[#080808] dark:text-[#CDCCCC]">
      {/* <div>Hiiii</div> */}
      <div className="min-h-screen md:h-screen relative md:flex">
      <div onClick={handleToggleMenu} className='md:hidden'>Click</div>
        <Sidebar isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>
        <div className="w-full overflow-y-auto">
          <All />
        </div>
      </div>
    </div>
  );
}

export default App;
