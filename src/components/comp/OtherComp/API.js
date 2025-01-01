const seededRandom = (seed) => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
  
    return () => (s = (s * a) % m) / m;
  };
   
  const fetchAPI = (date) => {
    let result = [];
    let random = seededRandom(date.getDate());
  
    for (let i = 4; i <= 11; i++) {
      if (random() < 0.5) result.push(i + ":00PM");
      if (random() < 0.5) result.push(i + ":30PM");
    }
  
    return result;
  };
  
  const submitAPI = (formData) => true;
  
  export { fetchAPI, submitAPI };