const BaseLayout = ({ children }) => {
  return (
    <div className="overflow-hidden bg-white">
      <div className="mx-auto">{children}</div>
    </div>
  );
};

export default BaseLayout;
