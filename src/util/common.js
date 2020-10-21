/**
 * @return {object}
 */
export function parseHashURL() {
	const [hashURL, query = ''] = window.location.hash.split('?'),
		queryMap = {}

	query.split('&').forEach((item) => {
		const [key, value] = item.split('=')

		queryMap[key] = value
	})

	return {
		hash: hashURL.slice(1),
		query: queryMap,
	}
}
/**
 *
 *
 */
export function dateFormat(fmt, dt) {
	if (!dt) {
		return ''
	}
	let format = fmt,
		date = new Date(dt),
		ret
	const opt = {
		'y+': date.getFullYear().toString(), // 年
		'M+': (date.getMonth() + 1).toString(), // 月
		'd+': date.getDate().toString(), // 日
		'H+': date.getHours().toString(), // 时
		'm+': date.getMinutes().toString(), // 分
		'S+': date.getSeconds().toString(), // 秒
		// 有其他格式化字符需求可以继续添加，必须转化成字符串
	}

	for (let k in opt) {
		ret = new RegExp('(' + k + ')').exec(format)
		if (ret) {
			format = format.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'))
		}
	}
	return format
}

export function setCookie(c_name, value, expire) {
	var date = new Date()
	date.setSeconds(date.getSeconds() + expire)
	document.cookie = c_name + '=' + escape(value) + '; expires=' + date.toGMTString()
	//console.log(document.cookie)
}

export function getCookie(c_name) {
	if (document.cookie.length > 0) {
		let c_start = document.cookie.indexOf(c_name + '=')
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1
			let c_end = document.cookie.indexOf(';', c_start)
			if (c_end == -1) c_end = document.cookie.length
			return unescape(document.cookie.substring(c_start, c_end))
		}
	}
	return ''
}

export function delCookie(c_name) {
	setCookie(c_name, '', -1)
}
export default {
	parseHashURL,
	setCookie,
	getCookie,
	delCookie,
	dateFormat,
}
