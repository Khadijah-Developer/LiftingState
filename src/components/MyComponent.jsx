const MyComponent = (props) => {
  const onClickHandler = (e) => {
    alert("You have clicked the button");
  };

  return props.movies.map((item, index) => {
    return <button onClick={onClickHandler}>{item}</button>;
  });
};

export default MyComponent;
