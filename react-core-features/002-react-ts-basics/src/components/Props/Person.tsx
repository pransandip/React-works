type Props = {
  name: {
    first: string;
    last: string;
  };
};

const Person = (props: Props) => {
  return (
    <div>
      <p style={{ color: "red" }}>
        {props.name.first} {props.name.last}
      </p>
    </div>
  );
};

export default Person;
