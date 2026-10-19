    const createModulePages = (modNumber, programKey = 'ag') => {
      const isAas = programKey === 'aas';

      const agSessionTitles = {
        1: {
          s1: "Session 1 - Introduction & Travel Anecdotes",
          s2: "Session 2 - Evolution of Transport",
          s3: "Session 3 - Overtourism",
          s4: "Session 4 - Sustainable and Eco-tourism"
        },
        2: {
          s1: "Session 1 - Extreme Weather & Atmospheric Hazards",
          s2: "Session 2 - Sustainable Cities & Low-Emission Mobility",
          s3: "Session 3 - Building & Supporting Environmental Arguments",
          s4: "Session 4 - Biodiversity in Urban Areas & Transport Hubs"
        },
        3: {
          s1: "Session 1 - Everyday AI & Workplace Automation",
          s2: "Session 2 - Future Mobility & Clean Energy Transport",
          s3: "Session 3 - Technology Ethics & Automated Decisions in AI",
          s4: "Session 4 - Biometrics, Digital IDs & Passenger Journey"
        }
      };

      const aasSessionTitles = {
        1: {
          s1: "Session 1 - Introduction & Aviation Survey",
          s2: "Session 2 - Passenger Journey & Airfield Movement",
          s3: "Session 3 - Ground Operations & Turnaround",
          s4: "Session 4 - Jobs in Aviation"
        },
        2: {
          s1: "Session 1 - Aerodynamics & Flight Principles",
          s2: "Session 2 - Aircraft Anatomy: Structure & Systems",
          s3: "Session 3 - Commercial Aircraft & Airlines",
          s4: "Session 4 - Significant Aviation Accidents & Aircraft Types"
        },
        3: {
          s1: "Session 1 - Health & Human Factors in Aviation",
          s2: "Session 2 - Meteorology & Severe Weather in Aviation",
          s3: "Session 3 - Aviation Safety vs. Security: Airport & Aircraft Checks",
          s4: "Session 4 - Global Semester Review & 3-Team Quiz"
        }
      };

      const titles = (isAas ? aasSessionTitles[modNumber] : agSessionTitles[modNumber]) || (isAas ? aasSessionTitles[1] : agSessionTitles[1]);

      const moduleImages = {
        1: {
          card1: isAas ? "images/aas_m1card1.jpg" : "images/ag_m1card1.jpg",
          card2: isAas ? "images/aas_m1card2.jpg" : "images/ag_m1card2.jpg",
          card3: isAas ? "images/aas_m1card3.jpg" : "images/ag_m1card3.jpg",
          card4: isAas ? "images/aas_m1card4.jpg" : "images/ag_m1card4.jpg",
          fe: "images/fe_progress_check.png",
          ddrs: isAas ? "images/ddrs_aas_mod1.jpg" : "images/ddrs_ag_mod1.jpg",
          admin: "images/course_admin.jpg"
        },
        2: {
          card1: isAas ? "images/aas_m2card1.jpg" : "images/ag_m2card1.jpg",
          card2: isAas ? "images/aas_m2card2.jpg" : "images/ag_m2card2.jpg",
          card3: isAas ? "images/aas_m2card3.jpg" : "images/ag_m2card3.jpg",
          card4: isAas ? "images/aas_m2card4.jpg" : "images/ag_m2card4.jpg",
          fe: "images/fe_progress_check.png",
          ddrs: isAas ? "images/ddrs_aas_mod2.jpg" : "images/ddrs_ag_mod2.jpg",
          admin: "images/course_admin.jpg"
        },
        3: {
          card1: isAas ? "images/aas_m3card1.jpg" : "images/ag_m3card1.jpg",
          card2: isAas ? "images/aas_m3card2.jpg" : "images/ag_m3card2.jpg",
          card3: isAas ? "images/aas_m3card3.jpg" : "images/ag_m3card3.jpg",
          card4: isAas ? "images/aas_m3card4.jpg" : "images/ag_m3card4.jpg",
          fe: "images/fe_progress_check.png",
          ddrs: isAas ? "images/ddrs_aas_mod3.jpg" : "images/ddrs_ag_mod3.jpg",
          admin: "images/course_admin.jpg"
        }
      };

      const images = moduleImages[modNumber] || moduleImages[1];

      const formativeEvaluationNotice = "All our work this module builds progressively toward your Formative Evaluation in Session 5. Review the vocabulary from the vocabulary section on this page before your evaluation, along with the TOEIC exercises and your personal portfolio.";

      const agDescriptions = {
        1: {
          s1: `Welcome to our module on Travel, Transport & Leisure! In our interactive sessions, we will focus on conversational fluency, vocabulary building, grammar in context, and TOEIC preparation.<br><br><em>Subject overview:</em> An introduction to travel and transport themes alongside personal travel anecdotes.<br><br>${formativeEvaluationNotice}`,
          s2: `Welcome back! Continuing our focus on Travel, Transport & Leisure, we explore how transportation has changed over time and its social and environmental impacts.<br><br><em>Subject overview:</em> Exploring how transport has changed over time, modern transit networks, and switching to greener ways to travel.<br><br>${formativeEvaluationNotice}`,
          s3: `Welcome to Session 3! In this class, we examine how popular destinations manage tourist flows, preserve local cultures, and protect natural sites.<br><br><em>Subject overview:</em> Looking at challenges caused by mass tourism, visitor limits for fragile sites, and ways to spread tourists to quieter areas.<br><br>${formativeEvaluationNotice}`,
          s4: `Welcome to Session 4! As we examine green tourism and travel alternatives, we continue practicing conversation, vocabulary, and TOEIC skills.<br><br><em>Subject overview:</em> Investigating sustainable practices, genuine eco-certifications, and community-based alternatives in modern travel.<br><br>${formativeEvaluationNotice}`
        },
        2: {
          s1: `Welcome to Module 2 on Weather & the Environment! In our interactive sessions, we focus on conversational practice, technical reading, and TOEIC strategies while discussing weather phenomena, climate risks, and travel disruptions.<br><br><em>Subject overview:</em> Severe weather events, atmospheric hazards, airport weather advisories, and Word Forms in context.<br><br>${formativeEvaluationNotice}`,
          s2: `Welcome to Session 2! Continuing our exploration of Weather & the Environment, we investigate how modern cities become more livable, green, and resilient.<br><br><em>Subject overview:</em> Sustainable cities, 15-minute neighborhood corridors, sponge city design, clean urban mobility, and Subject-Verb Agreement.<br><br>${formativeEvaluationNotice}`,
          s3: `Welcome to Session 3! In this class, we practice building and defending clear arguments, using empirical evidence, and expressing opinions persuasively in environmental policy debates.<br><br><em>Subject overview:</em> Structuring arguments & evidence, cautious language & polite disagreement, and Gerunds & Infinitives in decision-making.<br><br>${formativeEvaluationNotice}`,
          s4: `Welcome to Session 4! We examine how urban areas and major transport hubs protect local nature, restore biodiversity, and mitigate wildlife hazards.<br><br><em>Subject overview:</em> Urban tree canopies, constructed wetlands, wildlife corridors, aerodrome bird strike mitigation, and Pronouns & Determiners.<br><br>${formativeEvaluationNotice}`
        },
        3: {
          s1: `Welcome to Module 3 on New Technology! In our interactive sessions, we focus on conversational fluency, technical reading, and TOEIC preparation while exploring how artificial intelligence and machine learning transform workplaces and flight operations.<br><br><em>Subject overview:</em> Everyday AI tools, machine learning pipelines, predictive fleet maintenance, Human-in-the-Loop oversight, and Active vs. Passive Voice in technical descriptions.<br><br>${formativeEvaluationNotice}`,
          s2: `Welcome to Session 2! We explore how emerging propulsion concepts and clean mobility corridors will reshape transport networks by 2035 and beyond.<br><br><em>Subject overview:</em> Hydrogen aircraft propulsion, battery-electric commuter flight, urban air mobility (eVTOL) vertiports, and Future Forms with Predictive Certainty.<br><br>${formativeEvaluationNotice}`,
          s3: `Welcome to Session 3! We practice professional debate, critical thinking, and polite disagreement on real-world technology governance and ethical quandaries.<br><br><em>Subject overview:</em> Algorithmic bias, explainable AI (XAI), digital surveillance vs. civil liberties, EU AI Act compliance, and Cautious Language & Polite Disagreement.<br><br>${formativeEvaluationNotice}`,
          s4: `Welcome to Session 4! We examine contactless travel, digital credentials, and biometric sovereignty across international border control.<br><br><em>Subject overview:</em> Contactless e-gates, IATA One ID, cybersecurity vulnerabilities, biometric hash encryption, and Relative Clauses with Complex Noun Phrases.<br><br>${formativeEvaluationNotice}`
        }
      };

      const aasDescriptions = {
        1: {
          s1: `Welcome to Technical English Module 1 on Aerodromes! In this opening session, we explore airport operations, aviation security, commercial airline models, and environmental challenges while practicing discussion fluency and technical vocabulary.<br><br><em>Subject overview:</em> In-class survey interviews discussing key aviation themes: alcohol on board, armed pilots and air marshals, low-cost carrier economics, noise abatement, future propulsion, space tourism, airport security, and flight delay passenger rights.<br><br>${formativeEvaluationNotice}`,
          s2: `Welcome to Session 2! We explore the passenger's journey through the airport—from landside check-in, security screening, and duty-free retail to the departure gate—as well as airside movement areas including aprons, taxiways, ground markings, and runway numbering.<br><br><em>Subject overview:</em> Passenger terminal flow, security checkpoints, airside apron operations, pushback tugs, taxiway guidance markings, and runway magnetic designators.<br><br>${formativeEvaluationNotice}`,
          s3: `Welcome to Session 3! In this class, we analyze ground handling workflows, baggage logistics, refueling protocols, and gate turnaround optimization.<br><br><em>Subject overview:</em> Ramp safety, ground support equipment (GSE), slot allocation, and minimizing turnaround time.<br><br>${formativeEvaluationNotice}`,
          s4: `Welcome to Session 4! We examine aviation operational careers across landside, airside, flight operations, air traffic services, and civil aviation administration.<br><br><em>Subject overview:</em> Professional roles and jurisdictions: Passenger Service Agents, Ramp Coordinators, Flight Crew, ATCOs (Tower, Approach, En-Route), and TSEEAC functions (AFISO, aerodrome operations coordination, DGAC safety oversight). Expressing duties, authority, and handoff procedures.<br><br>${formativeEvaluationNotice}`
        },
        2: {
          s1: `Welcome to Module 2 on Aircraft and Aerodynamics! In this opening session, we explore the four fundamental forces of flight, aircraft control axes, and wing airflow dynamics while developing spoken fluency and cause-and-effect structures.<br><br><em>Subject overview:</em> Lift, weight, thrust, and drag in equilibrium; pitch, roll, and yaw control surfaces; angle of attack, boundary layer separation, and stall recovery procedures.<br><br>${formativeEvaluationNotice}`,
          s2: `Welcome to Session 2! We examine the external airframe and internal layout of modern commercial aircraft, practicing accurate spatial descriptions, functional explanations, and exterior pre-flight walkaround defect reporting.<br><br><em>Subject overview:</em> Fuselage, empennage, leading-edge slats, trailing-edge flaps, spoilers, landing gear, radome, pitot-static probes, flight deck controls, cabin amenities, and walkaround inspection dialogues.<br><br>${formativeEvaluationNotice}`,
          s3: `Welcome to Session 3! In this class, we analyze commercial aircraft classifications, fleet economics, global aerospace manufacturers, and airline business models.<br><br><em>Subject overview:</em> Regional turboprops, single-aisle narrowbodies, twin-aisle widebodies, freighters, Airbus vs. Boeing duopoly competition, airline fleet planning, and operational route cost comparisons.<br><br>${formativeEvaluationNotice}`,
          s4: `Welcome to Session 4! We investigate landmark aviation accidents throughout history, analyzing the aircraft types involved, mechanical versus human contributing factors, and permanent safety evolutions.<br><br><em>Subject overview:</em> Accident investigation methodology (CVR/FDR, BEA, NTSB), past narrative tenses, and an in-class 15-minute quick-fire group research sprint analyzing landmark case studies followed by spoken safety presentations.<br><br>${formativeEvaluationNotice}`
        },
        3: {
          s1: `Welcome to Module 3 on Health, Meteorology, Safety & Security! In this opening session, we explore in-flight medical emergencies, physiological challenges of flight, and human factors impacting pilots and air traffic controllers.<br><br><em>Subject overview:</em> Cardiac arrest &amp; AED protocols, panic attacks, hyperventilation, claustrophobia, airsickness, hypoxia, pilot and ATCO fatigue, Flight Time Limitations (FTL), circadian disruption, and the IMSAFE checklist.<br><br>${formativeEvaluationNotice}`,
          s2: `Welcome to Session 2! We examine aviation meteorology, severe atmospheric hazards, and their operational consequences on commercial flight dispatch, en-route navigation, and terminal approaches.<br><br><em>Subject overview:</em> Microbursts, low-level windshear, severe convective turbulence, cumulonimbus (CB) cells, structural and pitot icing, volcanic ash encounters, low visibility procedures (CAT I/II/III), and landmark weather case studies (Delta 191 &amp; BA 009).<br><br>${formativeEvaluationNotice}`,
          s3: `Welcome to Session 3! In this class, we analyze the critical conceptual and operational distinction between Aviation Safety (preventing unintended hazards) and Aviation Security (preventing intentional unlawful acts).<br><br><em>Subject overview:</em> Airport security architecture (landside/airside, passenger millimeter-wave screening, hold baggage CT/EDS, biometric e-gates) and aircraft technical safety checks (pre-flight walkaround, gear pins, pitot covers, Minimum Equipment List, and maintenance checks).<br><br>${formativeEvaluationNotice}`,
          s4: `Welcome to Session 4! We conclude Semester 1 with a high-energy Global Review and interactive 3-Team Aviation Grand Prix Quiz covering Aerodromes, Aircraft Systems, Human Factors, Meteorology, and Safety & Security.<br><br><em>Subject overview:</em> Multi-round competitive review quiz (Team Alpha, Team Bravo, Team Charlie), rapid-fire technical challenges, pronunciation consolidation, and workshop rehearsal for the Session 5 Formative Evaluation 3.<br><br>${formativeEvaluationNotice}`
        }
      };

      const desc = (isAas ? aasDescriptions[modNumber] : agDescriptions[modNumber]) || (isAas ? aasDescriptions[1] : agDescriptions[1]);

      const s1AdditionalMaterialsUrl = isAas ? (modNumber === 1 ? "session1/admat_aas1.html" : "session1/admat_aas2.html") : `session1/admat${modNumber}.html`;
      const s1ClassReviewUrl = isAas ? (modNumber === 1 ? "session1/rev_aas1.html" : "session1/rev_aas2.html") : `session1/rev${modNumber}.html`;
      const s2AdditionalMaterialsUrl = isAas ? (modNumber === 1 ? "session2/admat_aas1.html" : "session2/admat_aas2.html") : `session2/admat${modNumber}.html`;
      const s2ClassReviewUrl = isAas ? (modNumber === 1 ? "session2/rev_aas1.html" : "session2/rev_aas2.html") : `session2/rev${modNumber}.html`;
      const s3AdditionalMaterialsUrl = isAas ? (modNumber === 1 ? "session3/admat_aas1.html" : "session3/admat_aas2.html") : `session3/admat${modNumber}.html`;
      const s3ClassReviewUrl = isAas ? (modNumber === 1 ? "session3/rev_aas1.html" : "session3/rev_aas2.html") : `session3/rev${modNumber}.html`;
      const s4AdditionalMaterialsUrl = isAas ? (modNumber === 1 ? "session4/admat_aas1.html" : "session4/admat_aas2.html") : `session4/admat${modNumber}.html`;
      const s4ClassReviewUrl = isAas ? (modNumber === 1 ? "session4/rev_aas1.html" : "session4/rev_aas2.html") : `session4/rev${modNumber}.html`;
      const s5GuidelinesUrl = isAas ? (modNumber === 1 ? "session5/guidelines_aas1.html" : "session5/guidelines_aas2.html") : `session5/guidelines${modNumber}.html`;
      const s5ObjectivesUrl = isAas ? (modNumber === 1 ? "session5/obj_aas1.html" : "session5/obj_aas2.html") : `session5/obj${modNumber}.html`;
      const s5CriteriaUrl = isAas ? (modNumber === 1 ? "session5/criteria_aas1.html" : "session5/criteria_aas2.html") : `session5/criteria${modNumber}.html`;
      const pages = [
        {
          tag: `Module ${modNumber} • Session 1`,
          title: titles.s1,
          description: desc.s1,
          url: s1AdditionalMaterialsUrl,
          additionalMaterialsUrl: s1AdditionalMaterialsUrl,
          lessonPlanUrl: `session1/plan${modNumber}.html`,
          objectivesUrl: `session1/obj${modNumber}.html`,
          classReviewUrl: s1ClassReviewUrl,
          imageUrl: images.card1
        },
        {
          tag: `Module ${modNumber} • Session 2`,
          title: titles.s2,
          description: desc.s2,
          url: s2AdditionalMaterialsUrl,
          additionalMaterialsUrl: s2AdditionalMaterialsUrl,
          lessonPlanUrl: `session2/plan${modNumber}.html`,
          objectivesUrl: `session2/obj${modNumber}.html`,
          classReviewUrl: s2ClassReviewUrl,
          imageUrl: images.card2
        },
        {
          tag: `Module ${modNumber} • Session 3`,
          title: titles.s3,
          description: desc.s3,
          url: s3AdditionalMaterialsUrl,
          additionalMaterialsUrl: s3AdditionalMaterialsUrl,
          lessonPlanUrl: `session3/plan${modNumber}.html`,
          objectivesUrl: `session3/obj${modNumber}.html`,
          classReviewUrl: s3ClassReviewUrl,
          imageUrl: images.card3
        },
        {
          tag: `Module ${modNumber} • Session 4`,
          title: titles.s4,
          description: desc.s4,
          url: s4AdditionalMaterialsUrl,
          additionalMaterialsUrl: s4AdditionalMaterialsUrl,
          lessonPlanUrl: `session4/plan${modNumber}.html`,
          objectivesUrl: `session4/obj${modNumber}.html`,
          classReviewUrl: s4ClassReviewUrl,
          imageUrl: images.card4
        },
        {
          tag: `Module ${modNumber} • Session 5`,
          title: "Session 5 - Formative Evaluation",
          description: isAas 
            ? (modNumber === 1
                ? `Welcome to Session 5! In this Formative Evaluation, you and your partner will present a detailed technical airport profile.<br><br><em>Subject overview:</em> Formative Evaluation 1 — Airports: Technical infrastructure, operational constraints, aerodrome hot spots, and incident/accident analysis.<br><br>All work in this session contributes directly toward your Formative Evaluation.`
                : (modNumber === 2
                    ? `Welcome to Session 5! In this Formative Evaluation, you and your partner will present a comprehensive technical profile of an aircraft or an airline of your choice.<br><br><em>Subject overview:</em> Formative Evaluation 2 — Aircraft / Airlines: Technical specifications, operational metrics, historical milestones, and safety analysis.<br><br>All work in this session contributes directly toward your Formative Evaluation.`
                    : `Welcome to Session 5! Throughout this module, we have worked on aerodrome operations, technical discussions, DDRS, and TOEIC preparation.<br><br><em>Subject overview:</em> Formative Evaluation — Airport operations assessment and technical oral interview.<br><br>All work in this session contributes directly toward your Formative Evaluation.`))
            : (modNumber === 1
                ? "Welcome to Session 5! Throughout this module, we have worked on discussion, grammar correction, DDRS, and TOEIC-related exercises.<br><br><em>Subject overview:</em> Formative Evaluation 1 — Design an eco-friendly holiday itinerary or compare two cities with different tourism policies + Targets.<br><br>All work in this session contributes directly toward your Formative Evaluation."
                : (modNumber === 2
                    ? "Welcome to Session 5! In this Formative Evaluation, you and your partner will present a comprehensive climate resilience masterplan for an airport or city of your choice.<br><br><em>Subject overview:</em> Formative Evaluation 2 — Climate Resilience: Redesign an airport or city for climate resilience. Cover climate hazard assessments, physical engineering adaptations, nature-based solutions (DDRS), and operational contingencies.<br><br>All work in this session contributes directly toward your Formative Evaluation."
                    : "Welcome to Session 5! In this Formative Evaluation, you and your partner will present an in-depth technical analysis and critical evaluation of an emerging aviation or non-aviation technology.<br><br><em>Subject overview:</em> Formative Evaluation 3 — Emerging Technology: Presentation on an emerging aviation or non-aviation related technology. Address technical architecture, quantitative efficiency gains, DDRS & ethical challenges, and deployment roadmaps.<br><br>All work in this session contributes directly toward your Formative Evaluation.")),
          url: s5CriteriaUrl,
          lessonPlanUrl: s5GuidelinesUrl,
          objectivesUrl: s5ObjectivesUrl,
          imageUrl: images.fe
        },
        {
          tag: `Module ${modNumber} • Focus`,
          title: isAas 
            ? (modNumber === 1 ? "DDRS - Aerodrome Environmental & Social Framework" : modNumber === 2 ? "DDRS - Aircraft Decarbonization & Eco-Design" : "DDRS - Safety Culture & Ethical Operations")
            : (modNumber === 1 ? "DDRS - Sustainable Mobility & Tourism Framework" : modNumber === 2 ? "DDRS - Climate Resilience & Ecological Transition" : "DDRS - Responsible Innovation & Tech Ethics"),
          description: isAas
            ? "<strong>Definition:</strong> DDRS (Sustainable Development & Social Responsibility) in aviation represents sustainable aerodrome operations, emissions reduction, noise mitigation, and ethical workforce standards.<br><br><strong>Key areas covered:</strong> Airport decarbonization, green taxiing, SAF distribution infrastructure, and community acoustic protection.<br><br><strong>Why we discuss DDRS in English:</strong> Communicating airport sustainability initiatives in international English prepares aerospace professionals for global regulatory compliance and industry leadership."
            : (modNumber === 2
                ? "<strong>Definition:</strong> DDRS in climate resilience focuses on adapting infrastructure, protecting vulnerable communities, and driving the ecological transition of cities and transport networks.<br><br><strong>Key areas covered:</strong> Sponge city design, urban heat island mitigation, renewable energy microgrids, and biodiversity net gain.<br><br><strong>Why we discuss DDRS in English:</strong> Articulating climate adaptation and environmental engineering in international English prepares engineers to present projects to global stakeholders and international bodies."
                : modNumber === 3
                    ? "<strong>Definition:</strong> DDRS (Sustainable Development & Social Responsibility) in emerging technology balances technological acceleration with algorithmic fairness, environmental lifecycle impacts, and human dignity.<br><br><strong>Key areas covered:</strong> Compute carbon footprints, explainable AI (XAI), data privacy sovereignty, and social inclusion under the EU AI Act.<br><br><strong>Why we discuss DDRS in English:</strong> Articulating tech ethics, regulatory compliance, and responsible innovation in international English prepares aerospace professionals to lead global technology governance."
                    : "<strong>Definition:</strong> DDRS (Sustainable Development & Social Responsibility) is the framework linking environmental protection, social fairness, and ethical decision-making in modern organizations.<br><br><strong>Key areas covered:</strong> Reducing carbon footprints, community wellbeing and inclusion, and responsible innovation.<br><br><strong>Why we discuss DDRS in English:</strong> Discussing DDRS topics builds the vocabulary, critical thinking, and communication skills you need to talk about global environmental and social challenges in professional English."),
          detailsUrl: isAas ? "" : `ddrs${modNumber}.html`,
          imageUrl: images.ddrs,
          isMuted: isAas
        },
        {
          tag: "GSEA26A • Course Admin",
          title: "Course Admin",
          description: "Welcome to the GSEA26A Course Administration Hub. Access your official class groups (Group A & Group B), teacher assignments, weekly schedules, and dynamic 30-minute Formative Evaluation tutorial rotas.<br><br><em>Subject overview:</em> Weekly classes run Wednesdays (13h15–15h15) for Aeronautical English (LV121E) and Fridays (08h00–10h00) for General English (LV101E).<br><br>Consult your designated FE timeslots ahead of FE1 and FE2. Arrive 5 minutes before your slot with your presentation supports and updated learning portfolio ready.",
          isAdmin: true,
          adminUrl: "admin.html",
          imageUrl: images.admin
        },
        {
          tag: isAas ? "Aeronautical English • Course Syllabus" : "General English • Course Syllabus",
          title: "Semester Objectives",
          description: "Here you can find the complete objectives for the full semester 2.<br><br><em>Subject overview:</em> Comprehensive pedagogical roadmap, learning outcomes, and assessment benchmarks for GSEA Semester 2.<br><br>Consult the full bilingual syllabus (English & French) covering continuous assessment, professional development, technical communication, and evaluation criteria.",
          isObjectives: true,
          imageUrl: "images/semester_objectives.png"
        }
      ];

      if (!isAas && modNumber === 2) {
        pages.push({
          tag: "General English • S2 Milestone",
          title: "English Immersion (End of S2)",
          description: "At the end of Semester 2, GSEA students participate in an intensive 4-week English immersion program in an English-speaking destination: Cork, Dublin, Manchester, Leeds, Liverpool, or Shoreham.<br><br><em>Academic & cultural goals:</em> Enhance daily conversational fluency and complete intensive TOEIC preparation for Semester 3. Students attend morning and afternoon language school sessions, cultural excursions, and aviation-specific visits (airport, aerospace company, or museum, subject to availability).<br><br><em>Accommodation:</em> Homestay with vetted local host families (strictly 1 ENAC student per host family) for 100% linguistic immersion.",
          isImmersion: true,
          immersionUrl: "immersion.html",
          imageUrl: "images/immersion_card.jpg"
        });
      }

      return pages;
    };

    const MODULE_THEMES = {
      1: {
        primary: "#1e293b", // Deep Transit Slate (Travel, Transport & Leisure)
        primaryDark: "#0f172a",
        primaryDarker: "#090d16",
        accent: "#ea580c", // Vibrant Sunset Coral / Warm Terracotta
        accentDark: "#c2410c",
        accentDarker: "#9a3412",
        highlight: "#ffedd5", // Warm Apricot Glow
        worksheet: "#1e293b",
        worksheetDark: "#0f172a",
        activeMenuBg: "rgba(234, 88, 12, 0.12)",
        activeMenuText: "#c2410c",
        activeMenuBorder: "#ea580c"
      },
      2: {
        primary: "#1b382b", // Deep Evergreen Forest (Weather & Environment)
        primaryDark: "#12241c",
        primaryDarker: "#0a1510",
        accent: "#10b981", // Sustainable Living Emerald
        accentDark: "#059669",
        accentDarker: "#047857",
        highlight: "#d1fae5",
        worksheet: "#1b382b",
        worksheetDark: "#12241c",
        activeMenuBg: "rgba(16, 185, 129, 0.12)",
        activeMenuText: "#059669",
        activeMenuBorder: "#10b981"
      },
      3: {
        primary: "#1a2238", // Deep Quantum Indigo (New Technology)
        primaryDark: "#121727",
        primaryDarker: "#0a0e19",
        accent: "#3b82f6", // Silicon Cobalt / Digital Blue
        accentDark: "#2563eb",
        accentDarker: "#1d4ed8",
        highlight: "#e0e7ff",
        worksheet: "#1a2238",
        worksheetDark: "#121727",
        activeMenuBg: "rgba(59, 130, 246, 0.12)",
        activeMenuText: "#2563eb",
        activeMenuBorder: "#3b82f6"
      }
    };

    const AAS_MODULE_THEMES = {
      1: {
        primary: "#152438", // Deep Midnight Navy (Aerodrome Apron at Dusk)
        primaryDark: "#0d1724",
        primaryDarker: "#070c14",
        accent: "#d97706", // Runway Amber / Beacon Gold
        accentDark: "#b45309",
        accentDarker: "#92400e",
        highlight: "#fef3c7",
        worksheet: "#152438",
        worksheetDark: "#0d1724",
        activeMenuBg: "rgba(217, 119, 6, 0.12)",
        activeMenuText: "#d97706",
        activeMenuBorder: "#d97706"
      },
      2: {
        primary: "#182b42", // Stratosphere Blue (Flight Physics & Cruising)
        primaryDark: "#101f31",
        primaryDarker: "#0a1420",
        accent: "#0284c7", // Aero Horizon Cyan
        accentDark: "#0369a1",
        accentDarker: "#075985",
        highlight: "#e0f2fe",
        worksheet: "#182b42",
        worksheetDark: "#101f31",
        activeMenuBg: "rgba(2, 132, 199, 0.12)",
        activeMenuText: "#0284c7",
        activeMenuBorder: "#0284c7"
      },
      3: {
        primary: "#1a2332", // Stealth Cockpit Charcoal (Safety & Crisis Management)
        primaryDark: "#121924",
        primaryDarker: "#0b1018",
        accent: "#0f766e", // Aviation System Teal / Safe Status
        accentDark: "#115e59",
        accentDarker: "#134e4a",
        highlight: "#ccfbf1",
        worksheet: "#1a2332",
        worksheetDark: "#121924",
        activeMenuBg: "rgba(15, 118, 110, 0.12)",
        activeMenuText: "#0f766e",
        activeMenuBorder: "#0f766e"
      }
    };

    const PROGRAMS_CONFIG = {
      ag: {
        id: "ag",
        code: "AG",
        name: "General English",
        footerDesc: "GSEA Semester 2 General English (AG) • Phil PARRIS (LH/LAN) • v1.0.0",
        modules: [
          {
            id: 1,
            name: "Module 1",
            subtitle: "Travel, Transport & Leisure",
            supertitle: "GSEA AG SEMESTER 2 - MODULE 1: TRAVEL, TRANSPORT & LEISURE",
            ...MODULE_THEMES[1],
            pages: createModulePages(1, 'ag')
          },
          {
            id: 2,
            name: "Module 2",
            subtitle: "Weather & the Environment",
            supertitle: "GSEA AG SEMESTER 2 - MODULE 2: WEATHER & THE ENVIRONMENT",
            ...MODULE_THEMES[2],
            pages: createModulePages(2, 'ag')
          }
        ]
      },
      aas: {
        id: "aas",
        code: "AAS",
        name: "Aeronautical English",
        footerDesc: "GSEA Semester 2 Aeronautical English (AAS) • Phil PARRIS (LH/LAN) • v1.0.0",
        modules: [
          {
            id: 1,
            name: "Module 1",
            subtitle: "Aerodrome",
            supertitle: "GSEA AAS SEMESTER 2 - MODULE 1: AERODROME",
            ...AAS_MODULE_THEMES[1],
            pages: createModulePages(1, 'aas')
          },
          {
            id: 2,
            name: "Module 2",
            subtitle: "Aircraft and Aerodynamics",
            supertitle: "GSEA AAS SEMESTER 2 - MODULE 2: AIRCRAFT & AERODYNAMICS",
            ...AAS_MODULE_THEMES[2],
            pages: createModulePages(2, 'aas')
          }
        ]
      }
    };

    let currentProgram = 'ag';
    let modulesData = PROGRAMS_CONFIG[currentProgram].modules;
    let currentModuleIndex = 0;
    let currentIndex = 0;

