import React,{useState} from 'react'
import CSVReader from "react-csv-reader";
const CSVFile = () => {
    const [data, setdata] = useState([])
    
    const handleForce = (data, fileInfo) =>{
        console.log(data, fileInfo);
        setdata(data)

    }
     
    const papaparseOptions = {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
    };

    const handleSubmit=()=>{
        console.log(data,'chekingFIled')
    }
    return (
    <div className="container">
        <CSVReader
            cssClass="react-csv-input"
            label="Select CSV with secret Death Star statistics"
            onFileLoaded={handleForce}
            parserOptions={papaparseOptions}
        />
        <div>
         <button onClick={()=>handleSubmit()}>Submit</button>
        </div>
        <div>
            {data.map((item,index)=>{
               return (<li key={index}>
                   <table>
                        <thead>
                            <tr>
                        {Object.entries(item).map((doc,index)=>{
                            {console.log(doc)}
                            return (
                                    <th>{doc[0]} : {doc[1]}<br/></th>
                            )
                        })}
                       </tr>
                     </thead>
                </table>
                </li>)
            })}
        </div>
    </div>
    )
}

export default CSVFile