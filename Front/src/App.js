import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import HomeTemplate from './components/HomeTemplate';
import Login from './components/login/login';
import Join from './components/join';
import Home from './components/Home';
import NotFound from './components/NotFound';
import React, { useEffect, useState } from 'react';

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
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/HomeTemplate" element={<HomeTemplate />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                {/* 다른 주소를 입력했을 경우 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;