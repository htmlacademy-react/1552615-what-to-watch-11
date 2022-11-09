import { FilmsTypes } from '../types/films-types';

export const films: FilmsTypes = [
  {
    id: 1,
    name: 'Шестой элемент',
    posterImage: '/img/johnny-english.jpg',
    previewImage: 'img/johnny-english.jpg',
    backgroundImage: 'img/johnny-english.jpg',
    backgroundColor: 'grey',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'Полицейский пристав Дикс получает очередное задание, целью которого является спасение всей Земли. Его начальство подозревает, что в данный момент в кресле президента сидит не он сам, а его клон, и чтобы проверить это, засылает Дикса на Луну. Именно там и находится фабрика, цель которой - создать множество клонов известных личностей.',
    rating: 5.9,
    scoresCount: 22592,
    director: 'Аллан А. Голдштейн',
    starring: ['Лесли Нильсен',
      'Офелия Винтер',
      'Эцио Греджо',
      'Питер Иган',
      'Александра Камп-Грёнефельд',
      'Дэмиен Массон',
      'Пьер Эдвардс'],
    runTime: 94,
    genre: 'фантастика',
    released: 2000,
    isFavorite: true,
  },
  {
    id: 2,
    name: 'Оно',
    posterImage: 'img/mindhunter.jpg',
    previewImage: 'img/mindhunter.jpg',
    backgroundImage: 'img/mindhunter.jpg',
    backgroundColor: 'tomato',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'Злобный клоун терроризирует подростков. Экранизация романа Стивена Кинга с жутким Биллом Скарсгардом',
    rating: 7.3,
    scoresCount: 382018,
    director: 'Андрес Мускетти',
    starring: ['Джейден Мартелл',
      'Джереми Рэй Тейлор',
      'София Лиллис',
      'Финн Вулфхард',
      'Чоузен Джейкобс',
      'Джек Дилан Грейзер',
      'Уайатт Олефф',
      'Билл Скарсгард'],
    runTime: 134,
    genre: 'ужасы',
    released: 2017,
    isFavorite: false,
  },
  {
    id: 3,
    name: 'Молчание ягнят',
    posterImage: 'img/bohemian-rhapsody.jpg',
    previewImage: 'img/bohemian-rhapsody.jpg',
    backgroundImage: 'img/bohemian-rhapsody.jpg',
    backgroundColor: 'blue',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'Интеллектуал-людоед помогает молодой сотруднице ФБР. Веха в жанре триллера — и гениальная игра Энтони Хопкинса',
    rating: 8.3,
    scoresCount: 440860,
    director: 'Джонатан Демме',
    starring: ['Джоди Фостер',
      'Энтони Хопкинс',
      'Брук Смит',
      'Скотт Гленн',
      'Тед Левайн',
      'Энтони Хилд'],
    runTime: 113,
    genre: 'триллер',
    released: 1990,
    isFavorite: false,
  },
  {
    id: 4,
    name: 'Мой сосед Тоторо',
    posterImage: 'img/pulp-fiction.jpg',
    previewImage: 'img/pulp-fiction.jpg',
    backgroundImage: 'img/pulp-fiction.jpg',
    backgroundColor: 'orange',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'Переехав в деревню, две маленькие сестры, старшая Сацуки и младшая Мэй, знакомятся с лесным духом, которого Мэй называет «Тоторо» (искаженное «тролль»). Подружившись с девочками, Тоторо не только устраивает им воздушную экскурсию по своим владениям, но и помогает повидаться с мамой, которая лежит в больнице.',
    rating: 8.2,
    scoresCount: 179077,
    director: 'Хаяо Миядзаки',
    starring: ['Норико Хидака',
      'Тика Сакамото',
      'Хитоси Такаги',
      'Таниэ Китабаяси',
      'Суми Симамото',
      'Сигэсато Итои',
      'Тосиюки Амагаса',
      'Масаси Хиросэ',
      'Юко Маруяма',
      'Юко Мидзутани'],
    runTime: 86,
    genre: 'аниме',
    released: 1988,
    isFavorite: true,
  },
  {
    id: 5,
    name: 'Рэмбо: Первая кровь',
    posterImage: 'img/what-we-do-in-the-shadows.jpg',
    previewImage: 'img/what-we-do-in-the-shadows.jpg',
    backgroundImage: 'img/what-we-do-in-the-shadows.jpg',
    backgroundColor: 'red',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'Он - эксперт. Эксперт по оружию, ножам и собственному телу. Он человек, специально обученный не замечать боль и погодные условия. На войне он был героем, а на родине он никому не нужен. Неспособный приспособиться к мирной жизни Рэмбо путешествует по стране, но его задерживает провинциальный шериф, ненавидящий бродяг. Попав в тюрьму и вкусив унижений со стороны полиции, Рэмбо объявляет войну',
    rating: 7.8,
    scoresCount: 73485,
    director: 'Тед Котчефф',
    starring: ['Сильвестр Сталлоне',
      'Ричард Кренна',
      'Брайан Деннехи',
      'Билл МакКинни',
      'Джек Старретт',
      'Майкл Тэлботт'],
    runTime: 89,
    genre: 'триллер',
    released: 1982,
    isFavorite: false,
  },
  {
    id: 6,
    name: 'Убийство в Восточном экспрессе',
    posterImage: 'img/shutter-island.jpg',
    previewImage: 'img/shutter-island.jpg',
    backgroundImage: 'img/shutter-island.jpg',
    backgroundColor: 'tomato',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Пуаро ищет того, кто жестко расправился с американским гангстером. Экранизация Агаты Кристи с мощным кастом',
    rating: 6.9,
    scoresCount: 274726,
    director: 'Кеннет Брана',
    starring: ['Кеннет Брана',
      'Пенелопа Крус',
      'Уиллем Дефо',
      'Джуди Денч',
      'Джонни Депп',
      'Джош Гад',
      'Дерек Джекоби',
      'Лесли Одом мл.',
      'Мишель Пфайффер',
      'Дэйзи Ридли'],
    runTime: 109,
    genre: 'криминал',
    released: 2017,
    isFavorite: false,
  },
  {
    id: 7,
    name: 'Люди Икс: Апокалипсис',
    posterImage: 'img/war-of-the-worlds.jpg',
    previewImage: 'img/war-of-the-worlds.jpg',
    backgroundImage: 'img/war-of-the-worlds.jpg',
    backgroundColor: 'blue',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'Любимые супергерои бьются с самым могучим мутантом за всю историю. В роли злодея — Оскар Айзек',
    rating: 7.0,
    scoresCount: 224786,
    director: 'Брайан Сингер',
    starring: ['Джеймс МакЭвой',
      'Майкл Фассбендер',
      'Дженнифер Лоуренс',
      'Николас Холт',
      'Оскар Айзек',
      'Роуз Бирн',
      'Эван Питерс',
      'Джош Хелман',
      'Софи Тёрнер',
      'Тай Шеридан'],
    runTime: 138,
    genre: 'фантастика',
    released: 2016,
    isFavorite: true,
  },
  {
    id: 8,
    name: 'Чужой против Хищника',
    posterImage: 'img/no-country-for-old-men.jpg',
    previewImage: 'img/no-country-for-old-men.jpg',
    backgroundImage: 'img/no-country-for-old-men.jpg',
    backgroundColor: 'red',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Группа ученых оказывается игрушкой в лапах инопланетных монстров. Фантастический боевик Пола У. С. Андерсона',
    rating: 6.3,
    scoresCount: 77945,
    director: 'Пол У. С. Андерсон',
    starring: ['Санаа Лэтэн',
      'Рауль Бова',
      'Лэнс Хенриксен',
      'Юэн Бремнер'],
    runTime: 96,
    genre: 'фантастика',
    released: 2004,
    isFavorite: false,
  },
];

