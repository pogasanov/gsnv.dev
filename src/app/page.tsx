import { Title } from "@/components/Title";
import { Section } from "@/components/Section";
import { Languages } from "@/components/Languages";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="mx-auto max-w-[52rem] px-4 py-4 print:p-0 md:py-12">
      <Title/>

      <Section label="Skills">
        <Skills/>
      </Section>

      <Section label="About">
        Pavel is a web engineer and senior full-stack developer with a master's degree in computer science. He has
        extensive experience in projects of all sizes, from small prototypes to large-scale online intranets, data
        processing platforms, content management systems, and long-term React and Django assignments. Pavel is a
        passionate programmer who loves working in collaborative environments, always finding a common language among
        team members to bring optimal solutions to complex problems.
      </Section>

      <Section label="Projects">
        <Projects/>
      </Section>

      <Section label="Education">
        <Education/>
      </Section>

      <Section label="Languages">
        <Languages/>
      </Section>
    </main>
  )
}
