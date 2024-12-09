import React from 'react';
import { useFormSummaryContext } from '../formContextProvider';
import handleFormChange from '../handleFormChange';

interface StageOneProps {}

const StageOne: React.FC<StageOneProps> = () => {
  const { formSummary, setFormSummary } = useFormSummaryContext();

  return (
    <form className='stage-one-form'>
      <div className='user-name'>
        {' '}
        <label htmlFor='first-name'>
          {' '}
          <span className='required'>*</span>First Name:{' '}
        </label>
        <input
          id='first-name'
          name='firstName'
          value={formSummary.firstName}
          onChange={(e) => handleFormChange(e, setFormSummary)}
          required
        ></input>
        <label htmlFor='middle-name'>Middle Name: </label>
        <input
          id='middle-name'
          name='middleName'
          value={formSummary.middleName}
          onChange={(e) => handleFormChange(e, setFormSummary)}
        ></input>
        <label htmlFor='last-name'>
          <span className='required'>*</span>Last Name:{' '}
        </label>
        <input
          id='last-name'
          name='lastName'
          value={formSummary.lastName}
          onChange={(e) => handleFormChange(e, setFormSummary)}
          required
        ></input>
      </div>
      <div className='user-preferred-name'>
        <label htmlFor='preferred-name'>Preferred Name: </label>
        <input
          id='preferred-name'
          name='preferredName'
          value={formSummary.preferredName}
          onChange={(e) => handleFormChange(e, setFormSummary)}
        ></input>
      </div>
      <div className='user-email'>
        <label htmlFor='email' style={{ marginRight: '35px' }}>
          <span className='required'>*</span>Email:{' '}
        </label>
        <input
          id='email'
          style={{ width: '300px' }}
          name='email'
          value={formSummary.email}
          onChange={(e) => handleFormChange(e, setFormSummary)}
          required
        ></input>
      </div>
    </form>
  );
};

export default StageOne;
