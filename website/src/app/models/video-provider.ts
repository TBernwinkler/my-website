import {Video} from './video';

export class VideoProvider {

  private static musicSuggestions: Array<Video> = [
    {artist: 'Parkway Drive', track: 'Prey', youtube: 'WL_8ZY89dP4?start=5', duration: 255},
    {artist: 'In Flames', track: 'Take This Life', youtube: 'GRiC35zeziU?start=7', duration: 221},
    {artist: 'Beartooth', track: 'Body Bag', youtube: '81CakcFEH0U', duration: 230},
    {artist: 'Sabaton', track: 'Primo Victoria', youtube: 'qVHyl0P_P-M', duration: 229},
    {artist: 'Trivium', track: 'Anthem (We Are Fire)', youtube: 'Lp8p5OPtEe0?start=12', duration: 241},
    {artist: 'Eluveitie', track: 'Inis Mona', youtube: 'iijKLHCQw5o', duration: 254},
    {artist: 'Rise Against', track: 'Savior', youtube: 'e8X3ACToii0', duration: 244},
    {artist: 'Betontod', track: 'Keine Popsongs', youtube: 'gFgaQDurt4Y', duration: 170},
    {artist: 'Blink 182', track: 'What\'s my age again?', youtube: 'K7l5ZeVVoCA', duration: 147},
    {artist: 'Breaking Benjamin', track: 'Dance With The Devil', youtube: 'IN_FFmeQAC0', duration: 228},
    {artist: 'Bullet For My Valentine', track: 'Tears don\'t fall', youtube: '9sTQ0QdkN3Q', duration: 277},
    {artist: 'Callejon', track: 'Major Tom', youtube: '4rYYbFkvd5I', duration: 270},
    {artist: 'Leo Moracchioli', track: 'Despacito', youtube: 'hcQyFtHMfbs?start=5', duration: 281},
    {artist: 'Dope', track: 'You Spin Me Around', youtube: 'Zuh29Xu5nSw', duration: 170},
    {artist: 'Disturbed', track: 'Down With The Sickness', youtube: '09LTT0xwdfw', duration: 217},
    {artist: 'Five Finger Death Punch', track: 'The Bleeding', youtube: 'oDuevEAG6Cc', duration: 269},
    {artist: 'Linkin Park', track: 'With You', youtube: 'M8UTS2iFXOo', duration: 205},
    {artist: 'Metallica', track: 'Master Of Puppets', youtube: 'xnKhsTXoKCI', duration: 517},
    {artist: 'Sonata Arctica', track: 'The Cage', youtube: '685br8I_SpU', duration: 280},
    {artist: 'Stone Sour', track: 'Do Me A Favor', youtube: 'pSWKVJW-eHk', duration: 244},
    {artist: 'Dragonforce', track: 'Through The Fire And The Flames', youtube: '0jgrCKhxE1s', duration: 301},
    {artist: 'Sum 41', track: 'Underclass Hero', youtube: 'PEz2d49XTk0', duration: 195},
    {artist: 'Volbeat', track: 'Still Counting', youtube: 'aXhjp85UNJI', duration: 262},
    {artist: 'We Came As Romans', track: 'Glad You Came', youtube: 'fs9TLctYsGI', duration: 192},
    {artist: 'Amon Amarth', track: 'Persuit Of Vikings', youtube: 'mw0pylT0Tg0', duration: 271},
    {artist: 'Arch Enemy', track: 'The World Is Yours', youtube: 'lk2-bgwA0Ro', duration: 316},
    {artist: 'Slipknot', track: 'Custer', youtube: 'FdBqOCS8LmM', duration: 255},
    {artist: 'Of Mice And Men', track: 'Bones Exposed', youtube: 'IO-JbFtgeX4?start=15', duration: 257},
    {artist: 'Eskimo Callboy', track: 'Crystals', youtube: 'qrWPKu37H1E', duration: 227},
    {artist: 'Heaven Shall Burn', track: 'Black Tears', youtube: '-PtfyRjkn40?start=18', duration: 200},
    {artist: 'Hollywood Undead', track: 'Party By Myself', youtube: 'k1W50hyaUPo', duration: 253},
    {artist: 'Skillet', track: 'Hero', youtube: 'uGcsIdGOuZY', duration: 197},
    {artist: 'A Day To Remember', track: 'All I Want', youtube: 'Pn-6eOxnEMI', duration: 215},
    {artist: 'Killswitch Engange', track: 'In Due Time', youtube: 'HANCzu70us4?start=8', duration: 218},
    {artist: 'The Offspring', track: 'You\'re Gonna Go Far, Kid', youtube: 'ql9-82oV2JE?start=18', duration: 180},
    {artist: 'The Bloodhound Gang', track: 'The Bad Touch', youtube: 'xat1GVnl8-k', duration: 244},
    {artist: 'Lucenzo & Don Omar', track: 'Danza Kuduro', youtube: 'rUFgacK8sZ0?start=37', duration: 202},
    {artist: 'The Rasmus', track: 'In The Shadows', youtube: '_ao2u7F_Qzg', duration: 210}
  ];

  constructor() {
  }

  static provideTracks() {
    return this.musicSuggestions;
  }

  static getNthTrackElement(index: number) {
    return document.querySelector('#cdk-drop-list-0 > div:nth-child(' + (index + 1) + ') > div');
  }

}
