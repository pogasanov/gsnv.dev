import { Group, Skill } from "@/components/Common";

const Projects = () => (
  <div className="flex flex-col gap-4">
    <Group
      label="Icowork"
      position="Full-Stack Developer"
      link="https://icowork.co"
    >
      <div className="my-2 flex flex-wrap gap-2">
        <Skill>JavaScript</Skill>
        <Skill>TypeScript</Skill>
        <Skill>NextJS</Skill>
        <Skill>ReactJS</Skill>
      </div>
      <p>
        Icowork helps people find, book, and review workspaces, offices, meeting rooms, and conference halls.
      </p>
      <p>
        As the website's full-stack developer, I changed its front-end redesign using a Figma layout, added server-side
        rendering to support SEO processes, and implemented multiple features. These improvements ultimately made the
        website one of the top three coworking aggregators in the Russian segment.
      </p>
    </Group>

    <Group
      label="Camcorder AI"
      position="Full-Stack Developer"
      link="https://clipper.camcorder.ai/"
    >
      <div className="my-2 flex flex-wrap gap-2">
        <Skill>JavaScript</Skill>
        <Skill>TypeScript</Skill>
        <Skill>NextJS</Skill>
        <Skill>ReactJS</Skill>
      </div>
    </Group>

    <Group
      label="Quickbutik"
      position="Full-Stack Developer"
      link="https://quickbutik.com"
    >
      <div className="my-2 flex flex-wrap gap-2">
        <Skill>JavaScript</Skill>
        <Skill>TypeScript</Skill>
        <Skill>NextJS</Skill>
        <Skill>ReactJS</Skill>
      </div>
      <p>
        Simple, all-in-one eCommerce solution designed to launch and grow their online sales quickly. I was responsible
        for converting the site from Gatsby to Nextjs, connecting to Sanity CMS. I also led a redesign and several
        quality-of-life improvements.
      </p>
    </Group>

    <Group
      label="Klangkantine"
      position="Full-Stack Developer"
      link="https://klangkantine.de/"
    >
      <div className="my-2 flex flex-wrap gap-2">
        <Skill>JavaScript</Skill>
        <Skill>TypeScript</Skill>
        <Skill>NextJS</Skill>
        <Skill>ReactJS</Skill>
      </div>
      <p>
        A React-based CRM for audio artists and creators. I was in charge of creating both the back end, front end and
        converting XD to pixel-perfect layout using MUI components. Additionally, I changed the main landing page and
        developed several features.
      </p>
    </Group>

    <Group
      label="Dividend Stock Club Website"
      position="Full-Stack Developer"
      link="https://project-roi.com/"
    >
      <div className="my-2 flex flex-wrap gap-2">
        <Skill>JavaScript</Skill>
        <Skill>TypeScript</Skill>
        <Skill>NextJS</Skill>
        <Skill>ReactJS</Skill>
      </div>
      <p>
        Project ROI's website is a place for Russian dividend investors to share their knowledge and ideas. It was built
        using Laravel, PHP, and MySQL.
      </p>
      <p>
        The main feature I implemented is a private cabinet for videos, articles, and useful Google Sheets that members
        of the club can access. The website is powered by IEX Cloud, the Telegram Bot API, and a curated list of stocks
        that members can consult to make informed investment decisions.
      </p>
    </Group>

    <Group
      label="Correspondence.legal"
      position="Full-Stack Developer"
      link="https://github.com/pogasanov/clsite"
    >
      <div className="my-2 flex flex-wrap gap-2">
        <Skill>JavaScript</Skill>
        <Skill>TypeScript</Skill>
        <Skill>NextJS</Skill>
        <Skill>ReactJS</Skill>
      </div>
      <p>
        Correspondence.legal is a professional profile site for attorneys. I built it from scratch using Django with
        Vue.js components to improve user experience. I managed a team of three developers and one designer.
      </p>
    </Group>
  </div>
)

export { Projects }