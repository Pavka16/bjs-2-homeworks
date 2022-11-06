function cachingDecoratorNew(func) {
   let cache = [];

   function wrapper(...args) {
      const hash = args.join(',');
      let objectInCashe = cache.find(object => object.hash === hash);
      if (objectInCashe) {
         console.log("Из кэша: " + objectInCashe.result);
         return "Из кэша: " + objectInCashe.result;
      }

      let result = func(...args);
      cache.push({ hash, result });
      if (cache.length > 5) {
         cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
   }
   return wrapper;
}



function debounceDecoratorNew(func, ms) {
   let timerId = null;
   wrapper.count = 0;
   wrapper.allCount = 0;

   function wrapper(...args) {
      wrapper.allCount++;

      if (timerId === null) {
         func(...args);
         wrapper.count++;
      }
      clearTimeout(timerId);
      timerId = setTimeout(() => {
         wrapper.count++;
         func(...args);
      }, ms);
   }
   return wrapper;
}

