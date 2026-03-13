export type Stream = "engineering" | "medical" | "arts"

export type CutoffScale = "engineering200" | "percent100"

export type CollegeRecommendation = {
  id: string
  stream: Stream
  course: string
  collegeName: string
  location: string
  /** Minimum score required on the stream's scoring scale */
  minScore: number
  scale: CutoffScale
  entrance: string
  approxAnnualFeeINR: string
  highlights: string[]
  website?: string
}

export const cutoffScalesByStream: Record<Stream, CutoffScale> = {
  engineering: "engineering200",
  medical: "percent100",
  arts: "percent100",
}

export const recommendations: CollegeRecommendation[] = [
  // Engineering (score out of 200)
  {
    id: "eng-iitm-cse",
    stream: "engineering",
    scale: "engineering200",
    minScore: 195,
    course: "B.Tech Computer Science & Engineering",
    collegeName: "IIT Madras",
    location: "Chennai, Tamil Nadu",
    entrance: "JEE Advanced (IIT admissions)",
    approxAnnualFeeINR: "₹2.3L (approx.)",
    highlights: ["Top IIT", "Strong placements", "Excellent research ecosystem"],
    website: "https://www.iitm.ac.in/",
  },
  {
    id: "eng-iitb-ece",
    stream: "engineering",
    scale: "engineering200",
    minScore: 194,
    course: "B.Tech Electrical Engineering / ECE (varies by IIT)",
    collegeName: "IIT Bombay",
    location: "Mumbai, Maharashtra",
    entrance: "JEE Advanced (IIT admissions)",
    approxAnnualFeeINR: "₹2.3L (approx.)",
    highlights: ["Top IIT", "Excellent core opportunities", "Strong placements"],
    website: "https://www.iitb.ac.in/",
  },
  {
    id: "eng-iitd-me",
    stream: "engineering",
    scale: "engineering200",
    minScore: 190,
    course: "B.Tech Mechanical Engineering",
    collegeName: "IIT Delhi",
    location: "New Delhi",
    entrance: "JEE Advanced (IIT admissions)",
    approxAnnualFeeINR: "₹2.3L (approx.)",
    highlights: ["Top IIT", "Strong core and research", "Great industry network"],
    website: "https://home.iitd.ac.in/",
  },
  {
    id: "eng-nitt-cse",
    stream: "engineering",
    scale: "engineering200",
    minScore: 188,
    course: "B.Tech Computer Science & Engineering",
    collegeName: "NIT Tiruchirappalli",
    location: "Tiruchirappalli, Tamil Nadu",
    entrance: "JEE Main (NIT admissions)",
    approxAnnualFeeINR: "₹1.8L (approx.)",
    highlights: ["Top NIT", "Strong core + IT placements", "Good campus life"],
    website: "https://www.nitt.edu/",
  },
  {
    id: "eng-nitk-ece",
    stream: "engineering",
    scale: "engineering200",
    minScore: 184,
    course: "B.Tech Electronics & Communication Engineering",
    collegeName: "NIT Karnataka (Surathkal)",
    location: "Mangaluru, Karnataka",
    entrance: "JEE Main (NIT admissions)",
    approxAnnualFeeINR: "₹1.8L (approx.)",
    highlights: ["Top NIT", "Good ECE + IT opportunities", "Strong academics"],
    website: "https://www.nitk.ac.in/",
  },
  {
    id: "eng-bits-cse",
    stream: "engineering",
    scale: "engineering200",
    minScore: 182,
    course: "B.E. Computer Science",
    collegeName: "BITS Pilani (Pilani Campus)",
    location: "Pilani, Rajasthan",
    entrance: "BITSAT",
    approxAnnualFeeINR: "₹5.5L+ (approx.)",
    highlights: ["No reservation (BITS policy)", "Excellent alumni network", "Strong placements"],
    website: "https://www.bits-pilani.ac.in/",
  },
  {
    id: "eng-bits-ece",
    stream: "engineering",
    scale: "engineering200",
    minScore: 176,
    course: "B.E. Electronics & Communication",
    collegeName: "BITS Pilani (Pilani Campus)",
    location: "Pilani, Rajasthan",
    entrance: "BITSAT",
    approxAnnualFeeINR: "₹5.5L+ (approx.)",
    highlights: ["Strong ECE program", "Good placements", "Great alumni network"],
    website: "https://www.bits-pilani.ac.in/",
  },
  {
    id: "eng-vit-cse",
    stream: "engineering",
    scale: "engineering200",
    minScore: 165,
    course: "B.Tech Computer Science & Engineering",
    collegeName: "VIT Vellore",
    location: "Vellore, Tamil Nadu",
    entrance: "VITEEE",
    approxAnnualFeeINR: "₹2.0L–₹4.0L (approx.)",
    highlights: ["Large course selection", "Good placements", "Industry exposure"],
    website: "https://vit.ac.in/",
  },
  {
    id: "eng-manipal-cse",
    stream: "engineering",
    scale: "engineering200",
    minScore: 160,
    course: "B.Tech Computer Science & Engineering",
    collegeName: "Manipal Institute of Technology",
    location: "Manipal, Karnataka",
    entrance: "MET (Manipal Entrance Test)",
    approxAnnualFeeINR: "₹3.0L–₹4.5L (approx.)",
    highlights: ["Strong campus life", "Good placements", "Industry-aligned curriculum"],
    website: "https://manipal.edu/mit.html",
  },
  {
    id: "eng-thapar-cse",
    stream: "engineering",
    scale: "engineering200",
    minScore: 158,
    course: "B.E. / B.Tech Computer Engineering",
    collegeName: "Thapar Institute of Engineering & Technology",
    location: "Patiala, Punjab",
    entrance: "JEE Main / institute process",
    approxAnnualFeeINR: "₹3.5L+ (approx.)",
    highlights: ["Strong brand", "Good placements", "Good peer group"],
    website: "https://www.thapar.edu/",
  },
  {
    id: "eng-srm-cse",
    stream: "engineering",
    scale: "engineering200",
    minScore: 150,
    course: "B.Tech Computer Science & Engineering",
    collegeName: "SRM Institute of Science and Technology",
    location: "Chennai, Tamil Nadu",
    entrance: "SRMJEEE",
    approxAnnualFeeINR: "₹2.5L–₹4.5L (approx.)",
    highlights: ["Good campus infra", "Active student clubs", "Multiple specializations"],
    website: "https://www.srmist.edu.in/",
  },
  {
    id: "eng-anna-ceg",
    stream: "engineering",
    scale: "engineering200",
    minScore: 175,
    course: "B.E. / B.Tech (CSE/ECE/EEE and others)",
    collegeName: "College of Engineering, Guindy (Anna University)",
    location: "Chennai, Tamil Nadu",
    entrance: "TNEA (Tamil Nadu counselling)",
    approxAnnualFeeINR: "₹50k–₹1.0L (approx.)",
    highlights: ["Top state govt college", "Strong alumni", "Excellent ROI"],
    website: "https://ceg.annauniv.edu/",
  },
  {
    id: "eng-psg-ece",
    stream: "engineering",
    scale: "engineering200",
    minScore: 168,
    course: "B.E. Electronics & Communication Engineering",
    collegeName: "PSG College of Technology",
    location: "Coimbatore, Tamil Nadu",
    entrance: "TNEA / institute process (varies)",
    approxAnnualFeeINR: "₹1.5L–₹2.5L (approx.)",
    highlights: ["Excellent placements", "Strong industry connect", "Good campus"],
    website: "https://www.psgtech.edu/",
  },
  {
    id: "eng-cit-mech",
    stream: "engineering",
    scale: "engineering200",
    minScore: 155,
    course: "B.E. Mechanical Engineering",
    collegeName: "Coimbatore Institute of Technology (CIT)",
    location: "Coimbatore, Tamil Nadu",
    entrance: "TNEA (Tamil Nadu counselling)",
    approxAnnualFeeINR: "₹60k–₹1.2L (approx.)",
    highlights: ["Reputed govt-aided college", "Strong mechanical core", "Good placements"],
    website: "https://www.cit.edu.in/",
  },
  {
    id: "eng-ssn-cse",
    stream: "engineering",
    scale: "engineering200",
    minScore: 162,
    course: "B.E. Computer Science & Engineering",
    collegeName: "SSN College of Engineering",
    location: "Chennai, Tamil Nadu",
    entrance: "TNEA / institute process",
    approxAnnualFeeINR: "₹2.0L (approx.)",
    highlights: ["Strong placements", "Good academics", "Active coding culture"],
    website: "https://www.ssn.edu.in/",
  },
  {
    id: "eng-sastra-cse",
    stream: "engineering",
    scale: "engineering200",
    minScore: 148,
    course: "B.Tech Computer Science & Engineering",
    collegeName: "SASTRA Deemed University",
    location: "Thanjavur, Tamil Nadu",
    entrance: "Merit + JEE Main (varies by category)",
    approxAnnualFeeINR: "₹1.8L–₹2.8L (approx.)",
    highlights: ["Good placements", "Strong academics", "Good campus discipline"],
    website: "https://www.sastra.edu/",
  },
  {
    id: "eng-amrita-cse",
    stream: "engineering",
    scale: "engineering200",
    minScore: 145,
    course: "B.Tech Computer Science & Engineering",
    collegeName: "Amrita Vishwa Vidyapeetham (Coimbatore Campus)",
    location: "Coimbatore, Tamil Nadu",
    entrance: "AEEE",
    approxAnnualFeeINR: "₹2.5L–₹4.5L (approx.)",
    highlights: ["Good research", "Good placements", "Multiple campuses"],
    website: "https://www.amrita.edu/",
  },

  // Medical (percent out of 100)
  {
    id: "med-aiims-mbbs",
    stream: "medical",
    scale: "percent100",
    minScore: 95,
    course: "MBBS",
    collegeName: "AIIMS New Delhi",
    location: "New Delhi",
    entrance: "NEET-UG (AIIMS admissions through NEET)",
    approxAnnualFeeINR: "₹1,500–₹5,000 (approx.)",
    highlights: ["Premier institute", "Excellent clinical exposure", "Strong academics"],
    website: "https://www.aiims.edu/",
  },
  {
    id: "med-jipmer-mbbs",
    stream: "medical",
    scale: "percent100",
    minScore: 93,
    course: "MBBS",
    collegeName: "JIPMER",
    location: "Puducherry",
    entrance: "NEET-UG (admissions through NEET)",
    approxAnnualFeeINR: "₹10k–₹50k (approx.)",
    highlights: ["Top govt institute", "High clinical exposure", "Strong academics"],
    website: "https://jipmer.edu.in/",
  },
  {
    id: "med-cmc-mbbs",
    stream: "medical",
    scale: "percent100",
    minScore: 92,
    course: "MBBS",
    collegeName: "Christian Medical College (CMC)",
    location: "Vellore, Tamil Nadu",
    entrance: "NEET-UG + CMC selection process",
    approxAnnualFeeINR: "₹60k–₹1.5L (approx.)",
    highlights: ["Top private medical college", "High patient inflow", "Strong training"],
    website: "https://www.cmch-vellore.edu/",
  },
  {
    id: "med-afmc-mbbs",
    stream: "medical",
    scale: "percent100",
    minScore: 90,
    course: "MBBS",
    collegeName: "Armed Forces Medical College (AFMC)",
    location: "Pune, Maharashtra",
    entrance: "NEET-UG + AFMC screening",
    approxAnnualFeeINR: "₹70k–₹1.0L (approx.)",
    highlights: ["Military medical training", "Strong discipline and academics", "Great clinical exposure"],
    website: "https://afmc.nic.in/",
  },
  {
    id: "med-kmc-mbbs",
    stream: "medical",
    scale: "percent100",
    minScore: 85,
    course: "MBBS",
    collegeName: "Kasturba Medical College (KMC)",
    location: "Manipal, Karnataka",
    entrance: "NEET-UG",
    approxAnnualFeeINR: "₹10L+ (approx.)",
    highlights: ["Top private option", "Modern facilities", "International exposure"],
    website: "https://manipal.edu/kmc-manipal.html",
  },
  {
    id: "med-sriher-mbbs",
    stream: "medical",
    scale: "percent100",
    minScore: 83,
    course: "MBBS",
    collegeName: "Sri Ramachandra Institute of Higher Education and Research (SRIHER)",
    location: "Chennai, Tamil Nadu",
    entrance: "NEET-UG",
    approxAnnualFeeINR: "₹18L+ (approx.)",
    highlights: ["Strong hospitals", "Good clinical exposure", "Modern facilities"],
    website: "https://www.sriramachandra.edu.in/",
  },
  {
    id: "med-bds",
    stream: "medical",
    scale: "percent100",
    minScore: 70,
    course: "BDS (Dental)",
    collegeName: "Top Dental Colleges (varies)",
    location: "India (varies)",
    entrance: "NEET-UG (Dental counselling)",
    approxAnnualFeeINR: "₹1.5L–₹6.0L (approx.)",
    highlights: ["Strong career in dentistry", "Seats vary by state", "Private options available"],
  },
  {
    id: "med-bams",
    stream: "medical",
    scale: "percent100",
    minScore: 65,
    course: "BAMS (Ayurveda)",
    collegeName: "National Institute of Ayurveda / State Ayurveda Colleges (varies)",
    location: "India (varies)",
    entrance: "NEET-UG (AYUSH counselling)",
    approxAnnualFeeINR: "₹20k–₹3.5L (approx.)",
    highlights: ["AYUSH pathway", "Growing demand", "Govt + private options"],
  },
  {
    id: "med-bhms",
    stream: "medical",
    scale: "percent100",
    minScore: 60,
    course: "BHMS (Homeopathy)",
    collegeName: "State Homeopathy Colleges (varies)",
    location: "India (varies)",
    entrance: "NEET-UG (AYUSH counselling)",
    approxAnnualFeeINR: "₹15k–₹3.0L (approx.)",
    highlights: ["AYUSH pathway", "Seat availability varies", "Private options available"],
  },
  {
    id: "med-gmc-mbbs",
    stream: "medical",
    scale: "percent100",
    minScore: 80,
    course: "MBBS",
    collegeName: "Government Medical College (varies by state)",
    location: "India (varies)",
    entrance: "NEET-UG (State counselling)",
    approxAnnualFeeINR: "₹10k–₹1.0L (approx.)",
    highlights: ["Low fees (govt)", "Good clinical exposure", "Seat availability varies widely"],
  },

  // Arts (percent out of 100)
  {
    id: "arts-du-ba",
    stream: "arts",
    scale: "percent100",
    minScore: 92,
    course: "B.A. (Hons.) Economics / Political Science",
    collegeName: "University of Delhi (Top colleges)",
    location: "New Delhi",
    entrance: "CUET-UG (as applicable)",
    approxAnnualFeeINR: "₹15k–₹50k (approx.)",
    highlights: ["Strong academics", "Excellent peer group", "Great internships exposure"],
    website: "https://www.du.ac.in/",
  },
  {
    id: "arts-au-psyc",
    stream: "arts",
    scale: "percent100",
    minScore: 82,
    course: "B.A. Psychology / Social Work",
    collegeName: "University of Madras (affiliated colleges)",
    location: "Chennai, Tamil Nadu",
    entrance: "Merit-based / university process (varies)",
    approxAnnualFeeINR: "₹10k–₹80k (approx.)",
    highlights: ["Wide college options", "Affordable routes", "Good for social sciences"],
    website: "https://www.unom.ac.in/",
  },
  {
    id: "arts-jnu-ba",
    stream: "arts",
    scale: "percent100",
    minScore: 88,
    course: "B.A. (Language / Social Sciences as offered)",
    collegeName: "Jawaharlal Nehru University (JNU)",
    location: "New Delhi",
    entrance: "CUET-UG / university process",
    approxAnnualFeeINR: "₹10k–₹30k (approx.)",
    highlights: ["Research culture", "Strong faculty", "Low fees (public)"],
    website: "https://www.jnu.ac.in/",
  },
  {
    id: "arts-bhu-ba",
    stream: "arts",
    scale: "percent100",
    minScore: 85,
    course: "B.A. (Hons.)",
    collegeName: "Banaras Hindu University (BHU)",
    location: "Varanasi, Uttar Pradesh",
    entrance: "CUET-UG / university process",
    approxAnnualFeeINR: "₹8k–₹25k (approx.)",
    highlights: ["Large campus", "Strong traditional programs", "Affordable fees"],
    website: "https://www.bhu.ac.in/",
  },
  {
    id: "arts-tiss-ba",
    stream: "arts",
    scale: "percent100",
    minScore: 84,
    course: "B.A. Social Sciences / related UG (as offered)",
    collegeName: "Tata Institute of Social Sciences (TISS)",
    location: "Mumbai, Maharashtra",
    entrance: "CUET-UG / institute process (varies)",
    approxAnnualFeeINR: "₹40k–₹1.5L (approx.)",
    highlights: ["Strong social sciences brand", "Good exposure", "Great pathways to PG"],
    website: "https://www.tiss.edu/",
  },
  {
    id: "arts-loyola-ba",
    stream: "arts",
    scale: "percent100",
    minScore: 78,
    course: "B.A. English / B.A. Economics",
    collegeName: "Loyola College",
    location: "Chennai, Tamil Nadu",
    entrance: "Merit-based (process varies by course)",
    approxAnnualFeeINR: "₹25k–₹80k (approx.)",
    highlights: ["Strong arts & commerce programs", "Great campus culture", "Good placements for select courses"],
    website: "https://www.loyolacollege.edu/",
  },
  {
    id: "arts-mcc-viscom",
    stream: "arts",
    scale: "percent100",
    minScore: 80,
    course: "B.Sc Visual Communication / Media",
    collegeName: "Madras Christian College (MCC)",
    location: "Chennai, Tamil Nadu",
    entrance: "Merit-based (cutoff varies yearly)",
    approxAnnualFeeINR: "₹35k–₹80k (approx.)",
    highlights: ["Strong media programs", "Active campus culture", "Good alumni network"],
    website: "https://mcc.edu.in/",
  },
  {
    id: "arts-christ-ba",
    stream: "arts",
    scale: "percent100",
    minScore: 80,
    course: "B.A. Psychology / English / Economics",
    collegeName: "Christ University",
    location: "Bengaluru, Karnataka",
    entrance: "Entrance + interview (varies)",
    approxAnnualFeeINR: "₹80k–₹2.5L (approx.)",
    highlights: ["Strong campus culture", "Good placements for select programs", "Good internships"],
    website: "https://www.christuniversity.in/",
  },
  {
    id: "arts-ashoka-ba",
    stream: "arts",
    scale: "percent100",
    minScore: 88,
    course: "B.A. Liberal Arts / PPE / Economics",
    collegeName: "Ashoka University",
    location: "Sonipat, Haryana",
    entrance: "Holistic admissions (tests/interviews may apply)",
    approxAnnualFeeINR: "₹8L+ (approx.)",
    highlights: ["Liberal arts model", "Strong faculty", "Research & internships"],
    website: "https://www.ashoka.edu.in/",
  },
  {
    id: "arts-xaviers-ba",
    stream: "arts",
    scale: "percent100",
    minScore: 75,
    course: "B.A. Mass Communication / B.A. Arts programs",
    collegeName: "St. Xavier's College (autonomous)",
    location: "Mumbai, Maharashtra",
    entrance: "Merit / entrance (varies)",
    approxAnnualFeeINR: "₹20k–₹1.2L (approx.)",
    highlights: ["Strong brand", "Good extracurriculars", "Industry exposure (media/arts)"],
    website: "https://xaviers.edu/",
  },
  {
    id: "arts-bfa-nid",
    stream: "arts",
    scale: "percent100",
    minScore: 78,
    course: "B.Des / Design (as offered)",
    collegeName: "National Institute of Design (NID)",
    location: "Ahmedabad, Gujarat",
    entrance: "NID DAT",
    approxAnnualFeeINR: "₹3.0L (approx.)",
    highlights: ["Top design institute", "Strong portfolios", "Excellent industry links"],
    website: "https://www.nid.edu/",
  },
  {
    id: "arts-nift",
    stream: "arts",
    scale: "percent100",
    minScore: 74,
    course: "B.Des / BFTech (Fashion & Design)",
    collegeName: "NIFT (various campuses)",
    location: "India (varies)",
    entrance: "NIFT Entrance Exam",
    approxAnnualFeeINR: "₹2.5L–₹3.5L (approx.)",
    highlights: ["Fashion-focused programs", "Industry exposure", "Multiple campuses"],
    website: "https://www.nift.ac.in/",
  },
]

export type RecommendationFit = "safe" | "match" | "reach"

export type SuggestedCourse = {
  course: string
  entrance: string
  /** Typical minimum score needed for this course (best-effort heuristic) */
  minScore: number
  scale: CutoffScale
  fit: RecommendationFit
}

export function recommendColleges(opts: {
  stream: Stream
  score: number
  limit?: number
}): Array<CollegeRecommendation & { fit: RecommendationFit; gap: number }> {
  const { stream, score } = opts
  const limit = Math.max(1, Math.min(25, opts.limit ?? 6))

  const rows = recommendations
    .filter((r) => r.stream === stream)
    .map((r) => {
      const gap = Math.round((score - r.minScore) * 100) / 100
      const fit: RecommendationFit =
        gap >= 8 ? "safe" : gap >= 0 ? "match" : "reach"
      return { ...r, gap, fit }
    })

  // Prefer matches first (closest non-negative gap), then reaches (closest negative), then safes (smallest positive).
  const scored = rows.sort((a, b) => {
    const aBucket = a.fit === "match" ? 0 : a.fit === "reach" ? 1 : 2
    const bBucket = b.fit === "match" ? 0 : b.fit === "reach" ? 1 : 2
    if (aBucket !== bBucket) return aBucket - bBucket

    // Within bucket, sort by absolute distance to minScore (closer is better).
    return Math.abs(a.gap) - Math.abs(b.gap)
  })

  return scored.slice(0, limit)
}

export function suggestCourses(opts: {
  stream: Stream
  score: number
  limit?: number
}): SuggestedCourse[] {
  const { stream, score } = opts
  const limit = Math.max(1, Math.min(20, opts.limit ?? 6))

  // Derive course suggestions from our college rows:
  // group by course and use the "easiest" (lowest) minScore as representative.
  const rows = recommendations
    .filter((r) => r.stream === stream)
    .reduce<Map<string, { course: string; entrance: string; minScore: number; scale: CutoffScale }>>(
      (acc, r) => {
        const key = `${r.course}__${r.scale}`
        const cur = acc.get(key)
        if (!cur || r.minScore < cur.minScore) {
          acc.set(key, { course: r.course, entrance: r.entrance, minScore: r.minScore, scale: r.scale })
        }
        return acc
      },
      new Map()
    )

  const scored = Array.from(rows.values())
    .map((c) => {
      const gap = Math.round((score - c.minScore) * 100) / 100
      const fit: RecommendationFit = gap >= 8 ? "safe" : gap >= 0 ? "match" : "reach"
      return { ...c, fit }
    })
    .sort((a, b) => {
      const aBucket = a.fit === "match" ? 0 : a.fit === "reach" ? 1 : 2
      const bBucket = b.fit === "match" ? 0 : b.fit === "reach" ? 1 : 2
      if (aBucket !== bBucket) return aBucket - bBucket
      return Math.abs(a.minScore - score) - Math.abs(b.minScore - score)
    })
    .slice(0, limit)

  return scored
}

 