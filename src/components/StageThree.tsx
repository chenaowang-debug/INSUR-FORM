import React from 'react';
import { useFormSummaryContext } from '../formContextProvider';
import handleFormChange from '../handleFormChange';

interface StageThreeProps {
  isBillingSame: boolean;
  setIsBillingSame: React.Dispatch<React.SetStateAction<boolean>>;
}

const StageThree: React.FC<StageThreeProps> = ({
  isBillingSame,
  setIsBillingSame,
}) => {
  const { formSummary, setFormSummary } = useFormSummaryContext();

  const handleBillingCheckBox = () => {
    setIsBillingSame(!isBillingSame);
    if (!isBillingSame) {
      setFormSummary((prev) => ({
        ...prev,
        billingAddress: formSummary.address,
        billingCityTown: formSummary.cityTown,
        billingState: formSummary.state,
        billingZipCode: formSummary.zipcode,
      }));
    } else {
      setFormSummary((prev) => ({
        ...prev,
        billingAddress: '',
        billingCityTown: '',
        billingState: '',
        billingZipCode: '',
      }));
    }
  };

  return (
    <div className='stage-three-form'>
      <div className='payment-info'>
        <label htmlFor='card-number'>
          <span className='required'>*</span>Card Number:{' '}
        </label>
        <input
          id='card-number'
          name='cardNumber'
          value={formSummary.cardNumber}
          onChange={(e) => handleFormChange(e, setFormSummary)}
          required
        ></input>
        <label htmlFor='exp-date'>
          <span className='required'>*</span>Exp Date:{' '}
        </label>
        <input
          id='exp-date'
          name='expDate'
          value={formSummary.expDate}
          onChange={(e) => handleFormChange(e, setFormSummary)}
          required
        ></input>
        <label htmlFor='ccv'>
          <span className='required'>*</span>CCV:{' '}
        </label>
        <input
          id='ccv'
          name='ccv'
          value={formSummary.ccv}
          onChange={(e) => handleFormChange(e, setFormSummary)}
          required
        ></input>
      </div>
      <div className='same-billing-check-box'>
        Same as shipping address{' '}
        <input type='checkbox' onChange={handleBillingCheckBox} />
      </div>

      <div className='billing-address'>
        <label htmlFor='billing-address' style={{ marginRight: '20px' }}>
          <span className='required'>*</span>Billing Address:{' '}
        </label>
        <input
          id='billing-address'
          style={{ width: '562px' }}
          name='billingAddress'
          value={formSummary.billingAddress}
          onChange={(e) => handleFormChange(e, setFormSummary)}
          required
        ></input>
      </div>
      <div className='rest-billing-address'>
        <label htmlFor='billing-city' style={{ marginRight: '5px' }}>
          <span className='required'>*</span>City/Town:{' '}
        </label>
        <input
          id='billing-city'
          name='billingCityTown'
          value={formSummary.billingCityTown}
          onChange={(e) => handleFormChange(e, setFormSummary)}
          required
        ></input>
        <label htmlFor='billing-state'>
          <span className='required'>*</span>State:{' '}
        </label>
        <input
          id='billing-state'
          name='billingState'
          value={formSummary.billingState}
          onChange={(e) => handleFormChange(e, setFormSummary)}
        ></input>
        <label htmlFor='billing-zipcode'>
          <span className='required'>*</span>Zip Code:{' '}
        </label>
        <input
          id='billing-zipcode'
          name='billingZipCode'
          value={formSummary.billingZipCode}
          onChange={(e) => handleFormChange(e, setFormSummary)}
          required
        ></input>
      </div>
    </div>
  );
};

export default StageThree;
