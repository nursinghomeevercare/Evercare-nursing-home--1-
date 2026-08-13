export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface InternationalArticle {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  keywords: string;
  category: string;
  readTime: string;
  published: string;
  updated: string;
  intro: string;
  takeaways: string[];
  sections: ArticleSection[];
  sources: { label: string; url: string }[];
}

export const internationalArticles: InternationalArticle[] = [
  {
    slug: "why-choose-evercare-bangkok",
    title: "Why Choose Evercare for International Elderly Care in Bangkok?",
    seoTitle: "Why Choose Evercare Nursing Home in Bangkok",
    description: "Learn how Evercare supports international residents with private rooms, assessed care levels, English family updates, hospital coordination, and transparent pricing.",
    keywords: "why choose Evercare, international elderly care Bangkok, English speaking nursing home Thailand, nursing home for foreigners Bangkok",
    category: "Evercare Guide",
    readTime: "7 min read",
    published: "2026-08-13",
    updated: "2026-08-13",
    intro: "Choosing care in another country is a major decision. International families need more than a room: they need a clear care plan, dependable communication, practical hospital coordination, and a price they can understand before admission.",
    takeaways: [
      "Private furnished accommodation is included in every international package.",
      "Care level is recommended after a pre-admission assessment, not selected from price alone.",
      "Basic English communication and agreed family updates are included.",
      "Common optional and third-party costs are disclosed separately.",
    ],
    sections: [
      {
        heading: "Care matched to the resident, not a generic label",
        paragraphs: [
          "Evercare reviews the resident's medical summary, medication list, mobility, eating, bathing, dressing, toileting, cognitive needs, and expected admission date. This assessment helps distinguish Essential, Assisted, and Advanced care.",
          "If needs change, the care plan and package can be reviewed. That matters for older adults whose mobility, nutrition, wound care, dementia symptoms, or recovery needs may evolve over time.",
        ],
      },
      {
        heading: "A practical connection between hospital, resident, and family",
        paragraphs: [
          "International relatives may be several time zones away. Evercare can coordinate with hospitals, doctors, and family members, and provide regular updates according to the agreed care plan.",
          "This does not replace the treating physician. It creates a clearer day-to-day bridge for appointments, prescribed medication routines, transport, and follow-up questions.",
        ],
      },
      {
        heading: "A more personal setting after acute care",
        paragraphs: [
          "Hospitals are the right setting for surgery, unstable conditions, emergency care, and acute medical monitoring. After a doctor confirms that hospital-level care is no longer required, a nursing home may provide a calmer environment for meals, hygiene, mobility assistance, rest, and daily routines.",
          "Evercare's role is supportive and residential. Any rehabilitation, wound care, equipment, specialist input, or clinical procedure must be arranged according to the resident's medical plan and may involve additional fees.",
        ],
      },
      {
        heading: "Transparent international packages",
        paragraphs: [
          "International monthly packages start at THB 47,000 for Essential Care, THB 55,000 for Assisted Care, and THB 65,000 for Advanced Care. A dedicated private caregiver can be arranged for an additional THB 15,000 per month, subject to an agreed shift schedule and availability.",
          "Before deciding, families should compare both the monthly package and costs outside it: medication, supplies, transport, therapy, doctor visits, equipment, tests, interpreters, and immigration assistance.",
        ],
      },
    ],
    sources: [
      { label: "Evercare international care packages", url: "https://evercarenursinghome.com/international#packages" },
      { label: "AHRQ: Care transitions and discharge planning", url: "https://www.ahrq.gov/patient-safety/patients-families/engagingfamilies/strategy4/index.html" },
    ],
  },
  {
    slug: "why-bangkok-for-medical-treatment",
    title: "Why Choose Bangkok for Medical Treatment? A Guide for International Patients",
    seoTitle: "Why Choose Bangkok for Medical Treatment",
    description: "A balanced guide to choosing Bangkok for medical treatment, including specialist access, international-patient services, recovery planning, and questions to ask.",
    keywords: "medical treatment Bangkok, Bangkok hospital for foreigners, medical tourism Thailand, international patient Bangkok, treatment in Thailand",
    category: "Medical Travel",
    readTime: "9 min read",
    published: "2026-08-13",
    updated: "2026-08-13",
    intro: "Bangkok is a major medical centre with public, private, university, and specialist hospitals. The strongest reason to consider it is choice: patients can compare clinicians, facilities, treatment pathways, international services, and recovery arrangements in one city.",
    takeaways: [
      "Compare the individual surgeon and hospital—not Thailand as a single product.",
      "Ask for a written treatment plan and an itemised estimate before travel.",
      "Plan accommodation and daily support for the period after discharge.",
      "Keep a contingency budget for changes in treatment or recovery time.",
    ],
    sections: [
      {
        heading: "Concentration of hospitals and specialists",
        paragraphs: [
          "Bangkok offers large university hospitals, specialist institutes, and private hospitals with international-patient departments. This can make it easier to obtain consultations, diagnostic work, procedures, and follow-up within the same city.",
          "Accreditation can be one useful signal, but it is not a guarantee of outcome. Patients should also check the physician's qualifications, procedure volume, communication process, complication plan, and follow-up arrangements.",
        ],
      },
      {
        heading: "International-patient infrastructure",
        paragraphs: [
          "Many private hospitals in Bangkok are accustomed to overseas patients and may offer international coordinators, interpreters, remote record review, estimated treatment schedules, and help arranging hospital appointments.",
          "Confirm exactly what is included. Translation, airport transfer, medical transport, companion accommodation, and post-discharge nursing may be separate services.",
        ],
      },
      {
        heading: "Treatment is only one part of the journey",
        paragraphs: [
          "A realistic medical-travel plan includes the period before admission and the weeks after discharge. Ask where you will stay, who will assist with meals and bathing, how medication will be managed, how you will attend follow-up visits, and what happens if recovery takes longer than expected.",
          "For patients cleared to leave acute hospital care but not ready to manage independently, Evercare can provide private accommodation and assessed caregiver support in Bangkok.",
        ],
      },
      {
        heading: "Questions to ask before committing",
        paragraphs: ["Request answers in writing and share them with your doctor at home whenever possible."],
        bullets: [
          "What diagnosis and procedure are proposed, and what alternatives exist?",
          "Who will perform the procedure and where?",
          "What is included in the estimate and what can change the price?",
          "How long should you remain in Bangkok after discharge?",
          "Who manages complications, medication, dressings, and follow-up?",
          "Are you fit to fly, and when will the surgeon confirm this?",
        ],
      },
    ],
    sources: [
      { label: "Thailand Board of Investment: Medical hub overview", url: "https://www.boi.go.th/upload/content/BOI-brochure_medical_hub.pdf" },
      { label: "Thai e-Visa official website", url: "https://thaievisa.go.th/" },
    ],
  },
  {
    slug: "medical-treatment-visa-thailand-support",
    title: "Thailand Medical-Treatment Visa: Documents, Hospital Letters, and Support",
    seoTitle: "Thailand Medical Treatment Visa Support Guide",
    description: "Understand Thailand medical-treatment visa documentation, hospital appointment letters, financial evidence, companion considerations, and Evercare's coordination role.",
    keywords: "Thailand medical treatment visa, medical visa sponsor Thailand, medical visa support Bangkok, hospital appointment letter Thailand visa, visa for treatment Thailand",
    category: "Visa Guide",
    readTime: "8 min read",
    published: "2026-08-13",
    updated: "2026-08-13",
    intro: "International patients often use the phrase “visa sponsor,” but the official process is more specific. The treating hospital or medical centre normally provides a treatment appointment or acceptance letter, while the Thai embassy, consulate, or immigration authority decides the application.",
    takeaways: [
      "Evercare can coordinate accommodation and care information; it cannot guarantee a visa.",
      "A hospital or medical centre letter is commonly required for a medical-treatment application.",
      "Requirements differ by nationality, location, treatment length, and visa category.",
      "Use only current instructions from the Thai e-Visa system or the responsible embassy.",
    ],
    sections: [
      {
        heading: "Who provides which document?",
        paragraphs: [
          "The treating hospital or medical centre generally provides the appointment, treatment, or acceptance letter. The patient supplies passport, photograph, location evidence, financial documents, travel details, and any additional evidence requested by the responsible mission.",
          "Evercare can provide relevant accommodation or care information and coordinate communication when a resident plans to stay with us. We can also help the family organise the document checklist, but we are not the visa-issuing authority or a substitute for the treating hospital's medical letter.",
        ],
      },
      {
        heading: "Shorter and longer treatment visits",
        paragraphs: [
          "Thailand's official visa categories can distinguish treatment duration and purpose. Current consular checklists may refer to medical treatment under a tourist category for shorter stays and a Non-Immigrant O medical-treatment category for treatment longer than 60 days.",
          "Category names, evidence, fees, permitted stay, companion rules, and application location can change. Applicants should confirm the exact route shown in their Thai e-Visa account or by the Royal Thai Embassy or Consulate-General responsible for their current location.",
        ],
      },
      {
        heading: "A practical document checklist",
        paragraphs: ["The exact list is decided by the responsible authority, but patients commonly prepare:"],
        bullets: [
          "Passport biodata page and recent photograph",
          "Proof of current location and travel itinerary where requested",
          "Financial evidence covering treatment and living expenses",
          "Hospital or medical-centre appointment/acceptance letter",
          "Medical summary and proposed treatment schedule",
          "Relationship evidence for an accompanying family member where applicable",
          "Accommodation and post-discharge care information",
        ],
      },
      {
        heading: "Avoid promises of guaranteed approval",
        paragraphs: [
          "No care provider, hospital coordinator, travel agent, or consultant should promise that a visa will be granted. Thai authorities may request an interview or additional documents, and submission does not guarantee approval.",
          "Apply early, keep names and dates consistent across documents, and avoid purchasing inflexible travel arrangements until the appropriate approvals and clinical plan are confirmed.",
        ],
      },
    ],
    sources: [
      { label: "Official Thai e-Visa website", url: "https://thaievisa.go.th/" },
      { label: "Thailand MFA: Issuance of Visa", url: "https://www.mfa.go.th/en/publicservice/issuance-of-visa" },
      { label: "Thailand MFA: Non-Immigrant O medical treatment checklist", url: "https://image.mfa.go.th/mfa/0/RzaiZWKBzF/consular/Visa/15.Non-Immigrant_%28O%29_Medical_treatment_Visa.pdf" },
    ],
  },
  {
    slug: "nursing-home-vs-hospital-after-surgery",
    title: "Nursing Home vs Hospital After Surgery: Which Setting Fits Recovery?",
    seoTitle: "Nursing Home vs Hospital After Surgery in Bangkok",
    description: "Compare acute hospital care with step-down nursing home support after surgery, including safety, daily assistance, medication routines, and discharge planning.",
    keywords: "nursing home vs hospital after surgery, post surgery recovery Bangkok, step down care Thailand, recovery accommodation Bangkok",
    category: "Recovery Guide",
    readTime: "8 min read",
    published: "2026-08-13",
    updated: "2026-08-13",
    intro: "A hospital and a nursing home serve different purposes. The hospital is essential for surgery, unstable conditions, emergency response, and acute medical treatment. A nursing home may become appropriate only after the treating team confirms that hospital-level care is no longer needed.",
    takeaways: [
      "Do not choose a lower-intensity setting before the treating doctor approves discharge.",
      "A safe transfer requires written medication, wound, mobility, diet, and follow-up instructions.",
      "Nursing-home support focuses on daily routines and supervision, not acute hospital treatment.",
      "Confirm emergency escalation and transport arrangements before admission.",
    ],
    sections: [
      {
        heading: "When the hospital is the right place",
        paragraphs: [
          "Patients who are medically unstable, need continuous acute monitoring, require IV treatment or procedures beyond the receiving facility's scope, or show warning signs should remain under hospital care or return for urgent assessment.",
          "The surgeon or treating physician decides discharge readiness and restrictions. Price or comfort should never override clinical safety.",
        ],
      },
      {
        heading: "What a nursing home can add after discharge",
        paragraphs: [
          "For a clinically stable person, a nursing home can provide accommodation, meals, help with bathing and dressing, mobility assistance, medication support according to the prescribed schedule, safety monitoring, and coordination of follow-up transport.",
          "Compared with extending a hospital stay after acute treatment is complete, the setting may feel more residential and allow the resident to re-establish sleep, meals, movement, and personal routines. Suitability still depends on the person's assessed needs and the facility's service scope.",
        ],
      },
      {
        heading: "The discharge handover matters",
        paragraphs: [
          "AHRQ's discharge-planning guidance highlights medication review, warning signs, test results, daily-life expectations, and follow-up appointments. These details should be shared with the resident, family, and receiving care team in clear language.",
        ],
        bullets: [
          "Current medication list and exact timing",
          "Wound or dressing instructions and required supplies",
          "Mobility and weight-bearing restrictions",
          "Diet, fluid, and swallowing instructions",
          "Warning signs and who to contact",
          "Follow-up appointments and transport needs",
        ],
      },
      {
        heading: "Questions to ask Evercare before admission",
        paragraphs: [
          "Share the discharge summary before arrival. Ask which services are included, which require a third party, whether special equipment is available, how family updates will work, and what would trigger transfer back to hospital.",
        ],
      },
    ],
    sources: [
      { label: "AHRQ: IDEAL discharge planning", url: "https://www.ahrq.gov/patient-safety/patients-families/engagingfamilies/strategy4/index.html" },
      { label: "MedlinePlus: Leaving the hospital", url: "https://medlineplus.gov/ency/patientinstructions/000867.htm" },
      { label: "WHO: Rehabilitation", url: "https://www.who.int/news-room/questions-and-answers/item/rehabilitation" },
    ],
  },
  {
    slug: "why-have-surgery-in-thailand",
    title: "Why Have Surgery in Thailand? Benefits, Trade-Offs, and a Safer Checklist",
    seoTitle: "Why Have Surgery in Thailand: Patient Guide",
    description: "Explore potential benefits and trade-offs of surgery in Thailand, including hospital choice, specialist access, costs, travel, follow-up, and post-operative care.",
    keywords: "surgery in Thailand, medical tourism surgery Bangkok, surgery Thailand for foreigners, post operative care Thailand",
    category: "Medical Travel",
    readTime: "10 min read",
    published: "2026-08-13",
    updated: "2026-08-13",
    intro: "Thailand can be attractive for planned surgery because Bangkok has experienced private hospitals, specialist services, and international-patient coordination. The decision should still be based on the individual surgeon, hospital, procedure, health risks, and complete recovery plan—not destination marketing alone.",
    takeaways: [
      "Verify the surgeon, hospital, procedure, and follow-up plan individually.",
      "Compare a complete episode-of-care estimate, not only the advertised procedure price.",
      "Plan enough time in Thailand for review and clearance before flying.",
      "Arrange support for medication, movement, meals, hygiene, and appointments after discharge.",
    ],
    sections: [
      {
        heading: "Potential advantages",
        paragraphs: [
          "Bangkok gives patients access to a wide range of hospitals and specialties. International departments may streamline record review, estimates, interpreters, scheduling, and coordination across consultations and diagnostic tests.",
          "For some patients, treatment prices may compare favourably with private care in their home country. The meaningful comparison includes travel, companion costs, recovery accommodation, medicines, possible schedule changes, and follow-up—not only the operating-room fee.",
        ],
      },
      {
        heading: "Risks and trade-offs to plan for",
        paragraphs: [
          "All surgery carries risk. Medical travel adds long flights, unfamiliar systems, communication differences, limited access to the surgeon after returning home, and possible insurance exclusions.",
          "Ask the surgeon about complications, blood-clot prevention, infection warning signs, fit-to-fly timing, remote follow-up, and who will manage care if you have a problem after leaving Thailand.",
        ],
      },
      {
        heading: "A safer decision checklist",
        paragraphs: ["Before paying a deposit, request written answers to the following:"],
        bullets: [
          "Surgeon's qualifications and experience with the proposed procedure",
          "Hospital name, accreditation, and emergency capability",
          "Exact procedure, alternatives, expected outcome, and key risks",
          "Itemised estimate and circumstances that increase cost",
          "Expected hospital stay and recovery period in Bangkok",
          "Fit-to-fly guidance and thrombosis prevention",
          "Written discharge, medication, wound, and follow-up plan",
          "Insurance coverage for complications and overseas follow-up",
        ],
      },
      {
        heading: "Plan recovery before the operation",
        paragraphs: [
          "Recovery accommodation should be chosen before surgery, not on discharge day. Confirm accessibility, caregiver support, transport, meals, special equipment, therapy, wound supplies, and communication with the hospital.",
          "Evercare can assess whether its care packages are suitable after the treating doctor clears the patient for discharge. Hospital-level services remain at the hospital, while optional external services are quoted separately.",
        ],
      },
    ],
    sources: [
      { label: "Thailand Board of Investment: Medical hub overview", url: "https://www.boi.go.th/upload/content/BOI-brochure_medical_hub.pdf" },
      { label: "MedlinePlus: After surgery", url: "https://medlineplus.gov/aftersurgery.html" },
    ],
  },
  {
    slug: "hidden-costs-after-surgery-thailand",
    title: "Hidden Costs After Surgery in Thailand: A Complete Recovery Budget",
    seoTitle: "Hidden Costs After Surgery in Thailand",
    description: "Build a realistic post-surgery budget for Thailand, including medication, wound supplies, transport, therapy, equipment, companions, longer stays, and nursing care.",
    keywords: "hidden costs after surgery Thailand, post surgery costs Bangkok, medical tourism hidden fees, recovery care cost Thailand",
    category: "Cost Guide",
    readTime: "9 min read",
    published: "2026-08-13",
    updated: "2026-08-13",
    intro: "The quoted surgery price is rarely the full medical-travel budget. A better plan follows the entire journey: pre-operative tests, hospital treatment, discharge supplies, recovery accommodation, daily support, transport, follow-up, and the possibility of a longer stay.",
    takeaways: [
      "Request an itemised hospital estimate and list of exclusions.",
      "Budget for supplies, medication, transport, and assistance after discharge.",
      "Keep flexible funds for extra nights, tests, or delayed travel.",
      "Ask whether each cost is payable to the hospital, nursing home, or a third party.",
    ],
    sections: [
      {
        heading: "Hospital and clinical costs that can change",
        paragraphs: [
          "The final bill may change if the procedure becomes more complex, the patient stays longer, a specialist consultation is added, extra imaging or laboratory tests are needed, or complications require treatment.",
          "Ask whether the estimate includes surgeon, anaesthetist, operating room, implants, medicines, pathology, intensive care, room category, nursing, and routine follow-up.",
        ],
      },
      {
        heading: "Post-discharge supplies and support",
        paragraphs: ["Common recovery items outside an Evercare monthly package may include:"],
        bullets: [
          "Prescription medication and medical supplies",
          "Dressings and wound-care products",
          "Diapers, hygiene products, and feeding supplies",
          "Special nutrition or dietary products",
          "Equipment rental or purchase",
          "Physical therapy or specialist visits",
          "Laboratory tests, X-rays, and medical procedures",
          "Interpreter or personal hospital escort",
        ],
      },
      {
        heading: "Transport and time costs",
        paragraphs: [
          "Medical transport may include a vehicle, ambulance, tolls, parking, staff waiting time, wheelchair handling, or an escort. A delayed fit-to-fly date can also add accommodation, meals, visa, companion, and flight-change costs.",
          "At Evercare, indicative hospital transport starts from THB 1,500 per round trip and ambulance service from THB 2,500 per trip or provider quotation. Actual cost depends on distance, urgency, duration, and medical requirements.",
        ],
      },
      {
        heading: "Use three budget columns",
        paragraphs: [
          "Separate costs into confirmed, likely, and contingency. Confirmed costs have a written quotation. Likely costs include routine medicines, transport, and planned therapy. Contingency covers schedule changes, extra tests, equipment, or delayed travel.",
          "This approach makes it easier to compare providers and reduces the risk of choosing an apparently low package that excludes most of the recovery journey.",
        ],
      },
    ],
    sources: [
      { label: "Evercare packages and additional fees", url: "https://evercarenursinghome.com/international#costs" },
      { label: "MedlinePlus: After surgery", url: "https://medlineplus.gov/aftersurgery.html" },
    ],
  },
  {
    slug: "nursing-home-prices-thailand-international",
    title: "Nursing Home Prices in Thailand for International Residents",
    seoTitle: "Nursing Home Prices in Thailand for Foreigners",
    description: "Compare what affects nursing home prices in Thailand and review Evercare's international monthly packages, inclusions, private caregiver upgrade, and extra fees.",
    keywords: "nursing home Thailand price, nursing home Bangkok cost, elderly care Thailand cost, nursing home for foreigners price, Evercare packages",
    category: "Cost Guide",
    readTime: "8 min read",
    published: "2026-08-13",
    updated: "2026-08-13",
    intro: "Nursing home prices in Thailand vary because “care” can mean very different things: accommodation only, shared caregiver support, help with daily activities, dementia care, bedbound care, rehabilitation coordination, or a dedicated caregiver. A useful comparison starts with the resident's needs and a written list of inclusions.",
    takeaways: [
      "Evercare international packages range from THB 47,000 to THB 65,000 per month.",
      "A dedicated private caregiver upgrade is THB 15,000 per month.",
      "Medical, transport, therapy, equipment, supplies, and immigration costs are separate.",
      "Final package selection follows a pre-admission assessment.",
    ],
    sections: [
      {
        heading: "Evercare international package prices",
        paragraphs: [
          "Essential Care is THB 47,000 per month for residents who manage most activities but benefit from supervision or occasional assistance. Assisted Care is THB 55,000 for regular help with mobility and daily activities. Advanced Care is THB 65,000 for higher-support needs such as bedbound care, tube feeding, dementia, or palliative support.",
          "A dedicated private caregiver can be arranged for an additional THB 15,000 per month. Total monthly prices are THB 62,000, THB 70,000, and THB 80,000 respectively. The service follows an agreed shift schedule and is not continuous 24-hour service by one individual caregiver.",
        ],
      },
      {
        heading: "What every package includes",
        paragraphs: ["Every international package includes a private furnished room, shared caregiver service, 24-hour care-team availability, three meals, routine cleaning and laundry, appropriate activities, basic English communication, agreed family updates, and coordination with hospitals, doctors, and family."],
      },
      {
        heading: "What usually changes the price",
        paragraphs: ["The assessed care level is influenced by several practical factors:"],
        bullets: [
          "Mobility, transfer assistance, and fall risk",
          "Help required for eating, bathing, dressing, and toileting",
          "Cognitive impairment, dementia, or behavioural support",
          "Bedbound care, tube feeding, or palliative needs",
          "Frequency and complexity of medication support",
          "Need for dedicated rather than shared caregiver time",
          "Special equipment, supplies, therapy, or transport",
        ],
      },
      {
        heading: "How to compare nursing homes fairly",
        paragraphs: [
          "Ask every provider for the same information: room type, caregiver model, staffing hours, meals, laundry, family updates, medication support, emergency process, deposit, notice period, and a list of excluded services.",
          "A cheaper headline price may not be cheaper after adding a private room, high-support care, supplies, transport, and therapy. Compare the likely total monthly cost for the actual resident, not the lowest advertised tier.",
        ],
      },
    ],
    sources: [
      { label: "Evercare international package details", url: "https://evercarenursinghome.com/international#packages" },
    ],
  },
];

export const getInternationalArticle = (slug?: string) =>
  internationalArticles.find((article) => article.slug === slug);
