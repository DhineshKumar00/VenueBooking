
// import { Link } from 'react-router-dom'
import '../Style/Contact.css'

export default function Contact(){
    return(
      <>
      <div className='image'>
      <br/>
      <br/>
        <h1 className="contact">Contact Us</h1>
        <p className='paragraph'>
            We are here to help in the way of guiding you by booking marriage or party hall. <br/>
            If there is any dots in booking hall contactout team the will help in you to book halls
           
        </p>
           <p className='line'>VenueBooker.com respect your thoughts and opinion will help us to solve your problem and enrich our professional and growth, Hence always you can contact us below way
        </p> 
        <hr className='hr'></hr>
        <div style={{position:"relative",left:"100px"}}>
         
          <h1 className='head'>LOCATION:</h1>
          <p className='point'>116,Pollachi road<br/>
            Near Karpagam College of Engineering(KCE)<br/>  
            Coimbatore-636401
          </p>
          <h1 className='head'>E-MAIL:</h1>
          <p className='point'>Venuebooker@gmail.com<br/></p>
          <h1 className='head'>CALL:</h1>
          <p className='point'>+91 94 43 82 65 11</p>
        </div>
        <hr className='hr'></hr>
        <div style={{padding:"20px",position:"relative",left:"600px",width:"900px",bottom:"300px"}}>
        {/* <h1>Send Your Message...</h1> */}
        <form>
          
        <div style={{position:"relative",bottom:"100px"}}><label style={{fontSize:"25px"}}> YourName:</label><input type="text" style={{fontSize:"50px",margin:"30px",fontSize:"20px",width:"600px", backgroundColor:"transparent"}}></input></div>
        <div style={{position:"relative",bottom:"100px"}}><label style={{fontSize:"25px"}}>YourEmail:</label> <input type="email" style={{fontSize:"50px",margin:"30px",fontSize:"20px",width:"600px",backgroundColor:"transparent"}}></input><br></br></div>
       <div style={{position:"relative",bottom:"100px"}}>  <label style={{position:"relative",bottom:"78px",fontSize:"25px"}}> Comment :</label><textarea style={{left:"20px",width:"650px",margin:"10px",position:"relative",top:"20px",height:"100px", backgroundColor:"transparent"}}></textarea></div>
       <button style={{border:"none",fontSize:"20px",position:"relative",left:"300px",marginTop:"20px",bottom:"100px"}}>Send Message</button>
        </form>
        </div>
       
        <div style={{position:"relative",bottom:"300px"}}> 
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.5134688553!2d76.88483286798547!3d11.01395778797012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1703256866755!5m2!1sen!2sin" width="1500" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
      </>
)
}