import React from 'react';
import { useLocation } from 'react-router-dom';

const Authentication = ({ children }) => {
  const location = useLocation();
  const isLogin = location.state?.isLogin ?? true;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {React.Children.map(children, child =>
        React.cloneElement(child, { isLogin })
      )}
    </div>
  );
};

export default Authentication;

