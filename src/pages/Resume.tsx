import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../components/Reveal'
import { Tabs, type TabItem } from '../components/Tabs'
import { TimelineList } from '../components/TimelineList'
import {
  CalendarIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
} from '../components/icons'
import { activities, education, experiences, profile } from '../data/profile'
import { useLanguage } from '../hooks/useLanguage'
import { ui } from '../i18n/ui'

export function Resume() {
  const { t } = useLanguage()

  const personalItems = [
    { id: 'dob', icon: CalendarIcon, label: t(ui.resume.dob), value: profile.personal.dob },
    {
      id: 'gender',
      icon: UserIcon,
      label: t(ui.resume.gender),
      value: t(profile.personal.gender),
    },
    {
      id: 'location',
      icon: MapPinIcon,
      label: t(ui.common.location),
      value: t(profile.personal.location),
    },
    {
      id: 'email',
      icon: MailIcon,
      label: t(ui.common.email),
      value: profile.personal.email,
      href: `mailto:${profile.personal.email}`,
    },
    {
      id: 'phone',
      icon: PhoneIcon,
      label: t(ui.common.phone),
      value: profile.personal.phone,
      href: `tel:${profile.personal.phone.replace(/\s/g, '')}`,
    },
  ]

  const educationPanel = (
    <ol className="space-y-4">
      {education.map((entry) => (
        <li key={entry.id}>
          <article className="card">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg">{t(entry.school)}</h3>
              <p className="text-sm font-medium text-sky-700 dark:text-sky-400">
                {entry.period}
              </p>
            </div>

            <dl className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-sm">
              <div>
                <dt className="text-muted">{t(ui.resume.major)}</dt>
                <dd className="font-medium text-zinc-800 dark:text-zinc-200">{t(entry.major)}</dd>
              </div>
              <div>
                <dt className="text-muted">{t(ui.resume.gpa)}</dt>
                <dd className="font-medium text-zinc-800 dark:text-zinc-200">{entry.gpa}</dd>
              </div>
            </dl>

            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm marker:text-sky-500">
              {t(entry.notes).map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  )

  const tabItems: TabItem[] = [
    { id: 'experience', label: t(ui.resume.tabExperience), content: <TimelineList entries={experiences} /> },
    { id: 'education', label: t(ui.resume.tabEducation), content: educationPanel },
  ]

  // Chua co hoat dong ngoai khoa nao thi khong hien tab rong
  if (activities.length > 0) {
    tabItems.push({
      id: 'activities',
      label: t(ui.resume.tabActivities),
      content: <TimelineList entries={activities} />,
    })
  }

  return (
    <>
      <PageHeader title={t(ui.resume.title)} subtitle={t(ui.resume.subtitle)} />

      <section className="page-section" aria-labelledby="personal-heading">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full">
              <h2 id="personal-heading" className="text-xl">
                {t(ui.resume.personalTitle)}
              </h2>

              <dl className="mt-4 space-y-3">
                {personalItems.map(({ id, icon: ItemIcon, label, value, href }) => (
                  <div key={id} className="flex items-start gap-3">
                    <ItemIcon className="mt-0.5 h-5 w-5 shrink-0 text-sky-700 dark:text-sky-400" />
                    <div>
                      <dt className="text-xs tracking-wide text-muted uppercase">{label}</dt>
                      <dd className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                        {href ? (
                          <a href={href} className="hover:text-sky-700 dark:hover:text-sky-400">
                            {value}
                          </a>
                        ) : (
                          value
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="card h-full">
              <h2 className="text-xl">{t(ui.resume.objectiveTitle)}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed marker:text-sky-500">
                {t(profile.objective).map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-section pt-0" aria-label={t(ui.resume.tabExperience)}>
        <div className="container-page">
          <Tabs items={tabItems} ariaLabel={t(ui.resume.title)} />
        </div>
      </section>
    </>
  )
}
