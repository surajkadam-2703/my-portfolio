import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Introduction from './pages/Introduction';
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import SkillsTools from './pages/SkillsTools';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Layout from './component/Layout';
import SingleProject from './pages/SingleProject';

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route element={<Layout/>}>
                        <Route path='/' element={<Introduction></Introduction>}></Route>
                        {/* <Route path='/about' element={<AboutMe></AboutMe>}></Route> */}
                        <Route path='/projects' element={<Projects></Projects>}></Route>
                        {/* <Route path='/projects/:id' element={<SingleProject/>}></Route> */}
                        <Route path='/skills-tools' element={<SkillsTools />}></Route>
                        <Route path='/experience' element={<Experience />}></Route>
                        <Route path='/education' element={<Education />}></Route>
                        <Route path='/contact' element={<Contact />}></Route>
                    </Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;