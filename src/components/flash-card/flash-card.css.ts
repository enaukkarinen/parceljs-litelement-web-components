import { css } from '@polymer/lit-element';

export default css`
  :host {
    display: block;
  }

  .flash-card {
    opacity: 0;
    transition: 0.8s opacity ease-in-out, 0.8s transform ease-in-out;

    position: relative;
    background: #e6f8ff;
    width: 70vw;
    padding: 1rem;
    border-radius: 1rem;
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);

    transform: scale(0.85);
  }

  .fade-in {
    opacity: 1;
    transform: scale(1);
  }
`;