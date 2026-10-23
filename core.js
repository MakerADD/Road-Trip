export function escapeHtml(value=''){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
const navigation=s=>s.navigation||(s.cemetery?s.cemetery+', '+s.location:s.location);
export function directionUrl(stops){if(stops.length<2)throw new Error('At least two stops are required');const query=new URLSearchParams({api:'1',origin:navigation(stops[0]),destination:navigation(stops.at(-1)),travelmode:'driving'});if(stops.length>2)query.set('waypoints',stops.slice(1,-1).map(navigation).join('|'));return 'https://www.google.com/maps/dir/?'+query;}
// Three intermediate waypoints per link supports mobile browsers as well as desktop.
export function routeSegments(stops){const result=[];for(let i=0;i<stops.length-1;i+=4)result.push(stops.slice(i,i+5));return result;}
