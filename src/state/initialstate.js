// sample data

export default {
  user: {
    id: 1,
    name: 'Dr. Hawthorne',
    avatar: 'https://picsum.photos/id/342/256/256'
  },
  patients: [
    {
      id: 1,
      name: 'Nellie Lawrence',
      avatar: 'https://picsum.photos/id/1074/256/256'
    },
    {
      id: 2,
      name: 'Francisco Elliot',
      avatar: 'https://picsum.photos/id/237/256/256'
    },
    {
      id: 3,
      name: 'Isaac Alexander',
      avatar: 'https://picsum.photos/id/1027/256/256'
    },
    {
      id: 4,
      name: 'Vera Hopkins',
      avatar: 'https://picsum.photos/id/1062/256/256'
    }
  ],
  schedule: [
    {
      id: 124,
      type: 'Cleaning',
      description: 'Hygienist: Laurie',
      patient_id: 1,
      start: '0800',
      end: '0840'
    },
    {
      id: 125,
      type: 'Cleaning',
      description: 'Hygienist: Laurie',
      patient_id: 2,
      start: '0900',
      end: '0950'
    },
    {
      id: 126,
      type: 'Cleaning',
      description: 'Hygienist: Laurie',
      patient_id: 3,
      start: '1000',
      end: '1040'
    },
    {
      id: 127,
      type: 'Root Canal',
      description: 'Hygienist: Laurie',
      patient_id: 4,
      start: '1400',
      end: '1645'
    }
  ]
};
