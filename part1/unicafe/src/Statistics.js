import { Display } from './Helpers';

export const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const voteRatio = good - bad;
  const average = all ? voteRatio / all : 0;
  const positive = all ? (good / all) * 100 : 0;

  return (
    <div>
      {all ? (
        <div>
          <Display value={`good ${good}`} />
          <Display value={`neutral ${neutral}`} />
          <Display value={`bad ${bad}`} />
          <Display value={`all ${all}`} />
          <Display value={`average ${average}`} />
          <Display value={`positive ${positive} %`} />
        </div>
      ) : (
        <Display value='No feedback given' />
      )}
    </div>
  );
};
