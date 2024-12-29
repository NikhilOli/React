import Sidebar from "./components/Sidebar"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Projects from "./pages/Projects"
import Services from "./pages/Services"


const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="overflow-y-scroll p-[1rem] md:p-[4rem] md:m-8 flex-1">
      <About />
      <Services />
      <Projects />
      <Contacts />
      </div>
    </div>
  )
}

export default App