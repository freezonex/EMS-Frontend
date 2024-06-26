import { color } from 'd3';
import { timeFormat } from 'd3-time-format';
export const barchartData = [
  {
    group: 'item1',
    value: 100,
  },
  {
    group: 'item2',
    value: 90,
  },
  {
    group: 'item3',
    value: 80,
  },
  {
    group: 'item4',
    value: 70,
  },
  {
    group: 'item5',
    value: 60,
  },
  {
    group: 'item6',
    value: 50,
  },
  {
    group: 'item7',
    value: 40,
  },
  {
    group: 'item8',
    value: 30,
  },
  {
    group: 'item9',
    value: 20,
  },
  {
    group: 'item10',
    value: 10,
  },
];

export const barchartOptions = {
  title: 'Emergy Consumption',
  axes: {
    left: {
      mapsTo: 'value',
    },
    bottom: {
      mapsTo: 'group',
      scaleType: 'labels',
    },
  },
  color: {
    scale: {
      item1: '#0F62FE',
      item2: '#2772FE',
      item3: '#3F81FE',
      item4: '#5791FE',
      item5: '#6FA1FE',
      item6: '#87B0FF',
      item7: '#9FC0FF',
      item8: '#B7D0FF',
      item9: '#CFE0FF',
      item10: '#DBE7FF',
    },
  },
  height: '260px',
  grid: {
    x: { enabled: false },
  },
};

export const areaChartData = [
  {
    group: 'Income',
    date: '2019-01-01T00:00:00.000Z',
    value: 0,
  },
  {
    group: 'Income',
    date: '2019-01-06T00:00:00.000Z',
    value: -37312,
  },
  {
    group: 'Income',
    date: '2019-01-08T00:00:00.000Z',
    value: -22392,
  },
  {
    group: 'Income',
    date: '2019-01-15T00:00:00.000Z',
    value: -52576,
  },
  {
    group: 'Income',
    date: '2019-01-19T00:00:00.000Z',
    value: 20135,
  },
  {
    group: 'Consumption',
    date: '2019-01-01T00:00:00.000Z',
    value: 47263,
  },
  {
    group: 'Consumption',
    date: '2019-01-05T00:00:00.000Z',
    value: 14178,
  },
  {
    group: 'Consumption',
    date: '2019-01-08T00:00:00.000Z',
    value: 23094,
  },
  {
    group: 'Consumption',
    date: '2019-01-13T00:00:00.000Z',
    value: 45281,
  },
  {
    group: 'Consumption',
    date: '2019-01-19T00:00:00.000Z',
    value: -63954,
  },
];

export const areaChartOptions = {
  // title: 'Energy Balance',
  axes: {
    bottom: {
      mapsTo: 'date',
      scaleType: 'time',
      ticks: {
        formatter: (date) => timeFormat('%d/%m/%Y')(new Date(date)),
      },
    },

    left: {
      mapsTo: 'value',
      scaleType: 'linear',
    },
  },
  toolbar: {
    enabled: false,
  },
  color: {
    scale: {
      Income: '#3F81FE',
      Consumption: '#CFE0FF',
    },
  },
  curve: 'curveNatural',
  height: '260px',
};

export const pieChartData = [
  {
    group: 'Water',
    value: 20000,
  },
  {
    group: 'Electricity',
    value: 65000,
  },
  {
    group: 'Steam',
    value: 75000,
  },
  {
    group: 'Coal',
    value: 10000,
  },
  {
    group: 'Others',
    value: 25000,
  },
];

export const pieChartOptions = {
  title: 'Energy Resource',
  resizable: true,
  legend: {
    alignment: 'center',
  },
  pie: {
    alignment: 'center',
  },
  color: {
    scale: {
      Water: '#FF8389',
      Electricity: '#87B0FF',
      Steam: '#D9E5FD',
      Coal: '#F9DDEA',
      Others: '#BFF0C6',
    },
  },
  height: '260px',
};

export const stackedBarData = [
  {
    group: 'Normal',
    date: '2018-12-31T16:00:00.000Z',
    value: 10000,
  },
  {
    group: 'Normal',
    date: '2019-01-04T16:00:00.000Z',
    value: 65000,
  },
  {
    group: 'Normal',
    date: '2019-01-07T16:00:00.000Z',
    value: 10000,
  },
  {
    group: 'Normal',
    date: '2019-01-12T16:00:00.000Z',
    value: 49213,
  },
  {
    group: 'Normal',
    date: '2019-01-16T16:00:00.000Z',
    value: 51213,
  },

  {
    group: 'Over standard',
    date: '2019-01-05T16:00:00.000Z',
    value: 57312,
  },
  {
    group: 'Over standard',
    date: '2019-01-07T16:00:00.000Z',
    value: 21432,
  },
  {
    group: 'Over standard',
    date: '2019-01-14T16:00:00.000Z',
    value: 70323,
  },
  {
    group: 'Over standard',
    date: '2019-01-18T16:00:00.000Z',
    value: 21300,
  },
  {
    group: 'Abnormal',
    date: '2018-12-31T16:00:00.000Z',
    value: 50000,
  },
  {
    group: 'Abnormal',
    date: '2019-01-04T16:00:00.000Z',
    value: 15000,
  },
  {
    group: 'Abnormal',
    date: '2019-01-07T16:00:00.000Z',
    value: 20000,
  },
  {
    group: 'Abnormal',
    date: '2019-01-12T16:00:00.000Z',
    value: 39213,
  },
  {
    group: 'Abnormal',
    date: '2019-01-16T16:00:00.000Z',
    value: 61213,
  },
];

export const stackedBarOptions = {
  // title: 'Alarms',
  axes: {
    left: {
      mapsTo: 'value',
      stacked: true,
    },
    bottom: {
      mapsTo: 'date',
      scaleType: 'time',
      ticks: {
        formatter: (date) => timeFormat('%d/%m')(new Date(date)),
      },
    },
  },
  toolbar: {
    enabled: false,
  },
  color: {
    scale: {
      Normal: '#A7F0BA',
      'Over standard': '#87B0FF',
      Abnormal: '#FFC9CB',
    },
  },
  height: '260px',
};

export const lineChartData = [
  { group: 'Current', date: '2010', value: 10 },
  { group: 'Current', date: '2015', value: 15 },
  { group: 'Current', date: '2020', value: 25 },
  { group: 'Current', date: '2025', value: 20 },
  { group: 'Prediction', date: '2010', value: 10 },
  { group: 'Prediction', date: '2015', value: 8 },
  { group: 'Prediction', date: '2020', value: 6 },
  { group: 'Prediction', date: '2025', value: 4 },
  { group: 'Prediction', date: '2030', value: 2 },
];

export const lineChartOptions = {
  title: 'Carbon Emission',
  axes: {
    bottom: {
      mapsTo: 'date',
      scaleType: 'time',
      ticks: {
        formatter: (date) => timeFormat('%Y')(new Date(date)),
      },
    },
    left: {
      title: 'Value',
      mapsTo: 'value',
      scaleType: 'linear',
    },
  },
  curve: 'curveNatural',
  height: '280px',
  legend: {
    position: 'bottom',
  },
  tooltip: {
    enabled: true,
  },
};
