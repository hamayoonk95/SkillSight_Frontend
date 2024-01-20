export type CategoryColorKey =
  | 'Language'
  | 'Library'
  | 'Tool'
  | 'Platform'
  | 'Methodology';

export const categoryColors: Record<CategoryColorKey, string> = {
  Language: '#FF6384',
  Library: '#36A2EB',
  Tool: '#FFCD56',
  Platform: '#4BC0C0',
  Methodology: '#9966FF',
};
