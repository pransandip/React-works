type Props = {
  status: "loading" | "success" | "error";
};

const Status = (props: Props) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched Successfully!";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return <div style={{ color: "green" }}>{message}</div>;
};

export default Status;
