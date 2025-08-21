import React from 'react'

function Section() {
const countries = [
  {
    "name": "India",
    "president": "Droupadi Murmu",
    "national_food": "Biryani",
    "phone_code": "+91",
    "symbol": "IND"
  },
  {
    "name": "United States",
    "president": "Donald Trump",
    "national_food": "Hamburger",
    "phone_code": "+1",
    "symbol": "USA"
  },
  {
    "name": "France",
    "president": "Emmanuel Macron",
    "national_food": "Baguette",
    "phone_code": "+33",
    "symbol": "FRA"
  },
  {
    "name": "Germany",
    "president": "Frank‑Walter Steinmeier",
    "national_food": "Bratwurst",
    "phone_code": "+49",
    "symbol": "DEU"
  },
  {
    "name": "Brazil",
    "president": "Luiz Inácio Lula da Silva",
    "national_food": "Feijoada",
    "phone_code": "+55",
    "symbol": "BRA"
  },
  {
    "name": "Russia",
    "president": "Vladimir Putin",
    "national_food": "Pelmeni",
    "phone_code": "+7",
    "symbol": "RUS"
  },
  {
    "name": "South Africa",
    "president": "Cyril Ramaphosa",
    "national_food": "Bobotie",
    "phone_code": "+27",
    "symbol": "ZAF"
  },
  {
    "name": "Argentina",
    "president": "Alberto Fernández",
    "national_food": "Asado",
    "phone_code": "+54",
    "symbol": "ARG"
  },
  {
    "name": "Nigeria",
    "president": "Bola Tinubu",
    "national_food": "Jollof rice",
    "phone_code": "+234",
    "symbol": "NGA"
  },
  {
    "name": "Mexico",
    "president": "Andrés Manuel López Obrador",
    "national_food": "Tacos",
    "phone_code": "+52",
    "symbol": "MEX"
  },
  {
    "name": "China",
    "president": "Xi Jinping",
    "national_food": "Peking duck",
    "phone_code": "+86",
    "symbol": "CHN"
  },
  {
    "name": "Japan",
    "president": "Fumio Kishida",
    "national_food": "Sushi",
    "phone_code": "+81",
    "symbol": "JPN"
  },
  {
    "name": "Italy",
    "president": "Sergio Mattarella",
    "national_food": "Pasta",
    "phone_code": "+39",
    "symbol": "ITA"
  },
  {
    "name": "Spain",
    "president": "Pedro Sánchez",
    "national_food": "Paella",
    "phone_code": "+34",
    "symbol": "ESP"
  },
  {
    "name": "Canada",
    "president": "Justin Trudeau",
    "national_food": "Poutine",
    "phone_code": "+1",
    "symbol": "CAN"
  },
  {
    "name": "United Kingdom",
    "president": "King Charles III",
    "national_food": "Fish and chips",
    "phone_code": "+44",
    "symbol": "GBR"
  },
  {
    "name": "Egypt",
    "president": "Abdel Fattah el‑Sisi",
    "national_food": "Koshari",
    "phone_code": "+20",
    "symbol": "EGY"
  },
  {
    "name": "Kenya",
    "president": "William Ruto",
    "national_food": "Ugali with sukuma wiki",
    "phone_code": "+254",
    "symbol": "KEN"
  },
  {
    "name": "Turkey",
    "president": "Recep Tayyip Erdoğan",
    "national_food": "Kebab",
    "phone_code": "+90",
    "symbol": "TUR"
  },
  {
    "name": "Saudi Arabia",
    "president": "King Salman",
    "national_food": "Kabsa",
    "phone_code": "+966",
    "symbol": "SAU"
  },
  {
    "name": "Indonesia",
    "president": "Joko Widodo",
    "national_food": "Nasi goreng",
    "phone_code": "+62",
    "symbol": "IDN"
  },
  {
    "name": "South Korea",
    "president": "Yoon Suk‑yeol",
    "national_food": "Kimchi",
    "phone_code": "+82",
    "symbol": "KOR"
  },
  {
    "name": "Pakistan",
    "president": "Arif Alvi",
    "national_food": "Biryani",
    "phone_code": "+92",
    "symbol": "PAK"
  },
  {
    "name": "Bangladesh",
    "president": "Mohammed Shahabuddin",
    "national_food": "Hilsa fish curry",
    "phone_code": "+880",
    "symbol": "BGD"
  },
  {
    "name": "Iran",
    "president": "Ebrahim Raisi",
    "national_food": "Chelo kebab",
    "phone_code": "+98",
    "symbol": "IRN"
  },
  {
    "name": "France",
    "president": "Emmanuel Macron",
    "national_food": "Croissant",
    "phone_code": "+33",
    "symbol": "FRA"
  },
  {
    "name": "Poland",
    "president": "Andrzej Duda",
    "national_food": "Pierogi",
    "phone_code": "+48",
    "symbol": "POL"
  },
  {
    "name": "Ukraine",
    "president": "Volodymyr Zelenskyy",
    "national_food": "Borscht",
    "phone_code": "+380",
    "symbol": "UKR"
  },
  {
    "name": "Venezuela",
    "president": "Nicolás Maduro",
    "national_food": "Arepa",
    "phone_code": "+58",
    "symbol": "VEN"
  },
  {
    "name": "Colombia",
    "president": "Gustavo Petro",
    "national_food": "Bandeja paisa",
    "phone_code": "+57",
    "symbol": "COL"
  },
  {
    "name": "Thailand",
    "president": "Srettha Thavisin",
    "national_food": "Pad Thai",
    "phone_code": "+66",
    "symbol": "THA"
  },
  {
    "name": "Ghana",
    "president": "Nana Akufo‑Addo",
    "national_food": "Jollof rice",
    "phone_code": "+233",
    "symbol": "GHA"
  },
  {
    "name": "Ethiopia",
    "president": "Sahle‑Work Zewde",
    "national_food": "Injera with doro wat",
    "phone_code": "+251",
    "symbol": "ETH"
  },
  {
    "name": "Chile",
    "president": "Gabriel Boric",
    "national_food": "Empanadas",
    "phone_code": "+56",
    "symbol": "CHL"
  },
  {
    "name": "Peru",
    "president": "Pedro Castillo",
    "national_food": "Ceviche",
    "phone_code": "+51",
    "symbol": "PER"
  },
  {
    "name": "Netherlands",
    "president": "Willem-Alexander",
    "national_food": "Stroopwafel",
    "phone_code": "+31",
    "symbol": "NLD"
  },
  {
    "name": "Sweden",
    "president": "Ulf Kristersson",
    "national_food": "Meatballs",
    "phone_code": "+46",
    "symbol": "SWE"
  },
  {
    "name": "Norway",
    "president": "Jonas Gahr Støre",
    "national_food": "Lutefisk",
    "phone_code": "+47",
    "symbol": "NOR"
  },
  {
    "name": "Switzerland",
    "president": "Alain Berset",
    "national_food": "Fondue",
    "phone_code": "+41",
    "symbol": "CHE"
  },
  {
    "name": "Austria",
    "president": "Alexander Van der Bellen",
    "national_food": "Wiener schnitzel",
    "phone_code": "+43",
    "symbol": "AUT"
  },
  {
    "name": "Belgium",
    "president": "Alexander De Croo",
    "national_food": "Moules‑frites",
    "phone_code": "+32",
    "symbol": "BEL"
  },
  {
    "name": "Portugal",
    "president": "Marcelo Rebelo de Sousa",
    "national_food": "Bacalhau",
    "phone_code": "+351",
    "symbol": "PRT"
  },
  {
    "name": "Ireland",
    "president": "Michael D. Higgins",
    "national_food": "Irish stew",
    "phone_code": "+353",
    "symbol": "IRL"
  },
  {
    "name": "Finland",
    "president": "Alexander Stubb",
    "national_food": "Karjalanpiirakka",
    "phone_code": "+358",
    "symbol": "FIN"
  },
  {
    "name": "Vietnam",
    "president": "Vo Van Thuong",
    "national_food": "Pho",
    "phone_code": "+84",
    "symbol": "VNM"
  },
  {
    "name": "Singapore",
    "president": "Tharman Shanmugaratnam",
    "national_food": "Hainanese chicken rice",
    "phone_code": "+65",
    "symbol": "SGP"
  },
  {
    "name": "Malaysia",
    "president": "Abdul Halim",
    "national_food": "Nasi lemak",
    "phone_code": "+60",
    "symbol": "MYS"
  },
  {
    "name": "Israel",
    "president": "Isaac Herzog",
    "national_food": "Falafel",
    "phone_code": "+972",
    "symbol": "ISR"
  },
  {
    "name": "Afghanistan",
    "president": "Hibatullah Akhundzada",
    "national_food": "Kabuli pulao",
    "phone_code": "+93",
    "symbol": "AFG"
  },
  {
    "name": "Albania",
    "president": "Bajram Begaj",
    "national_food": "Byrek",
    "phone_code": "+355",
    "symbol": "ALB"
  },
  {
    "name": "Algeria",
    "president": "Abdelmadjid Tebboune",
    "national_food": "Couscous",
    "phone_code": "+213",
    "symbol": "DZA"
  },
  {
    "name": "Angola",
    "president": "João Lourenço",
    "national_food": "Funje with moamba de galinha",
    "phone_code": "+244",
    "symbol": "AGO"
  },
  {
    "name": "Armenia",
    "president": "Vahagn Khachaturyan",
    "national_food": "Khorovats",
    "phone_code": "+374",
    "symbol": "ARM"
  },
  {
    "name": "Austria",
    "president": "Alexander Van der Bellen",
    "national_food": "Wiener schnitzel",
    "phone_code": "+43",
    "symbol": "AUT"
  },
  {
    "name": "Azerbaijan",
    "president": "Ilham Aliyev",
    "national_food": "Plov",
    "phone_code": "+994",
    "symbol": "AZE"
  },
  {
    "name": "Bangladesh",
    "president": "Mohammed Shahabuddin",
    "national_food": "Hilsa fish curry",
    "phone_code": "+880",
    "symbol": "BGD"
  },
  {
    "name": "Belarus",
    "president": "Alexander Lukashenko",
    "national_food": "Draniki",
    "phone_code": "+375",
    "symbol": "BLR"
  },
  {
    "name": "Belgium",
    "president": "Alexander De Croo",
    "national_food": "Moules‑frites",
    "phone_code": "+32",
    "symbol": "BEL"
  },
  {
    "name": "Bolivia",
    "president": "Luis Arce",
    "national_food": "Salteñas",
    "phone_code": "+591",
    "symbol": "BOL"
  },
  {
    "name": "Botswana",
    "president": "Netumbo Nandi‑Ndaitwah",
    "national_food": "Seswaa",
    "phone_code": "+267",
    "symbol": "BWA"
  },
  {
    "name": "Burkina Faso",
    "president": "Captain Ibrahim Traoré",
    "national_food": "Riz gras",
    "phone_code": "+226",
    "symbol": "BFA"
  },
  {
    "name": "Burundi",
    "president": "Évariste Ndayishimiye",
    "national_food": "Brochettes and beans",
    "phone_code": "+257",
    "symbol": "BDI"
  },
  {
    "name": "Cambodia",
    "president": "King Norodom Sihamoni (monarch)",
    "national_food": "Amok",
    "phone_code": "+855",
    "symbol": "KHM"
  },
  {
    "name": "Cameroon",
    "president": "Paul Biya",
    "national_food": "Ndolé",
    "phone_code": "+237",
    "symbol": "CMR"
  },
  {
    "name": "Cape Verde",
    "president": "José Maria Neves",
    "national_food": "Cachupa",
    "phone_code": "+238",
    "symbol": "CPV"
  },
  {
    "name": "Chile",
    "president": "Gabriel Boric",
    "national_food": "Pastel de choclo",
    "phone_code": "+56",
    "symbol": "CHL"
  },
  {
    "name": "Côte d'Ivoire",
    "president": "Alassane Ouattara",
    "national_food": "Attiéké with grilled fish",
    "phone_code": "+225",
    "symbol": "CIV"
  },
  {
    "name": "Croatia",
    "president": "Zoran Milanović",
    "national_food": "Peka",
    "phone_code": "+385",
    "symbol": "HRV"
  },
  {
    "name": "Cuba",
    "president": "Miguel Díaz‑Canel",
    "national_food": "Ropa vieja",
    "phone_code": "+53",
    "symbol": "CUB"
  },
  {
    "name": "Czechia",
    "president": "Petr Pavel",
    "national_food": "Svickova",
    "phone_code": "+420",
    "symbol": "CZE"
  },
  {
    "name": "Denmark",
    "president": "Queen Margrethe II (monarch)",
    "national_food": "Smørrebrød",
    "phone_code": "+45",
    "symbol": "DNK"
  },
  {
    "name": "Dominican Republic",
    "president": "Luis Abinader",
    "national_food": "La bandera",
    "phone_code": "+1‑809/+1‑829",
    "symbol": "DOM"
  },
  {
    "name": "Ecuador",
    "president": "Daniel Noboa",
    "national_food": "Ceviche",
    "phone_code": "+593",
    "symbol": "ECU"
  },
  {
    "name": "Eritrea",
    "president": "Isaias Afwerki",
    "national_food": "Tsebhi",
    "phone_code": "+291",
    "symbol": "ERI"
  },
  {
    "name": "Estonia",
    "president": "Alar Karis",
    "national_food": "Verivorst",
    "phone_code": "+372",
    "symbol": "EST"
  },
  {
    "name": "Gabon",
    "president": "Brice Oligui Nguema",
    "national_food": "Poulet Nyembwe",
    "phone_code": "+241",
    "symbol": "GAB"
  },
  {
    "name": "Gambia",
    "president": "Adama Barrow",
    "national_food": "Domoda",
    "phone_code": "+220",
    "symbol": "GMB"
  },
  {
    "name": "Georgia",
    "president": "Salome Zourabichvili",
    "national_food": "Khachapuri",
    "phone_code": "+995",
    "symbol": "GEO"
  },
  {
    "name": "Guatemala",
    "president": "Bernardo Arévalo",
    "national_food": "Pepián",
    "phone_code": "+502",
    "symbol": "GTM"
  },
  {
    "name": "Haiti",
    "president": "Ariel Henry (acting)",
    "national_food": "Griot",
    "phone_code": "+509",
    "symbol": "HTI"
  },
  {
    "name": "Honduras",
    "president": "Xiomara Castro",
    "national_food": "Baleadas",
    "phone_code": "+504",
    "symbol": "HND"
  },
  {
    "name": "Hungary",
    "president": "Katalin Novák",
    "national_food": "Goulash",
    "phone_code": "+36",
    "symbol": "HUN"
  },
  {
    "name": "Iceland",
    "president": "Halla Tómasdóttir",
    "national_food": "Hangikjöt",
    "phone_code": "+354",
    "symbol": "ISL"
  },
  {
    "name": "Iraq",
    "president": "Abdul Latif Rashid",
    "national_food": "Masgouf",
    "phone_code": "+964",
    "symbol": "IRQ"
  },
  {
    "name": "Kazakhstan",
    "president": "Olzhas Bektenov (interim)",
    "national_food": "Beshbarmak",
    "phone_code": "+7",
    "symbol": "KAZ"
  },
  {
    "name": "Kenya",
    "president": "William Ruto",
    "national_food": "Ugali with sukuma wiki",
    "phone_code": "+254",
    "symbol": "KEN"
  },
  {
    "name": "Kuwait",
    "president": "Sheikh Mishal Al‑Ahmad Al‑Sabah (Emir)",
    "national_food": "Machboos",
    "phone_code": "+965",
    "symbol": "KWT"
  },
  {
    "name": "Laos",
    "president": "Sonexay Siphandone",
    "national_food": "Larb",
    "phone_code": "+856",
    "symbol": "LAO"
  },
  {
    "name": "Latvia",
    "president": "Edgars Rinkēvičs",
    "national_food": "Grey peas and bacon",
    "phone_code": "+371",
    "symbol": "LVA"
  },
  {
    "name": "Lebanon",
    "president": "Joseph Aoun",
    "national_food": "Tabbouleh",
    "phone_code": "+961",
    "symbol": "LBN"
  },
  {
    "name": "Liberia",
    "president": "Joseph Boakai",
    "national_food": "Jollof rice",
    "phone_code": "+231",
    "symbol": "LBR"
  },
  {
    "name": "Lithuania",
    "president": "Gitanas Nausėda",
    "national_food": "Cepelinai",
    "phone_code": "+370",
    "symbol": "LTU"
  },
  {
    "name": "Luxembourg",
    "president": "Grand Duke Henri (monarch)",
    "national_food": "Judd mat Gaardebounen",
    "phone_code": "+352",
    "symbol": "LUX"
  },
  {
    "name": "Madagascar",
    "president": "Andry Rajoelina",
    "national_food": "Romazava",
    "phone_code": "+261",
    "symbol": "MDG"
  },
  {
    "name": "Malawi",
    "president": "Lazarus Chakwera",
    "national_food": "Nsima with goat stew",
    "phone_code": "+265",
    "symbol": "MWI"
  }

]
    
   return (
      <>
        <div className=' flex flex-col items-center bg-[#FAF7F3]'>{
          countries.map(ab=>{
            return <>
                <div className='  border-2 w-3xs bg-[#D9A299] rounded-sm content-around' >
                    <div className='border-1 w-3xs'>Name: {ab.name}</div>
                    <div className='border-1 w-3xs'>President: {ab.napresidentme}</div>
                    <div className='border-1 w-3xs'>National food: {ab.national_food}</div>
                    <div className='border-1 w-3xs'>Phone code: {ab.phone_code}</div>
                    <div className='border-1 w-3xs'>Symbol: {ab.symbol}</div>
                </div>
            </>
            })
          }
        </div>
      </>
      
    )

}

export default Section
