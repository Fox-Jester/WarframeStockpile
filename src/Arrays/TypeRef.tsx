



const images = import.meta.glob('../assets/images/Warframe/PP_imgs/*.webp', { eager: true });


const getImg = (name: string) => {
  const entry = Object.entries(images).find(([path]) =>
    path.toLowerCase().includes(name.toLowerCase())
  );
  return entry ? (entry[1] as { default: string }).default : undefined;
};




const TypeRef = {
    warframe: [
        {perSet: 1, img: "BP"},
        {perSet: 1, img: getImg("Neuroptics")},
        {perSet: 1, img: getImg("Chassis")},
        {perSet: 1, img: getImg("WarframeSystems")}
    ],

    rifle: [
      {perSet: 1, img: "BP"},
      {perSet: 1, img: getImg("Barrel")},
      {perSet: 1, img: getImg("Receiver")},
      {perSet: 1, img: getImg("Stock")},
    ],

    bow: [
      {perSet: 1, img: "BP"},
      {perSet: 1, img: getImg("Blade")},
      {perSet: 1, img: getImg("Blade")},
      {perSet: 1, img: getImg("Grip")},
      {perSet: 1, img: getImg("Stock")},
    ],

    speargun: [
        {perSet: 1, img: "BP"},
      {perSet: 1, img: getImg("Barrel")},
      {perSet: 1, img: getImg("Blade")},
      {perSet: 1, img: getImg("Handle")},
    ],

    crossbow: [
      {perSet: 1, img: "BP"},
      {perSet: 1, img: getImg("Grip")},
      {perSet: 1, img: getImg("Stock")},
      {perSet: 1, img: getImg("Barrel")},
      {perSet: 1, img: getImg("Receiver")},
    ],

    //Secondary

    pistol: [
      {perSet: 1, img: "BP"},
      {perSet: 1, img: getImg("Barrel")},
      {perSet: 1, img: getImg("Receiver")},
    ],

    dualpistols: [
      {perSet: 1, img: "BP"},
      {perSet: 2, img: getImg("Barrel")},
      {perSet: 2, img: getImg("Receiver")},
      {perSet: 1, img: "PrimeLink"}
    ],

    dualpistolsbaro: [
      {perSet: 1, img: "BP"},
      {perSet: 1, img: "PrimeLink"},
      {perSet: 2, img: "BP"}, 
      {perSet: 2, img: getImg("Barrel")},
      {perSet: 2, img: getImg("Receiver")}
    ],

    crossbowpistol: [  
      {perSet: 1, img: "BP"},
      {perSet: 1, img: getImg("Blade")},
      {perSet: 1, img: getImg("Blade")},
      {perSet: 1, img: getImg("Stock")},
      {perSet: 1, img: getImg("Receiver")},
    ],

    thrown: [
      {perSet: 1, img: "BP"},
      {perSet: 2, img: getImg("Grip")},
      {perSet: 2, img: getImg("Blade")},
    ],

    //Melee

    dualblades: [
      {perSet: 1, img: "BP"},
      {perSet: 2, img: getImg("Blade")},
      {perSet: 2, img: getImg("Handle")},
    ],

    staff: [
      {perSet: 1, img: "BP"},
      {perSet: 2, img: getImg("PrimeLink")},
      {perSet: 1, img: getImg("Handle")},
    ],

    swordshield: [
      {perSet: 1, img: "BP"},
      {perSet: 1, img: getImg("Blade")},
      {perSet: 1, img: getImg("Handle")},
      {perSet: 1, img: getImg("Guard")},

    ],

    sword: [
      {perSet: 1, img: "BP"},
      {perSet: 1, img: getImg("Blade")},
      {perSet: 1, img: getImg("Handle")},
    ],

    glaive: [
      {perSet: 1, img: "BP"},
      {perSet: 2, img: getImg("Blade")},
      {perSet: 1, img: getImg("Blade")},
    ],

    polearm: [
      {perSet: 1, img: "BP"},
      {perSet: 2, img: getImg("Blade")},
      {perSet: 1, img: getImg("Handle")},
    ],

    sparring: [
      {perSet: 1, img: "BP"},
      {perSet: 2, img: getImg("Handle")},
      {perSet: 2, img: getImg("Guard")},
    ],

    nunchaku: [
      {perSet: 1, img: "BP"},
      {perSet: 2, img: getImg("Handle")},
      {perSet: 1, img: getImg("Stock")},
    ],

    //pet

    collar: [
      {perSet: 1, img: "BP"},
      {perSet: 2, img: getImg("Grip")},
      {perSet: 1, img: getImg("PrimeLink")},
    ],

    //archwing

    archwing: [
        {perSet: 1, img: "BP"},
        {perSet: 1, img: getImg("Harness")},
        {perSet: 1, img: getImg("ArchwingSystems")},
        {perSet: 1, img: getImg("Wings")},
    ],




}

export default TypeRef