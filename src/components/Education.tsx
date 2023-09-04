import { Group } from "@/components/Common";

const Education = () => (
  <div className="flex flex-col gap-4">
    <Group
      label="Siberian Federal University"
      position="MSc of Computer Science"
      link="https://www.sfu-kras.ru/en"
      dates={[new Date(2012, 8), new Date(2014, 6)]}
    />
    <Group
      label="Siberian Federal University"
      position="Bachelor of Computer Science"
      link="https://www.sfu-kras.ru/en"
      dates={[new Date(2007, 8), new Date(2012, 6)]}
    />
  </div>
)

export { Education }