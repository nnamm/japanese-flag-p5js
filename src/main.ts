import './style.css';
import p5 from 'p5';

const baseWidth = 600;

const roundByDigit = (num: number, digit: number): number => {
  const multiplier = Math.pow(10, digit);
  return Math.round(num * multiplier) / multiplier;
};

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    const center = [p.windowWidth / 2, p.windowHeight / 2];
    const flagWidth = roundByDigit(baseWidth, 2);
    const flagHeight = roundByDigit(((baseWidth / 3) * 2), 2);
    const diameter = roundByDigit((flagHeight / 5) * 3, 2);

    p.clear();
    p.fill(255, 255, 255);
    p.rectMode(p.CENTER);
    p.rect(center[0], center[1], flagWidth, flagHeight);
    p.noStroke();
    p.fill(180, 0, 45);
    p.circle(center[0], center[1], diameter);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch);
