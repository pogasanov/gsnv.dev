type IProps = {
  languages: {
    language: string,
    fluency: string,
  }[]
}

const Languages = (props: IProps) => {
  const { languages } = props

  return (
    <div className="flex flex-wrap items-center gap-4 max-sm:gap-2">
      {languages.map(lang => (
        <Language
          language={lang.language}
          fluency={lang.fluency}
        />
      ))}
    </div>
  )
}

const Language = ({ language, fluency }: { language: string, fluency: string }) => (
  <div className="flex items-baseline gap-2 max-sm:w-full">
    <h4 className="font-bold">{language}</h4>
    <small className="text-gray-500 dark:text-gray-300">{fluency}</small>
  </div>
)

export { Languages }