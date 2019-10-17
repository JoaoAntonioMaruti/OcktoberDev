import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './index';

storiesOf('Button', module)
    .add('Default', () => <Button title={'Pesquisa Google'} />)
    .add('Luck search', () => <Button title={'Estou com sorte'} />)
    .add('With Click event', () => (
        <>
            <h1>Hello</h1>
            <Button
                title={'Estou com sorte'}
                onButtonPress={action('button-click')}
            />
        </>
    ))