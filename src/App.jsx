import { useState } from 'react'
import './App.css'
import groupPhoto from './assets/groupphoto.webp'
import classVideo from './assets/classvideo.mp4'
import studioOwnerPhoto from './assets/imgofstudioowner.webp'
import logo from './assets/logo.png'

function App() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
    <main className="page">
      <header className="site-header">
        <div className="brand-wrap">
          <img className="brand-logo" src={logo} alt="Fit & Fierce logo" />
          <div className="brand-text">
            <span className="brand-name">Fit & Fierce</span>
            <span className="brand-tag">Inclusive Dance Fitness</span>
          </div>
        </div>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#facebook-heading">Facebook</a>
          <a href="#visit">Visit</a>
        </nav>
      </header>

      <section className="hero" id="about">
        <div className="hero-copy">
          <p className="eyebrow">Inclusive Dance Fitness Studio</p>
          <h1>Move with confidence. Feel sexy in your skin.</h1>
          <p className="lead">
            Fit & Fierce is an inclusive dance fitness studio. Our main goal is to
            help get you to the healthiest version of yourself.
          </p>
          <p className="lead">We want you to leave feeling strong, confident, supported, & sexy.</p>
          <div className="confidence-tags" aria-label="Studio values">
            <span>Body-positive</span>
            <span>All levels</span>
            <span>Zero judgment</span>
          </div>
          <div className="hero-actions">
            <a
              href="https://www.facebook.com/profile.php?id=61574160265586"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              View Classes on Facebook
            </a>
            <a href="#visit" className="btn btn-secondary">
              Visit Studio
            </a>
          </div>
          <div className="hero-metrics" aria-label="Studio highlights">
            <article>
              <span className="metric-value">All Levels</span>
              <span className="metric-label">Beginner to advanced</span>
            </article>
            <article>
              <span className="metric-value">Inclusive</span>
              <span className="metric-label">Supportive by design</span>
            </article>
            <article>
              <span className="metric-value">High Energy</span>
              <span className="metric-label">Dance + sculpt training</span>
            </article>
          </div>
        </div>

        <div className="hero-gallery">
          <article className="vibe-card" aria-label="Studio vibe">
            <p className="vibe-kicker">The vibe</p>
            <p className="vibe-title">Feminine. Bold. Unapologetic.</p>
            <p className="vibe-copy">
              Think high-energy movement, confident femininity, and a room that celebrates every body.
            </p>
          </article>
          <img
            className="gallery-main"
            src={groupPhoto}
            alt="Fit & Fierce dance fitness class"
          />
          <div className="gallery-video-wrap">
            <video
              className="gallery-video"
              controls
              preload="none"
              playsInline
              poster={groupPhoto}
            >
              {isVideoLoaded && <source src={classVideo} type="video/mp4" />}
              Sorry, your browser does not support embedded videos.
            </video>
            {!isVideoLoaded && (
              <button
                className="video-load-btn"
                type="button"
                onClick={() => setIsVideoLoaded(true)}
                aria-label="Load class preview video"
              >
                Play Class Preview
              </button>
            )}
          </div>
          <article className="social-post" aria-label="Class video caption from Facebook">
            <p className="social-post-title">✨ fit & fierce ✨</p>
            <p className="social-post-copy">yall, this video perfectly sums up my class!!</p>
            <p className="social-post-copy">are you gonna come in and be covered in sweat by the time you leave? yes</p>
            <p className="social-post-copy">are you going to be exhausted after? yes</p>
            <p className="social-post-copy">are you going to be whining because i push you far? my regulars do! 😅</p>
            <p className="social-post-copy">are you gonna be sore the next day? YUP</p>
            <p className="social-post-copy">but are you also gonna hear absolute bangers & shake a lot of booty? hell yea!!! 🔥</p>
            <p className="social-post-copy">this class is for you - NO REQUIREMENTS!!</p>
            <p className="social-post-copy">
              i can’t promise you are gonna come in and be able to do everything, but i can promise you will never find a group that will support you like this and cheer from the roof top for you!! i can also promise you will laugh, sweat, & never see exercise the same. 🔥💪
            </p>
            <p className="social-post-copy">i hope this video brings you to join us, because we sure would love to have you.🤍</p>
          </article>
        </div>
      </section>

      <section className="panel quote-panel">
        <p>
          “This studio helped me feel strong, feminine, and confident in my body again.
          The vibe is inclusive, uplifting, and unapologetically empowering.”
        </p>
      </section>

      <section className="panel instructor-panel" aria-labelledby="instructor-heading">
        <img
          className="instructor-photo"
          src={studioOwnerPhoto}
          alt="Sam Davis, Fit & Fierce instructor"
        />
        <div className="instructor-copy">
          <p className="instructor-kicker">Meet your instructor</p>
          <h2 id="instructor-heading">Hi, I’m Sam Davis and I’m your instructor.</h2>
          <p>
            I created Fit & Fierce to be a space where every body feels welcome, supported,
            and pushed to become stronger in the best way.
          </p>
          <p>
            In class, we sweat, laugh, and build confidence together through high-energy movement,
            great music, and coaching that meets you where you are.
          </p>
          <p>
            Whether it’s your first time or your fiftieth, you’ll walk in as yourself and leave
            feeling more powerful, more confident, and proud of what your body can do.
          </p>
        </div>
      </section>

      <section className="panel social-panel" aria-labelledby="facebook-heading">
        <div className="panel-head">
          <p className="panel-title" id="facebook-heading">
            From Facebook
          </p>
          <a
            className="social-link"
            href="https://www.facebook.com/profile.php?id=61574160265586"
            target="_blank"
            rel="noreferrer"
          >
            View Page
          </a>
        </div>
        <p className="social-meta">fit & fierce | Pennington Gap VA</p>
        <p className="social-stats">2,622 likes · 85 talking about this</p>
        <p className="social-copy">
          fit & fierce is an inclusive dance fitness studio. our main goal is to help
          get you to the healthiest version of yourself.
        </p>
        <p className="social-copy">All class announcements and schedule updates are posted on Facebook.</p>
      </section>

      <section className="panel visit-panel" id="visit">
        <p className="panel-title">Visit Fit & Fierce</p>
        <p className="address">282 West Gate Mall Cir, Pennington Gap, VA, United States</p>
        <p className="visit-note">Come as you are. Leave feeling energized, supported, and ready to own your day.</p>
        <a
          className="btn btn-primary visit-btn"
          href="https://www.facebook.com/profile.php?id=61574160265586"
          target="_blank"
          rel="noreferrer"
        >
          Check Class Updates on Facebook
        </a>
      </section>

      <footer className="site-footer">
        <p>Fit & Fierce • Inclusive Dance Fitness Studio</p>
      </footer>
    </main>
  )
}

export default App
