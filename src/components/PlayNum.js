const PlayNum = (props) => {
  const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
  };

  const handleClick = () => {
    props.onClick(props.number, props.status);
  };

  return (
    <button
      data-testid={`number-${props.number}`}
      className={`number ${props.status === 'used' ? 'used' : ''}`}
      style={{ backgroundColor: colors[props.status] }}
      onClick={handleClick}
      data-testId={`number-${props.number}`}
    >
      {props.number}
    </button>
  );
};

export default PlayNum;
