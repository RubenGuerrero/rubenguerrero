import { WorkExperience } from './WorkExperience';
import { WorkExperience as WorkExperienceType } from 'types';

export const WorkExperiences = ({ workExperiences }: { workExperiences: WorkExperienceType[] }) => (
  <>
    <h2 className="mb-5 mt-7 text-2xl font-bold">Work Experience</h2>
    {workExperiences.map((work, index) => (
      <WorkExperience
        key={work.id}
        work={work}
        nextImageColor={
          workExperiences[index + 1] ? workExperiences[index + 1].imageColor : undefined
        }
      />
    ))}
  </>
);
