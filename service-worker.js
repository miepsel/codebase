if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,d)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let r={};const c=e=>a(e,n),b={module:{uri:n},exports:r,require:c};i[n]=Promise.all(s.map((e=>b[e]||c(e)))).then((e=>(d(...e),r)))}}define(["./workbox-13a68322"],(function(e){"use strict";e.setCacheNameDetails({prefix:"eleventy-plugin-pwa"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_assets/api/functions/jungle_home.png",revision:"28204240da92aa360e4d02dc57c979f4"},{url:"_assets/api/functions/jungle_login.png",revision:"a030411270e7629db649a162eac99711"},{url:"_assets/api/functions/jungle_logoff.png",revision:"0a06d1b0507f8915eccd0c8e2768b3e9"},{url:"_assets/api/functions/jungle_userdata.png",revision:"a9dc2c6e29ec4997899003c21a0485c5"},{url:"_assets/api/Laravel-logo.png",revision:"f17b1720fc57eedc286ec2b0ce6c2428"},{url:"_assets/api/mvc-concept.png",revision:"00b771e6bf805ee482012199b19d1883"},{url:"_assets/api/PHP-logo.png",revision:"a64aa98408a0d6df8f0accb876456b7c"},{url:"_assets/csharp/VSinstall.png",revision:"caa1bb58de1b58fa924fffd8f884af29"},{url:"_assets/deltion.svg",revision:"68e26a799f30abcb831573894c87d8e9"},{url:"_assets/favicon.ico",revision:"e4c171f66d7add873bbb162f106b692b"},{url:"_assets/green_pepper.svg",revision:"9f01083082d9b7c40a10ffefec5c1bbe"},{url:"_assets/projecten/boekProjectmanagement.jpg",revision:"cf3ce70000c430a44245f799dcbcf182"},{url:"_assets/projecten/schema_loginform.svg",revision:"0885303ef53850a01345e17667453d89"},{url:"_assets/projecten/sessionlogin.svg",revision:"773c15a104163a06e978d9a44d59cb60"},{url:"_assets/purple_pepper.svg",revision:"bc6f4d317d05ed33900e2c1431656ba3"},{url:"_assets/red_pepper.svg",revision:"a79d08c61f076a0bfc12b3c4c10d76bd"},{url:"_assets/tools/postman.png",revision:"fe0e1d40b667f8437a28e1cc7097c206"},{url:"_assets/weather.png",revision:"f0ca9629a6960522ab0e5f8e23fc9100"},{url:"_css/base.css",revision:"59e3272b41e2dae79b858941906e32b5"},{url:"_css/code.css",revision:"8bd3662b3cc12cd7954c55f0ea6655c8"},{url:"_css/deltion-colors.css",revision:"929b9e62c11267e41aeeaa0104d41306"},{url:"_css/fonts/FiraCode-VariableFont_wght.ttf",revision:"a3df227f3a1fbdf3481d8cc26f043e13"},{url:"_css/fonts/PublicSans-Italic-VariableFont_wght.ttf",revision:"bf9c207d75cfd1a5b4505cc5363b8030"},{url:"_css/fonts/PublicSans-VariableFont_wght.ttf",revision:"0895a4e6e560a84db0efa8f55e841c63"},{url:"_css/prism-one-light.css",revision:"4f05f10368379a1ad0cc653bf32d84c7"},{url:"_css/text.css",revision:"8185c56ec4175298a32c3e7184330f4c"},{url:"_css/video.css",revision:"516009c90917ebe4a61805b9dab55add"},{url:"backend/api-c/index.html",revision:"4838c468e0b7165949029cb0ba34eb1c"},{url:"backend/api-rbac/index.html",revision:"ddd13a4f82e08a74418c683d66c4d636"},{url:"backend/api-server/index.html",revision:"f6652252501ae68e0c7e4c91dc033582"},{url:"backend/evenement/index.html",revision:"6957ff4f20634a7c580e1868dc0744a6"},{url:"backend/featuretesting/index.html",revision:"d05d56b2735f8b2cdf7267aee35851a7"},{url:"backend/functions/index.html",revision:"2fd84166fa61c16556a5ad7fdbd32f2d"},{url:"backend/introductie/index.html",revision:"f4cb611d49d76024c67f5bcb84731490"},{url:"backend/mvc-basics/index.html",revision:"238f00c8ccec283f73dba73b6fae3fd7"},{url:"backend/mvc-framework-c/index.html",revision:"0115efd2df9c52bd87ead4025d69b3c2"},{url:"backend/mvc-framework/index.html",revision:"2a751cfb11400f4f7d85915980a93d7e"},{url:"backend/oop/index.html",revision:"2099e5e4cd6349993a1bf315565de153"},{url:"backend/sessie-login/index.html",revision:"43d761753607b61d3c3cf45a0dc0234a"},{url:"backend/simpele-login/index.html",revision:"b857d332e813a655b82781019f6ffdb1"},{url:"basis/afstanden/index.html",revision:"3f23a13a9ad01ca8cfcde573aa89135a"},{url:"basis/array-met-getallen/index.html",revision:"e0047b012937d6d6724a8236b3336c0c"},{url:"basis/array/index.html",revision:"6e15536b2c4d18d8e717161583c18be6"},{url:"basis/boodschappenlijst/index.html",revision:"e084319f935319a7a87661d9169451c9"},{url:"basis/brackets/index.html",revision:"57d25d512b9cfd5884a3a60dd983699e"},{url:"basis/breuken/index.html",revision:"8d1b90e2c78048b246cf578aa787d19c"},{url:"basis/cirkel-omtrek/index.html",revision:"5717977dff5cfcda52a93f5eab0fd8ec"},{url:"basis/cirkel/index.html",revision:"d32f55f8945add2d14257da60e2631d3"},{url:"basis/combinaties/index.html",revision:"1d2b2b44a25928f582ec7933b0d626d1"},{url:"basis/decimale-combinaties/index.html",revision:"ee8de2504664b9533578a09e011b17a6"},{url:"basis/deelbaar/index.html",revision:"a1253d3b8ab5100bd9844a047b4a2052"},{url:"basis/diamant-tekenen/index.html",revision:"061b795bd2d9bdcc30bf443fb91b458f"},{url:"basis/echte-pyramide/index.html",revision:"566689362b005851a62a40aeb1a77451"},{url:"basis/elementen-tellen/index.html",revision:"aea2941787b75430592741ebfdd38a2a"},{url:"basis/faculteit/index.html",revision:"6c905a4e7f670cee928f39fe2a3a7ea1"},{url:"basis/fizz-buzz/index.html",revision:"144688644f7ba133814d5020959e4f6f"},{url:"basis/geheimschrijver/index.html",revision:"f63eb2cfdac9bc964f1785508e4bf016"},{url:"basis/getallenreeks/index.html",revision:"0d210f0fc821592180f671694376ebb5"},{url:"basis/grootste-getal/index.html",revision:"ad5ab9b0c222be1b5fb0b87b6a41ea43"},{url:"basis/hoeveel-dagen/index.html",revision:"419dceca78a8ffeb45224e62edac2c40"},{url:"basis/hoofdletters/index.html",revision:"c3a20133b6cd9dfee64a1aeaabd976e5"},{url:"basis/introductie/index.html",revision:"ee701888bde4ad75835ecb1a426666ac"},{url:"basis/kassa-systeem/index.html",revision:"0867882b619a7b8d5a832b98f22596a2"},{url:"basis/kleinste-getal/index.html",revision:"37dbd5dd4a91c15bbb097bc5e3486e09"},{url:"basis/kleurkiezer/index.html",revision:"c4f029f39404794813ff6b5e13c98180"},{url:"basis/klok/index.html",revision:"cbc192826bdb8ba01cf54bfd21cfc293"},{url:"basis/knikkers/index.html",revision:"ec8ec49d6c08e7e22e002dedef625aa2"},{url:"basis/leeftijd/index.html",revision:"af37d8251823c739cdb0d5f249563962"},{url:"basis/leeftijdchecker/index.html",revision:"98debc1a0f6158362f12208fb47181ef"},{url:"basis/leeftijdgrenzen/index.html",revision:"50364d2892a4dca7326d84e5716adca7"},{url:"basis/letter-a/index.html",revision:"5fa4545a36e2ac649413c7a49af4e9e6"},{url:"basis/lotto/index.html",revision:"87c8830556ef7f0d9dc10275f0709f75"},{url:"basis/mail-to-username/index.html",revision:"82bdb4f886d4964b5ed5293d68ba4eb3"},{url:"basis/mijn-info/index.html",revision:"a334a3c761120724906dd235f6685b63"},{url:"basis/mini-maxi/index.html",revision:"776bbeb4e22e61cafb2c99edf94e9ccc"},{url:"basis/mogelijke-opties/index.html",revision:"ab285d0ecc661ae12d0b98d5615f4873"},{url:"basis/muntje-gooien/index.html",revision:"e134032620590ce28411589ba36c8aa2"},{url:"basis/namenlijst/index.html",revision:"11f9fa7816688000f5a8bd462ebb0316"},{url:"basis/oneven-getal/index.html",revision:"bd7ca371f151127de5dbbd55f2ffea52"},{url:"basis/oppervlakte-berekenen/index.html",revision:"2ec000593c5ee6538136fbd6751dc04b"},{url:"basis/patroon-tekenen-2/index.html",revision:"92b6c2a78ecf5e38691b4781b8d709a1"},{url:"basis/patroon-tekenen/index.html",revision:"b33f49212c24dd9a4e267d155595adf0"},{url:"basis/poll/index.html",revision:"c2a6f5ac97ceedf837c28dd619b41443"},{url:"basis/pyramide/index.html",revision:"b06bf9fe4ab7e23de9325ee399a37c0a"},{url:"basis/raad-het-getal/index.html",revision:"ae3f1aaaf9f975703a9098eab8546f94"},{url:"basis/raad-het-woord/index.html",revision:"e430cf658bd455ec6dc8a8fed44b71b5"},{url:"basis/romeinse-getallen/index.html",revision:"a0affc545512a9194da9ea1ec5f36efe"},{url:"basis/schaakbord/index.html",revision:"24a3672afa36b92e82fe36cd6a05428a"},{url:"basis/schoenverkoper/index.html",revision:"cc61039483909917570a8fe711980095"},{url:"basis/steen-papier-schaar/index.html",revision:"6f6e6adac25f07366c2776543f712ca6"},{url:"basis/tafels/index.html",revision:"f43525bdc43977befa585d2f37aa72cf"},{url:"basis/tekst-doorlopen/index.html",revision:"356c73af509969527a85dfb0a6b0c235"},{url:"basis/tijd-naar-tekst/index.html",revision:"cad4b06140c1d57f137aa9d820febbf4"},{url:"basis/urenregistratie/index.html",revision:"88ed7147c3db6270d36ec4f6d386d312"},{url:"basis/user-repeat/index.html",revision:"0aee9eed7d7caa0f63c0743e397890de"},{url:"basis/verbruik-auto/index.html",revision:"18ca0688b2ee0251dd0019dfddc6911b"},{url:"basis/vermoeden-van-collatz/index.html",revision:"70cbc14d89aabd53e233f31f8624a75d"},{url:"basis/weather-app/index.html",revision:"ab0547cf021f9bec9bf2fe55bdb8d999"},{url:"basis/wie-is-de-winnaar/index.html",revision:"0886b097bf63db41413d841230dc3b71"},{url:"basis/witregel/index.html",revision:"48f90a6b2e6514ec2228c4b7ed3798e5"},{url:"basis/xml-to-json/index.html",revision:"5361943d5efee674360a827091703337"},{url:"basis/zuurstof/index.html",revision:"af4afea6fbf900343e99475396cec6ad"},{url:"databases/introductie/index.html",revision:"e452eac982828e84f679fa42017e1034"},{url:"frontend/casino-kaarten-delen/index.html",revision:"80e04998dfba1d667ce072b368137c06"},{url:"frontend/css-basis/index.html",revision:"365252a9e12a80cc5cdeee21e5ad9720"},{url:"frontend/html/index.html",revision:"006d4d6feea17c001ab602fc3f42fa80"},{url:"frontend/introductie/index.html",revision:"8aeb735fa7ecf5b7d204b55f770fdd12"},{url:"index.html",revision:"d14d0cdebeaa247c4d915f06ffd820d2"},{url:"manifest.json",revision:"65683dbf468f7a69906d946197f3a273"},{url:"omgeving/c-omgeving/index.html",revision:"329375f33cc0d794d882ec07093ef5c7"},{url:"omgeving/docker/index.html",revision:"38e4d1ec50bfda8fef758f6308c14163"},{url:"omgeving/git/index.html",revision:"909613ae18672fe49b195c71121bf587"},{url:"omgeving/introductie/index.html",revision:"0e2e000ecad2044f85c953f39bf169c5"},{url:"omgeving/ontwikkelomgeving-voor-htmlphp/index.html",revision:"c2c37d3cc728f0f53b583b49d1019724"},{url:"omgeving/postman/index.html",revision:"237b8e6d984d8500e4fabf772b6f1431"},{url:"omgeving/pycharm/index.html",revision:"94f11f658f9ff4b0729bdaa76ccce24b"},{url:"omgeving/python-omgeving/index.html",revision:"c88649ab7de70d0cebbd30c3636754f8"},{url:"omgeving/virtualenv/index.html",revision:"e0c0c0a15ef074fffe96fa211d6594df"},{url:"omgeving/visual-studio-code/index.html",revision:"d338c906e32fd55fb4feaf4fdf507f75"},{url:"omgeving/xampp/index.html",revision:"2bd4dced8659f8e8b4ef70a9f336e836"},{url:"projecten/casino-kaarten-delen/index.html",revision:"4a18a55ba0efb90c20b3dd4abd30357a"},{url:"projecten/casussen/index.html",revision:"4236bbee69259c67d4c0caa72cae1d16"},{url:"projecten/eigen-casus/index.html",revision:"b641d09d4d7b5b4c2a220ba3a77da7fd"},{url:"projecten/introductie/index.html",revision:"8dc1ec1b2ad981306eb785d8c7e9027f"},{url:"projecten/kleurkiezer/index.html",revision:"5ccb391a5558d9e149a2c11163a69d86"},{url:"projecten/projectmanagement-scrum/index.html",revision:"2be1b8395de824c7702f7b688719407e"},{url:"projecten/sessie-login/index.html",revision:"8cf0d4957b28f885b9769b9e5c441411"},{url:"projecten/simpele-login/index.html",revision:"835b1a840ad2ae62e05b2cea19c17e77"},{url:"thema/introductie/index.html",revision:"1b1d8638f23d7fb49252b26130b9ebf8"}],{}),e.registerRoute(/^.*\.(html|css|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=service-worker.js.map
