import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import SellOldGold from './pages/SellOldGold';
import BuyNewGold from './pages/BuyNewGold';
import GoldRates from './pages/GoldRates';
import MyValuations from './pages/MyValuations';
import MyCertificates from './pages/MyCertificates';
import HUIDVerification from './pages/HUIDVerification';
import Profile from './pages/Profile';
import HelpSupport from './pages/HelpSupport';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route index element={<Navigate to="/dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="sell" element={<SellOldGold />} />
                <Route path="buy" element={<BuyNewGold />} />
                <Route path="rates" element={<GoldRates />} />
                <Route path="valuations" element={<MyValuations />} />
                <Route path="certificates" element={<MyCertificates />} />
                <Route path="huid" element={<HUIDVerification />} />
                <Route path="profile" element={<Profile />} />
                <Route path="help" element={<HelpSupport />} />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
