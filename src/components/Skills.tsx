import { ReactNode } from "react"
import { Skill } from "./Common"

const Skills = () => (
  <div>
    <SkillGroup
      label="Front-end"
      proficiency="Senior"
    >
      <Skill>JavaScript</Skill>
      <Skill>TypeScript</Skill>
      <Skill>NextJS</Skill>
      <Skill>ReactJS</Skill>
    </SkillGroup>

    <SkillGroup
      label="Back-end"
      proficiency="Senior"
    >
      <Skill>JavaScript</Skill>
      <Skill>TypeScript</Skill>
      <Skill>NextJS</Skill>
      <Skill>ReactJS</Skill>
    </SkillGroup>

    <SkillGroup
      label="DevOps"
      proficiency="Senior"
    >
      <Skill>JavaScript</Skill>
      <Skill>TypeScript</Skill>
      <Skill>NextJS</Skill>
      <Skill>ReactJS</Skill>
    </SkillGroup>
  </div>
)

const SkillGroup = ({ label, proficiency, children }: { label: string, proficiency: string, children: ReactNode }) => (
  <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
    <div className="flex flex-col max-sm:w-full">
      <h4>{label}</h4>
      <small className="text-gray-500">{proficiency}</small>
    </div>
    <div className="flex flex-wrap gap-2">
      {children}
    </div>
  </div>
)

export { Skills }