import PortViewer from '../../components/PortViewer'
import Overlay from '../../components/Overlay'


export default function Home() {
  return (
      <>
        <PortViewer model={"./Tablet"} />
        <Overlay />
        <div style={{ color: '#d3d3d3', position: 'absolute', bottom: 120, left: '50%', fontSize: '15px', maxWidth: '500px', marginLeft: '-250px'}}>
          Moving 3D Printed Trays in our Order management system was quite cumbersome with a lot of searching and mouse clicks. I wanted to keep the physical location of the printed models accurately in the digital statuses they represented. This required a change to the User Interface. Using the internal API I built a React App  to drag and drop groups of production orders from one status to the next. This vastly improved the ease of updating models to the proper status. I was also able to adapt this to multiple process flows at once simplifying the updating process even further.
        </div>
      </>
  )
}