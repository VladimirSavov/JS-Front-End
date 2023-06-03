function createHeroRegister(input) {
    const heroes = [];
  
    for (const heroData of input) {
      const [heroName, heroLevel, ...items] = heroData.split(" / ");
      const hero = {
        name: heroName,
        level: Number(heroLevel),
        items: items.length > 0 ? items[0].split(", ") : []
      };
  
      heroes.push(hero);
    }
  
    heroes.sort((a, b) => a.level - b.level);
  
    for (const hero of heroes) {
      console.log(`Hero: ${hero.name} level => ${hero.level}`);
      console.log(`Items => ${hero.items.join(", ")}`);
    }
  }
  
  // Example usage
  const input = [ 
    'Isacc / 25 / Apple, GravityGun', 
    'Derek / 12 / BarrelVest, DestructionSword', 
    'Hes / 1 / Desolator, Sentinel, Antara' 
    ] 
    ;
  
  createHeroRegister(input);
  