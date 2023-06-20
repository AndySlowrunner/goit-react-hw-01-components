import { Profile } from 'components/Card/Card'
import { Statistics } from 'components/Statistics/Statistics'
import user from 'data/user.json'
import data from 'data/data.json'

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      
    </div>
  );
};
