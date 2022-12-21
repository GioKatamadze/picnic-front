import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [csvData, setCsvData] = useState("");

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

  console.log(csvData);
}

export default App;
