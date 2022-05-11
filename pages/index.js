import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Viewer from '../components/Viewer'
import Overlay from '../components/Overlay'
import styles from '../styles/Home.module.css'

// TODO Place a Model of a Black Hole in the center

export default function Home() {
  return (
      <>
        <Viewer />
        <Overlay />
      </>
  )
}
