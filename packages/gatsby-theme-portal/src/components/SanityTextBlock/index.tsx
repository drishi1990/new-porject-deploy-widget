import React, { FunctionComponent } from 'react';
import Container from '@material-ui/core/Container';
import classNames from 'classnames';
import { SanityTextBlockInterface } from './models';

import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import quote from '../../images/icons/quote-left.svg';

import useStyles from './styles';

const SanityTextBlock: FunctionComponent<SanityTextBlockInterface> = ({
  name,
  _rawTextBlockBody,
  textBlockType,
}) => {
  const classes = useStyles({ icon: quote });
  const getComponentvariant = type => {
    return type
      .replace(/\s/g, '')
      .trim()
      .toLowerCase();
  };
  return (
    <section
      className={classNames(
        classes.section,
        getComponentvariant(textBlockType.name)
      )}
    >
      <Container>
        <div className={classes.sectionDescription}>
          <BlockContent
            serializers={blockTypeDefaultSerializers}
            blocks={_rawTextBlockBody}
          />
        </div>
      </Container>
    </section>
  );
};

export default SanityTextBlock;
