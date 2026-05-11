const Row = ({ children, classNames = '' }) => {
  return (
    <div className={`flex flex-row ${classNames}`}>
      {children}
    </div>
  );
};

export default Row;
