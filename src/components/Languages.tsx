const Languages = () => (
  <div className="flex flex-wrap items-center gap-4 max-sm:gap-2">
    <Language
      language="Russian"
      proficiency="Native speaker"
    />
    <Language
      language="English"
      proficiency="Fluent"
    />
  </div>
)

const Language = ({ language, proficiency }: { language: string, proficiency: string }) => (
  <div className="flex items-baseline gap-2 max-sm:w-full">
    <h4 className="font-bold">{language}</h4>
    <small className="text-gray-500">{proficiency}</small>
  </div>
)

export { Languages }