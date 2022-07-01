import React from "react";
import { screen } from '@testing-library/react';

//funzione render personalizzata per includere <Provider> e poter gestire lo stato con redux
import { render } from '../../../util/test-utils';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import {Subreddit} from '../Subreddit';

describe('Subreddit component', () => {
    const initialState = {
      name: "sports",
      headerImg: "https://a.thumbs.redditmedia.com/OG0cMFwrTOQE6Gj5xW2pwTMpjkegILNnJEzHZukZTW4.png",
      title: "Reddit Sports",
      color: "#ff4500",
      icon: "https://b.thumbs.redditmedia.com/V3oOhkQE_SiCz2dvI2uA7TlbcfvaIMPw2AQjtIdqMUk.png",
      id: "2qgzy"
    }

  test('Render Subreddit with prop', () => {
    render(<Subreddit subreddit={initialState}/>);
    //screen.debug();
    const imgIcon = screen.getByRole('img');
    expect(imgIcon).toBeInTheDocument();
    expect(imgIcon).toHaveAttribute('src', expect.stringContaining(initialState.icon));
    expect(imgIcon).toBeVisible();
  });

  test('Render Subreddit without prop', () => {
    render(<Subreddit subreddit=''/>);
    //screen.debug();
    const imgIcon = screen.queryByRole('img');
    expect(imgIcon).toBeNull();
    
    const subNameP = screen.getByText('r/example title');
    expect(subNameP).toBeInTheDocument();
  });

});