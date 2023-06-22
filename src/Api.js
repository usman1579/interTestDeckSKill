export const API = `https://api.nasa.gov/neo/rest/v1/feed?`;

export async function getData() {
  const URL =
    API +
    `start_date=${'2015-09-07'}&end_date=${'2015-09-08'}&api_key=DEMO_KEY`;
  const res = await fetch(URL);
  return await res.json();
}

export async function searchByDate(startDate) {
  const URL =
    API + `start_date=${startDate}&end_date=${startDate}&api_key=DEMO_KEY`;
  const res = await fetch(URL);
  return await res.json();
}

export function formatDate(date) {
  var year = date.getFullYear().toString();
  var month = (date.getMonth() + 101).toString().substring(1);
  var day = (date.getDate() + 100).toString().substring(1);
  return year + '-' + month + '-' + day;
}
