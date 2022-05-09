import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PortViewer from '../../components/PortViewer'
// import styles from '../styles/Home.module.css'

function Overlay() {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  return (
    <div style={{ color: '#d3d3d3', position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a href="https://zachdillon.dev/" style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '15px' }}>
        zachdillon.dev
        <br />
        @zachhdillon
      </a>
      <Link href="/" passHref>
        <a style={{ color: '#d3d3d3', position: 'absolute', top: 40, left: 40, fontSize: '15px' }}>ZHD</a>
      </Link>
      <div style={{ color: '#d3d3d3', position: 'absolute', bottom: 40, right: 40, fontSize: '15px' }}>{today}</div>
      <Link href="/ama" passHref>
        <a style={{ color: '#d3d3d3', position: 'absolute', top: 40, right: 40, fontSize: '15px' }}>AMA</a>
      </Link>
      <div style={{ color: '#d3d3d3', position: 'absolute', bottom: 40, left: '50%', fontSize: '15px', maxWidth: '500px', marginLeft: '-250px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
    </div>
  )
}

export default function Home() {
  return (
      <>
        <PortViewer />
        <Overlay />
      </>
  )
}
