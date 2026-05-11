const ConstrainedBox = ({ children, classNames = '' }) => {
  return (
    <div className={`max-w-6xl mx-auto flex ${classNames}`}>
      {children}
    </div>
  );
};

export default ConstrainedBox;
