import {createGlobalStyle} from 'styled-components'

const NyanCatStyles = createGlobalStyle`
  body {
    overflow: hidden;
    margin: 0;
  }

  .button--no-display {
    padding: 0;
    border: 0;
    background: none;
    box-shadow: none;
    outline: none;
    width: 36px;
    height: 24px;
  }

  .cat--reverse {
    transform: scaleX(-1) !important;
  }

  .cat-minimal {
    left: 2% !important;
    transform: scaleX(1);
    transition: left 1500ms ease-in 1200ms;
  }

  .no-rainbow {
    opacity: 0 !important;
    transition: opacity 100ms ease-in !important;
  }

  .cat,
  .poptart,
  .head,
  .feet,
  .tail,
  .rainbow,
  .sprite {
    position: absolute;
    background-repeat: no-repeat;
    animation-iteration-count: infinite;
    animation-timing-function: step-end;
  }


  .overlay {
    transform: scaleX(1);
    position: absolute;
    left: 338px;
    top: 38px;
    z-index: 100;
    transition:left 1500ms ease-in-out, transform 300ms ease;
    animation: allow-discrete;
    margin-bottom: 5px;
  }

  .cat-left {
    left: 338px !important;

    @media screen and (max-width: 600px) {
      left: 25% !important;
    }
  }

  .cat-middle {
    left: 50% !important;
  }

  .cat-right {
    left: 80% !important;
  }

  .overlay--quarter {
    left: -12vw !important;
  }

  .cat {
    /*top: 50%;*/
    /*left: 50%;*/
    /*margin-left: -10px;*/
    /*margin-top: -10px;*/
    animation-name: catCycle;
    animation-duration: calc(1s / 2);
    width: 36px;
    height: 24px;
  }
  @keyframes catCycle {
    0%,
    100% {
      margin-top: -8px;
    }
    33.3% {
      margin-top: -6px;
    }
  }
  .poptart {
    left: 0;
    top: 0;
    width: 21px;
    height: 18px;
    background-image: linear-gradient(to right, #f39 0%, #f39 100%),
    linear-gradient(to right, #f39 0%, #f39 100%),
    linear-gradient(to right, #f39 0%, #f39 100%),
    linear-gradient(to right, #f39 0%, #f39 100%),
    linear-gradient(to right, #f39 0%, #f39 100%),
    linear-gradient(to right, #f39 0%, #f39 100%),
    linear-gradient(to right, #f39 0%, #f39 100%),
    linear-gradient(to right, #f39 0%, #f39 100%),
    linear-gradient(to right, #f39 0%, #f39 100%),
    linear-gradient(to right, #f39 0%, #f39 100%),
    linear-gradient(to right, #f39 0%, #f39 100%),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 21 * 2),
      #f9f calc(100% / 21 * 2),
      #f9f calc(100% / 21 * 19),
      transparent calc(100% / 21 * 19),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 21 * 3),
      #f9f calc(100% / 21 * 3),
      #f9f calc(100% / 21 * 18),
      transparent calc(100% / 21 * 18),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 21 * 4),
      #f9f calc(100% / 21 * 4),
      #f9f calc(100% / 21 * 17),
      transparent calc(100% / 21 * 17),
      transparent 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 21),
      #fc9 calc(100% / 21),
      #fc9 calc(100% / 21 * 20),
      black calc(100% / 21 * 20),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 21),
      black calc(100% / 21),
      black calc(100% / 21 * 2),
      #fc9 calc(100% / 21 * 2),
      #fc9 calc(100% / 21 * 19),
      black calc(100% / 21 * 19),
      black calc(100% / 21 * 20),
      transparent calc(100% / 21 * 19),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 21 * 2),
      black calc(100% / 21 * 2),
      black calc(100% / 21 * 19),
      transparent calc(100% / 21 * 19),
      transparent 100%
    );
    background-position:
      9px 3px,
      12px 3px,
      4px 4px,
      16px 5px,
      8px 7px,
      5px 9px,
      9px 10px,
      3px 11px,
      7px 13px,
      4px 14px,
      11px 14px,
      0 4px,
      0 3px,
      0 2px,
      0 2px,
      0 1px,
      0 0;
    background-size:
      1px 1px,
      1px 1px,
      1px 1px,
      1px 1px,
      1px 1px,
      1px 1px,
      1px 1px,
      1px 1px,
      1px 1px,
      1px 1px,
      1px 1px,
      100% 10px,
      100% 12px,
      100% 14px,
      100% 14px,
      100% 16px,
      100% 100%;
  }
  .head {
    left: 10px;
    top: 5px;
    width: 16px;
    height: 13px;
    background-image: linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 16 * 2),
      black calc(100% / 16 * 2),
      black calc(100% / 16 * 4),
      transparent calc(100% / 16 * 4),
      transparent calc(100% / 16 * 12),
      black calc(100% / 16 * 12),
      black calc(100% / 16 * 14),
      transparent calc(100% / 16 * 14),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 16),
      black calc(100% / 16),
      black calc(100% / 16 * 2),
      #999 calc(100% / 16 * 2),
      #999 calc(100% / 16 * 4),
      black calc(100% / 16 * 4),
      black calc(100% / 16 * 5),
      transparent calc(100% / 16 * 5),
      transparent calc(100% / 16 * 11),
      black calc(100% / 16 * 11),
      black calc(100% / 16 * 12),
      #999 calc(100% / 16 * 12),
      #999 calc(100% / 16 * 14),
      black calc(100% / 16 * 14),
      black calc(100% / 16 * 15),
      transparent calc(100% / 16 * 15),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 16),
      black calc(100% / 16),
      black calc(100% / 16 * 2),
      #999 calc(100% / 16 * 2),
      #999 calc(100% / 16 * 5),
      black calc(100% / 16 * 5),
      black calc(100% / 16 * 6),
      transparent calc(100% / 16 * 6),
      transparent calc(100% / 16 * 10),
      black calc(100% / 16 * 10),
      black calc(100% / 16 * 11),
      #999 calc(100% / 16 * 11),
      #999 calc(100% / 16 * 14),
      black calc(100% / 16 * 14),
      black calc(100% / 16 * 15),
      transparent calc(100% / 16 * 15),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 16),
      black calc(100% / 16),
      black calc(100% / 16 * 2),
      #999 calc(100% / 16 * 2),
      #999 calc(100% / 16 * 6),
      black calc(100% / 16 * 6),
      black calc(100% / 16 * 10),
      #999 calc(100% / 16 * 10),
      #999 calc(100% / 16 * 14),
      black calc(100% / 16 * 14),
      black calc(100% / 16 * 15),
      transparent calc(100% / 16 * 15),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 16),
      black calc(100% / 16),
      black calc(100% / 16 * 2),
      #999 calc(100% / 16 * 2),
      #999 calc(100% / 16 * 14),
      black calc(100% / 16 * 14),
      black calc(100% / 16 * 15),
      transparent calc(100% / 16 * 15),
      transparent 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 16),
      #999 calc(100% / 16),
      #999 calc(100% / 16 * 15),
      black calc(100% / 16 * 15),
      black 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 16),
      #999 calc(100% / 16),
      #999 calc(100% / 16 * 4),
      white calc(100% / 16 * 4),
      white calc(100% / 16 * 5),
      black calc(100% / 16 * 5),
      black calc(100% / 16 * 6),
      #999 calc(100% / 16 * 6),
      #999 calc(100% / 16 * 11),
      white calc(100% / 16 * 11),
      white calc(100% / 16 * 12),
      black calc(100% / 16 * 12),
      black calc(100% / 16 * 13),
      #999 calc(100% / 16 * 13),
      #999 calc(100% / 16 * 15),
      black calc(100% / 16 * 15),
      black 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 16),
      #999 calc(100% / 16),
      #999 calc(100% / 16 * 4),
      black calc(100% / 16 * 4),
      black calc(100% / 16 * 6),
      #999 calc(100% / 16 * 6),
      #999 calc(100% / 16 * 9),
      black calc(100% / 16 * 9),
      black calc(100% / 16 * 10),
      #999 calc(100% / 16 * 10),
      #999 calc(100% / 16 * 11),
      black calc(100% / 16 * 11),
      black calc(100% / 16 * 13),
      #999 calc(100% / 16 * 13),
      #999 calc(100% / 16 * 15),
      black calc(100% / 16 * 15),
      black 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 16),
      #999 calc(100% / 16),
      #999 calc(100% / 16 * 2),
      #f99 calc(100% / 16 * 2),
      #f99 calc(100% / 16 * 4),
      #999 calc(100% / 16 * 4),
      #999 calc(100% / 16 * 13),
      #f99 calc(100% / 16 * 13),
      #f99 calc(100% / 16 * 15),
      black calc(100% / 16 * 15),
      black 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 16),
      #999 calc(100% / 16),
      #999 calc(100% / 16 * 2),
      #f99 calc(100% / 16 * 2),
      #f99 calc(100% / 16 * 4),
      #999 calc(100% / 16 * 4),
      #999 calc(100% / 16 * 5),
      black calc(100% / 16 * 5),
      black calc(100% / 16 * 6),
      #999 calc(100% / 16 * 6),
      #999 calc(100% / 16 * 8),
      black calc(100% / 16 * 8),
      black calc(100% / 16 * 9),
      #999 calc(100% / 16 * 9),
      #999 calc(100% / 16 * 11),
      black calc(100% / 16 * 11),
      black calc(100% / 16 * 12),
      #999 calc(100% / 16 * 12),
      #999 calc(100% / 16 * 13),
      #f99 calc(100% / 16 * 13),
      #f99 calc(100% / 16 * 15),
      black calc(100% / 16 * 15),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 16),
      black calc(100% / 16),
      black calc(100% / 16 * 2),
      #999 calc(100% / 16 * 2),
      #999 calc(100% / 16 * 5),
      black calc(100% / 16 * 5),
      black calc(100% / 16 * 12),
      #999 calc(100% / 16 * 12),
      #999 calc(100% / 16 * 14),
      black calc(100% / 16 * 14),
      black calc(100% / 16 * 15),
      transparent calc(100% / 16 * 15),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 16 * 2),
      black calc(100% / 16 * 2),
      black calc(100% / 16 * 3),
      #999 calc(100% / 16 * 3),
      #999 calc(100% / 16 * 13),
      black calc(100% / 16 * 13),
      black calc(100% / 16 * 14),
      transparent calc(100% / 16 * 14),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 16 * 3),
      black calc(100% / 16 * 3),
      black calc(100% / 16 * 13),
      transparent calc(100% / 16 * 13),
      transparent 100%
    );
    background-position:
      0 0,
      0 1px,
      0 2px,
      0 3px,
      0 4px,
      0 5px,
      0 6px,
      0 7px,
      0 8px,
      0 9px,
      0 10px,
      0 11px,
      0 12px;
    background-size: 100% 1px;
    background-repeat: no-repeat;
    animation-name: headCycle;
    animation-duration: calc(1s / 2);
  }
  @keyframes headCycle {
    0%,
    100% {
      margin-left: 0;
      margin-top: 0;
    }
    16.7% {
      margin-left: 1px;
      margin-top: 0;
    }
    66.7% {
      margin-left: 0;
      margin-top: 0;
    }
    83.3% {
      margin-left: 0;
      margin-top: -1px;
    }
  }
  .feet {
    width: 24px;
    height: 5px;
    overflow: hidden;
    left: -2px;
    top: 15px;
    animation-name: feetCycle;
    animation-duration: calc(1s / 2);
  }
  .feet .sprite {
    top: 0;
    width: 24px;
    height: 15px;
    background-image: linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 24 * 2),
      black calc(100% / 24 * 2),
      black calc(100% / 24 * 4),
      #999 calc(100% / 24 * 4),
      #999 calc(100% / 24 * 5),
      transparent calc(100% / 24 * 5),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 24),
      black calc(100% / 24),
      black calc(100% / 24 * 3),
      #999 calc(100% / 24 * 3),
      #999 calc(100% / 24 * 6),
      transparent calc(100% / 24 * 6),
      transparent calc(100% / 24 * 19),
      #999 calc(100% / 24 * 19),
      #999 calc(100% / 24 * 22),
      black calc(100% / 24 * 22),
      black calc(100% / 24 * 23),
      transparent calc(100% / 24 * 23),
      transparent 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 24),
      #999 calc(100% / 24),
      #999 calc(100% / 24 * 4),
      black calc(100% / 24 * 4),
      black calc(100% / 24 * 6),
      #999 calc(100% / 24 * 6),
      #999 calc(100% / 24 * 10),
      black calc(100% / 24 * 10),
      black calc(100% / 24 * 11),
      transparent calc(100% / 24 * 11),
      transparent calc(100% / 24 * 14),
      black calc(100% / 24 * 14),
      black calc(100% / 24 * 15),
      #999 calc(100% / 24 * 15),
      #999 calc(100% / 24 * 18),
      black calc(100% / 24 * 18),
      black calc(100% / 24 * 20),
      #999 calc(100% / 24 * 20),
      #999 calc(100% / 24 * 23),
      black calc(100% / 24 * 23),
      black 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 24),
      #999 calc(100% / 24),
      #999 calc(100% / 24 * 3),
      black calc(100% / 24 * 3),
      black calc(100% / 24 * 5),
      transparent calc(100% / 24 * 5),
      transparent calc(100% / 24 * 6),
      black calc(100% / 24 * 6),
      black calc(100% / 24 * 7),
      #999 calc(100% / 24 * 7),
      #999 calc(100% / 24 * 9),
      black calc(100% / 24 * 9),
      black calc(100% / 24 * 10),
      transparent calc(100% / 24 * 10),
      transparent calc(100% / 24 * 15),
      black calc(100% / 24 * 15),
      black calc(100% / 24 * 16),
      #999 calc(100% / 24 * 16),
      #999 calc(100% / 24 * 18),
      black calc(100% / 24 * 18),
      black calc(100% / 24 * 19),
      transparent calc(100% / 24 * 19),
      transparent calc(100% / 24 * 20),
      black calc(100% / 24 * 20),
      black calc(100% / 24 * 21),
      #999 calc(100% / 24 * 21),
      #999 calc(100% / 24 * 23),
      black calc(100% / 24 * 23),
      black 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 24 * 4),
      transparent calc(100% / 24 * 4),
      transparent calc(100% / 24 * 6),
      black calc(100% / 24 * 6),
      black calc(100% / 24 * 9),
      transparent calc(100% / 24 * 8),
      transparent calc(100% / 24 * 16),
      black calc(100% / 24 * 16),
      black calc(100% / 24 * 19),
      transparent calc(100% / 24 * 19),
      transparent calc(100% / 24 * 21),
      black calc(100% / 24 * 21),
      black calc(100% / 24 * 23),
      transparent calc(100% / 24 * 23),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 24 * 2),
      black calc(100% / 24 * 2),
      black calc(100% / 24 * 4),
      #999 calc(100% / 24 * 4),
      #999 calc(100% / 24 * 5),
      transparent calc(100% / 24 * 5),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 24),
      black calc(100% / 24),
      black calc(100% / 24 * 2),
      #999 calc(100% / 24 * 2),
      #999 calc(100% / 24 * 6),
      transparent calc(100% / 24 * 6),
      transparent calc(100% / 24 * 19),
      #999 calc(100% / 24 * 19),
      #999 calc(100% / 24 * 22),
      black calc(100% / 24 * 22),
      black calc(100% / 24 * 23),
      transparent calc(100% / 24 * 23),
      transparent 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 24),
      #999 calc(100% / 24),
      #999 calc(100% / 24 * 4),
      black calc(100% / 24 * 4),
      black calc(100% / 24 * 6),
      #999 calc(100% / 24 * 6),
      #999 calc(100% / 24 * 9),
      black calc(100% / 24 * 9),
      black calc(100% / 24 * 10),
      transparent calc(100% / 24 * 10),
      transparent calc(100% / 24 * 14),
      black calc(100% / 24 * 14),
      black calc(100% / 24 * 15),
      #999 calc(100% / 24 * 15),
      #999 calc(100% / 24 * 18),
      black calc(100% / 24 * 18),
      black calc(100% / 24 * 20),
      #999 calc(100% / 24 * 20),
      #999 calc(100% / 24 * 23),
      black calc(100% / 24 * 23),
      black 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 24),
      #999 calc(100% / 24),
      #999 calc(100% / 24 * 3),
      black calc(100% / 24 * 3),
      black calc(100% / 24 * 4),
      transparent calc(100% / 24 * 4),
      transparent calc(100% / 24 * 5),
      black calc(100% / 24 * 5),
      black calc(100% / 24 * 6),
      #999 calc(100% / 24 * 6),
      #999 calc(100% / 24 * 8),
      black calc(100% / 24 * 8),
      black calc(100% / 24 * 9),
      transparent calc(100% / 24 * 9),
      transparent calc(100% / 24 * 15),
      black calc(100% / 24 * 15),
      black calc(100% / 24 * 16),
      #999 calc(100% / 24 * 16),
      #999 calc(100% / 24 * 18),
      black calc(100% / 24 * 18),
      black calc(100% / 24 * 19),
      transparent calc(100% / 24 * 19),
      transparent calc(100% / 24 * 20),
      black calc(100% / 24 * 20),
      black calc(100% / 24 * 21),
      #999 calc(100% / 24 * 21),
      #999 calc(100% / 24 * 23),
      black calc(100% / 24 * 23),
      black 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 24 * 3),
      transparent calc(100% / 24 * 3),
      transparent calc(100% / 24 * 6),
      black calc(100% / 24 * 6),
      black calc(100% / 24 * 9),
      transparent calc(100% / 24 * 9),
      transparent calc(100% / 24 * 16),
      black calc(100% / 24 * 16),
      black calc(100% / 24 * 19),
      transparent calc(100% / 24 * 19),
      transparent calc(100% / 24 * 21),
      black calc(100% / 24 * 21),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 24 * 2),
      black calc(100% / 24 * 2),
      black calc(100% / 24 * 4),
      #999 calc(100% / 24 * 4),
      #999 calc(100% / 24 * 5),
      transparent calc(100% / 24 * 5),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 24),
      black calc(100% / 24),
      black calc(100% / 24 * 2),
      #999 calc(100% / 24 * 2),
      #999 calc(100% / 24 * 6),
      transparent calc(100% / 24 * 6),
      transparent calc(100% / 24 * 19),
      #999 calc(100% / 24 * 19),
      #999 calc(100% / 24 * 22),
      black calc(100% / 24 * 22),
      black calc(100% / 24 * 23),
      transparent calc(100% / 24 * 23),
      transparent 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 24),
      #999 calc(100% / 24),
      #999 calc(100% / 24 * 4),
      black calc(100% / 24 * 4),
      black calc(100% / 24 * 6),
      #999 calc(100% / 24 * 6),
      #999 calc(100% / 24 * 9),
      black calc(100% / 24 * 9),
      black calc(100% / 24 * 10),
      transparent calc(100% / 24 * 10),
      transparent calc(100% / 24 * 14),
      black calc(100% / 24 * 14),
      black calc(100% / 24 * 15),
      #999 calc(100% / 24 * 15),
      #999 calc(100% / 24 * 18),
      black calc(100% / 24 * 18),
      black calc(100% / 24 * 20),
      #999 calc(100% / 24 * 20),
      #999 calc(100% / 24 * 23),
      black calc(100% / 24 * 23),
      black 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 24),
      #999 calc(100% / 24),
      #999 calc(100% / 24 * 3),
      black calc(100% / 24 * 3),
      black calc(100% / 24 * 4),
      transparent calc(100% / 24 * 4),
      transparent calc(100% / 24 * 5),
      black calc(100% / 24 * 5),
      black calc(100% / 24 * 6),
      #999 calc(100% / 24 * 6),
      #999 calc(100% / 24 * 8),
      black calc(100% / 24 * 8),
      black calc(100% / 24 * 9),
      transparent calc(100% / 24 * 9),
      transparent calc(100% / 24 * 15),
      black calc(100% / 24 * 15),
      black calc(100% / 24 * 16),
      #999 calc(100% / 24 * 16),
      #999 calc(100% / 24 * 18),
      black calc(100% / 24 * 18),
      black calc(100% / 24 * 19),
      transparent calc(100% / 24 * 19),
      transparent calc(100% / 24 * 20),
      black calc(100% / 24 * 20),
      black calc(100% / 24 * 21),
      #999 calc(100% / 24 * 21),
      #999 calc(100% / 24 * 23),
      black calc(100% / 24 * 23),
      black 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 24 * 3),
      transparent calc(100% / 24 * 3),
      transparent calc(100% / 24 * 5),
      black calc(100% / 24 * 5),
      black calc(100% / 24 * 8),
      transparent calc(100% / 24 * 8),
      transparent calc(100% / 24 * 15),
      black calc(100% / 24 * 15),
      black calc(100% / 24 * 18),
      transparent calc(100% / 24 * 18),
      transparent calc(100% / 24 * 21),
      black calc(100% / 24 * 21),
      black 100%
    );
    background-position:
      0 0,
      0 1px,
      0 2px,
      0 3px,
      0 4px,
      0 5px,
      0 6px,
      0 7px,
      0 8px,
      0 9px,
      0 10px,
      0 11px,
      0 12px,
      0 13px,
      0 14px;
    background-size: 100% 1px;
    background-repeat: no-repeat;
    animation-name: feetSpriteCycle;
    animation-duration: calc(1s / 2);
  }
  @keyframes feetCycle {
    0%,
    100% {
      margin-left: 0;
    }
    16.7% {
      margin-left: 1px;
    }
    33.3% {
      margin-left: 2px;
    }
    50% {
      margin-left: 1px;
    }
    66.7% {
      margin-left: -1px;
    }
  }
  @keyframes feetSpriteCycle {
    0%,
    100% {
      top: 0;
    }
    16.7% {
      top: -5px;
    }
    83.3% {
      top: -10px;
    }
  }
  .tail {
    width: 7px;
    height: 7px;
    overflow: hidden;
    left: -7px;
    top: 7px;
    animation-name: tailCycle;
    animation-duration: calc(1s / 2);
  }
  .tail .sprite {
    width: 7px;
    height: 35px;
    background-image: linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7),
      black calc(100% / 7),
      black calc(100% / 7 * 5),
      transparent calc(100% / 7 * 5),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7),
      black calc(100% / 7),
      black calc(100% / 7 * 2),
      #999 calc(100% / 7 * 2),
      #999 calc(100% / 7 * 4),
      black calc(100% / 7 * 4),
      black calc(100% / 7 * 6),
      transparent calc(100% / 7 * 6),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7),
      black calc(100% / 7),
      black calc(100% / 7 * 3),
      #999 calc(100% / 7 * 3),
      #999 calc(100% / 7 * 5),
      black calc(100% / 7 * 5),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 2),
      black calc(100% / 7 * 2),
      black calc(100% / 7 * 4),
      #999 calc(100% / 7 * 4),
      #999 calc(100% / 7 * 6),
      black calc(100% / 7 * 6),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 3),
      black calc(100% / 7 * 3),
      black calc(100% / 7 * 5),
      #999 calc(100% / 7 * 5),
      #999 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 4),
      black calc(100% / 7 * 4),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 6),
      black calc(100% / 7 * 6),
      black 100%
    ),
    linear-gradient(to right, transparent 0%, transparent 100%),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 2),
      black calc(100% / 7 * 2),
      black calc(100% / 7 * 4),
      transparent calc(100% / 7 * 4),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7),
      black calc(100% / 7),
      black calc(100% / 7 * 2),
      #999 calc(100% / 7 * 2),
      #999 calc(100% / 7 * 4),
      black calc(100% / 7 * 4),
      black calc(100% / 7 * 5),
      transparent calc(100% / 7 * 5),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7),
      black calc(100% / 7),
      black calc(100% / 7 * 2),
      #999 calc(100% / 7 * 2),
      #999 calc(100% / 7 * 4),
      black calc(100% / 7 * 4),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 2),
      black calc(100% / 7 * 2),
      black calc(100% / 7 * 3),
      #999 calc(100% / 7 * 3),
      #999 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 3),
      black calc(100% / 7 * 3),
      black calc(100% / 7 * 5),
      #999 calc(100% / 7 * 5),
      #999 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 5),
      black calc(100% / 7 * 5),
      black 100%
    ),
    linear-gradient(to right, transparent 0%, transparent 100%),
    linear-gradient(to right, transparent 0%, transparent 100%),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 6),
      black calc(100% / 7 * 6),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 3),
      black calc(100% / 7 * 3),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7),
      black calc(100% / 7),
      black calc(100% / 7 * 3),
      #999 calc(100% / 7 * 3),
      #999 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7),
      black calc(100% / 7),
      black calc(100% / 7 * 2),
      #999 calc(100% / 7 * 2),
      #999 calc(100% / 7 * 5),
      black calc(100% / 7 * 5),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 2),
      black calc(100% / 7 * 2),
      black calc(100% / 7 * 6),
      transparent calc(100% / 7 * 6),
      transparent 100%
    ),
    linear-gradient(to right, transparent 0%, transparent 100%),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 5),
      black calc(100% / 7 * 5),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 3),
      black calc(100% / 7 * 3),
      black calc(100% / 7 * 5),
      #999 calc(100% / 7 * 5),
      #999 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 2),
      black calc(100% / 7 * 2),
      black calc(100% / 7 * 3),
      #999 calc(100% / 7 * 3),
      #999 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7),
      black calc(100% / 7),
      black calc(100% / 7 * 2),
      #999 calc(100% / 7 * 2),
      #999 calc(100% / 7 * 4),
      black calc(100% / 7 * 4),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7),
      black calc(100% / 7),
      black calc(100% / 7 * 2),
      #999 calc(100% / 7 * 2),
      #999 calc(100% / 7 * 4),
      black calc(100% / 7 * 4),
      black calc(100% / 7 * 5),
      transparent calc(100% / 7 * 5),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 2),
      black calc(100% / 7 * 2),
      black calc(100% / 7 * 4),
      transparent calc(100% / 7 * 4),
      transparent 100%
    ),
    linear-gradient(to right, transparent 0%, transparent 100%),
    linear-gradient(to right, transparent 0%, transparent 100%),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7),
      black calc(100% / 7),
      black calc(100% / 7 * 5),
      transparent calc(100% / 7 * 5),
      transparent 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 7),
      #999 calc(100% / 7),
      #999 calc(100% / 7 * 4),
      black calc(100% / 7 * 4),
      black 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 7 * 2),
      #999 calc(100% / 7 * 2),
      #999 calc(100% / 7 * 6),
      black calc(100% / 7 * 6),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 2),
      black calc(100% / 7 * 2),
      black calc(100% / 7 * 6),
      #999 calc(100% / 7 * 6),
      #999 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 5),
      black calc(100% / 7 * 5),
      black 100%
    );
    background-position:
      0 0,
      0 1px,
      0 2px,
      0 3px,
      0 4px,
      0 5px,
      0 6px,
      0 7px,
      0 8px,
      0 9px,
      0 10px,
      0 11px,
      0 12px,
      0 13px,
      0 14px,
      0 15px,
      0 16px,
      0 17px,
      0 18px,
      0 19px,
      0 20px,
      0 21px,
      0 22px,
      0 23px,
      0 24px,
      0 25px,
      0 26px,
      0 27px,
      0 28px,
      0 29px,
      0 30px,
      0 31px,
      0 32px,
      0 33px,
      0 34px;
    background-size: 100% 1px;
    background-repeat: no-repeat;
    animation-name: tailSpriteCycle;
    animation-duration: calc(1s / 2);
  }
  @keyframes tailCycle {
    0%,
    100% {
      margin-top: 0;
    }
    33.3% {
      margin-top: 1px;
    }
    50% {
      margin-top: 2px;
    }
    66.7% {
      margin-top: -1px;
    }
  }
  @keyframes tailSpriteCycle {
    0%,
    83.3% {
      margin-top: 0;
    }
    16.7% {
      margin-top: -7px;
    }
    33.3% {
      margin-top: -14px;
    }
    50% {
      margin-top: -21px;
    }
    66.7% {
      margin-top: -28px;
    }
  }
  .rainbow {
    opacity: 1;
    left: -100vw;
    right: 50%;
    top: 50%;
    margin-top: -9px;
    height: 19px;
    overflow: hidden;
    transition: opacity 500ms ease-in 100ms;
  }
  .rainbow .sprite {
    left: 0;
    right: 8px;
    top: 0;
    bottom: 0;
    background-image: linear-gradient(
      to right,
      #f00 0%,
      #f00 50%,
      transparent 50%,
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent 50%,
      #f00 50%,
      #f00 100%
    ),
    linear-gradient(
      to right,
      #f90 0%,
      #f90 50%,
      transparent 50%,
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent 50%,
      #f90 50%,
      #f90 100%
    ),
    linear-gradient(
      to right,
      #ff0 0%,
      #ff0 50%,
      transparent 50%,
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent 50%,
      #ff0 50%,
      #ff0 100%
    ),
    linear-gradient(
      to right,
      #3f0 0%,
      #3f0 50%,
      transparent 50%,
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent 50%,
      #3f0 50%,
      #3f0 100%
    ),
    linear-gradient(
      to right,
      #09f 0%,
      #09f 50%,
      transparent 50%,
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent 50%,
      #09f 50%,
      #09f 100%
    ),
    linear-gradient(
      to right,
      #63f 0%,
      #63f 50%,
      transparent 50%,
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent 50%,
      #63f 50%,
      #63f 100%
    );
    background-position:
      0 0,
      0 1px,
      0 3px,
      0 4px,
      0 6px,
      0 7px,
      0 9px,
      0 10px,
      0 12px,
      0 13px,
      0 15px,
      0 16px;
    background-size: 16px 3px;
    background-repeat: repeat-x;
    animation-name: rainbowCycle;
    animation-duration: 1s;
  }
  @keyframes rainbowCycle {
    0%,
    33.3%,
    66.7%,
    100% {
      left: 0;
    }
    16.7%,
    50%,
    83.3% {
      left: -9px;
    }
  }
  /* this prevents the rainbow from peeking out from under the cat's back foot. */
  .rainbow .sprite:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 1.5px;
    height: 1.5px;
    background: #036;
  }
`

export default NyanCatStyles
