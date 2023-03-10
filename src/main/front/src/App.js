import HomeTemplate from './components/HomeTemplate';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `http://localhost:8080/api/hello`
            );
            setData(response.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <HomeTemplate />
            {/* 백엔드에서 가져온 데이터입니다 : {data} */}
        </div>
    );
}

export default App;