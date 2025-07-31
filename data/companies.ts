import type { Company } from "../types"

// Complete companies data from Expanded_Companies_India_Full.csv (400+ companies)
export const companies: Company[] = [
  // Steel, Auto, Conglomerate
  {
    id: "1",
    name: "Tata Group",
    industrySector: "Steel, Auto, Conglomerate",
    roles: ["Plant Supervisor", "Ops Lead", "Project Manager", "EHS Officer"],
    operationsFocus: "Steel & auto plants; cap-ex projects",
    keyCities: ["Mumbai", "Jamshedpur", "Pune"],
    helpfulCertifications: ["PMP", "Six Sigma", "IOSH", "NEBOSH"],
    positioningTips: "Lead large teams, enforce safety, hit production targets under pressure",
    website: "https://www.tata.com"
  },

  // EPC, Defence, Infrastructure
  {
    id: "2",
    name: "Larsen & Toubro (L&T)",
    industrySector: "EPC, Defence, Infrastructure",
    roles: ["Project Manager", "Site Ops Manager", "EHS Lead"],
    operationsFocus: "Metro, highway & defence-manufacturing build-outs",
    keyCities: ["Mumbai", "Chennai", "Delhi"],
    helpfulCertifications: ["PMP", "Six Sigma", "Lean QC"],
    positioningTips: "Combat-zone engineering; resource planning in tough terrains",
    website: "https://www.larsentoubro.com"
  },

  // Mining, Metals, Energy
  {
    id: "3",
    name: "Vedanta Ltd.",
    industrySector: "Mining, Metals, Energy",
    roles: ["Plant Ops Head", "Maintenance Lead", "SCM Lead"],
    operationsFocus: "Smelters; mining O&M; green-field expansions",
    keyCities: ["Mumbai", "Odisha", "Uttarakhand"],
    helpfulCertifications: ["Industrial-safety cert", "MBA-Ops"],
    positioningTips: "Mission-critical ops leadership; zero-incident mindset",
    website: "https://www.vedantalimited.com"
  },

  // Ports, Energy, Logistics
  {
    id: "4",
    name: "Adani Group",
    industrySector: "Ports, Energy, Logistics",
    roles: ["Port Ops Manager", "Project Lead", "HSE Manager"],
    operationsFocus: "Port terminals; renewables",
    keyCities: ["Ahmedabad", "Mundra", "Goa", "Krishnapatnam"],
    helpfulCertifications: ["PMP", "Port-management", "NEBOSH"],
    positioningTips: "Port ops parallel to naval logistics / convoy control",
    website: "https://www.adanigroup.com"
  },

  // Oil & Gas Companies
  {
    id: "5",
    name: "ONGC",
    industrySector: "Oil & Gas",
    roles: ["Asset Integrity Manager", "Depot Ops Manager", "Safety & Security Lead"],
    operationsFocus: "Offshore rigs; rail workshops",
    keyCities: ["Delhi", "Mumbai", "Vadodara", "Dehradun"],
    helpfulCertifications: ["Govt safety", "PMP"],
    positioningTips: "Unit-maintenance & large-asset stewardship expertise",
    website: "https://www.ongcindia.com"
  },
  {
    id: "6",
    name: "Indian Oil Corporation",
    industrySector: "Oil & Gas",
    roles: ["Plant Supervisor", "Ops Lead", "Project Manager", "EHS Officer"],
    operationsFocus: "Refineries; oil distribution",
    keyCities: ["Mumbai", "New Delhi"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Safety compliance; production optimization",
    website: "https://www.iocl.com"
  },
  {
    id: "7",
    name: "Bharat Petroleum",
    industrySector: "Oil & Gas",
    roles: ["Plant Supervisor", "Ops Lead", "Project Manager", "EHS Officer"],
    operationsFocus: "Refineries; oil distribution",
    keyCities: ["Mumbai", "New Delhi"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Safety compliance; production optimization",
    website: "https://www.bharatpetroleum.in"
  },
  {
    id: "8",
    name: "GAIL",
    industrySector: "Oil & Gas",
    roles: ["Plant Supervisor", "Ops Lead", "Project Manager", "EHS Officer"],
    operationsFocus: "Gas pipelines; LNG terminals",
    keyCities: ["New Delhi", "Bengaluru"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.gailonline.com"
  },
  {
    id: "9",
    name: "Reliance Industries",
    industrySector: "Energy, Petrochemicals",
    roles: ["Plant Manager", "Operations Lead", "Project Manager"],
    operationsFocus: "Refineries; petrochemical plants",
    keyCities: ["Mumbai", "Jamnagar"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.ril.com"
  },
  {
    id: "10",
    name: "HPCL",
    industrySector: "Oil & Gas",
    roles: ["Plant Manager", "Operations Lead", "Project Manager"],
    operationsFocus: "Refineries; oil distribution",
    keyCities: ["Mumbai", "Visakhapatnam"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.hindustanpetroleum.com"
  },
  {
    id: "11",
    name: "BPCL",
    industrySector: "Oil & Gas",
    roles: ["Plant Manager", "Operations Lead", "Project Manager"],
    operationsFocus: "Refineries; oil distribution",
    keyCities: ["Mumbai", "Kochi"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.bharatpetroleum.in"
  },
  {
    id: "12",
    name: "Oil India Limited",
    industrySector: "Oil & Gas",
    roles: ["Plant Supervisor", "Ops Lead", "Project Manager", "EHS Officer"],
    operationsFocus: "Oil exploration and production",
    keyCities: ["Duliajan", "Noida"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Safety compliance; production optimization",
    website: "https://www.oil-india.com"
  },
  {
    id: "13",
    name: "Mangalore Refinery and Petrochemicals",
    industrySector: "Oil & Gas",
    roles: ["Plant Manager", "Operations Lead", "Project Manager"],
    operationsFocus: "Refineries; petrochemical plants",
    keyCities: ["Mangalore", "Mumbai"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.mrpl.co.in"
  },
  {
    id: "14",
    name: "Gujarat State Petroleum Corporation",
    industrySector: "Oil & Gas",
    roles: ["Plant Supervisor", "Ops Lead", "Project Manager", "EHS Officer"],
    operationsFocus: "Oil and gas exploration",
    keyCities: ["Ahmedabad", "Gandhinagar"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Safety compliance; production optimization",
    website: "https://www.gspcgroup.com"
  },

  // Auto Industry
  {
    id: "15",
    name: "Tata Motors",
    industrySector: "Auto",
    roles: ["Assembly Line Manager", "Quality Assurance Engineer", "Supply Chain Manager"],
    operationsFocus: "Automobile manufacturing plants",
    keyCities: ["Pune", "Mumbai"],
    helpfulCertifications: ["Lean Manufacturing", "Six Sigma"],
    positioningTips: "Lead cross-functional teams; drive continuous improvement",
    website: "https://www.tatamotors.com"
  },
  {
    id: "16",
    name: "Mahindra & Mahindra",
    industrySector: "Auto",
    roles: ["Assembly Line Manager", "Quality Assurance Engineer", "Supply Chain Manager"],
    operationsFocus: "Automobile manufacturing plants",
    keyCities: ["Mumbai", "Pune"],
    helpfulCertifications: ["Lean Manufacturing", "Six Sigma"],
    positioningTips: "Lead cross-functional teams; drive continuous improvement",
    website: "https://www.mahindra.com"
  },
  {
    id: "17",
    name: "Bajaj Auto",
    industrySector: "Auto",
    roles: ["Assembly Line Manager", "Quality Assurance Engineer", "Supply Chain Manager"],
    operationsFocus: "Automobile manufacturing plants",
    keyCities: ["Pune"],
    helpfulCertifications: ["Lean Manufacturing", "Six Sigma"],
    positioningTips: "Lead cross-functional teams; drive continuous improvement",
    website: "https://www.bajajauto.com"
  },
  {
    id: "18",
    name: "Maruti Suzuki India",
    industrySector: "Auto",
    roles: ["Assembly Line Manager", "Quality Assurance Engineer", "Supply Chain Manager"],
    operationsFocus: "Automobile manufacturing plants",
    keyCities: ["Gurgaon", "Manesar"],
    helpfulCertifications: ["Lean Manufacturing", "Six Sigma"],
    positioningTips: "Lead cross-functional teams; drive continuous improvement",
    website: "https://www.marutisuzuki.com"
  },
  {
    id: "19",
    name: "Hyundai Motor India",
    industrySector: "Auto",
    roles: ["Assembly Line Manager", "Quality Assurance Engineer", "Supply Chain Manager"],
    operationsFocus: "Automobile manufacturing plants",
    keyCities: ["Chennai", "Sriperumbudur"],
    helpfulCertifications: ["Lean Manufacturing", "Six Sigma"],
    positioningTips: "Lead cross-functional teams; drive continuous improvement",
    website: "https://www.hyundai.com/in"
  },
  {
    id: "20",
    name: "Honda Cars India",
    industrySector: "Auto",
    roles: ["Assembly Line Manager", "Quality Assurance Engineer", "Supply Chain Manager"],
    operationsFocus: "Automobile manufacturing plants",
    keyCities: ["Greater Noida", "Tapukara"],
    helpfulCertifications: ["Lean Manufacturing", "Six Sigma"],
    positioningTips: "Lead cross-functional teams; drive continuous improvement",
    website: "https://www.hondacarindia.com"
  },
  {
    id: "21",
    name: "Toyota Kirloskar Motor",
    industrySector: "Auto",
    roles: ["Assembly Line Manager", "Quality Assurance Engineer", "Supply Chain Manager"],
    operationsFocus: "Automobile manufacturing plants",
    keyCities: ["Bengaluru", "Bidadi"],
    helpfulCertifications: ["Lean Manufacturing", "Six Sigma"],
    positioningTips: "Lead cross-functional teams; drive continuous improvement",
    website: "https://www.toyotabharat.com"
  },
  {
    id: "22",
    name: "Hero MotoCorp",
    industrySector: "Auto",
    roles: ["Assembly Line Manager", "Quality Assurance Engineer", "Supply Chain Manager"],
    operationsFocus: "Motorcycle manufacturing plants",
    keyCities: ["New Delhi", "Gurgaon"],
    helpfulCertifications: ["Lean Manufacturing", "Six Sigma"],
    positioningTips: "Lead cross-functional teams; drive continuous improvement",
    website: "https://www.heromotocorp.com"
  },
  {
    id: "23",
    name: "TVS Motor Company",
    industrySector: "Auto",
    roles: ["Assembly Line Manager", "Quality Assurance Engineer", "Supply Chain Manager"],
    operationsFocus: "Motorcycle and scooter manufacturing plants",
    keyCities: ["Chennai", "Hosur"],
    helpfulCertifications: ["Lean Manufacturing", "Six Sigma"],
    positioningTips: "Lead cross-functional teams; drive continuous improvement",
    website: "https://www.tvsmotor.com"
  },
  {
    id: "24",
    name: "Ashok Leyland",
    industrySector: "Auto",
    roles: ["Assembly Line Manager", "Quality Assurance Engineer", "Supply Chain Manager"],
    operationsFocus: "Commercial vehicle manufacturing plants",
    keyCities: ["Chennai", "Hosur"],
    helpfulCertifications: ["Lean Manufacturing", "Six Sigma"],
    positioningTips: "Lead cross-functional teams; drive continuous improvement",
    website: "https://www.ashokleyland.com"
  },
  {
    id: "25",
    name: "Eicher Motors",
    industrySector: "Auto",
    roles: ["Assembly Line Manager", "Quality Assurance Engineer", "Supply Chain Manager"],
    operationsFocus: "Commercial vehicle manufacturing",
    keyCities: ["Chennai", "Pithampur"],
    helpfulCertifications: ["Lean Manufacturing", "Six Sigma"],
    positioningTips: "Lead cross-functional teams; drive continuous improvement",
    website: "https://www.eichermotors.com"
  },

  // Steel Industry
  {
    id: "26",
    name: "JSW Steel Ltd",
    industrySector: "Steel",
    roles: ["Plant Manager", "Production Supervisor", "Quality Control Manager"],
    operationsFocus: "Steel manufacturing plants",
    keyCities: ["Mumbai", "Vijayanagar"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Manage large production teams; ensure safety compliance",
    website: "https://www.jsw.in/steel"
  },
  {
    id: "27",
    name: "Tata Steel",
    industrySector: "Steel",
    roles: ["Plant Manager", "Production Supervisor", "Quality Control Manager"],
    operationsFocus: "Steel manufacturing plants",
    keyCities: ["Jamshedpur", "Kolkata"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Manage large production teams; ensure safety compliance",
    website: "https://www.tatasteel.com"
  },
  {
    id: "28",
    name: "Jindal Steel and Power",
    industrySector: "Steel",
    roles: ["Plant Manager", "Production Supervisor", "Quality Control Manager"],
    operationsFocus: "Steel manufacturing plants",
    keyCities: ["New Delhi", "Hisar"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Manage large production teams; ensure safety compliance",
    website: "https://www.jindalsteelpower.com"
  },
  {
    id: "29",
    name: "Steel Authority of India",
    industrySector: "Steel",
    roles: ["Plant Manager", "Production Supervisor", "Quality Control Manager"],
    operationsFocus: "Steel manufacturing plants",
    keyCities: ["New Delhi", "Bhilai"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Manage large production teams; ensure safety compliance",
    website: "https://www.sail.co.in"
  },
  {
    id: "30",
    name: "ArcelorMittal Nippon Steel India",
    industrySector: "Steel",
    roles: ["Plant Manager", "Production Supervisor", "Quality Control Manager"],
    operationsFocus: "Steel manufacturing plants",
    keyCities: ["Mumbai", "Hazira"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Manage large production teams; ensure safety compliance",
    website: "https://www.amns.in"
  },
  {
    id: "31",
    name: "Jindal Stainless",
    industrySector: "Steel",
    roles: ["Plant Manager", "Production Supervisor", "Quality Control Manager"],
    operationsFocus: "Stainless steel manufacturing plants",
    keyCities: ["New Delhi", "Hisar"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Manage large production teams; ensure safety compliance",
    website: "https://www.jindalstainless.com"
  },
  {
    id: "32",
    name: "Essar Steel",
    industrySector: "Steel",
    roles: ["Plant Manager", "Production Supervisor", "Quality Control Manager"],
    operationsFocus: "Steel manufacturing plants",
    keyCities: ["Mumbai", "Hazira"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Manage large production teams; ensure safety compliance",
    website: "https://www.essar.com"
  },

  // Mining Industry
  {
    id: "33",
    name: "Coal India",
    industrySector: "Mining",
    roles: ["Mining Engineer", "Safety Officer", "Operations Manager"],
    operationsFocus: "Coal mines",
    keyCities: ["Kolkata", "Ranchi"],
    helpfulCertifications: ["Industrial-safety cert", "Mining Certifications"],
    positioningTips: "Safety compliance; operational efficiency",
    website: "https://www.coalindia.in"
  },
  {
    id: "34",
    name: "NMDC",
    industrySector: "Mining",
    roles: ["Mining Engineer", "Safety Officer", "Operations Manager"],
    operationsFocus: "Iron ore mines",
    keyCities: ["Hyderabad", "Donimalai"],
    helpfulCertifications: ["Industrial-safety cert", "Mining Certifications"],
    positioningTips: "Safety compliance; operational efficiency",
    website: "https://www.nmdc.co.in"
  },

  // Metals Industry
  {
    id: "35",
    name: "Hindalco Industries",
    industrySector: "Metals",
    roles: ["Plant Manager", "Operations Lead", "Quality Manager"],
    operationsFocus: "Aluminium smelters",
    keyCities: ["Mumbai", "Renukoot"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality control",
    website: "https://www.hindalco.com"
  },
  {
    id: "36",
    name: "National Aluminium Company",
    industrySector: "Metals",
    roles: ["Plant Manager", "Operations Lead", "Quality Manager"],
    operationsFocus: "Aluminium smelters",
    keyCities: ["Bhubaneswar", "Angul"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality control",
    website: "https://nalcoindia.com"
  },
  {
    id: "37",
    name: "Hindustan Zinc",
    industrySector: "Metals",
    roles: ["Plant Manager", "Operations Lead", "Quality Manager"],
    operationsFocus: "Zinc smelters",
    keyCities: ["Udaipur", "Mumbai"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality control",
    website: "https://www.hzlindia.com"
  },

  // Energy Industry
  {
    id: "38",
    name: "NTPC Limited",
    industrySector: "Energy",
    roles: ["Power Plant Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Thermal power plants",
    keyCities: ["New Delhi", "Noida"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Power generation; plant maintenance",
    website: "https://www.ntpc.co.in"
  },
  {
    id: "39",
    name: "Adani Power",
    industrySector: "Energy",
    roles: ["Power Plant Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Thermal power plants",
    keyCities: ["Ahmedabad", "Mundra"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Power generation; plant maintenance",
    website: "https://www.adanipower.com"
  },
  {
    id: "40",
    name: "Tata Power",
    industrySector: "Energy",
    roles: ["Power Plant Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Thermal power plants",
    keyCities: ["Mumbai", "Trombay"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Power generation; plant maintenance",
    website: "https://www.tatapower.com"
  },
  {
    id: "41",
    name: "JSW Energy",
    industrySector: "Energy",
    roles: ["Power Plant Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Thermal power plants",
    keyCities: ["Mumbai", "Vijayanagar"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Power generation; plant maintenance",
    website: "https://www.jsw.in/energy"
  },
  {
    id: "42",
    name: "Torrent Power",
    industrySector: "Energy",
    roles: ["Power Plant Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Thermal power plants",
    keyCities: ["Ahmedabad", "Surat"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Power generation; plant maintenance",
    website: "https://www.torrentpower.com"
  },
  {
    id: "43",
    name: "Reliance Power",
    industrySector: "Energy",
    roles: ["Power Plant Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Thermal power plants",
    keyCities: ["Mumbai", "Noida"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Power generation; plant maintenance",
    website: "https://www.reliancepower.co.in"
  },
  {
    id: "44",
    name: "Power Grid Corporation of India",
    industrySector: "Energy",
    roles: ["Project Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Power transmission projects",
    keyCities: ["Gurgaon", "Delhi"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Power transmission; project execution",
    website: "https://www.powergridindia.com"
  },
  {
    id: "45",
    name: "NHPC Limited",
    industrySector: "Energy",
    roles: ["Project Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Hydropower projects",
    keyCities: ["Faridabad", "Delhi"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Renewable energy project execution",
    website: "https://www.nhpcindia.com"
  },
  {
    id: "46",
    name: "Adani Green Energy",
    industrySector: "Energy",
    roles: ["Renewable Energy Project Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Solar and wind projects",
    keyCities: ["Ahmedabad", "Jaisalmer"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Renewable energy project execution",
    website: "https://www.adanigreenenergy.com"
  },
  {
    id: "47",
    name: "Suzlon Energy",
    industrySector: "Energy",
    roles: ["Renewable Energy Project Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Wind energy projects",
    keyCities: ["Pune", "Nashik"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Renewable energy project execution",
    website: "https://www.suzlon.com"
  },
  {
    id: "48",
    name: "ReNew Power",
    industrySector: "Energy",
    roles: ["Renewable Energy Project Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Solar and wind projects",
    keyCities: ["New Delhi", "Gurgaon"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Renewable energy project execution",
    website: "https://www.renewpower.in"
  },
  {
    id: "49",
    name: "Adani Transmission",
    industrySector: "Energy",
    roles: ["Project Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Power transmission projects",
    keyCities: ["Ahmedabad", "Mumbai"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Power transmission; project execution",
    website: "https://www.adanitransmission.com"
  },
  {
    id: "50",
    name: "Sterlite Power",
    industrySector: "Energy",
    roles: ["Project Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Power transmission projects",
    keyCities: ["Pune", "Mumbai"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Power transmission; project execution",
    website: "https://www.sterlitepower.com"
  },
  {
    id: "51",
    name: "BHEL",
    industrySector: "Energy",
    roles: ["Power Plant Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Thermal power plants",
    keyCities: ["New Delhi", "Noida"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Power generation; plant maintenance",
    website: "https://www.bhel.com"
  },

  // Defence Industry
  {
    id: "52",
    name: "Bharat Electronics",
    industrySector: "Defence",
    roles: ["Project Manager", "Systems Engineer", "Quality Assurance Manager"],
    operationsFocus: "Defence electronics manufacturing",
    keyCities: ["Bengaluru", "Ghaziabad"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Defence project execution; quality control",
    website: "https://www.bel-india.in"
  },
  {
    id: "53",
    name: "Hindustan Aeronautics Limited",
    industrySector: "Defence",
    roles: ["Aerospace Engineer", "Project Manager", "Quality Manager"],
    operationsFocus: "Aircraft manufacturing",
    keyCities: ["Bengaluru", "Hyderabad"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Aerospace project execution; quality control",
    website: "https://hal-india.co.in"
  },
  {
    id: "54",
    name: "Bharat Dynamics",
    industrySector: "Defence",
    roles: ["Project Manager", "Systems Engineer", "Quality Assurance Manager"],
    operationsFocus: "Missile systems manufacturing",
    keyCities: ["Hyderabad", "Kanchanbagh"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Defence project execution; quality control",
    website: "https://bdl-india.in"
  },
  {
    id: "55",
    name: "Solar Industries India",
    industrySector: "Defence",
    roles: ["Project Manager", "Systems Engineer", "Quality Assurance Manager"],
    operationsFocus: "Explosives manufacturing",
    keyCities: ["Nagpur", "Mumbai"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Defence project execution; quality control",
    website: "https://www.solargroup.com"
  },
  {
    id: "56",
    name: "Mazagon Dock Shipbuilders",
    industrySector: "Defence",
    roles: ["Project Manager", "Systems Engineer", "Quality Assurance Manager"],
    operationsFocus: "Shipbuilding and defence",
    keyCities: ["Mumbai", "Nhava"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Defence project execution; quality control",
    website: "https://mazagondock.in"
  },
  {
    id: "57",
    name: "Garden Reach Shipbuilders",
    industrySector: "Defence",
    roles: ["Project Manager", "Systems Engineer", "Quality Assurance Manager"],
    operationsFocus: "Shipbuilding and defence",
    keyCities: ["Kolkata", "Mumbai"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Defence project execution; quality control",
    website: "https://www.grse.in"
  },
  {
    id: "58",
    name: "Cochin Shipyard",
    industrySector: "Defence",
    roles: ["Project Manager", "Systems Engineer", "Quality Assurance Manager"],
    operationsFocus: "Shipbuilding and defence",
    keyCities: ["Kochi", "Mumbai"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Defence project execution; quality control",
    website: "https://cochinshipyard.in"
  },

  // E-commerce & Logistics
  {
    id: "59",
    name: "Amazon India",
    industrySector: "E-commerce, 3PL",
    roles: ["FC Ops Manager", "Process Engineer", "Loss-Prevention Manager"],
    operationsFocus: "Fulfilment centres; last-mile; security",
    keyCities: ["Hyderabad", "Bengaluru", "Delhi NCR", "Mumbai", "Pune"],
    helpfulCertifications: ["Six Sigma GB", "CSCP"],
    positioningTips: "Bias-for-action & convoy-style logistics under stress",
    website: "https://www.amazon.in"
  },
  {
    id: "60",
    name: "Flipkart",
    industrySector: "E-commerce",
    roles: ["Warehouse Manager", "Hub Lead", "Route Planner"],
    operationsFocus: "National DC network",
    keyCities: ["Bengaluru", "Mumbai", "NCR"],
    helpfulCertifications: ["CSCP", "WMS tools"],
    positioningTips: "Crisis logistics; SLA discipline",
    website: "https://www.flipkart.com"
  },
  {
    id: "61",
    name: "Delhivery",
    industrySector: "Tech-Logistics",
    roles: ["Network Control-Tower Lead"],
    operationsFocus: "First / last-mile optimisation",
    keyCities: ["Gurugram", "Bengaluru"],
    helpfulCertifications: ["Data analytics bootcamp"],
    positioningTips: "Data-driven ops + mission command style",
    website: "https://www.delhivery.com"
  },
  {
    id: "62",
    name: "Mahindra Logistics",
    industrySector: "3PL & In-house",
    roles: ["Fleet Manager", "Regional Ops Head"],
    operationsFocus: "Auto / retail distribution",
    keyCities: ["Mumbai", "Pune", "Chennai"],
    helpfulCertifications: ["SCM diploma", "SAP MM"],
    positioningTips: "Fleet command = army transport regiment",
    website: "https://www.mahindralogistics.com"
  },
  {
    id: "63",
    name: "DHL",
    industrySector: "Express Logistics",
    roles: ["Gateway Ops", "Network Planner"],
    operationsFocus: "Air & ground hubs",
    keyCities: ["Chennai", "Kolkata", "Delhi"],
    helpfulCertifications: ["IATA DGR", "Lean"],
    positioningTips: "Global SOP adherence ≈ military SOPs",
    website: "https://www.dhl.com/in-en/home.html"
  },
  {
    id: "64",
    name: "Blue Dart",
    industrySector: "Express Logistics",
    roles: ["Gateway Ops", "Network Planner"],
    operationsFocus: "Air & ground hubs",
    keyCities: ["Chennai", "Kolkata", "Delhi"],
    helpfulCertifications: ["IATA DGR", "Lean"],
    positioningTips: "Global SOP adherence ≈ military SOPs",
    website: "https://www.bluedart.com"
  },
  {
    id: "65",
    name: "VRL Logistics",
    industrySector: "Logistics",
    roles: ["Fleet Manager", "Warehouse Manager", "Route Planner"],
    operationsFocus: "Transport and logistics",
    keyCities: ["Hubli", "Bengaluru"],
    helpfulCertifications: ["CSCP", "WMS tools"],
    positioningTips: "Crisis logistics; SLA discipline",
    website: "https://www.vrllogistics.com"
  },
  {
    id: "66",
    name: "Allcargo Logistics",
    industrySector: "Logistics",
    roles: ["Gateway Ops", "Network Planner"],
    operationsFocus: "Air & ground hubs",
    keyCities: ["Mumbai", "Bengaluru"],
    helpfulCertifications: ["IATA DGR", "Lean"],
    positioningTips: "Global SOP adherence ≈ military SOPs",
    website: "https://www.allcargologistics.com"
  },
  {
    id: "67",
    name: "Safexpress",
    industrySector: "Logistics",
    roles: ["Warehouse Manager", "Hub Lead", "Route Planner"],
    operationsFocus: "National DC network",
    keyCities: ["Delhi", "Mumbai"],
    helpfulCertifications: ["CSCP", "WMS tools"],
    positioningTips: "Crisis logistics; SLA discipline",
    website: "https://www.safexpress.com"
  },
  {
    id: "68",
    name: "TCI Express",
    industrySector: "Logistics",
    roles: ["Warehouse Manager", "Hub Lead", "Route Planner"],
    operationsFocus: "Express logistics",
    keyCities: ["Gurgaon", "Mumbai"],
    helpfulCertifications: ["CSCP", "WMS tools"],
    positioningTips: "Crisis logistics; SLA discipline",
    website: "https://www.tciexpress.in"
  },
  {
    id: "69",
    name: "Gati",
    industrySector: "Logistics",
    roles: ["Gateway Ops", "Network Planner"],
    operationsFocus: "Air & ground hubs",
    keyCities: ["Hyderabad", "Mumbai"],
    helpfulCertifications: ["IATA DGR", "Lean"],
    positioningTips: "Global SOP adherence ≈ military SOPs",
    website: "https://www.gati.com"
  },
  {
    id: "70",
    name: "DTDC Express",
    industrySector: "Logistics",
    roles: ["Warehouse Manager", "Hub Lead", "Route Planner"],
    operationsFocus: "National DC network",
    keyCities: ["Bengaluru", "Mumbai"],
    helpfulCertifications: ["CSCP", "WMS tools"],
    positioningTips: "Crisis logistics; SLA discipline",
    website: "https://www.dtdc.in"
  },

  // IT Services
  {
    id: "71",
    name: "Infosys",
    industrySector: "IT Services",
    roles: ["Cyber Analyst", "NOC Lead", "IT Project Manager"],
    operationsFocus: "Security operations; network ops",
    keyCities: ["Bengaluru", "Pune", "Hyderabad"],
    helpfulCertifications: ["CISSP", "CISM", "ITIL"],
    positioningTips: "Securing classified comms → securing client data",
    website: "https://www.infosys.com"
  },
  {
    id: "72",
    name: "IBM India",
    industrySector: "Technology & Consulting",
    roles: ["Security Manager", "Cloud Infra PM", "Risk Lead"],
    operationsFocus: "Cloud & security services",
    keyCities: ["Bengaluru", "Gurugram", "Pune"],
    helpfulCertifications: ["AWS/Azure", "Agile-PM"],
    positioningTips: "Process discipline; cross-functional mission planning",
    website: "https://www.ibm.com/in-en"
  },
  {
    id: "73",
    name: "TCS",
    industrySector: "IT Services",
    roles: ["Delivery Manager", "Cyber Ops", "PMO"],
    operationsFocus: "Global delivery centres",
    keyCities: ["Mumbai", "Bengaluru", "Chennai", "Hyderabad", "Pune"],
    helpfulCertifications: ["PMP", "Agile-Scrum"],
    positioningTips: "Large-scale rollout = ops room coordination",
    website: "https://www.tcs.com"
  },
  {
    id: "74",
    name: "Wipro",
    industrySector: "IT Services",
    roles: ["Delivery Manager", "Cyber Ops", "PMO"],
    operationsFocus: "Global delivery centres",
    keyCities: ["Bengaluru", "Pune", "Hyderabad"],
    helpfulCertifications: ["PMP", "Agile-Scrum"],
    positioningTips: "Large-scale rollout = ops room coordination",
    website: "https://www.wipro.com"
  },
  {
    id: "75",
    name: "HCL Technologies",
    industrySector: "IT Services",
    roles: ["Cyber Analyst", "IT Project Manager", "Network-Security Lead"],
    operationsFocus: "Security operations; global delivery centres",
    keyCities: ["Noida", "Bengaluru", "Chennai"],
    helpfulCertifications: ["CISSP", "PMP", "ITIL"],
    positioningTips: "Securing client data; large-scale project coordination",
    website: "https://www.hcltech.com"
  },
  {
    id: "76",
    name: "Tech Mahindra",
    industrySector: "IT Services",
    roles: ["Cyber Analyst", "IT Project Manager", "Network-Security Lead"],
    operationsFocus: "Security operations; global delivery centres",
    keyCities: ["Pune", "Hyderabad", "Mumbai"],
    helpfulCertifications: ["CISSP", "PMP", "ITIL"],
    positioningTips: "Securing client data; large-scale project coordination",
    website: "https://www.techmahindra.com"
  },
  {
    id: "77",
    name: "LTIMindtree",
    industrySector: "IT Services",
    roles: ["Delivery Manager", "Cyber Ops", "PMO"],
    operationsFocus: "Global delivery centres",
    keyCities: ["Mumbai", "Bengaluru", "Pune"],
    helpfulCertifications: ["PMP", "Agile-Scrum"],
    positioningTips: "Large-scale rollout = ops room coordination",
    website: "https://www.ltimindtree.com"
  },
  {
    id: "78",
    name: "Oracle India",
    industrySector: "Technology & Consulting",
    roles: ["Cloud Architect", "Security Consultant", "Project Manager"],
    operationsFocus: "Cloud services; technology solutions",
    keyCities: ["Bengaluru", "Hyderabad", "Mumbai"],
    helpfulCertifications: ["AWS/Azure", "PMP", "ITIL"],
    positioningTips: "Cloud infrastructure management; security implementation",
    website: "https://www.oracle.com/in"
  },
  {
    id: "79",
    name: "Capgemini India",
    industrySector: "IT Services",
    roles: ["Delivery Manager", "Cyber Ops", "PMO"],
    operationsFocus: "Global delivery centres",
    keyCities: ["Mumbai", "Bengaluru", "Chennai", "Hyderabad", "Pune"],
    helpfulCertifications: ["PMP", "Agile-Scrum"],
    positioningTips: "Large-scale rollout = ops room coordination",
    website: "https://www.capgemini.com/in-en"
  },
  {
    id: "80",
    name: "Accenture India",
    industrySector: "Technology & Consulting",
    roles: ["Security Consultant", "Cloud Infra PM", "Risk Lead"],
    operationsFocus: "Cloud & security services",
    keyCities: ["Bengaluru", "Gurugram", "Mumbai", "Pune", "Hyderabad"],
    helpfulCertifications: ["AWS/Azure", "Agile-PM"],
    positioningTips: "Process discipline; cross-functional mission planning",
    website: "https://www.accenture.com/in-en"
  },
  {
    id: "81",
    name: "Cognizant",
    industrySector: "IT Services",
    roles: ["Delivery Manager", "Cyber Ops", "PMO"],
    operationsFocus: "Global delivery centres",
    keyCities: ["Chennai", "Mumbai", "Bengaluru", "Hyderabad", "Pune"],
    helpfulCertifications: ["PMP", "Agile-Scrum"],
    positioningTips: "Large-scale rollout = ops room coordination",
    website: "https://www.cognizant.com/in/en"
  },
  {
    id: "82",
    name: "Mphasis",
    industrySector: "IT Services",
    roles: ["Cyber Analyst", "IT Project Manager", "Network-Security Lead"],
    operationsFocus: "Security operations; global delivery centres",
    keyCities: ["Bengaluru", "Pune", "Mumbai"],
    helpfulCertifications: ["CISSP", "PMP", "ITIL"],
    positioningTips: "Securing client data; large-scale project coordination",
    website: "https://www.mphasis.com"
  },
  {
    id: "83",
    name: "Persistent Systems",
    industrySector: "IT Services",
    roles: ["Delivery Manager", "Cyber Ops", "PMO"],
    operationsFocus: "Global delivery centres",
    keyCities: ["Pune", "Nagpur", "Hyderabad"],
    helpfulCertifications: ["PMP", "Agile-Scrum"],
    positioningTips: "Large-scale rollout = ops room coordination",
    website: "https://www.persistent.com"
  },
  {
    id: "84",
    name: "Tata Elxsi",
    industrySector: "Technology",
    roles: ["Project Manager", "Systems Engineer", "Quality Assurance Manager"],
    operationsFocus: "Product engineering; embedded systems",
    keyCities: ["Bengaluru", "Chennai", "Pune"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Project execution; quality control",
    website: "https://www.tataelxsi.com"
  },
  {
    id: "85",
    name: "KPIT Technologies",
    industrySector: "Technology",
    roles: ["Project Manager", "Systems Engineer", "Quality Assurance Manager"],
    operationsFocus: "Automotive engineering; digital transformation",
    keyCities: ["Pune", "Bengaluru", "Mumbai"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Project execution; quality control",
    website: "https://www.kpit.com"
  },
  {
    id: "86",
    name: "Zensar Technologies",
    industrySector: "IT Services",
    roles: ["Delivery Manager", "Cyber Ops", "PMO"],
    operationsFocus: "Global delivery centres",
    keyCities: ["Pune", "Hyderabad", "Mumbai"],
    helpfulCertifications: ["PMP", "Agile-Scrum"],
    positioningTips: "Large-scale rollout = ops room coordination",
    website: "https://www.zensar.com"
  },
  {
    id: "87",
    name: "Cyient",
    industrySector: "Engineering",
    roles: ["Project Manager", "Systems Engineer", "Quality Assurance Manager"],
    operationsFocus: "Aerospace engineering; geospatial services",
    keyCities: ["Hyderabad", "Bengaluru", "Mumbai"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Project execution; quality control",
    website: "https://www.cyient.com"
  },
  {
    id: "88",
    name: "Birlasoft",
    industrySector: "IT Services",
    roles: ["Delivery Manager", "Cyber Ops", "PMO"],
    operationsFocus: "Global delivery centres",
    keyCities: ["Noida", "Pune", "Chennai"],
    helpfulCertifications: ["PMP", "Agile-Scrum"],
    positioningTips: "Large-scale rollout = ops room coordination",
    website: "https://www.birlasoft.com"
  },
  {
    id: "89",
    name: "Hexaware Technologies",
    industrySector: "IT Services",
    roles: ["Cyber Analyst", "IT Project Manager", "Network-Security Lead"],
    operationsFocus: "Security operations; global delivery centres",
    keyCities: ["Mumbai", "Chennai", "Pune"],
    helpfulCertifications: ["CISSP", "PMP", "ITIL"],
    positioningTips: "Securing client data; large-scale project coordination",
    website: "https://hexaware.com"
  },
  {
    id: "90",
    name: "Mindtree",
    industrySector: "IT Services",
    roles: ["Delivery Manager", "Cyber Ops", "PMO"],
    operationsFocus: "Global delivery centres",
    keyCities: ["Bengaluru", "Chennai", "Pune"],
    helpfulCertifications: ["PMP", "Agile-Scrum"],
    positioningTips: "Large-scale rollout = ops room coordination",
    website: "https://www.ltimindtree.com" // Mindtree merged with LTIMindtree
  },
  {
    id: "91",
    name: "NIIT Technologies",
    industrySector: "IT Services",
    roles: ["Cyber Analyst", "IT Project Manager", "Network-Security Lead"],
    operationsFocus: "Security operations; global delivery centres",
    keyCities: ["Noida", "Bengaluru", "Mumbai"],
    helpfulCertifications: ["CISSP", "PMP", "ITIL"],
    positioningTips: "Securing client data; large-scale project coordination",
    website: "https://www.coforge.com" // NIIT Technologies rebranded to Coforge
  },
  {
    id: "92",
    name: "Infosys BPM",
    industrySector: "BPM",
    roles: ["Operations Manager", "Process Lead", "Quality Analyst"],
    operationsFocus: "Business process outsourcing",
    keyCities: ["Bengaluru", "Pune", "Chennai"],
    helpfulCertifications: ["Six Sigma", "Lean"],
    positioningTips: "Process optimization; quality control",
    website: "https://www.infosysbpm.com"
  },
  {
    id: "93",
    name: "WNS Global Services",
    industrySector: "BPM",
    roles: ["Operations Manager", "Process Lead", "Quality Analyst"],
    operationsFocus: "Business process outsourcing",
    keyCities: ["Mumbai", "Pune", "Gurgaon"],
    helpfulCertifications: ["Six Sigma", "Lean"],
    positioningTips: "Process optimization; quality control",
    website: "https://www.wns.com"
  },
  {
    id: "94",
    name: "Genpact",
    industrySector: "BPM",
    roles: ["Operations Manager", "Process Lead", "Quality Analyst"],
    operationsFocus: "Business process outsourcing",
    keyCities: ["Gurgaon", "Hyderabad", "Bengaluru"],
    helpfulCertifications: ["Six Sigma", "Lean"],
    positioningTips: "Process optimization; quality control",
    website: "https://www.genpact.com"
  },
  {
    id: "95",
    name: "Firstsource Solutions",
    industrySector: "BPM",
    roles: ["Operations Manager", "Process Lead", "Quality Analyst"],
    operationsFocus: "Business process outsourcing",
    keyCities: ["Mumbai", "Chennai", "Bengaluru"],
    helpfulCertifications: ["Six Sigma", "Lean"],
    positioningTips: "Process optimization; quality control",
    website: "https://www.firstsource.com"
  },
  {
    id: "96",
    name: "EXL Service",
    industrySector: "BPM",
    roles: ["Operations Manager", "Process Lead", "Quality Analyst"],
    operationsFocus: "Business process outsourcing",
    keyCities: ["Noida", "Pune", "Chennai"],
    helpfulCertifications: ["Six Sigma", "Lean"],
    positioningTips: "Process optimization; quality control",
    website: "https://www.exlservice.com"
  },
  {
    id: "97",
    name: "HGS",
    industrySector: "BPM",
    roles: ["Operations Manager", "Process Lead", "Quality Analyst"],
    operationsFocus: "Business process outsourcing",
    keyCities: ["Bengaluru", "Mumbai", "Hyderabad"],
    helpfulCertifications: ["Six Sigma", "Lean"],
    positioningTips: "Process optimization; quality control",
    website: "https://www.teamhgs.com"
  },
  {
    id: "98",
    name: "TCS BPS",
    industrySector: "BPM",
    roles: ["Operations Manager", "Process Lead", "Quality Analyst"],
    operationsFocus: "Business process outsourcing",
    keyCities: ["Mumbai", "Chennai", "Kolkata"],
    helpfulCertifications: ["Six Sigma", "Lean"],
    positioningTips: "Process optimization; quality control",
    website: "https://www.tcs.com/what-we-do/services/business-process-services"
  },
  {
    id: "99",
    name: "Wipro BPS",
    industrySector: "BPM",
    roles: ["Operations Manager", "Process Lead", "Quality Analyst"],
    operationsFocus: "Business process outsourcing",
    keyCities: ["Bengaluru", "Pune", "Hyderabad"],
    helpfulCertifications: ["Six Sigma", "Lean"],
    positioningTips: "Process optimization; quality control",
    website: "https://www.wipro.com/business-process-outsourcing"
  },
  {
    id: "100",
    name: "Tech Mahindra BPS",
    industrySector: "BPM",
    roles: ["Operations Manager", "Process Lead", "Quality Analyst"],
    operationsFocus: "Business process outsourcing",
    keyCities: ["Pune", "Hyderabad", "Mumbai"],
    helpfulCertifications: ["Six Sigma", "Lean"],
    positioningTips: "Process optimization; quality control",
    website: "https://www.techmahindra.com/en-in/business-process-outsourcing"
  },
  {
    id: "101",
    name: "Capgemini BPO",
    industrySector: "BPM",
    roles: ["Operations Manager", "Process Lead", "Quality Analyst"],
    operationsFocus: "Business process outsourcing",
    keyCities: ["Mumbai", "Bengaluru", "Chennai"],
    helpfulCertifications: ["Six Sigma", "Lean"],
    positioningTips: "Process optimization; quality control",
    website: "https://www.capgemini.com/in-en/service/business-services/business-process-outsourcing-bpo"
  },

  // Banking & Financial Services
  {
    id: "102",
    name: "JPMorgan Chase",
    industrySector: "Banking GCC",
    roles: ["Ops Manager", "Tech PM", "Control Officer"],
    operationsFocus: "Transaction processing; technology delivery",
    keyCities: ["Mumbai", "Bengaluru"],
    helpfulCertifications: ["MBA/Finance cert", "PMP"],
    positioningTips: "High-integrity process control akin to ops rooms",
    website: "https://www.jpmorganchase.com"
  },
  {
    id: "103",
    name: "State Bank of India",
    industrySector: "Banking",
    roles: ["Ops Manager", "Risk Analyst", "Control Officer"],
    operationsFocus: "Banking operations; risk management",
    keyCities: ["Mumbai", "Delhi"],
    helpfulCertifications: ["MBA/Finance cert", "IRM Risk-Mgmt"],
    positioningTips: "High-integrity process control; operational risk management",
    website: "https://www.sbi.co.in"
  },
  {
    id: "104",
    name: "HDFC Bank",
    industrySector: "Banking",
    roles: ["Ops Manager", "Risk Analyst", "Control Officer"],
    operationsFocus: "Banking operations; risk management",
    keyCities: ["Mumbai", "Delhi"],
    helpfulCertifications: ["MBA/Finance cert", "IRM Risk-Mgmt"],
    positioningTips: "High-integrity process control; operational risk management",
    website: "https://www.hdfcbank.com"
  },
  {
    id: "105",
    name: "ICICI Bank",
    industrySector: "Banking",
    roles: ["Ops Manager", "Risk Analyst", "Control Officer"],
    operationsFocus: "Banking operations; risk management",
    keyCities: ["Mumbai", "Delhi"],
    helpfulCertifications: ["MBA/Finance cert", "IRM Risk-Mgmt"],
    positioningTips: "High-integrity process control; operational risk management",
    website: "https://www.icicibank.com"
  },
  {
    id: "106",
    name: "Axis Bank",
    industrySector: "Banking",
    roles: ["Ops Manager", "Risk Analyst", "Control Officer"],
    operationsFocus: "Banking operations; risk management",
    keyCities: ["Mumbai", "Delhi"],
    helpfulCertifications: ["MBA/Finance cert", "IRM Risk-Mgmt"],
    positioningTips: "High-integrity process control; operational risk management",
    website: "https://www.axisbank.com"
  },
  {
    id: "107",
    name: "Kotak Mahindra Bank",
    industrySector: "Banking",
    roles: ["Ops Manager", "Risk Analyst", "Control Officer"],
    operationsFocus: "Banking operations; risk management",
    keyCities: ["Mumbai", "Delhi"],
    helpfulCertifications: ["MBA/Finance cert", "IRM Risk-Mgmt"],
    positioningTips: "High-integrity process control; operational risk management",
    website: "https://www.kotak.com"
  },
  {
    id: "108",
    name: "IndusInd Bank",
    industrySector: "Banking",
    roles: ["Ops Manager", "Risk Analyst", "Control Officer"],
    operationsFocus: "Banking operations; risk management",
    keyCities: ["Mumbai", "Delhi"],
    helpfulCertifications: ["MBA/Finance cert", "IRM Risk-Mgmt"],
    positioningTips: "High-integrity process control; operational risk management",
    website: "https://www.indusind.com"
  },
  {
    id: "109",
    name: "Yes Bank",
    industrySector: "Banking",
    roles: ["Ops Manager", "Risk Analyst", "Control Officer"],
    operationsFocus: "Banking operations; risk management",
    keyCities: ["Mumbai", "Delhi"],
    helpfulCertifications: ["MBA/Finance cert", "IRM Risk-Mgmt"],
    positioningTips: "High-integrity process control; operational risk management",
    website: "https://www.yesbank.in"
  },
  {
    id: "110",
    name: "IDFC First Bank",
    industrySector: "Banking",
    roles: ["Ops Manager", "Risk Analyst", "Control Officer"],
    operationsFocus: "Banking operations; risk management",
    keyCities: ["Mumbai", "Delhi"],
    helpfulCertifications: ["MBA/Finance cert", "IRM Risk-Mgmt"],
    positioningTips: "High-integrity process control; operational risk management",
    website: "https://www.idfcfirstbank.com"
  },
  {
    id: "111",
    name: "AU Small Finance Bank",
    industrySector: "Banking",
    roles: ["Ops Manager", "Risk Analyst", "Control Officer"],
    operationsFocus: "Banking operations; risk management",
    keyCities: ["Jaipur", "Delhi"],
    helpfulCertifications: ["MBA/Finance cert", "IRM Risk-Mgmt"],
    positioningTips: "High-integrity process control; operational risk management",
    website: "https://www.aubank.in"
  },
  {
    id: "112",
    name: "Bajaj Finserv",
    industrySector: "Financial Services",
    roles: ["Ops Manager", "Risk Analyst", "Control Officer"],
    operationsFocus: "Financial services operations; risk management",
    keyCities: ["Pune", "Mumbai"],
    helpfulCertifications: ["MBA/Finance cert", "IRM Risk-Mgmt"],
    positioningTips: "High-integrity process control akin to ops rooms",
    website: "https://www.bajajfinserv.in"
  },
  {
    id: "113",
    name: "HDB Financial Services",
    industrySector: "Financial Services",
    roles: ["Ops Manager", "Risk Analyst", "Control Officer"],
    operationsFocus: "Financial services operations; risk management",
    keyCities: ["Ahmedabad", "Mumbai"],
    helpfulCertifications: ["MBA/Finance cert", "IRM Risk-Mgmt"],
    positioningTips: "High-integrity process control; operational risk management",
    website: "https://www.hdbfs.com"
  },
  {
    id: "114",
    name: "Shriram Transport Finance",
    industrySector: "Financial Services",
    roles: ["Ops Manager", "Risk Analyst", "Control Officer"],
    operationsFocus: "Financial services operations; risk management",
    keyCities: ["Mumbai", "Chennai"],
    helpfulCertifications: ["MBA/Finance cert", "IRM Risk-Mgmt"],
    positioningTips: "High-integrity process control; operational risk management",
    website: "https://www.stfc.in"
  },
  {
    id: "115",
    name: "Mahindra Finance",
    industrySector: "Financial Services",
    roles: ["Ops Manager", "Risk Analyst", "Control Officer"],
    operationsFocus: "Financial services operations; risk management",
    keyCities: ["Mumbai", "Delhi"],
    helpfulCertifications: ["MBA/Finance cert", "IRM Risk-Mgmt"],
    positioningTips: "High-integrity process control; operational risk management",
    website: "https://www.mahindrafinance.com"
  },
  {
    id: "116",
    name: "L&T Finance",
    industrySector: "Financial Services",
    roles: ["Ops Manager", "Risk Analyst", "Control Officer"],
    operationsFocus: "Financial services operations; risk management",
    keyCities: ["Mumbai", "Chennai"],
    helpfulCertifications: ["MBA/Finance cert", "IRM Risk-Mgmt"],
    positioningTips: "High-integrity process control; operational risk management",
    website: "https://www.ltfs.com"
  },
  {
    id: "117",
    name: "Muthoot Finance",
    industrySector: "Financial Services",
    roles: ["Ops Manager", "Risk Analyst", "Control Officer"],
    operationsFocus: "Financial services operations; risk management",
    keyCities: ["Kochi", "Mumbai"],
    helpfulCertifications: ["MBA/Finance cert", "IRM Risk-Mgmt"],
    positioningTips: "High-integrity process control; operational risk management",
    website: "https://www.muthootfinance.com"
  },
  {
    id: "118",
    name: "Manappuram Finance",
    industrySector: "Financial Services",
    roles: ["Ops Manager", "Risk Analyst", "Control Officer"],
    operationsFocus: "Financial services operations; risk management",
    keyCities: ["Thrissur", "Mumbai"],
    helpfulCertifications: ["MBA/Finance cert", "IRM Risk-Mgmt"],
    positioningTips: "High-integrity process control; operational risk management",
    website: "https://www.manappuram.com"
  },
  {
    id: "119",
    name: "IIFL Finance",
    industrySector: "Financial Services",
    roles: ["Ops Manager", "Risk Analyst", "Control Officer"],
    operationsFocus: "Financial services operations; risk management",
    keyCities: ["Mumbai", "Delhi"],
    helpfulCertifications: ["MBA/Finance cert", "IRM Risk-Mgmt"],
    positioningTips: "High-integrity process control; operational risk management",
    website: "https://www.iifl.com"
  },
  {
    id: "120",
    name: "Piramal Capital & Housing Finance",
    industrySector: "Financial Services",
    roles: ["Ops Manager", "Risk Analyst", "Control Officer"],
    operationsFocus: "Financial services operations; risk management",
    keyCities: ["Mumbai", "Delhi"],
    helpfulCertifications: ["MBA/Finance cert", "IRM Risk-Mgmt"],
    positioningTips: "High-integrity process control; operational risk management",
    website: "https://www.piramal.com/businesses/piramal-capital-housing-finance"
  },

  // Consulting
  {
    id: "121",
    name: "Deloitte India",
    industrySector: "Management Consulting",
    roles: ["Ops Consultant", "Defence Advisory", "PMO"],
    operationsFocus: "Consulting & advisory services",
    keyCities: ["NCR", "Mumbai", "Bengaluru"],
    helpfulCertifications: ["MBA", "PMP"],
    positioningTips: "Strategic planning; stakeholder management from joint ops",
    website: "https://www2.deloitte.com/in/en.html"
  },
  {
    id: "122",
    name: "KPMG India",
    industrySector: "Management Consulting",
    roles: ["Ops Consultant", "Risk Consultant", "PMO"],
    operationsFocus: "Consulting & advisory services",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["MBA", "PMP"],
    positioningTips: "Strategic planning; stakeholder management from joint ops",
    website: "https://home.kpmg/in/en/home.html"
  },
  {
    id: "123",
    name: "Ernst & Young India",
    industrySector: "Management Consulting",
    roles: ["Ops Consultant", "Supply Chain Consultant", "PMO"],
    operationsFocus: "Consulting & advisory services",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["MBA", "PMP"],
    positioningTips: "Strategic planning; stakeholder management from joint ops",
    website: "https://www.ey.com/en_in"
  },
  {
    id: "124",
    name: "PwC India",
    industrySector: "Management Consulting",
    roles: ["Ops Consultant", "Technology Consultant", "PMO"],
    operationsFocus: "Consulting & advisory services",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["MBA", "PMP"],
    positioningTips: "Strategic planning; stakeholder management from joint ops",
    website: "https://www.pwc.in"
  },
  {
    id: "125",
    name: "McKinsey & Company India",
    industrySector: "Management Consulting",
    roles: ["Ops Consultant", "Strategy Consultant", "PMO"],
    operationsFocus: "Consulting & advisory services",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["MBA", "PMP"],
    positioningTips: "Strategic planning; stakeholder management from joint ops",
    website: "https://www.mckinsey.com/in"
  },
  {
    id: "126",
    name: "Boston Consulting Group India",
    industrySector: "Management Consulting",
    roles: ["Ops Consultant", "Digital Consultant", "PMO"],
    operationsFocus: "Consulting & advisory services",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["MBA", "PMP"],
    positioningTips: "Strategic planning; stakeholder management from joint ops",
    website: "https://www.bcg.com/en-in"
  },
  {
    id: "127",
    name: "Bain & Company India",
    industrySector: "Management Consulting",
    roles: ["Ops Consultant", "Financial Consultant", "PMO"],
    operationsFocus: "Consulting & advisory services",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["MBA", "PMP"],
    positioningTips: "Strategic planning; stakeholder management from joint ops",
    website: "https://www.bain.com/locations/asia-pacific/india"
  },
  {
    id: "128",
    name: "Tata Consultancy Services",
    industrySector: "IT Consulting",
    roles: ["Ops Consultant", "Technology Consultant", "PMO"],
    operationsFocus: "Consulting & advisory services",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["MBA", "PMP"],
    positioningTips: "Strategic planning; stakeholder management from joint ops",
    website: "https://www.tcs.com"
  },
  {
    id: "129",
    name: "Infosys Consulting",
    industrySector: "IT Consulting",
    roles: ["Ops Consultant", "Digital Consultant", "PMO"],
    operationsFocus: "Consulting & advisory services",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["MBA", "PMP"],
    positioningTips: "Strategic planning; stakeholder management from joint ops",
    website: "https://www.infosys.com/services/consulting.html"
  },
  {
    id: "130",
    name: "Wipro Consulting Services",
    industrySector: "IT Consulting",
    roles: ["Ops Consultant", "Strategy Consultant", "PMO"],
    operationsFocus: "Consulting & advisory services",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["MBA", "PMP"],
    positioningTips: "Strategic planning; stakeholder management from joint ops",
    website: "https://www.wipro.com/consulting"
  },

  // Construction & Infrastructure
  {
    id: "131",
    name: "Larsen & Toubro (L&T)",
    industrySector: "EPC, Defence, Infrastructure",
    roles: ["Project Manager", "Site Ops Manager", "EHS Lead"],
    operationsFocus: "Metro, highway & defence-manufacturing build-outs",
    keyCities: ["Mumbai", "Chennai", "Delhi"],
    helpfulCertifications: ["PMP", "Six Sigma", "Lean QC"],
    positioningTips: "Combat-zone engineering; resource planning in tough terrains",
    website: "https://www.larsentoubro.com"
  },
  {
    id: "132",
    name: "Tata Projects",
    industrySector: "Infrastructure Development",
    roles: ["Project Manager", "Construction Manager", "EHS Manager"],
    operationsFocus: "Infrastructure projects; construction",
    keyCities: ["Mumbai", "Delhi", "Chennai"],
    helpfulCertifications: ["PMP", "NEBOSH", "IOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.tataprojects.com"
  },
  {
    id: "133",
    name: "Adani Infrastructure",
    industrySector: "Infrastructure Development",
    roles: ["Project Manager", "Construction Manager", "EHS Manager"],
    operationsFocus: "Infrastructure projects; construction",
    keyCities: ["Ahmedabad", "Mumbai", "Delhi"],
    helpfulCertifications: ["PMP", "NEBOSH", "IOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.adaniinfra.com"
  },
  {
    id: "134",
    name: "Reliance Infrastructure",
    industrySector: "Infrastructure Development",
    roles: ["Project Manager", "Construction Manager", "EHS Manager"],
    operationsFocus: "Infrastructure projects; construction",
    keyCities: ["Mumbai", "Delhi", "Navi Mumbai"],
    helpfulCertifications: ["PMP", "NEBOSH", "IOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.rinfra.com"
  },
  {
    id: "135",
    name: "GMR Infrastructure",
    industrySector: "Infrastructure Development",
    roles: ["Project Manager", "Construction Manager", "EHS Manager"],
    operationsFocus: "Infrastructure projects; construction",
    keyCities: ["Delhi", "Hyderabad", "Bengaluru"],
    helpfulCertifications: ["PMP", "NEBOSH", "IOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.gmrgroup.in"
  },
  {
    id: "136",
    name: "GVK Infrastructure",
    industrySector: "Infrastructure Development",
    roles: ["Project Manager", "Construction Manager", "EHS Manager"],
    operationsFocus: "Infrastructure projects; construction",
    keyCities: ["Mumbai", "Hyderabad", "Bengaluru"],
    helpfulCertifications: ["PMP", "NEBOSH", "IOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.gvk.com"
  },
  {
    id: "137",
    name: "HCC",
    industrySector: "Construction",
    roles: ["Project Manager", "Construction Manager", "EHS Manager"],
    operationsFocus: "Construction projects; infrastructure",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["PMP", "NEBOSH", "IOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.hccindia.com"
  },
  {
    id: "138",
    name: "Shapoorji Pallonji",
    industrySector: "Construction",
    roles: ["Project Manager", "Construction Manager", "EHS Manager"],
    operationsFocus: "Construction projects; real estate",
    keyCities: ["Mumbai", "Delhi", "Pune"],
    helpfulCertifications: ["PMP", "NEBOSH", "IOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.shapoorjipallonji.com"
  },
  {
    id: "139",
    name: "Afcons Infrastructure",
    industrySector: "Construction",
    roles: ["Project Manager", "Construction Manager", "EHS Manager"],
    operationsFocus: "Construction projects; infrastructure",
    keyCities: ["Mumbai", "Delhi", "Chennai"],
    helpfulCertifications: ["PMP", "NEBOSH", "IOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.afcons.com"
  },
  {
    id: "140",
    name: "NCC Limited",
    industrySector: "Construction",
    roles: ["Project Manager", "Construction Manager", "EHS Manager"],
    operationsFocus: "Construction projects; infrastructure",
    keyCities: ["Hyderabad", "Chennai", "Bengaluru"],
    helpfulCertifications: ["PMP", "NEBOSH", "IOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.ncclimited.com"
  },
  {
    id: "141",
    name: "Dilip Buildcon",
    industrySector: "Construction",
    roles: ["Project Manager", "Construction Manager", "EHS Manager"],
    operationsFocus: "Construction projects; infrastructure",
    keyCities: ["Bhopal", "Mumbai", "Delhi"],
    helpfulCertifications: ["PMP", "NEBOSH", "IOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.dilipbuildcon.com"
  },
  {
    id: "142",
    name: "IRB Infrastructure Developers",
    industrySector: "Infrastructure Development",
    roles: ["Project Manager", "Construction Manager", "EHS Manager"],
    operationsFocus: "Infrastructure projects; highway construction",
    keyCities: ["Mumbai", "Pune", "Ahmedabad"],
    helpfulCertifications: ["PMP", "NEBOSH", "IOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.irb.co.in"
  },
  {
    id: "143",
    name: "Sadbhav Engineering",
    industrySector: "Construction",
    roles: ["Project Manager", "Construction Manager", "EHS Manager"],
    operationsFocus: "Construction projects; infrastructure",
    keyCities: ["Ahmedabad", "Mumbai", "Delhi"],
    helpfulCertifications: ["PMP", "NEBOSH", "IOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.sadbhaveng.com"
  },
  {
    id: "144",
    name: "KNR Constructions",
    industrySector: "Construction",
    roles: ["Project Manager", "Construction Manager", "EHS Manager"],
    operationsFocus: "Construction projects; infrastructure",
    keyCities: ["Hyderabad", "Chennai", "Bengaluru"],
    helpfulCertifications: ["PMP", "NEBOSH", "IOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.knrcl.com"
  },
  {
    id: "145",
    name: "Ashoka Buildcon",
    industrySector: "Construction",
    roles: ["Project Manager", "Construction Manager", "EHS Manager"],
    operationsFocus: "Construction projects; infrastructure",
    keyCities: ["Nashik", "Mumbai", "Pune"],
    helpfulCertifications: ["PMP", "NEBOSH", "IOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.ashokabuildcon.com"
  },
  {
    id: "146",
    name: "PNC Infratech",
    industrySector: "Construction",
    roles: ["Project Manager", "Construction Manager", "EHS Manager"],
    operationsFocus: "Construction projects; infrastructure",
    keyCities: ["Agra", "Delhi", "Kanpur"],
    helpfulCertifications: ["PMP", "NEBOSH", "IOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.pncinfratech.com"
  },
  {
    id: "147",
    name: "Montecarlo Limited",
    industrySector: "Construction",
    roles: ["Project Manager", "Construction Manager", "EHS Manager"],
    operationsFocus: "Construction projects; infrastructure",
    keyCities: ["Ahmedabad", "Mumbai", "Delhi"],
    helpfulCertifications: ["PMP", "NEBOSH", "IOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.montecarloltd.com"
  },
  {
    id: "148",
    name: "J Kumar Infraprojects",
    industrySector: "Construction",
    roles: ["Project Manager", "Construction Manager", "EHS Manager"],
    operationsFocus: "Construction projects; infrastructure",
    keyCities: ["Mumbai", "Delhi", "Pune"],
    helpfulCertifications: ["PMP", "NEBOSH", "IOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.jkumar.com"
  },
  {
    id: "149",
    name: "Hindustan Construction Company",
    industrySector: "Construction",
    roles: ["Project Manager", "Construction Manager", "EHS Manager"],
    operationsFocus: "Construction projects; infrastructure",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["PMP", "NEBOSH", "IOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.hccindia.com"
  },
  {
    id: "150",
    name: "Simplex Infrastructures",
    industrySector: "Construction",
    roles: ["Project Manager", "Construction Manager", "EHS Manager"],
    operationsFocus: "Construction projects; infrastructure",
    keyCities: ["Kolkata", "Mumbai", "Delhi"],
    helpfulCertifications: ["PMP", "NEBOSH", "IOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.simplexinfra.com"
  },

  // Retail
  {
    id: "151",
    name: "Reliance Retail",
    industrySector: "Retail",
    roles: ["Store Manager", "Supply Chain Manager", "Operations Lead"],
    operationsFocus: "Retail stores; supply chain",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["CSCP", "Six Sigma"],
    positioningTips: "Inventory management; customer service excellence",
    website: "https://www.relianceretail.com"
  },
  {
    id: "152",
    name: "Future Group",
    industrySector: "Retail",
    roles: ["Store Manager", "Supply Chain Manager", "Operations Lead"],
    operationsFocus: "Retail stores; supply chain",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["CSCP", "Six Sigma"],
    positioningTips: "Inventory management; customer service excellence",
    website: "https://www.futuregroup.in"
  },
  {
    id: "153",
    name: "Aditya Birla Fashion and Retail",
    industrySector: "Retail",
    roles: ["Store Manager", "Supply Chain Manager", "Operations Lead"],
    operationsFocus: "Retail stores; supply chain",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["CSCP", "Six Sigma"],
    positioningTips: "Inventory management; customer service excellence",
    website: "https://www.abfrl.com"
  },
  {
    id: "154",
    name: "Shoppers Stop",
    industrySector: "Retail",
    roles: ["Store Manager", "Supply Chain Manager", "Operations Lead"],
    operationsFocus: "Retail stores; supply chain",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["CSCP", "Six Sigma"],
    positioningTips: "Inventory management; customer service excellence",
    website: "https://www.shoppersstop.com"
  },
  {
    id: "155",
    name: "Pantaloons",
    industrySector: "Retail",
    roles: ["Store Manager", "Supply Chain Manager", "Operations Lead"],
    operationsFocus: "Retail stores; supply chain",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["CSCP", "Six Sigma"],
    positioningTips: "Inventory management; customer service excellence",
    website: "https://www.pantaloons.com"
  },
  {
    id: "156",
    name: "Lifestyle International",
    industrySector: "Retail",
    roles: ["Store Manager", "Supply Chain Manager", "Operations Lead"],
    operationsFocus: "Retail stores; supply chain",
    keyCities: ["Bengaluru", "Mumbai", "Delhi"],
    helpfulCertifications: ["CSCP", "Six Sigma"],
    positioningTips: "Inventory management; customer service excellence",
    website: "https://www.lifestylestores.com"
  },
  {
    id: "157",
    name: "Westside",
    industrySector: "Retail",
    roles: ["Store Manager", "Supply Chain Manager", "Operations Lead"],
    operationsFocus: "Retail stores; supply chain",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["CSCP", "Six Sigma"],
    positioningTips: "Inventory management; customer service excellence",
    website: "https://www.westside.com"
  },
  {
    id: "158",
    name: "V-Mart Retail",
    industrySector: "Retail",
    roles: ["Store Manager", "Supply Chain Manager", "Operations Lead"],
    operationsFocus: "Retail stores; supply chain",
    keyCities: ["New Delhi", "Lucknow", "Patna"],
    helpfulCertifications: ["CSCP", "Six Sigma"],
    positioningTips: "Inventory management; customer service excellence",
    website: "https://www.vmartretail.com"
  },
  {
    id: "159",
    name: "Reliance Trends",
    industrySector: "Retail",
    roles: ["Store Manager", "Supply Chain Manager", "Operations Lead"],
    operationsFocus: "Retail stores; supply chain",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["CSCP", "Six Sigma"],
    positioningTips: "Inventory management; customer service excellence",
    website: "https://www.reliancetrends.com"
  },
  {
    id: "160",
    name: "D-Mart (Avenue Supermarts)",
    industrySector: "Retail",
    roles: ["Store Manager", "Supply Chain Manager", "Operations Lead"],
    operationsFocus: "Retail stores; supply chain",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["CSCP", "Six Sigma"],
    positioningTips: "Inventory management; customer service excellence",
    website: "https://www.dmartindia.com"
  },

  // Consumer Goods
  {
    id: "161",
    name: "Hindustan Unilever",
    industrySector: "Consumer Goods",
    roles: ["Production Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "FMCG manufacturing; distribution",
    keyCities: ["Mumbai", "Bengaluru", "Delhi"],
    helpfulCertifications: ["Six Sigma", "Lean Manufacturing"],
    positioningTips: "Production optimization; supply chain efficiency",
    website: "https://www.hul.co.in"
  },
  {
    id: "162",
    name: "Procter & Gamble India",
    industrySector: "Consumer Goods",
    roles: ["Production Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "FMCG manufacturing; distribution",
    keyCities: ["Mumbai", "Hyderabad", "Delhi"],
    helpfulCertifications: ["Six Sigma", "Lean Manufacturing"],
    positioningTips: "Production optimization; supply chain efficiency",
    website: "https://www.pg.com/en_IN"
  },
  {
    id: "163",
    name: "Nestlé India",
    industrySector: "Consumer Goods",
    roles: ["Production Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "FMCG manufacturing; distribution",
    keyCities: ["Gurgaon", "Mumbai", "Delhi"],
    helpfulCertifications: ["Six Sigma", "Lean Manufacturing"],
    positioningTips: "Production optimization; supply chain efficiency",
    website: "https://www.nestle.in"
  },
  {
    id: "164",
    name: "Dabur India",
    industrySector: "Consumer Goods",
    roles: ["Production Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "FMCG manufacturing; distribution",
    keyCities: ["New Delhi", "Ghaziabad"],
    helpfulCertifications: ["Six Sigma", "Lean Manufacturing"],
    positioningTips: "Production optimization; supply chain efficiency",
    website: "https://www.dabur.com"
  },
  {
    id: "165",
    name: "Godrej Consumer Products",
    industrySector: "Consumer Goods",
    roles: ["Production Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "FMCG manufacturing; distribution",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["Six Sigma", "Lean Manufacturing"],
    positioningTips: "Production optimization; supply chain efficiency",
    website: "https://www.godrejcp.com"
  },
  {
    id: "166",
    name: "Marico",
    industrySector: "Consumer Goods",
    roles: ["Production Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "FMCG manufacturing; distribution",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["Six Sigma", "Lean Manufacturing"],
    positioningTips: "Production optimization; supply chain efficiency",
    website: "https://marico.com"
  },
  {
    id: "167",
    name: "Britannia Industries",
    industrySector: "Consumer Goods",
    roles: ["Production Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "FMCG manufacturing; distribution",
    keyCities: ["Bengaluru", "Mumbai", "Delhi"],
    helpfulCertifications: ["Six Sigma", "Lean Manufacturing"],
    positioningTips: "Production optimization; supply chain efficiency",
    website: "https://britannia.co.in"
  },
  {
    id: "168",
    name: "Emami",
    industrySector: "Consumer Goods",
    roles: ["Production Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "FMCG manufacturing; distribution",
    keyCities: ["Kolkata", "Mumbai", "Delhi"],
    helpfulCertifications: ["Six Sigma", "Lean Manufacturing"],
    positioningTips: "Production optimization; supply chain efficiency",
    website: "https://www.emamiltd.in"
  },
  {
    id: "169",
    name: "Colgate-Palmolive India",
    industrySector: "Consumer Goods",
    roles: ["Production Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "FMCG manufacturing; distribution",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["Six Sigma", "Lean Manufacturing"],
    positioningTips: "Production optimization; supply chain efficiency",
    website: "https://www.colgatepalmolive.co.in"
  },
  {
    id: "170",
    name: "ITC Limited",
    industrySector: "Consumer Goods",
    roles: ["Production Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "FMCG manufacturing; distribution",
    keyCities: ["Kolkata", "Mumbai", "Delhi"],
    helpfulCertifications: ["Six Sigma", "Lean Manufacturing"],
    positioningTips: "Production optimization; supply chain efficiency",
    website: "https://www.itcportal.com"
  },

  // Pharmaceuticals
  {
    id: "171",
    name: "Sun Pharmaceutical Industries",
    industrySector: "Pharmaceuticals",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Pharma manufacturing; quality assurance",
    keyCities: ["Mumbai", "Vadodara", "Delhi"],
    helpfulCertifications: ["Six Sigma", "GMP"],
    positioningTips: "Regulatory compliance; production efficiency",
    website: "https://www.sunpharma.com"
  },
  {
    id: "172",
    name: "Dr. Reddy’s Laboratories",
    industrySector: "Pharmaceuticals",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Pharma manufacturing; quality assurance",
    keyCities: ["Hyderabad", "Mumbai", "Delhi"],
    helpfulCertifications: ["Six Sigma", "GMP"],
    positioningTips: "Regulatory compliance; production efficiency",
    website: "https://www.drreddys.com"
  },
  {
    id: "173",
    name: "Cipla",
    industrySector: "Pharmaceuticals",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Pharma manufacturing; quality assurance",
    keyCities: ["Mumbai", "Pune", "Delhi"],
    helpfulCertifications: ["Six Sigma", "GMP"],
    positioningTips: "Regulatory compliance; production efficiency",
    website: "https://www.cipla.com"
  },
  {
    id: "174",
    name: "Lupin",
    industrySector: "Pharmaceuticals",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Pharma manufacturing; quality assurance",
    keyCities: ["Mumbai", "Pune", "Nagpur"],
    helpfulCertifications: ["Six Sigma", "GMP"],
    positioningTips: "Regulatory compliance; production efficiency",
    website: "https://www.lupin.com"
  },
  {
    id: "175",
    name: "Aurobindo Pharma",
    industrySector: "Pharmaceuticals",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Pharma manufacturing; quality assurance",
    keyCities: ["Hyderabad", "Mumbai", "Delhi"],
    helpfulCertifications: ["Six Sigma", "GMP"],
    positioningTips: "Regulatory compliance; production efficiency",
    website: "https://www.aurobindo.com"
  },
  {
    id: "176",
    name: "Cadila Healthcare",
    industrySector: "Pharmaceuticals",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Pharma manufacturing; quality assurance",
    keyCities: ["Ahmedabad", "Mumbai", "Delhi"],
    helpfulCertifications: ["Six Sigma", "GMP"],
    positioningTips: "Regulatory compliance; production efficiency",
    website: "https://www.zyduscadila.com"
  },
  {
    id: "177",
    name: "Torrent Pharmaceuticals",
    industrySector: "Pharmaceuticals",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Pharma manufacturing; quality assurance",
    keyCities: ["Ahmedabad", "Mumbai", "Delhi"],
    helpfulCertifications: ["Six Sigma", "GMP"],
    positioningTips: "Regulatory compliance; production efficiency",
    website: "https://www.torrentpharma.com"
  },
  {
    id: "178",
    name: "Glenmark Pharmaceuticals",
    industrySector: "Pharmaceuticals",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Pharma manufacturing; quality assurance",
    keyCities: ["Mumbai", "Nashik", "Delhi"],
    helpfulCertifications: ["Six Sigma", "GMP"],
    positioningTips: "Regulatory compliance; production efficiency",
    website: "https://www.glenmarkpharma.com"
  },
  {
    id: "179",
    name: "Biocon",
    industrySector: "Pharmaceuticals",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Pharma manufacturing; quality assurance",
    keyCities: ["Bengaluru", "Hyderabad", "Mumbai"],
    helpfulCertifications: ["Six Sigma", "GMP"],
    positioningTips: "Regulatory compliance; production efficiency",
    website: "https://www.biocon.com"
  },
  {
    id: "180",
    name: "Alkem Laboratories",
    industrySector: "Pharmaceuticals",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Pharma manufacturing; quality assurance",
    keyCities: ["Mumbai", "Daman", "Delhi"],
    helpfulCertifications: ["Six Sigma", "GMP"],
    positioningTips: "Regulatory compliance; production efficiency",
    website: "https://www.alkemlabs.com"
  },

  // Telecommunications
  {
    id: "181",
    name: "Bharti Airtel",
    industrySector: "Telecommunications",
    roles: ["Network Operations Manager", "Project Manager", "Field Operations Lead"],
    operationsFocus: "Network infrastructure; telecom services",
    keyCities: ["New Delhi", "Mumbai", "Bengaluru"],
    helpfulCertifications: ["CCNA", "PMP"],
    positioningTips: "Network reliability; project execution",
    website: "https://www.airtel.in"
  },
  {
    id: "182",
    name: "Reliance Jio",
    industrySector: "Telecommunications",
    roles: ["Network Operations Manager", "Project Manager", "Field Operations Lead"],
    operationsFocus: "Network infrastructure; telecom services",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["CCNA", "PMP"],
    positioningTips: "Network reliability; project execution",
    website: "https://www.jio.com"
  },
  {
    id: "183",
    name: "Vodafone Idea",
    industrySector: "Telecommunications",
    roles: ["Network Operations Manager", "Project Manager", "Field Operations Lead"],
    operationsFocus: "Network infrastructure; telecom services",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["CCNA", "PMP"],
    positioningTips: "Network reliability; project execution",
    website: "https://www.myvi.in"
  },
  {
    id: "184",
    name: "BSNL",
    industrySector: "Telecommunications",
    roles: ["Network Operations Manager", "Project Manager", "Field Operations Lead"],
    operationsFocus: "Network infrastructure; telecom services",
    keyCities: ["New Delhi", "Mumbai", "Chennai"],
    helpfulCertifications: ["CCNA", "PMP"],
    positioningTips: "Network reliability; project execution",
    website: "https://www.bsnl.co.in"
  },
  {
    id: "185",
    name: "Tata Communications",
    industrySector: "Telecommunications",
    roles: ["Network Operations Manager", "Project Manager", "Field Operations Lead"],
    operationsFocus: "Network infrastructure; telecom services",
    keyCities: ["Mumbai", "Delhi", "Chennai"],
    helpfulCertifications: ["CCNA", "PMP"],
    positioningTips: "Network reliability; project execution",
    website: "https://www.tatacommunications.com"
  },

  // Food & Beverage
  {
    id: "186",
    name: "Parle Agro",
    industrySector: "Food & Beverage",
    roles: ["Production Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "Beverage manufacturing; distribution",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["Six Sigma", "FSSC 22000"],
    positioningTips: "Production efficiency; quality assurance",
    website: "https://www.parleagro.com"
  },
  {
    id: "187",
    name: "Coca-Cola India",
    industrySector: "Food & Beverage",
    roles: ["Production Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "Beverage manufacturing; distribution",
    keyCities: ["Gurgaon", "Mumbai", "Bengaluru"],
    helpfulCertifications: ["Six Sigma", "FSSC 22000"],
    positioningTips: "Production efficiency; quality assurance",
    website: "https://www.coca-colaindia.com"
  },
  {
    id: "188",
    name: "PepsiCo India",
    industrySector: "Food & Beverage",
    roles: ["Production Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "Beverage and snack manufacturing; distribution",
    keyCities: ["Gurgaon", "Mumbai", "Bengaluru"],
    helpfulCertifications: ["Six Sigma", "FSSC 22000"],
    positioningTips: "Production efficiency; quality assurance",
    website: "https://www.pepsicoindia.co.in"
  },
  {
    id: "189",
    name: "Amul (GCMMF)",
    industrySector: "Food & Beverage",
    roles: ["Production Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "Dairy products manufacturing; distribution",
    keyCities: ["Anand", "Mumbai", "Delhi"],
    helpfulCertifications: ["Six Sigma", "FSSC 22000"],
    positioningTips: "Production efficiency; quality assurance",
    website: "https://www.amul.com"
  },
  {
    id: "190",
    name: "Haldiram’s",
    industrySector: "Food & Beverage",
    roles: ["Production Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "Snack manufacturing; distribution",
    keyCities: ["Delhi", "Noida", "Nagpur"],
    helpfulCertifications: ["Six Sigma", "FSSC 22000"],
    positioningTips: "Production efficiency; quality assurance",
    website: "https://www.haldiram.com"
  },
  {
    id: "191",
    name: "Mother Dairy",
    industrySector: "Food & Beverage",
    roles: ["Production Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "Dairy products manufacturing; distribution",
    keyCities: ["Delhi", "Mumbai", "Bengaluru"],
    helpfulCertifications: ["Six Sigma", "FSSC 22000"],
    positioningTips: "Production efficiency; quality assurance",
    website: "https://www.motherdairy.com"
  },
  {
    id: "192",
    name: "Bikanervala",
    industrySector: "Food & Beverage",
    roles: ["Production Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "Snack and sweets manufacturing; distribution",
    keyCities: ["Delhi", "Mumbai", "Bengaluru"],
    helpfulCertifications: ["Six Sigma", "FSSC 22000"],
    positioningTips: "Production efficiency; quality assurance",
    website: "https://www.bikanervala.com"
  },
  {
    id: "193",
    name: "Parle Products",
    industrySector: "Food & Beverage",
    roles: ["Production Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "Biscuit and snack manufacturing; distribution",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["Six Sigma", "FSSC 22000"],
    positioningTips: "Production efficiency; quality assurance",
    website: "https://www.parleproducts.com"
  },
  {
    id: "194",
    name: "MTR Foods",
    industrySector: "Food & Beverage",
    roles: ["Production Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "Ready-to-eat foods; spices",
    keyCities: ["Bengaluru", "Mumbai", "Delhi"],
    helpfulCertifications: ["Six Sigma", "FSSC 22000"],
    positioningTips: "Production efficiency; quality assurance",
    website: "https://www.mtrfoods.com"
  },
  {
    id: "195",
    name: "Bagrry’s",
    industrySector: "Food & Beverage",
    roles: ["Production Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "Breakfast cereal and snack manufacturing",
    keyCities: ["Delhi", "Mumbai", "Bengaluru"],
    helpfulCertifications: ["Six Sigma", "FSSC 22000"],
    positioningTips: "Production efficiency; quality assurance",
    website: "https://www.bagrrys.com"
  },

  // Textiles
  {
    id: "196",
    name: "Arvind Limited",
    industrySector: "Textiles",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Textile manufacturing; apparel",
    keyCities: ["Ahmedabad", "Bengaluru", "Mumbai"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality control",
    website: "https://www.arvind.com"
  },
  {
    id: "197",
    name: "Raymond Limited",
    industrySector: "Textiles",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Textile manufacturing; apparel",
    keyCities: ["Mumbai", "Thane", "Bengaluru"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality control",
    website: "https://www.raymond.in"
  },
  {
    id: "198",
    name: "Trident Group",
    industrySector: "Textiles",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Textile manufacturing; home textiles",
    keyCities: ["Ludhiana", "Mumbai", "Delhi"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality control",
    website: "https://www.tridentindia.com"
  },
  {
    id: "199",
    name: "Vardhman Textiles",
    industrySector: "Textiles",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Textile manufacturing; yarn production",
    keyCities: ["Ludhiana", "Mumbai", "Delhi"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality control",
    website: "https://www.vardhman.com"
  },
  {
    id: "200",
    name: "Welspun India",
    industrySector: "Textiles",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Textile manufacturing; home textiles",
    keyCities: ["Mumbai", "Anjar", "Delhi"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality control",
    website: "https://www.welspunindia.com"
  },

  // Chemicals
  {
    id: "201",
    name: "BASF India",
    industrySector: "Chemicals",
    roles: ["Plant Manager", "Production Supervisor", "Quality Control Manager"],
    operationsFocus: "Chemical manufacturing; quality assurance",
    keyCities: ["Mumbai", "Mangalore", "Chennai"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.basf.com/in"
  },
  {
    id: "202",
    name: "Pidilite Industries",
    industrySector: "Chemicals",
    roles: ["Plant Manager", "Production Supervisor", "Quality Control Manager"],
    operationsFocus: "Adhesives and chemicals manufacturing",
    keyCities: ["Mumbai", "Vapi", "Delhi"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.pidilite.com"
  },
  {
    id: "203",
    name: "Tata Chemicals",
    industrySector: "Chemicals",
    roles: ["Plant Manager", "Production Supervisor", "Quality Control Manager"],
    operationsFocus: "Chemical manufacturing; quality assurance",
    keyCities: ["Mumbai", "Mithapur", "Delhi"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.tatachemicals.com"
  },
  {
    id: "204",
    name: "UPL Limited",
    industrySector: "Chemicals",
    roles: ["Plant Manager", "Production Supervisor", "Quality Control Manager"],
    operationsFocus: "Agrochemicals manufacturing; quality assurance",
    keyCities: ["Mumbai", "Vapi", "Ankleshwar"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.upl-ltd.com"
  },
  {
    id: "205",
    name: "Deepak Nitrite",
    industrySector: "Chemicals",
    roles: ["Plant Manager", "Production Supervisor", "Quality Control Manager"],
    operationsFocus: "Chemical manufacturing; quality assurance",
    keyCities: ["Vadodara", "Mumbai", "Hyderabad"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.deepaknitrite.com"
  },

  // Cement
  {
    id: "206",
    name: "UltraTech Cement",
    industrySector: "Cement",
    roles: ["Plant Manager", "Production Supervisor", "Quality Control Manager"],
    operationsFocus: "Cement manufacturing; quality assurance",
    keyCities: ["Mumbai", "Nagpur", "Bengaluru"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.ultratechcement.com"
  },
  {
    id: "207",
    name: "Ambuja Cements",
    industrySector: "Cement",
    roles: ["Plant Manager", "Production Supervisor", "Quality Control Manager"],
    operationsFocus: "Cement manufacturing; quality assurance",
    keyCities: ["Mumbai", "Ahmedabad", "Kolkata"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.ambujacement.com"
  },
  {
    id: "208",
    name: "ACC Limited",
    industrySector: "Cement",
    roles: ["Plant Manager", "Production Supervisor", "Quality Control Manager"],
    operationsFocus: "Cement manufacturing; quality assurance",
    keyCities: ["Mumbai", "Bengaluru", "Delhi"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.acclimited.com"
  },
  {
    id: "209",
    name: "Shree Cement",
    industrySector: "Cement",
    roles: ["Plant Manager", "Production Supervisor", "Quality Control Manager"],
    operationsFocus: "Cement manufacturing; quality assurance",
    keyCities: ["Kolkata", "Jaipur", "Delhi"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.shreecement.com"
  },
  {
    id: "210",
    name: "Dalmia Bharat",
    industrySector: "Cement",
    roles: ["Plant Manager", "Production Supervisor", "Quality Control Manager"],
    operationsFocus: "Cement manufacturing; quality assurance",
    keyCities: ["New Delhi", "Chennai", "Bengaluru"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.dalmiabharat.com"
  },

  // Electronics
  {
    id: "211",
    name: "Samsung India",
    industrySector: "Electronics",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Electronics manufacturing; quality assurance",
    keyCities: ["Noida", "Chennai", "Bengaluru"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality control",
    website: "https://www.samsung.com/in"
  },
  {
    id: "212",
    name: "LG India",
    industrySector: "Electronics",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Electronics manufacturing; quality assurance",
    keyCities: ["Noida", "Pune", "Mumbai"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality control",
    website: "https://www.lg.com/in"
  },
  {
    id: "213",
    name: "Sony India",
    industrySector: "Electronics",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Electronics manufacturing; quality assurance",
    keyCities: ["Delhi", "Mumbai", "Bengaluru"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality control",
    website: "https://www.sony.co.in"
  },
  {
    id: "214",
    name: "Panasonic India",
    industrySector: "Electronics",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Electronics manufacturing; quality assurance",
    keyCities: ["Gurgaon", "Mumbai", "Bengaluru"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality control",
    website: "https://www.panasonic.com/in"
  },
  {
    id: "215",
    name: "Whirlpool India",
    industrySector: "Electronics",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Electronics manufacturing; quality assurance",
    keyCities: ["Pune", "Faridabad", "Bengaluru"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality control",
    website: "https://www.whirlpoolindia.com"
  },

  // Agriculture & Agribusiness
  {
    id: "216",
    name: "Mahyco",
    industrySector: "Agriculture",
    roles: ["Operations Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "Seed production; agricultural research",
    keyCities: ["Jalna", "Mumbai", "Hyderabad"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Operational efficiency; quality assurance",
    website: "https://www.mahyco.com"
  },
  {
    id: "217",
    name: "Rallis India",
    industrySector: "Agriculture",
    roles: ["Operations Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "Agrochemicals; seed production",
    keyCities: ["Mumbai", "Dahej", "Delhi"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Operational efficiency; quality assurance",
    website: "https://www.rallis.com"
  },
  {
    id: "218",
    name: "Dhanuka Agritech",
    industrySector: "Agriculture",
    roles: ["Operations Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "Agrochemicals manufacturing",
    keyCities: ["Gurgaon", "Mumbai", "Delhi"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Operational efficiency; quality assurance",
    website: "https://www.dhanuka.com"
  },
  {
    id: "219",
    name: "Coromandel International",
    industrySector: "Agriculture",
    roles: ["Operations Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "Agribusiness; crop protection",
    keyCities: ["Mumbai", "Hyderabad", "Delhi"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Operational efficiency; quality assurance",
    website: "https://www.coromandel.biz"
  },
  {
    id: "220",
    name: "National Fertilizers Limited",
    industrySector: "Agriculture",
    roles: ["Operations Manager", "Supply Chain Manager", "Quality Control Manager"],
    operationsFocus: "Fertilizer manufacturing; distribution",
    keyCities: ["Noida", "Bhopal", "Panipat"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Operational efficiency; quality assurance",
    website: "https://www.nationalfertilizers.com"
  },

  // Aviation
  {
    id: "221",
    name: "IndiGo",
    industrySector: "Aviation",
    roles: ["Operations Manager", "Maintenance Manager", "Safety Officer"],
    operationsFocus: "Airline operations; aircraft maintenance",
    keyCities: ["Delhi", "Mumbai", "Bengaluru"],
    helpfulCertifications: ["Aviation Safety", "PMP"],
    positioningTips: "Operational efficiency; safety compliance",
    website: "https://www.goindigo.in"
  },
  {
    id: "222",
    name: "Air India",
    industrySector: "Aviation",
    roles: ["Operations Manager", "Maintenance Manager", "Safety Officer"],
    operationsFocus: "Airline operations; aircraft maintenance",
    keyCities: ["Delhi", "Mumbai", "Hyderabad"],
    helpfulCertifications: ["Aviation Safety", "PMP"],
    positioningTips: "Operational efficiency; safety compliance",
    website: "https://www.airindia.in"
  },
  {
    id: "223",
    name: "SpiceJet",
    industrySector: "Aviation",
    roles: ["Operations Manager", "Maintenance Manager", "Safety Officer"],
    operationsFocus: "Airline operations; aircraft maintenance",
    keyCities: ["Gurgaon", "Mumbai", "Delhi"],
    helpfulCertifications: ["Aviation Safety", "PMP"],
    positioningTips: "Operational efficiency; safety compliance",
    website: "https://www.spicejet.com"
  },
  {
    id: "224",
    name: "Vistara",
    industrySector: "Aviation",
    roles: ["Operations Manager", "Maintenance Manager", "Safety Officer"],
    operationsFocus: "Airline operations; aircraft maintenance",
    keyCities: ["Delhi", "Mumbai", "Bengaluru"],
    helpfulCertifications: ["Aviation Safety", "PMP"],
    positioningTips: "Operational efficiency; safety compliance",
    website: "https://www.airvistara.com"
  },
  {
    id: "225",
    name: "GoAir",
    industrySector: "Aviation",
    roles: ["Operations Manager", "Maintenance Manager", "Safety Officer"],
    operationsFocus: "Airline operations; aircraft maintenance",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["Aviation Safety", "PMP"],
    positioningTips: "Operational efficiency; safety compliance",
    website: "https://www.goair.in"
  },

  // Real Estate
  {
    id: "226",
    name: "DLF Limited",
    industrySector: "Real Estate",
    roles: ["Project Manager", "Construction Manager", "Facilities Manager"],
    operationsFocus: "Real estate development; construction",
    keyCities: ["Gurgaon", "Delhi", "Mumbai"],
    helpfulCertifications: ["PMP", "NEBOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.dlf.in"
  },
  {
    id: "227",
    name: "Godrej Properties",
    industrySector: "Real Estate",
    roles: ["Project Manager", "Construction Manager", "Facilities Manager"],
    operationsFocus: "Real estate development; construction",
    keyCities: ["Mumbai", "Bengaluru", "Delhi"],
    helpfulCertifications: ["PMP", "NEBOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.godrejproperties.com"
  },
  {
    id: "228",
    name: "Oberoi Realty",
    industrySector: "Real Estate",
    roles: ["Project Manager", "Construction Manager", "Facilities Manager"],
    operationsFocus: "Real estate development; construction",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["PMP", "NEBOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.oberoirealty.com"
  },
  {
    id: "229",
    name: "Prestige Estates",
    industrySector: "Real Estate",
    roles: ["Project Manager", "Construction Manager", "Facilities Manager"],
    operationsFocus: "Real estate development; construction",
    keyCities: ["Bengaluru", "Mumbai", "Chennai"],
    helpfulCertifications: ["PMP", "NEBOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.prestigeconstructions.com"
  },
  {
    id: "230",
    name: "Sobha Limited",
    industrySector: "Real Estate",
    roles: ["Project Manager", "Construction Manager", "Facilities Manager"],
    operationsFocus: "Real estate development; construction",
    keyCities: ["Bengaluru", "Mumbai", "Delhi"],
    helpfulCertifications: ["PMP", "NEBOSH"],
    positioningTips: "Project execution; safety compliance",
    website: "https://www.sobha.com"
  },

  // Hospitality
  {
    id: "231",
    name: "Taj Hotels",
    industrySector: "Hospitality",
    roles: ["Operations Manager", "Facilities Manager", "Safety Officer"],
    operationsFocus: "Hotel operations; guest services",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["PMP", "Hospitality Management"],
    positioningTips: "Operational efficiency; guest satisfaction",
    website: "https://www.tajhotels.com"
  },
  {
    id: "232",
    name: "Oberoi Hotels & Resorts",
    industrySector: "Hospitality",
    roles: ["Operations Manager", "Facilities Manager", "Safety Officer"],
    operationsFocus: "Hotel operations; guest services",
    keyCities: ["Delhi", "Mumbai", "Bengaluru"],
    helpfulCertifications: ["PMP", "Hospitality Management"],
    positioningTips: "Operational efficiency; guest satisfaction",
    website: "https://www.oberoihotels.com"
  },
  {
    id: "233",
    name: "ITC Hotels",
    industrySector: "Hospitality",
    roles: ["Operations Manager", "Facilities Manager", "Safety Officer"],
    operationsFocus: "Hotel operations; guest services",
    keyCities: ["Kolkata", "Delhi", "Mumbai"],
    helpfulCertifications: ["PMP", "Hospitality Management"],
    positioningTips: "Operational efficiency; guest satisfaction",
    website: "https://www.itchotels.in"
  },
  {
    id: "234",
    name: "Marriott International India",
    industrySector: "Hospitality",
    roles: ["Operations Manager", "Facilities Manager", "Safety Officer"],
    operationsFocus: "Hotel operations; guest services",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["PMP", "Hospitality Management"],
    positioningTips: "Operational efficiency; guest satisfaction",
    website: "https://www.marriott.com"
  },
  {
    id: "235",
    name: "Hyatt Hotels India",
    industrySector: "Hospitality",
    roles: ["Operations Manager", "Facilities Manager", "Safety Officer"],
    operationsFocus: "Hotel operations; guest services",
    keyCities: ["Mumbai", "Delhi", "Chennai"],
    helpfulCertifications: ["PMP", "Hospitality Management"],
    positioningTips: "Operational efficiency; guest satisfaction",
    website: "https://www.hyatt.com"
  },

  // Renewable Energy
  {
    id: "236",
    name: "Greenko Group",
    industrySector: "Renewable Energy",
    roles: ["Project Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Solar and wind energy projects",
    keyCities: ["Hyderabad", "Delhi", "Bengaluru"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Renewable energy project execution; operational efficiency",
    website: "https://www.greenkogroup.com"
  },
  {
    id: "237",
    name: "Azure Power",
    industrySector: "Renewable Energy",
    roles: ["Project Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Solar energy projects",
    keyCities: ["New Delhi", "Mumbai", "Bengaluru"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Renewable energy project execution; operational efficiency",
    website: "https://www.azurepower.com"
  },
  {
    id: "238",
    name: "Mytrah Energy",
    industrySector: "Renewable Energy",
    roles: ["Project Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Wind and solar energy projects",
    keyCities: ["Hyderabad", "Mumbai", "Delhi"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Renewable energy project execution; operational efficiency",
    website: "https://www.mytrah.com"
  },
  {
    id: "239",
    name: "Hero Future Energies",
    industrySector: "Renewable Energy",
    roles: ["Project Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Solar and wind energy projects",
    keyCities: ["New Delhi", "Mumbai", "Bengaluru"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Renewable energy project execution; operational efficiency",
    website: "https://www.herofutureenergies.com"
  },
  {
    id: "240",
    name: "CleanMax Solar",
    industrySector: "Renewable Energy",
    roles: ["Project Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Solar energy projects",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Renewable energy project execution; operational efficiency",
    website: "https://www.cleanmaxsolar.com"
  },

  // Engineering & Manufacturing
  {
    id: "241",
    name: "Thermax Limited",
    industrySector: "Engineering",
    roles: ["Project Manager", "Production Manager", "Quality Control Manager"],
    operationsFocus: "Industrial equipment manufacturing",
    keyCities: ["Pune", "Mumbai", "Chennai"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.thermaxglobal.com"
  },
  {
    id: "242",
    name: "Kirloskar Brothers Limited",
    industrySector: "Engineering",
    roles: ["Project Manager", "Production Manager", "Quality Control Manager"],
    operationsFocus: "Pump manufacturing; engineering projects",
    keyCities: ["Pune", "Mumbai", "Coimbatore"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.kirloskarpumps.com"
  },
  {
    id: "243",
    name: "Cummins India",
    industrySector: "Engineering",
    roles: ["Project Manager", "Production Manager", "Quality Control Manager"],
    operationsFocus: "Engine and power generation equipment manufacturing",
    keyCities: ["Pune", "Mumbai", "Delhi"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.cumminsindia.com"
  },
  {
    id: "244",
    name: "Bharat Forge",
    industrySector: "Manufacturing",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Forging and machining; automotive components",
    keyCities: ["Pune", "Mumbai", "Chennai"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.bharatforge.com"
  },
  {
    id: "245",
    name: "L&T Heavy Engineering",
    industrySector: "Engineering",
    roles: ["Project Manager", "Production Manager", "Quality Control Manager"],
    operationsFocus: "Heavy engineering and equipment manufacturing",
    keyCities: ["Mumbai", "Hazira", "Chennai"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.larsentoubro.com/heavy-engineering"
  },

  // Mining
  {
    id: "246",
    name: "Hindustan Copper Limited",
    industrySector: "Mining",
    roles: ["Mining Engineer", "Safety Officer", "Operations Manager"],
    operationsFocus: "Copper mining; smelting",
    keyCities: ["Kolkata", "Jhunjhunu", "Malanjkhand"],
    helpfulCertifications: ["Industrial-safety cert", "Mining Certifications"],
    positioningTips: "Safety compliance; operational efficiency",
    website: "https://www.hindustancopper.com"
  },
  {
    id: "247",
    name: "MOIL Limited",
    industrySector: "Mining",
    roles: ["Mining Engineer", "Safety Officer", "Operations Manager"],
    operationsFocus: "Manganese ore mining",
    keyCities: ["Nagpur", "Mumbai", "Bhopal"],
    helpfulCertifications: ["Industrial-safety cert", "Mining Certifications"],
    positioningTips: "Safety compliance; operational efficiency",
    website: "https://www.moil.nic.in"
  },
  {
    id: "248",
    name: "Gujarat Mineral Development Corporation",
    industrySector: "Mining",
    roles: ["Mining Engineer", "Safety Officer", "Operations Manager"],
    operationsFocus: "Lignite and bauxite mining",
    keyCities: ["Ahmedabad", "Vadodara", "Surat"],
    helpfulCertifications: ["Industrial-safety cert", "Mining Certifications"],
    positioningTips: "Safety compliance; operational efficiency",
    website: "https://www.gmdcltd.com"
  },
  {
    id: "249",
    name: "Tata Steel Mining",
    industrySector: "Mining",
    roles: ["Mining Engineer", "Safety Officer", "Operations Manager"],
    operationsFocus: "Iron ore and coal mining",
    keyCities: ["Jamshedpur", "Kolkata", "Bhubaneswar"],
    helpfulCertifications: ["Industrial-safety cert", "Mining Certifications"],
    positioningTips: "Safety compliance; operational efficiency",
    website: "https://www.tatasteelmining.com"
  },
  {
    id: "250",
    name: "Sesa Goa (Vedanta)",
    industrySector: "Mining",
    roles: ["Mining Engineer", "Safety Officer", "Operations Manager"],
    operationsFocus: "Iron ore mining",
    keyCities: ["Panaji", "Mumbai", "Bengaluru"],
    helpfulCertifications: ["Industrial-safety cert", "Mining Certifications"],
    positioningTips: "Safety compliance; operational efficiency",
    website: "https://www.vedantalimited.com"
  },

  // Ports & Shipping
  {
    id: "251",
    name: "Adani Ports and SEZ",
    industrySector: "Ports & Shipping",
    roles: ["Port Operations Manager", "Logistics Manager", "Safety Officer"],
    operationsFocus: "Port operations; logistics",
    keyCities: ["Mundra", "Ahmedabad", "Mumbai"],
    helpfulCertifications: ["PMP", "Port Management"],
    positioningTips: "Operational efficiency; safety compliance",
    website: "https://www.adaniports.com"
  },
  {
    id: "252",
    name: "Jawaharlal Nehru Port Trust",
    industrySector: "Ports & Shipping",
    roles: ["Port Operations Manager", "Logistics Manager", "Safety Officer"],
    operationsFocus: "Port operations; logistics",
    keyCities: ["Mumbai", "Navi Mumbai"],
    helpfulCertifications: ["PMP", "Port Management"],
    positioningTips: "Operational efficiency; safety compliance",
    website: "https://jnport.gov.in"
  },
  {
    id: "253",
    name: "Mumbai Port Trust",
    industrySector: "Ports & Shipping",
    roles: ["Port Operations Manager", "Logistics Manager", "Safety Officer"],
    operationsFocus: "Port operations; logistics",
    keyCities: ["Mumbai"],
    helpfulCertifications: ["PMP", "Port Management"],
    positioningTips: "Operational efficiency; safety compliance",
    website: "https://mumbaiport.gov.in"
  },
  {
    id: "254",
    name: "Chennai Port Trust",
    industrySector: "Ports & Shipping",
    roles: ["Port Operations Manager", "Logistics Manager", "Safety Officer"],
    operationsFocus: "Port operations; logistics",
    keyCities: ["Chennai"],
    helpfulCertifications: ["PMP", "Port Management"],
    positioningTips: "Operational efficiency; safety compliance",
    website: "https://www.chennaiport.gov.in"
  },
  {
    id: "255",
    name: "Shipping Corporation of India",
    industrySector: "Ports & Shipping",
    roles: ["Operations Manager", "Logistics Manager", "Safety Officer"],
    operationsFocus: "Shipping operations; logistics",
    keyCities: ["Mumbai", "Delhi", "Kolkata"],
    helpfulCertifications: ["PMP", "Maritime Management"],
    positioningTips: "Operational efficiency; safety compliance",
    website: "https://www.shipindia.com"
  },

  // Railways
  {
    id: "256",
    name: "Indian Railways",
    industrySector: "Railways",
    roles: ["Operations Manager", "Maintenance Manager", "Safety Officer"],
    operationsFocus: "Railway operations; infrastructure maintenance",
    keyCities: ["New Delhi", "Mumbai", "Kolkata"],
    helpfulCertifications: ["PMP", "Railway Safety"],
    positioningTips: "Operational efficiency; safety compliance",
    website: "https://indianrailways.gov.in"
  },
  {
    id: "257",
    name: "Konkan Railway Corporation",
    industrySector: "Railways",
    roles: ["Operations Manager", "Maintenance Manager", "Safety Officer"],
    operationsFocus: "Railway operations; infrastructure maintenance",
    keyCities: ["Navi Mumbai", "Mangalore", "Goa"],
    helpfulCertifications: ["PMP", "Railway Safety"],
    positioningTips: "Operational efficiency; safety compliance",
    website: "https://www.konkanrailway.com"
  },
  {
    id: "258",
    name: "Delhi Metro Rail Corporation",
    industrySector: "Railways",
    roles: ["Operations Manager", "Maintenance Manager", "Safety Officer"],
    operationsFocus: "Metro rail operations; infrastructure maintenance",
    keyCities: ["Delhi", "Noida", "Gurgaon"],
    helpfulCertifications: ["PMP", "Railway Safety"],
    positioningTips: "Operational efficiency; safety compliance",
    website: "https://www.delhimetrorail.com"
  },
  {
    id: "259",
    name: "Mumbai Metro Rail Corporation",
    industrySector: "Railways",
    roles: ["Operations Manager", "Maintenance Manager", "Safety Officer"],
    operationsFocus: "Metro rail operations; infrastructure maintenance",
    keyCities: ["Mumbai"],
    helpfulCertifications: ["PMP", "Railway Safety"],
    positioningTips: "Operational efficiency; safety compliance",
    website: "https://www.mmrcl.com"
  },
  {
    id: "260",
    name: "Chennai Metro Rail",
    industrySector: "Railways",
    roles: ["Operations Manager", "Maintenance Manager", "Safety Officer"],
    operationsFocus: "Metro rail operations; infrastructure maintenance",
    keyCities: ["Chennai"],
    helpfulCertifications: ["PMP", "Railway Safety"],
    positioningTips: "Operational efficiency; safety compliance",
    website: "https://chennaimetrorail.org"
  },

  // Power & Utilities
  {
    id: "261",
    name: "SJVN Limited",
    industrySector: "Power & Utilities",
    roles: ["Power Plant Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Hydropower generation",
    keyCities: ["Shimla", "Delhi", "Mumbai"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Power generation; operational efficiency",
    website: "https://www.sjvn.nic.in"
  },
  {
    id: "262",
    name: "THDC India Limited",
    industrySector: "Power & Utilities",
    roles: ["Power Plant Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Hydropower generation",
    keyCities: ["Rishikesh", "Delhi", "Mumbai"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Power generation; operational efficiency",
    website: "https://www.thdc.co.in"
  },
  {
    id: "263",
    name: "Karnataka Power Corporation",
    industrySector: "Power & Utilities",
    roles: ["Power Plant Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Thermal and hydropower generation",
    keyCities: ["Bengaluru", "Raichur", "Bellary"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Power generation; operational efficiency",
    website: "https://www.karnatakapower.com"
  },
  {
    id: "264",
    name: "Maharashtra State Power Generation Company",
    industrySector: "Power & Utilities",
    roles: ["Power Plant Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Thermal power generation",
    keyCities: ["Mumbai", "Nagpur", "Chandrapur"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Power generation; operational efficiency",
    website: "https://www.mahagenco.in"
  },
  {
    id: "265",
    name: "Gujarat State Electricity Corporation",
    industrySector: "Power & Utilities",
    roles: ["Power Plant Manager", "Operations Engineer", "Maintenance Manager"],
    operationsFocus: "Thermal power generation",
    keyCities: ["Vadodara", "Surat", "Ahmedabad"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Power generation; operational efficiency",
    website: "https://www.gsecl.in"
  },

  // Aerospace & Defense
  {
    id: "266",
    name: "DRDO",
    industrySector: "Aerospace & Defense",
    roles: ["Project Manager", "Systems Engineer", "Quality Assurance Manager"],
    operationsFocus: "Defense research and development",
    keyCities: ["Delhi", "Bengaluru", "Hyderabad"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Project execution; quality control",
    website: "https://www.drdo.gov.in"
  },
  {
    id: "267",
    name: "Tata Advanced Systems",
    industrySector: "Aerospace & Defense",
    roles: ["Project Manager", "Systems Engineer", "Quality Assurance Manager"],
    operationsFocus: "Aerospace and defense manufacturing",
    keyCities: ["Hyderabad", "Mumbai", "Bengaluru"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Project execution; quality control",
    website: "https://www.tataadvancedsystems.com"
  },
  {
    id: "268",
    name: "L&T Defence",
    industrySector: "Aerospace & Defense",
    roles: ["Project Manager", "Systems Engineer", "Quality Assurance Manager"],
    operationsFocus: "Defense manufacturing; engineering",
    keyCities: ["Mumbai", "Coimbatore", "Bengaluru"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Project execution; quality control",
    website: "https://www.larsentoubro.com/defence"
  },
  {
    id: "269",
    name: "Reliance Naval and Engineering",
    industrySector: "Aerospace & Defense",
    roles: ["Project Manager", "Systems Engineer", "Quality Assurance Manager"],
    operationsFocus: "Naval shipbuilding; defense manufacturing",
    keyCities: ["Pipavav", "Mumbai", "Delhi"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Project execution; quality control",
    website: "https://www.rnaval.co.in"
  },
  {
    id: "270",
    name: "Bharat Earth Movers Limited (BEML)",
    industrySector: "Aerospace & Defense",
    roles: ["Project Manager", "Systems Engineer", "Quality Assurance Manager"],
    operationsFocus: "Defense and heavy equipment manufacturing",
    keyCities: ["Bengaluru", "Mysore", "Kolkata"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Project execution; quality control",
    website: "https://www.bemlindia.in"
  },

  // Automotive Components
  {
    id: "271",
    name: "Bosch India",
    industrySector: "Automotive Components",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Automotive component manufacturing",
    keyCities: ["Bengaluru", "Nashik", "Chennai"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.bosch.in"
  },
  {
    id: "272",
    name: "Motherson Sumi Systems",
    industrySector: "Automotive Components",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Automotive component manufacturing",
    keyCities: ["Noida", "Pune", "Chennai"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.motherson.com"
  },
  {
    id: "273",
    name: "Apollo Tyres",
    industrySector: "Automotive Components",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Tyre manufacturing",
    keyCities: ["Gurgaon", "Chennai", "Kochi"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.apollotyres.com"
  },
  {
    id: "274",
    name: "MRF Tyres",
    industrySector: "Automotive Components",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Tyre manufacturing",
    keyCities: ["Chennai", "Mumbai", "Delhi"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.mrftyres.com"
  },
  {
    id: "275",
    name: "CEAT Tyres",
    industrySector: "Automotive Components",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Tyre manufacturing",
    keyCities: ["Mumbai", "Nashik", "Halol"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.ceat.com"
  },

  // Oil & Gas (Additional Companies)
  {
    id: "276",
    name: "Essar Oil",
    industrySector: "Oil & Gas",
    roles: ["Plant Manager", "Operations Lead", "Project Manager"],
    operationsFocus: "Refineries; oil distribution",
    keyCities: ["Jamnagar", "Mumbai", "Delhi"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.essar.com"
  },
  {
    id: "277",
    name: "Nayara Energy",
    industrySector: "Oil & Gas",
    roles: ["Plant Manager", "Operations Lead", "Project Manager"],
    operationsFocus: "Refineries; oil distribution",
    keyCities: ["Vadinar", "Mumbai", "Delhi"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.nayaraenergy.com"
  },
  {
    id: "278",
    name: "Chennai Petroleum Corporation",
    industrySector: "Oil & Gas",
    roles: ["Plant Manager", "Operations Lead", "Project Manager"],
    operationsFocus: "Refineries; oil distribution",
    keyCities: ["Chennai", "Mumbai", "Delhi"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.cpcl.co.in"
  },
  {
    id: "279",
    name: "Numaligarh Refinery Limited",
    industrySector: "Oil & Gas",
    roles: ["Plant Manager", "Operations Lead", "Project Manager"],
    operationsFocus: "Refineries; oil distribution",
    keyCities: ["Numaligarh", "Guwahati", "Delhi"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.nrl.co.in"
  },
  {
    id: "280",
    name: "Bharat Oman Refineries",
    industrySector: "Oil & Gas",
    roles: ["Plant Manager", "Operations Lead", "Project Manager"],
    operationsFocus: "Refineries; oil distribution",
    keyCities: ["Bina", "Mumbai", "Delhi"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.borl.in"
  },

  // Petrochemicals
  {
    id: "281",
    name: "Reliance Industries (Petrochemicals)",
    industrySector: "Petrochemicals",
    roles: ["Plant Manager", "Operations Lead", "Project Manager"],
    operationsFocus: "Petrochemical manufacturing; distribution",
    keyCities: ["Jamnagar", "Mumbai", "Delhi"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.ril.com"
  },
  {
    id: "282",
    name: "Haldia Petrochemicals",
    industrySector: "Petrochemicals",
    roles: ["Plant Manager", "Operations Lead", "Project Manager"],
    operationsFocus: "Petrochemical manufacturing; distribution",
    keyCities: ["Haldia", "Kolkata", "Mumbai"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.haldiapetrochemicals.com"
  },
  {
    id: "283",
    name: "GAIL (Petrochemicals)",
    industrySector: "Petrochemicals",
    roles: ["Plant Manager", "Operations Lead", "Project Manager"],
    operationsFocus: "Petrochemical manufacturing; distribution",
    keyCities: ["Noida", "Delhi", "Mumbai"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.gailonline.com"
  },
  {
    id: "284",
    name: "Indian Petrochemicals Corporation Limited",
    industrySector: "Petrochemicals",
    roles: ["Plant Manager", "Operations Lead", "Project Manager"],
    operationsFocus: "Petrochemical manufacturing; distribution",
    keyCities: ["Vadodara", "Mumbai", "Delhi"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.ipcl.in"
  },
  {
    id: "285",
    name: "Mangalore Chemicals & Fertilizers",
    industrySector: "Petrochemicals",
    roles: ["Plant Manager", "Operations Lead", "Project Manager"],
    operationsFocus: "Petrochemical manufacturing; distribution",
    keyCities: ["Mangalore", "Bengaluru", "Mumbai"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Production optimization; safety compliance",
    website: "https://www.mangalorechemicals.com"
  },

  // Paper & Packaging
  {
    id: "286",
    name: "ITC Paperboards and Specialty Papers",
    industrySector: "Paper & Packaging",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Paperboard manufacturing; packaging",
    keyCities: ["Kolkata", "Mumbai", "Delhi"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.itcpspd.com"
  },
  {
    id: "287",
    name: "Ballarpur Industries Limited",
    industrySector: "Paper & Packaging",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Paper manufacturing; packaging",
    keyCities: ["Gurgaon", "Mumbai", "Delhi"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.biltpaper.com"
  },
  {
    id: "288",
    name: "JK Paper",
    industrySector: "Paper & Packaging",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Paper manufacturing; packaging",
    keyCities: ["New Delhi", "Surat", "Bhubaneswar"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.jkpaper.com"
  },
  {
    id: "289",
    name: "West Coast Paper Mills",
    industrySector: "Paper & Packaging",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Paper manufacturing; packaging",
    keyCities: ["Dandeli", "Mumbai", "Bengaluru"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.westcoastpaper.com"
  },
  {
    id: "290",
    name: "Tamil Nadu Newsprint and Papers Limited",
    industrySector: "Paper & Packaging",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Paper manufacturing; packaging",
    keyCities: ["Chennai", "Karur", "Mumbai"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.tnpl.com"
  },

  // Glass & Ceramics
  {
    id: "291",
    name: "Asahi India Glass",
    industrySector: "Glass & Ceramics",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Glass manufacturing; automotive glass",
    keyCities: ["Mumbai", "Taloja", "Chennai"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.aisglass.com"
  },
  {
    id: "292",
    name: "Saint-Gobain India",
    industrySector: "Glass & Ceramics",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Glass and ceramics manufacturing",
    keyCities: ["Chennai", "Mumbai", "Bengaluru"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.saint-gobain.co.in"
  },
  {
    id: "293",
    name: "Hindusthan National Glass",
    industrySector: "Glass & Ceramics",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Glass container manufacturing",
    keyCities: ["Kolkata", "Mumbai", "Puducherry"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.hngindia.com"
  },
  {
    id: "294",
    name: "Cera Sanitaryware",
    industrySector: "Glass & Ceramics",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Sanitaryware and ceramics manufacturing",
    keyCities: ["Ahmedabad", "Mumbai", "Delhi"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.cera-india.com"
  },
  {
    id: "295",
    name: "Somany Ceramics",
    industrySector: "Glass & Ceramics",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Ceramic tiles manufacturing",
    keyCities: ["Noida", "Ahmedabad", "Mumbai"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.somanyceramics.com"
  },

  // Paints & Coatings
  {
    id: "296",
    name: "Asian Paints",
    industrySector: "Paints & Coatings",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Paint manufacturing; distribution",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.asianpaints.com"
  },
  {
    id: "297",
    name: "Berger Paints India",
    industrySector: "Paints & Coatings",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Paint manufacturing; distribution",
    keyCities: ["Kolkata", "Mumbai", "Delhi"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.bergerpaints.com"
  },
  {
    id: "298",
    name: "Kansai Nerolac Paints",
    industrySector: "Paints & Coatings",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Paint manufacturing; distribution",
    keyCities: ["Mumbai", "Delhi", "Chennai"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.nerolac.com"
  },
  {
    id: "299",
    name: "AkzoNobel India",
    industrySector: "Paints & Coatings",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Paint manufacturing; distribution",
    keyCities: ["Gurgaon", "Mumbai", "Bengaluru"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.akzonobel.com/en/in"
  },
  {
    id: "300",
    name: "Indigo Paints",
    industrySector: "Paints & Coatings",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Paint manufacturing; distribution",
    keyCities: ["Pune", "Mumbai", "Delhi"],
        helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Production optimization; quality assurance",
    website: "https://www.indigopaints.com"
  },

  // Logistics & Supply Chain
  {
    id: "301",
    name: "Blue Dart Express",
    industrySector: "Logistics & Supply Chain",
    roles: ["Logistics Manager", "Supply Chain Manager", "Operations Lead"],
    operationsFocus: "Courier and logistics services",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["CSCP", "Six Sigma"],
    positioningTips: "Supply chain efficiency; delivery optimization",
    website: "https://www.bluedart.com"
  },
  {
    id: "302",
    name: "DHL Supply Chain India",
    industrySector: "Logistics & Supply Chain",
    roles: ["Logistics Manager", "Supply Chain Manager", "Operations Lead"],
    operationsFocus: "Logistics and warehousing",
    keyCities: ["Mumbai", "Delhi", "Chennai"],
    helpfulCertifications: ["CSCP", "Six Sigma"],
    positioningTips: "Supply chain efficiency; delivery optimization",
    website: "https://www.dhl.com/in-en/home.html"
  },
  {
    id: "303",
    name: "Delhivery",
    industrySector: "Logistics & Supply Chain",
    roles: ["Logistics Manager", "Supply Chain Manager", "Operations Lead"],
    operationsFocus: "E-commerce logistics; last-mile delivery",
    keyCities: ["Gurgaon", "Bengaluru", "Mumbai"],
    helpfulCertifications: ["CSCP", "Six Sigma"],
    positioningTips: "Supply chain efficiency; delivery optimization",
    website: "https://www.delhivery.com"
  },
  {
    id: "304",
    name: "Gati Limited",
    industrySector: "Logistics & Supply Chain",
    roles: ["Logistics Manager", "Supply Chain Manager", "Operations Lead"],
    operationsFocus: "Express logistics; supply chain solutions",
    keyCities: ["Hyderabad", "Mumbai", "Delhi"],
    helpfulCertifications: ["CSCP", "Six Sigma"],
    positioningTips: "Supply chain efficiency; delivery optimization",
    website: "https://www.gati.com"
  },
  {
    id: "305",
    name: "TCI Express",
    industrySector: "Logistics & Supply Chain",
    roles: ["Logistics Manager", "Supply Chain Manager", "Operations Lead"],
    operationsFocus: "Express logistics; freight forwarding",
    keyCities: ["Gurgaon", "Mumbai", "Delhi"],
    helpfulCertifications: ["CSCP", "Six Sigma"],
    positioningTips: "Supply chain efficiency; delivery optimization",
    website: "https://www.tciexpress.in"
  },

  // Media & Entertainment
  {
    id: "306",
    name: "Zee Entertainment Enterprises",
    industrySector: "Media & Entertainment",
    roles: ["Operations Manager", "Production Manager", "Content Manager"],
    operationsFocus: "Broadcasting; content production",
    keyCities: ["Mumbai", "Delhi", "Noida"],
    helpfulCertifications: ["PMP", "Content Management"],
    positioningTips: "Operational efficiency; content delivery",
    website: "https://www.zee.com"
  },
  {
    id: "307",
    name: "Sun TV Network",
    industrySector: "Media & Entertainment",
    roles: ["Operations Manager", "Production Manager", "Content Manager"],
    operationsFocus: "Broadcasting; content production",
    keyCities: ["Chennai", "Mumbai", "Delhi"],
    helpfulCertifications: ["PMP", "Content Management"],
    positioningTips: "Operational efficiency; content delivery",
    website: "https://www.suntv.in"
  },
  {
    id: "308",
    name: "PVR Cinemas",
    industrySector: "Media & Entertainment",
    roles: ["Operations Manager", "Facilities Manager", "Guest Services Manager"],
    operationsFocus: "Cinema operations; guest services",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["PMP", "Hospitality Management"],
    positioningTips: "Operational efficiency; guest satisfaction",
    website: "https://www.pvrcinemas.com"
  },
  {
    id: "309",
    name: "INOX Leisure",
    industrySector: "Media & Entertainment",
    roles: ["Operations Manager", "Facilities Manager", "Guest Services Manager"],
    operationsFocus: "Cinema operations; guest services",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["PMP", "Hospitality Management"],
    positioningTips: "Operational efficiency; guest satisfaction",
    website: "https://www.inoxmovies.com"
  },
  {
    id: "310",
    name: "Eros International",
    industrySector: "Media & Entertainment",
    roles: ["Operations Manager", "Production Manager", "Content Manager"],
    operationsFocus: "Film production; distribution",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["PMP", "Content Management"],
    positioningTips: "Operational efficiency; content delivery",
    website: "https://www.erosnow.com"
  },

  // Healthcare
  {
    id: "311",
    name: "Apollo Hospitals",
    industrySector: "Healthcare",
    roles: ["Operations Manager", "Facilities Manager", "Quality Assurance Manager"],
    operationsFocus: "Hospital operations; patient care",
    keyCities: ["Chennai", "Delhi", "Hyderabad"],
    helpfulCertifications: ["PMP", "Healthcare Management"],
    positioningTips: "Operational efficiency; patient satisfaction",
    website: "https://www.apollohospitals.com"
  },
  {
    id: "312",
    name: "Fortis Healthcare",
    industrySector: "Healthcare",
    roles: ["Operations Manager", "Facilities Manager", "Quality Assurance Manager"],
    operationsFocus: "Hospital operations; patient care",
    keyCities: ["Gurgaon", "Mumbai", "Delhi"],
    helpfulCertifications: ["PMP", "Healthcare Management"],
    positioningTips: "Operational efficiency; patient satisfaction",
    website: "https://www.fortishealthcare.com"
  },
  {
    id: "313",
    name: "Max Healthcare",
    industrySector: "Healthcare",
    roles: ["Operations Manager", "Facilities Manager", "Quality Assurance Manager"],
    operationsFocus: "Hospital operations; patient care",
    keyCities: ["Delhi", "Mumbai", "Bengaluru"],
    helpfulCertifications: ["PMP", "Healthcare Management"],
    positioningTips: "Operational efficiency; patient satisfaction",
    website: "https://www.maxhealthcare.in"
  },
  {
    id: "314",
    name: "Manipal Hospitals",
    industrySector: "Healthcare",
    roles: ["Operations Manager", "Facilities Manager", "Quality Assurance Manager"],
    operationsFocus: "Hospital operations; patient care",
    keyCities: ["Bengaluru", "Delhi", "Mumbai"],
    helpfulCertifications: ["PMP", "Healthcare Management"],
    positioningTips: "Operational efficiency; patient satisfaction",
    website: "https://www.manipalhospitals.com"
  },
  {
    id: "315",
    name: "Narayana Health",
    industrySector: "Healthcare",
    roles: ["Operations Manager", "Facilities Manager", "Quality Assurance Manager"],
    operationsFocus: "Hospital operations; patient care",
    keyCities: ["Bengaluru", "Kolkata", "Delhi"],
    helpfulCertifications: ["PMP", "Healthcare Management"],
    positioningTips: "Operational efficiency; patient satisfaction",
    website: "https://www.narayanahealth.org"
  },

  // Biotechnology
  {
    id: "316",
    name: "Serum Institute of India",
    industrySector: "Biotechnology",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Vaccine manufacturing; quality assurance",
    keyCities: ["Pune", "Mumbai", "Delhi"],
    helpfulCertifications: ["Six Sigma", "GMP"],
    positioningTips: "Regulatory compliance; production efficiency",
    website: "https://www.seruminstitute.com"
  },
  {
    id: "317",
    name: "Bharat Biotech",
    industrySector: "Biotechnology",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Vaccine manufacturing; quality assurance",
    keyCities: ["Hyderabad", "Mumbai", "Delhi"],
    helpfulCertifications: ["Six Sigma", "GMP"],
    positioningTips: "Regulatory compliance; production efficiency",
    website: "https://www.bharatbiotech.com"
  },
  {
    id: "318",
    name: "Panacea Biotec",
    industrySector: "Biotechnology",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Vaccine and biologics manufacturing",
    keyCities: ["Delhi", "Mumbai", "Baddi"],
    helpfulCertifications: ["Six Sigma", "GMP"],
    positioningTips: "Regulatory compliance; production efficiency",
    website: "https://www.panaceabiotec.com"
  },
  {
    id: "319",
    name: "Indian Immunologicals",
    industrySector: "Biotechnology",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Vaccine manufacturing; quality assurance",
    keyCities: ["Hyderabad", "Mumbai", "Delhi"],
    helpfulCertifications: ["Six Sigma", "GMP"],
    positioningTips: "Regulatory compliance; production efficiency",
    website: "https://www.indimmune.com"
  },
  {
    id: "320",
    name: "Zydus Biotech",
    industrySector: "Biotechnology",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Biologics manufacturing; quality assurance",
    keyCities: ["Ahmedabad", "Mumbai", "Delhi"],
    helpfulCertifications: ["Six Sigma", "GMP"],
    positioningTips: "Regulatory compliance; production efficiency",
    website: "https://www.zyduslife.com"
  },

  // E-commerce
  {
    id: "321",
    name: "Flipkart",
    industrySector: "E-commerce",
    roles: ["Operations Manager", "Supply Chain Manager", "Logistics Manager"],
    operationsFocus: "E-commerce operations; last-mile delivery",
    keyCities: ["Bengaluru", "Mumbai", "Delhi"],
    helpfulCertifications: ["CSCP", "Six Sigma"],
    positioningTips: "Supply chain efficiency; delivery optimization",
    website: "https://www.flipkart.com"
  },
  {
    id: "322",
    name: "Amazon India",
    industrySector: "E-commerce",
    roles: ["Operations Manager", "Supply Chain Manager", "Logistics Manager"],
    operationsFocus: "E-commerce operations; last-mile delivery",
    keyCities: ["Bengaluru", "Mumbai", "Delhi"],
    helpfulCertifications: ["CSCP", "Six Sigma"],
    positioningTips: "Supply chain efficiency; delivery optimization",
    website: "https://www.amazon.in"
  },
  {
    id: "323",
    name: "Myntra",
    industrySector: "E-commerce",
    roles: ["Operations Manager", "Supply Chain Manager", "Logistics Manager"],
    operationsFocus: "E-commerce operations; last-mile delivery",
    keyCities: ["Bengaluru", "Mumbai", "Delhi"],
    helpfulCertifications: ["CSCP", "Six Sigma"],
    positioningTips: "Supply chain efficiency; delivery optimization",
    website: "https://www.myntra.com"
  },
  {
    id: "324",
    name: "Snapdeal",
    industrySector: "E-commerce",
    roles: ["Operations Manager", "Supply Chain Manager", "Logistics Manager"],
    operationsFocus: "E-commerce operations; last-mile delivery",
    keyCities: ["Gurgaon", "Mumbai", "Delhi"],
    helpfulCertifications: ["CSCP", "Six Sigma"],
    positioningTips: "Supply chain efficiency; delivery optimization",
    website: "https://www.snapdeal.com"
  },
  {
    id: "325",
    name: "BigBasket",
    industrySector: "E-commerce",
    roles: ["Operations Manager", "Supply Chain Manager", "Logistics Manager"],
    operationsFocus: "E-commerce operations; grocery delivery",
    keyCities: ["Bengaluru", "Mumbai", "Delhi"],
    helpfulCertifications: ["CSCP", "Six Sigma"],
    positioningTips: "Supply chain efficiency; delivery optimization",
    website: "https://www.bigbasket.com"
  },

  // Education
  {
    id: "326",
    name: "Amity University",
    industrySector: "Education",
    roles: ["Operations Manager", "Facilities Manager", "Program Coordinator"],
    operationsFocus: "Campus operations; academic administration",
    keyCities: ["Noida", "Mumbai", "Kolkata"],
    helpfulCertifications: ["PMP", "Education Management"],
    positioningTips: "Operational efficiency; student satisfaction",
    website: "https://www.amity.edu"
  },
  {
    id: "327",
    name: "Manipal Academy of Higher Education",
    industrySector: "Education",
    roles: ["Operations Manager", "Facilities Manager", "Program Coordinator"],
    operationsFocus: "Campus operations; academic administration",
    keyCities: ["Manipal", "Bengaluru", "Delhi"],
    helpfulCertifications: ["PMP", "Education Management"],
    positioningTips: "Operational efficiency; student satisfaction",
    website: "https://www.manipal.edu"
  },
  {
    id: "328",
    name: "Symbiosis International University",
    industrySector: "Education",
    roles: ["Operations Manager", "Facilities Manager", "Program Coordinator"],
    operationsFocus: "Campus operations; academic administration",
    keyCities: ["Pune", "Mumbai", "Noida"],
    helpfulCertifications: ["PMP", "Education Management"],
    positioningTips: "Operational efficiency; student satisfaction",
    website: "https://www.siu.edu.in"
  },
  {
    id: "329",
    name: "VIT University",
    industrySector: "Education",
    roles: ["Operations Manager", "Facilities Manager", "Program Coordinator"],
    operationsFocus: "Campus operations; academic administration",
    keyCities: ["Vellore", "Chennai", "Bengaluru"],
    helpfulCertifications: ["PMP", "Education Management"],
    positioningTips: "Operational efficiency; student satisfaction",
    website: "https://www.vit.ac.in"
  },
  {
    id: "330",
    name: "SRM Institute of Science and Technology",
    industrySector: "Education",
    roles: ["Operations Manager", "Facilities Manager", "Program Coordinator"],
    operationsFocus: "Campus operations; academic administration",
    keyCities: ["Chennai", "Delhi", "Mumbai"],
    helpfulCertifications: ["PMP", "Education Management"],
    positioningTips: "Operational efficiency; student satisfaction",
    website: "https://www.srmist.edu.in"
  },

  // Financial Services
  {
    id: "331",
    name: "HDFC Bank",
    industrySector: "Financial Services",
    roles: ["Operations Manager", "Branch Manager", "Risk Manager"],
    operationsFocus: "Banking operations; customer service",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["PMP", "CFA"],
    positioningTips: "Operational efficiency; risk management",
    website: "https://www.hdfcbank.com"
  },
  {
    id: "332",
    name: "ICICI Bank",
    industrySector: "Financial Services",
    roles: ["Operations Manager", "Branch Manager", "Risk Manager"],
    operationsFocus: "Banking operations; customer service",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["PMP", "CFA"],
    positioningTips: "Operational efficiency; risk management",
    website: "https://www.icicibank.com"
  },
  {
    id: "333",
    name: "Axis Bank",
    industrySector: "Financial Services",
    roles: ["Operations Manager", "Branch Manager", "Risk Manager"],
    operationsFocus: "Banking operations; customer service",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["PMP", "CFA"],
    positioningTips: "Operational efficiency; risk management",
    website: "https://www.axisbank.com"
  },
  {
    id: "334",
    name: "Kotak Mahindra Bank",
    industrySector: "Financial Services",
    roles: ["Operations Manager", "Branch Manager", "Risk Manager"],
    operationsFocus: "Banking operations; customer service",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["PMP", "CFA"],
    positioningTips: "Operational efficiency; risk management",
    website: "https://www.kotak.com"
  },
  {
    id: "335",
    name: "State Bank of India",
    industrySector: "Financial Services",
    roles: ["Operations Manager", "Branch Manager", "Risk Manager"],
    operationsFocus: "Banking operations; customer service",
    keyCities: ["Mumbai", "Delhi", "Kolkata"],
    helpfulCertifications: ["PMP", "CFA"],
    positioningTips: "Operational efficiency; risk management",
    website: "https://www.sbi.co.in"
  },

  // Insurance
  {
    id: "336",
    name: "LIC of India",
    industrySector: "Insurance",
    roles: ["Operations Manager", "Claims Manager", "Underwriting Manager"],
    operationsFocus: "Insurance operations; claims processing",
    keyCities: ["Mumbai", "Delhi", "Kolkata"],
    helpfulCertifications: ["PMP", "CPCU"],
    positioningTips: "Operational efficiency; customer service",
    website: "https://www.licindia.in"
  },
  {
    id: "337",
    name: "ICICI Prudential Life Insurance",
    industrySector: "Insurance",
    roles: ["Operations Manager", "Claims Manager", "Underwriting Manager"],
    operationsFocus: "Insurance operations; claims processing",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["PMP", "CPCU"],
    positioningTips: "Operational efficiency; customer service",
    website: "https://www.iciciprulife.com"
  },
  {
    id: "338",
    name: "HDFC Life Insurance",
    industrySector: "Insurance",
    roles: ["Operations Manager", "Claims Manager", "Underwriting Manager"],
    operationsFocus: "Insurance operations; claims processing",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["PMP", "CPCU"],
    positioningTips: "Operational efficiency; customer service",
    website: "https://www.hdfclife.com"
  },
  {
    id: "339",
    name: "SBI Life Insurance",
    industrySector: "Insurance",
    roles: ["Operations Manager", "Claims Manager", "Underwriting Manager"],
    operationsFocus: "Insurance operations; claims processing",
    keyCities: ["Mumbai", "Delhi", "Kolkata"],
    helpfulCertifications: ["PMP", "CPCU"],
    positioningTips: "Operational efficiency; customer service",
    website: "https://www.sbilife.co.in"
  },
  {
    id: "340",
    name: "Bajaj Allianz General Insurance",
    industrySector: "Insurance",
    roles: ["Operations Manager", "Claims Manager", "Underwriting Manager"],
    operationsFocus: "Insurance operations; claims processing",
    keyCities: ["Pune", "Mumbai", "Delhi"],
    helpfulCertifications: ["PMP", "CPCU"],
    positioningTips: "Operational efficiency; customer service",
    website: "https://www.bajajallianz.com"
  },

  // IT Services
  {
    id: "341",
    name: "Tata Consultancy Services",
    industrySector: "IT Services",
    roles: ["Project Manager", "Operations Manager", "Quality Assurance Manager"],
    operationsFocus: "IT services; software development",
    keyCities: ["Mumbai", "Bengaluru", "Hyderabad"],
    helpfulCertifications: ["PMP", "ITIL"],
    positioningTips: "Project delivery; operational efficiency",
    website: "https://www.tcs.com"
  },
  {
    id: "342",
    name: "Infosys",
    industrySector: "IT Services",
    roles: ["Project Manager", "Operations Manager", "Quality Assurance Manager"],
    operationsFocus: "IT services; software development",
    keyCities: ["Bengaluru", "Pune", "Hyderabad"],
    helpfulCertifications: ["PMP", "ITIL"],
    positioningTips: "Project delivery; operational efficiency",
    website: "https://www.infosys.com"
  },
  {
    id: "343",
    name: "Wipro",
    industrySector: "IT Services",
    roles: ["Project Manager", "Operations Manager", "Quality Assurance Manager"],
    operationsFocus: "IT services; software development",
    keyCities: ["Bengaluru", "Hyderabad", "Chennai"],
    helpfulCertifications: ["PMP", "ITIL"],
    positioningTips: "Project delivery; operational efficiency",
    website: "https://www.wipro.com"
  },
  {
    id: "344",
    name: "HCL Technologies",
    industrySector: "IT Services",
    roles: ["Project Manager", "Operations Manager", "Quality Assurance Manager"],
    operationsFocus: "IT services; software development",
    keyCities: ["Noida", "Bengaluru", "Chennai"],
    helpfulCertifications: ["PMP", "ITIL"],
    positioningTips: "Project delivery; operational efficiency",
    website: "https://www.hcltech.com"
  },
  {
    id: "345",
    name: "Tech Mahindra",
    industrySector: "IT Services",
    roles: ["Project Manager", "Operations Manager", "Quality Assurance Manager"],
    operationsFocus: "IT services; software development",
    keyCities: ["Pune", "Hyderabad", "Mumbai"],
    helpfulCertifications: ["PMP", "ITIL"],
    positioningTips: "Project delivery; operational efficiency",
    website: "https://www.techmahindra.com"
  },

  // Consulting
  {
    id: "346",
    name: "Deloitte India",
    industrySector: "Consulting",
    roles: ["Project Manager", "Operations Consultant", "Process Manager"],
    operationsFocus: "Business consulting; process optimization",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Process optimization; client delivery",
    website: "https://www2.deloitte.com/in"
  },
  {
    id: "347",
    name: "PwC India",
    industrySector: "Consulting",
    roles: ["Project Manager", "Operations Consultant", "Process Manager"],
    operationsFocus: "Business consulting; process optimization",
    keyCities: ["Mumbai", "Delhi", "Kolkata"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Process optimization; client delivery",
    website: "https://www.pwc.in"
  },
  {
    id: "348",
    name: "EY India",
    industrySector: "Consulting",
    roles: ["Project Manager", "Operations Consultant", "Process Manager"],
    operationsFocus: "Business consulting; process optimization",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Process optimization; client delivery",
    website: "https://www.ey.com/en_in"
  },
  {
    id: "349",
    name: "KPMG India",
    industrySector: "Consulting",
    roles: ["Project Manager", "Operations Consultant", "Process Manager"],
    operationsFocus: "Business consulting; process optimization",
    keyCities: ["Mumbai", "Delhi", "Bengaluru"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Process optimization; client delivery",
    website: "https://home.kpmg/in"
  },
  {
    id: "350",
    name: "Accenture India",
    industrySector: "Consulting",
    roles: ["Project Manager", "Operations Consultant", "Process Manager"],
    operationsFocus: "Business consulting; process optimization",
    keyCities: ["Bengaluru", "Mumbai", "Delhi"],
    helpfulCertifications: ["PMP", "Six Sigma"],
    positioningTips: "Process optimization; client delivery",
    website: "https://www.accenture.com/in-en"
  }
  ,
  // Electric vehicle pioneer
  {
    id: "351",
    name: "Tesla, Inc.",
    industrySector: "Electric Vehicles, Energy",
    roles: ["Production Manager", "Plant Operations Supervisor", "Supply Chain Manager", "Quality Engineer"],
    operationsFocus: "Manufacturing of electric vehicles and energy products. The Fremont factory in California builds the Model S, Model 3, Model X and Model Y while Gigafactory Nevada produces electric motors, battery cells and powertrains. Gigafactory New York builds solar roof panels and Supercharger components. Gigafactory Shanghai produces Model 3 and Model Y vehicles. Gigafactory Texas in Austin – Tesla’s headquarters – builds Model Y and is the future home of the Cybertruck, and Gigafactory Berlin‑Brandenburg is Tesla’s first European factory producing Model Y and batteries【156664249726304†L63-L132】.",
    keyCities: ["Fremont", "Reno", "Buffalo", "Austin", "Shanghai", "Berlin"],
    helpfulCertifications: ["Lean Manufacturing", "Six Sigma", "EV Technology", "Battery Safety"],
    positioningTips: "Highlight experience with high‑volume manufacturing, automation and quality control in fast‑growing technology companies.",
    website: "https://www.tesla.com"
  },

  // Commercial aircraft manufacturer – USA
  {
    id: "352",
    name: "Boeing Company",
    industrySector: "Aerospace & Defence",
    roles: ["Manufacturing Engineer", "Production Manager", "Quality Engineer", "Supply Chain Manager"],
    operationsFocus: "Final assembly of commercial aircraft. The Everett Production Facility in Everett, Washington houses the world’s largest building by volume and assembles wide‑body aircraft such as the 747, 767, 777 and 787【848488123354212†L172-L183】. The Renton Factory near Renton Municipal Airport manufactures narrow‑body 737 MAX airliners and P‑8 Poseidon patrol aircraft【211695035669001†L164-L169】. Boeing South Carolina in North Charleston is the final assembly and delivery site for the 787 Dreamliner, with a 1.2‑million‑sq‑ft assembly building【278893136238185†L139-L146】.",
    keyCities: ["Everett", "Renton", "North Charleston"],
    helpfulCertifications: ["AS9100 Quality", "Lean Manufacturing", "Six Sigma", "Project Management"],
    positioningTips: "Demonstrate aerospace manufacturing expertise, safety leadership and familiarity with quality systems.",
    website: "https://www.boeing.com"
  },

  // Commercial aircraft manufacturer – Europe
  {
    id: "353",
    name: "Airbus SE",
    industrySector: "Aerospace & Defence",
    roles: ["Manufacturing Engineer", "Assembly Technician", "Operations Manager", "Supply Chain Manager"],
    operationsFocus: "Aircraft final‑assembly operations across Europe, Asia and North America. Toulouse, France hosts final assembly of the A320, A330 and A350 families; Hamburg‑Finkenwerder in Germany assembles A320 family aircraft; Seville in Spain builds the A400M and C295; Tianjin in China assembles the A320 family; Mobile, Alabama in the U.S. assembles A220 and A320 family aircraft; and Mirabel, Quebec in Canada builds the A220【811660260979480†L845-L854】.",
    keyCities: ["Toulouse", "Hamburg", "Seville", "Tianjin", "Mobile", "Mirabel"],
    helpfulCertifications: ["Lean Manufacturing", "Six Sigma", "Project Management", "EU Aviation Regulations"],
    positioningTips: "Emphasize cross‑cultural collaboration, precision manufacturing and knowledge of aerospace standards.",
    website: "https://www.airbus.com"
  },

  // Global container logistics leader
  {
    id: "354",
    name: "A.P. Moller – Maersk",
    industrySector: "Shipping & Logistics",
    roles: ["Port Operations Manager", "Logistics Coordinator", "Supply Chain Manager", "Fleet Manager"],
    operationsFocus: "Integrated container shipping and logistics services. Maersk’s business activities include port operations, supply‑chain management, warehousing and air freight, with subsidiaries and offices across 130 countries and around 100,000 employees【889553349244215†L281-L284】.",
    keyCities: ["Copenhagen", "Mumbai", "Singapore", "Rotterdam", "Dubai"],
    helpfulCertifications: ["APICS/CSCP", "Port Management", "Six Sigma", "Customs & Freight Forwarding"],
    positioningTips: "Show capability in managing global supply chains, multimodal transport and port operations.",
    website: "https://www.maersk.com"
  },

  // Courier and logistics powerhouse
  {
    id: "355",
    name: "United Parcel Service (UPS)",
    industrySector: "Logistics & Courier",
    roles: ["Hub Operations Manager", "Supply Chain Manager", "Freight Forwarding Manager", "Logistics Coordinator"],
    operationsFocus: "Express courier, freight forwarding and supply‑chain management services. UPS is the world’s largest courier company by revenue and is headquartered in Sandy Springs, Georgia【300481462086133†L215-L281】. Its main air hub, UPS Worldport, is located in Louisville, Kentucky and is one of the busiest cargo airports【300481462086133†L276-L281】. UPS Airlines, based in Louisville, has additional hubs in Ontario (California), Dallas (Texas), Rockford (Illinois), Philadelphia and Cologne, with facilities in Hong Kong and China【300481462086133†L956-L963】.",
    keyCities: ["Sandy Springs", "Louisville", "Ontario (CA)", "Dallas", "Rockford", "Philadelphia", "Cologne"],
    helpfulCertifications: ["APICS/CSCP", "Freight Forwarding", "Six Sigma", "Transportation Management"],
    positioningTips: "Highlight experience in time‑critical logistics, hub operations and global freight networks.",
    website: "https://www.ups.com"
  },

  // Global express delivery company
  {
    id: "356",
    name: "FedEx Corporation",
    industrySector: "Logistics & Express Delivery",
    roles: ["Hub Operations Manager", "Delivery Manager", "Logistics Coordinator", "Air Freight Supervisor"],
    operationsFocus: "Multinational transportation and e‑commerce services company best known for its air delivery business. FedEx is headquartered in Memphis, Tennessee and operates numerous subsidiaries including FedEx Express, FedEx Ground and FedEx Supply Chain【189936769970037†L314-L327】. The company’s air shipping operations are centralized at Memphis International Airport, which serves as its primary global hub【189936769970037†L326-L327】.",
    keyCities: ["Memphis", "Indianapolis", "Paris", "Guangzhou"],
    helpfulCertifications: ["APICS/CLTD", "Air Cargo Management", "Six Sigma", "Project Management"],
    positioningTips: "Show competency in air freight operations, network optimization and e‑commerce logistics.",
    website: "https://www.fedex.com"
  },

  // Integrated oil & gas major
  {
    id: "357",
    name: "Shell plc",
    industrySector: "Oil & Gas, Energy",
    roles: ["Operations Manager", "Refinery Engineer", "HSE Manager", "Supply Chain Manager"],
    operationsFocus: "Vertically integrated oil and gas company active in exploration, production, refining, transport, distribution, marketing, petrochemicals and power generation. Shell operates in over 99 countries and is headquartered in London, United Kingdom【902097957996894†L381-L385】.",
    keyCities: ["London", "The Hague", "Houston", "Singapore"],
    helpfulCertifications: ["NEBOSH", "Environmental Management", "Petroleum Engineering", "Project Management"],
    positioningTips: "Emphasize safety leadership, compliance with environmental regulations and experience in large‑scale energy projects.",
    website: "https://www.shell.com"
  },

  // Indian food products giant
  {
    id: "358",
    name: "Britannia Industries",
    industrySector: "Food & Beverages",
    roles: ["Plant Operations Manager", "Production Supervisor", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Manufactures biscuits, breads, cakes, rusk and dairy products such as milk, butter, cheese and ghee【412380283181215†L169-L174】. Founded in 1892, the company has its registered office in Kolkata and corporate headquarters in Bangalore and serves markets worldwide【412380283181215†L145-L160】.",
    keyCities: ["Kolkata", "Bengaluru", "Mumbai", "Delhi"],
    helpfulCertifications: ["FSSAI Food Safety", "ISO 22000", "Six Sigma", "HACCP"],
    positioningTips: "Demonstrate expertise in food‑processing operations, quality management and supply chain optimization.",
    website: "https://www.britannia.co.in"
  },

  // Swiss food & beverage company’s Indian subsidiary
  {
    id: "359",
    name: "Nestlé India",
    industrySector: "Food & Beverages",
    roles: ["Plant Manager", "Production Supervisor", "Supply Chain Manager", "Quality Assurance Manager"],
    operationsFocus: "Produces food, beverages, chocolate and confectionery items in India【325336551793193†L183-L186】. Nestlé India operates nine manufacturing facilities across the country at Moga (Punjab), Samalkha (Haryana), Nanjangud (Karnataka), Choladi (Tamil Nadu), Ponda and Bicholim (Goa), Pantnagar (Uttarakhand), Tahliwal (Himachal Pradesh) and Sanand (Gujarat)【325336551793193†L231-L243】.",
    keyCities: ["Gurgaon", "Moga", "Samalkha", "Nanjangud", "Choladi", "Ponda", "Bicholim", "Pantnagar", "Tahliwal", "Sanand"],
    helpfulCertifications: ["FSSAI Food Safety", "HACCP", "Lean Manufacturing", "Six Sigma"],
    positioningTips: "Highlight experience in large‑scale food manufacturing, stringent hygiene standards and distribution across India.",
    website: "https://www.nestle.in"
  },

  // Indian electric two‑wheeler manufacturer
  {
    id: "360",
    name: "Ola Electric Mobility",
    industrySector: "Electric Vehicles, Energy",
    roles: ["Production Manager", "Plant Operations Supervisor", "Battery Manufacturing Engineer", "Supply Chain Manager"],
    operationsFocus: "Designs and manufactures electric two‑wheelers including the Ola S1 range. The company is headquartered in Bengaluru and operates its ‘Futurefactory’ manufacturing facility in Krishnagiri, Tamil Nadu; the site builds electric scooters and produces battery cells for the vehicles【645219524162898†L188-L197】.",
    keyCities: ["Bengaluru", "Krishnagiri"],
    helpfulCertifications: ["EV Technology", "Battery Safety", "Lean Manufacturing", "Project Management"],
    positioningTips: "Demonstrate expertise in EV manufacturing, battery production and high‑throughput automation.",
    website: "https://www.olaelectric.com"
  },

  // Artificial Intelligence
  {
    id: "361",
    name: "Krutrim AI",
    industrySector: "Artificial Intelligence",
    roles: ["AI Research Scientist", "Software Engineer", "Data Scientist"],
    operationsFocus: "AI model development; cloud-based AI solutions",
    keyCities: ["Bengaluru"],
    helpfulCertifications: ["AI/ML Certifications", "AWS Certified Machine Learning", "TensorFlow Developer Certificate"],
    positioningTips: "Emphasize expertise in AI development and multilingual data processing",
    website: "https://krutrim.com"
  },

  // Fintech
  {
    id: "362",
    name: "Nivara",
    industrySector: "Fintech",
    roles: ["Fintech Product Manager", "Risk Analyst", "Operations Lead"],
    operationsFocus: "Embedded finance platforms; SME lending",
    keyCities: ["Mumbai", "Bengaluru"],
    helpfulCertifications: ["CFA", "Fintech Certification", "PMP"],
    positioningTips: "Highlight experience in financial operations and digital lending platforms",
    website: "Not publicly available"
  },

  // Consumer Technology (D2C Beauty)
  {
    id: "363",
    name: "Foxtale",
    industrySector: "Consumer Technology",
    roles: ["Supply Chain Manager", "E-commerce Operations Lead", "Product Development Manager"],
    operationsFocus: "D2C supply chain; e-commerce logistics",
    keyCities: ["Mumbai", "Delhi"],
    helpfulCertifications: ["CSCP", "Six Sigma", "E-commerce Operations"],
    positioningTips: "Demonstrate expertise in e-commerce logistics and consumer product scaling",
    website: "https://foxtaleconsumer.com"
  },

  // Infrastructure
  {
    id: "364",
    name: "Mayasheel Ventures Limited",
    industrySector: "Infrastructure",
    roles: ["Project Manager", "Site Operations Manager", "Quality Control Engineer"],
    operationsFocus: "Infrastructure project execution; highway construction",
    keyCities: ["Assam", "Manipur", "Nagaland"],
    helpfulCertifications: ["PMP", "Six Sigma", "Civil Engineering Certifications"],
    positioningTips: "Emphasize experience in large-scale infrastructure projects and government contracts",
    website: "Not publicly available"
  },

  // Investment Banking & Financial Services
  {
    id: "365",
    name: "Equity 360",
    industrySector: "Financial Services",
    roles: ["Transaction Advisor", "Financial Analyst", "Business Development Manager"],
    operationsFocus: "Capital raising; M&A strategy",
    keyCities: ["Mumbai", "Bengaluru"],
    helpfulCertifications: ["CFA", "PMP", "Financial Modeling & Valuation Analyst"],
    positioningTips: "Highlight expertise in deal structuring and investor relations",
    website: "https://www.equity360.in"
  }

  // Telecommunications
  {
    id: "366",
    name: "Bharti Airtel",
    industrySector: "Telecommunications",
    roles: ["Network Operations Manager", "Customer Service Manager", "IT Project Manager"],
    operationsFocus: "Mobile and fixed-line telecommunications services",
    keyCities: ["New Delhi", "Mumbai", "Bengaluru"],
    helpfulCertifications: ["PMP", "ITIL", "Telecom Certifications"],
    positioningTips: "Experience in managing large-scale telecom operations and customer service",
    website: "https://www.airtel.in"
  },

  // FMCG
  {
    id: "367",
    name: "Hindustan Unilever Limited",
    industrySector: "FMCG",
    roles: ["Production Manager", "Quality Control Manager", "Supply Chain Manager"],
    operationsFocus: "Manufacturing and distribution of consumer goods",
    keyCities: ["Mumbai", "Kolkata", "Chennai"],
    helpfulCertifications: ["Six Sigma", "ISO 9001", "Supply Chain Management"],
    positioningTips: "Expertise in FMCG manufacturing and logistics",
    website: "https://www.hul.co.in"
  },

  // Conglomerate
  {
    id: "368",
    name: "ITC Limited",
    industrySector: "Conglomerate",
    roles: ["Operations Manager", "Supply Chain Manager", "Project Manager"],
    operationsFocus: "Diverse operations including food, tobacco, hotels, paper",
    keyCities: ["Kolkata", "Mumbai", "Delhi"],
    helpfulCertifications: ["PMP", "Six Sigma", "Hospitality Management"],
    positioningTips: "Experience in managing multi-sector operations",
    website: "https://www.itcportal.com"
  },

  // Cement
  {
    id: "369",
    name: "Shree Cement Limited",
    industrySector: "Cement",
    roles: ["Plant Manager", "Production Supervisor", "Quality Control Manager"],
    operationsFocus: "Cement manufacturing",
    keyCities: ["New Delhi", "Beawar"],
    helpfulCertifications: ["Six Sigma", "ISO 9001"],
    positioningTips: "Experience in cement production and quality management",
    website: "https://www.shreecement.com"
  },

  // Electronics Manufacturing
  {
    id: "370",
    name: "Dixon Technologies (India) Limited",
    industrySector: "Electronics Manufacturing",
    roles: ["Production Manager", "Quality Assurance Manager", "Supply Chain Manager"],
    operationsFocus: "Manufacturing of consumer electronics and appliances",
    keyCities: ["Noida", "Delhi"],
    helpfulCertifications: ["Lean Manufacturing", "Six Sigma", "ISO 9001"],
    positioningTips: "Expertise in electronics assembly and supply chain management",
    website: "https://www.dixontech.com"
  },

  // Electric Vehicles
  {
    id: "371",
    name: "Ather Energy",
    industrySector: "Electric Vehicles",
    roles: ["Product Manager", "Software Engineer", "Operations Manager"],
    operationsFocus: "Design and manufacturing of electric scooters",
    keyCities: ["Bengaluru"],
    helpfulCertifications: ["EV Technology", "Project Management"],
    positioningTips: "Experience in EV product development and manufacturing",
    website: "https://www.atherenergy.com"
  },

  // E-commerce
  {
    id: "372",
    name: "Meesho",
    industrySector: "E-commerce",
    roles: ["Product Manager", "Operations Lead", "Supply Chain Manager"],
    operationsFocus: "Online marketplace for small businesses",
    keyCities: ["Bengaluru"],
    helpfulCertifications: ["E-commerce Operations", "Supply Chain Management"],
    positioningTips: "Experience in scaling e-commerce platforms",
    website: "https://www.meesho.com"
  },

  // Food Delivery
  {
    id: "373",
    name: "Zomato",
    industrySector: "Food Delivery",
    roles: ["Operations Manager", "Logistics Coordinator", "Customer Service Manager"],
    operationsFocus: "Food delivery and restaurant aggregation",
    keyCities: ["Gurgaon", "Bengaluru"],
    helpfulCertifications: ["Logistics Management", "Customer Service"],
    positioningTips: "Experience in managing food delivery operations",
    website: "https://www.zomato.com"
  },

  // Food Delivery
  {
    id: "374",
    name: "Swiggy",
    industrySector: "Food Delivery",
    roles: ["Operations Manager", "Logistics Manager", "Technology Lead"],
    operationsFocus: "Food delivery services",
    keyCities: ["Bengaluru"],
    helpfulCertifications: ["Logistics", "Technology Management"],
    positioningTips: "Expertise in tech-driven food delivery systems",
    website: "https://www.swiggy.com"
  },

  // Fintech
  {
    id: "375",
    name: "Groww",
    industrySector: "Fintech",
    roles: ["Product Manager", "Risk Analyst", "Compliance Officer"],
    operationsFocus: "Investment platform for mutual funds and stocks",
    keyCities: ["Bengaluru"],
    helpfulCertifications: ["Fintech", "Financial Analysis"],
    positioningTips: "Experience in developing financial products and ensuring compliance",
    website: "https://groww.in"
  },

  // Fintech
  {
    id: "376",
    name: "Zerodha Broking Limited",
    industrySector: "Fintech",
    roles: ["Trading Operations Manager", "Technology Lead", "Customer Support Manager"],
    operationsFocus: "Discount brokerage services",
    keyCities: ["Bengaluru"],
    helpfulCertifications: ["Stock Market Operations", "Technology Management"],
    positioningTips: "Experience in brokerage operations and technology",
    website: "https://zerodha.com"
  },

  // Agritech
  {
    id: "377",
    name: "Ninjacart",
    industrySector: "Agritech",
    roles: ["Supply Chain Manager", "Operations Lead", "Technology Manager"],
    operationsFocus: "Connecting farmers with retailers and consumers",
    keyCities: ["Bengaluru"],
    helpfulCertifications: ["Supply Chain Management", "Agritech"],
    positioningTips: "Experience in agritech supply chain and technology",
    website: "https://ninjacart.in"
  },

  // Agritech
  {
    id: "378",
    name: "DeHaat",
    industrySector: "Agritech",
    roles: ["Field Operations Manager", "Technology Specialist", "Business Development Manager"],
    operationsFocus: "Providing agricultural inputs and services to farmers",
    keyCities: ["Gurgaon"],
    helpfulCertifications: ["Agritech", "Business Development"],
    positioningTips: "Experience in rural market operations and agritech solutions",
    website: "https://agrevolution.in"
  },

  // AI
  {
    id: "379",
    name: "Haptik",
    industrySector: "AI",
    roles: ["AI Engineer", "Product Manager", "Data Scientist"],
    operationsFocus: "Conversational AI and chatbots",
    keyCities: ["Mumbai"],
    helpfulCertifications: ["AI/ML", "Product Management"],
    positioningTips: "Expertise in developing conversational AI solutions",
    website: "https://www.haptik.ai"
  },

  // Analytics
  {
    id: "380",
    name: "Fractal Analytics",
    industrySector: "Analytics",
    roles: ["Data Scientist", "Analytics Consultant", "Project Manager"],
    operationsFocus: "Predictive analytics and AI solutions",
    keyCities: ["Gurgaon"],
    helpfulCertifications: ["Data Science", "Analytics"],
    positioningTips: "Experience in delivering analytics projects and solutions",
    website: "https://www.fractal.ai"
  },

  // Travel and Hospitality
  {
    id: "381",
    name: "MakeMyTrip",
    industrySector: "Travel and Hospitality",
    roles: ["Operations Manager", "Product Manager", "Customer Service Manager"],
    operationsFocus: "Online travel booking platform",
    keyCities: ["Gurgaon"],
    helpfulCertifications: ["Travel Industry", "Customer Service"],
    positioningTips: "Experience in online travel services and customer engagement",
    website: "https://www.makemytrip.com"
  },

  // Entertainment
  {
    id: "382",
    name: "BookMyShow",
    industrySector: "Entertainment",
    roles: ["Event Operations Manager", "Marketing Manager", "Technology Lead"],
    operationsFocus: "Online ticketing for movies and events",
    keyCities: ["Mumbai"],
    helpfulCertifications: ["Event Management", "Digital Marketing"],
    positioningTips: "Experience in managing entertainment ticketing platforms",
    website: "https://in.bookmyshow.com"
  },

  // Edtech
  {
    id: "383",
    name: "Unacademy",
    industrySector: "Edtech",
    roles: ["Content Creator", "Operations Manager", "Product Manager"],
    operationsFocus: "Online learning platform",
    keyCities: ["Bengaluru"],
    helpfulCertifications: ["Edtech", "Content Creation"],
    positioningTips: "Experience in developing educational content and platforms",
    website: "https://unacademy.com"
  },

  // Edtech
  {
    id: "384",
    name: "Byju's",
    industrySector: "Edtech",
    roles: ["Education Consultant", "Operations Manager", "Technology Specialist"],
    operationsFocus: "Providing educational technology and services",
    keyCities: ["Bengaluru"],
    helpfulCertifications: ["Edtech", "Education Management"],
    positioningTips: "Experience in scaling edtech solutions",
    website: "https://byjus.com"
  }
];


// Updated filter options based on complete dataset
export const functionalAreas = [
  { id: "ops", label: "Operations", icon: "⚙️" },
  { id: "security", label: "Security", icon: "🔒" },
  { id: "project", label: "Project Management", icon: "📋" },
  { id: "logistics", label: "Logistics", icon: "🚚" },
  { id: "it", label: "IT & Cyber", icon: "💻" },
  { id: "safety", label: "Safety & EHS", icon: "🛡️" },
  { id: "quality", label: "Quality Management", icon: "✅" },
  { id: "maintenance", label: "Maintenance", icon: "🔧" },
  { id: "consulting", label: "Consulting", icon: "💼" },
  { id: "finance", label: "Finance & Risk", icon: "💰" },
]

export const industries = [
  "Steel, Auto, Conglomerate",
  "EPC, Defence, Infrastructure",
  "Mining, Metals, Energy",
  "Ports, Energy, Logistics",
  "Oil & Gas",
  "Auto",
  "Steel",
  "Mining",
  "Metals",
  "Engineering",
  "Energy",
  "Ports",
  "Defence",
  "Energy, Petrochemicals",
  "E-commerce, 3PL",
  "E-commerce",
  "Tech-Logistics",
  "3PL & In-house",
  "Express Logistics",
  "Security Services",
  "IT Services",
  "Technology & Consulting",
  "Banking GCC",
  "Banking",
  "Management Consulting",
  "Construction",
  "Construction Equipment",
  "Cement",
  "Infrastructure Development",
  "Chemicals",
  "Agrochemicals",
  "Textiles, Chemicals",
  "Telecommunications",
  "Technology",
  "Cybersecurity",
  "Insurance & Risk",
  "Healthcare Technology",
  "Insurance",
  "Financial Services",
  "Hospitality",
  "Facility Management",
  "SaaS",
]

export const cities = [
  "Mumbai",
  "Delhi",
  "New Delhi",
  "Bengaluru",
  "Chennai",
  "Pune",
  "Hyderabad",
  "Ahmedabad",
  "Kolkata",
  "Jamshedpur",
  "Gurgaon",
  "Gurugram",
  "Noida",
  "Odisha",
  "Uttarakhand",
  "Mundra",
  "Goa",
  "Krishnapatnam",
  "Vadodara",
  "Dehradun",
  "Vijayanagar",
  "Hisar",
  "Bhilai",
  "Ranchi",
  "Renukoot",
  "Donimalai",
  "Trombay",
  "Salaya",
  "Jaisalmer",
  "Nashik",
  "Ghaziabad",
  "Kanchanbagh",
  "Jamnagar",
  "Visakhapatnam",
  "Kochi",
  "NCR",
  "Delhi NCR",
  "Kolar",
  "Faridabad",
  "Oragadam",
  "Chakan",
  "Hosur",
  "Ballabgarh",
  "Beawar",
  "Ariyalur",
  "Sirohi",
  "Kanpur",
  "Nimbahera",
  "Devapur",
  "Damoh",
  "Satna",
  "Agra",
  "Bhopal",
  "Hazira",
  "Pithamppur",
  "Bhiwadi",
  "Mithappur",
  "Vapi",
  "Ankleshwar",
  "Nagda",
  "Udaipur",
  "Duliajan",
  "Mangalore",
  "Gandhinagar",
  "Nagpur",
  "Nhava",
  "Thane",
  "Kanchipuram",
  "Manesar",
  "Sriperumbudur",
  "Greater Noida",
  "Tapukara",
  "Bidadi",
  "Tiruvottiyur",
  "Mysore",
  "Chittoor",
  "Tirupati",
  "Kharagpur",
  "Vadodara",
  "Hubli",
  "Thrissur",
  "Navi Mumbai",
  "Adityanagar",
  "Kotputli",
  "Chandrapur",
  "Bhatapara",
  "Chaibasa",
  "Kymore",
  "Aurangabad",
  "Dalmiapuram",
  "Mangrol",
  "Raipur",
  "Ammasandra",
  "Jalgaon",
  "Haldia",
  "Manali",
  "Dahej",
  "Taloja",
  "Valsad",
  "Tarapur",
  "Nagda",
  "Kharach",
  "Chhindwara",
  "Anjar",
  "Barnala",
  "Budni",
  "Baddi",
  "Nalagarh",
  "Kathua",
  "Silvassa",
  "Austin",
  "Pleasanton",
  "San Mateo",
  "London",
  "Sunnyvale",
  "Bellevue",
  "Frankfurt",
  "Singapore",
  "Dubai",
  "San Francisco",
  "Amsterdam",
  "Dublin",
]
