import PortViewer from '../../components/PortViewer'
import Overlay from '../../components/Overlay'

export default function Home() {
  return (
      <>
        <PortViewer model={"./Angle"} />
        <Overlay />
        <div style={{ color: '#d3d3d3', position: 'absolute', bottom: 120, left: '50%', fontSize: '15px', maxWidth: '500px', marginLeft: '-250px'}}>
          Hero Forge was originally printing in a single color for their table top mini figures. They raised over 3 million to expand their platform into full color printing. We worked with them to find the perfect printing technology. But it wasn&apos;t a perfect fit from the start, we went through thousands of iterations until we ironed out the kinks over a 12 month period. My role as the sales engineer was critical to connecting the dots of the customer&apos;s wants to the possibility and meet expectations. Ultimately it&apos;s one of the most rewarding projects I&apos;ve been a part of. 
        </div>
      </>
  )
}
