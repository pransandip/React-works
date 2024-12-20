type Props = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: Props) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h3>
        {props.isLoggedIn
          ? `Welcome ${props.name}! you have ${messageCount} unread messages`
          : `Welcome Guest`}
      </h3>
    </div>
  );
};

export default Greet;
