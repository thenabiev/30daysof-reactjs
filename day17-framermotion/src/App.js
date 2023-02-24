import { useState } from "react";
import Main from "./components/Main";
import More from "./components/More";
import Navigation from "./components/Navigation";
import img from './assets/main.png'
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

function App() {
  const [details, setDetails]=useState(true);
  const image=[{id:1, image:img}]
  return (
    <div className="App">
      <Navigation details={details} setDetails={setDetails}/>
      <AnimateSharedLayout>
      <AnimatePresence>

      {
        details ? (
          <Main setDetails={setDetails} key='main' details={details} image={image} />
        ) : (
          <More setDetails={setDetails} key='more' image={image} />
        )
      }
      </AnimatePresence>

      </AnimateSharedLayout>
    </div>
  );
}

export default App;
