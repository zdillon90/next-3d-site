import PortViewer from '../../components/PortViewer'
import Overlay from '../../components/Overlay'


export default function Home() {
  return (
      <>
        <PortViewer model={"./Tablet"} />
        <Overlay />
        <div style={{ color: '#d3d3d3', position: 'absolute', bottom: 120, left: '50%', fontSize: '15px', maxWidth: '500px', marginLeft: '-250px'}}>
          The internal tool used to track 3D prints in the order management system was cumbersome, involving a lot of searching and clicking. I decided to match a model&apos;s digital status to the name of the physical location.. To accomplish this, the user interface needed to be updated. Using the internal API, I built a React App to drag and drop groups of production orders with models from one status to the next. This vastly improved the ease of updating models to the proper status and tracking progress. I was also able to adapt this to multiple process flows at once simplifying the updating process even further.
        </div>
      </>
  )
}