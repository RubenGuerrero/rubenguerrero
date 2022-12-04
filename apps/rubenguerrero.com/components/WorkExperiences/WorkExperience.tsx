import { WorkExperienceProps } from './WorkExperience.inteface';
import { renderDate, renderDateAmount } from './utils';
import cn from 'clsx';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

const WorkExperience = ({ work, nextImageColor }: WorkExperienceProps) => (
  <div className="mb-8 flex relative">
    <div
      className={cn('w-[1px] absolute h-full top-8 left-4 -ml-[0.5px]')}
      style={{
        backgroundImage: `linear-gradient(to bottom, ${work.imageColor}, ${nextImageColor})`,
      }}
    />
    <div className="w-12 flex-0">
      {work.imagePath ? (
        <Image
          src={require(`public/${work.imagePath}`)}
          className="w-8 rounded-full"
          alt={work.company}
          placeholder="blur"
          width={64}
          height={64}
        />
      ) : (
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-black"
          style={{ backgroundColor: work.imageColor }}
        >
          {work.company[0]}
        </div>
      )}
    </div>
    <div className="flex-1">
      <div className="text-gray-700 dark:text-gray-200 text-lg font-bold">
        {work.company} <span className="text-gray-300">·</span>{' '}
        <span className="text-gray-500 dark:text-gray-200">{work.position}</span>
      </div>
      <div className="mb-2 text-gray-500 dark:text-gray-500 text-sm">
        {renderDate(work.startDate, work.endDate)} ·{' '}
        {renderDateAmount(work.startDate, work.endDate, work.showPlusDate)}
      </div>
      <div className="text-gray-900 dark:text-gray-200">
        {!!work.description && (
          <ReactMarkdown
            components={{
              p: ({ children }) => <p className="pb-4">{children}</p>,
              ul: ({ children }) => <ul className="mb-4 pl-2 list-inside list-disc">{children}</ul>,
            }}
          >
            {work.description}
          </ReactMarkdown>
        )}
      </div>

      {!!work.stack?.length && (
        <p className="text-gray-500 italic text-sm">Tech & Tools: {work.stack}</p>
      )}
    </div>
  </div>
);

export { WorkExperience };
