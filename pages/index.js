import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import Nav from '../components/Navbar'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Experiance from '../components/Experiance'
import Seo from '../components/Seo'


export default function Home() {
  return (
    <>
      <Seo />
      <main className="bg-background-color">
        <Nav />
        <Hero />
        <Experiance />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
