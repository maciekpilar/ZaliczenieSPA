import React from 'react';
import './Photos.css';
import PhotoItem from './PhotoItem';

function Photos() {
  return (
    <div  id='photos'>
    <div className='photos'>
      <h1>Wiadomości</h1>
      <div className='photos__container'>
        <div className='photos__wrapper'>
          <div className='photos__items'>
            <PhotoItem
              src='images/img-9.jpg'
              text='Poznaj Meta! Nowa nazwa Facebooka. Co oznacza i co zmienia?'
              label='Nowy logotyp Meta Platform'
            />
            <PhotoItem
              src='images/img-2.jpg'
              text='Microsoft i Meta ogłaszają współpracę w ramach aplikacji biznesowych'
              label='wprowadzenie odpowiednich integracji w aplikacjach Teams i Workplace'
            />
          </div>
          <div className='photos__items'>
            <PhotoItem
              src='images/img-3.jpg'
              text='Mark Zuckerberg zgodził się na cenzurę Facebooka w Wietnamie'
              label='Stanach Zjednoczonych opisują kolejne afery związane z Facebookiem'
            />
            <PhotoItem
              src='images/img-4.jpg'
              text='Facebook wycofuje się z systemu rozpoznawania twarzy'
              label='"Rezygnujemy z rozpoznawania twarzy na zdjęciach i filmach"'
            />
            <PhotoItem
              src='images/img-8.jpg'
              text='Mroczne sekrety Facebooka. Co dotąd ujawnili pracownicy?'
              label='Wyciekły dane manipulacji użytkownikami i trauma moderatorów...'
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Photos;