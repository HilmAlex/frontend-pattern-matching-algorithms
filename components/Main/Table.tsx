import { ITableData } from "config";
import React, { useCallback, useEffect, useState } from "react";
import MapOccurrences from "./Table/MapOccurrences";
import MapResume from "./Table/MapResume";

interface Times {
  "brute-force"?: number;
  kmp?: number;
  "boyer-moore"?: number;
}

export const Table = (props: { data: ITableData[][] }) => {
  const { data } = props;

  const [rowsData, setRowsData] = useState<ITableData[]>([]);

  useEffect(() => {

    setRowsData(data.flat(2));
  }, [ data, rowsData]);

  return (
    <>
      <table
        className="table table-bordered border-primary table-striped col mb-0"
        style={{ minHeight: "100%" }}
      >
        <thead>
          <tr className="text-center h4">
            <th scope="col">Algoritmo</th>
            <th scope="col">Patrón</th>
            <th scope="col">Coincidencias</th>
            <th scope="col">Tiempo de Búsqueda</th>
          </tr>
        </thead>
        <tbody>
          {rowsData.map((rowData) => {
            const {
              name,
              pattern,
              occurrencesByLine,
              executionTimeMS,
              executionTimeNS,
            } = rowData;

            return (
              // eslint-disable-next-line react/jsx-key
              <tr className="pt-2">
                <th scope="col" className="text-center">
                  {name}
                </th>
                <th scope="col" className="text-center">
                  {pattern}
                </th>
                <MapOccurrences occurrences={occurrencesByLine} />
                <th scope="col" className="text-center">
                  {executionTimeMS} ms <br /> {executionTimeNS} ns
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>

      <table className="table table-bordered border-primary table-striped col mt-5">
        <thead>
          <tr className="text-center h4">
            <th>Resumen</th>
          </tr>
        </thead>
        <tbody>
          <MapResume rowsData={rowsData} />
        </tbody>
      </table>
    </>
  );
};
