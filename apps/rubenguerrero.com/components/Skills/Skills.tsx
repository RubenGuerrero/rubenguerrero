export const Skills = ({ title, skills }: { title: string; skills: string[] }) => (
  <>
    <h2 className="mb-5 mt-6 text-2xl font-bold">{title}</h2>
    <ul className="flex flex-wrap text-sm">
      {skills.map((skill) => (
        <li
          className="mb-2 mr-2 whitespace-nowrap rounded-md bg-gray-200 p-2 leading-none dark:bg-gray-700"
          key={skill}
        >
          {skill}
        </li>
      ))}
    </ul>
  </>
);
