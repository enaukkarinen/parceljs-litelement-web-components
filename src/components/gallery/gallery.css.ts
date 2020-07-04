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
    margin-bottom: 1.5rem;

    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
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

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes grow {
    0% {
      transform: scale(0.85);
    }
    100% {
      transform: scale(1);
    }
  }

  #modal {
    display: none;
    cursor: pointer;
    position: fixed;
    z-index: 100;
    top: 0;
    width: 100vw;
    height: 100vh;

    animation: fadeIn;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
  }

  .modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .modal-backdrop {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: black;
    opacity: 0.4;
  }

  .modal-close-icon {
    position: absolute;
    top: 1rem;
    right: 2rem;
    width: 40px;
  }

  .modal-img {
    position: relative;
    /* left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); */

    max-height: 80vh;

    border: 8px solid;
    border-radius: 8px;
    animation: grow;
    animation-duration: 0.3s;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    color: white;
  }
`;
