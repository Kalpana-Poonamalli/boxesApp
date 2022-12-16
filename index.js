const Box = (props) => {
  //  Write your code here.
  const { className, para } = props;
  return <div className={className}>{para}</div>;
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes">
      <Box className="b box1" para="Small" />
      <Box className="b box2" para="Medium" />
      <Box className="b box3" para="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
