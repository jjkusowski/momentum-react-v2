import React, { FC } from 'react';
import classnames from 'classnames';

import { STYLE } from './SelectSearch.constants';
import { Props } from './SelectSearch.types';
import './SelectSearch.style.scss';
import Popover from '../Popover';
import AutoSizer from 'react-virtualized-auto-sizer';
import ButtonSimple from '../ButtonSimple';
import {FixedSizeList} from 'react-window';
import ListItemBase from '../ListItemBase';
import List from '../List';

// TODO: Update JSDOC for this component.
/**
 * The SelectSearch component.
 */
const SelectSearch: FC<Props> = (props: Props) => {
  const { className, id, style, items=[], listComponent, } = props;

  // const Row = ({index, style}) => (
  //   <listComponent props={items} />
  // );
  // Input with trigger button
  // on type, open popover with filtered results.  
  // on trigger click, open popover with all results.

  // TODO: Implementation goes here.
  return (
    <div className={classnames(className, STYLE.wrapper)} id={id} style={style} >
      <Popover triggerComponent={<ButtonSimple />}>
          <FixedSizeList height={100} itemData={{list: items}} itemSize={50} itemCount={items.length} width={100}>
            {({index, style, isScrolling}) => 
            (<listComponent index={index} >
              {items[index]}
              </listComponent>)
          }          
          </FixedSizeList>
      </Popover>
        
    </div>
  );
  
  // <div className={classnames(className, STYLE.wrapper)} id={id} style={style} />;
};

export default SelectSearch;
