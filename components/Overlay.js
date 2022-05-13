import Link from 'next/link'

export default function Overlay() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
  
    today = mm + '/' + dd + '/' + yyyy;
    return (
      <div style={{ color: '#d3d3d3', position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
        <Link href="/" passHref>
          <a style={{ color: '#d3d3d3', position: 'absolute', top: 40, left: 40, fontSize: '20px' }}>
            ZHD
          </a>
        </Link>
        <Link href="/ama" passHref>
          <a style={{ color: '#d3d3d3', position: 'absolute', top: 40, right: 40, fontSize: '20px' }}>
            AMA
          </a>
        </Link>
        <Link href="/portfolio/hf" passHref>
          <a style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '20px' }}>
            Hero Forge
          </a>
        </Link>
        <Link href="/portfolio/ck" passHref>
          <a style={{ position: 'absolute', bottom: 40, left: 300, fontSize: '20px' }}>
            Cyber Kongz
          </a>
        </Link>
        <Link href="/portfolio/sl" passHref>
          <a style={{ position: 'absolute', bottom: 40, right: 300, fontSize: '20px' }}>
            Skyline
          </a>
        </Link>
        <Link href="/portfolio/mt" passHref>
          <a style={{ color: '#d3d3d3', position: 'absolute', bottom: 40, right: 40, fontSize: '20px' }}>
            Move Tool
          </a>
        </Link>
    </div>
    )
}