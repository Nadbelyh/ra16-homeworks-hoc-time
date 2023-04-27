function New(props) {
  return (
    <div className="new">
      <span className="label">New!</span>
      {props.children}
    </div>
  );
}

export default New;
