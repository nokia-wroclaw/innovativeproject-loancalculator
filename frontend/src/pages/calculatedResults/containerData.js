const containerData = [
  {
    id: 'container1',
    title: 'Twoje koszty kredytu',
    type: 'baseline_time',
    fieldNames: [],
    addon: 'zł',
  },
  {
    id: 'container2',
    title: 'Twoje dane',
    type: 'user_input',
    fieldNames: [
      'Rodzaj oprocentowania',
      'Rodzaj rat',
      'Kwota kredytu',
      'Wkład własny',
      'Długość trwania',
      'Oprocentowanie',
      'Prowizja',
    ],
    addon: '',
  },
  {
    id: 'container3',
    title: 'Twoje koszty kredytu krótszego o 5 lat',
    type: 'five_years_less',
    fieldNames: [],
    addon: 'zł',
  },
  {
    id: 'container4',
    title: 'Twoje koszty kredytu dłuższego o 5 lat',
    type: 'five_years_more',
    fieldNames: [],
    addon: 'zł',
  },
];

export default containerData;
