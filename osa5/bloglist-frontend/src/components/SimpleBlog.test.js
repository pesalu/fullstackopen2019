import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { prettyDOM, fireEvent } from '@testing-library/dom';

import SimpleBlog from './SimpleBlog';

const blog = {
  title: 'Koiran päivät',
  author: 'Kalle Päätalo',
  likes: 5
};
const onClick = () => {
  console.log('Klikattu!');
};

test('renders content', () => {

  const component = render(<SimpleBlog blog={blog}  onClick={onClick} />);

  expect(component.container).toHaveTextContent('Koiran päivät Kalle Päätalo');

  expect(component.container).toHaveTextContent('blog has 5 likes');
});

test('clicking like -button two times calls event handler twice', () => {
  const mockHandler = jest.fn();
  const component = render(<SimpleBlog blog={blog}  onClick={mockHandler} />);

  const likeButton = component.getByText('like');
  fireEvent.click(likeButton);
  fireEvent.click(likeButton);
  expect(mockHandler.mock.calls).toHaveLength(2);
});
