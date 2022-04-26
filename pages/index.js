import Head from 'next/head'
import Image from 'next/image'
import Viewer from '../components/viewer'
import styles from '../styles/Home.module.css'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a href="https://zachdillon.dev/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        zachdillon.dev
        <br />
        @zachhdillon
      </a>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>ZHD</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>07/02/2022</div>
    </div>
  )
}

export default function Home() {
  return (
      <>
        <Viewer className="Bg"/>
        <Overlay />
      </>
  )
}
