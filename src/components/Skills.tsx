import { ReactNode } from "react"
import { Skill } from "./Common"

type IProps = {
  skills: {
    name: string,
    level: string,
    keywords: string[],
  }[]
}

const Skills = (props: IProps) => {
  const { skills } = props

  return (
    <div>
      {skills.map(skill => (
        <SkillGroup
          label={skill.name}
          level={skill.level}
        >
          {skill.keywords.map(keyword => <Skill key={keyword}>{keyword}</Skill>)}
        </SkillGroup>
      ))}
    </div>
  )
}

const SkillGroup = ({ label, level, children }: { label: string, level: string, children: ReactNode }) => (
  <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
    <div className="flex flex-col max-sm:w-full">
      <h4>{label}</h4>
      <small className="text-gray-500 dark:text-gray-300">{level}</small>
    </div>
    <div className="flex flex-wrap gap-2">
      {children}
    </div>
  </div>
)

export { Skills }