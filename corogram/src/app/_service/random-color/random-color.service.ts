import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RandomColorService {
  color_array = [
    '#e1f5fe light-blue lighten-5',
    '#b3e5fc light-blue lighten-4',
    '#81d4fa light-blue lighten-3',
    '#4fc3f7 light-blue lighten-2',
    '#29b6f6 light-blue lighten-1',
    '#03a9f4 light-blue',
    '#039be5 light-blue darken-1',
    '#0288d1 light-blue darken-2',
    '#0277bd light-blue darken-3',
    '#01579b light-blue darken-4',
    '#80d8ff light-blue accent-1',
    '#40c4ff light-blue accent-2',
    '#00b0ff light-blue accent-3',
    '#0091ea light-blue accent-4',
    '#e0f2f1 teal lighten-5',
    '#b2dfdb teal lighten-4',
    '#80cbc4 teal lighten-3',
    '#4db6ac teal lighten-2',
    '#26a69a teal lighten-1',
    '#009688 teal',
    '#00897b teal darken-1',
    '#00796b teal darken-2',
    '#00695c teal darken-3',
    '#004d40 teal darken-4',
    '#a7ffeb teal accent-1',
    '#64ffda teal accent-2',
    '#1de9b6 teal accent-3',
    '#00bfa5 teal accent-4',
    '#e0f7fa cyan lighten-5',
    '#b2ebf2 cyan lighten-4',
    '#80deea cyan lighten-3',
    '#4dd0e1 cyan lighten-2',
    '#26c6da cyan lighten-1',
    '#00bcd4 cyan',
    '#00acc1 cyan darken-1',
    '#0097a7 cyan darken-2',
    '#00838f cyan darken-3',
    '#006064 cyan darken-4',
    '#84ffff cyan accent-1',
    '#18ffff cyan accent-2',
    '#00e5ff cyan accent-3',
    '#00b8d4 cyan accent-4',
    '#ede7f6 deep-purple lighten-5',
    '#d1c4e9 deep-purple lighten-4',
    '#b39ddb deep-purple lighten-3',
    '#9575cd deep-purple lighten-2',
    '#7e57c2 deep-purple lighten-1',
    '#673ab7 deep-purple',
    '#5e35b1 deep-purple darken-1',
    '#512da8 deep-purple darken-2',
    '#4527a0 deep-purple darken-3',
    '#311b92 deep-purple darken-4',
    '#b388ff deep-purple accent-1',
    '#7c4dff deep-purple accent-2',
    '#651fff deep-purple accent-3',
    '#6200ea deep-purple accent-4',
    '#e8eaf6 indigo lighten-5',
    '#c5cae9 indigo lighten-4',
    '#9fa8da indigo lighten-3',
    '#7986cb indigo lighten-2',
    '#5c6bc0 indigo lighten-1',
    '#3f51b5 indigo',
    '#3949ab indigo darken-1',
    '#303f9f indigo darken-2',
    '#283593 indigo darken-3',
    '#1a237e indigo darken-4',
    '#8c9eff indigo accent-1',
    '#536dfe indigo accent-2',
    '#3d5afe indigo accent-3',
    '#304ffe indigo accent-4',
    '#e3f2fd blue lighten-5',
    '#bbdefb blue lighten-4',
    '#90caf9 blue lighten-3',
    '#64b5f6 blue lighten-2',
    '#42a5f5 blue lighten-1',
    '#2196f3 blue',
    '#1e88e5 blue darken-1',
    '#1976d2 blue darken-2',
    '#1565c0 blue darken-3',
    '#0d47a1 blue darken-4',
    '#82b1ff blue accent-1',
    '#448aff blue accent-2',
    '#2979ff blue accent-3',
    '#2962ff blue accent-4'];

  constructor() {
  }

  getColor() {
    return this.color_array[Math.floor(Math.random() * this.color_array.length)];
  }
}
