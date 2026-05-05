"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GradientText from "./components/GradientText";

const committees = [
  {
    abbr: "UNGA",
    full: "United Nations General Assembly",
    agenda:
      "Deliberating upon the balance between national security and civil liberties in counterterrorism strategies.",
    color: "#1a3a5c",
    tag: "International",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/UN_General_Assembly_hall.jpg",
  },
  {
    abbr: "UNHRC",
    full: "United Nations Human Rights Council",
    agenda:
      "Addressing violations of international humanitarian law and ensuring accountability for war crimes and crimes against humanity.",
    color: "#2d6a4f",
    tag: "Human Rights",
    image:
      "https://c.ndtvimg.com/2019-09/hn4id8qg_un-human-rights-council-afp-650_650x400_10_September_19.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
  },
  {
    abbr: "LOK SABHA",
    full: "Lok Sabha, Indian Parliament",
    agenda:
      "Debating the expansion, rationalization, and future trajectory of reservation policies in a transforming India.",
    color: "#7b3f00",
    tag: "National",
    image:
      "https://www.newsonair.gov.in/wp-content/uploads/2025/12/Lok-Sabha-parliament.jpg",
  },
  {
    abbr: "AMONG US",
    full: "Multiplayer Social Game",
    agenda:
      "Deliberation upon decision-making under uncertainty in life-threatening situations. Balancing collective security with individual rights.",
    color: "#4a1060",
    tag: "Special",
    image:
      "https://media.wired.com/photos/620581d7c228dc232641feaa/4:3/w_2132,h_1599,c_limit/Games-Innersloth-Among-Us-Key-Art.jpg",
  },
  {
    abbr: "IP",
    full: "International Press",
    agenda:
      "For classes IX to XII. Categories: Journalists, Caricaturists, Photographers.",
    color: "#8b0000",
    tag: "Press",
    image:
      "https://images.pexels.com/photos/15891673/pexels-photo-15891673.jpeg?cs=srgb&dl=pexels-sanketgraphy-15891673.jpg&fm=jpg",
  },
];

const faqs = [
  {
    q: "Where is the event being held?",
    a: "CIPHER MUN — the 5th edition of MESMUN — will be held at MADE EASY SCHOOL, GURUGRAM on 22nd and 23rd May 2026.",
  },
  {
    q: "When is the event?",
    a: "CIPHER MUN is on 22nd and 23rd May 2026. Registrations are open now — secure your spot early!",
  },
  {
    q: "Which committees are available and who can participate?",
    a: "Five committees are running this edition: UNGA (International), UNHRC (Human Rights), Lok Sabha (National), Among Us (Fun Committee), and International Press (open to classes IX–XII, with roles for Journalists, Caricaturists, and Photographers).",
  },
  {
    q: "What is the event flow / schedule?",
    a: "A typical day at CIPHER MUN starts with an Opening Ceremony, followed by formal committee sessions, lunch & networking, afternoon sessions with unmoderated caucuses, and concludes with an Awards & Closing Ceremony on the final day. A detailed schedule will be released in the official brochure.",
  },
  {
    q: "Where can I find the brochure?",
    a: "The official CIPHER MUN brochure is available for download, you may access it from the footer. It contains committee details, background guides, delegate guidelines, fee structure, and the full schedule. Keep an eye on this page and our socials.",
  },
  {
    q: "Where can I contact the organizers for more information?",
    a: "For any queries regarding registration, committee details, or event logistics. You may contact us swati.tyagi@madeeasyschool.in",
  },
];

function FadeInWhenVisible({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FAQItem({ q, a, index }) {
  return (
    <FadeInWhenVisible delay={index * 0.08} direction="up">
      <details className="group border-b border-[#000080]/20 py-5 cursor-pointer">
        <summary className="flex items-center justify-between list-none gap-4">
          <span className="text-base sm:text-lg font-semibold text-[#000080]">
            {q}
          </span>
          <span className="text-[#000080] text-xl font-light shrink-0 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>
        <p className="mt-3 text-sm sm:text-base text-[#000080]/70 leading-relaxed">
          {a}
        </p>
      </details>
    </FadeInWhenVisible>
  );
}

function HeroDiploBackground() {
  return (
    <>
      {/* Video layer — fills the entire hero, object-cover keeps it responsive */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <source src="/bkkk.mp4" type="video/mp4" />
      </video>

      {/* Primary dark + blur overlay — ensures text contrast at all screen sizes */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          backdropFilter: "blur(2.5px) brightness(0.72)",
          WebkitBackdropFilter: "blur(2.5px) brightness(0.72)",
          background:
            "linear-gradient(160deg, rgba(0,0,60,0.70) 0%, rgba(0,0,40,0.52) 45%, rgba(0,0,30,0.78) 100%)",
        }}
      />

      {/* Bottom-heavy vignette — extra shadow at footer edge of hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background:
            "radial-gradient(ellipse 120% 100% at 50% 110%, rgba(0,0,60,0.65) 0%, transparent 60%)",
        }}
      />

      {/* Top vignette — nav legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background:
            "linear-gradient(to bottom, rgba(0,0,40,0.45) 0%, transparent 22%)",
        }}
      />
    </>
  );
}

export default function Home() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        id="home"
        className="bg-[#eae5e1] min-h-screen flex flex-col items-center px-4 relative overflow-hidden"
      >
        <HeroDiploBackground />

        {/* Everything inside hero needs z-index above overlays (zIndex: 3+) */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="self-center w-full sm:w-[60%] mt-[2vw] md:w-[45%] lg:w-[40%] bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-5 py-2 flex items-center justify-between mb-8"
          style={{ position: "relative", zIndex: 10 }}
        >
          <span className="text-white flex font-serif tracking-wide text-sm font-semibold drop-shadow">
            <img
              src="/logo.png"
              alt="CIPHER MUN Logo"
              className="w-5 h-5 mr-2"
            />
            CIPHER MUN
          </span>
          <div className="flex items-center gap-4 text-xs text-white/90">
            <a
              href="#about"
              className="cursor-pointer hover:opacity-70 transition-opacity"
            >
              About
            </a>
            <a
              href="#committees"
              className="cursor-pointer hover:opacity-70 transition-opacity"
            >
              Committees
            </a>
            <a
              href="#register"
              className="px-3 h-7 rounded-full bg-white/20 border border-white/30 text-white flex items-center cursor-pointer hover:bg-white/30 transition-all"
            >
              Register →
            </a>
          </div>
        </motion.nav>

        <div
          className="w-full max-w-6xl flex flex-col py-[3vw] flex-1 justify-center"
          style={{ position: "relative", zIndex: 10 }}
        >
          <div className="flex gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-fit px-4 h-6 rounded-full text-white/80 text-xs flex items-center border border-white/30 bg-white/10 backdrop-blur-sm"
            >
              Co-organised by SIJA SUMMITS
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-white mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-none drop-shadow-lg"
          >
            <span className="md:text-[100px]">
              <GradientText>
                <span className="font-serif tracking-wide">CIPHER</span> MUN 5.0
                @ MES{" "}
              </GradientText>
            </span>
            <br />
            <span className="text-white/85 text-shadow">
              organised by MADE EASY SCHOOL GURUGRAM
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-base font-semibold sm:text-lg md:text-2xl text-white mt-4 max-w-2xl drop-shadow-md"
          >
            22nd and 23rd May 2026
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mt-6"
          >
            <a
              href="#register"
              className="px-6 h-10 rounded-xl cursor-pointer bg-[#000080] text-[#eae5e1] flex justify-center items-center hover:opacity-90 transition-opacity shadow-lg shadow-black/30"
            >
              → Register Now
            </a>
            <a
              href="#about"
              className="px-6 h-10 rounded-xl cursor-pointer bg-white/15 border border-white/30 text-white backdrop-blur-sm flex justify-center items-center hover:bg-white/25 transition-all"
            >
              Know More
            </a>
          </motion.div>

          <motion.img
            src="/image.png"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl mt-8 w-full object-cover shadow-2xl shadow-black/50"
          />
        </div>
      </section>

      {/* ── Committees ───────────────────────────────────────── */}
      <section
        id="committees"
        className="min-h-screen w-full flex flex-col px-8 py-16 bg-[#eae5e1]"
      >
        <FadeInWhenVisible>
          <h1 className="text-[#000080] text-4xl sm:text-5xl md:text-6xl font-semibold mb-10">
            COMMITTEES
          </h1>
        </FadeInWhenVisible>

        <div
          className="flex flex-col sm:flex-row gap-3 w-full"
          style={{ minHeight: "75vh" }}
        >
          {committees.map((c, i) => (
            <motion.div
              key={c.abbr}
              id={`committee-${c.abbr.toLowerCase().replace(/\s+/g, "-")}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex-1 rounded-2xl overflow-hidden"
              style={{ minHeight: "420px" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${c.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
              <div
                className="absolute inset-0 opacity-20"
                style={{ backgroundColor: c.color }}
              />
              <div className="relative z-10 flex flex-col justify-between h-full p-6">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/20">
                    {c.tag}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-serif font-bold text-2xl text-white leading-tight drop-shadow-md">
                    {c.abbr}
                  </span>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-white/70 leading-snug">
                    {c.full}
                  </p>
                  <div className="w-6 border-t border-white/30 my-1" />
                  <p className="text-xs text-white/80 leading-relaxed">
                    {c.agenda}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── About MUN + School Vision ────────────────────────── */}
      <section className="w-full bg-[#000080] px-6 sm:px-10 md:px-12 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-px">
          {/* Left — About MUN */}
          <FadeInWhenVisible direction="right">
            <div className="flex flex-col justify-between h-full p-8 sm:p-10 md:p-14 border-b md:border-b-0 md:border-r border-white/15">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4 block">
                  What is MUN?
                </span>
                <h2 className="font-serif font-semibold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                  Model United Nations
                </h2>
                <div className="w-10 h-px bg-white/30 my-6" />
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Model United Nations is an academic simulation of the UN where
                  students step into the shoes of global diplomats — debating
                  real-world issues, drafting resolutions, and building
                  consensus across nations and ideologies.
                </p>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mt-4">
                  Delegates develop critical skills in public speaking,
                  research, negotiation, and leadership — all while gaining a
                  deeper understanding of international relations and global
                  governance.
                </p>
              </div>

              {/* Stat row */}
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-8">
                {[
                  { num: "193", label: "UN Member States" },
                  { num: "1945", label: "UN Founded" },
                  { num: "6", label: "Official Languages" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col gap-1">
                    <span className="font-serif font-semibold text-2xl sm:text-3xl text-white">
                      {s.num}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold leading-snug">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Right — School Vision */}
          <FadeInWhenVisible direction="left" delay={0.15}>
            <div className="flex flex-col justify-between h-full p-8 sm:p-10 md:p-14">
              <div>
                <h2 className="font-serif font-semibold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                  MADE EASY SCHOOL
                </h2>
                <span className="text-[20px] font-semibold  tracking-[0.2em] text-white tracking-loose mb-4 block">
                  Our Vision:
                </span>
                <span>सा विद्या या विमुक्तये</span>
                <div className="w-10 h-px bg-white/30 my-6" />
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  MADE EASY SCHOOL, Gurugram, is built on the philosophy that
                  education must nurture curiosity, courage, and compassion. We
                  believe every student has the potential to become a thoughtful
                  leader and a responsible global citizen.
                </p>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mt-4">
                  CIPHER MUN embodies this vision — bringing together young
                  minds to deliberate on the world's most pressing challenges,
                  and emerge as confident, empathetic, and articulate voices of
                  tomorrow.
                </p>
              </div>

              {/* Pillars */}
              <div className="mt-10 grid grid-cols-2 gap-3 border-t border-white/15 pt-8">
                {[
                  { icon: "◈", label: "Critical Thinking" },
                  { icon: "◉", label: "Global Awareness" },
                  { icon: "◎", label: "Empathy & Respect" },
                  { icon: "◇", label: "Leadership" },
                ].map((p) => (
                  <div
                    key={p.label}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                  >
                    <span className="text-white/50 text-lg">{p.icon}</span>
                    <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">
                      {p.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ── About / Principal ────────────────────────────────── */}
      <section
        id="about"
        className="bg-[#eae5e1] min-h-screen flex flex-col p-6 sm:p-8 md:p-10 md:px-12 text-[#000080]"
      >
        <FadeInWhenVisible>
          <h1 className="font-serif font-semibold text-3xl sm:text-4xl md:text-5xl">
            Message from the Principal
          </h1>
        </FadeInWhenVisible>

        <div className="w-full flex flex-col md:flex-row mt-6 gap-6 md:gap-0">
          <FadeInWhenVisible
            delay={0.15}
            direction="right"
            className="w-full md:w-[26vw]"
          >
            <div className="min-h-auto md:min-h-[35vw] flex flex-col p-6 sm:p-8 md:p-12 rounded-3xl bg-[#000080] text-[#eae5e1]">
              <div className="w-[40vw] sm:w-[30vw] md:w-[15vw]">
                <img
                  src="https://blog.madeeasyschool.in/wp-content/uploads/2025/07/mrs-surabhi-joshi.jpg"
                  className="rounded-2xl"
                  alt="Mrs. Surabhi Joshi"
                />
              </div>
              <h1 className="text-[#eae5e1] font-serif font-semibold text-2xl sm:text-3xl md:text-4xl mt-2">
                Mrs. Surabhi Joshi
              </h1>
              <p className="font-medium text-base sm:text-lg md:text-xl">
                Head of School @ <br />
                MADE EASY SCHOOL, GURUGRAM
              </p>
              <p className="font-medium text-sm">
                Author, NLP-Master Coach and Content Developer.
              </p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible
            delay={0.3}
            direction="left"
            className="w-full md:w-[74vw]"
          >
            <div className="md:p-16 text-base sm:text-lg md:text-xl text-[#000080]">
              <p>
                As the School principal, I am deeply honored to welcome each of
                you to our Model United Nations conference, a gathering that
                signifies the essence of global citizenship and collaborative
                problem-solving. This event embodies the spirit of academic
                excellence, critical thinking, and cross-cultural understanding
                that we strive to instill in our students. Throughout this
                conference, encourage you to embrace the diversity of
                perspectives, engage in rigorous debates, and cultivate a sense
                of empathy and respect for differing opinions. Remember that
                your role as delegates extends beyond representing a country;
                you are ambassadors for positive change, tasked with seeking
                solutions to some of the most pressing issues facing our world.
                I urge you to approach each session with a commitment to active
                listening, thoughtful reflection, and constructive dialogue. By
                harnessing the power of diplomacy and cooperation, we can work
                towards building a more peaceful and sustainable future for all.
                Together, let us seize this opportunity to inspire, educate, and
                empower the leaders of tomorrow. Wishing you all an enlightening
                and transformative Model United Nations conference experience.
                May your deliberations be insightful.
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl mt-6 font-serif font-semibold">
                -'Together We can, We will'
              </h1>
              <p className="mt-2">
                Wishing you a successful and enriching experience at the
                conference.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section
        id="faq"
        className="bg-[#eae5e1] flex flex-col px-6 sm:px-10 md:px-12 py-16 text-[#000080]"
      >
        <div className="max-w-6xl w-full mx-auto">
          <div className="flex flex-col md:flex-row md:gap-20 gap-10">
            <div className="md:w-[30%] shrink-0">
              <FadeInWhenVisible direction="right">
                <div>
                  <h1 className="font-serif font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight">
                    Frequently Asked Questions
                  </h1>
                  <p className="mt-4 text-sm sm:text-base text-[#000080]/60 leading-relaxed">
                    Everything you need to know about CIPHER MUN — the 5th
                    edition of MESMUN.
                  </p>
                  <a
                    href="#register"
                    className="mt-8 px-6 h-10 rounded-xl cursor-pointer bg-[#000080] text-[#eae5e1] flex items-center justify-center w-fit hover:opacity-90 transition-opacity"
                  >
                    → Register Now
                  </a>
                </div>
              </FadeInWhenVisible>
            </div>

            <div className="md:w-[70%] flex flex-col border-t border-[#000080]/20">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Register ─────────────────────────────────────────── */}
      <section
        id="register"
        className="bg-[#eae5e1] flex flex-col items-center justify-center px-6 sm:px-10 md:px-12 py-24 text-[#000080]"
      >
        <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center">
          <FadeInWhenVisible>
            <div className="w-fit px-4 h-6 rounded-full text-blue-500 text-xs flex items-center border border-blue-500 mb-6">
              5th Edition · MESMUN
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.1}>
            <h1 className="font-serif font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Ready to take the floor?
            </h1>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-[#000080]/70 max-w-2xl leading-relaxed">
              Join hundreds of delegates at{" "}
              <span className="font-bold">CIPHER MUN 5.0 @ MES </span>— the 5th
              edition of MADE EASY MUN at MADE EASY SCHOOL, Gurugram. <br />
              #Represent nations #Debate resolutions #Lead change.
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 items-center">
              <motion.a
                href="/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 h-12 rounded-xl cursor-pointer bg-[#000080] text-[#eae5e1] flex justify-center items-center text-base font-semibold hover:opacity-90 transition-opacity"
              >
                → Register Now
              </motion.a>
              <motion.a
                href="#faq"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 h-12 rounded-xl cursor-pointer bg-white text-[#000080] flex justify-center items-center text-base font-semibold hover:opacity-90 transition-opacity"
              >
                Read the FAQ
              </motion.a>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.45} className="w-full">
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 w-full border-t border-[#000080]/20 pt-10">
              {[
                { num: "5th", label: "Edition" },
                { num: "5", label: "Committees" },
                { num: "MES", label: "Gurugram" },
                { num: "∞", label: "Ambition" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-1">
                  <span className="font-serif font-semibold text-3xl sm:text-4xl">
                    {s.num}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#000080]/50 font-semibold">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="bg-[#000080] text-[#eae5e1] px-6 sm:px-10 md:px-12 pt-16 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 pb-12 border-b border-[#eae5e1]/20">
            <FadeInWhenVisible direction="right" className="md:w-[35%]">
              <div>
                <h2 className="font-serif flex text-3xl sm:text-4xl font-semibold tracking-wide">
                  <img
                    src="/logo.png"
                    alt="CIPHER MUN Logo"
                    className="w-8 h-8 mr-2 mt-1"
                  />
                  CIPHER MUN
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#eae5e1]/70 leading-relaxed">
                  The 5th Edition of MADE EASY MUN — a celebration of diplomacy,
                  dialogue, and the next generation of global leaders.
                </p>
                <p className="mt-4 text-xs text-[#eae5e1]/50 uppercase tracking-widest">
                  Co-Organised by SIJA SUMMITS.
                </p>
                <p className="mt-4 text-xs text-[#eae5e1]/50 uppercase tracking-widest">
                  Developed, Designed and Maintained by vaidik.co.
                </p>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.15}>
              <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
                <div className="flex flex-col gap-3">
                  <p className="text-xs uppercase tracking-widest text-[#eae5e1]/50 font-semibold mb-1">
                    Navigate
                  </p>
                  {[
                    { label: "About", href: "#about" },
                    { label: "Committees", href: "#committees" },
                    { label: "FAQ", href: "#faq" },
                    { label: "Register", href: "#register" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm text-[#eae5e1]/80 hover:text-[#eae5e1] transition-opacity"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-xs uppercase tracking-widest text-[#eae5e1]/50 font-semibold mb-1">
                    Connect
                  </p>
                  {[
                    {
                      label: "Email Us",
                      href: "mailto:swati.tyagi@madeeasyschool.in",
                    },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      className="text-sm text-[#eae5e1]/80 hover:text-[#eae5e1] transition-opacity"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>
          </div>

          {/* Bottom row */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#eae5e1]/40">
            <p>
              © 2026 CIPHER MUN · MADE EASY SCHOOL, GURUGRAM All rights
              reserved.
            </p>
            <p className="flex items-center gap-1 flex-wrap justify-center sm:justify-end">
              Co-Organised by{" "}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#eae5e1]/60 hover:text-[#eae5e1] transition-opacity underline underline-offset-2"
              >
                SIJA SUMMITS
              </a>
              {" · "}Site developed by{" "}
              <a
                href="https://vaidik.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#eae5e1]/60 hover:text-[#eae5e1] transition-opacity underline underline-offset-2"
              >
                vaidik.co
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
