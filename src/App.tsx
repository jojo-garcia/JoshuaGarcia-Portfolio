import {Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Pages/Projects'
import Skills from './Components/Skills'
import EntryCard from './Components/EntryCard'
import NewEntryForm from './Components/NewEntryForm'
import PageNotFound from './Components/404Page'

export default function App() {
    return(
        <div id="app-root" className="portfolio" data-theme="josh-devlog">
        <div className="bg-particles" aria-hidden="true">
            <div className="particle" />
            <div className="particle" />
            <div className="particle" />
            <div className="particle" />
            <div className="particle" />
        </div>
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Header" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/EntryCard" element={<EntryCard/>} />
            <Route path="/Projects" element={<Projects/>} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/NewEntryForm" element={<NewEntryForm />} />
            <Route path="/404Page" element={<PageNotFound />} />
        </Routes>
        </div>
    )
}