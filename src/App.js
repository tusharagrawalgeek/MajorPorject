// import logo from './logo.svg';
import './App.css';
import Starter from './Starter.jsx';
import SideBar  from './SideBar';
function App() {
  return (
    <>
    <div style={{
      background:" yellow",
      fontFamily:"Source Sans Pro"
      }}>
      <div style={{
        width:"20%",
        display:"inline-block"}}>
        <SideBar/>
      </div>
      <div style={{
        width:"80%",
        background:"#141A28",
        display:"inline-block"}}>
          coding
      </div>
    </div>
    
    </>
  );
}
export default App;
