type Props = {
  names: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: Props) => {
  return (
    <div>
      {props.names?.map((name, index) => {
        return (
          <h3 key={name.first}>
            {index + 1}. {name.first} {name.last}
          </h3>
        );
      })}
    </div>
  );
};

export default PersonList;
