export default function Mero() {
  return (
    <div className='container'>
      <header className='header'>
        <h1>Welcome to Our Wedding</h1>
        <p>Join us on our special day</p>
      </header>

      <main className='main'>
        <section className='section'>
          <h2>Our Story</h2>
          <img src='/images/our-story.jpg' alt='Our Story' className='image' />
          <p>
            {' '}
            We met, we fell in love, and now were getting married Come celebrate
            with us.
          </p>
        </section>

        <section className='section'>
          <h2>Event Details</h2>
          <img
            src='/images/event-details.jpg'
            alt='Event Details'
            className='image'
          />
          <p>Date: July 20, 2024</p>
          <p>Location: Beautiful Beach Resort</p>
        </section>

        <section className='section'>
          <h2>RSVP</h2>
          <img src='/images/rsvp.jpg' alt='RSVP' className='image' />
          <p>
            {' '}
            We cant wait to celebrate with you! Please RSVP by June 1, 2024.{' '}
          </p>
          <button className='rsvpButton'>RSVP Now</button>
        </section>
      </main>

      <footer className='footer'>
        <p>&copy; 2024 Our Wedding. All rights reserved.</p>
      </footer>
    </div>
  )
}
