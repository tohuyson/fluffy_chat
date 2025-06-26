'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_283.part.js": "59d82ca543956f5ae8c450d581c5644c",
"main.dart.js_293.part.js": "93364120d95b3a1b4749bb930bafb06d",
"flutter_bootstrap.js": "062cff4a504e2bc02868f85cfe10632e",
"main.dart.js_277.part.js": "547726f5d80704bbde62bc8ee7a30c27",
"main.dart.js_205.part.js": "a78da8e43f11dcb441c3db17d371a3f1",
"version.json": "82d9ef62d5152ebfe6925ecf47aa688f",
"main.dart.js_241.part.js": "4656c4529bb2ac62cdd8e2b1517a07ed",
"splash/img/light-2x.png": "9371a9e18df59f2bbe9b32e04c3fc5d4",
"splash/img/dark-4x.png": "e0346148103c17a87682a35525499afe",
"splash/img/light-3x.png": "da261be18bbda768fa1462fd8a8cef46",
"splash/img/dark-3x.png": "da261be18bbda768fa1462fd8a8cef46",
"splash/img/light-4x.png": "e0346148103c17a87682a35525499afe",
"splash/img/dark-2x.png": "9371a9e18df59f2bbe9b32e04c3fc5d4",
"splash/img/dark-1x.png": "db5b72b7f4b38640c974f20d9c90f464",
"splash/img/light-1x.png": "db5b72b7f4b38640c974f20d9c90f464",
"splash/style.css": "740c493f9c5dfc859ca07663691b24fb",
"main.dart.js_232.part.js": "e499532767342f3d798bec0f4196a952",
"main.dart.js_222.part.js": "45fd859ed495c78586b2f33beafa4e90",
"index.html": "b9b7e8297faa692990e1d94dcbee82aa",
"/": "b9b7e8297faa692990e1d94dcbee82aa",
"main.dart.js_250.part.js": "3722f22f3a8443af20d042995e17f7cc",
"main.dart.js_249.part.js": "9ea285b33bb53fdbeffecf5caf0e9d8a",
"main.dart.js_292.part.js": "3201b5a00153dd92ad7f43473e716c11",
"main.dart.js_282.part.js": "22a6a61576d9a3062b8437a026ddcaca",
"main.dart.js_276.part.js": "9cfab6df18998cece622ec208e64c602",
"auth.html": "88530dca48290678d3ce28a34fc66cbd",
"main.dart.js_214.part.js": "9361b7b83259762b356e333c0aaaee13",
"main.dart.js_204.part.js": "eebddfa4c5540414e743f41d7b841e3d",
"main.dart.js_220.part.js": "039b3032aa282bc308d3d1d5b5418038",
"main.dart.js_230.part.js": "cd34b72f667cc474e6ed4e0637efd349",
"main.dart.js_299.part.js": "ff8acb5a36e98a336a13b590653ca51b",
"main.dart.js_289.part.js": "b3b0372d2e644e3aa0b85187334cf875",
"main.dart.js": "a0a6836f66290f2208458bb0cd1cd184",
"main.dart.js_239.part.js": "e2306a561ccfc4c3220f474e0b9b3279",
"main.dart.js_290.part.js": "1bff9ad67a9353464d3ee7aad5a31ffc",
"main.dart.js_274.part.js": "d626da2c9c8d339da0108deac0e36e04",
"main.dart.js_281.part.js": "9fbbe33400872ebfc72601c38d67c554",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_275.part.js": "fac1c027ffa0ac29f7325981a1169ba2",
"main.dart.js_265.part.js": "59ef1be7f001de502dfe083115485582",
"main.dart.js_243.part.js": "97bd42c2d099a40a3d189860de74913b",
"main.dart.js_288.part.js": "c1395281817d3d78f71c035414a129ea",
"main.dart.js_298.part.js": "006a62f79f5c769a20c78837206352f0",
"main.dart.js_231.part.js": "27ed433b04f45777ca7a050d084843d5",
"fluffy_chat/README.md": "8ab017f77cf56f40a1d427fcd8c15170",
"fluffy_chat/.git/config": "be8b731e3b928af1a957950d067829da",
"fluffy_chat/.git/objects/pack/pack-5023be93eab77a63378527928106dfead214ae27.pack": "0ece62842ca50d4cab5eced1d54bf239",
"fluffy_chat/.git/objects/pack/pack-5023be93eab77a63378527928106dfead214ae27.idx": "a217bc49e8725394817398064999fcb8",
"fluffy_chat/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"fluffy_chat/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"fluffy_chat/.git/logs/HEAD": "138aa10ef1e6537e2ae26d68d6599a97",
"fluffy_chat/.git/logs/refs/heads/main": "138aa10ef1e6537e2ae26d68d6599a97",
"fluffy_chat/.git/logs/refs/remotes/origin/HEAD": "138aa10ef1e6537e2ae26d68d6599a97",
"fluffy_chat/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"fluffy_chat/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"fluffy_chat/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"fluffy_chat/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"fluffy_chat/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"fluffy_chat/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"fluffy_chat/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"fluffy_chat/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"fluffy_chat/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"fluffy_chat/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"fluffy_chat/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"fluffy_chat/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"fluffy_chat/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"fluffy_chat/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"fluffy_chat/.git/refs/heads/main": "5adfb7cf0403b6ea9afa702617287af8",
"fluffy_chat/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"fluffy_chat/.git/index": "f65b9b52f915ef325db0eac9e09d1130",
"fluffy_chat/.git/packed-refs": "f505c6c195780bbab4e1de2e0e06c3fa",
"main.dart.js_279.part.js": "4e6cdc0312ecc30fd131289ab80ac7bc",
"README.md": "8ab017f77cf56f40a1d427fcd8c15170",
"main.dart.js_246.part.js": "4b549fb1937aaec8b86a349043ffe328",
"main.dart.js_256.part.js": "cdbcb07ed72e43ee96e40e4717e17ab5",
"main.dart.js_234.part.js": "76a9df2e86f6eae27f096c4cccf09312",
"favicon.png": "a409751f0ecf6dee76fb350d7402f9be",
"main.dart.js_270.part.js": "fa08fed9b96fad984f97cd8a3fee863b",
"main.dart.js_284.part.js": "f39ad2b2a6443e42626e1ecf542a9ce7",
"main.dart.js_294.part.js": "7a4a9aff093c35b8df6a0be297c5c8f8",
"main.dart.js_190.part.js": "2ef52348b3258f017a6f4fa7cb5374bb",
"main.dart.js_203.part.js": "2741b4913743a6463a2dde180492bf89",
"main.dart.js_295.part.js": "723f555a0c9da4435e4608bddb75db04",
"icons/Icon-192.png": "97f7226b0a52c22cfe1557cecce6763e",
"icons/Icon-512.png": "391892c6f6720429a9d4f93ec1ce5f4e",
"manifest.json": "cc4b6aa791018840b65fd0b0e325b201",
"main.dart.js_278.part.js": "22cb5a840dea519ac0a3466d526b4da7",
"main.dart.js_1.part.js": "7d577e2af3c657f4e70cc4cc9995e4c7",
"main.dart.js_263.part.js": "ec7cf6275fedc11b9d376a0389222a80",
"main.dart.js_297.part.js": "9238b00b3d361e380fbc9ab730c32956",
".git/config": "44c2097ac637fea395cd519dbc20b305",
".git/objects/0d/1d2a74dff146ef80e56dd61c6411cd43c8d39c": "47bdf2055012b8f2a21cb96518f2312a",
".git/objects/92/4da4be7f1ee09afd0796acf33bf9ba707a8497": "350edc562f921e9e08db1c6a5f3c1de9",
".git/objects/0c/94c723c7b18ea99ab3b1ddfd6e77a8cd9fb789": "becc1cfc62295214cb634541d45248f3",
".git/objects/0c/808f5cb7ba10637080a49fbd2b3fce8e653f87": "d0df2a5dd840826e4fab37eb5b3904e7",
".git/objects/66/54d94e6d2e0218311a671c4935a0a0c6c1571c": "503c34260d9106acdc8d15a614cc90dd",
".git/objects/66/92d59a26509f213d4a929574b88246aa194bd2": "14c9d42b35217d6ca3c74432a98470da",
".git/objects/66/2c93c05d18be3a6c9cc90ed5dbf7dde751b022": "28d1802ad28afb1672f465700088a4ca",
".git/objects/57/07ecfca4cb79d1ebe7164282a8b8edabbfa2e4": "3bbbe6c8b66e98d93ad66cbd1f15e6e5",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/3b/7cc3fcf8291c7db453ca750574b127aa042675": "e4b04f2cde9f27bfe2020c66ea29ae9f",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/9b/5f74c2e3d3bfb52399695fd6d1a4bcf83fb967": "15baf1f3a9d61b11acc24e7802dd9a63",
".git/objects/9e/fc63925af1e75eb7f5ea83ba9021fa2dbaa40a": "b87e0c87140b7b1f9a42b4dc2f3b9ade",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/dc5a03a19105fd0454194eb32dfebad8797681": "37403ac1166d93400ca6aaa6195b778c",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/56/4886dd538cfce76c239f15a155eafd2bdcff03": "6645cf5fd99152df4bcf68cdd48ac65d",
".git/objects/56/43e3da8dc36333cf08391b9794f4af2d69261e": "4eb4837d2bf82e4c5d097236ed894b02",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0e/e6a4de2587980dcf82ad80d2a592437a75cff1": "2aaaa0d4cd77142805ec261561f08bff",
".git/objects/60/4d98d4cdf6ff881cf9003c1dc310c33c95b5fa": "ed5695152d423e8c7be7e345c95adf58",
".git/objects/60/03f5cf7a22c0c6916b11c6085505bd3d8f6f50": "f7e578cf26a3244d832276c58ca00b76",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/9c/9433c84ab7ae9d66677343624e4d5c2afc2c62": "54efb7fdccdebd7a80a37dddd862b671",
".git/objects/a3/a95164516eb7a5f52d8a3ce70cacc4ee0debd1": "5b0a1c6087241714d7240d031f3ec78f",
".git/objects/b2/e6a0eee9d9abc7b61cf266eb3163480b7dc634": "749768482e7b7dd82fde7824469731b6",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/bc4426129f835a18533968349dac815fc2aa6b": "92c6a8fd92534246dd6e61469a43f6ea",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/da/fa3b70704e58630f8eeceae91ad69bbb54ebe0": "1695a2d3eb777fcbd58d874cd1af1aaa",
".git/objects/a2/7a8cce791141676fa1fcb0e91f0005d2f99373": "d79473d77efe603d4a2a85f684c6d8ac",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/bd/868cb9cf4ca572f1521c4400438a18ae9f86c9": "8afaba056e9abcd1b06fb278a77d0876",
".git/objects/d6/64e4f24ee6cec18a0e071e6c2b8fa58ab7de25": "d8047bafa1c39a9d671b8fba3c232afd",
".git/objects/d8/5c8972811d81e79ee1cdd12028fa237b8245b0": "d3ae12eba1b057dcf435b8e73b21ff5a",
".git/objects/d8/27fa0759e1154428485f514b391e789e638faa": "c396766aaeb4e03cae6460a2ee88f94b",
".git/objects/d8/30f307c2aa1420cb306be6ceef3d0cbd8785cc": "e6bdcb27f1707699709cbd2e15f4f927",
".git/objects/e2/bca562a0ddbe6197664a0d894e769686146f92": "0c3a6db74567456be0ada60c59460d05",
".git/objects/f4/c0bdb922597c27f2e8d2eaccadf53aa8a8caff": "e3fcb1e17dbabbe5bec8c762a139041f",
".git/objects/f3/4a9263f02c9d2c3869ea8efef0c2d8a8c32adf": "da25498dc4daf81dabd063343938a423",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/c7/5c95e818d2a0fcd7e4c78d184366b4969d0550": "cd095e42c99a31a5986efbcabdcc88de",
".git/objects/ee/14973a501466eee568ad8da10206784cfb44d2": "3042bd8b97d2b6b7fa7ea7d796469e74",
".git/objects/c9/a1978bb35e99decf2166c3f710ca563c5268ec": "fe7d68abbf1b68a5247146f4ba90da5a",
".git/objects/fd/3c9cdfcdb8567d838dbf4ce28ae1ded3736a20": "0d1a9a99859ad9d7f9848c8ba0a7d67d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/cc195d501a502859bb33a37c1e5b79d6dbeb0e": "9d5121b81beca7f09ad5b12f6917dc32",
".git/objects/e4/38cc9115055715ad7aee1440f3288ab44edb9c": "5ad2bb80b5b8893e0e1d860528505cfa",
".git/objects/e4/f6c31cfd73ad207ff93d5e741e2e8a110325cd": "e4115d033bf93e0027b1610222d12d5e",
".git/objects/fe/ea320e72bef29f97de3188f5919fc5d221f683": "8bd26b80a4722c66b90c87c685ef26ce",
".git/objects/c6/fcb0f03e67d106a18fcebeebd76ae2cb737a67": "1a801e5079777f63884e0af66d5ba5aa",
".git/objects/20/18c1df00dddef15d3618df80642ea79dcbf57c": "5aa5b8b60f5d411e2babb6e14c8d8c04",
".git/objects/pack/pack-5023be93eab77a63378527928106dfead214ae27.pack": "0ece62842ca50d4cab5eced1d54bf239",
".git/objects/pack/pack-5023be93eab77a63378527928106dfead214ae27.idx": "a217bc49e8725394817398064999fcb8",
".git/objects/pack/pack-5023be93eab77a63378527928106dfead214ae27.rev": "84b720172f9772c56655632e98a86072",
".git/objects/7c/d286488e2bbff61698a82e2dc7878ac111d902": "f9859e93fe56e41cb644367e56fbe358",
".git/objects/16/1d2f82ba6b06db72ce2f8620e8fd1be1320c03": "5ac8cfa10f68e47ae71df1845981e890",
".git/objects/89/71ecff058e8cec2994331290829433acd855ca": "b06c9899d7724d8d8d8126d6beec326a",
".git/objects/89/55cffc6f8776fe7844c48228201e2d0b2bb939": "d0f9fdd86e3c02c46c7dc20a2f505e27",
".git/objects/89/5dab728e215b4e7e478be2e8850fbd13178aac": "911d5563c3222a95ee58acbf71dcc4a6",
".git/objects/45/27d1f3e1698360d93394470781ee0e661d95e6": "6a8f09530fef0e970f8e07655f134f30",
".git/objects/1f/7ed489ba60d320a621d5e05227283c7dfb0977": "7e49e27f6375977da86e12c4671de953",
".git/objects/1f/283fb35f0d499be5dee57704e3e46ccf6e1bd4": "70bc636b4ae502d731f200e0cf2a2502",
".git/objects/80/6485b73a8f2ab006adfc4f1a5922f6b0bf2e90": "5eed81346a6072403493785808f5fc19",
".git/objects/28/4b604d3e994c731f5370256ee88050cfbcaa18": "d817822e8e0a0bc87c629a57b7ba0fd2",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/7e/576c6f49a1ce07e54a3132f5f91a88e027a023": "a45adea8fa2709649d09cc6031020e09",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/21/65bb5ff5ffa6eabd0ee5b8777f7fac2ca86297": "517a5c008995112a3061694e06aa25ef",
".git/objects/4d/61686fd5aa1c0c4139b1276b0cd2980652d92b": "ca466c9675cb876c187b5b60a7864d3d",
".git/objects/4d/30c4722f6e4f5efd0bf709bd995dd46bddaec3": "0f91f533fdf18ee762206d096e08c140",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/44/6891797f709c3cb0c2b9d8c6177a63375dde30": "2181bbf924b4aa8060621022ccc16d76",
".git/objects/2a/90f2162fcb1b7e3849ea306a87cbbf0228b236": "b7025e08b3fd87bd4b715e62ebd4f8b7",
".git/objects/2f/62a5b82a20dce970d3ebbeac5aca9cb60f9f40": "0124cd200dc463e1db00dd38313f7654",
".git/objects/9f/f3dfa508f2658ea4f376184810cd88a32b659e": "08724a29c8a500acc8b4d6bcca0648bf",
".git/objects/00/8abf3159994a6f95e91c82a28058cbaaaadb7b": "c1d2d682e460586911195007a668f206",
".git/objects/00/63f09a31af779e667bb00618c5e68168f38101": "da8eac3cc70e2918a75aac543035cedb",
".git/objects/6e/382c84428982224aea501f3980883911c47bb7": "fa7a62cae9959a90701f4a9f6cc84c5e",
".git/objects/6e/6dbb6d55723d8da2fd91fb2d892dda535bd0eb": "b93d3b21fab4f7c42e34cdf97fea6887",
".git/objects/6e/e70177b1b1a6999cd3721a617891232867821b": "506f71f20ea7eb1cca1e4a9fb5d2e8fa",
".git/objects/6e/3b3c51f43f8c3e33c3baca539406cc7e1b0ab9": "10db0fa98d68cd1e48d64273d754d5e3",
".git/objects/36/85f5d518af838bc560280743e55d5f7cd3abb4": "7c24a9eb9de09369b04e9256dc8d8d38",
".git/objects/5c/0b0839143c4b86880352afce39ef305d0aeabb": "2fa2c130f91e25334329e2aa45c35425",
".git/objects/91/76e700a7a85c7cd1d02dbde9e6e20e145a685b": "f80049d63929f80f3e4dc9b7ae8c8d72",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/62/deb8a84a8a527fdc18ae1f843b36f70cf2c849": "bf3fc3210222325f3b78c5c2f040aa61",
".git/objects/06/c64b63d07fa8238198209dd9620b784546fb4e": "d299429efdea187fab9087679a2bb998",
".git/objects/39/0f2bf8efe683d1b44c0b5d87f433d9b498b9dd": "34d3745ef0e0ae209a5e323811d9ff79",
".git/objects/97/526cd757c9f929fd23dce12bad5fdd953f1063": "2cfe80e9f36425fb01db9cc005ba63f5",
".git/objects/63/b5d4d375510a8caf712232ff588681face281c": "9a6c461186390217b3cff0e80e9065ac",
".git/objects/63/d7a92ae0c9c71471f789eedb2de639cd2db829": "5c3573543a471e8989d7b79675023e7e",
".git/objects/0f/cc7b285a8bac8b35c4613e234e5c8acfebbec8": "c7b9e893468877e38f869831e076adb4",
".git/objects/90/952fc8c23a4f86e9eea1f81e3be41607d12efc": "c3dafdeb02052aed56273c322debc4bf",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/14179e8320d7b399ba1f6c4d60a464a400ab6f": "939051806ef725d4a4dd59bee88a28a1",
".git/objects/dd/9b9549caa144d8ec623889d92feca348331821": "6906d72cee5cd7d2dfcb27684c108263",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/b6/27f52801ffb9f2d7ebde438c873a738424907d": "619c5d8b9b748505c091e73214836a76",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/d5/5415b1999ff9c675d4df3610b09c28d5664dee": "f62245f27b10b35163dcf19821706892",
".git/objects/b7/e00f4d5a738a569f3bfe0928db04cc168ca036": "6d2b590cd2146779115eeb3f84f962e5",
".git/objects/db/b3cc60226b8c1009f34dd6d0533e1e23f98651": "15af9524d664e39a6f548412b724c2e3",
".git/objects/a8/660a402ed1a65ae18def5589cd8f0bddcbe1e8": "4285176bc2798318889961010eca1bdc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/738468f63ae00a2d31aadef464257ff8d955a5": "a57717408a620ddc26a383bcc7b1c45b",
".git/objects/ea/2d9620b6d4c2c00640b79a709c4b8d8de33964": "544e7c6c9cd1a07fca1bb34bb73c7af1",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/e6/db9826d2c9cf17af00315bf595874991bcb92f": "d7532fbbe93c1f5b8e30c088a79684d0",
".git/objects/f0/eb702cfd934f5be1043bc4d45bdbbe3d893c0d": "669d50df0b3072865c1d5b569f630bc5",
".git/objects/f0/6a00e6a6f00ae4aa72e0fb54e31d4fc8132926": "e710fb8b7831e8f62219c8591bb5a76f",
".git/objects/e8/1252ef4594feb9d5beb9621e23338c47828cf4": "313cd715f7569bcdc525b710fd9a7d42",
".git/objects/f6/d6945988b3cf5a8b3986661989c1eb9aa63735": "5bc8d5f20054cac7b14ff2c2b345ded1",
".git/objects/f6/52f244accfa1435bdb386c608d4300ba34fd06": "3a1d7712bb44ca79f4e3c7a9d3c08aea",
".git/objects/f1/179305403f914fffd8af8aa292fba626e31406": "a1bc8253219bd4bc80a091c7d2dc5af8",
".git/objects/cb/4bf148b4ce6ef33331f440378e632a858bb350": "9d7d6fc789a60c59a11407e2d309bb4e",
".git/objects/ce/b42f09b54ca14586758414e7d814ec0d0621eb": "4b319521a16e1fbe32dad36922ea0e4f",
".git/objects/e0/54de15d0307a2b9faa42eb2af30f8a760d4cd4": "33d092a18444e1327a648c10d822931d",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e0/62b83e7bad6714d9e4363358d2874c61c4b784": "e546b796294824ccf137a25c870d4db4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/77/9c5722364398d92fb7efed444abda305581e5d": "b541dad6de102d5c579421fc74fe83b3",
".git/objects/84/097ef4af990dfe5c7a0e897eadf3030c4135c0": "587241e035d0396dafe1bb1c58ecf5a8",
".git/objects/84/affe401b4a08dc90bb184e2e449b412bf725f1": "369251c6aa9d79ef43a9abdc81552958",
".git/objects/4a/655e93a025431e9323537dc3f62e5f6337df8b": "b39acbed94dd4eb7f0d861fa9eaf9db7",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/15/993aebe3983c73beb15085f8500d0d439174c1": "3716be4c823c47151edddda799badcd5",
".git/objects/12/d0791a56f95cfec970e8b6a5e141e67c8cb9ac": "8f7402cb9f67537e74b74a5e355f80e0",
".git/objects/71/b7be551336e5f74e3aa7655c1e7a2a6cd887d3": "2a3a06ac687463f0ca603d68791b4ec9",
".git/objects/82/030dd1e48feeaaaa74b04f63c35d5c3bfa3921": "98bd09b348743e41086edb2e8e08241f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/7a/46e62c34bea2fa86db5e44a10756f7c581524c": "49551c78f9e63eed102de3c406efacf0",
".git/objects/14/e1e39a6688805f86b5ea1f9d8d13e20dc7aa05": "748914368f3ff1e38d95c9f837716af0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/HEAD": "ed3c33cb94e004265f05896bc7403776",
".git/logs/refs/heads/main": "ed3c33cb94e004265f05896bc7403776",
".git/logs/refs/remotes/origin/HEAD": "eb72ecb98643b561af7702fa095a1577",
".git/logs/refs/remotes/origin/main": "31565100a5d08976236457dfe5f5b213",
".git/refs/heads/main": "a6e523e95ffa16fbc45e8e94e031264b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a6e523e95ffa16fbc45e8e94e031264b",
".git/index": "b46bcb43cf0b19cdefa7d9427ee6bcfa",
".git/packed-refs": "f505c6c195780bbab4e1de2e0e06c3fa",
".git/COMMIT_EDITMSG": "435822a1062c6fcccf36c09967c31976",
".git/FETCH_HEAD": "006fe73896ad1692b674bf6281a46ef5",
".git/sourcetreeconfig": "4c634a8c6261254b688329d31e98bbc1",
"main.dart.js_245.part.js": "b23b9d09aaadc28f78e7fb7c8ac86ca9",
"main.dart.js_16.part.js": "a2d063ab07210522c46c695f5797c02b",
"main.dart.js_255.part.js": "404301f700098b2c16a58b6b64ba9b6e",
"assets/AssetManifest.json": "b500fe8bd244396f3e4e307790b3adc7",
"assets/NOTICES": "5941472ba25d82e5b67324f5a15344c0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0dcfc18eecbd439a18e85b990a04b1c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5c124396503231de315ac975bb8653d8",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/handy_window/assets/handy-window-dark.css": "45fb3160206a5f74c0a9f1763c00c372",
"assets/packages/handy_window/assets/handy-window.css": "0434ee701235cf1c72458fd4ce022a64",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "601267118f96709e8431398bdac08a73",
"assets/fonts/MaterialIcons-Regular.otf": "ec4701eae3a98b81d0e83dedc090f26c",
"assets/assets/logo_transparent.png": "f00cda39300c9885a7c9ae52a65babbf",
"assets/assets/sas-emoji.json": "b9d99fc6dda6a3250af57af969b4a02d",
"assets/assets/banner.png": "4a005db27a8787aea061537223dabb7d",
"assets/assets/vodozemac/vodozemac_bindings_dart.js": "21e0477223d4076eca23fe0ab07b9158",
"assets/assets/vodozemac/vodozemac_bindings_dart_bg.wasm": "6cf8b07f024a4db10d9287955e478947",
"assets/assets/info-logo.png": "9d1d72596564e6639fd984fea2dfd048",
"assets/assets/banner_transparent.png": "364e2030f739bf0c7ed1c061c4cb5901",
"assets/assets/sounds/notification.ogg": "d928d619828e6dbccf6e9e40f1c99d83",
"assets/assets/sounds/phone.ogg": "5c8fb947eb92ca55229cb6bbf533c40f",
"assets/assets/sounds/call.ogg": "7e8c646f83fba83bfb9084dc1bfec31e",
"assets/assets/favicon.png": "3ea6cdc2aeab08defd0659bad734a69b",
"assets/assets/logo.png": "d329be9cd7af685717f68e03561f96c0",
"assets/assets/logo.svg": "d042b70cf11a41f2764028e85b07a00a",
"main.dart.js_2.part.js": "5fa5b5c2b69898d78a1a10302df742e0",
"main.dart.js_254.part.js": "d3a41f9aa68470e50bb2d1c1380546b3",
"main.dart.js_244.part.js": "8a770a1831ef0f053f32e9124077bcbb",
"main.dart.js_272.part.js": "e5c898c855611d988c7062edbe5b09e1",
"main.dart.js_262.part.js": "aba56e39d446026de05509dc45bf43db",
"main.dart.js_192.part.js": "29ec7b685b2b25e2e32dd2fecfec3a8c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"main.dart.js_296.part.js": "4bfb01ea25d0c820027750b0f6289250"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
