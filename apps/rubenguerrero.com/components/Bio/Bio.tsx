import Image from 'next/image';
import avatar from 'public/avatar.png';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

export const Bio = () => (
  <div className="mb-5 mt-4 mx-auto text-center md:sticky md:top-5">
    <div className="flex justify-center">
      <div>
        <Image
          src={avatar}
          className="w-24 rounded-full"
          alt="Rubén Guerrero"
          placeholder="blur"
          width={96}
          height={96}
        />
      </div>
    </div>
    <div className="pt-1 font-bold">Rubén Guerrero Sánchez</div>
    <div className="mb-2 text-gray-600 dark:text-gray-500 text-sm">Senior Software Engineer</div>
    <div className="text-center text-sm">
      <a
        href="mailto:yo@rubenguerrero.com"
        className="inline-block align-middle h-8 hover:underline leading-none"
      >
        yo@rubenguerrero.com
      </a>
    </div>
    <div className="flex items-center justify-center gap-2">
      <a
        href="https://github.com/RubenGuerrero"
        target="_blank"
        rel="noreferrer"
        className="text-gray-400 hover:text-gray-600 transition-colors"
      >
        <FaGithubSquare size={24} />
      </a>
      <a
        href="https://twitter.com/ruben_guerrero"
        target="_blank"
        rel="noreferrer"
        className="text-gray-400 hover:text-gray-600 transition-colors"
      >
        <FaTwitterSquare size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/ruben-guerrero-/"
        target="_blank"
        rel="noreferrer"
        className="text-gray-400 hover:text-gray-600 transition-colors"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  </div>
);
