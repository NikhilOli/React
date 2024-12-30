import Sidebar from "./components/Sidebar"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Projects from "./pages/Projects"
import Services from "./pages/Services"


const App = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="md:overflow-y-scroll p-[2rem] md:p-[4rem] md:m-8 flex-1 scroll-smooth">
      <About />
      <Services />
      <Projects />
      <Contacts />
      </div>
    </div>
  )
}

export default App