


export async function fetchModsAndArcanes() {
 const response = await fetch('https://api.warframestat.us/items');
    const data = await response.json();

    const mods = data.filter((item: any) => item.category === 'Mods');
    const arcanes = data.filter((item: any) => item.category === 'Arcanes');

    const modNames = Array.from(new Set(mods.map((mod: any) => mod.name)));
    const arcaneNames = Array.from(new Set(arcanes.map((arcane: any) => arcane.name).filter((name:string) => name !== "Arcane")));

 
    return { modNames, arcaneNames };
}
