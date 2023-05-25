(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{676:function(e,t,o){"use strict";o.r(t);var a=o(9),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"connecting-coldcard-wallet-to-btcpay-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connecting-coldcard-wallet-to-btcpay-server"}},[e._v("#")]),e._v(" Connecting Coldcard Wallet to BTCPay Server")]),e._v(" "),t("p",[e._v("This document shows how to use a "),t("strong",[e._v("Coldcard Wallet")]),e._v(" with your BTCPay Server.")]),e._v(" "),t("h2",{attrs:{id:"coldcard-wallet-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coldcard-wallet-setup"}},[e._v("#")]),e._v(" Coldcard Wallet Setup")]),e._v(" "),t("p",[e._v("This guide assumes, you have a Coldcard wallet set up. To configure the "),t("strong",[e._v("Coldcard")]),e._v(", please see the "),t("a",{attrs:{href:"https://coldcardwallet.com/docs/quick",target:"_blank",rel:"noopener noreferrer"}},[e._v("quick setup guide on manufacturer's website"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"quick-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quick-setup"}},[e._v("#")]),e._v(" Quick Setup")]),e._v(" "),t("ol",[t("li",[e._v("Insert the MicroSD card into the Coldcard wallet.")]),e._v(" "),t("li",[e._v("Go to Advanced > MicroSD Card > Electrum Wallet > Native-Segwit")]),e._v(" "),t("li",[e._v("Insert the MicroSD card back into your PC")]),e._v(" "),t("li",[e._v("In BTCPay Server, Stores > Settings > Setup > Connect an existing wallet > "),t("code",[e._v("Import wallet file")])]),e._v(" "),t("li",[e._v("Choose File > select the wallet file earlier exported from Coldcard.")]),e._v(" "),t("li",[e._v("Click "),t("code",[e._v("Continue")])]),e._v(" "),t("li",[e._v("Confirm the addresses match the ones shown in your BTCPay Server.")])]),e._v(" "),t("p",[e._v("The "),t("strong",[e._v("Coldcard is now connected to your BTCPay Server")]),e._v(". Payments go directly to Coldcard. The video below shows how to connect your BTCPay store to your Coldcard.")]),e._v(" "),t("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/N0eVwdP_7EQ/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=N0eVwdP_7EQ",title:"BTCPay and Coldcard","data-id":"N0eVwdP_7EQ"}},[t("iframe",{attrs:{title:"BTCPay and Coldcard","data-src":"https://www.youtube-nocookie.com/embed/N0eVwdP_7EQ?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),t("h3",{attrs:{id:"spending-from-btcpay-server-wallet-with-coldcard-psbt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spending-from-btcpay-server-wallet-with-coldcard-psbt"}},[e._v("#")]),e._v(" Spending from BTCPay Server wallet with Coldcard (PSBT)")]),e._v(" "),t("p",[e._v("Once there are some funds in received to your "),t("strong",[e._v("BTCPay Wallet connected to Coldcard")]),e._v(", you can spend them by using "),t("a",{attrs:{href:"https://github.com/bitcoin/bitcoin/blob/master/doc/psbt.md#psbt-in-general",target:"_blank",rel:"noopener noreferrer"}},[e._v("PSBT"),t("OutboundLink")],1),e._v(" (Partially Signed Bitcoin Transactions). This allows completely offline signing of your transactions, without ever having to connect your hardware wallet to the internet.")]),e._v(" "),t("ol",[t("li",[e._v("Wallets > Manage > Send")]),e._v(" "),t("li",[e._v("Fill in destination address and the amount")]),e._v(" "),t("li",[e._v("Click on the Sign with "),t("code",[e._v("a wallet supporting PSBT")]),e._v(" button.")]),e._v(" "),t("li",[e._v("You will be redirected to PSBT tab, with pre-filled information, click on the "),t("code",[e._v("Sign with a wallet supporting PSBT (save as file)")])]),e._v(" "),t("li",[e._v("Save the file onto MicroSD card")]),e._v(" "),t("li",[e._v("Insert MicroSD into your Coldcard.")]),e._v(" "),t("li",[e._v("In Coldcard, click on the "),t("code",[e._v("Ready To Sign")])]),e._v(" "),t("li",[e._v("Review the transaction information, and click OK button to sign it.")]),e._v(" "),t("li",[e._v("Transaction will be saved onto MicroSD.")]),e._v(" "),t("li",[e._v("In BTCPay, go to PSBT tab of the wallet and upload the signed PSBT file.")]),e._v(" "),t("li",[e._v("Click "),t("code",[e._v("Decode")])]),e._v(" "),t("li",[e._v("Click "),t("code",[e._v("Other Actions")]),e._v(" and select "),t("code",[e._v("Review")])]),e._v(" "),t("li",[e._v("Review your transactions and click "),t("code",[e._v("Broadcast")]),e._v(" to broadcast it on the network.")])]),e._v(" "),t("p",[e._v("The video below shows "),t("strong",[e._v("how to connect your BTCPay store to your Coldcard")]),e._v(".")]),e._v(" "),t("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/XyqvYaXMfNU/hqdefault.jpg)"},attrs:{href:"https://youtu.be/XyqvYaXMfNU",title:"BTCPay Server and Coldcard","data-id":"XyqvYaXMfNU"}},[t("iframe",{attrs:{title:"BTCPay Server and Coldcard","data-src":"https://www.youtube-nocookie.com/embed/XyqvYaXMfNU?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);