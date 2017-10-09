import ICBC from './banks/ICBC'
import ABC from './banks/ABC'
import BOC from './banks/BOC'
import CCB from './banks/CCB'
import BCM from './banks/BCM'
import CMB from './banks/CMB'
import HXB from './banks/HXB'
import CITIC from './banks/CITIC'
import CEB from './banks/CEB'
import SPDB from './banks/SPDB'
import CIB from './banks/CIB'
import PAB from './banks/PAB'
import BOS from './banks/BOS'
import PSBC from './banks/PSBC'
import CGB from './banks/CGB'

export const BANK_SOURCES = {
	ICBC: {
		name: '工商银行',
		url: 'http://www.icbc.com.cn/ICBCDynamicSite/Optimize/Quotation/QuotationListIframe.aspx',
		method: 'POST',
		resolve: ICBC
	},
	ABC: {
		name: '农业银行',
		url: 'http://ewealth.abchina.com/app/data/api/DataService/ExchangeRateV2',
		method: 'GET',
		resolve: ABC
	},
	BOC: {
		name: '中国银行',
		url: 'http://www.boc.cn/sourcedb/whpj/index.html',
		method: 'GET',
		resolve: BOC
	},
	CCB: {
		name: '建设银行',
		url: 'http://forex.ccb.com/cn/home/news/jshckpj_new.xml',
		method: 'GET',
		resolve: CCB
	},
	BCM: {
		name: '交通银行',
		url: 'http://www.bankcomm.com/BankCommSite/zonghang/cn/whpj/foreignExchangeSearch_Cn.jsp',
		method: 'GET',
		resolve: BCM
	},
	CMB: {
		name: '招商银行',
		url: 'http://fx.cmbchina.com/Hq/',
		method: 'GET',
		resolve: CMB
	},
	HXB: {
		name: '华夏银行',
		url: 'https://sbank.hxb.com.cn/gateway/forexquote.jsp',
		method: 'GET',
		resolve: HXB
	},
	CITIC: {
		name: '中信银行',
		url: 'https://etrade.citicbank.com/portalweb/cms/getForeignExchRate.htm',
		method: 'GET',
		resolve: CITIC
	},
	CEB: {
		name: '光大银行',
		url: 'http://www.cebbank.com/eportal/ui?pageId=477257',
		method: 'GET',
		resolve: CEB
	},
	SPDB: {
		name: '浦发银行',
		url: 'http://per.spdb.com.cn/was5/web/search?metadata=CurrencyName%7CMdlPrc%7CBuyPrc%7CCashBuyPrc%7CSellPrc%7CCREATE_DATE&perpage=100&channelid=207567&searchword=',
		method: 'GET',
		resolve: SPDB
	},
	CIB: {
		name: '兴业银行',
		url: 'http://www.kuaiyilicai.com/bank/rmbfx/b-cib.html',
		method: 'GET',
		resolve: CIB
	},
	PAB: {
		name: '平安银行',
		url: 'https://bank.pingan.com.cn/ibp/portal/exchange/qryExchangeList.do',
		method: 'GET',
		resolve: PAB
	},
	BOS: {
		name: '上海银行',
		url: 'http://www.bankofshanghai.com/WebServlet?go=bank_sellfund_pg_Banking&code=whpj',
		method: 'GET',
		resolve: BOS
	},
	// PSBC: {
	// 	name: '邮政储蓄',
	// 	url: 'http://www.psbc.com/cms/queryExchange.do',
	// 	method: 'POST',
	// 	resolve: PSBC
	// },
	CGB: {
		name: '广发银行',
		url: 'http://www.cgbchina.com.cn/searchExchangePrice.gsp',
		method: 'POST',
		charset: 'gbk',
		resolve: CGB
	}
}
