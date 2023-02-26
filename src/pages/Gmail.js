import React from 'react';

const Gmail = () => {
  const email = "lemalpro513@gmail.com";
  const subject = "Objet du message";
  const body = "Contenu du message";

  return (
    <a href={`https://mail.google.com/mail/u/0/?fs=1&to=lemalpro513@gmail.com&su=Objet&body=Message&tf=cm`} target="_blank" rel="noreferrer">
      <img src="gmaillogo.png" alt="mon gmail" width="40" height="40" />  
    </a>
  );
}

export default Gmail;
