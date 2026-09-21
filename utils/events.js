
// Single source of truth for school events, mirroring what the school publishes in
// the admin portal's "Events & Ticket Sales" tab. Production: fetch from the school
// backend and cache; the shape below is what every events screen binds to.
var EVENTS = [
  {
    id: 'ev1',
    tag: 'Sports',
    title: 'SKTD3 Ceria Sports Carnival & Fun Run 2026',
    cover: '/assets/images/image-1.png',
    desc: 'Athletic tracks, telematches for Standard 1–6 students, parent relay races, and food trucks. Entry tickets include carnival coupons.',
    when: 'Sat, 29 Aug 2026 · 7:30 AM – 1:00 PM',
    dateLong: 'Saturday, 29 August 2026',
    time: '7:30 AM – 1:00 PM',
    dateBadge: { month: 'Aug', day: '29' },
    venue: 'SK Taman Desa 3 School Field & Courtyard',
    venueShort: 'School field & courtyard, SK Taman Desa 3',
    venueNote: 'Gate B entrance',
    gate: 'Gate B',
    price: '10.00',
    sold: 42,
    capacity: 300,
    percent: 14,
    remaining: 258,
    status: 'Open',
    // amber progress bar once an event is nearly sold out
    warm: false,
    ticketRef: 'SPD-0338',
    ticketDate: 'Sat, 29 Aug 2026 · 7:30 AM',
    ticketGradient: 'linear-gradient(135deg,#FFB454,#F2683B)'
  },
  {
    id: 'ev2',
    tag: 'Academic',
    title: 'Young Coders & Scratch Robotics Weekend Workshop',
    cover: '/assets/images/image-2.png',
    desc: 'Hands-on interactive STEM workshop teaching Scratch logic and micro-controller assembly for primary school students.',
    when: 'Sat, 5 Sep 2026 · 9:00 AM – 12:30 PM',
    dateLong: 'Saturday, 5 September 2026',
    time: '9:00 AM – 12:30 PM',
    dateBadge: { month: 'Sep', day: '05' },
    venue: 'SKTD3 Innovation & ICT Lab 1',
    venueShort: 'Innovation & ICT Lab 1, SK Taman Desa 3',
    venueNote: 'Level 2, ICT block',
    gate: 'the ICT block entrance',
    price: '20.00',
    sold: 28,
    capacity: 40,
    percent: 70,
    remaining: 12,
    status: 'Filling fast',
    warm: true,
    ticketRef: 'YCR-0129',
    ticketDate: 'Sat, 5 Sep 2026 · 9:00 AM',
    ticketGradient: 'linear-gradient(135deg,#7C9CFF,#4F46E5)'
  }
];

module.exports = {
  list: function () { return EVENTS; },
  get: function (id) {
    for (var i = 0; i < EVENTS.length; i++) {
      if (EVENTS[i].id === id) { return EVENTS[i]; }
    }
    return EVENTS[0];
  }
};
