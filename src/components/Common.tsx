import { ReactNode } from "react"

const Group = ({ children, label, position, dates, link }: {
  label: string,
  position: string,
  dates?: [Date, Date],
  link?: string,
  children?: ReactNode,
}) => (
  <div>
    <div className="mb-2 flex flex-wrap items-baseline justify-between gap-1 max-sm:mb-1">
      <h3 className="max-sm:w-full">
        {link && (
          <a
            href={link}
            target="_blank"
            className="underline underline-offset-2 decoration-dashed text-with-slashes underline-offset-4">
            {label}
          </a>
        )}
        {!link && <span>{label}</span>}
      </h3>
      {dates && (
        <div className="text-sm text-gray-500">
          <time dateTime={dates[0].toISOString()}>
            {dates[0].toLocaleString('en-US', { month: "short", year: "numeric" })}
          </time>
          -
          <time dateTime={dates[1].toISOString()}>
            {dates[1].toLocaleString('en-US', { month: "short", year: "numeric" })}
          </time>
        </div>
      )}
    </div>
    <h5 className="text-gray-500 max-sm:text-sm">{position}</h5>
    {children}
  </div>
)

const Skill = ({ children }: { children: ReactNode }) => (
  <span className="border border-black px-2 py-0.5 text-sm">
    {children}
  </span>
)

export { Group, Skill }