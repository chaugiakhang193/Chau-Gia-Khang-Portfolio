import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../components/Reveal'
import { SkillBar } from '../components/SkillBar'
import { languageSkills, patterns, skillGroups, softSkills } from '../data/skills'
import { useLanguage } from '../hooks/useLanguage'
import { ui } from '../i18n/ui'

export function Skills() {
  const { t } = useLanguage()

  return (
    <>
      <PageHeader title={t(ui.skills.title)} subtitle={t(ui.skills.subtitle)} />

      <section className="page-section pt-6 sm:pt-8" aria-labelledby="technical-heading">
        <div className="container-page">
          <h2 id="technical-heading" className="text-2xl">
            {t(ui.skills.technicalTitle)}
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {skillGroups.map((group, index) => (
              <Reveal key={group.id} delay={index * 0.06}>
                <article className="card h-full">
                  <h3 className="text-lg">{t(group.title)}</h3>
                  <ul className="mt-4 space-y-4">
                    {group.skills.map((skill) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0" aria-labelledby="patterns-heading">
        <div className="container-page">
          <h2 id="patterns-heading" className="text-2xl">
            {t(ui.skills.patternsTitle)}
          </h2>
          <p className="mt-2 text-sm">{t(ui.skills.patternsSubtitle)}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {patterns.map((pattern) => (
              <li key={pattern} className="chip px-3 py-1.5 text-sm">
                {pattern}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="page-section bg-white dark:bg-zinc-900"
        aria-labelledby="soft-skills-heading"
      >
        <div className="container-page">
          <h2 id="soft-skills-heading" className="text-2xl">
            {t(ui.skills.softTitle)}
          </h2>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {softSkills.map((skill, index) => (
              <li key={skill.id}>
                <Reveal delay={index * 0.05}>
                  <article className="card h-full bg-zinc-50 dark:bg-zinc-950">
                    <h3 className="text-base">{t(skill.name)}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed">{t(skill.detail)}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section" aria-labelledby="languages-heading">
        <div className="container-page">
          <h2 id="languages-heading" className="text-2xl">
            {t(ui.skills.languageTitle)}
          </h2>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {languageSkills.map((language) => (
              <li key={language.name.en} className="card">
                <h3 className="text-base">{t(language.name)}</h3>
                <p className="mt-1.5 text-sm">{t(language.detail)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
