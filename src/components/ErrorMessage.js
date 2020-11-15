import React from 'react';
import { useSelector } from 'react-redux';

const ErrorMessage = () => {  
  const status = useSelector(state => state.error);
  return (
    <div>
      {status.error && status.message}
    </div>
  )
}

export default ErrorMessage;