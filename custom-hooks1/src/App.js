// import { useState, useEffect } from 'react';
import { useOnlineStatus } from './useOnlineStatus.js';

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline? '✅ Online' : '❌ Disconnected'}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();
  function handleSaveClick() {
    console.log('✅ Progress saved');
  }
  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}

function App() {

  // const [isOnline, setIsOnline] = useState(true); 
  
  // useEffect(() => {
  //   function handleOnline() {
  //     setIsOnline(true);
  //   }
  //   function handleOffline() {
  //     setIsOnline(false);
  //   }

  //   window.addEventListener('online', handleOnline);
  //   window.addEventListener('offline', handleOffline);

  //   return () => {
  //     window.removeEventListener('online', handleOnline);
  //     window.removeEventListener('offline', handleOffline);
  //   };
    
  // }, []); 

  return (
    <>
      {/* <h1>{isOnline ? '✅ Online Test' : '❌ Disconnected'}</h1> */}
      <SaveButton />      
      <StatusBar />
    </>    
  );
} 
export default App;
