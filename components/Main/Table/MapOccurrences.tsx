import React from "react";
import OccurrenceData from "./OccurrenceData";

const MapOccurrences = (props: { occurrences: any }) => {
  const lines = Object.keys(props.occurrences);

  const anyOccurrence = () => {
    if (lines.length == 0) {
      return <h5 className="text-center">0</h5>;
    }
  };

  return (
    <th scope="col">
      {lines.map((line: string, index: number) => {
        return (
          <OccurrenceData
            key={index}
            line={parseInt(line)}
            positions={ props.occurrences[line]}
          />
        );
      })}
      {anyOccurrence()}
    </th>
  );
};

export default MapOccurrences;
