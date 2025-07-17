import React from 'react'

export interface InfoAlertProps {
  title: string;
  message: string;
  highlightedMessage: string;
}

const InfoAlert: React.FC<InfoAlertProps> = ({ title, message, highlightedMessage }) => {
  return (
    <div>
      <h4 className='text-center'>{title}</h4>
      <hr />
      <p>{message}</p>
      <p className='text-warning'>
        <strong>{highlightedMessage}</strong>
      </p>
    </div>
  )
}

export default InfoAlert