// Wspólne dane do ćwiczeń z geografii: państwa świata, ich stolice i flagi.
// Ładowane przez flagi.html i stolice.html – poprawki nazw i stolic wprowadzaj tylko tutaj.

const CONTINENTS = {
    eu: { name: 'Europa',              loc: 'w Europie',              btn: 'bg-blue-500 hover:bg-blue-600' },
    as: { name: 'Azja',                loc: 'w Azji',                 btn: 'bg-amber-500 hover:bg-amber-600' },
    af: { name: 'Afryka',              loc: 'w Afryce',               btn: 'bg-slate-700 hover:bg-slate-800' },
    na: { name: 'Ameryka Północna',    loc: 'w Ameryce Północnej',    btn: 'bg-rose-500 hover:bg-rose-600' },
    sa: { name: 'Ameryka Południowa',  loc: 'w Ameryce Południowej',  btn: 'bg-orange-500 hover:bg-orange-600' },
    oc: { name: 'Australia i Oceania', loc: 'w Australii i Oceanii',  btn: 'bg-emerald-500 hover:bg-emerald-600' }
};

// [kod ISO 3166-1 (do adresu flagi), nazwa, stolica]. Stolica null = sporna, nie podajemy.
const DATA = {
    eu: [
        ['al', 'Albania', 'Tirana'], ['ad', 'Andora', 'Andorra la Vella'], ['at', 'Austria', 'Wiedeń'],
        ['be', 'Belgia', 'Bruksela'], ['by', 'Białoruś', 'Mińsk'], ['ba', 'Bośnia i Hercegowina', 'Sarajewo'],
        ['bg', 'Bułgaria', 'Sofia'], ['hr', 'Chorwacja', 'Zagrzeb'], ['cy', 'Cypr', 'Nikozja'],
        ['me', 'Czarnogóra', 'Podgorica'], ['cz', 'Czechy', 'Praga'], ['dk', 'Dania', 'Kopenhaga'],
        ['ee', 'Estonia', 'Tallinn'], ['fi', 'Finlandia', 'Helsinki'], ['fr', 'Francja', 'Paryż'],
        ['gr', 'Grecja', 'Ateny'], ['es', 'Hiszpania', 'Madryt'], ['nl', 'Holandia', 'Amsterdam'],
        ['ie', 'Irlandia', 'Dublin'], ['is', 'Islandia', 'Reykjavík'], ['xk', 'Kosowo', 'Prisztina'],
        ['li', 'Liechtenstein', 'Vaduz'], ['lt', 'Litwa', 'Wilno'], ['lu', 'Luksemburg', 'Luksemburg'],
        ['lv', 'Łotwa', 'Ryga'], ['mk', 'Macedonia Północna', 'Skopje'], ['mt', 'Malta', 'Valletta'],
        ['md', 'Mołdawia', 'Kiszyniów'], ['mc', 'Monako', 'Monako'], ['de', 'Niemcy', 'Berlin'],
        ['no', 'Norwegia', 'Oslo'], ['pl', 'Polska', 'Warszawa'], ['pt', 'Portugalia', 'Lizbona'],
        ['ru', 'Rosja', 'Moskwa'], ['ro', 'Rumunia', 'Bukareszt'], ['sm', 'San Marino', 'San Marino'],
        ['rs', 'Serbia', 'Belgrad'], ['sk', 'Słowacja', 'Bratysława'], ['si', 'Słowenia', 'Lublana'],
        ['ch', 'Szwajcaria', 'Berno'], ['se', 'Szwecja', 'Sztokholm'], ['ua', 'Ukraina', 'Kijów'],
        ['va', 'Watykan', 'Watykan'], ['hu', 'Węgry', 'Budapeszt'], ['gb', 'Wielka Brytania', 'Londyn'],
        ['it', 'Włochy', 'Rzym']
    ],
    as: [
        ['af', 'Afganistan', 'Kabul'], ['sa', 'Arabia Saudyjska', 'Rijad'], ['am', 'Armenia', 'Erywań'],
        ['az', 'Azerbejdżan', 'Baku'], ['bh', 'Bahrajn', 'Manama'], ['bd', 'Bangladesz', 'Dhaka'],
        ['bt', 'Bhutan', 'Thimphu'], ['bn', 'Brunei', 'Bandar Seri Begawan'], ['cn', 'Chiny', 'Pekin'],
        ['ph', 'Filipiny', 'Manila'], ['ge', 'Gruzja', 'Tbilisi'], ['in', 'Indie', 'Nowe Delhi'],
        ['id', 'Indonezja', 'Dżakarta'], ['iq', 'Irak', 'Bagdad'], ['ir', 'Iran', 'Teheran'],
        ['il', 'Izrael', null], ['jp', 'Japonia', 'Tokio'], ['ye', 'Jemen', 'Sana'],
        ['jo', 'Jordania', 'Amman'], ['kh', 'Kambodża', 'Phnom Penh'], ['qa', 'Katar', 'Doha'],
        ['kz', 'Kazachstan', 'Astana'], ['kg', 'Kirgistan', 'Biszkek'], ['kr', 'Korea Południowa', 'Seul'],
        ['kp', 'Korea Północna', 'Pjongjang'], ['kw', 'Kuwejt', 'Kuwejt'], ['la', 'Laos', 'Wientian'],
        ['lb', 'Liban', 'Bejrut'], ['mv', 'Malediwy', 'Male'], ['my', 'Malezja', 'Kuala Lumpur'],
        ['mn', 'Mongolia', 'Ułan Bator'], ['mm', 'Mjanma', 'Naypyidaw'], ['np', 'Nepal', 'Katmandu'],
        ['om', 'Oman', 'Maskat'], ['pk', 'Pakistan', 'Islamabad'], ['ps', 'Palestyna', null],
        ['sg', 'Singapur', 'Singapur'], ['lk', 'Sri Lanka', 'Sri Dźajawardanapura Kotte'], ['sy', 'Syria', 'Damaszek'],
        ['tj', 'Tadżykistan', 'Duszanbe'], ['th', 'Tajlandia', 'Bangkok'], ['tl', 'Timor Wschodni', 'Dili'],
        ['tr', 'Turcja', 'Ankara'], ['tm', 'Turkmenistan', 'Aszchabad'], ['uz', 'Uzbekistan', 'Taszkent'],
        ['vn', 'Wietnam', 'Hanoi'], ['ae', 'Zjednoczone Emiraty Arabskie', 'Abu Zabi']
    ],
    af: [
        ['dz', 'Algieria', 'Algier'], ['ao', 'Angola', 'Luanda'], ['bj', 'Benin', 'Porto Novo'],
        ['bw', 'Botswana', 'Gaborone'], ['bf', 'Burkina Faso', 'Wagadugu'], ['bi', 'Burundi', 'Gitega'],
        ['td', 'Czad', 'Ndżamena'], ['cd', 'Demokratyczna Republika Konga', 'Kinszasa'], ['dj', 'Dżibuti', 'Dżibuti'],
        ['eg', 'Egipt', 'Kair'], ['er', 'Erytrea', 'Asmara'], ['sz', 'Eswatini', 'Mbabane'],
        ['et', 'Etiopia', 'Addis Abeba'], ['ga', 'Gabon', 'Libreville'], ['gm', 'Gambia', 'Bandżul'],
        ['gh', 'Ghana', 'Akra'], ['gn', 'Gwinea', 'Konakry'], ['gw', 'Gwinea Bissau', 'Bissau'],
        ['gq', 'Gwinea Równikowa', 'Malabo'], ['cm', 'Kamerun', 'Jaunde'], ['ke', 'Kenia', 'Nairobi'],
        ['km', 'Komory', 'Moroni'], ['cg', 'Kongo', 'Brazzaville'], ['ls', 'Lesotho', 'Maseru'],
        ['lr', 'Liberia', 'Monrovia'], ['ly', 'Libia', 'Trypolis'], ['mg', 'Madagaskar', 'Antananarywa'],
        ['mw', 'Malawi', 'Lilongwe'], ['ml', 'Mali', 'Bamako'], ['ma', 'Maroko', 'Rabat'],
        ['mr', 'Mauretania', 'Nawakszut'], ['mu', 'Mauritius', 'Port Louis'], ['mz', 'Mozambik', 'Maputo'],
        ['na', 'Namibia', 'Windhuk'], ['ne', 'Niger', 'Niamey'], ['ng', 'Nigeria', 'Abudża'],
        ['za', 'Republika Południowej Afryki', 'Pretoria'], ['cf', 'Republika Środkowoafrykańska', 'Bangi'],
        ['cv', 'Republika Zielonego Przylądka', 'Praia'], ['rw', 'Rwanda', 'Kigali'], ['sn', 'Senegal', 'Dakar'],
        ['sc', 'Seszele', 'Victoria'], ['sl', 'Sierra Leone', 'Freetown'], ['so', 'Somalia', 'Mogadiszu'],
        ['sd', 'Sudan', 'Chartum'], ['ss', 'Sudan Południowy', 'Dżuba'], ['tz', 'Tanzania', 'Dodoma'],
        ['tg', 'Togo', 'Lomé'], ['tn', 'Tunezja', 'Tunis'], ['ug', 'Uganda', 'Kampala'],
        ['ci', 'Wybrzeże Kości Słoniowej', 'Jamusukro'], ['st', 'Wyspy Świętego Tomasza i Książęca', 'São Tomé'],
        ['zm', 'Zambia', 'Lusaka'], ['zw', 'Zimbabwe', 'Harare']
    ],
    na: [
        ['ag', 'Antigua i Barbuda', "Saint John's"], ['bs', 'Bahamy', 'Nassau'], ['bb', 'Barbados', 'Bridgetown'],
        ['bz', 'Belize', 'Belmopan'], ['dm', 'Dominika', 'Roseau'], ['do', 'Dominikana', 'Santo Domingo'],
        ['gd', 'Grenada', "Saint George's"], ['gt', 'Gwatemala', 'Gwatemala'], ['ht', 'Haiti', 'Port-au-Prince'],
        ['hn', 'Honduras', 'Tegucigalpa'], ['jm', 'Jamajka', 'Kingston'], ['ca', 'Kanada', 'Ottawa'],
        ['cr', 'Kostaryka', 'San José'], ['cu', 'Kuba', 'Hawana'], ['mx', 'Meksyk', 'Meksyk'],
        ['ni', 'Nikaragua', 'Managua'], ['pa', 'Panama', 'Panama'], ['kn', 'Saint Kitts i Nevis', 'Basseterre'],
        ['lc', 'Saint Lucia', 'Castries'], ['vc', 'Saint Vincent i Grenadyny', 'Kingstown'], ['sv', 'Salwador', 'San Salvador'],
        ['us', 'Stany Zjednoczone', 'Waszyngton'], ['tt', 'Trynidad i Tobago', 'Port of Spain']
    ],
    sa: [
        ['ar', 'Argentyna', 'Buenos Aires'], ['bo', 'Boliwia', 'Sucre'], ['br', 'Brazylia', 'Brasília'],
        ['cl', 'Chile', 'Santiago'], ['ec', 'Ekwador', 'Quito'], ['gy', 'Gujana', 'Georgetown'],
        ['co', 'Kolumbia', 'Bogota'], ['py', 'Paragwaj', 'Asunción'], ['pe', 'Peru', 'Lima'],
        ['sr', 'Surinam', 'Paramaribo'], ['uy', 'Urugwaj', 'Montevideo'], ['ve', 'Wenezuela', 'Caracas']
    ],
    oc: [
        ['au', 'Australia', 'Canberra'], ['fj', 'Fidżi', 'Suva'], ['ki', 'Kiribati', 'Tarawa'],
        ['fm', 'Mikronezja', 'Palikir'], ['nr', 'Nauru', 'Yaren'], ['nz', 'Nowa Zelandia', 'Wellington'],
        ['pw', 'Palau', 'Ngerulmud'], ['pg', 'Papua-Nowa Gwinea', 'Port Moresby'], ['ws', 'Samoa', 'Apia'],
        ['to', 'Tonga', 'Nukuʻalofa'], ['tv', 'Tuvalu', 'Funafuti'], ['vu', 'Vanuatu', 'Port Vila'],
        ['mh', 'Wyspy Marshalla', 'Majuro'], ['sb', 'Wyspy Salomona', 'Honiara']
    ]
};

const COUNTRIES = Object.entries(DATA).flatMap(([cont, list]) =>
    list.map(([code, name, capital]) => ({ code, name, capital, cont })));
const BY_CODE = Object.fromEntries(COUNTRIES.map(c => [c.code, c]));

// Obrazki flag z flagcdn.com (szerokości: 20, 40, 80, 160, 320, 640, 1280, 2560 px)
const flagUrl = (code, width = 640) => `https://flagcdn.com/w${width}/${code}.png`;

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Do porównywania nazw bez wielkości liter i polskich znaków
const norm = s => s.toLowerCase().replace(/ł/g, 'l').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

// Odmiana przez liczby: plural(5, ['flaga', 'flagi', 'flag']) -> '5 flag'
function plural(n, [one, few, many]) {
    const d = n % 10, dd = n % 100;
    if (n === 1) return `1 ${one}`;
    if (d >= 2 && d <= 4 && !(dd >= 12 && dd <= 14)) return `${n} ${few}`;
    return `${n} ${many}`;
}
