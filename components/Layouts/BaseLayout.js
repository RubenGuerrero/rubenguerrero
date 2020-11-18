import PropTypes from 'prop-types';

const BaseLayout = ({ children }) => {
  return (
    <div className="overflow-hidden bg-white">
      <div className="mx-auto max-w-screen-xl">{children}</div>
    </div>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.any,
};

export default BaseLayout;
