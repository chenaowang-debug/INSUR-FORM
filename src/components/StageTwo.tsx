import React from 'react';
import { useFormSummaryContext } from '../formContextProvider';
import handleFormChange from '../handleFormChange';

interface StageTwoProps {}

const StageTwo: React.FC<StageTwoProps> = () => {
  const { formSummary, setFormSummary } = useFormSummaryContext();
  return (
    <div className='stage-two-form'>
      <div className='user-address'>
        {' '}
        <label htmlFor='address' style={{ marginRight: '20px' }}>
          <span className='required'>*</span>Address:{' '}
        </label>
        <input
          id='address'
          style={{ width: '610px' }}
          name='address'
          value={formSummary.address}
          onChange={(e) => handleFormChange(e, setFormSummary)}
          required
        ></input>
      </div>
      <div className='rest-address'>
        <label htmlFor='city' style={{ marginRight: '5px' }}>
          <span className='required'>*</span>City/Town:{' '}
        </label>
        <input
          id='city'
          name='cityTown'
          value={formSummary.cityTown}
          onChange={(e) => handleFormChange(e, setFormSummary)}
          required
        ></input>
        <label htmlFor='state'>
          <span className='required'>*</span>State:{' '}
        </label>
        <input
          id='state'
          name='state'
          value={formSummary.state}
          onChange={(e) => handleFormChange(e, setFormSummary)}
          required
        ></input>
        <label htmlFor='zipcode'>
          <span className='required'>*</span>Zip Code:{' '}
        </label>
        <input
          id='zipcode'
          name='zipcode'
          value={formSummary.zipcode}
          onChange={(e) => handleFormChange(e, setFormSummary)}
          required
        ></input>
      </div>
    </div>
  );
};

export default StageTwo;
