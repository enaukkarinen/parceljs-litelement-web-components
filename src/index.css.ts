import { css } from '@polymer/lit-element';

export default css`
  :host {
    display: block;
  }

  h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 0;
  }

  section {
    margin: 3rem 0;
  }

  .image-break-slot {
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
  }

  .image-break-slot img {
    width: 20%;
    margin-top: 1rem;
  }
`;
