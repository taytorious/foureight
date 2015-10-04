function debounce(threshold, func, execAsap) {
      var timeout = void 0;
      return function() {
        var args, delayed, obj;
        delayed = function() {
          if (!execAsap) {
            func.apply(obj, args);
          }
          timeout = null;
          return timeout;
        };
        obj = this;
        args = arguments;
        if (timeout) {
          clearTimeout(timeout);
        } else {
          if (execAsap) {
            func.apply(obj, args);
          }
        }
        timeout = setTimeout(delayed, threshold || 100);
        return timeout;
      };
    }