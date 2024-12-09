import React from 'react';
import { useFormSummaryContext } from '../formContextProvider';

const StageFour: React.FC = () => {
  const { formSummary, setFormSummary } = useFormSummaryContext();

  const summaryDisplay = [
    `First Name: ${formSummary.firstName}`,
    `Middle Name: ${formSummary.middleName}`,
    `Last Name: ${formSummary.lastName}`,
    `Preferred Name: ${formSummary.preferredName}`,
    `Email: ${formSummary.email}`,
    `Address: ${formSummary.address}`,
    `City/Town: ${formSummary.cityTown}`,
    `State: ${formSummary.state}`,
    `Zip Code: ${formSummary.zipcode}`,
    `Card Number: ${formSummary.cardNumber}`,
    `Exp Date: ${formSummary.expDate}`,
    `CCV: ${formSummary.ccv}`,
    `Billing Address: ${formSummary.billingAddress}`,
    `Billing City/Town: ${formSummary.billingCityTown}`,
    `Billing State: ${formSummary.billingState}`,
    `Billing Zip Code: ${formSummary.billingZipCode}`,
  ];

  return (
    <div className='summary'>
      {formSummary &&
        summaryDisplay.map((entry, index) => <p key={index}>{entry}</p>)}
    </div>
  );
};

export default StageFour;
