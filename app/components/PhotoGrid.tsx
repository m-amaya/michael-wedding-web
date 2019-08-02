import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { StoreContext } from 'store';
import { useStyle } from 'styles';
import { Flex } from './Flex';

export const PhotoGrid: React.FC = observer(() => {
  const style = useStyle();
  const {
    photo: { selectedPhotos },
  } = useContext(StoreContext);

  return (
    <Flex
      row
      css={{
        backgroundColor: style.theme.header.background,
        padding: '5px 0 0 5px',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}>
      {style.constants.photos.map((urls, i) => (
        <PhotoColumn key={i} urls={urls} selected={selectedPhotos[i]} />
      ))}
    </Flex>
  );
});

const PhotoColumn: React.FC<{
  urls: string[];
  selected: number;
}> = observer(({ urls, selected }) => (
  <div css={{ width: '20%' }}>
    {urls.map((url, i) => (
      <Photo key={url} url={url} isSelected={i === selected} />
    ))}
  </div>
));

const Photo: React.FC<{ url: string; isSelected: boolean }> = observer(
  ({ url, isSelected }) => (
    <img
      src={url}
      css={{
        borderRight: '5px solid transparent',
        borderBottom: '5px solid transparent',
        opacity: isSelected ? 1 : 0.5,
        width: '100%',
        transition: 'opacity 1s',
      }}
    />
  ),
);
