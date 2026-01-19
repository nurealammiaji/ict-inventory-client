import React from 'react';
import { Outlet } from 'react-router-dom';

const SettingsPanel = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default SettingsPanel;