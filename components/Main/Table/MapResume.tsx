/* eslint-disable react/jsx-key */
import { ITableData } from "config";
import React from "react";

const MapResume = (props: { rowsData: ITableData[] }) => {
  const resume: any = {};

  props.rowsData.forEach((rowData) => {
    const { name, pattern, occurrencesByLine, executionTimeMS } = rowData;
    let totalOccurrences = 0;

    const allOccurrences = occurrencesByLine as any;
    for (const line in allOccurrences) {
      totalOccurrences += allOccurrences[line].length;
    }

    if (!resume[pattern]) {
      resume[pattern] = [];
    }

    resume[pattern].push({ name, totalOccurrences, executionTimeMS });
  });

  const patterns = Object.keys(resume);

  return (
    <>
      {patterns.map((pattern) => (
        <tr>
          <th>
            <p className="text-center h5">Patrón: {pattern}</p>
            <ul>
              {resume[pattern].map((algorithmData: {name:string, totalOccurrences: number, executionTimeMS: number}) => {
                const { name, totalOccurrences, executionTimeMS } =
                  algorithmData;
                return (
                  <li className="fw-normal">{`Para el algoritmo ${name} encontraron ${totalOccurrences} coincidencias y la búsqueda tomó ${executionTimeMS} milisegundos.`}</li>
                );
              })}
            </ul>
          </th>
        </tr>
      ))}
    </>
  );
};

export default MapResume;
