import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { TypingText } from '../components/TypingText'
import { WaveDivider } from '../components/WaveDivider'
import { ArrowRightIcon, DownloadIcon, MailIcon } from '../components/icons'
import { profile } from '../data/profile'
import { useLanguage } from '../hooks/useLanguage'
import { ui } from '../i18n/ui'

export function Home() {
  const { t } = useLanguage()

  return (
    <>
      <section className="hero-banner relative overflow-hidden" aria-labelledby="hero-heading">
        <div className="container-page grid items-center gap-10 pt-12 pb-24 sm:pt-16 sm:pb-32 md:grid-cols-[minmax(0,1fr)_auto] md:gap-14">
          <div>
            <p className="text-sm font-semibold tracking-wide text-cyan-100 uppercase">
              {t(ui.home.greeting)}
            </p>

            <h1 id="hero-heading" className="mt-3 text-4xl text-white sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>

            <p className="mt-3 text-xl font-semibold text-cyan-100 sm:text-2xl">
              {t(profile.title)}
            </p>

            <TypingText
              phrases={[t(profile.tagline)]}
              className="mt-5 min-h-24 max-w-xl text-base leading-relaxed text-white/90 sm:min-h-20 sm:text-lg"
            />

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/resume" className="btn btn-on-banner">
                {t(ui.home.ctaResume)}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>

              <Link to="/projects" className="btn btn-on-banner-ghost">
                {t(ui.home.ctaProjects)}
              </Link>

              <Link to="/contact" className="btn btn-on-banner-ghost">
                <MailIcon className="h-4 w-4" />
                {t(ui.home.ctaContact)}
              </Link>

              {profile.cvUrl && (
                <a href={profile.cvUrl} download className="btn btn-on-banner-ghost">
                  <DownloadIcon className="h-4 w-4" />
                  {t(ui.home.ctaDownload)}
                </a>
              )}
            </div>

            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {profile.highlights.map((highlight) => (
                <div key={highlight.value + t(highlight.label)} className="text-center">
                  <dt className="text-sm text-cyan-100">{t(highlight.label)}</dt>
                  <dd className="text-2xl font-bold text-white">{highlight.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="order-first mx-auto md:order-none"
          >
            <img
              src={profile.avatar}
              alt={t(profile.avatarAlt)}
              width={288}
              height={288}
              className="h-44 w-44 rounded-full object-cover ring-4 ring-white/50 sm:h-56 sm:w-56 lg:h-72 lg:w-72"
            />
          </motion.div>
        </div>

        <WaveDivider />
      </section>

      <section className="page-section bg-white dark:bg-zinc-900" aria-labelledby="focus-heading">
        <div className="container-page">
          <Reveal>
            <h2 id="focus-heading" className="text-2xl sm:text-3xl">
              {t(ui.home.focusTitle)}
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t(ui.home.focus).map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="card h-full border-zinc-200 bg-zinc-50 dark:bg-zinc-950">
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
