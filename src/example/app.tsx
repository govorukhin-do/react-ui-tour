import * as React from 'react';
import {render} from 'react-dom';

import {Tour, TourProvider, ModalStep, TooltipStep, Step} from '../lib';
import './app.less';

export function showReact(initialState, reactContainer) {
  const CustomStep = ({onNext, onPrev, onClose}) => (
    <div style={{border: '2px solid red', padding: 10}}>
      <h1> custom markup </h1>
      <button onClick={onPrev}>prev</button>
      <button onClick={onNext}>next</button>
      <span onClick={onClose}> X </span>
    </div>
  );

  const defaultContent = (
    <div>
      <span>Все новые требования будут появляться</span>
      <br/>
      <span>на вкладке «в работе» в таблице сверху.</span>
      <br/>
      <span>Записывайте в таблицу номер документа и имя,</span>
      <br/>
      <span>ответственного. Это поможет отслеживать, какое</span>
      <br/>
      <span>требование в работе и кто им занимается.</span>
    </div>
  );

  const customHighlight = <div style={{border: '3px solid red', margin: -10}}/>;

  const highlightTarget = () => document.getElementById('some id');
  const tooltipTarget1 = () => document.getElementById('some id-1-4');
  const tooltipTarget2 = () => document.getElementById('some id-1-5');
  const element2 = () => document.getElementById('some id2');
  const element3 = () => document.getElementById('some id3');

  render((
    <TourProvider predicate={(id) => true}
                  onTourShown={(id) => console.log(`shown tour ${id}`)}>
      <div>
        <Tour id='id1'>
          <Step render={CustomStep}/>
          <ModalStep header='modal header' content='modal content'/>
          <TooltipStep
            target={tooltipTarget2}
            positions={['bottom left']}
            highlight={customHighlight}
            header='1 строка = 1 требование'
            content={defaultContent}
            offset={30}
          />
          <TooltipStep
            target={tooltipTarget2}
            positions={['bottom right']}
            header='Квитанция и ответ'
            highlight={customHighlight}
            offset={30}
          />
          <TooltipStep
            target={tooltipTarget2}
            positions={['bottom right']}
            header='Квитанция и ответ'
            offset={30}
          />
          <TooltipStep
            target={element2}
            highlight={customHighlight}
            positions={['right middle']}
            header='Квитанция и ответ'
            offset={30}
          />
          <TooltipStep
            target={element2}
            highlight={customHighlight}
            render={CustomStep}
            positions={['right middle']}
            offset={30}
          />
        </Tour>

        {/*<div>*/}
        {/*<Tour id='id2'>*/}
        {/*<ModalStep header='modal header 2' content='modal content 2'/>*/}
        {/*</Tour>*/}
        {/*</div>*/}
      </div>
    </TourProvider>
  ), reactContainer);

}

(window as any).showReact = showReact;
