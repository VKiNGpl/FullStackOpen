import { Display } from './Helpers';

export const Filter = (props) => {
  return (
  <div>
    <Display value='filter shown with ' />
    <input value={props.value} onChange={props.handler} />
  </div>
  )
};
