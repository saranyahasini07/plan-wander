import { Destination } from '../types/travel';
import destKyotoImg from '../assets/images/dest_kyoto_pagoda_1790596894061.jpg';
import destAmalfiImg from '../assets/images/dest_amalfi_coast_1790596912714.jpg';
import destSwissImg from '../assets/images/dest_swiss_alps_1790596927073.jpg';

export const DESTINATIONS: Destination[] = [
  // 🇮🇳 INDIA — 10 DESTINATIONS
  {
    id: 'goa',
    name: 'Goa',
    country: 'India',
    region: 'Konkan Coast, South West India',
    tagline: 'Golden beaches, Portuguese heritage havelis & vibrant coastal vibes',
    description: 'India\'s quintessential coastal paradise, celebrated for golden palm-fringed Arabian Sea shores, UNESCO-listed 16th-century Portuguese churches, vibrant spice plantations, river cruises, and succulent coastal seafood.',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    coordinates: [15.2993, 74.1240],
    popularInterests: ['beaches', 'historical', 'nightlife', 'food', 'photography', 'adventure'],
    startingPricePerDay: 65,
    bestTime: {
      bestMonths: ['November', 'December', 'January', 'February'],
      peakSeason: 'Mid-December – January (Sunburn Festival, New Year Beach Galas)',
      offSeason: 'June – September (Lush romantic monsoon season, waterfalls at their peak)',
      shoulderSeason: 'October & March (Warm sunshine, pleasant breezes, fewer crowds)',
      weatherSummary: 'Tropical coastal climate. Winters are warm and breezy (20-30°C) with clear blue skies.',
      avgTempC: { high: 31, low: 21 },
      rainfallMm: 25,
      crowdLevel: 'High',
      priceDifferencePercent: 'Peak holiday week rates (Dec 20 – Jan 5) can be 50%–70% higher.',
      majorFestivals: [
        { name: 'Goa Carnival', month: 'February', description: 'Vibrant street float parade with King Momo, live music, and samba dancing.' },
        { name: 'Feast of St. Francis Xavier', month: 'December', description: 'Grand pilgrimage and festive fair at Old Goa Basilica of Bom Jesus.' },
        { name: 'Shigmo Festival', month: 'March', description: 'Traditional Goan Hindu spring festival with folk dance processions and colors.' }
      ],
      seasonalAttractions: [
        'Dudhsagar Waterfalls jeep safari and natural jungle swimming pools',
        'Sunset boat charter & dolphin spotting at Palolem and Butterfly Beach',
        'Spice plantation walking tour with traditional banana-leaf Goan lunch'
      ],
      tipsForVisitors: 'Rent a self-drive scooter or Thar to explore serene South Goa beaches (Agonda, Palolem) away from bustling North Goa.'
    }
  },
  {
    id: 'kashmir',
    name: 'Kashmir',
    country: 'India',
    region: 'Jammu & Kashmir, Himalayas',
    tagline: 'Paradise on Earth, tranquil Dal Lake houseboats & snow-clad peaks',
    description: 'Revered for centuries as heaven on Earth, Kashmir unfolds with tranquil carved cedar houseboats on Dal Lake, blooming terraced Mughal gardens, floating vegetable bazaars, saffron fields of Pampore, and majestic alpine valleys in Gulmarg and Pahalgam.',
    heroImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    coordinates: [34.0837, 74.7973],
    popularInterests: ['mountains', 'nature', 'photography', 'historical', 'culture' as any, 'family'],
    startingPricePerDay: 85,
    bestTime: {
      bestMonths: ['March', 'April', 'May', 'September', 'October'],
      peakSeason: 'April – May (Asia\'s largest Tulip Festival) & Dec – Feb (Gulmarg Ski Season)',
      offSeason: 'July – August (Occasional monsoon rains in lower valleys)',
      shoulderSeason: 'September – November (Golden Autumn Chinar trees and crisp saffron harvest)',
      weatherSummary: 'Sub-alpine climate. Spring brings blooming orchards; summers are pleasant (18-28°C); winters bring heavy snowfall in Gulmarg.',
      avgTempC: { high: 22, low: 10 },
      rainfallMm: 60,
      crowdLevel: 'Moderate',
      priceDifferencePercent: 'Tulip season and ski season rates can be 40% higher.',
      majorFestivals: [
        { name: 'Indira Gandhi Memorial Tulip Festival', month: 'April', description: 'Over 1.5 million tulips in 60+ varieties blooming against the Zabarwan range.' },
        { name: 'Saffron Harvest Festival', month: 'October', description: 'Purple crocus saffron blossom picking in historic Pampore fields.' },
        { name: 'Shikara Festival', month: 'July', description: 'Colorful traditional wooden boat races and water carnival on Dal Lake.' }
      ],
      seasonalAttractions: [
        'Gulmarg Gondola ride to Apharwat Peak at 13,780 ft (Phase 1 & 2)',
        'Sunrise Dal Lake Shikara ride to the 150-year-old floating vegetable market',
        'Pahalgam Betaab Valley and Aru Valley pony trails along the Lidder River'
      ],
      tipsForVisitors: 'Spend at least one night aboard a luxury handcrafted cedarwood houseboat on tranquil Nigeen Lake for an authentic royal experience.'
    }
  },
  {
    id: 'manali',
    name: 'Manali',
    country: 'India',
    region: 'Himachal Pradesh, Pir Panjal Himalayas',
    tagline: 'Pine-scented valleys, roaring Beas river & Himalayan mountain passes',
    description: 'A legendary Himalayan resort town surrounded by towering deodar pine forests and snow-capped peaks, offering exhilarating paragliding in Solang Valley, Rohtang Pass glaciers, hot sulfur springs, and cozy Old Manali cafés.',
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    coordinates: [32.2396, 77.1887],
    popularInterests: ['mountains', 'adventure', 'nature', 'photography', 'family'],
    startingPricePerDay: 60,
    bestTime: {
      bestMonths: ['October', 'November', 'December', 'March', 'April', 'May'],
      peakSeason: 'May – June (Summer Himalayan escape) & Dec – Jan (Fresh snow & skiing)',
      offSeason: 'July – August (Monsoon season with occasional mountain landslides)',
      shoulderSeason: 'September – November (Lush apple orchards, crisp air, clear mountain vistas)',
      weatherSummary: 'Crisp mountain alpine climate. Summer daytime temperatures hover around 20-25°C, while winters dip below freezing.',
      avgTempC: { high: 20, low: 8 },
      rainfallMm: 70,
      crowdLevel: 'High',
      priceDifferencePercent: 'May/June and New Year hotel rates carry a 40%–50% peak premium.',
      majorFestivals: [
        { name: 'Manali Winter Carnival', month: 'January', description: 'Celebration of Himachali folk dance, skiing competitions, and local craft fairs.' },
        { name: 'Hadimba Devi Fair', month: 'May', description: 'Centuries-old pagoda temple fair with traditional brass horns and wooden palanquins.' },
        { name: 'Kullu Dussehra', month: 'October', description: 'Seven-day grand historic carnival honoring over 200 hill deities.' }
      ],
      seasonalAttractions: [
        'Rohtang Pass & Atal Tunnel drive into the breathtaking Lahaul Valley',
        'Solang Valley paragliding, ATV rides, and winter ski slopes',
        'Jogini Waterfall hike winding past traditional Himachali apple orchards'
      ],
      tipsForVisitors: 'Book Rohtang Pass permits in advance online, and explore the rustic cobblestone lanes of Old Manali for artisan trout cafés.'
    }
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    country: 'India',
    region: 'Ladakh, Trans-Himalayan Plateau',
    tagline: 'High-altitude desert, surreal turquoise lakes & cliffside monasteries',
    description: 'The iconic "Land of High Passes", renowned for its mesmerizing high-altitude desert moonscapes, centuries-old Buddhist gompas perched on stark ridges, double-humped camel safaris in Nubra Valley, and the breathtaking color-shifting waters of Pangong Tso.',
    heroImage: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    coordinates: [34.1526, 77.5771],
    popularInterests: ['mountains', 'adventure', 'temples', 'photography', 'nature', 'hidden_gem'],
    startingPricePerDay: 80,
    bestTime: {
      bestMonths: ['June', 'July', 'August', 'September'],
      peakSeason: 'June – August (All high mountain passes open, sunny blue skies, monastic festivals)',
      offSeason: 'November – April (Extreme sub-zero winter temperatures, frozen lakes)',
      shoulderSeason: 'May & September (Fewer travelers, golden autumn poplars in September)',
      weatherSummary: 'Cold high-altitude desert. Summer days are bright and sunny (18-25°C), while nights are cool (5-10°C).',
      avgTempC: { high: 22, low: 7 },
      rainfallMm: 15,
      crowdLevel: 'Moderate',
      priceDifferencePercent: 'Peak July/August boutique camp rates are 35% higher.',
      majorFestivals: [
        { name: 'Hemis Monastery Festival', month: 'July', description: 'Famous Cham masked dances commemorating Guru Padmasambhava with giant thangkas.' },
        { name: 'Ladakh Festival', month: 'September', description: 'Grand cultural showcase in Leh with archery tournaments, polo, and masked dances.' },
        { name: 'Thiksey Gustor', month: 'November', description: 'Sacred monastic rituals with traditional horns and lama dances in Thiksey Gompa.' }
      ],
      seasonalAttractions: [
        'Pangong Tso & Tso Moriri high-altitude saltwater lakes reflecting azure skies',
        'Nubra Valley white sand dunes at Hunder with double-humped Bactrian camels',
        'Crossing Khardung La, one of the world\'s highest motorable passes at 17,982 ft'
      ],
      tipsForVisitors: 'Rest completely for the first 24 to 36 hours upon arrival in Leh to acclimatize to the 3,500m elevation before strenuous activities.'
    }
  },
  {
    id: 'kerala',
    name: 'Kerala',
    country: 'India',
    region: 'South India, Malabar Coast',
    tagline: 'God\'s Own Country, tranquil backwaters & emerald tea hills',
    description: 'A tropical wonderland famed for serene private houseboat cruises along the palm-lined lagoons of Alleppey, misty organic tea estates of Munnar, wildlife boat safaris in Periyar, and restorative Ayurvedic wellness retreats.',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    coordinates: [9.9312, 76.2673],
    popularInterests: ['nature', 'beaches', 'food', 'photography', 'historical', 'family'],
    startingPricePerDay: 70,
    bestTime: {
      bestMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
      peakSeason: 'December – January (Festive holidays, cool Munnar hills, snake boat races)',
      offSeason: 'June – August (Monsoon season — renowned globally for authentic Ayurvedic rejuvenation)',
      shoulderSeason: 'September – November & March (Pleasant tropical warmth, green post-monsoon landscapes)',
      weatherSummary: 'Tropical coastal climate. Winters are pleasantly warm (24-30°C) with refreshing sea breezes.',
      avgTempC: { high: 30, low: 22 },
      rainfallMm: 40,
      crowdLevel: 'Moderate',
      priceDifferencePercent: 'Holiday luxury houseboat charters carry a 35%–45% December premium.',
      majorFestivals: [
        { name: 'Onam Harvest Festival', month: 'August – September', description: 'Grand homecoming festival with floral carpets (Pookkalam) and 26-dish Onam Sadya.' },
        { name: 'Nehru Trophy Snake Boat Race', month: 'August', description: 'Thrilling regatta of 100-oared Chundan Vallam boats slicing through Punnamada Lake.' },
        { name: 'Thrissur Pooram', month: 'April – May', description: 'Spectacular temple festival with caparisoned elephants and world-famous Ilanjithara Melam percussion.' }
      ],
      seasonalAttractions: [
        'Alleppey to Kumarakom overnight private Kettuvallam backwater cruise',
        'Kolukkumalai Sunrise tea trek in Munnar (World\'s highest organic tea plantation)',
        'Kathakali classical drama and Kalaripayattu martial arts demonstration in Fort Kochi'
      ],
      tipsForVisitors: 'Book a certified eco-friendly houseboat that cruises tranquil village canals rather than only main crowded waterways.'
    }
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    country: 'India',
    region: 'Rajasthan, The Royal Desert Realm',
    tagline: 'The Pink City, majestic hilltop forts & terracotta palaces',
    description: 'The regal capital of Rajasthan, steeped in royal Rajput history, commanding hilltop citadels like Amber Fort, the 953 filigree windows of Hawa Mahal, the celestial instruments of Jantar Mantar, and bustling gemstone bazaars.',
    heroImage: 'https://images.unsplash.com/photo-1603262110263-fb010d6e59d4?auto=format&fit=crop&w=1200&q=80',
    coordinates: [26.9124, 75.7873],
    popularInterests: ['historical', 'shopping', 'food', 'photography', 'family', 'temples'],
    startingPricePerDay: 65,
    bestTime: {
      bestMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
      peakSeason: 'December – January (Crisp sunny desert winter, Jaipur Literature Festival)',
      offSeason: 'May – July (Hot desert summer with afternoon temperatures reaching 40°C+)',
      shoulderSeason: 'August – September (Monsoon rains bring lush greenery to the Aravalli hills)',
      weatherSummary: 'Semi-arid desert climate. Winters are sunny and delightful (12-25°C) with cool evenings.',
      avgTempC: { high: 25, low: 10 },
      rainfallMm: 10,
      crowdLevel: 'High',
      priceDifferencePercent: 'Winter heritage palace hotel rates are roughly 40% higher than summer.',
      majorFestivals: [
        { name: 'Jaipur Literature Festival', month: 'January', description: 'The world\'s largest free literary festival hosted at the historic Diggi Palace.' },
        { name: 'Jaipur Elephant & Holi Festival', month: 'March', description: 'Joyful celebration of colors, folk dances, and royal procession.' },
        { name: 'Teej Festival', month: 'August', description: 'Historic procession of Goddess Parvati through the Pink City lanes with folk dancers.' }
      ],
      seasonalAttractions: [
        'Amber Fort & Sheesh Mahal mirror hall illumination and sound-and-light show',
        'Sunrise photography session outside the honeycomb façade of Hawa Mahal',
        'Nahargarh Fort sunset view overlooking the sprawling illuminated Pink City'
      ],
      tipsForVisitors: 'Visit Hawa Mahal early in the morning before 8:30 AM to capture golden sunlight reflecting off the pink sandstone.'
    }
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    country: 'India',
    region: 'Rajasthan, Mewar Region',
    tagline: 'The City of Lakes, white marble palaces & romantic boat cruises',
    description: 'Hailed as the Venice of the East, Udaipur radiates romance with pristine white palaces floating on Lake Pichola, intricate marble havelis, the magnificent City Palace of Mewar, and sunset cruises against the Aravalli hills.',
    heroImage: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=80',
    coordinates: [24.5854, 73.7125],
    popularInterests: ['historical', 'photography', 'food', 'nature', 'family'],
    startingPricePerDay: 75,
    bestTime: {
      bestMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
      peakSeason: 'November – February (Clear skies, lake breezes, royal wedding season)',
      offSeason: 'April – June (Warm summer weather)',
      shoulderSeason: 'July – September (Monsoons replenish the lakes, Aravallis turn emerald green)',
      weatherSummary: 'Desert-lake microclimate. Winters offer warm sunshine and cool, romantic nights (10-24°C).',
      avgTempC: { high: 24, low: 11 },
      rainfallMm: 12,
      crowdLevel: 'High',
      priceDifferencePercent: 'Lakeside heritage suites carry a 45% winter peak premium.',
      majorFestivals: [
        { name: 'Mewar Spring Festival', month: 'March – April', description: 'Vibrant lakeside processions, traditional boat displays, and fireworks over Pichola.' },
        { name: 'Udaipur World Music Festival', month: 'February', description: 'Eclectic global musicians performing across serene lake piers and royal courtyards.' },
        { name: 'Shilpgram Crafts Mela', month: 'December', description: 'Celebration of rural arts, handicrafts, and folk performers from across India.' }
      ],
      seasonalAttractions: [
        'Private solar boat cruise to Jag Mandir Island Palace on Lake Pichola at sunset',
        'Exploring the City Palace museum, Zenana Mahal, and antique crystal gallery',
        'Evening Dharohar Rajasthani folk dance and puppet performance at Bagore Ki Haveli'
      ],
      tipsForVisitors: 'Reserve a lakeside table at Ambrai or Upre by 1959 ahead of time for stunning illuminated views of the City Palace across the water.'
    }
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    country: 'India',
    region: 'Uttar Pradesh, Holy Ganges Valley',
    tagline: 'Ancient spiritual capital, sacred Ganga Ghats & eternal hymns',
    description: 'One of the world\'s oldest continuously inhabited sacred cities, pulsating with spiritual devotion, morning sunrise rowing boats gliding past 84 stone ghats, evening Ganga Maha Aarti at Dashashwamedh Ghat, and timeless Banarasi silk weavers.',
    heroImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
    coordinates: [25.3176, 82.9739],
    popularInterests: ['historical', 'temples', 'culture' as any, 'photography', 'food', 'hidden_gem'],
    startingPricePerDay: 55,
    bestTime: {
      bestMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
      peakSeason: 'November (Dev Deepawali — when a million earthen lamps illuminate the river)',
      offSeason: 'May – June (Hot Indo-Gangetic summer plains)',
      shoulderSeason: 'July – September (High monsoon water levels, dramatic misty river views)',
      weatherSummary: 'Subtropical river basin. Winters bring cool morning mists and pleasant afternoon sun (10-22°C).',
      avgTempC: { high: 23, low: 9 },
      rainfallMm: 15,
      crowdLevel: 'High',
      priceDifferencePercent: 'Dev Deepawali rates double due to global traveler influx.',
      majorFestivals: [
        { name: 'Dev Deepawali', month: 'November (Kartik Purnima)', description: 'Over one million earthen oil lamps (diyas) illuminate all 84 ghats creating a river of stars.' },
        { name: 'Maha Shivratri', month: 'February – March', description: 'Massive devotional night procession to the sacred golden spire of Kashi Vishwanath.' },
        { name: 'Ganga Mahotsav', month: 'November', description: 'Classical Indian music, kathak dance, and wrestling bouts along the sacred riverbanks.' }
      ],
      seasonalAttractions: [
        'Dawn rowing boat from Assi Ghat to Manikarnika Ghat witnessing sacred morning prayers',
        'Grand evening Ganga Aarti ceremony with multi-tiered brass oil lamps and conch shells',
        'Excursion to Sarnath Deer Park where Lord Buddha delivered his first sermon in 528 BCE'
      ],
      tipsForVisitors: 'Walk the pedestrian stone ghats at dawn from Assi to Dashashwamedh to experience the serene rhythm of morning prayers before the city awakens.'
    }
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    country: 'India',
    region: 'Northeast India, Khasi & Jaintia Hills',
    tagline: 'Living Root Bridges, roaring cascades & crystal-clear Umngot waters',
    description: 'The "Abode of Clouds", featuring bio-engineered double-decker living root bridges entwined by the Khasi people, roaring plunge waterfalls of Cherrapunji, boat rides on the crystal-clear glass waters of Dawki, and Asia\'s cleanest village.',
    heroImage: 'https://images.unsplash.com/photo-1625834888874-5c91185038ec?auto=format&fit=crop&w=1200&q=80',
    coordinates: [25.5788, 91.8933],
    popularInterests: ['nature', 'adventure', 'mountains', 'photography', 'hidden_gem'],
    startingPricePerDay: 70,
    bestTime: {
      bestMonths: ['October', 'November', 'December', 'January', 'February', 'March', 'April'],
      peakSeason: 'October – November (Waterfalls in full roar, crystal clear skies) & Dec – Jan (Pleasant winter chills)',
      offSeason: 'June – August (Heavy monsoon rainfalls — spectacular for cloud watching)',
      shoulderSeason: 'April – May (Pre-monsoon wildflowers and comfortable temperatures)',
      weatherSummary: 'Subtropical highland climate. Moderate temperatures with misty cloud banks and cool mountain breezes.',
      avgTempC: { high: 20, low: 10 },
      rainfallMm: 85,
      crowdLevel: 'Moderate',
      priceDifferencePercent: 'Holiday season eco-resorts carry a 30% premium.',
      majorFestivals: [
        { name: 'Nongkrem Dance Festival', month: 'November', description: 'Traditional Khasi harvest dance in Smit village thanking Goddess Ka Blei Synshar.' },
        { name: 'Wangala Festival (100 Drums)', month: 'November', description: 'Famous Garo post-harvest drum celebration honoring Misi Saljong, the Sun God.' },
        { name: 'Shillong Cherry Blossom Festival', month: 'November', description: 'Himalayan wild cherry trees bloom in pastel pink across Shillong with live music.' }
      ],
      seasonalAttractions: [
        'Nongriat Double Decker Living Root Bridge trek through deep subtropical forest',
        'Boating on the transparent glass waters of the Umngot River in Dawki',
        'Viewing the 1,115-foot roaring plunge of Nohkalikai Falls in Cherrapunji'
      ],
      tipsForVisitors: 'Carry sturdy hiking shoes with good grip for the 3,500-step Nongriat root bridge trail and a light rain jacket year-round.'
    }
  },
  {
    id: 'andaman',
    name: 'Andaman & Nicobar',
    country: 'India',
    region: 'Bay of Bengal Islands',
    tagline: 'Pristine turquoise coral lagoons, Radhanagar white sands & tropical rainforests',
    description: 'An idyllic tropical archipelago in the Bay of Bengal, renowned for Radhanagar Beach (frequently ranked among Asia\'s finest), world-class scuba diving around Havelock Island, lush mangrove kayaking, and poignant colonial history at Cellular Jail.',
    heroImage: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80',
    coordinates: [11.9761, 92.9876],
    popularInterests: ['beaches', 'adventure', 'nature', 'photography', 'historical'],
    startingPricePerDay: 95,
    bestTime: {
      bestMonths: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'],
      peakSeason: 'December – January (Ideal scuba visibility, tranquil waters, tropical sunshine)',
      offSeason: 'June – August (Monsoon storms and intermittent ferry suspensions)',
      shoulderSeason: 'October & April (Warm, serene waters, fewer travelers on beaches)',
      weatherSummary: 'Tropical island climate. Warm, sun-drenched days (23-30°C) with gentle maritime breezes.',
      avgTempC: { high: 30, low: 23 },
      rainfallMm: 35,
      crowdLevel: 'Moderate',
      priceDifferencePercent: 'Peak holiday beach villa rates can be 40%–60% higher.',
      majorFestivals: [
        { name: 'Island Tourism Festival', month: 'January', description: 'Port Blair 10-day celebration of island handicrafts, indigenous tribal dances, and watersports.' },
        { name: 'Monsoon Music Festival', month: 'August', description: 'Celebration of maritime culture and live bands along Port Blair harbors.' },
        { name: 'Subhash Mela', month: 'January', description: 'Commemorating Netaji Subhash Chandra Bose hoisting the Indian flag on the islands in 1943.' }
      ],
      seasonalAttractions: [
        'Sunset walks on Radhanagar Beach (Beach No. 7) on Havelock Island',
        'Scuba diving and sea-walking through pristine coral gardens at Elephant Beach',
        'Sound & Light historical presentation at the Cellular Jail National Memorial in Port Blair'
      ],
      tipsForVisitors: 'Book Makruzz or Nautika high-speed catamaran ferry tickets between Port Blair and Havelock well in advance.'
    }
  },

  // 🌎 INTERNATIONAL — 10 DESTINATIONS (+ AMALFI BONUS)
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    region: 'Southeast Asia, Lesser Sunda Islands',
    tagline: 'Island of the Gods, emerald rice terraces & clifftop ocean temples',
    description: 'Indonesia\'s tropical jewel, enchanting travelers with sacred water temples of Tirta Empul, dramatic sunset views of Uluwatu clifftop temple, artistic serenity in Ubud\'s lush jungles, world-class surf breaks, and vibrant beach clubs.',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    coordinates: [-8.3405, 115.0920],
    popularInterests: ['beaches', 'temples', 'nature', 'food', 'photography', 'adventure'],
    startingPricePerDay: 85,
    bestTime: {
      bestMonths: ['April', 'May', 'June', 'July', 'August', 'September', 'October'],
      peakSeason: 'July – August & Christmas/New Year (Sunny days, optimal beach weather)',
      offSeason: 'January – March (Tropical rainy season with refreshing afternoon downpours)',
      shoulderSeason: 'April – June & September (Optimal dry weather, lighter crowds, great hotel values)',
      weatherSummary: 'Tropical monsoon climate. Warm and balmy year-round (26-31°C) with cooling coastal breezes.',
      avgTempC: { high: 30, low: 24 },
      rainfallMm: 50,
      crowdLevel: 'High',
      priceDifferencePercent: 'Peak July/August and festive luxury villa rates rise by 35%–50%.',
      majorFestivals: [
        { name: 'Nyepi (Balinese Day of Silence)', month: 'March', description: 'Island-wide complete quiet, no flights or lights, preceded by fiery Ogoh-Ogoh demon parades.' },
        { name: 'Galungan & Kuningan', month: 'Varies (Every 210 days)', description: 'Triumph of Dharma over Adharma with towering bamboo Penjor decorations lining every street.' },
        { name: 'Ubud Writers & Readers Festival', month: 'October', description: 'Southeast Asia\'s premier literary and arts gathering in the cultural heart of Ubud.' }
      ],
      seasonalAttractions: [
        'Uluwatu Temple clifftop sunset with traditional Kecak and Fire Dance performance',
        'Tegalalang Rice Terraces sunrise walk and jungle swing photo experience',
        'Mount Batur sunrise volcano trek above a sea of morning clouds'
      ],
      tipsForVisitors: 'Split your stay: spend 3 nights in Ubud for lush jungle wellness and temples, followed by 3 nights in Seminyak, Canggu, or Uluwatu for coastal relaxation.'
    }
  },
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    region: 'Indian Ocean Atolls',
    tagline: 'Private overwater villas, crystalline lagoons & kaleidoscopic reefs',
    description: 'The world\'s ultimate luxury island sanctuary, celebrated for private island resorts with overwater bungalows, direct ladder access into turquoise lagoons, private sandbank picnics, and swimming with manta rays and whale sharks.',
    heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    coordinates: [3.2028, 73.2207],
    popularInterests: ['beaches', 'nature', 'adventure', 'photography', 'food'],
    startingPricePerDay: 280,
    bestTime: {
      bestMonths: ['November', 'December', 'January', 'February', 'March', 'April'],
      peakSeason: 'December – March (Dry northeast monsoon, calmest crystalline seas, 8 hours of sunshine daily)',
      offSeason: 'May – October (Southwest monsoon brings intermittent rain showers and best surf swells)',
      shoulderSeason: 'April & November (Warm waters, great manta ray sightings, good value)',
      weatherSummary: 'Tropical equatorial climate. Consistently warm (27-31°C) with year-round balmy water temperatures (28°C).',
      avgTempC: { high: 31, low: 26 },
      rainfallMm: 45,
      crowdLevel: 'Moderate',
      priceDifferencePercent: 'Festive Christmas/New Year rates command a 70%–100% premium.',
      majorFestivals: [
        { name: 'Maldivian Independence Day', month: 'July', description: 'Traditional parades, cultural dances, and brass band performances in the capital Malé.' },
        { name: 'Eid al-Fitr & Eid al-Adha', month: 'Varies', description: 'Color run celebrations, Koadi playing, and communal beach feasting.' },
        { name: 'Republic Day', month: 'November', description: 'Patriotic parades and traditional Boduberu drumming across local islands.' }
      ],
      seasonalAttractions: [
        'South Ari Atoll whale shark snorkeling safari and coral reef exploration',
        'Sunset private dolphin cruise aboard a handcrafted Maldivian wooden Dhoni',
        'Witnessing glowing blue bioluminescent plankton waves on nighttime beaches'
      ],
      tipsForVisitors: 'Check whether your resort transfer requires a seaplane (scenic daytime flights only) or speedboat (operates 24/7) based on your international flight arrival time.'
    }
  },
  {
    id: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    region: 'Southeast Asia, Malay Peninsula',
    tagline: 'Futuristic City in a Garden, Marina Bay Sands & world-class hawker feasts',
    description: 'A cutting-edge global metropolis celebrated for its harmonious blend of hyper-modern architectural wonders like the Supertree Grove at Gardens by the Bay, Michelin-starred street food hawker centers, lush botanical gardens, and vibrant heritage precincts.',
    heroImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
    coordinates: [1.3521, 103.8198],
    popularInterests: ['shopping', 'food', 'family', 'photography', 'nature', 'museums'],
    startingPricePerDay: 160,
    bestTime: {
      bestMonths: ['January', 'February', 'March', 'April', 'July', 'August', 'September'],
      peakSeason: 'December – January & September (Formula 1 Grand Prix weekend)',
      offSeason: 'November – December (Monsoon season with regular tropical afternoon downpours)',
      shoulderSeason: 'February – April (Lowest rainfall, clear sunny skies, pleasant walking)',
      weatherSummary: 'Equatorial climate with uniform warm temperatures (25-32°C) and high humidity year-round.',
      avgTempC: { high: 32, low: 25 },
      rainfallMm: 110,
      crowdLevel: 'High',
      priceDifferencePercent: 'Formula 1 Grand Prix week in September carries a 100%+ hotel premium.',
      majorFestivals: [
        { name: 'Singapore Grand Prix (F1 Night Race)', month: 'September', description: 'Thrilling Formula 1 street race under dazzling floodlights with major international concerts.' },
        { name: 'Chinese New Year in Chinatown', month: 'January – February', description: 'Vibrant street light-ups, lion dances, and night bazaars.' },
        { name: 'Singapore Food Festival', month: 'July – August', description: 'Celebration of multicultural cuisine, hawker masterclasses, and pop-up food villages.' }
      ],
      seasonalAttractions: [
        'Gardens by the Bay Supertree Grove light & sound show and Cloud Forest waterfall',
        'Marina Bay Sands SkyPark Observation Deck panoramic view of the Singapore Strait',
        'Jewel Changi Airport HSBC Rain Vortex, the world\'s tallest indoor waterfall'
      ],
      tipsForVisitors: 'Tap your contactless credit/debit card directly on Singapore\'s MRT subways and buses for seamless cashless transit across the entire island.'
    }
  },
  {
    id: 'thailand',
    name: 'Thailand',
    country: 'Thailand',
    region: 'Southeast Asia, Indochinese Peninsula',
    tagline: 'Golden royal palaces, limestone island karst cliffs & legendary night markets',
    description: 'The Land of Smiles, encompassing the majestic gilded spires of Bangkok\'s Grand Palace, the dramatic emerald limestone karsts and crystal bays of Phuket and Phi Phi, centuries-old Buddhist temples in Chiang Mai, and irresistible street food.',
    heroImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
    coordinates: [13.7563, 100.5018],
    popularInterests: ['beaches', 'temples', 'food', 'nightlife', 'adventure', 'shopping'],
    startingPricePerDay: 75,
    bestTime: {
      bestMonths: ['November', 'December', 'January', 'February', 'March'],
      peakSeason: 'December – January (Cool, dry weather, calm emerald seas for island hopping)',
      offSeason: 'July – October (Monsoon season — great bargains on luxury beachfront resorts)',
      shoulderSeason: 'April & October (Songkran Water Festival in April, fewer crowds)',
      weatherSummary: 'Tropical savanna climate. Winter months are pleasant and dry (22-31°C), while April is the warmest month.',
      avgTempC: { high: 32, low: 23 },
      rainfallMm: 30,
      crowdLevel: 'High',
      priceDifferencePercent: 'Peak holiday beach resort rates are 40%–50% higher than off-season.',
      majorFestivals: [
        { name: 'Songkran (Thai New Year Water Festival)', month: 'April', description: 'Massive nationwide water fights symbolizing cleansing, blessing, and renewal.' },
        { name: 'Loy Krathong & Yi Peng Lantern Festival', month: 'November', description: 'Thousands of glowing lanterns released into the Chiang Mai night sky and candlelit baskets on rivers.' },
        { name: 'Vegetarian Festival in Phuket', month: 'October', description: 'Spectacular religious processions with sacred rituals and vibrant street food.' }
      ],
      seasonalAttractions: [
        'Bangkok Grand Palace and the Temple of the Emerald Buddha (Wat Phra Kaew)',
        'Speedboat cruise to Phi Phi Islands, Maya Bay, and Pileh Lagoon emerald waters',
        'Chao Phraya riverboat ride to Wat Arun (The Temple of Dawn) at golden hour'
      ],
      tipsForVisitors: 'Dress respectfully when visiting temples: shoulders and knees must be covered. Slip-on shoes are recommended for easy removal.'
    }
  },
  {
    id: 'japan',
    name: 'Japan',
    country: 'Japan',
    region: 'East Asia, Japanese Archipelago',
    tagline: 'Neon Tokyo, ancient Kyoto temples, bullet trains & Mount Fuji',
    description: 'An extraordinary harmony of futuristic innovation and ancient tradition, showcasing Tokyo\'s vibrant Shibuya crossing and high-tech dining, Kyoto\'s tranquil Zen temples and bamboo groves, iconic Mount Fuji views, and 300 km/h Shinkansen bullet trains.',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    coordinates: [35.6762, 139.6503],
    popularInterests: ['historical', 'temples', 'food', 'nature', 'photography', 'shopping'],
    startingPricePerDay: 140,
    bestTime: {
      bestMonths: ['March', 'April', 'May', 'October', 'November'],
      peakSeason: 'Late March – Mid April (Cherry Blossom / Sakura) & November (Autumn Foliage / Koyo)',
      offSeason: 'January – February (Crisp winter, ski slopes) & July – August (Hot & humid)',
      shoulderSeason: 'May – June & September – October (Comfortable temperatures, pleasant traveling)',
      weatherSummary: 'Four distinct seasons. Spring and autumn are crisp and temperate (14-22°C), ideal for exploring cities and mountain shrines.',
      avgTempC: { high: 21, low: 11 },
      rainfallMm: 95,
      crowdLevel: 'High',
      priceDifferencePercent: 'Cherry blossom week hotel rates can be 50%–70% higher than winter.',
      majorFestivals: [
        { name: 'Cherry Blossom (Hanami) Season', month: 'March – April', description: 'Nationwide celebrations under blooming pink sakura canopies in parks and riverbanks.' },
        { name: 'Gion Matsuri in Kyoto', month: 'July', description: 'One of Japan\'s largest historical street float festivals with ancient wooden shrines.' },
        { name: 'Sanja Matsuri in Tokyo', month: 'May', description: 'Over 100 portable mikoshi shrines carried through the historic streets of Asakusa.' }
      ],
      seasonalAttractions: [
        'Mount Fuji & Lake Kawaguchiko Chureito Pagoda postcard viewpoint',
        'Shibuya Crossing scramble and Tokyo Skytree observation deck at sunset',
        'Fushimi Inari 10,000 vermilion Torii gates and Kinkaku-ji Golden Pavilion'
      ],
      tipsForVisitors: 'Book Shinkansen bullet train tickets with Mount Fuji side seats (seats D/E heading west from Tokyo) for breathtaking mountain views.'
    }
  },
  {
    id: 'south_korea',
    name: 'South Korea',
    country: 'South Korea',
    region: 'East Asia, Korean Peninsula',
    tagline: 'Seoul K-culture, royal palaces, Hanok villages & Jeju volcanic coast',
    description: 'A dynamic powerhouse of modern pop culture and centuries-old Joseon dynasty heritage, featuring Seoul\'s Gyeongbokgung Palace, bustling Myeongdong night markets, Bukchon Hanok heritage village, and the volcanic wonders of Jeju Island.',
    heroImage: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80',
    coordinates: [37.5665, 126.9780],
    popularInterests: ['shopping', 'food', 'historical', 'photography', 'nature', 'family'],
    startingPricePerDay: 115,
    bestTime: {
      bestMonths: ['April', 'May', 'September', 'October', 'November'],
      peakSeason: 'April (Cherry Blossoms) & October (Vibrant Autumn Foliage across palaces and national parks)',
      offSeason: 'January – February (Cold winter, ski season in Gangwon-do) & July – August (Monsoon season)',
      shoulderSeason: 'May & September (Mild sunny days, comfortable for walking and palace tours)',
      weatherSummary: 'Continental climate with 4 vivid seasons. Autumn is crisp, sunny, and dry with golden ginkgo trees.',
      avgTempC: { high: 20, low: 10 },
      rainfallMm: 50,
      crowdLevel: 'High',
      priceDifferencePercent: 'Autumn peak foliage and spring cherry blossom weeks carry a 35% premium.',
      majorFestivals: [
        { name: 'Seoul Lantern Festival', month: 'November', description: 'Hundreds of handcrafted paper lanterns illuminating the Cheonggyecheon stream.' },
        { name: 'Boryeong Mud Festival', month: 'July', description: 'Famous summer beach mud slides, obstacle courses, and K-pop concerts on Daecheon Beach.' },
        { name: 'Chuseok (Korean Harvest Thanksgiving)', month: 'September – October', description: 'Traditional folk games, ancestral rituals, and special cultural programs at royal palaces.' }
      ],
      seasonalAttractions: [
        'Gyeongbokgung Palace Royal Guard Changing Ceremony wearing traditional Hanbok',
        'Strolling through Bukchon Hanok Village and taking the cable car to N Seoul Tower',
        'Street food sampling at Gwangjang Market (Mayak Kimbap, Bindaetteok & Tteokbokki)'
      ],
      tipsForVisitors: 'Renting a traditional Hanbok near Gyeongbokgung Palace grants free admission to all major Joseon royal palaces in Seoul!'
    }
  },
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    region: 'Middle East, Arabian Gulf',
    tagline: 'Sky-piercing Burj Khalifa, luxury desert dune safaris & Palm Jumeirah',
    description: 'A glittering metropolis of architectural superlatives in the Arabian Desert, showcasing the Burj Khalifa (the world\'s tallest building), man-made Palm Jumeirah islands, exhilarating desert safaris, mega luxury shopping, and Michelin-starred dining.',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    coordinates: [25.2048, 55.2708],
    popularInterests: ['shopping', 'adventure', 'family', 'food', 'photography', 'beaches'],
    startingPricePerDay: 175,
    bestTime: {
      bestMonths: ['November', 'December', 'January', 'February', 'March'],
      peakSeason: 'December – February (Pleasant winter sunshine, 24-28°C, Dubai Shopping Festival)',
      offSeason: 'June – August (Extreme desert summer heat exceeding 42°C, indoor attractions air-conditioned)',
      shoulderSeason: 'October & April (Warm swimming weather, lighter crowds at waterparks)',
      weatherSummary: 'Subtropical desert climate. Winters are warm and delightful with cloudless blue skies and cool desert breezes.',
      avgTempC: { high: 26, low: 16 },
      rainfallMm: 12,
      crowdLevel: 'High',
      priceDifferencePercent: 'New Year Eve hotel rates facing Burj Khalifa or Palm fireworks reflect peak premiums.',
      majorFestivals: [
        { name: 'Dubai Shopping Festival (DSF)', month: 'December – January', description: 'Month-long citywide retail festival with massive discounts, concerts, and daily drone shows.' },
        { name: 'Dubai World Cup', month: 'March', description: 'The world\'s richest horse race hosted at the iconic Meydan Racecourse.' },
        { name: 'Art Dubai', month: 'March', description: 'The Middle East\'s leading international art fair hosted at Madinat Jumeirah.' }
      ],
      seasonalAttractions: [
        'Burj Khalifa 124th & 148th floor At The Top panoramic observation lounge',
        'Red dune 4x4 desert safari with sandboarding, camel rides, and Bedouin BBQ dinner',
        'Dubai Fountain synchronized water and light spectacle beneath the Burj Khalifa'
      ],
      tipsForVisitors: 'Book Burj Khalifa sunset time slots 2 to 3 weeks in advance to catch daytime, sunset, and nighttime city lights in a single visit.'
    }
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    country: 'Switzerland',
    region: 'Western Europe, Swiss Alps',
    tagline: 'Iconic Matterhorn, Glacier Express railways & pristine glacier lakes',
    description: 'The pinnacle of Alpine majesty, encompassing the iconic pyramid silhouette of the Matterhorn in Zermatt, the Jungfraujoch "Top of Europe", sapphire lakes of Lucerne and Interlaken, and world-renowned panoramic train journeys through emerald meadows.',
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    coordinates: [46.8182, 8.2275],
    popularInterests: ['mountains', 'adventure', 'nature', 'photography', 'family', 'food'],
    startingPricePerDay: 220,
    bestTime: {
      bestMonths: ['June', 'July', 'August', 'September', 'December', 'January', 'February'],
      peakSeason: 'July – August (Alpine hiking, lush meadows) & Christmas – March (World-class ski season)',
      offSeason: 'April – May & November (Cable car maintenance periods, transitional snowmelt)',
      shoulderSeason: 'September – October (Crisp autumn air, golden larch forests, uncrowded trains)',
      weatherSummary: 'Alpine climate. Summers offer brisk mountain breezes (18-24°C); winters turn the country into a snow-covered wonderland.',
      avgTempC: { high: 19, low: 8 },
      rainfallMm: 80,
      crowdLevel: 'Moderate',
      priceDifferencePercent: 'Peak ski weeks (Christmas & February) carry a 45% premium.',
      majorFestivals: [
        { name: 'Zermatt Unplugged', month: 'April', description: 'Acoustic music festival set against the dramatic backdrop of the Matterhorn.' },
        { name: 'Jungfrau Marathon', month: 'September', description: 'One of the world\'s most scenic mountain marathons through alpine villages.' },
        { name: 'Montreux Jazz Festival', month: 'July', description: 'World-famous music festival on the shores of Lake Geneva.' }
      ],
      seasonalAttractions: [
        'Gornergrat 3,100m cogwheel railway summit platform with views of 29 four-thousand-meter peaks',
        'Jungfraujoch - Top of Europe 3,454m glacier ice palace and Sphinx observation deck',
        'Glacier Express panoramic roof rail journey between Zermatt and St. Moritz'
      ],
      tipsForVisitors: 'Invest in a Swiss Travel Pass for seamless unlimited transit on trains, panoramic boats, mountain lake steamers, and city transit, plus free entry to 500+ museums.'
    }
  },
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    region: 'Western Europe, Île-de-France',
    tagline: 'The City of Light, iconic Eiffel Tower, Louvre art & sidewalk bistros',
    description: 'The world\'s romantic capital of art, gastronomy, and couture, enchanting travelers with the iron lattice of the Eiffel Tower, treasures of the Louvre, sunset river cruises on the Seine, Montmartre\'s Bohemian cobblestones, and sidewalk café culture.',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    coordinates: [48.8566, 2.3522],
    popularInterests: ['historical', 'museums', 'food', 'shopping', 'photography', 'family'],
    startingPricePerDay: 190,
    bestTime: {
      bestMonths: ['April', 'May', 'June', 'September', 'October'],
      peakSeason: 'June – July & September (Warm, long summer daylight, sidewalk terraces buzzing)',
      offSeason: 'January – February (Crisp winter days, no museum lines, cozy brasseries)',
      shoulderSeason: 'April – May & October (Chestnut trees in bloom, pleasant walking weather)',
      weatherSummary: 'Temperate oceanic climate. Mild summers (20-26°C) and brisk, romantic winters (3-8°C).',
      avgTempC: { high: 22, low: 13 },
      rainfallMm: 55,
      crowdLevel: 'High',
      priceDifferencePercent: 'Fashion Week (Jan/Feb & Sep/Oct) and summer hotel rates can be 40% higher.',
      majorFestivals: [
        { name: 'Bastille Day (Fête Nationale)', month: 'July (July 14)', description: 'Spectacular military parade along Champs-Élysées and grand fireworks at the Eiffel Tower.' },
        { name: 'Nuit Blanche (White Night)', month: 'June', description: 'All-night contemporary art festival with illuminated monuments and musical installations.' },
        { name: 'Fête de la Musique', month: 'June (June 21)', description: 'Free live music on every street corner, square, and garden across Paris.' }
      ],
      seasonalAttractions: [
        'Eiffel Tower summit ascent and illuminated golden sparkle at the top of every evening hour',
        'Louvre Museum masterworks (Mona Lisa, Winged Victory of Samothrace, Venus de Milo)',
        'Seine River sunset sightseeing boat cruise gliding beneath historic bridges'
      ],
      tipsForVisitors: 'Book Louvre and Eiffel Tower time-slot tickets at least 3 to 4 weeks in advance to avoid waiting in multi-hour general admission queues.'
    }
  },
  {
    id: 'australia',
    name: 'Australia',
    country: 'Australia',
    region: 'Oceania, Australasia',
    tagline: 'Sydney Opera House, Great Barrier Reef & sun-kissed coastlines',
    description: 'A vibrant continent of iconic coastal wonders and natural marvels, featuring the architectural sails of the Sydney Opera House, kaleidoscopic coral reefs of the Great Barrier Reef, Bondi Beach surf culture, and eucalyptus-scented Blue Mountains.',
    heroImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80',
    coordinates: [-33.8688, 151.2093],
    popularInterests: ['beaches', 'nature', 'adventure', 'photography', 'food', 'family'],
    startingPricePerDay: 180,
    bestTime: {
      bestMonths: ['September', 'October', 'November', 'March', 'April', 'May'],
      peakSeason: 'December – February (Aussie Summer — beach holidays, Sydney Harbour fireworks)',
      offSeason: 'June – August (Southern hemisphere winter — ideal for Great Barrier Reef & tropical North)',
      shoulderSeason: 'September – November & March – May (Warm sunshine, great hiking, manageable crowds)',
      weatherSummary: 'Temperate to tropical climate. Summers are sunny and warm (22-28°C) with ocean breezes.',
      avgTempC: { high: 26, low: 18 },
      rainfallMm: 65,
      crowdLevel: 'Moderate',
      priceDifferencePercent: 'Sydney New Year\'s Eve harbour-view accommodation carries a 70%+ holiday premium.',
      majorFestivals: [
        { name: 'Vivid Sydney', month: 'May – June', description: 'World\'s largest festival of light, music, and ideas transforming the Opera House and Harbour with 3D projections.' },
        { name: 'Sydney New Year\'s Eve Fireworks', month: 'December (Dec 31)', description: 'World-famous midnight pyrotechnic display erupting from the Harbour Bridge and Opera House.' },
        { name: 'Melbourne International Comedy Festival', month: 'March – April', description: 'One of the top 3 comedy festivals worldwide featuring hundreds of international performers.' }
      ],
      seasonalAttractions: [
        'Sydney Opera House guided architectural tour & Harbour Bridge climb',
        'Great Barrier Reef high-speed catamaran cruise with outer reef snorkeling & scuba diving',
        'Bondi to Coogee coastal clifftop walk and swim at historic Icebergs ocean pool'
      ],
      tipsForVisitors: 'Take the public ferry from Circular Quay to Manly Beach for an unforgettable $7 harbour cruise with direct views of the Opera House and Harbour Bridge.'
    }
  },

  // Bonus Existing: Amalfi Coast
  {
    id: 'amalfi',
    name: 'Amalfi Coast',
    country: 'Italy',
    region: 'Campania, Southern Europe',
    tagline: 'Dramatic cliffside villages, lemon groves & Mediterranean blue',
    description: 'A 50-kilometer stretch of mountainous coastline south of Naples, celebrated for its pastel villages clinging to steep cliffs, panoramic sea paths, fragrant lemon orchards, and exquisite coastal seafood.',
    heroImage: destAmalfiImg,
    coordinates: [40.6340, 14.6027],
    popularInterests: ['beaches', 'photography', 'food', 'nature', 'historical', 'adventure'],
    startingPricePerDay: 195,
    bestTime: {
      bestMonths: ['May', 'June', 'September', 'October'],
      peakSeason: 'July & August (Vibrant, high energy, warm sea waters, maximum visitors)',
      offSeason: 'November – March (Many ferries and boutique hotels close for winter renovation)',
      shoulderSeason: 'May, June & September (Optimal warm swimming weather, fewer crowds, pleasant hiking)',
      weatherSummary: 'Mediterranean bliss. Summers are hot and sun-drenched; spring and early autumn boast mild breezes and clear skies.',
      avgTempC: { high: 26, low: 18 },
      rainfallMm: 45,
      crowdLevel: 'High',
      priceDifferencePercent: 'July/August prices are up to 60% higher than May/October.',
      majorFestivals: [
        { name: 'Ravello Festival', month: 'July – August', description: 'World-class classical and jazz concerts on the cliffside terrace of Villa Rufolo.' },
        { name: 'Regata delle Antiche Repubbliche', month: 'June', description: 'Historic rowing regatta between the 4 ancient maritime republics with medieval pageantry.' }
      ],
      seasonalAttractions: [
        'Path of the Gods (Sentiero degli Dei) hiking with wildflowers in May and June',
        'Private wooden gozzo boat charters around Capri grottos (June – September)',
        'Sfusato Amalfitano lemon harvest and granita tasting tours (April – July)'
      ],
      tipsForVisitors: 'Opt for water ferries rather than road buses along the winding cliff roads to avoid traffic congestion and enjoy breathtaking views.'
    }
  }
];

// Helper to get Indian Destinations
export const INDIA_DESTINATIONS = DESTINATIONS.filter(d => d.country === 'India');

// Helper to get International Destinations
export const INTERNATIONAL_DESTINATIONS = DESTINATIONS.filter(d => d.country !== 'India');
