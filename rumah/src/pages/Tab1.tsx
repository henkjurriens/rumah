import { IonCard, IonCardContent, IonContent, IonPage } from '@ionic/react';
import React from 'react';
import Temp from '../components/Temp';
import './Tab1.css';

const Tab1: React.FC = () => {
  const ws = new WebSocket('ws://localhost:3000');
  const [temp, setTemp] = React.useState('20');
 
  // Connection opened
  ws.addEventListener('open', function (event) {
    ws.send('Hello Server!');
  });

  // Listen for messages
  ws.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
    setTemp(event.data);
  });


  return (
    <IonPage>
      <IonContent fullscreen className="theme home" >
          <Temp temp={temp}></Temp>

          <div className="mt-40 flex">
            <IonCard className="w-1/2">
              <IonCardContent>
                Garden  
              </IonCardContent>
              
            </IonCard>

            <IonCard className="w-1/2">
              <IonCardContent>
                Living room  
              </IonCardContent>
              
            </IonCard>

          </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
