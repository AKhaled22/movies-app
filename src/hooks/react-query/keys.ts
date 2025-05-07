export const movie = (id: string): readonly [string, string] =>
  ["movie", id] as const;
export const movies = (page: string): readonly [string, string] =>
  ["movies", page] as const;
export const search = (
  title: string,
  page: string
): readonly [string, string, string] => ["search", title, page] as const;
