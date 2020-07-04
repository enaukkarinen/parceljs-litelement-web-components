import { Story } from './story.interface';

// break 1
import image4 from './assets/pictures/4.jpg';

// gallery 1
import image32 from './assets/pictures/32.jpg';
import image33 from './assets/pictures/33.jpg';
import image34 from './assets/pictures/34.jpg';
import image35 from './assets/pictures/35.jpg';

// gallery 2
import image2 from './assets/pictures/2.jpg';
import image5 from './assets/pictures/5.jpg';
import image13 from './assets/pictures/13.jpg';
import image24 from './assets/pictures/24.jpg';

// gallery 3
import image28 from './assets/pictures/28.jpg';
import image26 from './assets/pictures/26.jpg';
import image29 from './assets/pictures/29.jpg';

export const story1: Story = {
  breaks: [
    {
      url: image33,
      text: `Born in 1935, the oldest of 7 sisters, Tivani spent a happy childhood in Kenya with her family, friends
      and little dog. When she was 4 her younger sister suffered from Polio. This left her sister unable to walk
      properly.`
    },
    {
      url: image33,
      text: `At first she didn't even want to try to move around and walk. The Father told the other girls that it was
      their job to help her. All of the other sisters encouraged her to walk.`
    },
    {
      url: image33,
      text: `No matter what the game they would try to persuade her to join in. They would play with her, holdin her
      hands. Everyone started to do it and as time went by she started to walk. Support and love can help us
      overcome our difficulties and both the recipient and giver get joy out of it.`
    }
  ],
  galleries: [
    [
      {
        url: image32,
        label: 'Playing Free'
      },
      {
        url: image33,
        label: 'Flowerfield'
      },
      {
        url: image34,
        label: 'Princess\' Pathway'
      },
    ],
    [
      {
        url: image2,
        label: 'No washing up'
      },
      {
        url: image5,
        label: 'Demand'
      },
      {
        url: image13,
        label: 'Nectar'
      },
      {
        url: image24,
        label: 'Long road'
      }
    ],
    [
      {
        url: image28,
        label: 'The birds'
      },
      {
        url: image26,
        label: 'Independence'
      },
      {
        url: image29,
        label: 'Movements'
      }
    ]
  ]
};
