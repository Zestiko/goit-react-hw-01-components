import { Profile } from 'components/Profile/Profile';
import user from '../assets/user.json'
import { Statistics } from 'components/Statistics/Statistics';
import data from '../assets/data.json'
import { FriendList } from './FriendList/FriendList';
import friends from '../assets/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transaction from '../assets/transactions.json';

export const App = () => {
  return (
    <>
    <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} /> 
    <Statistics title="Upload stats" stats={data} />
    <Statistics  stats={data} />
    <FriendList friends={friends}/>
    <TransactionHistory transactions={transaction}/>
    </>
    
  );
};
