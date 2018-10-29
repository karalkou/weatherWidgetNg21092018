import { of } from 'rxjs';
import { WidgetModel } from '../../app/types';

const widgetData: WidgetModel[] = [
  {
    _id: '01',
    img: 'assets/images/aguamarina_res.png',
    address: 'BQ Aguamarina Boutique;Sant Antoni de la Platja,;41, Can Pastilla, Spain',
    phone: '9025706477',
    weather: {
      title: 'Sunny bolearic islands',
      icon: 'sunny',
      water: 23,
      temperature: 34
    },
    social_info: {
      title: 'Be the part of sunny Spain',
      img: 'aguamarina',
      followers: 345,
      following: 2567
    },
    type: 'hotels'
  },
  {
    _id: '02',
    img: 'assets/images/railay_res.png',
    address: 'Railay Village Resort;544 Moo 2, Ao Nang Muang,;81000 Railay Beach, Thailand',
    phone: '3033861123',
    weather: {
      title: 'Do not forget the sunscreen',
      icon: 'sunny',
      water: 30,
      temperature: 40
    },
    social_info: {
      title: 'You gotta go here! :)',
      img: 'railay',
      followers: 156000,
      following: 80000
    },
    type: 'hotels'
  },
  {
    _id: '03',
    img: 'assets/images/go_fishing_res.png',
    address: 'о. Рыбное',
    phone: '1234567894',
    weather: {
      title: 'Don\'t forget raincoat',
      icon: 'rainy',
      water: 14,
      temperature: 18
    },
    social_info: {
      title: 'Only for men',
      img: 'go_fishing',
      followers: 1000,
      following: 999
    },
    type: 'fishing'
  },
  {
    _id: '04',
    img: 'assets/images/tui_res.png',
    address: 'TUI;г.Киев,;ул. Трехсвятительская, 5/1',
    phone: '0986071482',
    weather: {
      title: 'Go to bed',
      icon: 'night',
      water: 10,
      temperature: 28
    },
    social_info: {
      title: 'Tours for babushkas',
      img: 'tui',
      followers: 1,
      following: 1024
    },
    type: 'tours'
  },
  {
    _id: '05',
    img: 'assets/images/joinup_res.png',
    address: 'Join UP!;01033, г.Киев,;ул. Жилянская, 55',
    phone: '0986071482',
    weather: {
      title: 'Time to sleep',
      icon: 'night',
      water: 9,
      temperature: 27
    },
    social_info: {
      title: 'Tours for dedushkas',
      img: 'joinup',
      followers: 3,
      following: 1024
    },
    type: 'tours'
  }
];

export const widgetData$ = of(widgetData);