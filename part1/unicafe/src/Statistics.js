import { Statistic } from './Helpers';

export const Statistics = ({ feedback }) => {
  const all = feedback.good + feedback.neutral + feedback.bad;
  const voteRatio = feedback.good - feedback.bad;
  const average = all ? voteRatio / all : 0;
  const positive = all ? (feedback.good / all) * 100 : 0;

  if (all) {
    return (
      <table>
        <tbody>
          <Statistic text='good' value={feedback.good} />
          <Statistic text='neutral' value={feedback.neutral} />
          <Statistic text='bad' value={feedback.bad} />
          <Statistic text='all' value={all} />
          <Statistic text='average' value={average} />
          <Statistic text='positive' value={`${positive} %`} />
        </tbody>
      </table>
    );
  }

  return 'No feedback given';
};
