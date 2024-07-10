import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SubscriptionPrompt = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Want More of This?</h2>
        <p className="mb-4">Subscribe to our Premium Plan for exclusive features!</p>

      </div>
    </div>
  );
};

export default SubscriptionPrompt;
