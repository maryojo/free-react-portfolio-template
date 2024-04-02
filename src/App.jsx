// import { useState } from 'react'

import Sidebar from "./components/base-components/Sidebar";
import All from "./components/sections/All";

function App() {

  return (
    <div className="bg-white text-black dark:bg-[#080808] dark:text-[#CDCCCC]">
      {/* <div>Hiiii</div> */}
      <div className="md:h-screen relative md:flex">
      <Sidebar />
      <div className="w-full overflow-y-auto">
      <All/>
      </div>
      </div>
    </div>
  );
}

export default App;
