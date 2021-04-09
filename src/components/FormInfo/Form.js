import React, { useState } from 'react';

function Form(props) {

	const { array, name, width } = props;
	console.log(name)
	const [place, setPlace] = useState(name === "city" ? "Chọn Tỉnh/Thành Phố" : "Quận/Huyện");
	array.unshift(place);
	const elm = array.map((arr, index) => {
		return <option value={arr} key={index} className="text-sm opacity-70">{arr}</option>
	})

	const HandleChange = (e) => {
		console.log(e.target.value)
	}

	return (
		<div className={`opacity-70	inline-block relative font-thin text-sm ${width}`}>
			<select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-3 rounded leading-tight focus:outline-none focus:shadow-outline"
				name={name} value="" onChange={HandleChange}>
				{elm}
			</select>
			<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
				<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
			</div>
		</div>
	);
}

export default Form;