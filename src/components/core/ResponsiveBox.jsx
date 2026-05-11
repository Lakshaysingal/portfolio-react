const ResponsiveBox = ({ children, classNames = '', id = '' }) => {
  return (
    <section id={id} className={classNames}>
      {children}
    </section>
  );
};

export default ResponsiveBox;
