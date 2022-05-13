import PortViewer from '../../components/PortViewer'
import Overlay from '../../components/Overlay'

export default function Home() {
  return (
      <>
        <PortViewer model={"./Kong"} />
        <Overlay />
        <div style={{ color: '#d3d3d3', position: 'absolute', bottom: 120, left: '50%', fontSize: '15px', maxWidth: '500px', marginLeft: '-250px'}}>
          CyberKongz is one of the top NFT groups out there. They have a couple of variants of their digital assets. One of them is a voxelized figure like the one shown above. We worked with the group to implement an API integration into our site where anyone who owned that digital asset would be able to click one button and print it in a high definition full color material. I also helped them manufacture an 8 foot tall version of this model for their events. 
        </div>
      </>
  )
}