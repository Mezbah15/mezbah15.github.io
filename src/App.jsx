/* rafce tab */
import React from 'react'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import About from './Components/about/About'
import Experience from './Components/experience/Experience'
import Services from './Components/services/Services'
import Portfolio from './Components/portfolio/Portfolio'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
import CaseStudy from './Components/portfolio/CaseStudy'
import ScrollToTop from './ScrollToTop'
import SocialResell from './Components/socialresell/Socialresell'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
        <BrowserRouter>
        <ScrollToTop />
  <Routes>
    <Route
        path="/" element={
        <>
        <Header/>
        <Nav/>
        <Experience/>
        <Services/>
        <SocialResell />
        <Portfolio/>
        <About/>
        <Contact/>
        <Footer/>
        </> } />
    {/* Case Studies */}
    <Route
      path="/case-studies/:slug"
      element={<CaseStudy />}
    />

  </Routes>
</BrowserRouter>
  )
}
export default App