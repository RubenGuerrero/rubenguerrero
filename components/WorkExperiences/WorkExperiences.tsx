import { workExperiences } from './workExperiences.data';
import { WorkExperience } from './WorkExperience';

export const WorkExperiences = () => (
  <>
    <h2 className="mb-5 mt-7 text-2xl font-bold">Work Experience</h2>
    {workExperiences.map((work, index) => (
      <WorkExperience key={index} work={work} nextImageColor={workExperiences[index + 1] ? workExperiences[index + 1].imageColor : undefined} />
    ))}
  </>
);