import data from "@/data.json";

import { Title } from "@/components/Title";
import { Section } from "@/components/Section";
import { Languages } from "@/components/Languages";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Actions } from "@/components/Actions";

export default function Home() {
  return (
    <main className="relative mx-auto max-w-[52rem] px-4 my-4 print:m-0 md:my-12">
      <Actions/>

      <Title
        name={data.basics.name}
        label={data.basics.label}
        email={data.basics.email}
        profiles={data.basics.profiles}
      />

      <Section label="Skills">
        <Skills skills={data.skills}/>
      </Section>

      <Section label="About">
        {data.basics.summary}
      </Section>

      <Section label="Education">
        <Education education={data.education}/>
      </Section>

      <Section label="Languages">
        <Languages languages={data.languages}/>
      </Section>
    </main>
  )
}
