import React from 'react';

import Box from './Box';
import {TITLES} from '../../utils/constants';
import {PaginationItem} from './pagination-item';
import {SharedValue} from 'react-native-reanimated';


interface PaginationProps {
  scrollX: SharedValue<number>;
}

export function Pagination({scrollX}: PaginationProps) {
  return (
    <Box
      flex={1}
      flexDirection="row"
      marginHorizontal="space-16"
      position="absolute"
      bottom={24}>
      {TITLES?.map((title, index) => {
        return <PaginationItem key={title} index={index} scrollX={scrollX} />;
      })}
    </Box>
  );
}
