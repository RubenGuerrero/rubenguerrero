export const Skills = ({ title, skills }: { title: string; skills: string[] }) => (
  <>
    <h2 className="mb-5 mt-6 text-2xl font-bold">{title}</h2>
    <ul className="flex flex-wrap">
      {skills.map((skill) => (
        <li
          className="mb-2 mr-2 p-2 whitespace-nowrap leading-none bg-gray-200 rounded-md"
          key={skill}
        >
          {skill}
        </li>
      ))}
    </ul>
  </>
);
