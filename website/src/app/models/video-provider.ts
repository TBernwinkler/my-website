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
    {artist: 'The Offspring', track: 'You\'re Gonna Go Far, Kid', youtube: 'ql9-82oV2JE?start=18', duration: 175},
    {artist: 'The Bloodhound Gang', track: 'The Bad Touch', youtube: 'xat1GVnl8-k', duration: 244},
    {artist: 'Lucenzo & Don Omar', track: 'Danza Kuduro', youtube: 'rUFgacK8sZ0?start=37', duration: 196},
    {artist: 'The Rasmus', track: 'In The Shadows', youtube: '_ao2u7F_Qzg', duration: 210}
  ];

  private static mainstreamSuggestions: Array<Video> = [
    {artist: 'The Offspring', track: 'You\'re Gonna Go Far, Kid', youtube: 'ql9-82oV2JE?start=18', duration: 175},
    {artist: 'The Bloodhound Gang', track: 'The Bad Touch', youtube: 'xat1GVnl8-k', duration: 244},
    {artist: 'Lucenzo & Don Omar', track: 'Danza Kuduro', youtube: 'rUFgacK8sZ0?start=37', duration: 196},
    {artist: 'Eiffel 65', track: 'Blue', youtube: '68ugkg9RePc', duration: 219},
    {artist: 'O-Zone', track: 'Dragostea Din Tei', youtube: 'YnopHCL1Jk8?start=45', duration: 240},
    {artist: 'Bomfunk', track: 'Freestyler', youtube: 'ymNFyxvIdaM', duration: 292},
    {artist: 'Mr. President', track: 'Coco Jamboo', youtube: 'EScLmWJs82I', duration: 222},
    {artist: 'James Brown', track: 'I Feel Good', youtube: 'U5TqIdff_DQ', duration: 165},
    {artist: 'La Bouche', track: 'Be My Lover', youtube: 'ViP87WipSm0', duration: 222},
    {artist: 'The Cranberries', track: 'Zombie', youtube: '6Ejga4kJUts', duration: 307},
    {artist: 'Aqua', track: 'Barbie Girl', youtube: 'ZyhrYis509A?start=15', duration: 186},
    {artist: 'Cascada', track: 'Every Time We Touch', youtube: '4G6QDNC4jPs?start=5', duration: 209},
    {artist: 'Bobby McFerrin', track: 'Don\'t Worry Be Happy', youtube: 'd-diB65scQU', duration: 243},
    {artist: 'OutKast', track: 'Hey Ya', youtube: 'Fi8rsCncwF8', duration: 244},
    {artist: 'Baha Men', track: 'Who Let The Dogs Out', youtube: 'Qkuu0Lwb5EM?start=18', duration: 190},
    {artist: 'Lou Bega', track: 'Mambo No. 5', youtube: 'EK_LN3XEcnw', duration: 221},
    {artist: 'Ricky Martin', track: 'Livin La Vida Loca', youtube: 'p47fEXGabaY', duration: 222},
    {artist: 'Britney Spears', track: 'Baby One More Time', youtube: 'C-u5WLJ9Yk4?start=16', duration: 220},
    {artist: 'Jennifer Lopez', track: 'On The Floor ft. Pitbull', youtube: 't4H_Zoh7G5A?start=20', duration: 247},
    {artist: 'Flo Rida', track: 'Whistle', youtube: 'cSnkWzZ7ZAA', duration: 223},
    {artist: 'Ke$ha', track: 'Tik Tok', youtube: 'iP6XpLQM2Cs?start=9', duration: 205},
    {artist: 'Taio Cruz', track: 'Hangover', youtube: 'dLhFDYQHDQY', duration: 222},
    {artist: 'Tokyo Drift', track: 'Teriyaki Boyz', youtube: 'iuJDhFRDx9M', duration: 257},
    {artist: 'Rihanna', track: 'Umbrella', youtube: 'CvBfHwUxHIk', duration: 254},
    {artist: 'Katy Perry', track: 'I Kissed A Girl', youtube: 'tAp9BKosZXs', duration: 184},
    {artist: 'David Guetta', track: 'Sexy Bitch', youtube: 'mIIN_SGQy9c', duration: 192},
    {artist: 'Iyaz', track: 'Replay', youtube: 'WXxV9g7lsFE?start=9', duration: 188},
    {artist: 'Italobrothers', track: 'Stamp On The Ground', youtube: 'cHcVU5cGUNE', duration: 213},
    {artist: 'Liquido', track: 'Narcotic', youtube: 'PJ7E40Ec5ec', duration: 233},
    {artist: 'Bon Jovi', track: 'It\'s My Life', youtube: 'vx2u5uUu3DE?start=20', duration: 246},
    {artist: 'Survivor', track: 'Eye Of The Tiger', youtube: 'btPJPFnesV4', duration: 243},
    {artist: 'Avril Lavigne', track: 'Sk8ter Boy', youtube: 'TIy3n2b7V9k?start=7', duration: 213},
    {artist: 'Avicii', track: 'Wake Me Up', youtube: 'IcrbM1l_BoI', duration: 272},
    {artist: 'Alan Walker', track: 'Faded', youtube: '60ItHLz5WEA', duration: 212},
    {artist: 'Captain Jack', track: 'Captain Jack', youtube: 'QVlGeYrnTHQ', duration: 248}
  ];

  private static electroSuggetsions: Array<Video> = [
    {artist: 'Ma.Bra.', track: 'Whenever, Wherever', youtube: '99-_2fWwOuw', duration: 204},
    {artist: 'Jan Wayne', track: 'Bring Me To Life', youtube: 'Z8YR2Uf2sK0', duration: 210},
    {artist: 'Rob Mayth', track: 'Heart To Heart', youtube: 'U_YC0_7iS48', duration: 201},
    {artist: 'Timmy Trumpet', track: 'Freaks', youtube: 'ofmzX1nI7SE', duration: 173},
    {artist: 'Da Tweekaz', track: 'Jägermeister', youtube: 'AGDolE35XHA', duration: 214},
    {artist: 'Rebourne', track: 'What Is Love', youtube: 'LMV6NDEQd0Q', duration: 180},
    {artist: 'Alex \'M. vs. Marc van Damme', track: 'Children Of The Night', youtube: 'iTElyjj3TVQ', duration: 211},
    {artist: 'FTU pres. CREAM', track: 'You Came', youtube: 'RB8tI5n2GJs', duration: 186},
    {artist: 'DJ Gollum feat. Scarlet', track: 'All The Things She Said', youtube: 'WLD8yAhoQDA?start=40', duration: 282},
    {artist: 'Gigi D\'Agostino', track: 'The Riddle', youtube: 'KR92DOYS-_Y?start=5', duration: 149},
    {artist: 'Jeany Kiss & Sunray feat Gemma B.', track: 'My Heart Beats Like A Drum', youtube: 'CrUUE8QCOHk?start=50', duration: 230},
    {artist: 'Megastylez vs. DJ Restlezz feat. Euphorizon', track: 'Our Revolution', youtube: 'AetLRG98M-U', duration: 230},
    {artist: 'Alan Walker, K-391, Tungevaag, Mangoo', track: 'Play', youtube: 'YQRHrco73g4', duration: 193},
    {artist: 'Crapman', track: 'Uh La La La', youtube: 'SqeOjAUdIxQ', duration: 175},
    {artist: 'Harris & Ford vs. Gordon & Doyle feat. Lisah', track: 'Das Geht Boom', youtube: 'U-H1SgBYJ1Y', duration: 210},
    {artist: 'Darude', track: 'Sandstorm', youtube: 'y6120QOlsfU', duration: 223},
    {artist: 'Empyre One', track: 'Angeline', youtube: 'FJReeFn9swY', duration: 181},
    {artist: 'Special D', track: 'Come With Me', youtube: 'HJEoNtN7j04?start=11', duration: 143},
    {artist: 'Scooter', track: 'Nessaja', youtube: 'wquCCFvbNhI', duration: 210},
    {artist: 'Italobrothers', track: 'This Is Nightlife', youtube: 'sYcUv68nFUw?start=5', duration: 160},
    {artist: 'Crystal Lake', track: 'Handzup Motherfuckers', youtube: 'YXI4GVtVPyU', duration: 163}
  ];

  private static genres: Array<string> = [ 'Hard \'n Heavy', 'Mainstream & Party', 'Electronic & Techno'];

  constructor() {
  }

  static provideTracks() {
    return this.musicSuggestions;
  }

  static provideGenreTracks(genre: string) {
    switch (genre) {
      case this.genres[0]:
        return this.musicSuggestions;
      case this.genres[1]:
        return this.mainstreamSuggestions;
      case this.genres[2]:
        return this.electroSuggetsions;
      default:
        return this.musicSuggestions;
    }
  }

  static getGenres() {
    return this.genres;
  }

  static getNthTrackElement(index: number) {
    return document.querySelector('#cdk-drop-list-0 > div:nth-child(' + (index + 1) + ') > div');
  }

}
