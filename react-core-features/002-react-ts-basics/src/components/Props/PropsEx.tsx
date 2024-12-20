import Person from "./Person";
import PersonList from "./PersonList";
import { nameList } from "../data/data";
import Status from "./Status";
import Heading from "./Heading";
import Oscar from "./Oscar";
import Button from "./Button";

type Props = {};

const PropsEx = (props: Props) => {
  const personName = {
    first: "New",
    last: "Avatar",
  };

  return (
    <div>
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>PlaceHolder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Button
        handleClick={() => {
          console.log("btn clicked");
        }}
      />
    </div>
  );
};

export default PropsEx;
