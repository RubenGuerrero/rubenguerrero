import { WorkExperienceProps } from './WorkExperience.inteface';
import { renderDate, renderDateAmount } from './utils';
import cn from 'clsx';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

const WorkExperience = ({ work, nextImageColor }: WorkExperienceProps) => (
  <div className="relative mb-8 flex">
    <div
      className={cn('absolute top-8 left-4 -ml-[0.5px] h-full w-[1px]')}
      style={{
        backgroundImage: `linear-gradient(to bottom, ${work.imageColor}, ${nextImageColor})`,
      }}
    />
    <div className="flex-0 w-12">
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
          className="flex h-8 w-8 items-center justify-center rounded-full font-bold text-black"
          style={{ backgroundColor: work.imageColor }}
        >
          {work.company[0]}
        </div>
      )}
    </div>
    <div className="flex-1">
      <div className="text-lg font-bold text-gray-700 dark:text-gray-200">
        {work.company} <span className="text-gray-300">·</span>{' '}
        <span className="text-gray-500 dark:text-gray-200">{work.position}</span>
      </div>
      <div className="mb-2 text-sm text-gray-500 dark:text-gray-500">
        {renderDate(work.startDate, work.endDate)} ·{' '}
        {renderDateAmount(work.startDate, work.endDate, work.showPlusDate)}
      </div>
      <div className="text-gray-900 dark:text-gray-200">
        {!!work.description && (
          <ReactMarkdown
            components={{
              p: ({ children }) => <p className="pb-4">{children}</p>,
              ul: ({ children }) => <ul className="mb-4 list-inside list-disc pl-2">{children}</ul>,
            }}
          >
            {work.description}
          </ReactMarkdown>
        )}
      </div>

      {!!work.stack?.length && (
        <p className="text-sm italic text-gray-500">Tech & Tools: {work.stack}</p>
      )}
    </div>
  </div>
);

export { WorkExperience };
