import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthToken from "./components/AuthToken";
import Payment from "./components/Payment";
import SuccessPage from "./components/SuccessPage";
import FailurePage from "./components/FailurePage";

const App = () => {
    const [token, setToken] = useState("");

    return (
        <Router>
            <div>
                <h1 className="text-center text-3xl font-bold mt-6">PhonePe Payment Integration</h1>
                <AuthToken setToken={setToken} />
                <Payment token={token} />

                <Routes>
                    <Route path="/payment-success" element={<SuccessPage />} />
                    <Route path="/payment-failed" element={<FailurePage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
