import PortViewer from '../../components/PortViewer'
import Overlay from '../../components/Overlay'

export default function Home() {
  return (
      <>
        <PortViewer model={"./Skyline"} />
        <Overlay />
        <div style={{ color: '#d3d3d3', position: 'absolute', bottom: 120, left: '50%', fontSize: '15px', maxWidth: '500px', marginLeft: '-250px'}}>
            Every developer that is on the GitHub platform has a commit history chart showing the last year of commits in a color coded grid. It&apos;s a quick indication of the work you have put in over the last 365 days. GitHub decided it would be a great idea to make these charts into 3D where the taller the column the more commits were submitted that day. I help their dev team an or together a purpose flow where any developer can enter their username and print this model for themselves.
        </div>
      </>
  )
}