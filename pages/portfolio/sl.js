import PortViewer from '../../components/PortViewer'
import Overlay from '../../components/Overlay'

export default function Home() {
  return (
      <>
        <PortViewer model={"./Skyline"} />
        <Overlay />
        <div style={{ color: '#d3d3d3', position: 'absolute', bottom: 120, left: '50%', fontSize: '15px', maxWidth: '500px', marginLeft: '-250px'}}>
          Every developer using the GitHub platform has a commit history chart showing the last year of commits in a color coded grid. It&apos;s a quick visualization  of the work you have put in over the last 365 days. GitHub wanted to make 3D models of these charts, with varying column heights to indicate the number of commits per day. I partnered with their internal developers to create a system where any user on GitHub could print their own model using their username and password to access their history. Creating a unique gift for their community.
        </div>
      </>
  )
}