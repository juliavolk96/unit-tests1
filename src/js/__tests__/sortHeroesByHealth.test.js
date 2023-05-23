import { test, expect } from '@jest/globals';

import { sortHeroesByHealth } from '../app';

test('герои отстортированы по уровню здоровья в порядке убывания', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const sortedHeroes = sortHeroesByHealth(heroes);
  expect(sortedHeroes).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});

test('один элемент', () => {
  const heroes = [
    { name: 'маг', health: 100 },
  ];
  const sortedHeroes = sortHeroesByHealth(heroes);
  expect(sortedHeroes).toEqual([
    { name: 'маг', health: 100 },
  ]);
});

test('повторяющиеся значения', () => {
  const heroes = [
    { name: 'мечник', health: 80 },
    { name: 'лучник', health: 100 },
    { name: 'маг', health: 80 },
  ];
  const sortedHeroes = sortHeroesByHealth(heroes);
  expect(sortedHeroes).toEqual([
    { name: 'лучник', health: 100 },
    { name: 'мечник', health: 80 },
    { name: 'маг', health: 80 },
  ]);
});

test('пустой массив', () => {
  const heroes = [];
  const sortedHeroes = sortHeroesByHealth(heroes);
  expect(sortedHeroes).toEqual([]);
});

test('два элемента, разное здоровье, у второго элемента здоровья больше', () => {
  const heroes = [
    { name: 'мечник', health: 80 },
    { name: 'лучник', health: 100 },
  ];
  const sortedHeroes = sortHeroesByHealth(heroes);
  expect(sortedHeroes).toEqual([
    { name: 'лучник', health: 100 },
    { name: 'мечник', health: 80 },
  ]);
});

test('два элемента, разное здоровье, у первого элемента здоровья больше', () => {
  const heroes = [
    { name: 'лучник', health: 100 },
    { name: 'мечник', health: 80 },
  ];
  const sortedHeroes = sortHeroesByHealth(heroes);
  expect(sortedHeroes).toEqual([
    { name: 'лучник', health: 100 },
    { name: 'мечник', health: 80 },
  ]);
});
