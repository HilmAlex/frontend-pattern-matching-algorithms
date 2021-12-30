import React, { useState, useEffect } from "react";
import { Form } from "@components/Main/Form";
import { Table } from "@components/Main/Table";

export const Main = () => {
    const [data, setData] = useState<Array<Object>>([])

    return (
        <main className="container " style={{minHeight: "85vh"}}>
            <div className="row mt-2">
                <Form setData={setData}/>
            </div>
            <div className="row mt-4">
                <Table data={data}/>
            </div>

        </main>
    )
}
