import React from 'react';

interface StageFiveProps {}

const StageFive: React.FC<StageFiveProps> = () => {
  return (
    <div className='stage-five-form'>
      <p>
        Thank you for your order! An order confirmation has been emailed to you.
      </p>
    </div>
  );
};

export default StageFive;
