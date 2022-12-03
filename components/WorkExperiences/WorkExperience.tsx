import clx from 'classnames';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { WorkExperienceProps } from './WorkExperience.inteface';

const WorkExperience = ({ work, nextImageColor }: WorkExperienceProps) => (
  <div className="mb-8 flex relative">
    <div className={clx('w-[1px] absolute h-full top-8 left-4 -ml-[0.5px]')} style={{
      backgroundImage: `linear-gradient(to bottom, ${work.imageColor}, ${nextImageColor})`
    }} />
    <div className="w-12 flex-0">
      { work.imagePath ? <Image
        src={work.imagePath}
        className="w-8 rounded-full"
        alt={work.company}
        width={64}
        height={64}
      /> : <div className="w-8 h-8 rounded-full flex items-center justify-center bold" style={{ backgroundColor: work.imageColor }}>
        {work.company[0]}
      </div> }
    </div>
    <div className="flex-1">
      <div className="text-gray-600 text-lg font-bold">
        {work.company} - {work.position}
      </div>
      <div className="mb-2 text-gray-500 text-sm">Jun. 2016 - Now</div>
      <ReactMarkdown
        components={{
          p: (props) => <p className="pb-4" {...props} />,
          ul: (props) => <ul className="mb-4 pl-2 list-inside list-disc" {...props} />,
        }}
      >
        {work.description}
      </ReactMarkdown>

      {!!work.stack?.length && (
        <p className="text-gray-500 italic">Tech used: {work.stack.join(', ')}</p>
      )}
    </div>
  </div>
);

export { WorkExperience }