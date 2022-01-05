import React, { useState, useEffect } from "react";
import { Form } from "@components/Main/Form";
import { Table } from "@components/Main/Table";
import { ITableData } from "config";

export const Main = () => {
    const [data, setData] = useState<ITableData[][]>([])

    return (
        <main className="container " style={{minHeight: "85vh"}}>
            <div className="row mt-2">
                <Form setData={setData}/>
            </div>
            <div className="row mt-4 d-flex flex-column">
                <Table data={data}/>
            </div>

        </main>
    )
}
