import { css } from '@polymer/lit-element';

export default css`
  :host {
    display: block;
  }

  .gallery {
    display: flex;
    flex-flow: row wrap;
    padding: 2rem 4rem;
  }

  .gallery-item {
    display: flex;
    flex-flow: column;

    width: 100%;
    margin-bottom: 1rem;
  }

  @media (min-width: 600px) {
    .gallery-item {
      width: 22%;
      flex: 1;
      margin-bottom: 0;

      border-radius: 4px;
      overflow: hidden;
      cursor: pointer;
    }

    .gallery-item + .gallery-item {
      margin-left: 2rem;
    }
  }

  .thumbnail {
    height: 200px;
    background-size: cover;
    background-position: center;
  }

  .content {
    min-height: 30px;
    font-size: 24px;
    padding: 0.5rem;
    text-align: center;
    background: var(--secondary-bg);
  }

  #modal {
    display: none;
    cursor: pointer;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: black;
    opacity: 0.4;
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    color: white;
  }
`;
