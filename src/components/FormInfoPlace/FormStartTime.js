import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangePlace } from '../../reducers/infoPlace';
import { ChangePlaceName } from '../../reducers/infoPlaceName';

function Form(props) {

	const dispatch = useDispatch()

	const Place = useSelector(state => state.Place);

	const { array, name, width, type } = props;

	const [value, setValue] = useState({
		[name]: null
	});

	const elm = array ? array.map((arr, index) => {
		return <option value={index} key={index} className="text-sm opacity-70">{arr}</option>
	}) : "";

	const HandleChange = (e) => {
		const target = e.target;
		const name = target.name;
		const val = target.value;
		if (val.length > 3) {
			dispatch(ChangePlace({ [name]: null }));
			dispatch(ChangePlaceName({ [name]: null }));
		} else {
			dispatch(ChangePlace({ [name]: val }));	
			dispatch(ChangePlaceName({ [name]: val }));	
		}
		setValue({ [name]: val });
	}

	return (
		<div className={`opacity-70	inline-block relative font-thin text-base ${width}`}>
			<select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-3 rounded leading-tight focus:outline-none focus:shadow-outline"
				name={name} value={value.value} onChange={HandleChange}>
				<option className="text-sm opacity-70">{type}</option>
				{elm}
			</select>
			<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
				<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
			</div>
		</div>
	);
}

export default Form;