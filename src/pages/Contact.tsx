import { motion } from 'framer-motion'
import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../components/Reveal'
import { CheckIcon, GithubIcon, MailIcon, MapPinIcon, SpinnerIcon } from '../components/icons'
import { profile } from '../data/profile'
import { useContactForm, type ContactField } from '../hooks/useContactForm'
import { useLanguage } from '../hooks/useLanguage'
import { ui } from '../i18n/ui'

export function Contact() {
  const { t } = useLanguage()
  const { values, errors, status, handleChange, handleBlur, handleSubmit, reset } = useContactForm()

  const isSubmitting = status === 'submitting'

  const channels = [
    {
      id: 'email',
      icon: MailIcon,
      label: t(ui.common.email),
      value: profile.personal.email,
      href: `mailto:${profile.personal.email}`,
    },
    {
      id: 'github',
      icon: GithubIcon,
      label: t(ui.common.github),
      value: 'github.com/chaugiakhang193',
      href: profile.personal.github,
    },
    {
      id: 'location',
      icon: MapPinIcon,
      label: t(ui.common.location),
      value: t(profile.personal.location),
      href: null,
    },
  ]

  const fieldError = (field: ContactField) => {
    const code = errors[field]
    return code ? t(ui.errors[code]) : null
  }

  const inputClass = (field: ContactField) =>
    errors[field] ? 'field-input field-input-invalid' : 'field-input'

  const describedBy = (field: ContactField) => (errors[field] ? `${field}-error` : undefined)

  return (
    <>
      <PageHeader title={t(ui.contact.title)} subtitle={t(ui.contact.subtitle)} />

      <section className="page-section pt-6 sm:pt-8" aria-labelledby="contact-heading">
        <div className="container-page grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <Reveal>
            <div className="card h-full">
              <h2 id="contact-heading" className="text-xl">
                {t(ui.contact.channelsTitle)}
              </h2>

              <ul className="mt-5 space-y-4">
                {channels.map(({ id, icon: ChannelIcon, label, value, href }) => (
                  <li key={id} className="flex items-start gap-3">
                    <ChannelIcon className="mt-0.5 h-5 w-5 shrink-0 text-sky-700 dark:text-sky-400" />
                    <div>
                      <p className="text-xs tracking-wide text-muted uppercase">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={id === 'github' ? '_blank' : undefined}
                          rel={id === 'github' ? 'noreferrer' : undefined}
                          className="text-sm font-medium text-zinc-800 hover:text-sky-700 dark:text-zinc-200 dark:hover:text-sky-400"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                          {value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="card h-full">
              <h2 className="text-xl">{t(ui.contact.formTitle)}</h2>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  className="mt-6 rounded-xl border border-emerald-300 bg-emerald-50 p-5 text-center dark:border-emerald-800 dark:bg-emerald-950"
                >
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-white">
                    <CheckIcon className="h-6 w-6" />
                  </span>
                  <p className="mt-3 text-sm font-medium text-emerald-800 dark:text-emerald-200">
                    {t(ui.contact.success)}
                  </p>
                  <button type="button" onClick={reset} className="btn btn-ghost mt-4">
                    {t(ui.contact.sendAnother)}
                  </button>
                </motion.div>
              ) : (
                <form className="mt-5 space-y-4" onSubmit={handleSubmit} noValidate>
                  <div>
                    <label htmlFor="name" className="field-label">
                      {t(ui.contact.name)}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={t(ui.contact.namePlaceholder)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={describedBy('name')}
                      className={inputClass('name')}
                    />
                    {fieldError('name') && (
                      <p id="name-error" role="alert" className="field-error">
                        {fieldError('name')}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="field-label">
                      {t(ui.contact.email)}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={t(ui.contact.emailPlaceholder)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={describedBy('email')}
                      className={inputClass('email')}
                    />
                    {fieldError('email') && (
                      <p id="email-error" role="alert" className="field-error">
                        {fieldError('email')}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="field-label">
                      {t(ui.contact.subject)}
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={values.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={t(ui.contact.subjectPlaceholder)}
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={describedBy('subject')}
                      className={inputClass('subject')}
                    />
                    {fieldError('subject') && (
                      <p id="subject-error" role="alert" className="field-error">
                        {fieldError('subject')}
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="flex items-baseline justify-between gap-3">
                      <label htmlFor="message" className="field-label">
                        {t(ui.contact.message)}
                      </label>
                      <span className="text-xs text-muted">
                        {values.message.trim().length} {t(ui.contact.charCount)}
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={t(ui.contact.messagePlaceholder)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={describedBy('message')}
                      className={`${inputClass('message')} resize-y`}
                    />
                    {fieldError('message') && (
                      <p id="message-error" role="alert" className="field-error">
                        {fieldError('message')}
                      </p>
                    )}
                  </div>

                  <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">
                    {isSubmitting ? (
                      <>
                        <SpinnerIcon className="h-4 w-4 animate-spin" />
                        {t(ui.contact.submitting)}
                      </>
                    ) : (
                      t(ui.contact.submit)
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
