import logo from './logo.svg';
import './App.css';
import m from '../src/assets/m.png'
import arrow from '../src/assets/arrow.PNG'
import a2 from '../src/assets/a2.PNG'
import d from '../src/assets/d.jpeg'
import c from '../src/assets/c.webp'
import I1 from '../src/assets/1.PNG'
import Do from '../src/assets/do.jpeg'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  return (

    <div className="App">

      <header className="App-header">


        <nav >
          <div style={{ display: 'flex' }}>
            <img src={m} height={"20px"} style={{ marginRight: "5px" }}></img>
            <span style={{ fontSize: "19px" }}>
            </span>
            <a href='#start'>
              MITHILESHKUMAAR
            </a>

          </div>
          <div className='nav-list'>
            <div>
              <a href='#home'>Home
              </a>
            </div>
            <div>
              <a href='#about'> About
              </a>
            </div>
            <div>
              <a href='#service'>
                Services
              </a>

            </div>
            <div>
              <a href='#project'>
                Project
              </a>

            </div>
            <div>
              <a href='#contact'>
                Contact
              </a>

            </div>
          </div>
          <div>
            <button style={{ padding: '5px 10px' }}>
              let's talk
            </button>
          </div>
        </nav>
        <div className='container' id='start'>

          {/* home */}
          <div id='home'>


            <div color='black' >
              {/* <Parallax pages={5} >
                <ParallaxLayer speed={2.5}> */}
              <div style={{ paddingTop: '60px', textAlign: 'start', paddingRight: '500px' }}>

                <h1>
                  HI, I’M MITHILESHKUMAAR. JS.

                </h1>

                <h1 >

                  Frontend Developer,



                </h1>
                <h1 style={{ fontSize: '28px', lineHeight: '1.2', fontWeight: 'bold', letterSpacing: '4px', fontWeight: 'normal' }}>
                  With knowledge in web development and design,
                </h1>
                <h1 style={{ fontSize: '28px', lineHeight: '1.2', fontWeight: 'bold', letterSpacing: '4px', fontWeight: 'normal' }}>
                  I offer the best projects resulting in quality work.
                </h1>

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
              <div style={{ flexWrap: 'wrap' }}>
                <img src={arrow} height={"500px"} style={{ position: 'absolute', left: "820px", top: 100, }} >
                </img>
                {/* <ParallaxLayer offset={0.9} speed={10.5} > */}


                <img src={I1} height={"400px"} style={{ position: 'absolute', left: "900px", top: 110, }}>
                </img>
              </div>
              {/* </ParallaxLayer>


                </ParallaxLayer> */}


              {/* </Parallax> */}
            </div>
          </div>
          {/* about  */}

          <div id='about' >
            <div style={{ paddingTop: "80px" }}>
              <img src={I1} height={"450px"}  >
              </img>
            </div>
            <div style={{ margin: '20px 100px ' }}>
              <div className='' style={{ paddingTop: '60px', textAlign: 'start', }}>
                <h1>
                  ABOUT ME

                </h1>

                <div style={{ fontSize: '28px', lineHeight: '1.2', fontWeight: 'bold', letterSpacing: '4px', fontWeight: 'normal', lineHeight: '45px' }}>

                  Passionate about creating Web Pages with <span style={{ fontWeight: 'bold' }} >UI/UX </span>User Interface,
                  <br />Trained in <span style={{ fontWeight: 'bold' }} >Software and Web Development</span> and offering top-notch user friendly UI/UX designing abilities.<br /> Motivated to continue to learn and <span style={{ fontWeight: 'bold' }} >Grow</span> as an IT Professional.
                </div>


              </div>
            </div>


          </div>


          <div id='service'>
            <h1>SERVICES
            </h1>
            <div className='s1' >
              <div className='box'>
                <h2>
                  Web Design
                </h2>
                <h4>
                  Design to us is something magical - we are lucky that our let us get creative and build new products
                </h4>
              </div>
              <div className='box'>
                <h2>Product design</h2>
                <h4>Every single project is a challenge that we accept eagerly. Let's implement innovative ideas together!</h4>
              </div>
            </div>
            <div className='s2'>
              <div className='box'>
                <h2>
                  UI/UX Design
                </h2>
                < h4>
                  Our technical support team is willing to solve any inquiry that comes from our clients within minutes</h4>
              </div>
              <div className='box'>
                <h2>
                  Development
                </h2>
                <h4>
                  Development to us is something magical - we are lucky that our clients let me get and build new products
                </h4>
              </div>
            </div>

          </div>


          <div id='project' >
            <h1>Projects
            </h1>
            <div className='p-content' style={{ paddingTop: '20px' }}>

              <div className='p1'>

                <div>
                  <img src={c} height={"250px"} style={{ paddingTop: '20px' }} >
                  </img>
                </div>
                <div style={{ marginLeft: '60px' }}>
                  <div style={{ background: '#FC5D2E', color: 'white', padding: "0px 15px", maxWidth: '170px' }}>
                    <h2>CREASE
                    </h2>
                  </div>
                  <h3 style={{ fontSize: '25px' }}>
                    A cricket fantasy website, which gets people connected with the game of cricket.

                  </h3>

                </div>
              </div>
              <div className='p2'>

                <div style={{}} >
                  <div style={{ background: '#FC5D2E', color: 'white', padding: "0px 15px", maxWidth: '170px' }}>
                    <h2>HOSPTIAL
                    </h2>
                  </div>
                  <h3 style={{ fontSize: '25px', maxWidth: '500px' }}>
                    A Mobile app to help people with emergency.


                  </h3>

                </div>
                <div>
                  <img src={d} height={"250px"} width={'500px'} style={{ paddingLeft: '65px', paddingTop: '20px' }} >
                  </img>
                </div>
              </div>
              <div className='p3'>

                <div>
                  <img src={Do} height={"250px"} width={'500px'} style={{ paddingTop: '20px' }} >
                  </img>
                </div>
                <div style={{ marginLeft: '60px' }}>
                  <div style={{ background: '#FC5D2E', color: 'white', padding: "0px 15px", maxWidth: '170px' }}>
                    <h2>DONATION
                    </h2>
                  </div>
                  <h3 style={{ fontSize: '25px' }}>
                    A Web based Application which helps to the orphan's eat BETTER
                  </h3>

                </div>
              </div>

            </div>

          </div>

        </div>
        <div id='contact'>


          <div class=' hi '>

            <div className='c'>
              <div style={{ margin: "", fontWeight: "normal" }}>

                <div className='c-1'>
                  <div>
                    <h1>CONTACT ME</h1>
                    <h2>
                      I will read all Messages. Send me any Messages you want
                      and I'll get
                      back to
                      you.
                    </h2>
                  </div>

                  <div style={{ paddingTop: "60px" }}>

                    <div class=" flex ">

                      <div class="card_c">
                        <span>HOVER</span>

                        <a class="social-link" href="https://github.com/Mithileshkumaar">
                          <FaGithubSquare style={{ color: "black" }} />
                        </a>
                        <a class="social-link"
                          href="https://www.linkedin.com/in/mithilesh-kumaar-84b011216/">
                          <FaLinkedin style={{ color: "black" }} />
                        </a>
                        <a class="social-link" href="tel:9003107555">
                          <IoCall style={{ color: "black" }} />

                        </a>
                        <a class="social-link"
                          href="https://www.instagram.com/mithilesh_kumaar/">
                          <AiFillInstagram style={{ color: "black" }} />
                        </a>
                        <a class="social-link"
                          href="https://www.facebook.com/mithilesh.kumaar/">
                          <FaFacebookSquare style={{ color: "black" }} />
                        </a>
                        <a class="social-link"
                          href="mailto: mithilesh.kumaar2015@gmail.com">
                          <IoIosMail style={{ color: "black" }} />
                        </a>

                      </div>


                    </div>


                  </div>
                </div>

              </div>






            </div>



          </div>




        </div>



      </header >
    </div >
  );
}

export default App;
