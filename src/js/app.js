// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

/* Во время игры вам необходимо будет
отображать полоску жизни над игровым персонажем.
Для сигнализации пользователю вы решили ввести
цветовую индикацию:
Здоровье более 50 - зелёный;
Здоровье от 50 и до 15 - жёлтый;
Менее 15 - красный. */
export function getHealthStatus(character) {
  if (character.health > 50) {
    return 'healthy';
  } if (character.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}

export function sortHeroesByHealth(heroes) {
  return heroes.sort((a, b) => b.health - a.health);
}
