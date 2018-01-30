import * as React from 'react';

import { connect } from 'redux-zero/react';

import actions from '../actions';
import { IStore } from '../types';

const mapToProps = (props: IStore) => ({
  ...props
});

const Page: React.SFC<IStore> = props => <div>Main Page</div>;
export default connect(mapToProps, actions)(Page);
