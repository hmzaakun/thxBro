"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voucher = void 0;
exports.Voucher = {
    abi: [
        {
            type: "constructor",
            inputs: [
                { name: "_owner", type: "address", internalType: "address" },
                { name: "_codeHashes", type: "bytes32[]", internalType: "bytes32[]" },
                { name: "_etherAmount", type: "uint256", internalType: "uint256" },
            ],
            stateMutability: "payable",
        },
        { type: "receive", stateMutability: "payable" },
        {
            type: "function",
            name: "claimVoucher",
            inputs: [
                { name: "_code", type: "string", internalType: "string" },
                { name: "_to", type: "address", internalType: "address" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "owner",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "vouchers",
            inputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
        },
        { type: "error", name: "ReentrancyGuardReentrantCall", inputs: [] },
    ],
    bytecode: {
        object: "0x608060405260405161085c38038061085c833981016040819052610022916102d6565b6001600081905580546001600160a01b0319166001600160a01b038516179055806100945760405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e203000000060448201526064015b60405180910390fd5b60008251826100a391906103d5565b9050600060646100b48360026103d5565b6100be91906103f2565b905060006100cc8284610414565b905080341461014e5760405162461bcd60e51b815260206004820152604260248201527f53656e7420457468657220616d6f756e7420646f6573206e6f74206d6174636860448201527f2074686520746f74616c20766f756368657220616d6f756e7420776974682066606482015261656560f01b608482015260a40161008b565b6001546040516000916001600160a01b03169084908381818185875af1925050503d806000811461019b576040519150601f19603f3d011682016040523d82523d6000602084013e6101a0565b606091505b50509050806101f15760405162461bcd60e51b815260206004820152601360248201527f466565207472616e73666572206661696c656400000000000000000000000000604482015260640161008b565b60005b86518110156102b3576002600088838151811061021357610213610427565b60200260200101518152602001908152602001600020546000146102795760405162461bcd60e51b815260206004820152601660248201527f566f756368657220616c72656164792065786973747300000000000000000000604482015260640161008b565b856002600089848151811061029057610290610427565b6020908102919091018101518252810191909152604001600020556001016101f4565b505050505050505061043d565b634e487b7160e01b600052604160045260246000fd5b6000806000606084860312156102eb57600080fd5b83516001600160a01b038116811461030257600080fd5b602085810151919450906001600160401b038082111561032157600080fd5b818701915087601f83011261033557600080fd5b815181811115610347576103476102c0565b8060051b604051601f19603f8301168101818110858211171561036c5761036c6102c0565b60405291825284820192508381018501918a83111561038a57600080fd5b938501935b828510156103a85784518452938501939285019261038f565b809750505050505050604084015190509250925092565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176103ec576103ec6103bf565b92915050565b60008261040f57634e487b7160e01b600052601260045260246000fd5b500490565b808201808211156103ec576103ec6103bf565b634e487b7160e01b600052603260045260246000fd5b6104108061044c6000396000f3fe6080604052600436106100385760003560e01c806312ae36e8146100445780638da5cb5b14610066578063e4c96ac4146100a357600080fd5b3661003f57005b600080fd5b34801561005057600080fd5b5061006461005f3660046102d0565b6100de565b005b34801561007257600080fd5b50600154610086906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100af57600080fd5b506100d06100be366004610392565b60026020526000908152604090205481565b60405190815260200161009a565b6100e6610274565b6000826040516020016100f991906103ab565b60408051601f19818403018152918152815160209283012060008181526002909352912054909150806101735760405162461bcd60e51b815260206004820152601f60248201527f496e76616c6964206f7220616c7265616479207573656420766f75636865720060448201526064015b60405180910390fd5b804710156101c35760405162461bcd60e51b815260206004820152601e60248201527f436f6e747261637420696e73756666696369656e746c792066756e6465640000604482015260640161016a565b600082815260026020526040808220829055516001600160a01b0385169083908381818185875af1925050503d806000811461021b576040519150601f19603f3d011682016040523d82523d6000602084013e610220565b606091505b50509050806102635760405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b604482015260640161016a565b5050506102706001600055565b5050565b60026000540361029757604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b634e487b7160e01b600052604160045260246000fd5b80356001600160a01b03811681146102cb57600080fd5b919050565b600080604083850312156102e357600080fd5b823567ffffffffffffffff808211156102fb57600080fd5b818501915085601f83011261030f57600080fd5b8135818111156103215761032161029e565b604051601f8201601f19908116603f011681019083821181831017156103495761034961029e565b8160405282815288602084870101111561036257600080fd5b826020860160208301376000602084830101528096505050505050610389602084016102b4565b90509250929050565b6000602082840312156103a457600080fd5b5035919050565b6000825160005b818110156103cc57602081860181015185830152016103b2565b50600092019182525091905056fea2646970667358221220a35fbc5bd0035f6586e6cbf3921bc5b6071512bec62474f626ba32db13e0422d64736f6c63430008190033",
        sourceMap: "119:1816:24:-:0;;;278:919;;;;;;;;;;;;;;;;;;:::i;:::-;1857:1:23;2061:7;:21;;;403:14:24;;-1:-1:-1;;;;;;403:14:24;-1:-1:-1;;;;;403:14:24;;;;;435:16;427:58;;;;-1:-1:-1;;;427:58:24;;1686:2:27;427:58:24;;;1668:21:27;1725:2;1705:18;;;1698:30;1764:31;1744:18;;;1737:59;1813:18;;427:58:24;;;;;;;;;496:22;536:11;:18;521:12;:33;;;;:::i;:::-;496:58;-1:-1:-1;587:8:24;624:3;599:21;496:58;619:1;599:21;:::i;:::-;598:29;;;;:::i;:::-;587:40;-1:-1:-1;647:17:24;667:23;587:40;667:17;:23;:::i;:::-;647:43;;735:12;722:9;:25;701:138;;;;-1:-1:-1;;;701:138:24;;2701:2:27;701:138:24;;;2683:21:27;2740:2;2720:18;;;2713:30;2779:34;2759:18;;;2752:62;2850:34;2830:18;;;2823:62;-1:-1:-1;;;2901:19:27;;;2894:33;2944:19;;701:138:24;2499:470:27;701:138:24;913:5;;905:35;;884:15;;-1:-1:-1;;;;;913:5:24;;932:3;;884:15;905:35;884:15;905:35;932:3;913:5;905:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;883:57;;;958:10;950:42;;;;-1:-1:-1;;;950:42:24;;3386:2:27;950:42:24;;;3368:21:27;3425:2;3405:18;;;3398:30;3464:21;3444:18;;;3437:49;3503:18;;950:42:24;3184:343:27;950:42:24;1008:6;1003:188;1024:11;:18;1020:1;:22;1003:188;;;1071:8;:24;1080:11;1092:1;1080:14;;;;;;;;:::i;:::-;;;;;;;1071:24;;;;;;;;;;;;1099:1;1071:29;1063:64;;;;-1:-1:-1;;;1063:64:24;;3866:2:27;1063:64:24;;;3848:21:27;3905:2;3885:18;;;3878:30;3944:24;3924:18;;;3917:52;3986:18;;1063:64:24;3664:346:27;1063:64:24;1168:12;1141:8;:24;1150:11;1162:1;1150:14;;;;;;;;:::i;:::-;;;;;;;;;;;;1141:24;;;;;;;;;;-1:-1:-1;1141:24:24;:39;1044:3;;1003:188;;;;393:804;;;;278:919;;;119:1816;;14:127:27;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:1333;259:6;267;275;328:2;316:9;307:7;303:23;299:32;296:52;;;344:1;341;334:12;296:52;370:16;;-1:-1:-1;;;;;415:31:27;;405:42;;395:70;;461:1;458;451:12;395:70;508:2;539:18;;;533:25;484:5;;-1:-1:-1;508:2:27;-1:-1:-1;;;;;607:14:27;;;604:34;;;634:1;631;624:12;604:34;672:6;661:9;657:22;647:32;;717:7;710:4;706:2;702:13;698:27;688:55;;739:1;736;729:12;688:55;768:2;762:9;790:2;786;783:10;780:36;;;796:18;;:::i;:::-;842:2;839:1;835:10;874:2;868:9;937:2;933:7;928:2;924;920:11;916:25;908:6;904:38;992:6;980:10;977:22;972:2;960:10;957:18;954:46;951:72;;;1003:18;;:::i;:::-;1039:2;1032:22;1089:18;;;1123:15;;;;-1:-1:-1;1165:11:27;;;1161:20;;;1193:19;;;1190:39;;;1225:1;1222;1215:12;1190:39;1249:11;;;;1269:135;1285:6;1280:3;1277:15;1269:135;;;1351:10;;1339:23;;1302:12;;;;1382;;;;1269:135;;;1423:6;1413:16;;;;;;;;1469:2;1458:9;1454:18;1448:25;1438:35;;146:1333;;;;;:::o;1842:127::-;1903:10;1898:3;1894:20;1891:1;1884:31;1934:4;1931:1;1924:15;1958:4;1955:1;1948:15;1974:168;2047:9;;;2078;;2095:15;;;2089:22;;2075:37;2065:71;;2116:18;;:::i;:::-;1974:168;;;;:::o;2147:217::-;2187:1;2213;2203:132;;2257:10;2252:3;2248:20;2245:1;2238:31;2292:4;2289:1;2282:15;2320:4;2317:1;2310:15;2203:132;-1:-1:-1;2349:9:27;;2147:217::o;2369:125::-;2434:9;;;2455:10;;;2452:36;;;2468:18;;:::i;3532:127::-;3593:10;3588:3;3584:20;3581:1;3574:31;3624:4;3621:1;3614:15;3648:4;3645:1;3638:15;3664:346;119:1816:24;;;;;;",
        linkReferences: {},
    },
    deployedBytecode: {
        object: "0x6080604052600436106100385760003560e01c806312ae36e8146100445780638da5cb5b14610066578063e4c96ac4146100a357600080fd5b3661003f57005b600080fd5b34801561005057600080fd5b5061006461005f3660046102d0565b6100de565b005b34801561007257600080fd5b50600154610086906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100af57600080fd5b506100d06100be366004610392565b60026020526000908152604090205481565b60405190815260200161009a565b6100e6610274565b6000826040516020016100f991906103ab565b60408051601f19818403018152918152815160209283012060008181526002909352912054909150806101735760405162461bcd60e51b815260206004820152601f60248201527f496e76616c6964206f7220616c7265616479207573656420766f75636865720060448201526064015b60405180910390fd5b804710156101c35760405162461bcd60e51b815260206004820152601e60248201527f436f6e747261637420696e73756666696369656e746c792066756e6465640000604482015260640161016a565b600082815260026020526040808220829055516001600160a01b0385169083908381818185875af1925050503d806000811461021b576040519150601f19603f3d011682016040523d82523d6000602084013e610220565b606091505b50509050806102635760405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b604482015260640161016a565b5050506102706001600055565b5050565b60026000540361029757604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b634e487b7160e01b600052604160045260246000fd5b80356001600160a01b03811681146102cb57600080fd5b919050565b600080604083850312156102e357600080fd5b823567ffffffffffffffff808211156102fb57600080fd5b818501915085601f83011261030f57600080fd5b8135818111156103215761032161029e565b604051601f8201601f19908116603f011681019083821181831017156103495761034961029e565b8160405282815288602084870101111561036257600080fd5b826020860160208301376000602084830101528096505050505050610389602084016102b4565b90509250929050565b6000602082840312156103a457600080fd5b5035919050565b6000825160005b818110156103cc57602081860181015185830152016103b2565b50600092019182525091905056fea2646970667358221220a35fbc5bd0035f6586e6cbf3921bc5b6071512bec62474f626ba32db13e0422d64736f6c63430008190033",
        sourceMap: "119:1816:24:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1363:535;;;;;;;;;;-1:-1:-1;1363:535:24;;;;;:::i;:::-;;:::i;:::-;;161:20;;;;;;;;;;-1:-1:-1;161:20:24;;;;-1:-1:-1;;;;;161:20:24;;;;;;-1:-1:-1;;;;;1499:32:27;;;1481:51;;1469:2;1454:18;161:20:24;;;;;;;;187:40;;;;;;;;;;-1:-1:-1;187:40:24;;;;;:::i;:::-;;;;;;;;;;;;;;;;;1874:25:27;;;1862:2;1847:18;187:40:24;1728:177:27;1363:535:24;2500:21:23;:19;:21::i;:::-;1471:16:24::1;1517:5;1500:23;;;;;;;;:::i;:::-;;::::0;;-1:-1:-1;;1500:23:24;;::::1;::::0;;;;;;1490:34;;1500:23:::1;1490:34:::0;;::::1;::::0;1534:11:::1;1548:18:::0;;;:8:::1;:18:::0;;;;;;1490:34;;-1:-1:-1;1584:10:24;1576:54:::1;;;::::0;-1:-1:-1;;;1576:54:24;;2531:2:27;1576:54:24::1;::::0;::::1;2513:21:27::0;2570:2;2550:18;;;2543:30;2609:33;2589:18;;;2582:61;2660:18;;1576:54:24::1;;;;;;;;;1686:6;1661:21;:31;;1640:108;;;::::0;-1:-1:-1;;;1640:108:24;;2891:2:27;1640:108:24::1;::::0;::::1;2873:21:27::0;2930:2;2910:18;;;2903:30;2969:32;2949:18;;;2942:60;3019:18;;1640:108:24::1;2689:354:27::0;1640:108:24::1;1780:1;1759:18:::0;;;:8:::1;:18;::::0;;;;;:22;;;1810:36;-1:-1:-1;;;;;1810:17:24;::::1;::::0;1835:6;;1780:1;1810:36;1780:1;1810:36;1835:6;1810:17;:36:::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1791:55;;;1864:7;1856:35;;;::::0;-1:-1:-1;;;1856:35:24;;3460:2:27;1856:35:24::1;::::0;::::1;3442:21:27::0;3499:2;3479:18;;;3472:30;-1:-1:-1;;;3518:18:27;;;3511:45;3573:18;;1856:35:24::1;3258:339:27::0;1856:35:24::1;1461:437;;;2542:20:23::0;1857:1;3068:7;:21;2888:208;2542:20;1363:535:24;;:::o;2575:307:23:-;1899:1;2702:7;;:18;2698:86;;2743:30;;-1:-1:-1;;;2743:30:23;;;;;;;;;;;2698:86;1899:1;2858:7;:17;2575:307::o;14:127:27:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:173;214:20;;-1:-1:-1;;;;;263:31:27;;253:42;;243:70;;309:1;306;299:12;243:70;146:173;;;:::o;324:1006::-;402:6;410;463:2;451:9;442:7;438:23;434:32;431:52;;;479:1;476;469:12;431:52;519:9;506:23;548:18;589:2;581:6;578:14;575:34;;;605:1;602;595:12;575:34;643:6;632:9;628:22;618:32;;688:7;681:4;677:2;673:13;669:27;659:55;;710:1;707;700:12;659:55;746:2;733:16;768:2;764;761:10;758:36;;;774:18;;:::i;:::-;849:2;843:9;817:2;903:13;;-1:-1:-1;;899:22:27;;;923:2;895:31;891:40;879:53;;;947:18;;;967:22;;;944:46;941:72;;;993:18;;:::i;:::-;1033:10;1029:2;1022:22;1068:2;1060:6;1053:18;1110:7;1103:4;1098:2;1094;1090:11;1086:22;1083:35;1080:55;;;1131:1;1128;1121:12;1080:55;1191:2;1184:4;1180:2;1176:13;1169:4;1161:6;1157:17;1144:50;1238:1;1231:4;1226:2;1218:6;1214:15;1210:26;1203:37;1259:6;1249:16;;;;;;;1284:40;1318:4;1307:9;1303:20;1284:40;:::i;:::-;1274:50;;324:1006;;;;;:::o;1543:180::-;1602:6;1655:2;1643:9;1634:7;1630:23;1626:32;1623:52;;;1671:1;1668;1661:12;1623:52;-1:-1:-1;1694:23:27;;1543:180;-1:-1:-1;1543:180:27:o;1910:414::-;2041:3;2079:6;2073:13;2104:1;2114:129;2128:6;2125:1;2122:13;2114:129;;;2226:4;2210:14;;;2206:25;;2200:32;2187:11;;;2180:53;2143:12;2114:129;;;-1:-1:-1;2298:1:27;2262:16;;2287:13;;;-1:-1:-1;2262:16:27;1910:414;-1:-1:-1;1910:414:27:o",
        linkReferences: {},
    },
    methodIdentifiers: {
        "claimVoucher(string,address)": "12ae36e8",
        "owner()": "8da5cb5b",
        "vouchers(bytes32)": "e4c96ac4",
    },
    rawMetadata: '{"compiler":{"version":"0.8.25+commit.b61c2a91"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"bytes32[]","name":"_codeHashes","type":"bytes32[]"},{"internalType":"uint256","name":"_etherAmount","type":"uint256"}],"stateMutability":"payable","type":"constructor"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"inputs":[{"internalType":"string","name":"_code","type":"string"},{"internalType":"address","name":"_to","type":"address"}],"name":"claimVoucher","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"vouchers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}],"devdoc":{"errors":{"ReentrancyGuardReentrantCall()":[{"details":"Unauthorized reentrant call."}]},"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"src/Voucher.sol":"Voucher"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",":ds-test/=lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/"]},"sources":{"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol":{"keccak256":"0x84496688b0b80f8e592f0db8ef82c3e7172a1658169b8f0832b522e935e216c0","license":"MIT","urls":["bzz-raw://c98e6288d465afdbe084108995c6a8f19db173d6f068b92ef1f70f7edf6ffb3a","dweb:/ipfs/QmShqKgJLqoRK2vv4sFU3iouqFGvWUbvGopbZS8Qn9Bp1X"]},"src/Voucher.sol":{"keccak256":"0xe6acaa1f87cf297542685493979f843a0374be06cb19685c79351fa7e80683d9","license":"MIT","urls":["bzz-raw://e1d55742ed8ba1c9946db4956854f5657fe3bc1545aaf3ea8c2fd71c372c103a","dweb:/ipfs/QmTFLDt4D8zZrGNHEX3QunyQDtGXCRjjQWgDFqkV2gqeiZ"]}},"version":1}',
    metadata: {
        compiler: { version: "0.8.25+commit.b61c2a91" },
        language: "Solidity",
        output: {
            abi: [
                {
                    inputs: [
                        { internalType: "address", name: "_owner", type: "address" },
                        {
                            internalType: "bytes32[]",
                            name: "_codeHashes",
                            type: "bytes32[]",
                        },
                        { internalType: "uint256", name: "_etherAmount", type: "uint256" },
                    ],
                    stateMutability: "payable",
                    type: "constructor",
                },
                { inputs: [], type: "error", name: "ReentrancyGuardReentrantCall" },
                {
                    inputs: [
                        { internalType: "string", name: "_code", type: "string" },
                        { internalType: "address", name: "_to", type: "address" },
                    ],
                    stateMutability: "nonpayable",
                    type: "function",
                    name: "claimVoucher",
                },
                {
                    inputs: [],
                    stateMutability: "view",
                    type: "function",
                    name: "owner",
                    outputs: [{ internalType: "address", name: "", type: "address" }],
                },
                {
                    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
                    stateMutability: "view",
                    type: "function",
                    name: "vouchers",
                    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                },
                { inputs: [], stateMutability: "payable", type: "receive" },
            ],
            devdoc: { kind: "dev", methods: {}, version: 1 },
            userdoc: { kind: "user", methods: {}, version: 1 },
        },
        settings: {
            remappings: [
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
                "ds-test/=lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/",
                "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
                "forge-std/=lib/forge-std/src/",
                "halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/",
                "openzeppelin-contracts/=lib/openzeppelin-contracts/",
            ],
            optimizer: { enabled: true, runs: 200 },
            metadata: { bytecodeHash: "ipfs" },
            compilationTarget: { "src/Voucher.sol": "Voucher" },
            evmVersion: "paris",
            libraries: {},
        },
        sources: {
            "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
                keccak256: "0x84496688b0b80f8e592f0db8ef82c3e7172a1658169b8f0832b522e935e216c0",
                urls: [
                    "bzz-raw://c98e6288d465afdbe084108995c6a8f19db173d6f068b92ef1f70f7edf6ffb3a",
                    "dweb:/ipfs/QmShqKgJLqoRK2vv4sFU3iouqFGvWUbvGopbZS8Qn9Bp1X",
                ],
                license: "MIT",
            },
            "src/Voucher.sol": {
                keccak256: "0xe6acaa1f87cf297542685493979f843a0374be06cb19685c79351fa7e80683d9",
                urls: [
                    "bzz-raw://e1d55742ed8ba1c9946db4956854f5657fe3bc1545aaf3ea8c2fd71c372c103a",
                    "dweb:/ipfs/QmTFLDt4D8zZrGNHEX3QunyQDtGXCRjjQWgDFqkV2gqeiZ",
                ],
                license: "MIT",
            },
        },
        version: 1,
    },
    id: 24,
};