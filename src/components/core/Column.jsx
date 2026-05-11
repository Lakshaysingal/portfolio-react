const Column = ({ children, classNames = '' }) => {
  return (
    <div className={`flex flex-col ${classNames}`}>
      {children}
    </div>
  );
};

export default Column;
