import data from "@/data.json";

import { Title } from "@/components/Title";
import { Section } from "@/components/Section";
import { Languages } from "@/components/Languages";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";

export default function Home() {
  return (
    <main className="mx-auto max-w-[52rem] px-4 py-4 print:p-0 md:py-12">
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
