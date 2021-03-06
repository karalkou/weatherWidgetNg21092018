import { of } from 'rxjs';
import { WidgetModel } from '../../app/types';
import { delay } from 'rxjs/operators';

const widgetData: WidgetModel[] = [
  {
    _id: '01',
    img: 'assets/images/aguamarina_res.png',
    name: 'BQ Aguamarina Boutique',
    address: 'Sant Antoni de la Platja,;41, Can Pastilla, Spain',
    phone: '9025706477',
    weather: {
      title: 'Sunny bolearic islands',
      icon: 'assets/images/weather/sunny.png',
      water: 23,
      temperature: 34
    },
    social_info: {
      title: 'Be the part of sunny Spain',
      img: 'assets/images/social/aguamarina.png',
      followers: 345,
      following: 2567
    },
    type: 'hotels'
  },
  {
    _id: '02',
    img: 'assets/images/railay_res.png',
    name: 'Railay Village Resort',
    address: '544 Moo 2, Ao Nang Muang,;81000 Railay Beach, Thailand',
    phone: '3033861123',
    weather: {
      title: 'Do not forget the sunscreen',
      icon: 'assets/images/weather/sunny.png',
      water: 30,
      temperature: 40
    },
    social_info: {
      title: 'You gotta go here! :)',
      img: 'assets/images/social/railay.png',
      followers: 156000,
      following: 80000
    },
    type: 'hotels'
  },
  {
    _id: '03',
    img: 'assets/images/go_fishing_res.png',
    name: 'о. Рыбное',
    address: 'о. Рыбное',
    phone: '1234567894',
    weather: {
      title: 'Don\'t forget raincoat',
      icon: 'assets/images/weather/rainy.png',
      water: 14,
      temperature: 18
    },
    social_info: {
      title: 'Only for men',
      img: 'assets/images/social/go_fishing.png',
      followers: 1000,
      following: 999
    },
    type: 'fishing'
  },
  {
    _id: '04',
    img: 'assets/images/tui_res.png',
    name: 'TUI',
    address: 'г.Киев,;ул. Трехсвятительская, 5/1',
    phone: '0986071482',
    weather: {
      title: 'Go to bed',
      icon: 'assets/images/weather/night.png',
      water: 10,
      temperature: 28
    },
    social_info: {
      title: 'Tours for babushkas',
      img: 'assets/images/social/tui.png',
      followers: 1,
      following: 1024
    },
    type: 'tours'
  },
  {
    _id: '05',
    img: 'assets/images/joinup_res.png',
    name: 'Join UP!',
    address: '01033, г.Киев,;ул. Жилянская, 55',
    phone: '0986071482',
    weather: {
      title: 'Time to sleep',
      icon: 'assets/images/weather/night.png',
      water: 9,
      temperature: 27
    },
    social_info: {
      title: 'Tours for dedushkas',
      img: 'assets/images/social/joinup.png',
      followers: 3,
      following: 1024
    },
    type: 'tours'
  }
];

export const widgetData$ = of(widgetData).pipe(
    delay(2000)
  );
