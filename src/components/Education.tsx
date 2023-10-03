import { Group } from "@/components/Common";

type IProps = {
  education: {
    institution: string,
    url: string,
    area: string,
    studyType: string,
    startDate: string,
    endDate: string,
  }[]
}

const Education = (props: IProps) => {
  const { education } = props

  return (
    <div className="flex flex-col gap-4">
      {education.map((ed, index) => (
        <Group
          key={index}
          label={ed.institution}
          roles={[`${ed.studyType} of ${ed.area}`]}
          link={ed.url}
          dates={[new Date(ed.startDate), new Date(ed.endDate)]}
        />
      ))}
    </div>
  )
}

export { Education }