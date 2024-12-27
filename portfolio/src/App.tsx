import Sidebar from "./components/Sidebar"
import About from "./pages/About"


const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="overflow-y-scroll p-[2rem] md:p-[4rem] md:m-8 flex-1">

      <About />
      <About />
      </div>
    </div>
  )
}

export default App