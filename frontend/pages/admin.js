import React from 'react';
import dynamic from 'next/dynamic';
import {Divider, Icon} from '@blueprintjs/core';

import secureTemplate from '../public/auth/secure-template';

import Container from '../components/dashboard/container';
import Orders from '../components/dashboard/orders';

const CreateOrder = dynamic(() => import('../components/dashboard/utils/create-order'));

const Dashboard = () => (
	<Container>
		<h1 className="bp3-heading">Welcome to Dashboard!</h1>
		<br/>
		<p><Icon intent="success" icon="tick-circle" iconSize={18}/> You are logged in, click <a href="/logout">here</a> to logout.</p>
		<br/>
		<CreateOrder/>
		<Divider/>
		<br/>
		<br/>
		<Orders/>
	</Container>
);

export default secureTemplate(Dashboard);
