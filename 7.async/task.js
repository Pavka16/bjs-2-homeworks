class AlarmClock {
   constructor() {
      this.alarmCollection = [];
      this.timerId = null;
   }

   addClock(time, callback, id) {
      if (!id) {
         throw new Error("Невозможно сохранить будильник! Параметр id не передан");
      } else if (this.alarmCollection.find(clock => clock.id === id)) {
         return console.error("Такой id уже существует");
      }
      return this.alarmCollection.push({ time, callback, id });
   }

   removeClock(id) {
      const beginAlarmLength = this.alarmCollection.length;
      this.alarmCollection = this.alarmCollection.filter(clock => clock.id !== id);
      const endAlarmLength = this.alarmCollection.length;
      return beginAlarmLength > endAlarmLength;
   }

   getCurrentFormattedTime() {
      return new Date().toTimeString().slice(0, 5);
   }

   start() {
      if (this.timerId) {
         return;
      }

      let checkClock = (clock) => {
         if (this.getCurrentFormattedTime() === clock.time) {
            clock.callback();
         }
      }

      if (this.timerId === null) {
         this.timerId = setInterval(() => {
            this.alarmCollection.forEach(clock => checkClock(clock));
         }, 1000);
      }


      // if (this.timerId === null) {
      //    this.timerId = setInterval(() => {
      //       this.alarmCollection.forEach(alarm => {
      //          if (this.getCurrentFormattedTime() === alarm.time) {
      //             alarm.callback();
      //          }
      //       });
      //    }, 1000);
      // }
   }

   stop() {
      if (this.timerId) {
         clearInterval(this.timerId);
         this.timerId = null;
      }
   }

   printAlarms() {
      this.alarmCollection.forEach(clock => console.log(`Количество будильников:  ${clock.id} \n Будильник № ${clock.id} заведен на ${clock.time}`));
   }

   clearAlarms() {
      this.stop();
      this.alarmCollection = [];
   }
}

function testCase() {
   let phoneAlarm = new AlarmClock();
   phoneAlarm.printAlarms();
   phoneAlarm.addClock("05:30", () => console.log("Время просыпаться"), 1);
   phoneAlarm.addClock("05:31", () => { console.log("Вставай, пора делать зарядку"); phoneAlarm.removeClock(2) }, 2);
   phoneAlarm.addClock("05:40", () => console.log("Вставай!!! Лентяй"), 3);
   phoneAlarm.addClock("05:40", () => console.log("Вставай!!! Лентяй"));
   phoneAlarm.addClock("05:30", () => console.log("Время вставать"), 1);

}

testCase();