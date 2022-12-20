import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import Nav from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Niamh Gowran's Portfolio Site</title>
        <meta name="description" content="Niamh Gowran's Portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-b from-emerald-200 to-emerald-400">
        <Nav />
        <p>Hi there</p>

      </main>
    </>
  )
}
