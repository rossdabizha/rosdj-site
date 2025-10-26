import React from "react";

function ContactForm() {
  // simple mailto form: opens user's mail client with prefilled subject/body
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = encodeURIComponent(form.name.value.trim());
    const email = encodeURIComponent(form.email.value.trim());
    const message = encodeURIComponent(form.message.value.trim());
    const subject = encodeURIComponent(`Website contact from ${name || 'visitor'}`);
    const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`);
    window.location.href = `mailto:r.dabizha@icloud.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} style={{display:'grid',gap:'8px',maxWidth:560,margin:'0 auto'}}>
      <input name="name" placeholder="Your name" required style={{padding:'10px',borderRadius:8,border:'1px solid rgba(255,255,255,0.06)',background:'transparent',color:'#fff'}} />
      <input name="email" type="email" placeholder="Your email" required style={{padding:'10px',borderRadius:8,border:'1px solid rgba(255,255,255,0.06)',background:'transparent',color:'#fff'}} />
      <textarea name="message" placeholder="Message" required style={{padding:'10px',borderRadius:8,border:'1px solid rgba(255,255,255,0.06)',background:'transparent',color:'#fff',minHeight:120}} />
      <div style={{display:'flex',justifyContent:'center'}}>
        <button type="submit" className="btn" style={{padding:'.7rem 1.6rem'}}>Send email</button>
      </div>
    </form>
  );
}

export default function App(){
  return (
    <>
      <header>
        <div className="hero">
          <div className="brand">
            <h1>ROS DJ</h1>
            <p className="lead">Organic House — Ukrainian DJ &amp; producer. Deep, melodic, atmospheric sets by Rostyslav Dabizha.</p>
            <div className="actions">
              <a className="btn" href="#music"><span>Listen</span></a>
              <a className="btn" href="#contact"><span>Contact</span></a>
            </div>
            <p style={{marginTop:"1rem", color:"var(--muted)", fontSize:".9rem"}}>
              Based in Madrid (Spain) — Born March 10, 1999.
            </p>
          </div>
          <div className="card portrait">
            <img src="/ROSDJ.jpeg" alt="ROS DJ portrait" />
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="card">
          <div className="bio">
            <div className="text">
              <h2>About ROS DJ</h2>
              <p>
                <strong>Rostislav Dabizha</strong> — Ukrainian DJ and producer born March 10, 1999.
                Known for crafting deep, melodic and atmospheric Organic House sets that guide listeners through immersive soundscapes.
                Based in Madrid, Spain, ROS DJ continues to captivate audiences across Europe with his signature sound.
              </p>
              <p style={{color:"var(--muted)", marginTop:".6rem", fontSize:".95rem"}}>
                Genres: Organic House · Deep House · Melodic
              </p>
            </div>
            <div>
              <h3 style={{marginBottom:".6rem"}}>Socials & Links</h3>
              <div className="social-icons">
                <a href="https://soundcloud.com/rosthedj" target="_blank" rel="noopener noreferrer"><i className="fab fa-soundcloud"></i></a>
                <a href="https://www.instagram.com/rosthedj" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://www.mixcloud.com/rosthedj/" target="_blank" rel="noopener noreferrer"><i className="fab fa-mixcloud"></i></a>
                <a href="https://www.youtube.com/@rosthedj" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </section>

        <section id="music" className="card">
          <h2 style={{marginBottom:".6rem"}}>Organic House — Listen</h2>
          <div className="tracks" style={{display:"grid",gap:16}}>
            <div className="card" style={{padding:12}}>
              <h4 style={{marginBottom:8}}>SoundCloud — Profile player</h4>
              {/* SoundCloud profile/player iframe (shows latest tracks) */}
              <iframe 
                width="100%" 
                height="166" 
                scrolling="no" 
                frameBorder="no" 
                allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/rosthedj&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
              </iframe>
            </div>

            <div className="card" style={{padding:12}}>
              <h4 style={{marginBottom:8}}>Mixcloud — Profile feed</h4>
              {/* Mixcloud profile widget */}
              <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Frosthedj%2F" frameBorder="0"></iframe>
              <p style={{marginTop:8,color:'var(--muted)',fontSize:'.9rem'}}>Open on Mixcloud for full sets.</p>
            </div>

            <div className="card" style={{padding:12}}>
              <h4 style={{marginBottom:8}}>YouTube — Channel uploads</h4>
              {/* Attempt to embed channel's uploads playlist; replace if you want a specific video */}
              <div style={{position:'relative',paddingTop:'56.25%'}}>
                <iframe 
                  title="YouTube uploads"
                  src="https://www.youtube.com/embed?listType=user_uploads&list=rosthedj"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} />
              </div>
              <p style={{marginTop:8,color:'var(--muted)',fontSize:'.9rem'}}>If this doesn't show your uploads, replace the embed with a specific video URL.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="card" style={{textAlign:"center"}}>
          <h2>Contact</h2>
          <p style={{marginBottom:"1rem"}}>For bookings, collaborations, or promo requests — send a message and your email client will open.</p>
          <ContactForm />
        </section>
      </main>

      <footer>
        <div>© 2025 ROS DJ — Organic / Melodic House</div>
      </footer>
    </>
  )
}
