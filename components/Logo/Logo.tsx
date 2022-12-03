import cn from 'classnames';

interface Props {
  textSize?: string;
}

const Logo = ({ textSize = 'text-4xl' }: Props) => (
  <h2 className={cn(textSize, 'font-extrabold tracking-tight text-gray-700 leading-none')}>
    R<span className="text-emerald-600">G</span>
  </h2>
);

export default Logo;
