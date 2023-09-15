
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import GoogleMap from './component/GoogleMap/GoogleMap';

function App() {
  return (
    <div >
      <Header />
      <div style={{ marginTop: '20px',paddingLeft:"20px" }}>
        <Shop />
      </div>
      {/* <GoogleMap style={{justifyContent:'center'}}/> */}
    </div>
  );
}

export default App;
