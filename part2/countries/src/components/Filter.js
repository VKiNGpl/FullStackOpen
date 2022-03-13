import { Display } from './Helpers';

export const Filter = (props) => {
  return (
  <div>
    <Display value='find countries ' />
    <input value={props.value} onChange={props.handler} />
  </div>
  )
};
