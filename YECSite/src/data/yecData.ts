import { Competition, TeamMember, PackageItem } from '../types';

export const HERO_ASSETS = {
  bgImage: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/a1e5cdd8-1585-4154-9ea6-3a8d594bfbe5/image+%281%29.png',
  logo: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/0409f7c7-6a6b-45ee-8824-956962ac15f2/yec2022logo.png',
  lesLogo: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/f67e7787-4f74-452b-8d71-f28f3df62cfc/LES+Logo.png',
  robotMascot: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/b0b7469d-263d-441a-bdb9-140d1af4a6df/RobotVY.png',
  yecBanner: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/cb81a050-d5e6-4588-87ae-c0326a91edc6/YEC+Information+Package.png',
  aboutPhoto: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/00991a4a-52d4-4846-b6f5-7418af09634a/IMG_5828.JPG',
  teamBg: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/28bf6126-029d-47c3-ad52-c95e9d5d3c5d/IMG_6244.png',
  packagesBg: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/6718f9e2-86c7-4149-bb38-95d692383eb5/IMG_6257.png',
};

export const TICKET_LINKS = {
  week1: 'https://www.eventbrite.ca/e/yec-week-1-tickets-1685049962799?aff=oddtdtcreator',
  week2: 'https://www.eventbrite.ca/e/yec-week-2-re-engineering-consulting-senior-design-tickets-1681446414489?aff=oddtdtcreator',
};

export const COMPETITIONS: Competition[] = [
  // WEEK 1 (OCTOBER 10 - OCTOBER 11)
  {
    id: 'communication',
    name: 'Communications',
    week: 1,
    weekLabel: 'WEEK 1',
    dates: 'OCTOBER 10TH - OCTOBER 11TH',
    image: '/competitions/communication.svg',
    description: "Participants must discuss their chosen topic's environmental, economic, technological, and societal impacts, presenting their analysis effectively. Competitors will be judged on the clarity and organization of their ideas, the depth of their analysis, and the quality and delivery of their presentation.",
    teamSize: '1 - 2 Competitors',
    eligibleYears: 'Undergraduate Students (All Years)',
    qualification: 'Winners represent Lassonde at OEC Engineering Communications',
    details: 'Presenting complex technical concepts to non-technical stakeholders and regulatory bodies with clear storytelling, visual aids, and rigorous scientific basis.'
  },
  {
    id: 'debate',
    name: 'Debate',
    week: 1,
    weekLabel: 'WEEK 1',
    dates: 'OCTOBER 10TH - OCTOBER 11TH',
    image: '/competitions/debate.svg',
    description: 'Akin to real-world scenarios, students develop and present nuanced arguments in favour of or against an impromptu resolution. Teams go head to head in a battle of logic and rhetoric in multiple rounds of debate.',
    teamSize: '2 Competitors per Team',
    eligibleYears: 'Undergraduate Students (All Years)',
    qualification: 'Winners qualify for the Parliamentary Debate division at OEC',
    details: 'Teams are provided with resolutions regarding ethics, modern engineering developments, and public policy with limited prep time, emphasizing quick critical reasoning and persuasive communication.'
  },
  {
    id: 'innovative-design',
    name: 'Innovative Design',
    week: 1,
    weekLabel: 'WEEK 1',
    dates: 'OCTOBER 10TH - OCTOBER 11TH',
    image: '/competitions/innovative-design.svg',
    description: 'Participants develop a novel product or service to address an unmet need or to improve upon currently available solutions. Competitors will present their nuanced designs to a panel of experts.',
    teamSize: '2 - 4 Competitors',
    eligibleYears: 'Undergraduate Students (All Years)',
    qualification: 'Top team qualifies for OEC Innovative Design showcase',
    details: 'Original student inventions, capstone spin-offs, patent-pending prototypes, and market-ready products assessed on engineering rigor, originality, and commercial viability.'
  },

  // WEEK 2 (OCTOBER 17 - OCTOBER 18)
  {
    id: 'junior-design',
    name: 'Junior Design',
    week: 2,
    weekLabel: 'WEEK 2',
    dates: 'OCTOBER 17TH - OCTOBER 18TH',
    image: '/competitions/junior-design.svg',
    description: 'Students in their first and second years are tasked with designing creative solutions to real-world engineering problems. Competitors must design a practical solution and present it to judges making the best use of limited time and resources.',
    teamSize: '4 Competitors per Team',
    eligibleYears: '1st & 2nd Year Undergraduates',
    qualification: 'Top team qualifies for Junior Design at OEC and CEC',
    details: 'Participants receive a mystery design problem with raw materials and must build, calibrate, test, and demonstrate their prototype device within the testing arena.'
  },
  {
    id: 'senior-design',
    name: 'Senior Design',
    week: 2,
    weekLabel: 'WEEK 2',
    dates: 'OCTOBER 17TH - OCTOBER 18TH',
    image: '/competitions/senior-design.svg',
    description: 'Students combine multidisciplinary knowledge to design a technical solution to an advanced engineering problem. Participants must design and present a functional solution under resource constraints and adhering to competition requirements.',
    teamSize: '4 Competitors per Team',
    eligibleYears: '3rd & 4th+ Year Undergraduates',
    qualification: 'Top team qualifies for OEC Senior Design with CEC track',
    details: 'The premier hands-on engineering build competition testing embedded systems, mechanical mechanisms, structural endurance, and sensor telemetry.'
  },
  {
    id: 're-engineering',
    name: 'Re-Engineering',
    week: 2,
    weekLabel: 'WEEK 2',
    dates: 'OCTOBER 17TH - OCTOBER 18TH',
    image: '/competitions/re-engineering.svg',
    description: 'Teams utilize their diverse skill sets to redesign an existing solution to a problem with the aim of improving its overall performance.',
    teamSize: '2 - 4 Competitors',
    eligibleYears: 'Undergraduate Students (All Years)',
    qualification: '1st place advances to Re-Engineering category at OEC',
    details: 'Competitors dissect a current manufactured product, analyze its engineering flaws or inefficiencies, and deliver a redesigned CAD and operational schematic.'
  },
  {
    id: 'consulting',
    name: 'Consulting',
    week: 2,
    weekLabel: 'WEEK 2',
    dates: 'OCTOBER 17TH - OCTOBER 18TH',
    image: '/competitions/consulting.svg',
    description: 'Competitors will develop and present an in-depth analytical solution to a given multi-dimensional engineering challenge. Teams must demonstrate a thorough understanding of the diverse social, environmental, technological and economic impacts of their solutions.',
    teamSize: '4 Competitors per Team',
    eligibleYears: 'Undergraduate Students (All Years)',
    qualification: 'Winners represent Lassonde at OEC Consulting',
    details: 'Focuses on holistic municipal, sustainability, or industrial problems requiring feasibility studies, risk matrix assessments, and executive-level presentations.'
  }
];

// Unified Team Members (Executive Team Leads and Competition Leads together) with blank pictures
export const ALL_TEAM_MEMBERS: TeamMember[] = [
  // Executive Leads
  {
    name: 'Naeem Baig',
    role: 'YEC Chair',
    image: ''
  },
  {
    name: 'Habiba Koraitam',
    role: 'Vice Chair Finance',
    image: ''
  },
  {
    name: 'Ishaan Das-Basak',
    role: 'Sponsorship Commissioner',
    image: ''
  },
  {
    name: 'Tehreem Asad',
    role: 'Vice Chair Communications',
    image: ''
  },
  {
    name: 'Allen Abraham',
    role: 'Logistics Manager',
    image: ''
  },
  {
    name: 'Aqeelah Ghadiyali',
    role: 'Graphic Designer',
    image: ''
  },
  {
    name: 'Pietro Angiolella',
    role: 'Webmaster',
    image: ''
  },
  {
    name: 'Dania Abdul Rahim',
    role: 'Vice Chair Logistics',
    image: ''
  },
  {
    name: 'Ziad Hammouda',
    role: 'Sponsorship Acquisition',
    image: ''
  },
  // Competition Leads
  {
    name: 'Maheen Mirza',
    role: 'Competition Lead',
    image: ''
  },
  {
    name: 'Hadia Ali',
    role: 'Competition Lead',
    image: ''
  },
  {
    name: 'Hiam Al-Jamal',
    role: 'Competition Lead',
    image: ''
  },
  {
    name: 'Ibrahim Rfifi',
    role: 'Competition Lead',
    image: ''
  },
  {
    name: 'Kenzi',
    role: 'Competition Lead',
    image: ''
  },
  {
    name: 'Luna Marouf',
    role: 'Competition Lead',
    image: ''
  }
];

export const TEAM_MEMBERS = ALL_TEAM_MEMBERS;
export const COMPETITION_LEADS = ALL_TEAM_MEMBERS.filter((m) => m.role.includes('Competition Lead'));

export const PACKAGES: PackageItem[] = [
  {
    id: 'sponsorship',
    title: 'Sponsorship Package',
    pdfUrl: 'https://lasengsoc.com/s/YEC-Sponsorship-Package-2025-r3nm.pdf',
    description: 'The York Engineering Competition (YEC) relies on industry partners and corporate sponsors to provide top-tier real-world challenge problems, student mentorship, equipment, and cash awards.',
    targetAudience: 'Industry Partners, Tech Companies, Engineering Consultancies',
    highlights: [
      'Direct campus brand visibility to 300+ top Lassonde engineering competitors',
      'Exclusive recruitment resume book access & networking tables',
      'Category naming rights and keynote judge panel seats',
      'Prominent logo placement on website, brochures, banners & competition t-shirts'
    ]
  },
  {
    id: 'club',
    title: 'Club Package',
    pdfUrl: 'https://lasengsoc.com/s/YEC-Club-Package.pdf',
    description: 'Designed for Lassonde student clubs, design teams, and affiliated chapters wanting to co-host challenges, mentor teams, or recruit student engineering talent.',
    targetAudience: 'Lassonde Student Chapters, Design Teams & Academic Clubs',
    highlights: [
      'Collaborative workshop hosting & skill-building sessions',
      'Co-branded challenge problem formulation',
      'Club recruitment booth at the closing awards ceremony',
      'Direct engagement with motivated engineering freshmen and senior capstone students'
    ]
  },
  {
    id: 'judge',
    title: 'Judge Package',
    pdfUrl: 'https://lasengsoc.com/s/YEC-Judge-Package-2025.pdf',
    description: 'We welcome licensed Professional Engineers (P.Eng.), academic faculty members, researchers, and distinguished alumni to evaluate presentations, prototype builds, and debate rounds.',
    targetAudience: 'Professional Engineers (P.Eng.), Faculty & Industry Experts',
    highlights: [
      'Evaluate creative student designs adhering to official OEC rubrics',
      'Provide direct constructive feedback & professional mentorship',
      'Judge hospitality lounge with catered meals and networking with faculty',
      'Official Certificate of Appreciation from the Lassonde Engineering Society'
    ]
  }
];

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/lasengsoc',
  twitter: 'https://twitter.com/lasengsoc',
  facebook: 'https://facebook.com/lasengsoc',
  linkedin: 'https://linkedin.com/company/lassonde-engineering-society',
  discord: 'https://discord.gg/w7R24t3kHq',
  email: 'yec@lasengsoc.com',
  website: 'https://lasengsoc.com',
  address: 'Bergeron Centre for Engineering Excellence, 11 Manning Walk, North York, ON M3J 1P3'
};
