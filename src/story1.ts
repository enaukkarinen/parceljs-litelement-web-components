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
      text: `When she was four, a close relative suffered from Polio, which left her unable to walk properly. At first she didn't even want to try to move around or walk. Triveni’s Baa (mother) told the sisters that they should do everything they could to help her. All of the sisters encouraged her to play and walk.`
    },
    {
      url: image33,
      text: `No matter what the game, they would make sure she could play a part in it. They would play with her, holding her hands and singing songs together. They found that her warmth and affection heightened their own happiness and enjoyment. Everyone started to involve the little girl and as time went by, she became more motivated to walk.`
    },
    {
      url: image33,
      text: `She went on to live a full life giving much joy to many others. Support and love can help us overcome our difficulties and both the recipient and giver get joy out of it.
      `
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
