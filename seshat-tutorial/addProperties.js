
function createProperties(){
    return WOQL.and(
        createBasicProperties(),
        createMonetarySystemProperties(),
        createStandardizationProperties(),
        createLegalProperties(),
        createBuildingProperties(),
        createHierarchyProperties(),
        createBureaucraticProperties(),
        createAgriculturalProperties(),
        createInternalAffairsProperties(),
        createMetaProperties(),
        createCeremonialProperties(),
        createFoodStorageProperties(),
        createProfessionsProperties(),
        createHousingProperties(),
        createCommunityIntegrationProperties(),
        createSpecializedBuildingsProperties(),
        createTransportProperties(),
        createMetricProperties(),
        createWritingProperties(),
        createPostalProperties(),
        createInfrastructureProperties(),
        createBurialProperties()
    )
}

function createBasicProperties(){
    return WOQL.and(
    createSeshatProperty("longest_communication_distance", "xdd:decimalRange", ["Scale", "SocialComplexity"], 
        "Longest Communication Distance", 
        `Distance in kilometers between the capital and the furthest provincial capital. 
        The figure for the most direct land and/or sea route that was available is used.
        <p>As an alternative for prehistoric communities, it refers to the distance between 
        largest quasi-capital and furthest village within the quasi-polity.</p>`),
    createSeshatProperty("fastest_travel", "xdd:decimalRange", ["Transport"], 
        "Fastest Individual Communication", 
        `This is the fastest time (in days) an individual can travel from the capital city 
        to the most outlying provincial capital (if one exists), usually keeping within the 
        boundaries of the polity. This might be by ship, horse, horse relay, or on foot, or a combination.`),
    createSeshatProperty("population", "xdd:integerRange", ["Scale", "SocialComplexity"], 
        "Population", 
        `Estimated population; can change as a result of a political authority adding/losing 
        new territories or by population growth/decline within a region`),
    createSeshatProperty("capital_city", "xsd:string", ["SocialComplexity"], 
         "Capital City", 
         `The city where the ruler spends most of his or her time. If there was more than one capital,
          all are included. Note that the capital may be different from the largest city (see below).
          <p>'Capital' may be difficult to code for archaeologically known societies.
          If there is reasonable basis to believe that the largest known settlement was 
          the seat of the ruler it is coded as capital.
          Archaeologists are able to recognize special architectural structures, 
          such as a ceremonial centres and some kind of citadels or palaces.
          These features could be recognized with certainty after a careful study of the 
          whole region and the settlement network.
          If such an inference cannot be made, this variable is coded as unknown 
         (again, the largest settlement is coded elsewhere).</p>`),                     
    createSeshatProperty("degree_of_centralization", "DegreeOfCentralization", ["SocialComplexity"], 
         "Degree of Centralization", 
         `How centralized was power in this political authority?`),                     
    createSeshatProperty("largest_settlement_population", "xdd:integerRange", ["SocialComplexity", "Scale"], 
         "Largest Settlement Population", 
         `Population count of the largest settlement within the entity. 
         <p>Note that the largest settlement could be different from the capital. 
         Where possible, the dynamics (that is, how population changed during the temporal period of the polity) 
         are included in the notes. 
         Note that we are also building a city database - this will be merged into that eventually.</p>`),                     
    createSeshatProperty("linguistic_family", "xsd:string", ["SocialComplexity", "Language"], 
         "Linguistic Family", 
         `The Linguistic family or families that the main languages
         belonged to. https://en.wikipedia.org/wiki/List_of_language_families`),
    createSeshatProperty("alternative_names", "xsd:string", [], 
         "Alternative names", 
         `Names used in the historical literature or common names used by the inhabitants`),
    createSeshatProperty("territorial_area", "xdd:decimalRange", [], 
         "Territorial Area", 
         `The area in squared kilometers of the entity's territory.`),
    createSeshatProperty("territory", "xdd:decimalRange", [], 
         "Territory", 
         `An area on the world map, defined by a coordinate polygon which is the territory of the entity`),
    createSeshatProperty("utm_zone", "xsd:string", [], 
         "UTM Zone", 
         `The UTM Zone that corresponds most directly with the entity - e.g. 
         where the polity's capital city is located, or the location of the NGA. 
         For more see: http://www.dmap.co.uk/utmworld.htm`),
    createSeshatProperty("lang", "xsd:string", ["Language"], 
         "Language", 
         `The language(s) are listed that were generally used for administration, religion, and military affairs. 
         The languages spoken by the majority of the population are also listed, if different from the above.`),
    createSeshatProperty("best_building", "Building", ["Construction"], 
         "Most Costly Building", 
         `The most impressive or costly building constructed by the political authority`),
    createSeshatProperty("peak", "xdd:gYearRange", [], 
         "Peak Date", 
         `The period when the political power was at its peak, whether militarily,
         in terms of the size of territory controlled, or the degree of cultural development. 
         This variable has a subjective element, but typically historians agree when the peak was.`),
    createSeshatProperty("predecessor", "PoliticalAuthority", [], 
         "Preceding Polity", 
         `The immediate preceding political authority. This code is based on the core region of the polity 
         (not the NGA region).  E.g. Achaemenid Empire's core region was Persia, 
         where they were preceded by the Median Empire.`),
    createSeshatProperty("successor", "PoliticalAuthority", [], 
         "Succeeding Polity", 
         `Name. Only name it here and don't code the nature of change 
         (it's coded on the page of the succeeding quasipolity). 
         This code is based on the core region of the current polity (not the NGA region). E.g. 
         Achaemenid Empire's core region was Persia, where they were succeeded by the Macedonian Empire.`),
     createSeshatProperty("centralization", "DegreeOfCentralization", ["InternalAffairs"], 
         "Degree of Centralization", 
         `How centralized was power in this political authority?`),
    createSeshatProperty("supra_polity_relations", "SupraPolityRelations", ["ExternalAffairs"], 
         "Supra-polity relations", 
         `What was the relationship between this political authority and larger / higher order power.`),
    createSeshatProperty("predecessor_relationship", "PoliticalEvolution", [], 
         "Relationship to Preceding Polity", 
         `How this political authority evolved from its predecessor.`),
    createSeshatProperty("supracultural_entity", "xsd:string", ["ExternalAffairs"], 
         "Supra-cultural Entity", 
         `Political Authorities can be embedded within larger-scale cultural groupings 
         of polities or quasipolities. These are sometimes referred to as \"civilizations\". 
         For example, medieval European kingdoms were part of Latin Christendom. During the periods of 
         disunity in China, warring states there, nevertheless, belonged to the same Chinese cultural sphere. 
         Archaeologists often use \"archaeological traditions\" to denote such large-scale cultural entities 
         (for example, Peregrine's Atlas of Cultural Evolution). 
         Note, 'supracultural entity' refers to cultural interdependence, and is distinct 
         from a political confederation or alliance, which is coded under 'supra-polity relations.'`),
    createSeshatProperty("supracultural_scale", "xdd:decimalRange", ["Scale"], 
         "Supra-cultural Scale", 
         `An estimate of the area encompassed by the supracultural entity - in km squared.`),
    );                    
} 


function createMonetarySystemProperties(){
    return WOQL.and(
    createSeshatProperty("monetary_articles", "EpistemicState", ["MonetarySystem", "SocialComplexity"], 
        "Articles", 
        `Articles with use-value used for exchange and trade, e.g. axes, cattle, grain.`),                     
    createSeshatProperty("debt_and_credit", "EpistemicState", ["MonetarySystem", "SocialComplexity"], 
        "Debt and credit", 
        `Commercial and market debt and credit structures that take physical form, 
        e.g. a contract on parchment (not just verbal agreements)`),
    createSeshatProperty("foreign_coins", "EpistemicState", ["MonetarySystem", "SocialComplexity"], 
        "Foreign Coins", 
        `Coins minted by some external polity are used for exchange`),
    createSeshatProperty("indigenous_coins", "EpistemicState", ["MonetarySystem", "SocialComplexity"], 
        "Indigenous Coins", 
        `Coins minted by local authority are in use for exchange`),
    createSeshatProperty("paper_currency", "EpistemicState", ["MonetarySystem", "SocialComplexity"], 
        "Paper Currency", 
        `Currency notes or other kind of fiat currency`),
    createSeshatProperty("precious_metals", "EpistemicState", ["MonetarySystem", "SocialComplexity"], 
        "Precious Metals", 
        `Bullion: non-coined silver, gold, platinum.`),
    createSeshatProperty("stores_of_wealth", "EpistemicState", ["MonetarySystem", "SocialComplexity"], 
        "Stores of Wealth", 
        `Special places for storing wealth: (example: hoard, chest for storing valuables, treasury room). 
        Note for the future: perhaps should separate these into individual variables.`),
    createSeshatProperty("monetary_tokens", "EpistemicState", ["MonetarySystem", "SocialComplexity"], 
        "Tokens",   
        `Tokens used for exchange and trade, e.g. cowrie shells.`)
    );
}                    

function createStandardizationProperties(){
    return WOQL.and(
    createSeshatProperty("ritual_standardization", "Standardization", ["LoosenessTightness"], 
        "Ritual Standardization", 
        `To what extent are ritual structures (including mounds, temples, enclosures, etc.)
         standardized versus architecturally diverse? [AR-TL-21]`),
    createSeshatProperty("home_standardization", "Standardization", ["LoosenessTightness"], 
        "Ritual Standardization", 
        `To what extent are ritual structures (including mounds, temples, enclosures, etc.) 
        standardized versus architecturally diverse? [AR-TL-21]`),
    createSeshatProperty("public_standardization", "Standardization", ["LoosenessTightness"], 
        "Home Standardization", 
        `To what extent are living dwellings standardized versus 
        architecturally diverse? [AR-TL-19]`),
    createSeshatProperty("fineware_standardization", "Standardization", ["LoosenessTightness"], 
        "Fineware Standardization", "To what extent are fineware ceramics standardized? [AR-TL-15]"),
    )
}

function createLegalProperties(){
    return WOQL.and(
        createSeshatProperty("courts", "EpistemicState", ["Legal", "SocialComplexity"], 
        "Courts", 
        `Encodes the historical presence of buildings specialized for legal proceedings only.`),
    createSeshatProperty("formal_legal_code", "EpistemicState", ["Legal", "SocialComplexity"], 
        "Formal Legal Code", 
        `Codes the historical presence of a formal legal code. Usually, 
        but not always written down. If not written down, it is coded as 'present' 
        when a uniform legal system is established by oral transmission 
        (e.g., officials are taught the rules, or the laws are announced in a public space).`),
    createSeshatProperty("judges", "EpistemicState", ["Legal", "SocialComplexity"], 
        "Judges", 
        `Codes the historical presence of specialist judges`),
    createSeshatProperty("judges", "EpistemicState", ["Legal", "SocialComplexity"], 
        "Judges", 
        `Codes the historical presence of specialist judges`),
    createSeshatProperty("professional_lawyers", "EpistemicState", ["Legal", "SocialComplexity"], 
        "Professional Lawyers", 
        `Encodes the historical presence of specialist professional lawyers.`),
    );
}

function createBuildingProperties(){
    return WOQL.and(
    createSeshatProperty("most_costly_building", "Building", ["Scale", "SocialComplexity"], 
        "Most Costly Building", 
        `The most impressive or costly building constructed by the political authority`),
    createSeshatProperty("cost", "decimal", ["Scale", "SocialComplexity"], 
        "Cost", 
        `cost in people-years.`, "Building"),
    createSeshatProperty("extent", "decimal", ["Scale", "SocialComplexity"], 
        "Extent", 
        `Length of building along longest axis in metres`, "Building"),
    createSeshatProperty("extent", "decimal", ["Scale", "SocialComplexity"], 
        "Height", 
        `Height of building in metres`, "Building")
    );
}

function createHierarchyProperties(){
    return WOQL.and(
        createSeshatProperty("administrative_levels", "integer", ["HierarchicalComplexity"], 
        "Administrative Levels", 
        `Number of levels in the administrative hierarchy. 
        <p>An example of hierarchy for a state society could be 
        (5) the overall ruler, (4) provincial/regional governors, 
        (3) district heads, (2) town mayors, (1) village heads. 
        Note that unlike in settlement hierarchy, the people hierarchy is coded here. </p> 
        <p>Archaeological polities are usually coded as 'unknown', unless experts can 
        identified ranks of chiefs or officials independently of the settlement hierarchy.</p>
        <p>Note: Often there are more than one concurrent administrative hierarchy. 
        In the example above the hierarchy refers to the territorial government. 
        In addition, the ruler may have a hierarchically organized central 
        bureaucracy located in the capital. For example, 
        (4)the overall ruler, (3) chiefs of various ministries, 
        (2) mid-level bureaucrats, (1) scribes and clerks. 
        In the narrative paragraph detail what is known about both hierarchies. 
        The machine-readable code should reflect the largest number (the longer chain of command). </p>`),
    createSeshatProperty("military_levels", "integer", ["HierarchicalComplexity"], 
        "Military Levels", 
        `Number of levels in the military hierarchy. 
        <p>Starts with the commander-in-chief and works down to the private (level 1).</p> 
        <p>Even in primitive societies such as simple chiefdoms it is often possible to 
        distinguish at least two levels : a commander and soldiers.
        A complex chiefdom would be coded as having three levels.
        The presence of warrior burials might be the basis for inferring the existence of a military organization. 
        (The lowest military level is always the individual soldier).</p>`),
    createSeshatProperty("religious_levels", "integer", ["HierarchicalComplexity"], 
        "Religious Levels", 
        `Number of levels in the religious hierarchy.
         <P>Starts with the head of the official cult 
        (if present) and works down to the local priest (level 1).</p>`),
    createSeshatProperty("settlement_levels", "integer", ["HierarchicalComplexity"], 
        "Settlement Levels", 
        `This variable records the hierarchy of not just settlement sizes, 
         but also their complexity as reflected in different roles they play within the (quasi)polity.
         As settlements become more populous they acquire more complex functions: transportational 
         (e.g. port); economic (e.g. market); administrative (e.g. storehouse, local government building); 
         cultural (e.g. theatre); religious (e.g. temple), utilitarian (e.g. hospital), monumental 
         (e.g. statues, plazas). <p>Example: (6) Large City 
         (monumental structures, theatre, market, hospital, central government buildings) 
         (5) City (market, theatre, regional government buildings) 
         (4) Large Town (market, administrative buildings)
         (3) Town (administrative buildings, storehouse)) (2) Village (shrine) 
         (1) Hamlet (residential only).</p> <p>In the narrative annotations, the different levels and 
         their functions are listed. A Crude estimate of population sizes is included.
         For example, Large Town (market, temple, administrative buildings): 2,000-5,000 inhabitants. </p>`),
    );
} 

function createBureaucraticProperties(){
    return WOQL.and(
    createSeshatProperty("bureaucrat_income_source", "IncomeSource", ["Public", "BureaucraticSystem"], 
        "Bureaucrat Income Source", 
        `Encodes the primary sources of income for professional bureaucrats / administrators`),
    createSeshatProperty("examination_system", "EpistemicState", ["Public", "BureaucraticSystem"], 
        "Examination System", 
        `Codes the presence of an official Examination System. 
        The paradigmatic example is the Chinese imperial system.`),
    createSeshatProperty("full_time_bureaucrats", "EpistemicState", ["Public", "BureaucraticSystem"], 
        "Full-time Bureaucrats", 
        `Codes the presence of full-time specialist bureaucratic officials.`),
    createSeshatProperty("government_buildings", "EpistemicState", ["BureaucraticSystem", "Public", "Infrastructure"], 
        "Government Buildings", 
        `Codes the historical presence of specialized government administration buildings. 
        These buildings are distinct from the ruler's palace and could be used for document storage, 
        registration offices, minting money, etc. 
        Defense structures also are not included here.`),
    createSeshatProperty("merit_promotion", "EpistemicState", ["BureaucraticSystem", "Public"], 
        "Merit Promotion", 
        `Codes the historical presence of merit promotion. <i>Present</i> means there were regular, 
        institutionalized procedures for promotion based on performance. When exceptional 
        individuals are promoted to the top ranks, in the absence of 
        institutionalized procedures, this does not count (it is encoded elsewhere).`),
    );
} 

function createAgriculturalProperties(){
    return WOQL.and(
        createSeshatProperty("horselike_animals", "EpistemicState", ["Agriculture", "PP"], 
        "Animals (Horse etc)", 
        `IV-4-2-7 Animals:  Horse, donkey (Order: Perissodactyla)`),
    createSeshatProperty("sheeplike_animals", "EpistemicState", ["Agriculture", "PP"], 
        "Animals (Sheep etc)", 
        `IV-4-2-6 Animals: Sheep, cattle, pig, llama, camel (Order: Artiodactyla)`),
    createSeshatProperty("birds", "EpistemicState", ["Agriculture", "PP"], 
        "Birds", 
        `IV-4-2-9 Animals:  Birds (Orders: Galliformes; Anseriformes)`),
    createSeshatProperty("cereals", "EpistemicState", ["Agriculture", "PP"], 
        "Cereals", 
        `IV-4-2-1 Crops: Cereals (Order: Poales)`),      
    createSeshatProperty("fertilizers", "EpistemicState", ["Agriculture", "PP"], 
        "Fertilizers", 
        `IV-4-2-12 Fertilizers (Seshat)`),
    createSeshatProperty("legumes", "EpistemicState", ["Agriculture", "PP"], 
        "Legumes", 
        `IV-4-2-2 Crops: Legumes (Order: Fabales)`),
    createSeshatProperty("multi_cropping", "EpistemicState", ["Agriculture", "PP"], 
        "Multi-cropping", 
        `IV-4-2-11 Multicropping `),
    createSeshatProperty("polyculture", "EpistemicState", ["Agriculture", "PP"], 
        "Polyculture", 
        `IV-4-2-10 Polyculture (Seshat).`),
    createSeshatProperty("regional_crops", "EpistemicState", ["Agriculture", "PP"], 
        "Regional Crops", 
        `IV-4-2-5 Crops: Regionally important subsistence plants`),
    createSeshatProperty("small_mammals", "EpistemicState", ["Agriculture", "PP"], 
        "Small Mammals", 
        `IV-4-2-8 Animals:  Small mammals (Order: Rodentia; Lagomorpha)`),
    createSeshatProperty("squashes", "EpistemicState", ["Agriculture", "PP"], 
        "Squashes", 
        `IV-4-2-4 Crops: Squashes (Order: Curcurbitales)`),
    createSeshatProperty("vegetables", "EpistemicState", ["Agriculture", "PP"], 
        "Vegetables", 
        `IV-4-2-3 Crops: Vegetables (Order: Solanales)`),
    createSeshatProperty("aquatic_mammals", "EpistemicState", ["Fishing", "PP"], 
        "Aquatic Mammals", 
        `IV-4-3-6 Fish: Aquatic mammals (Orders: Pinnipedia; Cetacea)`),
    createSeshatProperty("freshwater_fish", "EpistemicState", ["Fishing", "PP"], 
        "Freshwater Fish", 
        `IV-4-3-4 Fish: Freshwater fish (Class: Osteichthyes)`),
    createSeshatProperty("gathered_herbs", "EpistemicState", ["Agriculture", "PP"], 
        "Gathered Herbs", 
        `IV-4-3-11 Gathered Foods: Wild herbs, leaves, blossoms`),
    createSeshatProperty("hunted_birds", "EpistemicState", ["Hunting", "PP"], 
        "Hunted Birds", 
        `IV-4-3-9 Animals Hunted: Birds and Waterfowl (e.g. Orders: Galliformes; Anseriformes)`),
    createSeshatProperty("insects_grubs_honey", "EpistemicState", ["Agriculture", "PP"], 
        "Insects, Grubs, Honey", 
        `IV-4-3-10 Gathered Foods: Insects, grubs, honey`),
    createSeshatProperty("large_game", "EpistemicState", ["Hunting", "PP"], 
        "Large Game", 
        `IV-4-3-8 Animals Hunted: Large game (e.g. Orders Proboscidea; Perissodactyla; Artiodactyla)`),
    createSeshatProperty("small_game", "EpistemicState", ["Hunting", "PP"], 
        "Small Game", 
        `IV-4-3-7 Animals Hunted: Small game (e.g. Orders Rodentia, Lagomorpha)`),
    createSeshatProperty("marine_reptiles", "EpistemicState", ["Fishing", "PP"], 
        "Marine Reptiles", 
        `IV-4-3-2 Fish: Shellfish (Class: Malacostraca)`),
    createSeshatProperty("mollusks", "EpistemicState", ["Fishing", "PP"], 
        "Mollusks", 
        `IV-4-3-1 Fish: Mollusks (Classes: Bivalvia; Gastropodia)`),
    createSeshatProperty("saltwater_fish", "EpistemicState", ["Fishing", "PP"], 
        "Saltwater fish", 
        `IV-4-3-5 Fish: Saltwater fish (Classes: Chondrichthyes; Osteichthyes)`),
    createSeshatProperty("shellfish", "EpistemicState", ["Fishing", "PP"], 
        "Shellfish", 
        `IV-4-3-1 Fish: Mollusks (Classes: Bivalvia; Gastropodia)`),      
    createSeshatProperty("tree_pith", "EpistemicState", ["Agriculture", "PP"], 
        "Tree Pith", 
        `IV-4-3-12 Gathered Foods: Tree pith, e.g., sago`),
    createSeshatProperty("wild_fruit", "EpistemicState", ["Agriculture", "PP"], 
        "Wild Fruit", 
        `IV-4-3-14 Gathered Foods: Wild fruit, seeds, nuts, berries`),
    createSeshatProperty("wild_roots", "EpistemicState", ["Agriculture", "PP"], 
        "Wild Roots", 
        `IV-4-3-13 Gathered Foods: Wild roots or tubers`),
    createSeshatProperty("agricultural_terracing", "EpistemicState", ["Agriculture", "Infrastructure", "PP"], 
        "Agricultural terracing", 
        `IV-5-2. Agricultural terracing`),
    );
}

function createInternalAffairsProperties(){
    return WOQL.and(
    createSeshatProperty("authority_emphasis", "AuthorityEmphasis", ["InternalAffairs", "PP"], 
        "Authority Emphasis", 
        `Where the emphasis of group authority lies`),
    createSeshatProperty("leader_differentiation", "LeaderDifferentiation", ["InternalAffairs", "PP"], 
        "Leader Differentiation", 
        `How the leaders are differentiated from others`),
    createSeshatProperty("leader_identification", "LeaderIdentification", ["InternalAffairs", "PP"], 
        "Leader Identification", 
        `The ways in which leaders are identified as distinct from commoners`),
    );
}

function createMetaProperties(){
    return WOQL.and(
    createSeshatProperty("references", "CitedWork", [], 
        "References", 
        `The References from the wiki`)
    );
}

function createCeremonialProperties(){
    return WOQL.and(
    createSeshatProperty("calendrical_ceremonies", "EpistemicState", ["Ceremonials", "PP"], 
        "Calendrical Ceremonies", 
        `Calendrical Ceremonies`),
    createSeshatProperty("magical_ceremonies", "EpistemicState", ["Ceremonials", "PP"], 
        "Magical Ceremonies", 
        `Magical or Religious Ceremonies`),
    createSeshatProperty("personal_ceremonies", "EpistemicState", ["Ceremonials", "PP"], 
        "Personal Ceremonies", 
        `Individual sponsored and communally attended ceremonies (e.g., moka, potlatch)`),
    createSeshatProperty("rites_of_passage", "EpistemicState", ["Ceremonials", "PP"], 
        "Rites of passage", 
        `Rites of passage (including birth, marriage, and death ceremonies)`)
    );
}

function createFoodStorageProperties(){
    return WOQL.and(
    createSeshatProperty("food_containers", "EpistemicState", ["FoodStorage", "PP"], 
        "Food Containers", 
        `IV-4-1-2 Containers for food storage`),
    createSeshatProperty("food_preservation", "EpistemicState", ["FoodStorage", "PP"], 
        "Food Preservation", 
        `IV-4-1-1 Food preservation techniques`),
    createSeshatProperty("household_storage", "EpistemicState", ["FoodStorage", "PP"], 
        "Household Storage", 
        `IV-4-1-3 Household food storage facilities`),
    createSeshatProperty("supra_village_storage", "EpistemicState", ["FoodStorage", "PP"], 
        "Supra-Village Storage", 
        `IV-4-1-5 Supra-village food facilities.`),
    createSeshatProperty("village_storage", "EpistemicState", ["FoodStorage", "PP"], 
        "Village Storage", 
        `IV-4-1-4 Village food storage facilities`),
    );
}

function createProfessionsProperties(){
    return WOQL.and(
        createSeshatProperty("military_officers", "EpistemicState", ["Professions", "Military"], 
        "Military Officers", 
        `Full-time specialist military officers.`),
    createSeshatProperty("professional_soldiers", "EpistemicState", ["Professions", "Military"], 
        "Soldiers", 
        `Full-time specialist paid soldiers.`),
    createSeshatProperty("priests", "EpistemicState", ["Professions", "Religion"], 
        "Priesthood", 
        `Codes the presence of full-time specialist religious officials.`),
    createSeshatProperty("bureaucrats", "EpistemicState", ["Professions", "BureaucraticSystem"], 
        "Full-time Bureaucrats", 
        `Codes the presence of full-time specialist bureaucratic officials.`),
    );
}
 
function createHousingProperties(){
    return WOQL.and(
    createSeshatProperty("accommodation_for_guests", "EpistemicFrequency", ["HousingVariation", "PP"], 
        "Accommodation for guests", 
        `Houses with accommodations for guests`),
    createSeshatProperty("accommodation_for_servants", "EpistemicFrequency", ["HousingVariation", "PP"], 
        "Accommodation for servants", 
        `Houses with accommodations for servants `),
    createSeshatProperty("external_decoration", "EpistemicFrequency", ["HousingVariation", "PP"], 
        "External Decoration", 
        `Houses with permanent external decoration`),
    createSeshatProperty("internal_decoration", "EpistemicFrequency", ["HousingVariation", "PP"], 
        "Internal Decoration", 
        `Houses with permanent internal decoration`),
    createSeshatProperty("multiple_public_areas", "EpistemicFrequency", ["HousingVariation", "PP"], 
        "Multiple Public Areas", 
        `Houses with multiple public or gathering areas`),
    createSeshatProperty("multiple_wings", "EpistemicFrequency", ["HousingVariation", "PP"], 
        "Multiple Wings", 
        `Houses with multiple wings, atriums, patios`),
    createSeshatProperty("special_storage", "EpistemicFrequency", ["HousingVariation", "PP"], 
        "Special Storage", 
        `Houses with specialized storage facilities`),
    createSeshatProperty("specialized_craft_production", "EpistemicFrequency", ["HousingVariation", "PP"], 
        "Specialized Craft Production", 
        `Houses with specialized craft production facilities`),
    );
}

function createCommunityIntegrationProperties(){
    return WOQL.and(
    createSeshatProperty("integration_by_common_identity", "EpistemicState", ["CommunityIntegration", "PP"], 
        "Integration by common identity", 
        `Community integration by common identity, dialect, subculture`),
    createSeshatProperty("integration_by_common_residence", "EpistemicState", ["CommunityIntegration", "PP"], 
        "Integration by common residence", 
        `Community integration by common residence `),
    createSeshatProperty("integration_by_kin", "EpistemicState", ["CommunityIntegration", "PP"], 
        "Integration by kin", 
        `Community integration by overlapping kin ties`),
    createSeshatProperty("integration_by_political_ties", "EpistemicState", ["CommunityIntegration", "PP"], 
        "Integration by political ties", 
        `Community integration by common political ties`),
    createSeshatProperty("integration_by_religion", "EpistemicState", ["CommunityIntegration", "PP"], 
        "Integration by religion", 
        `Community integration by common religious ties`),
    createSeshatProperty("integration_by_shared_status", "EpistemicState", ["CommunityIntegration", "PP"], 
        "Integration by shared status", 
        `Community integration by common social or economic status`),
    );
}

function createSpecializedBuildingsProperties(){
    return WOQL.and(
    createSeshatProperty("public_buildings", "EpistemicState", ["Public", "SpecializedBuildings"], 
        "Communal Buildings", 
        `This encodes the historical presence of Communal buildings. It distinguishes between 
        settlements that consist of only private households (coded 'absent') and settlements 
        where there are communal buildings which could be used for a variety of uses (coded 'present').`),
    createSeshatProperty("special_houses", "EpistemicState", ["SpecializedBuildings"], 
        "Special Purpose Houses", 
        `Encodes the historical presence of houses that were used in
         a distinctive or special manner. This code reflects differentiation between houses.`),
    createSeshatProperty("symbolic_building", "EpistemicState", ["SpecializedBuildings"], 
        "Symbolic Buildings", 
        `Encodes the historical presence of specialized purely symbolic buildings. 
        <P>These are non-utilitarian constructions that display symbols, or are themselves 
        symbols of the community or polity (or a ruler as a symbol of the polity). 
        Examples include Taj Mahal mausoleum, Trajan's Column, Ashoka's Pillars, Qin Shih Huang's Terracota Army, 
        the Statue of Liberty. Has to be constructed by humans, so sacred groves or mountains 
        are not symbolic buildings. A palace is also not a symbolic building, because it has other, 
        utilitarian functions (houses the ruler).</P>`),
    createSeshatProperty("fun_houses", "EpistemicState", ["SpecializedBuildings", "Entertainment"], 
        "Entertainment Buildings", 
        `Encodes the historical presence of specialist entertainment buildings. These include theaters, arenas, race tracks.`),
    createSeshatProperty("libraries", "EpistemicState", ["SpecializedBuildings",  "Writing"], 
        "Knowledge / Information Buildings", 
        `Encodes the historical presence of specialist information / knowledge buildings. 
        These include astronomic observatories, libraries, and museums.`),
    createSeshatProperty("utilities", "EpistemicState", ["SpecializedBuildings", "Infrastructure"], 
        "Utilitarian Public Buildings", 
        `Encodes the historical presence of public utilities. Typical examples include aqueducts, 
        sewers, and granaries (which are also included as separate variables). In the narrative annotations, 
        examples of utilitarian buildings and the most impressive/costly/large ones are included.`),
    createSeshatProperty("emporia", "EpistemicState", ["SpecializedBuildings"], 
        "Trading Emporia", 
        `Encodes the historical presence of trading settlements characterised by their peripheral locations, 
        on the shore at the edge of a polity, a lack of infrastructure (typically those in Europe contained no churches) 
        and often of a short-lived nature. They include isolated caravanserai along trade routes.`),
    createSeshatProperty("enclosures", "EpistemicState", ["SpecializedBuildings"], 
        "Enclosure", 
        `Encodes the historical presence of 'enclosures': a clearly demarcated special-purpose area. 
        It can be separated from surrounding land by earthworks (including banks or ditches), walls, 
        or fencing. It may be as small as a few meters across, or encompass many hectares. It is non-residential,
         but could serve numerous purposes, both practical (animal pens) as well as religious and ceremonial.`),
    createSeshatProperty("other_site", "EpistemicState", ["SpecializedBuildings"], 
         "Other Site", 
         `Encodes the historical presence of specialised non-residential sites. 
         A description of the site is provided in the notes.`),
     );
}

function createTransportProperties(){
    return WOQL.and(
    createSeshatProperty("roads", "EpistemicState", ["Transport"], 
        "Roads", 
        `Encodes the historical presence of roads that were either built or 
        maintained by the political authority.`),
    createSeshatProperty("bridges", "EpistemicState", ["Transport"], 
        "Bridges", 
        `Encodes the historical presence of bridges that were either built or
        maintained by the political authority.`),
    createSeshatProperty("canals", "EpistemicState", ["Transport"], 
        "Canals", 
        `Encodes the historical presence of canals or artificial waterways 
        that were built or maintained by the political authority.`),
    createSeshatProperty("ports", "EpistemicState", ["Transport", "Naval"], 
        "Ports", 
        `Encodes the historical presence of ports that were either built or maintained by the political authority. 
        These include river ports. Direct historical or archaeological evidence of Ports is absent 
        when no port has been excavated or all evidence of such has been obliterated. Indirect historical 
        or archaeological data is absent when there is no evidence that suggests that the polity engaged
        in maritime or riverine trade, conflict, or transportation, such as evidence of merchant shipping, 
        administrative records of customs duties, or evidence that at the same period of time a trading 
        relation in the region had a port (for example, due to natural processes, there is little evidence
        of ancient ports in delta Egypt at a time we know there was a timber trade with the Levant). 
        When evidence for the variable itself is available the code is 'present.' When other forms of evidence 
        suggests the existence of the variable (or not) the code may be 'inferred present' (or 'inferred absent').
        When indirect evidence is <i>not</i> available the code will be either absent, 
        temporal uncertainty, suspected unknown, or unknown.`),
    );
}


function createMetricProperties(){
    return WOQL.and(
    createSeshatProperty("length_unit", "EpistemicState", ["MeasurementSystem"], 
        "Length", 
        `Encodes the historical presence of a standard way of measuring length. 
        For example: feet, miles, kilometers, inches`),
    createSeshatProperty("area_unit", "EpistemicState", ["MeasurementSystem"], 
        "Area", 
        `Encodes the historical presence of a standard way of measuring areas. 
        For example: squared feet, hectares`),
    createSeshatProperty("volume_unit", "EpistemicState", ["MeasurementSystem"], 
        "Volume", 
        `Encodes the historical presence of a standard way of measuring volume. For example: pint, litre`),
    createSeshatProperty("weight_unit", "EpistemicState", ["MeasurementSystem"], 
        "Weight", 
        `Encodes the historical presence of a standard way of measuring weight. For example: pounds, kilograms`),
    createSeshatProperty("time_unit", "EpistemicState", ["MeasurementSystem"], 
        "Time", 
        `Encodes the historical presence of a standard way of measuring time.
         A natural unit such as 'day' doesn't qualify. 
        Nor does a vague one like 'season'. Archaeological evidence is a clock (e.g., sundial)`),
    createSeshatProperty("geometrical_unit", "EpistemicState", ["MeasurementSystem"], 
        "Geometrical", 
        `Encodes the historical presence of a standard way of measuring geometries - for example: degrees.`),
    createSeshatProperty("advanced_unit", "EpistemicState", ["MeasurementSystem"], 
        "Other", 
        `More advanced measurements: temperature, force, astronomical.`)
    )
}

function createWritingProperties(){
    return WOQL.and(
    createSeshatProperty("mnemonics", "EpistemicState", ["WritingSystem"], 
        "Mnemonic Devices", 
        `Marks that serve as memory devices that help people recall larger pieces of information`),
    createSeshatProperty("non_written_records", "EpistemicState", ["WritingSystem"], 
        "Non-written Records", 
        `Knoweldge representation systems that do not use writing - using color, material, etc to convey meaning. e.g., quipu https://en.wikipedia.org/wiki/Quipu`),
    createSeshatProperty("script", "EpistemicState", ["WritingSystem"], 
        "Script", 
        `A system for writing symbols that have meaning attached to them. 
        (note that if written records are present, then so is script by defintion)`),
    createSeshatProperty("written_records", "EpistemicState", ["WritingSystem"], 
        "Written Records", 
        `More than short and fragmentary inscriptions, such as found on tombs or runic stones. 
        There must be several sentences strung together, at the very minimum. For example, 
        royal proclamations from Mesopotamia and Egypt qualify as written records"@en ;`),
    createSeshatProperty("non_phonetic", "EpistemicState", ["WritingSystem"], 
        "Non-phonetic Writing", 
        `this refers to the kind of script - non-phonetic scripts do not represent the sound of 
        the word but attach symbols to the meaning.`),
    createSeshatProperty("phonetic", "EpistemicState", ["WritingSystem"], 
        "Phonetic Alphabet", 
        `this refers to the kind of script - phonetic scripts have alphabets 
        with letters and combinations of letters which represent sounds.`),
    createSeshatProperty("lists", "EpistemicState", ["WritingGenre"], 
        "Lists and Tables", 
        `Written lists, tables and classifications (e.g. debt lists, tax-lists...)`),
        createSeshatProperty("calendar", "EpistemicState", ["WritingGenre"], 
        "Calendar", 
        `Written calendar or dating system`),
    createSeshatProperty("sacred_texts", "EpistemicState", ["WritingGenre", "Religion"], 
        "Sacred Texts", 
        `Sacred Texts originate from supernatural agents (deities), or are directly inspired by them.`),
    createSeshatProperty("religious_literature", "EpistemicState", ["WritingGenre", "Religion"], 
        "Religious Literature", 
        `Religious literature differs from the sacred texts. For example, it may provide commentary 
        on the sacred texts, or advice on how to live a virtuous life.`),
    createSeshatProperty("manuals", "EpistemicState", ["WritingGenre"], 
        "Practical Literature", 
        `Practical guides and manuals to help people do useful stuff. 
        For example manuals on agriculture, military, cooking, etc`),
    createSeshatProperty("history", "EpistemicState", ["WritingGenre"], 
        "History", 
        `Written history existed`),
    createSeshatProperty("philosophy", "EpistemicState", ["WritingGenre"], 
        "Philosophy", 
        `Written philosophical treatises`),
    createSeshatProperty("science", "EpistemicState", ["WritingGenre", "Science"], 
        "Science", 
        `Written scientific works, including mathematics, natural sciences, social sciences`),
    createSeshatProperty("fiction", "EpistemicState", ["WritingGenre"], 
        "Fiction", 
        `Written fictional works - including poetry, novels, short-stories, etc 
        (poetry will be factored out in future versions of the codebook.`))
}

function createPostalProperties(){
    return WOQL.and(
    createSeshatProperty("couriers", "EpistemicState", ["PostalSystem"], 
        "Couriers", 
        `Full-time professional couriers.`),
    createSeshatProperty("post_offices", "EpistemicState", ["PostalSystem", "SpecializedBuildings"], 
        "Postal Stations", 
        `Specialized buildings exclusively devoted to the postal service.`),
    createSeshatProperty("private_mail", "EpistemicState", ["PostalSystem"], 
        "General Service", 
        `A postal service that not only serves the ruler's needs, but carries mail for private citizens.`),
    )
}

function createInfrastructureProperties(){
    return WOQL.and(
        createSeshatProperty("fortifications", "EpistemicState", ["Military", "Infrastructure", "PP"], 
        "Fortifications", 
        `IV-5-7. Fortifications.`),
    createSeshatProperty("sewage", "EpistemicState", ["Infrastructure", "PP"], 
        "Sewage", 
        `IV-5-4. Sewage management systems`),
    createSeshatProperty("irrigation", "EpistemicState", ["Infrastructure", "Public"], 
        "Irrigation Systems", 
        `Encodes the historical presence of irrigation systems.`),
    createSeshatProperty("potable_water", "EpistemicState", ["Infrastructure", "Public"], 
        "Drinking Water Supply", 
        `Encodes the historical presence of systems to supply drinking water to the public.`),
    createSeshatProperty("markets", "EpistemicState", ["Infrastructure"], 
        "Markets", 
        `Encodes the historical presence of markets.`),
    createSeshatProperty("siloes", "EpistemicState", ["Infrastructure", "Construction", "Food"], 
        "Food Storage Sites", 
        `The historical presence of specialized structures (grain siloes...) for storing food.`),
    createSeshatProperty("special_sites", "EpistemicState", ["Infrastructure"], 
        "Special Sites", 
        `The types of special sites that are associated with the polity - 
        primarily useful for coding archaneologically known societies.`),
    createSeshatProperty("ceremonial_sites", "EpistemicState", ["Ritual", "Infrastructure"], 
        "Ceremonial Site", 
        `Encodes the historical presence of sites that were specifically used for ceremonies.`),
    createSeshatProperty("burial_sites", "EpistemicState", ["Burial", "Infrastructure"], 
        "Burial Site", 
        `Encodes the historical presence of burial sites, dissociated 
        from settlement habitation, with monumental features.`),
    createSeshatProperty("mines", "EpistemicState", ["Mining", "Infrastructure"], 
        "Mine or Quarry", 
        `Encodes the historical presence of mines or quarries within the political authority.`),
    );
}

function createBurialProperties(){
    return WOQL.and(
    createSeshatProperty("animal_sacrifices", "EpistemicFrequency", ["BurialVariation", "PP"], 
        "Animal Sacrifices", 
        `Burials with animal sacrifices`),
    createSeshatProperty("exotic_objects", "EpistemicFrequency", ["BurialVariation", "PP"], 
        "Exotic Objects", 
        `Burials with exotic goods (rare or foreign materials and objects)`),
    createSeshatProperty("human_sacrifices", "EpistemicFrequency", ["BurialVariation", "PP"], 
        "Human Sacrifices", 
        `Burials with human sacrifices`),
    createSeshatProperty("personal_ornaments", "EpistemicFrequency", ["BurialVariation", "PP"], 
        "Personal Ornaments", 
        `Burials with personal ornaments`),
    createSeshatProperty("ritual_objects", "EpistemicFrequency", ["BurialVariation", "PP"], 
        "Ritual Objects", 
        `Burials with ritual objects`),
    createSeshatProperty("sumptuary_objects", "EpistemicFrequency", ["BurialVariation", "PP"], 
        "Sumptuary Objects", 
        `Burials with sumptuary goods (symbols of power or authority)`),
    createSeshatProperty("tombs_or_mausoleums", "EpistemicFrequency", ["BurialVariation", "PP"], 
        "Tombs or Mausoleums", 
        `Burials in tombs or mausoleums`),
    createSeshatProperty("utilitarian_goods", "EpistemicFrequency", ["BurialVariation", "PP"], 
        "Utilitarian Goods", 
        `Burials with utilitarian goods (ceramics, tools, etc.)`),
    createSeshatProperty("wealth_objects", "EpistemicFrequency", ["BurialVariation", "PP"], 
        "Wealth Objects", 
        `Burials with wealth objects (fineware ceramics, gold/silver objects, etc.)`),  
    );
}