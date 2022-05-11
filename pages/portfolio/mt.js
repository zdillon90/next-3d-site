import PortViewer from '../../components/PortViewer'
import Overlay from '../../components/Overlay'

// TODO Put this on a Tablet made in Spline

export default function Home() {
  return (
      <>
        <PortViewer model={"./Mac"} />
        <Overlay />
        <div style={{ color: '#d3d3d3', position: 'absolute', bottom: 120, left: '50%', fontSize: '15px', maxWidth: '500px', marginLeft: '-250px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
      </>
  )
}