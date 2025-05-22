import { useEffect, useState } from "react";
import axios from "axios"; 
import Background1 from  "../assets/img/Background_1.png"

export default function Api() {
    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(""); 

    const URL = "https://jsonplaceholder.typicode.com/posts";

    const fetchApi = async () => {
        try {
            const response = await axios.get(URL); 
            setData(response.data); 
        } catch (error) {
            setError("Error: " + error.message); 
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        fetchApi(); 
    }, []); 

    return (
        <>
            {
                error ? (
                    <p>{error}</p>
                ) : loading ? (
                    <p>Loading...</p>
                ) : (

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    {data.map((datas, index) => (
                        <div className="card p-6 rounded-xl shadow-md overflow-hidden bg-slate-800 outline-1 outline-slate-900" key={datas.userId}>
                            <img src={Background1} alt="" className=" w-full h-48 object-cover rounded-2xl"/>
                            <h1 className="text-lg text-white font-bold mb-2">{datas.title}</h1>
                            <p className="text-sm text-white">{datas.body}</p>
                        </div>

                    ))}        
                    </div>       
                )
            }
        </>
    );
}