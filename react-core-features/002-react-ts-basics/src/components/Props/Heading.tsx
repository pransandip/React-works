type Props = {
  children: string;
};

const Heading = (props: Props) => {
  return <div>{props.children}</div>;
};

export default Heading;
