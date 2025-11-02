import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

function GoldRule({ isDark }) {
  return <div className={`h-px w-24 ${isDark ? 'bg-[#C6A867]/70' : 'bg-[#C6A867]'}`} />;
}

function CornerCaption({ children, isDark }) {
  const color = isDark ? 'text-white/60' : 'text-neutral-600';
  return (
    <div className={`absolute bottom-4 left-4 text-[10px] tracking-[0.3em] ${color}`}>{children}</div>
  );
}

const variants = {
  initial: { opacity: 0, y: 24 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -24, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function SectionRenderer({ view, section, isDark, onOpenProject }) {
  const fg = isDark ? 'text-white' : 'text-neutral-900';
  const sub = isDark ? 'text-white/70' : 'text-neutral-700';
  const bg = isDark ? 'bg-neutral-950' : 'bg-[#f7f3ea]';

  const Label = ({ children }) => (
    <div className={`text-[10px] tracking-[0.35em] uppercase ${sub} mb-4`}>{children}</div>
  );

  return (
    <section className={`${bg} relative w-full h-screen overflow-hidden`}>      
      {view === 'main' && section === 'hero' && (
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10 pointer-events-none" />
        </div>
      )}

      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          className="max-w-5xl mx-auto px-6"
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {/* MAIN VIEW */}
          {view === 'main' && section === 'hero' && (
            <div className="text-center">
              <div className="text-[10px] tracking-[0.35em] text-white/80 mb-4">MICHAEL TANDYO</div>
              <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">I BUILD USEFUL THINGS</h1>
              <div className="mt-3 text-xs md:text-sm tracking-[0.3em] text-white/70">ENTP ENERGY · UNDERDOG ARC · SHIP FAST</div>
              <div className="mt-8 max-w-2xl mx-auto text-white/85 leading-relaxed">
                <p>
                  I turn chaos into products people actually use.<br />
                  Restaurants, volleyball clubs, health orgs — real stakes, real people.<br />
                  I’m not famous. I just make things work.
                </p>
              </div>
            </div>
          )}

          {view === 'main' && section === 'intro' && (
            <div className={`${fg}`}>
              <Label>WHO YOU'RE GETTING</Label>
              <h2 className="font-serif text-4xl md:text-6xl mb-6">Crafted, cinematic, personal.</h2>
              <GoldRule isDark={isDark} />
              <p className={`mt-6 ${sub} max-w-3xl leading-relaxed`}>
                Competitive and curious with underdog energy. I like giving small teams big-company tools and watching them punch above their weight.
              </p>
              <CornerCaption isDark={isDark}>CALGARY / ACTIVE / BUILDER >>> ONGOING</CornerCaption>
            </div>
          )}

          {view === 'main' && section === 'philosophy' && (
            <div className={`${fg}`}>
              <Label>HOW I THINK</Label>
              <h2 className="font-serif text-4xl md:text-6xl mb-6">Ship fast. Learn faster.</h2>
              <GoldRule isDark={isDark} />
              <ul className={`mt-6 ${sub} space-y-2 max-w-3xl`}>
                <li>Turn chaos into systems that real people will actually use.</li>
                <li>Design like a magazine: rhythm, pacing, restraint.</li>
                <li>No neon gamer UI. No corporate gradient blobs.</li>
              </ul>
              <CornerCaption isDark={isDark}>NOTES / PROCESS / FIELD TESTED >>> REAL USERS</CornerCaption>
            </div>
          )}

          {view === 'main' && section === 'core-me' && (
            <div className={`${fg}`}>
              <Label>CORE ME</Label>
              <h2 className="font-serif text-4xl md:text-6xl mb-6">Volleyball. Film. Underdogs.</h2>
              <GoldRule isDark={isDark} />
              <p className={`mt-6 ${sub} max-w-3xl leading-relaxed`}>
                I love volleyball and I’m grinding to get better. I love filming and making cinematic edits — started in the League of Legends montage era with friends. I help underdog teams: family restaurants, local volleyball clubs, and internal teams that are drowning.
              </p>
              <CornerCaption isDark={isDark}>GYM / COURT / TIMELINE >>> IN PROGRESS</CornerCaption>
            </div>
          )}

          {view === 'main' && section === 'featured-work' && (
            <div className={`${fg}`}>
              <Label>WHAT I BUILD</Label>
              <h2 className="font-serif text-4xl md:text-6xl mb-6">Useful things that stick.</h2>
              <GoldRule isDark={isDark} />
              <p className={`mt-6 ${sub} max-w-3xl leading-relaxed`}>
                Restaurants, volleyball clubs, and health orgs use what I make. It’s built to survive the messy real world, not live on a slide.
              </p>
              <CornerCaption isDark={isDark}>FIELD / KITCHEN / CLUB >>> DEPLOYED</CornerCaption>
            </div>
          )}

          {view === 'main' && section === 'contact' && (
            <div className={`${fg} text-center`}>
              <Label>WORK WITH ME</Label>
              <h2 className="font-serif text-4xl md:text-6xl mb-6">Let’s build something that actually ships.</h2>
              <GoldRule isDark={isDark} />
              <div className="mt-6 flex items-center justify-center gap-4">
                <a href="mailto:michael@example.com" className={`cursor-hover px-6 py-3 border ${isDark ? 'border-white/30 text-white' : 'border-neutral-900/30 text-neutral-900'} rounded-full text-sm`}>Email</a>
                <a href="#projects" className={`cursor-hover px-6 py-3 ${isDark ? 'bg-white text-neutral-900' : 'bg-neutral-900 text-white'} rounded-full text-sm`}>See Projects</a>
              </div>
            </div>
          )}

          {/* ABOUT VIEW */}
          {view === 'about' && section === 'about-hero' && (
            <div className={`${fg}`}>
              <Label>ABOUT</Label>
              <h2 className="font-serif text-4xl md:text-6xl mb-6">The story behind the work.</h2>
              <GoldRule isDark={isDark} />
              <p className={`mt-6 ${sub} max-w-3xl`}>Curious ENTP with a camera, a ball, and a bias for action.</p>
            </div>
          )}

          {view === 'about' && section === 'about-story' && (
            <div className={`${fg}`}>
              <Label>ORIGIN</Label>
              <h3 className="font-serif text-3xl md:text-5xl mb-4">From scrappy edits to real products.</h3>
              <p className={`mt-2 ${sub} max-w-3xl`}>Started cutting montages with friends. Kept the cinematic eye and applied it to building tools for real teams.</p>
            </div>
          )}

          {view === 'about' && section === 'about-values' && (
            <div className={`${fg}`}>
              <Label>VALUES</Label>
              <ul className={`list-disc ml-5 ${sub} space-y-2 max-w-3xl`}>
                <li>Make it useful. Make it last.</li>
                <li>Help the underdog win.</li>
                <li>Respect craft. Keep it playful.</li>
              </ul>
            </div>
          )}

          {view === 'about' && section === 'about-journey' && (
            <div className={`${fg}`}>
              <Label>JOURNEY</Label>
              <p className={`${sub} max-w-3xl`}>A timeline of small bets compounding: restaurants → clubs → health orgs.</p>
            </div>
          )}

          {view === 'about' && section === 'about-detail' && (
            <div className={`${fg}`}>
              <Label>DETAIL</Label>
              <p className={`${sub} max-w-3xl`}>I care about typography, pacing, and the feel of a thing when you use it.</p>
            </div>
          )}

          {/* PROJECTS VIEW */}
          {view === 'projects' && section === 'projects-hero' && (
            <div className={`${fg}`}>
              <Label>PROJECTS</Label>
              <h2 className="font-serif text-4xl md:text-6xl mb-6">Selected work</h2>
              <GoldRule isDark={isDark} />
              <p className={`mt-6 ${sub} max-w-3xl`}>Tap a project to open the detail chapter.</p>
            </div>
          )}

          {view === 'projects' && section?.startsWith('project-') && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <button
                  key={i}
                  className={`cursor-hover group relative border ${isDark ? 'border-white/20' : 'border-neutral-900/20'} rounded-2xl p-6 text-left overflow-hidden`}
                  onClick={() => onOpenProject({ id: section, title: `Project ${section.split('-')[1]}` })}
                >
                  <div className={`text-[10px] tracking-[0.35em] uppercase ${sub}`}>Case Study</div>
                  <div className={`font-serif text-2xl md:text-4xl mt-2 ${fg}`}>Project {section.split('-')[1]}</div>
                  <div className={`mt-2 ${sub}`}>Giving small teams big-company tools.</div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#C6A867]/0 to-[#C6A867]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </button>
              ))}
            </div>
          )}

          {/* PROJECT DETAIL VIEW */}
          {view === 'project-detail' && section === 'detail-hero' && (
            <div className={`${fg}`}>
              <Label>CASE STUDY</Label>
              <h2 className="font-serif text-4xl md:text-6xl mb-6">Underdog tools, real impact.</h2>
              <GoldRule isDark={isDark} />
              <p className={`mt-6 ${sub} max-w-3xl`}>What it was, why it mattered, how we made it work.</p>
            </div>
          )}

          {view === 'project-detail' && section === 'detail-overview' && (
            <div className={`${fg}`}>
              <Label>OVERVIEW</Label>
              <p className={`${sub} max-w-3xl`}>Scope, constraints, and the core user flow.</p>
            </div>
          )}

          {view === 'project-detail' && section === 'detail-challenge' && (
            <div className={`${fg}`}>
              <Label>CHALLENGE</Label>
              <p className={`${sub} max-w-3xl`}>Underserved teams. Limited time. Real stakes.</p>
            </div>
          )}

          {view === 'project-detail' && section === 'detail-solution' && (
            <div className={`${fg}`}>
              <Label>SOLUTION</Label>
              <p className={`${sub} max-w-3xl`}>A lean system that shipped fast and kept improving.</p>
            </div>
          )}

          {view === 'project-detail' && section === 'detail-impact' && (
            <div className={`${fg}`}>
              <Label>IMPACT</Label>
              <p className={`${sub} max-w-3xl`}>Adoption, retention, and teams that actually breathe easier.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
