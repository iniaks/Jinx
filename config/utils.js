export default {
	mapProp: (dic, name) => {
		let _newProp = ''
		for (let prop in dic) {
			if (prop === name || dic[prop] === name || dic[prop].indexOf(name.replace(/^\s+|\s+$/g,"")) >= 0) {
				_newProp = prop

			}
		}
		return _newProp
	}
}
