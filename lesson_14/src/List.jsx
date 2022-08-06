const List = ({ list = [] }) => {
  return (
    <div>
      <ul>
        {list.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
