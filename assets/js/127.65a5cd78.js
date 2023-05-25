(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{760:function(e,t,n){"use strict";n.r(t);var a=n(9),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),t("h2",{attrs:{id:"debugging-connection-problems"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debugging-connection-problems"}},[e._v("#")]),e._v(" Debugging connection problems")]),e._v(" "),t("p",[e._v('On the Lightning node connection setting screen, switch to "Use custom node".\nThere you will find the LNbank connection string, which looks like this:')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("type=lnbank;server=https://mybtcpay.com/;api-token=WALLET_ACCESS_KEY\n")])])]),t("p",[e._v('On that view you can also use the "Test connection" functionality.\nIf you encounter problems like "The Lightning node did not reply in a timely manner", it\'s most likely a DNS-related problem.')]),e._v(" "),t("h3",{attrs:{id:"dns-problems"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns-problems"}},[e._v("#")]),e._v(" DNS problems")]),e._v(" "),t("p",[e._v("The server that BTCPay is running on might not be able to resolve the domain (in this example "),t("code",[e._v("mybtcpay.com")]),e._v(") correctly.")]),e._v(" "),t("p",[e._v("Use the ping command to debug to the problem.\n"),t("code",[e._v("ping mybtcpay.com")]),e._v(" should point to the IP of your server:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ping")]),e._v(" mybtcpay.com\nPING mybtcpay.com "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("XX.XX.XX.XX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("56")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("84")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" bytes of data.\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("64")]),e._v(" bytes from XX.XX.XX.XX "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("XX.XX.XX.XX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(": "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("icmp_seq")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ttl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("52")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("263")]),e._v(" ms\n")])])]),t("p",[e._v("The "),t("code",[e._v("XX.XX.XX.XX")]),e._v(" should be the external IP of the server.\nIn case you don't know it, run the same command not from your server, but from you local computer — this should give you the public IP of ythe server.\nIt the server's DNS resolves the domain to a local IP, find out where that is defined (most likely in the "),t("code",[e._v("/etc/hosts")]),e._v(" file) and remove that mapping.")]),e._v(" "),t("h3",{attrs:{id:"for-cloudflare-users"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for-cloudflare-users"}},[e._v("#")]),e._v(" For Cloudflare users")]),e._v(" "),t("p",[e._v("If you are using Cloudflare, check if changing the folowing settings makes a difference:")]),e._v(" "),t("ul",[t("li",[e._v("Disable the "),t("a",{attrs:{href:"https://developers.cloudflare.com/bots/get-started/free/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bot Fighter Mode"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Switch the "),t("a",{attrs:{href:"https://developers.cloudflare.com/dns/manage-dns-records/reference/proxied-dns-records",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proxy Status"),t("OutboundLink")],1),e._v(' to "Proxied" instead of "DNS only"')])]),e._v(" "),t("h3",{attrs:{id:"using-curl-for-debugging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-curl-for-debugging"}},[e._v("#")]),e._v(" Using cURL for debugging")]),e._v(" "),t("p",[e._v("You can also try to access the LNbank node info via cURL, which gives you a verbose output of possible connection problems:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -vvv "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -H "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Content-Type: application/json"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -H "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Authorization: Bearer WALLET_ACCESS_KEY"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  https://mybtcpay.com/plugins/lnbank/api/lightning/info\n")])])]),t("p",[e._v("This command should return the connection details as well as a JSON response containing your Lightning node information.")]),e._v(" "),t("h2",{attrs:{id:"manual-deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manual-deployment"}},[e._v("#")]),e._v(" Manual deployment")]),e._v(" "),t("p",[e._v("If you have deployed BTCPay Server using the "),t("RouterLink",{attrs:{to:"/Deployment/ManualDeploymentExtended/"}},[e._v("manual deployment")]),e._v(', you might encounter the "LNbank requires an internal Lightning node to be configured" message on the LNbank wallets overview page.')],1),e._v(" "),t("p",[e._v('In this case, make sure that you have configured the Lightning node you want to use as "internal node" using the '),t("code",[e._v("BTC.lightning")]),e._v(" setting in your "),t("RouterLink",{attrs:{to:"/Deployment/ManualDeploymentExtended/#3-create-a-configuration-file"}},[e._v("btcpay.config")]),e._v(" file:")],1),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("BTC.lightning=type=lnd-rest;server=https://127.0.0.1:8080/;macaroonfilepath=/home/admin/.lnd/data/chain/bitcoin/mainnet/admin.macaroon\n")])])]),t("p",[e._v('See the "Use custom node" view on the Lightning node connection setting screen in BTCPay Server for details on the connection string.')]),e._v(" "),t("p",[e._v("You need to restart BTCPay Server for the settings update to take effect.")])])}),[],!1,null,null,null);t.default=s.exports}}]);