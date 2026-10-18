import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Landmark,
  MapPin,
  Menu,
  Search,
  Shield,
  Sparkles,
  X,
} from "lucide-react";
import { ITEMS } from "./data/heritage";
import { DEST } from "./data/destinations";

const filters = ["All stories", "Sites", "Traditions", "Crafts"];

const destinations = [
  { name: "Vigan", region: "Ilocos Sur", className: "vigan" },
  { name: "Banaue", region: "Ifugao", className: "banaue" },
  { name: "Miag-ao", region: "Iloilo", className: "miagao" },
];

const visualThemes = ["terraces", "vigan", "church", "chants", "weaving", "tattoo"];

function App() {
  const [activeFilter, setActiveFilter] = useState("All stories");
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const stories = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return ITEMS.filter((item) => {
      const matchesFilter = activeFilter === "All stories" || item.cat === activeFilter;
      const matchesSearch =
        !query ||
        `${item.title} ${item.place} ${item.text} ${item.cat}`.toLowerCase().includes(query);
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Heritage Atlas home">
          <span className="brand-mark"><Landmark size={19} strokeWidth={1.8} /></span>
          <span>heritage<span className="brand-light">atlas</span><small>PHILIPPINES</small></span>
        </a>
        <button
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href="#stories" onClick={closeMenu}>Heritage stories</a>
          <a href="#places" onClick={closeMenu}>Explore places</a>
          <a href="#about" onClick={closeMenu}>Our mission</a>
          <a className="nav-cta" href="#stories" onClick={closeMenu}>Start exploring <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> A living archive of the Philippines</div>
            <h1>Our stories.<br /><em>Still unfolding.</em></h1>
            <p className="hero-description">
              Discover the places, people, and traditions that make our islands extraordinary.
              Preserved for the next generation, shared with the world.
            </p>
            <div className="hero-actions">
              <a href="#stories" className="button button-primary">Explore the collection <ArrowRight size={17} /></a>
              <a href="#about" className="text-link"><span className="play-mark"><ArrowDown size={14} /></span> Why heritage matters</a>
            </div>
            <div className="hero-note"><Shield size={15} /> Built with communities. Kept for generations.</div>
          </div>
          <div className="hero-art" role="img" aria-label="Illustration of Philippine rice terraces at sunrise">
            <div className="sun" />
            <div className="mountain mountain-back" />
            <div className="mountain mountain-front" />
            <div className="terrace terrace-one" />
            <div className="terrace terrace-two" />
            <div className="terrace terrace-three" />
            <div className="terrace terrace-four" />
            <div className="art-label"><span>01 / 06</span><span>CORDILLERA · LUZON</span></div>
            <span className="art-caption">Land shaped by generations.</span>
            <span className="art-stamp"><Sparkles size={17} /> ROOTED<br />IN PLACE</span>
          </div>
          <div className="hero-index"><span>01</span><i /> HERITAGE, REIMAGINED</div>
        </section>

        <section className="intro-strip" id="about">
          <div className="intro-heading">A thousand islands.<br /><span>Countless ways to belong.</span></div>
          <p>From ancient stone terraces to patterns woven from dreams, our heritage lives in the hands and hearts of the people who carry it forward.</p>
          <a href="#stories" className="round-link" aria-label="Discover heritage stories"><ArrowDown size={18} /></a>
        </section>

        <section className="stories-section section-wrap" id="stories">
          <div className="section-heading">
            <div>
              <div className="section-kicker">THE COLLECTION <span>— 01</span></div>
              <h2>Keepers of <em>our story.</em></h2>
            </div>
            <p>Explore the landmarks, living traditions, and creative hands that keep Filipino heritage alive.</p>
          </div>
          <div className="collection-controls">
            <div className="filter-list" aria-label="Filter heritage stories">
              {filters.map((filter) => (
                <button
                  className={activeFilter === filter ? "filter-chip active" : "filter-chip"}
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>
            <label className="search-box">
              <Search size={16} />
              <input
                type="search"
                placeholder="Search the collection"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </label>
          </div>

          {stories.length > 0 ? (
            <div className="story-grid">
              {stories.map((item) => {
                const originalIndex = ITEMS.findIndex((entry) => entry.id === item.id);
                const Icon = item.icon;
                return (
                  <article className="story-card" key={item.id}>
                    <div className={`story-art ${visualThemes[originalIndex]}`}>
                      <span className="story-category"><Icon size={13} /> {item.cat}</span>
                      <span className="story-number">0{item.id}</span>
                      <span className="story-art-title">{item.place.split(",")[0]}</span>
                    </div>
                    <div className="story-body">
                      <div className="story-meta"><MapPin size={13} /> {item.place} <span>·</span> {item.year}</div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <div className="story-tech"><Sparkles size={14} /><span>{item.tech}</span></div>
                      <a className="card-link" href="#places">Discover the story <ArrowRight size={15} /></a>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="empty-state">
              <Search size={22} />
              <p>No stories found. Try a different search or category.</p>
              <button onClick={() => { setSearchTerm(""); setActiveFilter("All stories"); }}>Clear filters</button>
            </div>
          )}
        </section>

        <section className="places-section" id="places">
          <div className="section-wrap places-inner">
            <div className="section-heading places-heading">
              <div>
                <div className="section-kicker">FIND YOUR WAY <span>— 02</span></div>
                <h2>Closer to <em>the source.</em></h2>
              </div>
              <p>Every place has a story. Follow the map and find the people keeping it alive.</p>
            </div>
            <div className="place-grid">
              {destinations.map((destination, index) => (
                <a className={`place-card ${destination.className}`} href="#stories" key={destination.name}>
                  <span className="place-index">0{index + 1} / THE ISLANDS</span>
                  <span className="place-pin"><MapPin size={15} /></span>
                  <div><span className="place-region">{destination.region}</span><h3>{destination.name}</h3></div>
                  <span className="place-arrow"><ArrowUpRight size={18} /></span>
                </a>
              ))}
              <div className="place-more">
                <Compass size={23} />
                <div><strong>There’s more to discover.</strong><span>{Object.values(DEST).flat().length} places across Luzon, Visayas & Mindanao.</span></div>
                <a href="#stories" aria-label="Browse more heritage places"><ArrowRight size={18} /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="closing-note">
          <span className="closing-symbol">“</span>
          <p>Heritage isn’t only what we leave behind.<br /><em>It’s what we choose to carry forward.</em></p>
          <span className="closing-credit">A LIVING ARCHIVE · PHILIPPINES</span>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark"><Landmark size={17} strokeWidth={1.8} /></span>
          <span>heritage<span className="brand-light">atlas</span><small>PHILIPPINES</small></span>
        </a>
        <p>Stories that remember. Futures that honor.</p>
        <a href="#home" className="back-top">Back to top <ArrowUpRight size={15} /></a>
        <span className="footer-copy">© 2026 HERITAGE ATLAS PH</span>
      </footer>
    </>
  );
}

export default App;
