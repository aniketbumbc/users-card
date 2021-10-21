import { useFetch } from '../hooks/useFetch';
import { useState, useMemo } from 'react';

const handledFiltedUsers = (query, data) => {
  if (!query) return data;

  return data.filter((user) => {
    return user.name.includes(query);
  });
};

const User = ({ query }) => {
  const { data, loading, error } = useFetch();
  const [filterdData, setFilterData] = useState();
  const [sortType, setSortType] = useState('ACE');

  useMemo(() => {
    setFilterData(handledFiltedUsers(query, data));
  }, [query, data]);

  const handledSortCard = () => {
    let tempArr = [];
    if (sortType === 'ACE') {
      setSortType('DCE');
      tempArr = filterdData.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      setSortType('ACE');
      tempArr = filterdData.sort((a, b) => b.name.localeCompare(a.name));
    }
    setFilterData(tempArr);
  };

  return (
    <div>
      <h4> Users Card</h4>
      <button onClick={handledSortCard}> Sort Cards </button>
      {loading && <h1>Loading......</h1>}
      {error && <h1>{error}</h1>}

      {filterdData &&
        filterdData.map((user) => (
          <div className='user-container' key={user.id}>
            <ul>
              <li> Name : {user.name}</li>
              <li> Email : {user.email}</li>
              <li> Phome : {user.phone}</li>
              <li> Website : {user.website}</li>
              <li> Company: {user.company.name}</li>
              <li>City :{user.address.city}</li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default User;
