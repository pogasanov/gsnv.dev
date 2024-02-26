import { Group, Skill } from "@/components/Common";

type IProps = {
  projects: {
    name: string,
    description?: string,
    highlights?: string[],
    url?: string,
    roles?: string[],
    keywords?: string[],
    startDate?: string,
    endDate?: string,
  }[]
}

const Projects = (props: IProps) => {
  const { projects } = props

  return (
    <div className="flex flex-col gap-8">
      {projects.map(project => (
        <Group
          key={project.name}
          label={project.name}
          roles={project.roles}
          link={project.url}
        >
          {project.keywords && (
            <div className="my-1 flex flex-wrap gap-2">
              {project.keywords.map(keyword => <Skill>{keyword}</Skill>)}
            </div>
          )}

          {project.description && (
            <p>
              {project.description}
            </p>
          )}

          {project.highlights && (
            <ul className="list-disc ml-4">
              {project.highlights.map(highlight => <li>{highlight}</li>)}
            </ul>
          )}
        </Group>
      ))}
    </div>
  )
}

export { Projects }