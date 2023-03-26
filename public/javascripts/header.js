'use strict';
const form = document.querySelector('#container');
const main_container = document.querySelector('#main_container');
const header = document.querySelector('#header');

const menu = () => {
  const img = document.createElement('img');
  const object = {
    id: 'h_icon_left',
    src: './images/menu-pink.png',
  };

  Object.assign(img, object);
  header.append(img);
};
menu();

const IconLinkedIn = () => {
  const a = document.createElement('a');
  const img = document.createElement('img');
  const object = {
    id: 'linkedIn',
    src: './images/linkedin-pink.png',
    target: '_blank',
  };

  a.setAttribute('href', 'https://www.linkedin.com/in/minhasohn/');
  Object.assign(img, object);

  header.append(a);
  a.append(img);
};

IconLinkedIn();

const IconGithub = () => {
  const a = document.createElement('a');
  const img = document.createElement('img');
  const object = {
    id: 'gitHub',
    src: './images/github-pink.png',
    target: '_blank',
  };

  a.setAttribute('href', 'https://github.com/Skylotus0206');
  Object.assign(img, object);

  header.append(a);
  a.append(img);
};

IconGithub();

const main = () => {
  const header_box = document.createElement('div');
  const a1 = document.createElement('a');
  const a2 = document.createElement('a');
  const img = document.createElement('img');
  const lotus = {
    id: 'lotus',
    src: './images/lotus-pink.png',
  };

  header_box.setAttribute('id', 'header_box');
  a1.setAttribute('href', '/');
  Object.assign(img, lotus);

  a2.setAttribute('href', '/');
  a2.innerText = '늘연';

  header.append(header_box);
  header_box.append(a1);
  a1.append(img);
  header_box.append(a2);
};

main();
