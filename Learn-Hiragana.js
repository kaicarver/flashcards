// from https://skritter.com/vocablists/view/5859349090140160
// massaged a bit and converted from CSV to JSON via http://www.convertcsv.com/csv-to-json.htm
var words = [
 {
   "lesson": 1,
   "char": "こ",
   "pinyin": "ko",
   "english": ""
 },
 {
   "lesson": 1,
   "char": "に",
   "pinyin": "ni",
   "english": ""
 },
 {
   "lesson": 1,
   "char": "ち",
   "pinyin": "chi",
   "english": ""
 },
 {
   "lesson": 1,
   "char": "は",
   "pinyin": "ha",
   "english": ""
 },
 {
   "lesson": 1,
   "char": "こんにちは",
   "pinyin": "",
   "english": "Hello; Good afternoon"
 },
 {
   "lesson": 2,
   "char": "あ",
   "pinyin": "a",
   "english": ""
 },
 {
   "lesson": 2,
   "char": "い",
   "pinyin": "i",
   "english": ""
 },
 {
   "lesson": 2,
   "char": "う",
   "pinyin": "u",
   "english": ""
 },
 {
   "lesson": 2,
   "char": "え",
   "pinyin": "e",
   "english": ""
 },
 {
   "lesson": 2,
   "char": "お",
   "pinyin": "o",
   "english": ""
 },
 {
   "lesson": 2,
   "char": "あう",
   "pinyin": "",
   "english": "to meet"
 },
 {
   "lesson": 2,
   "char": "うえ",
   "pinyin": "",
   "english": "up; above"
 },
 {
   "lesson": 3,
   "char": "さ",
   "pinyin": "sa",
   "english": ""
 },
 {
   "lesson": 3,
   "char": "し",
   "pinyin": "shi",
   "english": ""
 },
 {
   "lesson": 3,
   "char": "す",
   "pinyin": "su",
   "english": ""
 },
 {
   "lesson": 3,
   "char": "せ",
   "pinyin": "se",
   "english": ""
 },
 {
   "lesson": 3,
   "char": "そ",
   "pinyin": "so",
   "english": ""
 },
 {
   "lesson": 3,
   "char": "すし",
   "pinyin": "",
   "english": "sushi"
 },
 {
   "lesson": 4,
   "char": "か",
   "pinyin": "ka",
   "english": ""
 },
 {
   "lesson": 4,
   "char": "き",
   "pinyin": "ki",
   "english": ""
 },
 {
   "lesson": 4,
   "char": "く",
   "pinyin": "ku",
   "english": ""
 },
 {
   "lesson": 4,
   "char": "け",
   "pinyin": "ke",
   "english": ""
 },
 {
   "lesson": 4,
   "char": "こ",
   "pinyin": "ko",
   "english": ""
 },
 {
   "lesson": 4,
   "char": "ここ",
   "pinyin": "",
   "english": "here"
 },
 {
   "lesson": 4,
   "char": "そこ",
   "pinyin": "",
   "english": "there"
 },
 {
   "lesson": 4,
   "char": "さけ",
   "pinyin": "",
   "english": "sake (Japanese rice wine)"
 },
 {
   "lesson": 5,
   "char": "た",
   "pinyin": "ta",
   "english": ""
 },
 {
   "lesson": 5,
   "char": "ち",
   "pinyin": "chi",
   "english": ""
 },
 {
   "lesson": 5,
   "char": "つ",
   "pinyin": "tsu",
   "english": ""
 },
 {
   "lesson": 5,
   "char": "っ",
   "pinyin": "",
   "english": "small tsu [a pause]"
 },
 {
   "lesson": 5,
   "char": "て",
   "pinyin": "te",
   "english": ""
 },
 {
   "lesson": 5,
   "char": "と",
   "pinyin": "to",
   "english": ""
 },
 {
   "lesson": 5,
   "char": "～たち",
   "pinyin": "",
   "english": "pluralizing suffix"
 },
 {
   "lesson": 5,
   "char": "きって",
   "pinyin": "",
   "english": "stamp"
 },
 {
   "lesson": 6,
   "char": "な",
   "pinyin": "na",
   "english": ""
 },
 {
   "lesson": 6,
   "char": "に",
   "pinyin": "ni",
   "english": ""
 },
 {
   "lesson": 6,
   "char": "ぬ",
   "pinyin": "nu",
   "english": ""
 },
 {
   "lesson": 6,
   "char": "ね",
   "pinyin": "ne",
   "english": ""
 },
 {
   "lesson": 6,
   "char": "の",
   "pinyin": "no",
   "english": ""
 },
 {
   "lesson": 6,
   "char": "なに",
   "pinyin": "",
   "english": "what"
 },
 {
   "lesson": 6,
   "char": "ぬの",
   "pinyin": "",
   "english": "cloth"
 },
 {
   "lesson": 7,
   "char": "ら",
   "pinyin": "ra",
   "english": ""
 },
 {
   "lesson": 7,
   "char": "り",
   "pinyin": "ri",
   "english": ""
 },
 {
   "lesson": 7,
   "char": "る",
   "pinyin": "ru",
   "english": ""
 },
 {
   "lesson": 7,
   "char": "れ",
   "pinyin": "re",
   "english": ""
 },
 {
   "lesson": 7,
   "char": "ろ",
   "pinyin": "ro",
   "english": ""
 },
 {
   "lesson": 7,
   "char": "～られる",
   "pinyin": "",
   "english": "potential (form); honorific ending"
 },
 {
   "lesson": 8,
   "char": "は",
   "pinyin": "ha",
   "english": ""
 },
 {
   "lesson": 8,
   "char": "ひ",
   "pinyin": "hi",
   "english": ""
 },
 {
   "lesson": 8,
   "char": "ふ",
   "pinyin": "fu",
   "english": ""
 },
 {
   "lesson": 8,
   "char": "へ",
   "pinyin": "he",
   "english": ""
 },
 {
   "lesson": 8,
   "char": "ほ",
   "pinyin": "ho",
   "english": ""
 },
 {
   "lesson": 8,
   "char": "ひふ",
   "pinyin": "",
   "english": "skin"
 },
 {
   "lesson": 9,
   "char": "ま",
   "pinyin": "ma",
   "english": ""
 },
 {
   "lesson": 9,
   "char": "み",
   "pinyin": "mi",
   "english": ""
 },
 {
   "lesson": 9,
   "char": "む",
   "pinyin": "mu",
   "english": ""
 },
 {
   "lesson": 9,
   "char": "め",
   "pinyin": "me",
   "english": ""
 },
 {
   "lesson": 9,
   "char": "も",
   "pinyin": "mo",
   "english": ""
 },
 {
   "lesson": 9,
   "char": "まめ",
   "pinyin": "",
   "english": "bean; pea"
 },
 {
   "lesson": 10,
   "char": "わ",
   "pinyin": "wa",
   "english": ""
 },
 {
   "lesson": 10,
   "char": "を",
   "pinyin": "wo",
   "english": ""
 },
 {
   "lesson": 10,
   "char": "や",
   "pinyin": "ya",
   "english": ""
 },
 {
   "lesson": 10,
   "char": "ゆ",
   "pinyin": "yu",
   "english": ""
 },
 {
   "lesson": 10,
   "char": "よ",
   "pinyin": "yo",
   "english": ""
 },
 {
   "lesson": 10,
   "char": "ん",
   "pinyin": "n",
   "english": ""
 },
 {
   "lesson": 10,
   "char": "わんわん",
   "pinyin": "",
   "english": "sound of a dog barking"
 },
 {
   "lesson": 11,
   "char": "ざ",
   "pinyin": "za",
   "english": ""
 },
 {
   "lesson": 11,
   "char": "じ",
   "pinyin": "ji",
   "english": ""
 },
 {
   "lesson": 11,
   "char": "ず",
   "pinyin": "zu",
   "english": ""
 },
 {
   "lesson": 11,
   "char": "ぜ",
   "pinyin": "ze",
   "english": ""
 },
 {
   "lesson": 11,
   "char": "ぞ",
   "pinyin": "zo",
   "english": ""
 },
 {
   "lesson": 11,
   "char": "ざっし",
   "pinyin": "",
   "english": "magazine"
 },
 {
   "lesson": 12,
   "char": "が",
   "pinyin": "ga",
   "english": ""
 },
 {
   "lesson": 12,
   "char": "ぎ",
   "pinyin": "gi",
   "english": ""
 },
 {
   "lesson": 12,
   "char": "ぐ",
   "pinyin": "gu",
   "english": ""
 },
 {
   "lesson": 12,
   "char": "げ",
   "pinyin": "ge",
   "english": ""
 },
 {
   "lesson": 12,
   "char": "ご",
   "pinyin": "go",
   "english": ""
 },
 {
   "lesson": 12,
   "char": "がき",
   "pinyin": "",
   "english": "brat; kid; urchin; little devil​"
 },
 {
   "lesson": 13,
   "char": "だ",
   "pinyin": "da",
   "english": ""
 },
 {
   "lesson": 13,
   "char": "ぢ",
   "pinyin": "ji",
   "english": ""
 },
 {
   "lesson": 13,
   "char": "づ",
   "pinyin": "zu",
   "english": ""
 },
 {
   "lesson": 13,
   "char": "で",
   "pinyin": "de",
   "english": ""
 },
 {
   "lesson": 13,
   "char": "ど",
   "pinyin": "do",
   "english": ""
 },
 {
   "lesson": 13,
   "char": "はなぢ",
   "pinyin": "",
   "english": "nosebleed"
 },
 {
   "lesson": 13,
   "char": "～をください",
   "pinyin": "",
   "english": "～ please"
 },
 {
   "lesson": 13.5,
   "char": "ば",
   "pinyin": "ba",
   "english": ""
 },
 {
   "lesson": 13.5,
   "char": "び",
   "pinyin": "bi",
   "english": ""
 },
 {
   "lesson": 13.5,
   "char": "ぶ",
   "pinyin": "bu",
   "english": ""
 },
 {
   "lesson": 13.5,
   "char": "べ",
   "pinyin": "be",
   "english": ""
 },
 {
   "lesson": 13.5,
   "char": "ぼ",
   "pinyin": "bo",
   "english": ""
 },
 {
   "lesson": 14,
   "char": "ぱ",
   "pinyin": "pa",
   "english": ""
 },
 {
   "lesson": 14,
   "char": "ぴ",
   "pinyin": "pi",
   "english": ""
 },
 {
   "lesson": 14,
   "char": "ぷ",
   "pinyin": "pu",
   "english": ""
 },
 {
   "lesson": 14,
   "char": "ぺ",
   "pinyin": "pe",
   "english": ""
 },
 {
   "lesson": 14,
   "char": "ぽ",
   "pinyin": "po",
   "english": ""
 },
 {
   "lesson": 14,
   "char": "たんぽぽ",
   "pinyin": "",
   "english": "dandelion"
 },
 {
   "lesson": 15,
   "char": "きゃ",
   "pinyin": "kya",
   "english": ""
 },
 {
   "lesson": 15,
   "char": "きゅ",
   "pinyin": "kyu",
   "english": ""
 },
 {
   "lesson": 15,
   "char": "きょ",
   "pinyin": "kyo",
   "english": ""
 },
 {
   "lesson": 15,
   "char": "しゃ",
   "pinyin": "sha",
   "english": ""
 },
 {
   "lesson": 15,
   "char": "しゅ",
   "pinyin": "shu",
   "english": ""
 },
 {
   "lesson": 15,
   "char": "しょ",
   "pinyin": "sho",
   "english": ""
 },
 {
   "lesson": 15,
   "char": "きゅうり",
   "pinyin": "",
   "english": "cucumber"
 },
 {
   "lesson": 15,
   "char": "しょうゆ",
   "pinyin": "",
   "english": "soy sauce"
 },
 {
   "lesson": 16,
   "char": "ちゃ",
   "pinyin": "cha",
   "english": ""
 },
 {
   "lesson": 16,
   "char": "ちゅ",
   "pinyin": "chu",
   "english": ""
 },
 {
   "lesson": 16,
   "char": "ちょ",
   "pinyin": "cho",
   "english": ""
 },
 {
   "lesson": 16,
   "char": "にゃ",
   "pinyin": "nya",
   "english": ""
 },
 {
   "lesson": 16,
   "char": "にゅ",
   "pinyin": "nyu",
   "english": ""
 },
 {
   "lesson": 16,
   "char": "にょ",
   "pinyin": "nyo",
   "english": ""
 },
 {
   "lesson": 16,
   "char": "おちゃ",
   "pinyin": "tea",
   "english": ""
 },
 {
   "lesson": 16,
   "char": "ちょっと",
   "pinyin": "",
   "english": "just a moment; just a little; it's a bit (difficult)"
 },
 {
   "lesson": 17,
   "char": "ひゃ",
   "pinyin": "hya　(hiragana)",
   "english": ""
 },
 {
   "lesson": 17,
   "char": "ひゅ",
   "pinyin": "hyu",
   "english": ""
 },
 {
   "lesson": 17,
   "char": "ひょ",
   "pinyin": "hyo",
   "english": ""
 },
 {
   "lesson": 17,
   "char": "みゃ",
   "pinyin": "mya",
   "english": ""
 },
 {
   "lesson": 17,
   "char": "みゅ",
   "pinyin": "myu",
   "english": ""
 },
 {
   "lesson": 17,
   "char": "みょ",
   "pinyin": "myo",
   "english": ""
 },
 {
   "lesson": 17,
   "char": "ひゃく",
   "pinyin": "",
   "english": "hundred"
 },
 {
   "lesson": 18,
   "char": "りゃ",
   "pinyin": "rya",
   "english": ""
 },
 {
   "lesson": 18,
   "char": "りゅ",
   "pinyin": "ryu",
   "english": ""
 },
 {
   "lesson": 18,
   "char": "りょ",
   "pinyin": "ryo",
   "english": ""
 },
 {
   "lesson": 18,
   "char": "ぎゃ",
   "pinyin": "gya",
   "english": ""
 },
 {
   "lesson": 18,
   "char": "ぎゅ",
   "pinyin": "gyu",
   "english": ""
 },
 {
   "lesson": 18,
   "char": "ぎょ",
   "pinyin": "gyo",
   "english": ""
 },
 {
   "lesson": 18,
   "char": "りょかん",
   "pinyin": "",
   "english": "Japanese inn"
 },
 {
   "lesson": 18,
   "char": "ぎょうざ",
   "pinyin": "",
   "english": "gyoza; pot sticker"
 },
 {
   "lesson": 19,
   "char": "じゃ",
   "pinyin": "ja",
   "english": ""
 },
 {
   "lesson": 19,
   "char": "じゅ",
   "pinyin": "ju",
   "english": ""
 },
 {
   "lesson": 19,
   "char": "じょ",
   "pinyin": "jo",
   "english": ""
 },
 {
   "lesson": 19,
   "char": "びゃ",
   "pinyin": "bya",
   "english": ""
 },
 {
   "lesson": 19,
   "char": "びゅ",
   "pinyin": "byu",
   "english": ""
 },
 {
   "lesson": 19,
   "char": "びょ",
   "pinyin": "byo",
   "english": ""
 },
 {
   "lesson": 19,
   "char": "ぴゃ",
   "pinyin": "pya",
   "english": ""
 },
 {
   "lesson": 19,
   "char": "ぴゅ",
   "pinyin": "pyu",
   "english": ""
 },
 {
   "lesson": 19,
   "char": "ぴょ",
   "pinyin": "pyo",
   "english": ""
 },
 {
   "lesson": 19,
   "char": "てんじょう",
   "pinyin": "",
   "english": "ceiling"
 },
 {
   "lesson": 19,
   "char": "ろっぴゃく",
   "pinyin": "",
   "english": "six hundred"
 }
];
