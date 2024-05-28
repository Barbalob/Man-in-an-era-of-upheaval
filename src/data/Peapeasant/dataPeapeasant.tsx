import srcImg1 from '../../assets/img/1.png'

export const dataPeapeasant = [
  {
    description: 'На дворе 1895 год. Вы – обычный крестьянин-середняк, которому совсем недавно исполнилось тридцать лет. За Вашей спиной стоит большая семья, состоящая из девяти человек, что, конечно, является несомненным преимуществом: все детки при деле и приносят копеечку. Подрабатывая то здесь, то там и продавая излишки, Ваш «семейный кооператив» смог накопить внушительную сумму.',
    srcImg: srcImg1,
    textQuestion: 'Перед Вами встает непраздный вопрос как ее потратить:',
    choice: [
      {
        textAnswer:'Оплатить поездку на ирбитскую ярмарку',
        isEnd: false,
        idNextQuestion: '1.1'
      },
      {
        textAnswer:'Оплатить свадьбу сына',
        isEnd: false,
        idNextQuestion: '1.1'
      },
      {
        textAnswer:'Сыграть в карты в кабаке',
        isEnd: false,
        idNextQuestion: '1.1'
      },
    ]
  },
  {
    description: 'Test',
    srcImg: srcImg1,
    textQuestion: 'Перед Вами встает непраздный вопрос как ее потратить:',
    choice: [
      {
        textAnswer:'Test1',
        isEnd: false,
        idNextQuestion: '1.1'
      },
      {
        textAnswer:'Test2',
        isEnd: false,
        idNextQuestion: '1.1'
      },
      {
        textAnswer:'Test3',
        isEnd: true,
        idNextQuestion: '1.1'
      },
    ]
  },
]