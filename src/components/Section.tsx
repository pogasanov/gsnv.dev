import { ReactNode } from "react";

const Section = ({ children, label }: { children: ReactNode, label: ReactNode }) => (
  <section className="mb-8 px-4">
    <h2 className="px-2 mb-4 -ml-4 bg-black dark:bg-gray-700 text-white font-semibold w-max">{label}</h2>
    {children}
  </section>
)

export { Section }