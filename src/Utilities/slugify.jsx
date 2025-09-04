export function slugify(value) {
  const s = String(value ?? "")
    .normalize("NFKD")                 
    .replace(/[\u0300-\u036f]/g, "");  
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")      
    .replace(/^-+|-+$/g, "");         
}
