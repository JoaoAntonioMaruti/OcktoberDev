# OktoberDev project

### Description

Create a simple react app based on Google Main page for show storybook funcionality 

# steps to create OktoberDev app
Create react based app with `create-create-app` CLI
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# TASKS

 - [x] **Configure StoryBook**
    - [x] Install dependecies
    - [x] Configure sotrybook file
 - [x] **Create SearchBar component**
 - [x] **Create Logo Component**
 - [x] **Create Button Component**
 - [x] **Create Google Main Page**

## Configure StoryBook
First step run `npm i -g getstorybook` to install `getstorybook` CLI and run `yarn storybook` to run Stories App

## Create SearchBar component
Create file `src/components/Search/index.js`
```javascript
import React from 'react';
import styled from 'styled-components';

const Search = () => <SearchInput />;

const SearchInput = styled.input`
    outline: none;
    padding: 8px 16px;
    width: 480px;
    border-radius: 16px;
    border: none;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    font-size: 16px;
`

export default Search;
```
Example
```javascript
import React from 'react';
import { storiesOf } from '@storybook/react';
import Search from './index';

storiesOf('Search', module)
    .add('Default', () => <Search />);

```

## Create Logo component
*@todo*

## Create Button component
*@todo*

## Create Google Main Page
*@todo*

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn storybook`

Runs StoryBook.<br />
Open [http://localhost:9009](http://localhost:9009) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

