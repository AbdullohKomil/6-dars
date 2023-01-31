import { useEffect, useState } from 'react';
import { Card } from '../../components/Card/Card';
import { Filter } from '../../components/Filter/Filter';
import { Pagination } from '../../components/Pagination/Pagination';
import { Search } from '../../components/Search/Search';

export const Character = () => {
  const [activePage, setActivePage] = useState(1);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const { info, results } = data;
  const [search, setSearch] = useState('');

  let api = `https://rickandmortyapi.com/api/character?page=${activePage}&name=${search}&status=${status}&gender=${gender}`;
  useEffect(() => {
    (async () => {
      const data = await fetch(api).then((res) => res.json());
      setData(data);
    })();
  }, [api]);

  return (
    <>
      <h2 className='text-center h2 mb-3'>Character</h2>
      <Search
        setSearch={setSearch}
        setActivePage={setActivePage}
      />
      <div className='row'>
        <div className='col-3'>
          <Filter
            setGender={setGender}
            setStatus={setStatus}
          />
        </div>
        <div className='col-9'>
          {results?.length ? (
            <div className='d-flex flex-wrap gap-5'>
              {results.map((item) => (
                <Card
                  key={item.id}
                  obj={item}
                />
              ))}
            </div>
          ) : (
            <h3>Character not found</h3>
          )}
        </div>
      </div>
      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        totalPage={info?.pages}
      />
    </>
  );
};
