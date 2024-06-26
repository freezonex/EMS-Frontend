export const groupedBarData = [
  {
    group: 'Actual Value',
    date: new Date(2024, 0, 1),
    value: 10000,
  },
  {
    group: 'Actual Value',
    date: new Date(2024, 0, 2),
    value: 65000,
  },
  {
    group: 'Actual Value',
    date: new Date(2024, 0, 3),
    value: 30000,
  },
  {
    group: 'Actual Value',
    date: new Date(2024, 0, 4),
    value: 49213,
  },
  {
    group: 'Actual Value',
    date: new Date(2024, 0, 5),
    value: 51213,
  },
  {
    group: 'Standard Value',
    date: new Date(2024, 0, 1),
    value: 8000,
  },
  {
    group: 'Standard Value',
    date: new Date(2024, 0, 2),
    value: 67000,
  },
  {
    group: 'Standard Value',
    date: new Date(2024, 0, 3),
    value: 15000,
  },
  {
    group: 'Standard Value',
    date: new Date(2024, 0, 4),
    value: 51213,
  },
  {
    group: 'Standard Value',
    date: new Date(2024, 0, 5),
    value: 45213,
  },
];

export const groupedBarOptions = {
  //   title: 'Stability Rate Chart',
  axes: {
    left: {
      mapsTo: 'date',
      scaleType: 'time',
    },
    bottom: {
      mapsTo: 'value',
    },
  },
  height: '400px',
  toolbar: {
    enabled: false,
  },
  timeScale: {
    showDayName: true,
  },
  color: {
    scale: {
      'Actual Value': '#0F62FE',
      'Standard Value': '#78A9FF',
    },
  },
};
