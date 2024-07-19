import { Header,Navbar, Services, AboutUs, Process, Testimonial, Blog, Contact, Footer} from '../components'
import '../Scss/index.scss';
function HomePage() {
  return (
    <>
    <div className='hero-section'>
      <div className='container'>
        <Navbar />
        <Header/>
      </div>
    </div>
    <Services />
    <AboutUs />
    <Process />
    <div className='posts-section'>
      <div className='container section-continer'>
        <Testimonial />
        <Blog />
      </div>
    </div>
    <Contact />
    <Footer />
    </>
  )
}

export default HomePage
