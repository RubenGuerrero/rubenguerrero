import cn from 'clsx';

interface Props {
  textSize?: string;
}

const Logo = ({ textSize = 'text-4xl' }: Props) => (
  <h2
    className={cn(
      textSize,
      'font-extrabold leading-none tracking-tight text-gray-700 dark:text-gray-300'
    )}
  >
    R<span className="text-emerald-600">G</span>
  </h2>
);

export default Logo;
