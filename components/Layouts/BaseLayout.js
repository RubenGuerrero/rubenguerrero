const BaseLayout = ({ children }) => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="mx-auto">{children}</div>
    </div>
  );
};

export default BaseLayout;
