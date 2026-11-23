
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NeuralLab from './pages/NeuralLab'
import MirrorLab from './pages/MirrorLab'
import MindPerception from './pages/MindPerception'
import SDGViksit from './pages/SDGViksit'
import Hayavadana from './pages/Hayavadana'

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <a href="/" className="brand">THE IDENTITY LAB</a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/hayavadana">Hayavadana</a>
          <a href="/neural-lab">Neural Lab</a>
          <a href="/mirror-lab">Mirror Lab</a>
          <a href="/mind-perception">Mind & Perception</a>
          <a href="/sdg-viksit">SDGs & Viksit Bharat</a>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <section className="hero-section">
                <p className="eyebrow">
                  A JOURNEY THROUGH THE HUMAN IDENTITY
                </p>

                <h1>
                  WHO<br />
                  DEFINES<br />
                  <span>YOU?</span>
                </h1>

                <p className="hero-description">
                  Is it your mind, your body, your memories,
                  or something beyond them?
                </p>

                <a href="#story" className="explore-button">
                  BEGIN YOUR JOURNEY ↗
                </a>

                <p className="hero-footer">
                  INSPIRED BY HAYAVADANA BY GIRISH KARNAD
                </p>
              </section>

              <section className="story-section" id="story">
                <p className="eyebrow">
                  THE QUESTION THAT STARTED IT ALL
                </p>

                <h2>What makes you, YOU?</h2>

                <p>
                  In Hayavadana, Girish Karnad explores the
                  complicated relationship between the mind,
                  the body and human identity.
                </p>
              </section>

              <section className="explore-section" id="explore">
                <p className="eyebrow">DISCOVER YOURSELF</p>

                <h2>Five doors. One question.</h2>

                <p>
                  Explore the story and the science of human identity.
                </p>

                <div className="lab-grid">
                  <a href="/hayavadana" className="lab-card">
                    <span>01 / THE STORY</span>
                    <h3>Hayavadana</h3>
                    <p>
                      Meet Hayavadana, Devadatta, Kapila and Padmini.
                      Discover the story behind our question.
                    </p>
                    <span className="card-arrow">↗</span>
                  </a>

                  <a href="/neural-lab" className="lab-card">
                    <span>02 / THE BRAIN</span>
                    <h3>Neural Lab</h3>
                    <p>
                      Explore the mysteries of the divided brain
                      and the connection to identity.
                    </p>
                    <span className="card-arrow">↗</span>
                  </a>

                  <a href="/mirror-lab" className="lab-card">
                    <span>03 / THE BODY</span>
                    <h3>Mirror Lab</h3>
                    <p>
                      Discover phantom limbs, body ownership
                      and the mind-body connection.
                    </p>
                    <span className="card-arrow">↗</span>
                  </a>

                  <a href="/mind-perception" className="lab-card">
                    <span>04 / THE MIND</span>
                    <h3>Mind & Perception</h3>
                    <p>
                      Explore memory, personality, free will
                      and the way we perceive ourselves.
                    </p>
                    <span className="card-arrow">↗</span>
                  </a>

                  <a href="/sdg-viksit" className="lab-card">
                    <span>05 / SOCIETY & THE FUTURE</span>
                    <h3>SDGs & Viksit Bharat 2047</h3>
                    <p>
                      Discover equality, dignity, inclusion
                      and the future we want to build.
                    </p>
                    <span className="card-arrow">↗</span>
                  </a>
                </div>
              </section>
            </main>
          }
        />

        <Route path="/hayavadana" element={<Hayavadana />} />
        <Route path="/neural-lab" element={<NeuralLab />} />
        <Route path="/mirror-lab" element={<MirrorLab />} />
        <Route path="/mind-perception" element={<MindPerception />} />
        <Route path="/sdg-viksit" element={<SDGViksit />} />
      </Routes>

      <footer>
        THE IDENTITY LAB · WHO DEFINES YOU?
      </footer>
    </BrowserRouter>
  )
}

export default App
