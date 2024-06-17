import logo from './logo.svg';
import './App.css';
import m from '../src/assets/m.png'
import arrow from '../src/assets/arrow.PNG'
import I1 from '../src/assets/1.PNG'

// import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className='container'>
          <nav >
            <div style={{ display: 'flex' }}>
              <img src={m} height={"20px"} style={{ marginRight: "5px" }}></img>
              MITHILESHKUMAAR
            </div>
            <div className='nav-list'>
              <div>
                Home
              </div>
              <div>
                About
              </div>
              <div>
                Services
              </div>
              <div>
                Project
              </div>
              <div>
                Contact
              </div>
            </div>
            <div>
              <button>
                let's talk
              </button>
            </div>
          </nav>
          {/* home */}
          <div className='home'>
            <div style={{ paddingTop: '60px', textAlign: 'start' }}>
              <h1>
                HI, I’M MITHILESHKUMAAR. JS.

              </h1>
              <i>
                <h1>

                  Frontend Developer,



                </h1>
                <h1>
                  With knowledge in web development and design,
                </h1>
                <h1>
                  I offer the best projects resulting in quality work.
                </h1>
              </i>
              <div className='tag'>
                <h3 style={{ display: 'flex', gap: "10px" }}>
                  <div>
                    Design
                  </div>
                  <img src={arrow} height={"20px"}>
                  </img>
                  <div>
                    Development
                  </div>
                  <img src={arrow} height={"20px"}></img>
                  <div>
                    WebFlow
                  </div>
                </h3>
              </div>
              <div className='tag'>
                <h2 style={{ display: 'flex', }}>
                  <div>
                    <button style={{ background: '#000', border: '', color: 'white', width: '100px', padding: '0px' }}>
                      <h4> Got Project ?</h4>
                    </button>
                  </div>
                  <div>
                    <button style={{ background: '', border: 'solid', color: 'black', width: '100px', padding: '0px' }}>
                      <h4>Let's Talk</h4>
                    </button>
                  </div>
                </h2>
              </div>
            </div>

            <div>
              <img src={arrow}>
              </img>
              <img src={I1} height={"350px"} style={{ position: 'absolute', left: "970px" }}>
              </img>
            </div>
          </div>
          {/* about  */}
          <div className='about' >
            fggfg
          </div>
        </div>

        {/* <Parallax pages={1} style={{ top: '10', left: '20' }}>
          <ParallaxLayer offset={1} speed={2.5}>
            <p>Parallax</p>
          </ParallaxLayer>
        </Parallax> */}

      </header >
    </div >
  );
}

export default App;
