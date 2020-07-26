import { css } from '@polymer/lit-element';

export default css`
  :host {
    display: block;
  }

  .header {
    position: relative;
    height: 70vh;
    padding-bottom: 3rem;
  }

  .hero {
    height: 100%;
    position: relative;
    overflow: hidden;

    border-bottom-left-radius: 6vw;
    margin-left: 4vw;
  }

  .hero-image {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    transform: translateX(-50%);
    left: 50%;

    animation: focus 0.4s ease-in;
    animation-play-state: running;
  }

  .box-shadow {
    border-bottom-left-radius: 6vw;
    box-shadow: inset 11px -12px 30px -10px rgba(0, 0, 0, 0.35);
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 2;
  }

  .face-card {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    height: 222px;
    z-index: 3;
    border-radius: 1rem;
    overflow: hidden;
    display: flex;
    flex-flow: column;
    background: var(--primary-bg);
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  }

  @media (min-width: 600px) {
    .face-card {
      left: 12vw;
      transform: unset;
    }
  }

  .face-card__image-container {
    flex: 1;
    width: 100%;
    overflow: hidden;
  }

  .face-card__image {
    object-fit: contain;
    width: 100%;
    clip-path: circle(44%);
    height: 100%;
  }

  .face-card__name {
    height: 3rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 24px;
  }
`;
