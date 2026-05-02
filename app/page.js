"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
    a: "CipherMUN — the 5th edition of MESMUN — will be held at Made Easy School, Gurugram. The exact hall and room allocations will be shared in the delegate study guides closer to the event.",
  },
  {
    q: "When is the event?",
    a: "The conference dates will be announced soon. Follow our social media handles and check back here for the official schedule. Registrations are open now — secure your spot early!",
  },
  {
    q: "Which committees are available and who can participate?",
    a: "Five committees are running this edition: UNGA (International), UNHRC (Human Rights), Lok Sabha (National), Among Us (Special Committee), and International Press (open to classes IX–XII, with roles for Journalists, Caricaturists, and Photographers).",
  },
  {
    q: "What is the event flow / schedule?",
    a: "A typical day at CipherMUN starts with an Opening Ceremony, followed by formal committee sessions, lunch & networking, afternoon sessions with unmoderated caucuses, and concludes with an Awards & Closing Ceremony on the final day. A detailed schedule will be released in the official brochure.",
  },
  {
    q: "Where can I find the brochure?",
    a: "The official CipherMUN brochure is avaiable for download, you may acccess it from the footer. It contains committee details, background guides, delegate guidelines, fee structure, and the full schedule. Keep an eye on this page and our socials.",
  },
  {
    q: "Where can I contact the organizers for more information?",
    a: "For any queries regarding registration, committee details, or event logistics. You may contact us 9999639155. ",
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
      <details className="group border-b border-[#ce261b]/20 py-5 cursor-pointer">
        <summary className="flex items-center justify-between list-none gap-4">
          <span className="text-base sm:text-lg font-semibold text-[#ce261b]">
            {q}
          </span>
          <span className="text-[#ce261b] text-xl font-light shrink-0 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>
        <p className="mt-3 text-sm sm:text-base text-[#ce261b]/70 leading-relaxed">
          {a}
        </p>
      </details>
    </FadeInWhenVisible>
  );
}

export default function Home() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        id="home"
        className="bg-[#eae5e1] min-h-screen flex flex-col items-center px-4"
      >
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="self-center w-full sm:w-[60%] mt-[2vw] md:w-[45%] lg:w-[40%] bg-white/70 backdrop-blur-sm border border-red-200 rounded-full px-5 py-2 flex items-center justify-between mb-8"
        >
          <span className="text-[#ce261b] font-serif tracking-wide text-sm font-semibold">
            CipherMUN
          </span>
          <div className="flex items-center gap-4 text-xs text-[#ce261b]">
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
              className="px-3 h-7 rounded-full bg-[#ce261b] text-[#eae5e1] flex items-center cursor-pointer hover:opacity-90 transition-opacity"
            >
              Register →
            </a>
          </div>
        </motion.nav>

        <div className="w-full max-w-6xl flex flex-col py-[3vw] flex-1 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-fit px-4 h-6 rounded-full text-red-500 text-xs flex items-center border border-red-500"
          >
            Powered by SIJA SUMMITS.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[#ce261b] mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-none"
          >
            Introducing <span className="font-serif tracking-wide">Cipher</span>{" "}
            MUN at MES <br />
            for the 5th Edition of Made Easy MUN.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-base sm:text-lg md:text-xl text-[#ce261b] mt-4 max-w-2xl"
          >
            The ultimate showcase of diplomacy and public speaking is now back @
            Made Easy School for the 5th edition of MESMUN.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mt-6"
          >
            <a
              href="#register"
              className="px-6 h-10 rounded-xl cursor-pointer bg-[#ce261b] text-[#eae5e1] flex justify-center items-center hover:opacity-90 transition-opacity"
            >
              → Register Now.
            </a>
            <a
              href="#about"
              className="px-6 h-10 rounded-xl cursor-pointer bg-white text-[#ce261b] flex justify-center items-center hover:opacity-90 transition-opacity"
            >
              Know More.
            </a>
          </motion.div>

          <motion.img
            src="/image.png"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl mt-8 w-full object-cover"
          />
        </div>
      </section>

      {/* ── Committees ───────────────────────────────────────── */}
      <section
        id="committees"
        className="min-h-screen w-full flex flex-col px-8 py-16 bg-[#eae5e1]"
      >
        <FadeInWhenVisible>
          <h1 className="text-[#ce261b] text-4xl sm:text-5xl md:text-6xl font-semibold mb-10">
            Committees.
          </h1>
        </FadeInWhenVisible>

        <div
          className="flex flex-col sm:flex-row gap-3 w-full"
          style={{ minHeight: "75vh" }}
        >
          {committees.map((c, i) => (
            <motion.div
              key={c.abbr}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex-1 rounded-2xl overflow-hidden cursor-pointer"
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

      {/* ── About / Principal ────────────────────────────────── */}
      <section
        id="about"
        className="bg-[#eae5e1] min-h-screen flex flex-col p-6 sm:p-8 md:p-10 md:px-12 text-[#ce261b]"
      >
        <FadeInWhenVisible>
          <h1 className="font-serif font-semibold text-3xl sm:text-4xl md:text-5xl">
            Message from the Principal.
          </h1>
        </FadeInWhenVisible>

        <div className="w-full flex flex-col md:flex-row mt-6 gap-6 md:gap-0">
          <FadeInWhenVisible
            delay={0.15}
            direction="right"
            className="w-full md:w-[26vw]"
          >
            <div className="min-h-auto md:min-h-[35vw] flex flex-col p-6 sm:p-8 md:p-12 rounded-3xl bg-[#ce261b] text-[#eae5e1]">
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
                Made Easy School Gurugram
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
            <div className="md:p-16 text-base sm:text-lg md:text-xl text-[#ce261b]">
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
                -"Together We can We will."
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
        className="bg-[#eae5e1] flex flex-col px-6 sm:px-10 md:px-12 py-16 text-[#ce261b]"
      >
        <div className="max-w-6xl w-full mx-auto">
          <div className="flex flex-col md:flex-row md:gap-20 gap-10">
            <div className="md:w-[30%] shrink-0">
              <FadeInWhenVisible direction="right">
                <div>
                  <h1 className="font-serif font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight">
                    Frequently Asked Questions.
                  </h1>
                  <p className="mt-4 text-sm sm:text-base text-[#ce261b]/60 leading-relaxed">
                    Everything you need to know about CipherMUN — the 5th
                    edition of MESMUN.
                  </p>
                  <a
                    href="#register"
                    className="mt-8 px-6 h-10 rounded-xl cursor-pointer bg-[#ce261b] text-[#eae5e1] flex items-center justify-center w-fit hover:opacity-90 transition-opacity"
                  >
                    → Register Now.
                  </a>
                </div>
              </FadeInWhenVisible>
            </div>

            <div className="md:w-[70%] flex flex-col border-t border-[#ce261b]/20">
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
        className="bg-[#eae5e1] flex flex-col items-center justify-center px-6 sm:px-10 md:px-12 py-24 text-[#ce261b]"
      >
        <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center">
          <FadeInWhenVisible>
            <div className="w-fit px-4 h-6 rounded-full text-red-500 text-xs flex items-center border border-red-500 mb-6">
              5th Edition · MESMUN
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.1}>
            <h1 className="font-serif font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Ready to take the floor?
            </h1>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-[#ce261b]/70 max-w-2xl leading-relaxed">
              Join hundreds of delegates at CipherMUN — the 5th edition of Made
              Easy MUN at Made Easy School, Gurugram. Represent nations. Debate
              resolutions. Lead change.
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
                className="px-10 h-12 rounded-xl cursor-pointer bg-[#ce261b] text-[#eae5e1] flex justify-center items-center text-base font-semibold hover:opacity-90 transition-opacity"
              >
                → Register Now.
              </motion.a>
              <motion.a
                href="#faq"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 h-12 rounded-xl cursor-pointer bg-white text-[#ce261b] flex justify-center items-center text-base font-semibold hover:opacity-90 transition-opacity"
              >
                Read the FAQ.
              </motion.a>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.45} className="w-full">
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 w-full border-t border-[#ce261b]/20 pt-10">
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
                  <span className="text-xs uppercase tracking-widest text-[#ce261b]/50 font-semibold">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="bg-[#ce261b] text-[#eae5e1] px-6 sm:px-10 md:px-12 pt-16 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 pb-12 border-b border-[#eae5e1]/20">
            <FadeInWhenVisible direction="right" className="md:w-[35%]">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide">
                  CipherMUN
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#eae5e1]/70 leading-relaxed">
                  The 5th Edition of Made Easy MUN — a celebration of diplomacy,
                  dialogue, and the next generation of global leaders.
                </p>
                <p className="mt-4 text-xs text-[#eae5e1]/50 uppercase tracking-widest">
                  Powered by SIJA SUMMITS.
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
                    Committees
                  </p>
                  {committees.map((c) => (
                    <a
                      key={c.abbr}
                      href="#committees"
                      className="text-sm text-[#eae5e1]/80 hover:text-[#eae5e1] transition-opacity"
                    >
                      {c.abbr}
                    </a>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-xs uppercase tracking-widest text-[#eae5e1]/50 font-semibold mb-1">
                    Connect
                  </p>
                  {[
                    {
                      label: "Instagram",
                      href: "https://instagram.com/sijasummits",
                    },
                    { label: "LinkedIn", href: "#" },
                    { label: "Email Us", href: "mailto:hello@sijasummits.com" },
                    { label: "Brochure ↓", href: "/brochure.pdf" },
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
              © 2025 CipherMUN · Made Easy School, Gurugram. All rights
              reserved.
            </p>
            <p className="flex items-center gap-1 flex-wrap justify-center sm:justify-end">
              Powered by{" "}
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
