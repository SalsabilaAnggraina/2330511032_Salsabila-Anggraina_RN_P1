import { useEffect } from 'react';
useEffect(() => {
  console.log('Komponen mount sekali');
  return () => console.log('Cleanup saat unmount');
}, []);
