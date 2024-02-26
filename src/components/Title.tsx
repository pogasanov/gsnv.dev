import { CalendarDays, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { ReactNode } from "react";
import UpworkSvg from "@/assets/UpworkSvg";

type IProps = {
  name: string,
  label: string,
  email: string,
  profiles: {
    network: string,
    username: string,
    url: string,
  }[]
}

const Title = (props: IProps) => {
  const { name, email, label, profiles } = props

  const SocialIcon: Record<string, ReactNode> = {
    "Email": <Mail size={20} />,
    "Github": <Github size={20} />,
    "Twitter": <Twitter size={20} />,
    "LinkedIn": <Linkedin size={20} />,
    "Upwork": <UpworkSvg alt="Upwork icon" width={20} />,
    "Cal": <CalendarDays width={20} />
  }

  return (
    <section className="mb-8">
      <h1 className="text-3xl font-bold leading-loose">{name}</h1>
      <h5 className="text-gray-500 dark:text-gray-300">{label}</h5>
      <div className="flex flex-wrap gap-4 mt-4">
        {profiles.map(profile => (
          <Social key={profile.network} href={profile.url}>
            {SocialIcon[profile.network]}
            {profile.username}
          </Social>
        ))}
      </div>
    </section>
  )
}

const Social = ({ href, children }: { href: string, children: ReactNode }) => (
  <a
    href={href}
    target="_blank"
    className="underline underline-offset-2 decoration-dashed flex w-max items-center gap-1 text-sm text-gray-600 dark:text-gray-300"
  >
    {children}
  </a>
)

export { Title }