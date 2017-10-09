export const CCB_CURRENCY_NAMES = ['', 'USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CHF', 'CAD', 'HKD', 'SGD', 'DKK', 'SEK', 'NOK', 'KRW']

export const CITIC_NAMES = [
	{code : '01', name: 'RMB'},
	{code : '05', name: 'TWD'}, 
	{code : '12', name: 'GBP'}, 
	{code : '13', name: 'HKD'},
	{code : '14', name: 'USD'},
	{code : '15', name: 'CHF'}, 
	{code : '18', name: 'SGD'}, 
	{code : '21', name: 'SEK'}, 
	{code : '22', name: 'DKK'}, 
	{code : '23', name: 'NOK'}, 
	{code : '27', name: 'JPY'},
	{code : '28', name: 'CAD'},
	{code : '29', name: 'AUD'}, 
	{code : '51', name: 'EUR'},
	{code : '62', name: 'NZD'},
	{code : '81', name: 'MOP'},
	{code : '82', name: 'PHP'},
	{code : '84', name: 'THB'},
	{code : '91', name: 'BRL'}
]

export const CURRENCY_NAMES = {
	USD: ['美元', '美元(USD)', '美元(USD/CNY)', 'USDCNY'],
	JPY: ['日元', '日元(JPY)', '日元(JPY/CNY)', 'JPYCNY'],
	EUR: ['欧元', '欧元(EUR)', '欧元(EUR/CNY)', 'EURCNY'],
	GBP: ['英镑', '英镑(GBP)', '英镑(GBP/CNY)', '英磅(GBP)', 'GBPCNY'],
	AED: ['阿联酋迪拉姆', '阿联酋 迪拉姆(AED)'],
	AUD: ['澳大利亚元', '澳大利亚元(AUD)', '澳大利亚元(AUD/CNY)', 'AUDCNY'],
	MOP: ['澳门元', '澳门元(MOP)', '澳门元(MOP/CNY)'],
	PKR: ['巴基斯坦卢比(PKR)'],
	BRL: ['巴西里亚尔', '巴西雷亚尔(BRL)'],
	DKK: ['丹麦克朗', '丹麦克朗(DKK)', '丹麦克郎(DKK/CNY)', '丹麦克郎(DKK)'],
	PHP: ['菲律宾比索', '菲律宾比索(PHP)', '菲律宾比索(PHP/CNY)'],
	HKD: ['港元', '港元(HKD)', '港币(HKD)', '港币(HKD/CNY)', '港币', 'HKD', 'HKDCNY'],
	KZT: ['哈萨克斯坦 坚戈(KZT)'],
	KRW: ['韩国元', '韩国圆', '韩元(KRW)', '韩国圆(KRW)', '韩元(KRW/CNY)', '韩圆(KRW)'],
	CAD: ['加拿大元', '加拿大元(CAD)', '加拿大元(CAD/CNY)', 'CADCNY'],
	MYR: ['林吉特', '林吉特(MYR)'],
	RUB: ['卢布', '卢布(RUB)'],
	ZAR: ['南非兰特', '南非兰特(ZAR)'],
	NOK: ['挪威克朗', '挪威克朗(NOK)', '挪威克郎(NOK/CNY)', '挪威克郎(NOK)'],
	SEK: ['瑞典克朗', '瑞典克朗(SEK)', '瑞典克郎(SEK/CNY)', 'SEKCNY', '瑞典克郎(SEK)'],
	CHF: ['瑞士法郎', '瑞士法郎(CHF)', '瑞士法郎(CHF/CNY)', 'CHFCNY'],
	SAR: ['沙特里亚尔', '沙特里亚尔(SAR)'],
	TJS: ['索莫尼', '索莫尼(TJS)'],
	THB: ['泰铢', '泰国铢', '泰国铢(THB)', '泰铢(THB/CNY)', '泰铢(THB)'],
	SGD: ['新加坡元', '新加坡元(SGD)', '新加坡元(SGD/CNY)', 'SGDCNY'],
	TWD: ['新台币', '新台币(TWD)', '新台币(TWD/CNY)'],
	NZD: ['新西兰元', '新西兰元(NZD)', '新西兰元(NZD/CNY)'],
	IDR: ['印尼卢比', '印尼盾(IDR)'],
	INR: ['印度卢比'],
	VDN: ['越南盾(VDN)']
}

export const CURRENCY_PROPS = {
	name: ['币种', '货币名称', '交易币', '货币种类', '货币', '币种简称'],
	unit: ['交易单位', '交易单位', '交易币单位', '单位', '基数'],
	middle_price: ['中间价', '现汇中间价', '我方中间价', '基准价'],
	buying_rate: ['现汇买入价', '买入汇率', '汇买价', '买入价', '现汇买入'],
	cash_buying_rate: ['现钞买入价', '现钞买入汇率', '钞买价', '现钞买入'],
	selling_rate: ['现汇卖出价', '卖出汇率', '汇卖价', '卖出价', , '现汇/现钞卖出价', '现汇现钞卖出价', '现汇卖出'],
	cash_selling_rate: ['现钞卖出价', '钞卖价', '现钞卖出'],
	conversion_rate: ['中行折算价', '人行中间价'],
	time: ['报价时间', '发布时间', '发布日期', '时间', '更新日期']
}
