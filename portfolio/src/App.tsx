import Sidebar from "./components/Sidebar"
import About from "./pages/About"


const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="overflow-y-scroll p-[1rem] flex-1">

      <About />
      <About />
      <About />
      <About />
      <About />
      <About />
      <About />
      <About />
      </div>
    </div>
  )
}

export default App