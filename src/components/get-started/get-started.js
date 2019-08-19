import React from 'react';
function GetStartedButton() {
  return <ButtonStyle />;
}

function ButtonStyle() {
  const getStarted = 'GET STARTED';

  return (
    <a href="https://stylegenie.ph/pages/stylebox-plans">
    <button className="getStartedButton">{getStarted}</button >     
    </a >    
  );

}

export default GetStartedButton;