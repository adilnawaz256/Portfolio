import weather from '../img/weather.png'
import dic from '../img/dictionary.png'
import sc from '../img/sanpchart.png'
export default function Project() {
  const mystyle ={
    backgroundColor:"#EDF2FC"
  }
    return (
        <section className='project' id='project' style={mystyle}>
        <div className='container'>
            <div className='row'>
                <div className='col-12' data-aos="fade-down">
                    <h2 className='title'>Project</h2>
                </div>
                <div className='row'>
                <div className='col-12 col-lg-4' data-aos="fade-up" data-aos-duration="1000">
                   <div  className='card mt-20'>
                      <img src={weather} alt='Project' className='card-img-top'/>
                      <div className="card-body">
                        <button className='btn btn-primary' onClick={()=> window.open('https://github.com/adilnawaz256/WeatherApp.git')}>Github</button>
                    </div>
                    </div>
                </div>
                <div className='col-12 col-lg-4' data-aos="fade-up" data-aos-duration="1000">
                   <div  className='card mt-20'>
                      <img src={dic} alt='Project' className='card-img-top'/>
                      <div className="card-body">
                        <button className='btn btn-primary' onClick={()=> window.open('https://github.com/adilnawaz256/DictonaryWebsite.git')}>Github</button>
                    </div>
                    </div>
                </div>
                <div className='col-12 col-lg-4' data-aos="fade-up" data-aos-duration="1000">
                   <div  className='card mt-20'>
                      <img src={sc} alt='Project' className='card-img-top'/>
                      <div className="card-body">
                        <button className='btn btn-primary' onClick={()=> window.open('https://github.com/adilnawaz2/Day06_SnapChat.git')}>Github</button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    )
}
  
 