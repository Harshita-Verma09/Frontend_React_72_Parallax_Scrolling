import Parallax from "./component/Parallax"
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {

  return (
    <>
      <ParallaxProvider>
        <div className="bg-black text-white min-h-screen"> <Parallax /> </div>
      </ParallaxProvider>
    </>
  )
}

export default App
