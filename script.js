    import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
    import Chart from 'https://cdn.jsdelivr.net/npm/chart.js';
    import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
    const keys = ['a','s','d','f','g','h','j','k','l',';'];
    let currentKeyIndex = 0;

    const keyElem = document.getElementById('key');
    const msgElem = document.getElementById('message');
    function updateDisplay() {
      keyElem.textContent = keys[currentKeyIndex];
    }

    function startGame() {
      currentKeyIndex = 0;
      updateDisplay();
      msgElem.textContent = 'Гра розпочалася!';
      PNotify.info({ text: 'Нова гра. Натисніть клавішу "' + keys[0] + '"' });
    }

    document.addEventListener('keydown', e => {
      const pressed = e.key.toLowerCase();
      const expected = keys[currentKeyIndex];
      if (pressed === expected) {
        currentKeyIndex++;
        if (currentKeyIndex < keys.length) {
          updateDisplay();
          msgElem.textContent = 'Добре! Тепер натисніть "' + keys[currentKeyIndex] + '"';
        } else {
          msgElem.textContent = 'Вітаємо! Ви пройшли гру.';
          PNotify.success({ text: 'Успіх! Ви натиснули всі клавіші.' });
        }
      } else {
        PNotify.error({ text: 'Неправильно. Спробуйте ще раз.' });
      }
    });

    document.addEventListener('keypress', e => {
      e.preventDefault();
    });

    document.getElementById('new-game').addEventListener('click', startGame);

    startGame();