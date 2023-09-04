import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { ReactNode } from "react";
import Image from "next/image";
import upworkSvg from "@/assets/upwork.svg";

const Title = () => (
  <section className="mb-8">
    <h1 className="text-3xl font-bold leading-loose">Pavel Gasanov</h1>
    <h5 className="text-gray-500">Software Engineer</h5>
    <div className="flex flex-wrap gap-4 mt-4">
      <Social href="mailto:pogasanov@gmail.com">
        <Mail size={20}/>
        pogasanov@gmail.com
      </Social>
      <Social href="https://github.com/pogasanov/">
        <Github size={20}/>
        pogasanov
      </Social>
      <Social href="https://twitter.com/pogasanov/">
        <Twitter size={20}/>
        pogasanov
      </Social>
      <Social href="https://www.linkedin.com/in/pogasanov/">
        <Linkedin size={20}/>
        pogasanov
      </Social>
      <Social href="https://www.upwork.com/freelancers/~01ca324e515aed29c9/">
        <Image src={upworkSvg} alt="Upwork icon" width={20}/>
        pogasanov
      </Social>
    </div>
  </section>
)

const Social = ({ href, children }: { href: string, children: ReactNode }) => (
  <a
    href={href}
    target="_blank"
    className="underline underline-offset-2 decoration-dashed flex w-max items-center gap-1 text-sm text-gray-600"
  >
    {children}
  </a>
)

export { Title }