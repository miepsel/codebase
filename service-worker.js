if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,n)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const c=e=>a(e,d),l={module:{uri:d},exports:r,require:c};i[d]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(n(...e),r)))}}define(["./workbox-13a68322"],(function(e){"use strict";e.setCacheNameDetails({prefix:"eleventy-plugin-pwa"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_assets/api/functions/jungle_home.png",revision:"28204240da92aa360e4d02dc57c979f4"},{url:"_assets/api/functions/jungle_login.png",revision:"a030411270e7629db649a162eac99711"},{url:"_assets/api/functions/jungle_logoff.png",revision:"0a06d1b0507f8915eccd0c8e2768b3e9"},{url:"_assets/api/functions/jungle_userdata.png",revision:"a9dc2c6e29ec4997899003c21a0485c5"},{url:"_assets/api/Laravel-logo.png",revision:"f17b1720fc57eedc286ec2b0ce6c2428"},{url:"_assets/api/mvc-concept.png",revision:"00b771e6bf805ee482012199b19d1883"},{url:"_assets/api/PHP-logo.png",revision:"a64aa98408a0d6df8f0accb876456b7c"},{url:"_assets/csharp/VSinstall.png",revision:"caa1bb58de1b58fa924fffd8f884af29"},{url:"_assets/deltion.svg",revision:"68e26a799f30abcb831573894c87d8e9"},{url:"_assets/favicon.ico",revision:"e4c171f66d7add873bbb162f106b692b"},{url:"_assets/green_pepper.svg",revision:"9f01083082d9b7c40a10ffefec5c1bbe"},{url:"_assets/projecten/schema_loginform.svg",revision:"0885303ef53850a01345e17667453d89"},{url:"_assets/projecten/sessionlogin.svg",revision:"773c15a104163a06e978d9a44d59cb60"},{url:"_assets/purple_pepper.svg",revision:"bc6f4d317d05ed33900e2c1431656ba3"},{url:"_assets/red_pepper.svg",revision:"a79d08c61f076a0bfc12b3c4c10d76bd"},{url:"_assets/tools/postman.png",revision:"fe0e1d40b667f8437a28e1cc7097c206"},{url:"_assets/weather.png",revision:"f0ca9629a6960522ab0e5f8e23fc9100"},{url:"_css/base.css",revision:"6ac60c7a56f467a8b5685c73bd95ecfd"},{url:"_css/code.css",revision:"8bd3662b3cc12cd7954c55f0ea6655c8"},{url:"_css/deltion-colors.css",revision:"929b9e62c11267e41aeeaa0104d41306"},{url:"_css/fonts/FiraCode-VariableFont_wght.ttf",revision:"a3df227f3a1fbdf3481d8cc26f043e13"},{url:"_css/fonts/PublicSans-Italic-VariableFont_wght.ttf",revision:"bf9c207d75cfd1a5b4505cc5363b8030"},{url:"_css/fonts/PublicSans-VariableFont_wght.ttf",revision:"0895a4e6e560a84db0efa8f55e841c63"},{url:"_css/prism-one-light.css",revision:"4f05f10368379a1ad0cc653bf32d84c7"},{url:"_css/text.css",revision:"8185c56ec4175298a32c3e7184330f4c"},{url:"_css/video.css",revision:"516009c90917ebe4a61805b9dab55add"},{url:"backend/api-c/index.html",revision:"d2b71dcae39490342c5a45835da6396d"},{url:"backend/api-rbac/index.html",revision:"7496a57cc0134df63de076292d60ea4e"},{url:"backend/api-server/index.html",revision:"93f4aa4e0bd016cf8a226dc23512f98f"},{url:"backend/evenement/index.html",revision:"24e71a62b4f4e2a32a9b1d5ae5345e6e"},{url:"backend/featuretesting/index.html",revision:"58e20dd976b89141f4a77313edc04c8a"},{url:"backend/functions/index.html",revision:"4c654fca20db29a2105cb93e0a34c3e7"},{url:"backend/introductie/index.html",revision:"83827498379080841b16ff3a67f3f29d"},{url:"backend/mvc-basics/index.html",revision:"c858710dce1dc660918b8acbd8309e27"},{url:"backend/mvc-framework-c/index.html",revision:"36b74ba2c02a6cfb85a077ee528f61af"},{url:"backend/mvc-framework/index.html",revision:"495d095bc81b18a240b3514ddf51250d"},{url:"backend/oop/index.html",revision:"b7105b04fa6bb692b39d7589b6143396"},{url:"basis/afstanden/index.html",revision:"097d91e8db003fc5183e9e7fe85df1cd"},{url:"basis/array-met-getallen/index.html",revision:"155230b8601be9a4e35b6983c447889a"},{url:"basis/array/index.html",revision:"9627d23759029198f30647e0d9f25173"},{url:"basis/boodschappenlijst/index.html",revision:"a28ede6d01e9f6766714c1eac76a4ae6"},{url:"basis/brackets/index.html",revision:"cd0d3ecb5f35346c1b277a5e5d5ca714"},{url:"basis/breuken/index.html",revision:"808130013f6cf91d860712b760ed4023"},{url:"basis/cirkel-omtrek/index.html",revision:"c11d1074e98eb80903ff531f6a861e66"},{url:"basis/cirkel/index.html",revision:"58bd71618fdc8c849c8a9772bc109470"},{url:"basis/combinaties/index.html",revision:"2354aecfb75a59e1087b71dd65333c67"},{url:"basis/decimale-combinaties/index.html",revision:"6fd61d91b204210df0c4b98b4a6dbcc5"},{url:"basis/deelbaar/index.html",revision:"d7a68e83fb4987cb229d0fb5b99b0efb"},{url:"basis/diamant-tekenen/index.html",revision:"fd4a421dcbc18c6de84421f2cbac6717"},{url:"basis/echte-pyramide/index.html",revision:"48bfb5e1f199a39e868930a2073800bd"},{url:"basis/elementen-tellen/index.html",revision:"3fa30c4e140843e725251e69f47e36e9"},{url:"basis/faculteit/index.html",revision:"cbe7ae6f54ca4f74766a6a0d6bf0742c"},{url:"basis/fizz-buzz/index.html",revision:"c6f9a5a2d4deaaedda50af7a0aac6ad2"},{url:"basis/geheimschrijver/index.html",revision:"ce28758fc7549c9d345a1b1039897c44"},{url:"basis/getallenreeks/index.html",revision:"a21c340736932e7f47aa87e2c578996a"},{url:"basis/grootste-getal/index.html",revision:"40c0f209841f2a848f911776043a5e51"},{url:"basis/hoeveel-dagen/index.html",revision:"466c6438b375ebc7819d806765d22037"},{url:"basis/hoofdletters/index.html",revision:"cae5584bae9d40058c0706c20272f554"},{url:"basis/introductie/index.html",revision:"b4d4e74af58f9f17e69eeb984a4dfef9"},{url:"basis/kassa-systeem/index.html",revision:"af4688e9df568e2548c40e4651562f7d"},{url:"basis/kleinste-getal/index.html",revision:"2be381168ed54439942c883e1a8fb0ac"},{url:"basis/klok/index.html",revision:"1abfd7c425e8ae52f48118e47841d548"},{url:"basis/knikkers/index.html",revision:"dbcd934d2677cfcf93c760837e3c6cf4"},{url:"basis/leeftijd/index.html",revision:"6dc6d765953a0950e72219c7bfa69bc7"},{url:"basis/leeftijdchecker/index.html",revision:"37a771cafb746850ce8ff8cf3c6dde21"},{url:"basis/leeftijdgrenzen/index.html",revision:"7c4cd602a725033b30fe29f8827799ad"},{url:"basis/letter-a/index.html",revision:"e3042a74c38592f57d28f70a89e5dfa2"},{url:"basis/lotto/index.html",revision:"7c6899939c452e133be298813961795a"},{url:"basis/mail-to-username/index.html",revision:"87d8f81d1af653db332b981d7d75c04d"},{url:"basis/mijn-info/index.html",revision:"2424045733058bab5d050aa092323ec7"},{url:"basis/mini-maxi/index.html",revision:"76342a32e88c36d4e0b3d8b76acf7f08"},{url:"basis/mogelijke-opties/index.html",revision:"c68d6827ca458b96494191d11226b751"},{url:"basis/muntje-gooien/index.html",revision:"2e58738866f249f63aa8f1ba95f77c3c"},{url:"basis/namenlijst/index.html",revision:"22761ff1977b340f23e197feb30b7f51"},{url:"basis/oneven-getal/index.html",revision:"f607cd3d3577ac9d3a399c2f7c92fc31"},{url:"basis/oppervlakte-berekenen/index.html",revision:"f5887281f4004a3c84cc2653a1d1737b"},{url:"basis/patroon-tekenen-2/index.html",revision:"bccac914ce5801117416302afcae2f05"},{url:"basis/patroon-tekenen/index.html",revision:"c651b3e174892e63c7a6cfe0a6b06507"},{url:"basis/poll/index.html",revision:"7fedcbb4c1bd00991306208166fb0907"},{url:"basis/pyramide/index.html",revision:"aabf63c8f3bcfe10ec1fbf310690bec8"},{url:"basis/raad-het-getal/index.html",revision:"b162902967373e30ae2d4b09f1b3e340"},{url:"basis/raad-het-woord/index.html",revision:"f30f4f9953356b56a17e77e95f16b5fc"},{url:"basis/romeinse-getallen/index.html",revision:"789c29dd182ccbc2d7252fab88914978"},{url:"basis/schaakbord/index.html",revision:"5df540382eaa233f8721c06c1f37bdbc"},{url:"basis/schoenverkoper/index.html",revision:"da3e7b36e043fb54beab2858690f1fbc"},{url:"basis/steen-papier-schaar/index.html",revision:"48ae39ccd044c95e69c954d7c5ef287a"},{url:"basis/tafels/index.html",revision:"c48093e6c4757d90b08c4030348350e5"},{url:"basis/tekst-doorlopen/index.html",revision:"eb5f48aa303b43224d67f482f3f9d3e5"},{url:"basis/tijd-naar-tekst/index.html",revision:"11072a090e180d3af0928ea1baeb7a91"},{url:"basis/urenregistratie/index.html",revision:"1558f9e8cebd8fe74560a0273225efd8"},{url:"basis/user-repeat/index.html",revision:"04e6ad743b511f2dedf7bb02e54f7f9b"},{url:"basis/verbruik-auto/index.html",revision:"8d36d4d1d9c427e0cc4c5a7f4688c7a3"},{url:"basis/vermoeden-van-collatz/index.html",revision:"f41fbe82e95df2f08fd951996d2e0edc"},{url:"basis/weather-app/index.html",revision:"3d7439f85d3ae0bf57e606719a7636a3"},{url:"basis/wie-is-de-winnaar/index.html",revision:"3aba09648729d68faff80f85582461e4"},{url:"basis/witregel/index.html",revision:"69f1a38d63a994d9011e0806d3c5d9e0"},{url:"basis/xml-to-json/index.html",revision:"6ce452a8c96d0073d2175c450931aabc"},{url:"basis/zuurstof/index.html",revision:"2c30073b5ca371f3d85e47f07d0685a4"},{url:"databases/introductie/index.html",revision:"e26d3f4e0c42cbd2a79128784879af5a"},{url:"frontend/css-basis/index.html",revision:"8a7cb29b2dfff2be3f23099423663741"},{url:"frontend/html/index.html",revision:"730ec3aad388f2dbd2d67f0f2d1b26c1"},{url:"frontend/introductie/index.html",revision:"e056f88fb3609c96492b23732d89dde5"},{url:"index.html",revision:"201642a3dbcb2be80ada6080689f2c59"},{url:"manifest.json",revision:"65683dbf468f7a69906d946197f3a273"},{url:"mobile/introductie/index.html",revision:"922ddb66b2cb5ef69f83cb00acd5c47c"},{url:"omgeving/c-omgeving/index.html",revision:"d1ad08a30627aab2baef9f9743abb082"},{url:"omgeving/introductie/index.html",revision:"2b6b7c37cbf19ac6c43c2cab74a17902"},{url:"omgeving/ontwikkelomgeving-voor-htmlphp/index.html",revision:"5ae43d4707a01b95d373f2f54b211362"},{url:"omgeving/python-omgeving/index.html",revision:"0352eb88e8a8383db123f5c91508a095"},{url:"projecten/casino-kaarten-delen/index.html",revision:"f44a719461c2f19f292ab8db81699f9d"},{url:"projecten/introductie/index.html",revision:"3599f24b257f09055adf26308512aaa4"},{url:"projecten/kleurkiezer/index.html",revision:"4040370f1b1003c08fe08a36d4d0a720"},{url:"projecten/sessie-login/index.html",revision:"894c6f7e7b7a6e9a39ded8b8084c9f53"},{url:"projecten/simpele-login/index.html",revision:"a9e7fd0d7f13dc94f485f297973715c5"},{url:"tools/docker/index.html",revision:"8b6ce1ff80f61702830170fd18ebbb7b"},{url:"tools/git/index.html",revision:"3ccdb99c5dd414750df396ac7f600c2b"},{url:"tools/introductie/index.html",revision:"a6ed975073855bfa1688e66296a1d5ba"},{url:"tools/postman/index.html",revision:"e38aff49da1f154da56507d12acac3b8"},{url:"tools/pycharm/index.html",revision:"ea3edd486e1c92467b965c28701e48a1"},{url:"tools/virtualenv/index.html",revision:"6602f38824a94ef692d89f6991284d86"},{url:"tools/visual-studio-code/index.html",revision:"76fea96452b32f15453c3fadad2c2749"},{url:"tools/xampp/index.html",revision:"5a8ad3f5aa2f568383e24d4f37eacabf"}],{}),e.registerRoute(/^.*\.(html|css|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=service-worker.js.map
