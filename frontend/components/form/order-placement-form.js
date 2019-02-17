import React, {useState, useEffect} from 'react';
import Router from 'next/router';
import {Formik, Form} from 'formik';
import {request} from 'graphql-request';
import * as Yup from 'yup';

// Import components
import SelectGroup from './select-group';
import TypeSelect from './type-select';
import SizeSelect from './size-select';
import DoughSelect from './dough-select';
import Input from './input';
import TimeSelect from './time-select';
import Submit from './submit';

// Validation
const OrderSchema = Yup.object().shape({
	type: Yup.string()
		.required('Required!'),
	size: Yup.string()
		.required('Required!'),
	dough: Yup.string()
		.required('Required!'),
	name: Yup.string()
		.min(2, 'Too Short!')
		.max(75, 'Too Long!'),
	phone: Yup.string()
		// Simple regex for checking the phone number
		.matches(/^\d{9}$/, 'Invalid phone number')
});

const OrderPlacementForm = () => {
	const [skeleton, setSkeleton] = useState('bp3-skeleton');

	useEffect(() => {
		setSkeleton('');
	}, []);

	return (
		<Formik
			initialValues={{
				type: '',
				size: '',
				dough: '',
				name: '',
				phone: '',
				city: '',
				street: '',
				time: ''
			}}
			validationSchema={OrderSchema}
			onSubmit={(values, {setSubmitting, resetForm}) => {
				setTimeout(async () => {
					// Form a GraphQL mutation to create a new order
					const query = `
            mutation {
                createOrder(
                    data: {
                        type: "${values.type}"
                        size: "${values.size}"
                        dough: "${values.dough}"
                        name: "${values.name}"
                        phone: "${values.phone}"
                        time: "${values.time}"
                        city: "${values.city}"
                        street: "${values.street}"
                    }
                ) {
                    id
                }
            }`;
					await setSubmitting(false);
					// Post a mutation to Prisma and obtain an ID
					await request('http://localhost:4466', query).then(data => {
						const orderID = JSON.stringify(data.createOrder.id);
						// Move user to the thank you page
						Router.push({
							pathname: '/order',
							query: {id: orderID}
						});
					}).catch(error => {
						console.log(error);
					});
					resetForm();
				}, 500);
			}}
		>
			{({isSubmitting}) => (
				<Form>
					<SelectGroup>
						<TypeSelect className={skeleton}/>
						<SizeSelect className={skeleton}/>
						<DoughSelect className={skeleton}/>
					</SelectGroup>
					<br/>
					<br/>
					<Input className={skeleton} label="Full Name:" type="text" name="name" placeholder="Mark Suckerberg" required/>
					<Input className={skeleton} label="Phone:" type="tel" name="phone" placeholder="666666666" required/>
					<Input className={skeleton} label="City:" type="text" name="city" placeholder="Menlo Park" required/>
					<Input className={skeleton} label="Address:" type="text" name="street" placeholder="1 Hacker Way" required/>
					<br/>
					<TimeSelect className={skeleton}/>
					<br/>
					<br/>
					<Submit className={skeleton} loading={isSubmitting} disabled={isSubmitting}/>
				</Form>
			)}
		</Formik>
	);
};

export default OrderPlacementForm;
