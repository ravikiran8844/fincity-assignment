import Image from 'next/image'
import styles from './page.module.css'
import AddProject from './components/AddProject'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <AddProject/>
      <Projects/>
    </main>
  )
}
