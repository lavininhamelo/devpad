import React, { useState, useEffect } from 'react';
import TagBlock from '../TagBlock/index';
import { FaPlus } from 'react-icons/fa';

import { Container, RoundedButton, LineAction, Tags } from './style';
const child2 = {
  key: 1,
  name: 'Filho2',
  color: '#557DAC',
  outlined: true,
  children: [],
};
const child = {
  key: 1,
  name: 'Filho',
  color: '#557DAC',
  outlined: true,
  children: [child2, child2, child2],
};
const Opts = [
  {
    key: 1,
    name: 'Texto',
    color: '#557DAC',
    outlined: true,
    children: [child, child],
  },
  {
    key: 2,
    name: 'Arquivo',
    color: '#557DAC',
    outlined: true,
    children: [child, child],
  },
  {
    key: 3,
    name: 'Código',
    color: '#557DAC',
    outlined: true,
    children: [child],
  },
  {
    key: 4,
    name: 'Link',
    color: '#557DAC',
    outlined: true,
    children: [child],
  },
];
export default () => {
  const [focus, setFocus] = useState(false);
  useEffect(() => {
    if (focus) {
      document.title = `On Focus`;
    } else document.title = `OFF Focus`;
  }, [focus]);

  return (
    <Container
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(true)}
    >
      <LineAction>
        <hr />
        <RoundedButton>
          <FaPlus />
        </RoundedButton>
      </LineAction>
      <Tags>
        {focus && (
          <>
            {Opts &&
              Opts.map(({ name, color, dense, outlined, children }, index) => {
                return (
                  <TagBlock
                    key={index}
                    color={color}
                    name={name}
                    dense={dense}
                    outlined={outlined}
                    children={children}
                  />
                );
              })}
          </>
        )}
      </Tags>
    </Container>
  );
};
