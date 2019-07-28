const compose = (...fncs) => comp => {
  return fncs.reduceRight((acc, fn) => fn(acc), comp);
};

export default compose;
