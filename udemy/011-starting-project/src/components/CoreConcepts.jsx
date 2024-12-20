import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

const CoreConcepts = () => {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((item, index) => (
          <CoreConcept {...item} key={index + 1} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
