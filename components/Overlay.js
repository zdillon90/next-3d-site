import Link from 'next/link'

export default function Overlay() {
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
    </div>
    )
}