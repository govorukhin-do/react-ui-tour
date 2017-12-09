import * as React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {TooltipStep, ModalStep} from '../src/tour/tour';

declare let module: any;

storiesOf('Tour', module)
  .add('tooltip step', () => (
    <TooltipStep header='hi there'
                 element={() => document.documentElement}
                 onNext={action('next')}
                 onPrev={action('prev')}
                 onClose={action('close')}
                 />
  )).add('modal step', () => (
    <ModalStep header='hi there' onNext={action('next')} onClose={action('onclose')}/>
  ));