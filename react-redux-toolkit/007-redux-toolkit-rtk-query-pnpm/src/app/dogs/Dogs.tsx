import { useState } from "react";
import { useFetchBreedsQuery } from "../../store/slices/dogs/dogsAPI";

type Props = {};

const Dogs = (props: Props) => {
  const [numDogs, setNumDogs] = useState<number>(10);
  const { data = [] } = useFetchBreedsQuery(numDogs);

  return (
    <div>
      <div>
        <p>Dogs to fetch:</p>
        <select
          value={numDogs}
          onChange={(e) => setNumDogs(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <h2>Number of dogs Fetched: {data.length}</h2>
      <table>
        <thead>
          <tr>
            <th className="color-yellow">Name</th>
            <th className="color-yellow">Picture</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dog) => (
            <tr key={dog.id}>
              <td>{dog.name}</td>
              <td>
                <img
                  src={dog.image.url}
                  alt={dog.name}
                  height={250}
                  width={350}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dogs;
