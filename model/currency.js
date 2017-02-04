export const BANK_NAME_MAP = {
	ICBC: {name: '工商银行外汇牌价', url: 'http://www.icbc.com.cn/ICBCDynamicSite/Optimize/Quotation/QuotationListIframe.aspx', method: 'POST'},
	ABC: {name: '农业银行外汇牌价', url: 'http://ewealth.abchina.com/app/data/api/DataService/ExchangeRateV2', method: 'GET'},
	BOC: {name: '中国银行外汇牌价', url: 'http://www.boc.cn/sourcedb/whpj/index.html', method: 'GET'},
	CCB: {name: '建设银行外汇牌价', url: 'http://forex.ccb.com/cn/home/news/jshckpj_new.xml', method: 'GET'},
	BCM: {name: '交通银行外汇牌价', url: 'http://www.bankcomm.com/BankCommSite/zonghang/cn/whpj/foreignExchangeSearch_Cn.jsp', method: 'GET'},
	CMB: {name: '招商银行外汇牌价', url: 'http://fx.cmbchina.com/Hq/', method: 'GET'}
}

export const CCB_CURRENCY_NAME_MAP = [
	'',
	'USD',
	'EUR',
	'JPY',
	'GBP',
	'AUD',
	'CHF',
	'CAD',
	'HKD',
	'SGD',
	'DKK',
	'SEK',
	'NOK',
	'KRW'
]

export const CURRENCY_NAME_MAP = {
	USD: ['美元', '美元(USD)', '美元(USD/CNY)'],
	JPY: ['日元', '日元(JPY)', '日元(JPY/CNY)'],
	EUR: ['欧元', '欧元(EUR)', '欧元(EUR/CNY)'],
	GBP: ['英镑', '英镑(GBP)', '英镑(GBP/CNY)', '英磅(GBP)'],
	AED: ['阿联酋迪拉姆', '阿联酋 迪拉姆(AED)'],
	AUD: ['澳大利亚元', '澳大利亚元(AUD)', '澳大利亚元(AUD/CNY)'],
	MOP: ['澳门元', '澳门元(MOP)', '澳门元(MOP/CNY)'],
	PKR: ['巴基斯坦卢比(PKR)'],
	BRL: ['巴西里亚尔', '巴西雷亚尔(BRL)'],
	DKK: ['丹麦克朗', '丹麦克朗(DKK)', '丹麦克郎(DKK/CNY)'],
	PHP: ['菲律宾比索', '菲律宾比索(PHP)', '菲律宾比索(PHP/CNY)'],
	HKD: ['港元', '港元(HKD)', '港币(HKD)', '港币(HKD/CNY)', '港币'],
	KZT: ['哈萨克斯坦 坚戈(KZT)'],
	KRW: ['韩国元', '韩国圆', '韩元(KRW)', '韩国圆(KRW)', '韩元(KRW/CNY)'],
	CAD: ['加拿大元', '加拿大元(CAD)', '加拿大元(CAD/CNY)'],
	MYR: ['林吉特', '林吉特(MYR)'],
	RUB: ['卢布', '卢布(RUB)'],
	ZAR: ['南非兰特', '南非兰特(ZAR)'],
	NOK: ['挪威克朗', '挪威克朗(NOK)', '挪威克郎(NOK/CNY)'],
	SEK: ['瑞典克朗', '瑞典克朗(SEK)', '瑞典克郎(SEK/CNY)'],
	CHF: ['瑞士法郎', '瑞士法郎(CHF)', '瑞士法郎(CHF/CNY)'],
	SAR: ['沙特里亚尔', '沙特里亚尔(SAR)'],
	TJS: ['索莫尼', '索莫尼(TJS)'],
	THB: ['泰铢', '泰国铢', '泰国铢(THB)', '泰铢(THB/CNY)', '泰铢(THB)'],
	SGD: ['新加坡元', '新加坡元(SGD)', '新加坡元(SGD/CNY)'],
	TWD: ['新台币', '新台币(TWD)', '新台币(TWD/CNY)'],
	NZD: ['新西兰元', '新西兰元(NZD)', '新西兰元(NZD/CNY)'],
	IDR: ['印尼卢比', '印尼盾(IDR)'],
	INR: ['印度卢比'],
	VDN: ['越南盾(VDN)']
}

export const CURRENCY_PROPS_MAP = {
	name: ['币种', '货币名称', '交易币'],
	unit: ['交易单位', '交易单位', '交易币单位', '单位'],
	base_currency: '基本币',
	middle_price: '中间价',
	buying_rate: ['现汇买入价', '买入汇率'],
	selling_rate: ['现汇卖出价', '卖出汇率'],
	cash_buying_rate: ['现钞买入价', '现钞买入汇率'],
	cash_selling_rate: '现钞卖出价',
	conversion_rate: '中行折算价',
	time: ['报价时间', '发布时间', '发布日期', '时间']
}
