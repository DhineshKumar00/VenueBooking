
import { Link } from 'react-router-dom'
import '../Style/About.css'

export default function About(){
    return(
<><br/>
<br/>
<div className='bg'>
<h1 className='txt'>Welcome To VenueBooker</h1>

      <p className='para1' ><span>&nbsp;  </span>  Certainly! A "Venue Booker Application" is a platform designed to facilitate the booking of 
        marriage halls or event venues for weddings, receptions, and other related celebrations.
        The application streamlines the process of searching for available venues, making reservations,
        and managing bookings for both users and venue owners. </p>
        <p className='para2'>
            We are here to book the venue like marriage hall or the party hall you expect for your event.
            Make your event or party more special by making a booking in our VenueBooker    
        </p>
        <div>
        <p className='qn1'>
        01<span>&nbsp;  </span> what we provide free of cost?
        </p>
        <p className='ans1' >
        <span>&nbsp;  </span>
        1. Search District wise mahal or Mandapam<br/>
        2. Get address and contact details<br/>
        3. Identify Already Booked dates for mandapam<br/>
        4. Reserve online and pay online<br/>
        5. Get Map view and Direction<br/>
        6. Get Mandapam or Marriage hall image view<br/>
        </p>
        <p className='qn1'>
        02<span>&nbsp;  </span> why we are the best?
        </p>
       
        <p className='ans1' >
        <span>&nbsp;  </span>
        It's the place to be when you are search mahal or mandapam around you,<br/>
        looking for book/reserve or just want to have a contact details or booked dates
        </p>
        <p className='qn1'>
        03<span>&nbsp;  </span> Free to register mahal owner?
        </p>
        <p className='ans1'>
        yes, it is completely free for mahal owner register and list down mahal in district level and can get free cost of enquired user details
        </p>
        </div>
        <p className='down'>We have trusted team members with experience and we will satisfy your needs and requirements...</p>
</div>
</>
)
}