import queryString from "query-string";

export function truncate(text: string, length: number): string {
  if (text.length > length) {
    return `${text.substring(0, length)}...`;
  }

  return text;
}

export function getCountryParams(): {
  country: string | null;
  page: number;
} {
  // Get URL params
  const q = queryString.parse(window.location.search);

  // Get sort by from url params
  const country = Array.isArray(q.country)
    ? (q.country[0] as string)
    : (q.country as string);

  // Get page number from url params
  const page = Array.isArray(q.page) ? q.page[0] : q.page;

  return { country, page: page ? parseInt(page) : 1 };
}

export function isEndOfPage(el: HTMLElement): boolean {
  return el.getBoundingClientRect().bottom <= window.innerHeight;
}

export { default as request } from "./request";
