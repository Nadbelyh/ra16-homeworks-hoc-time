function Popular(props) {
  return (
    <div className="popular">
      <span className="label">Popular!</span>
      {props.children}
    </div>
  );
}

export default Popular;
