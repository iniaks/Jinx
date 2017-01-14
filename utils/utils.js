exports.mapProp = (dic, name) => {
	let _newProp = ''
	for (let prop in dic) {
		console.info(prop, name)
		if (dic[prop] === name || dic[prop].indexOf(name) >= 0) {
			_newProp = prop

		}
	}
	return _newProp
}