(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{694:function(t,a,e){"use strict";e.r(a);var s=e(9),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"using-the-btcpay-api-for-custom-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-btcpay-api-for-custom-integration"}},[t._v("#")]),t._v(" Using the BTCPay API for Custom Integration")]),t._v(" "),a("p",[t._v("BTCPay Server provides 2 APIS in order to integrate with it:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/Development/GreenFieldExample/"}},[t._v("GreenField API")]),t._v(" - A RESTful API that aims to allow you to use BTCPay Server headless. This is the recommended API for projects which do not wish to recycle code from a Bitpay integration.")],1),t._v(" "),a("li",[t._v("Bitpay Invoice API - BTCPay implements the same API as Bitpay for creating and managing invoices.")])]),t._v(" "),a("p",[a("strong",[t._v("Migrating from BitPay to BTCPay")]),t._v(" normally is as easy as changing a URL.")]),t._v(" "),a("p",[t._v("While Bitpay only allows one account for one merchant, BTCPay allows a user to manage multiple stores.")]),t._v(" "),a("h2",{attrs:{id:"official-client-libraries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#official-client-libraries"}},[t._v("#")]),t._v(" Official Client Libraries")]),t._v(" "),a("p",[t._v("BTCPay maintains official client libraries for "),a("a",{attrs:{href:"https://github.com/MetacoSA/NBitpayClient",target:"_blank",rel:"noopener noreferrer"}},[t._v("C#"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://github.com/btcpayserver/btcpay-python",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/btcpayserver/node-btcpay",target:"_blank",rel:"noopener noreferrer"}},[t._v("NodeJS"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("In addition, there are forked repositories of Bitpay's "),a("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-php-client",target:"_blank",rel:"noopener noreferrer"}},[t._v("PHP"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/bitpay/ruby-client",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ruby"),a("OutboundLink")],1),t._v(" clients.")]),t._v(" "),a("h2",{attrs:{id:"accessing-the-api-manually"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-api-manually"}},[t._v("#")]),t._v(" Accessing the API Manually")]),t._v(" "),a("p",[t._v("If not using one of the libraries above, the REST API can be accessed manually.")]),t._v(" "),a("p",[t._v("The authentication mechanism is using "),a("code",[t._v("BitId")]),t._v(".")]),t._v(" "),a("p",[t._v("With "),a("code",[t._v("BitId")]),t._v(", the "),a("code",[t._v("client")]),t._v(" of the API (like an e-commerce plugin) generates a private key, then informs the "),a("code",[t._v("server")]),t._v(" (BTCPay) about the "),a("code",[t._v("public key")]),t._v(".")]),t._v(" "),a("p",[t._v("Every requests to the API sent by the client is signed with the client's "),a("code",[t._v("private key")]),t._v(".")]),t._v(" "),a("p",[t._v("We call "),a("code",[t._v("pairing")]),t._v(" the process to inform BTCPay about your "),a("code",[t._v("public key")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"pairing-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pairing-process"}},[t._v("#")]),t._v(" Pairing process")]),t._v(" "),a("p",[t._v("Your first need to create a new store:")]),t._v(" "),a("ol",[a("li",[t._v("Log in")]),t._v(" "),a("li",[t._v("Go to Stores menu")]),t._v(" "),a("li",[t._v("Click on "),a("code",[t._v("Create a new store")])]),t._v(" "),a("li",[t._v("Enter a friendly name for the store, validate.")])]),t._v(" "),a("p",[t._v("There is two method of "),a("code",[t._v("pairing")]),t._v(", client side pairing and server side pairing.")]),t._v(" "),a("h3",{attrs:{id:"client-side-pairing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-side-pairing"}},[t._v("#")]),t._v(" Client side pairing")]),t._v(" "),a("p",[t._v("With client side pairing, the "),a("code",[t._v("client")]),t._v(" generates a URL from their "),a("code",[t._v("public key")]),t._v(" which a human user can browse to validate the pairing.")]),t._v(" "),a("p",[t._v("Typically the URL looks like "),a("code",[t._v("https://btcpay.example.com/api-access-request?pairingCode=<pairingcode_goes_here>")]),t._v(".")]),t._v(" "),a("p",[t._v("You can find documentation about how to achieve this with "),a("a",{attrs:{href:"https://support.bitpay.com/hc/en-us/articles/115003001183-How-do-I-pair-my-client-and-create-a-token-",target:"_blank",rel:"noopener noreferrer"}},[t._v("this link"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"server-side-pairing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-side-pairing"}},[t._v("#")]),t._v(" Server side pairing")]),t._v(" "),a("p",[t._v("The second way, is to generate your private key via some bitcoin library then:")]),t._v(" "),a("ol",[a("li",[t._v("Go to the store's settings")]),t._v(" "),a("li",[t._v("Click on "),a("code",[t._v("Access tokens")])]),t._v(" "),a("li",[t._v("Click on "),a("code",[t._v("Create new Token")])]),t._v(" "),a("li",[t._v("Select merchant's facade and enter your public key,")]),t._v(" "),a("li",[t._v("Click request pairing")]),t._v(" "),a("li",[t._v("Click on Approve")])]),t._v(" "),a("h2",{attrs:{id:"note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[t._v("#")]),t._v(" Note")]),t._v(" "),a("p",[a("strong",[t._v("BTCPay Server has an API compatible with Bitpay")]),t._v("; changing your e-commerce application "),a("strong",[t._v("from Bitpay to BTCPay")]),t._v(" should take minimal effort.")]),t._v(" "),a("p",[t._v("You can read the full API documentation "),a("a",{attrs:{href:"https://bitpay.com/api#resource-Invoices",target:"_blank",rel:"noopener noreferrer"}},[t._v("on Bitpay's website"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("There is only one difference: Bitpay only allows one account for one merchant, BTCPay allows a user to manage multiple stores.")]),t._v(" "),a("h2",{attrs:{id:"modal-checkout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modal-checkout"}},[t._v("#")]),t._v(" Modal Checkout")]),t._v(" "),a("p",[t._v("To generate a pop-up modal experience:")]),t._v(" "),a("ol",[a("li",[t._v("Include the btcpay.js script in your html page")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://your.btcpay.url/modal/btcpay.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Call the invoice API to generate an invoice (example code). This is sample backend code as it contains an auth token that should not be exposed in your front-end.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" axiosClient "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("baseURL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BTCPAY_URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("timeout")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("responseType")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("headers")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'Content-Type'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Authorization")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BTCPAY_AUTH")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" invoiceCreation "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("price")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("currency")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'USD'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("orderId")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'something'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("itemDesc")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'item description'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("notificationUrl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://webhook.after.checkout.com/goeshere'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("redirectURL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://go.here.after.checkout.com'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" axiosClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/invoices'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" invoiceCreation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" invoiceId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Use the invoiceId to pop up the modal")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("btcpay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showInvoice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("invoiceId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("You'll often want to do something like refresh the state of your page when the invoice is paid, or note some kind of state before the modal pops up. You can attach event listeners like this:")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("btcpay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onModalWillEnter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("yourCallbackFunction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("btcpay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onModalWillLeave")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("yourCallbackFunction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("btcpay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onModalReceiveMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("yourCallbackFunction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// available from v1.0.5.6")]),t._v("\n")])])]),a("p",[a("code",[t._v("onModalReceiveMessage")]),t._v(" will invoke your callback when a new status has been pushed from BTCPay Server to the invoice UI. The data format is "),a("code",[t._v('{invoiceId: "x", status: "y" }')])])])}),[],!1,null,null,null);a.default=n.exports}}]);