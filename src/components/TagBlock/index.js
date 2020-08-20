import React, { useState, useEffect } from 'react';
import TagBlock from './index';
import { Container, Tag, Childrens, Line } from './style';

export default ({ color, name, outlined, dense, children, ...rest }) => {
  const [focus, setFocus] = useState(false);
  useEffect(() => {
    if (focus) {
      document.title = `On Focus`;
    } else document.title = `OFF Focus`;
  }, [focus]);

  return (
    <Container
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
    >
      <Tag
        color={color}
        outlined={outlined}
        dense={dense}
        children={children}
        {...rest}
      >
        <p>{name}</p>
      </Tag>
      {focus && children[0] && <Line />}
      <Childrens>
        {focus && children[0] && (
          <>
            {children.map(
              ({ name, color, dense, outlined, children }, index) => {
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
              },
            )}
          </>
        )}
      </Childrens>
    </Container>
  );
};
