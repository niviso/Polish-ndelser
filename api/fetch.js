

export const FetchData = (region) =>{
  return fetch('https://polisen.se/api/events?locationname='+region)
  .then(response => response.json())
  .then(data => {
    return data;
  });
}
