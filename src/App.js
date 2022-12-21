import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function App() {
  const [csvData, setCsvData] = useState("");
  const columns = [
    {
      headerName: "Segment Type",
      field: "Segment Type",
    },
    {
      headerName: "Segment Description",
      field: "Segment Description",
    },
    {
      headerName: "Answer",
      field: "Answer",
    },
    {
      headerName: "Count",
      field: "Count",
    },
    {
      headerName: "Percentage",
      field: "Percentage",
    },
  ];
  useEffect(() => {
    try {
      const getData = async () => {
        const res = await fetch(process.env.REACT_APP_API_URL);
        const data = await res.json();
        setCsvData(data);
      };

      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const Table = () => {
    return (
      <div
        className="ag-theme-alpine"
        style={{ height: "100vh", width: "100wh" }}
      >
        <AgGridReact rowData={csvData} columnDefs={columns} />
      </div>
    );
  };

  return <Table />;
}

export default App;
