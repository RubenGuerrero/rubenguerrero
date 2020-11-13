import cn from 'classnames';

const Logo = ({ textSize = 'text-4xl' }) => (
  <h2 className={cn(textSize, 'font-extrabold tracking-tight text-gray-700 leading-none')}>
    R<span className="text-green-600">G</span>
  </h2>
);

export default Logo;
