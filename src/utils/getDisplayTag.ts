export default function getDisplayTag(tag: string): string {
  const tagsHash: Record<string, string> = {
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    ror: 'RoR',
  };
  return tagsHash[tag] || `${tag[0].toUpperCase()}${tag.slice(1)}`;
}
