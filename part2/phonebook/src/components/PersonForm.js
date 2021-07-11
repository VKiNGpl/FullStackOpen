import { Display, Header2 } from './Helpers';

export const PersonForm = (props) => {
  return (
    <form onSubmit={props.submitHandler}>
      <Header2 text='add a new' />
      <div>
        <Display value='name: ' />
        <input value={props.name} onChange={props.nameHandler} />
      </div>
      <div>
        <Display value='number: ' />
        <input value={props.number} onChange={props.numberHandler} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
}
