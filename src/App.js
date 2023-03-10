import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import columns from "./columnProps.js";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function App() {
  const [csvData, setCsvData] = useState("");
  const [question, setQuestion] = useState("");

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await fetch(process.env.REACT_APP_API_URL);
        const data = await res.json();
        setCsvData(data);
        setQuestion(data[0].Question);
      };
      getData();
    } catch (error) {
      window.alert("Sorry, can not get data from API...");
    }
  }, []);

  const Table = () => {
    return (
      <div className="wrapper">
        <div className="question">
          <p>{question}</p>
        </div>
        <div className="ag-theme-alpine">
          <AgGridReact
            rowData={csvData}
            columnDefs={columns}
            pagination={true}
          />
        </div>
      </div>
    );
  };

  return <Table />;
}

export default App;
