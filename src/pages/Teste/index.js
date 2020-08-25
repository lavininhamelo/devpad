import React, {useState, useEffect} from 'react';


function Teste() {
  const tags = [ { id: 3, color: '#FFB800', name: 'JavaScript', dense: false, outlined: true },
  { id: 4, color: '#F65757', name: 'Tutorial', dense: false, outlined: true },];
  
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  
  function findName (value, query) {
    if(value.indexOf(query) > -1) return value;
  }

  useEffect(() => {
   setQuery(
     
    tags.filter(item => 
      findName(item.name.toUpperCase(),search.toUpperCase())
    )
    
    );
  }, [search]);

  return (
    <div>
      <input type="text" onChange={event => setSearch(event.target.value)}/>
        <ul>
          {query[0] ?         
          query.map(item => {return   <li key={item.id}>{item.name}</li>}) : <p> Nenhuma anotação encontrada</p>
           }
        </ul>
    </div>
  );
}

export default Teste;
