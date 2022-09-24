const listCar = [
    {
  id: "6e2bc663-5197-441a-957b-bc75e4a2da7c",
      plate: "DBH-3491",
      transmssion: "Automatic",
      manufcture: "Ford",
      model: "F150",
      avalable: true,
    type: "Sedan",
    year: 2022,
      otions: [
        "Cruise Control",
        "Tinted Glass",
        "Tinted Glass",
        "Tinted Glass",
        "AM/FM Stereo"
      ],
      specs: [
        "Brake assist",
        "Leather-wrapped shift knob",
        "Glove box lamp",
        "Air conditioning w/in-cabin microfilter",
        "Body color folding remote-controlled pwr mirrors",
        "Dual-stage front airbags w/occupant classification system"
      ]
    },

    {
  id: "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
      plate: "WXB-3984",
      transmssion: "Automatic",
      manufcture: "BMW",
      model: "X5",
      avalable: false,
    type: "Convertible",
    year: 2019,
      otions: [
        "Keyless Entry",
        "Power Windows",
        "MP3 (Single Disc)",
        "CD (Multi Disc)",
        "Navigation"
      ],
      specs: [
        "Rear passenger map pockets",
        "Electrochromic rearview mirror",
        "Dual chrome exhaust tips",
        "Locking glove box",
        "Pwr front vented disc/rear drum brakes"
      ]
    },

    {
  id: "bf6b5c43-1377-4ae0-8908-310c64266f81",
      plate: "OSL-4224",
      transmssion: "Automanual",
      manufcture: "Lincoln",
      model: "MKZ",
      avalable: true,
    type: "Sedan",
    year: 2021,
      otions: [
        "Bucket Seats",
        "Airbag: Passenger",
        "Airbag: Driver",
        "Power Seats",
        "Airbag: Side",
        "Antilock Brakes",
        "CD (Multi Disc)"
      ],
      specs: [
        "Driver & front passenger map pockets",
        "Direct-type tire pressure monitor system",
        "Cargo area lamp",
        "Glove box lamp",
        "Silver finish interior door handles",
        "Driver & front passenger advanced multistage airbags w/occupant sensors",
        "Silver accent IP trim finisher -inc: silver shifter finisher",
        "Fasten seat belt warning light/chime"
      ]
    }
  ]

  //soal 1//
  // const tersedia = listCar.filter(function(availability){
  //   return availability.avalable === true;
  // });

  // console.log(tersedia);







  //soal 2 Cara 1//
  // listCar.sort(function (a, b){
  //   if(a.year<b.year)
  //       return -1;
  //   if(a.year>b.year)
  //       return 1;
  //  return 0;
  //   });

  //   console.log(listCar);

//soal 2 Cara 2//
//  console.log(listCar.sort((a, b) => {
//         return a.year - b.year;
//     }));

//    //soal 2 cara 3//
// function asc(a, b){
//     if(a.year<b.year){
//         return -1;}
//     if(a.year>b.year){
//         return 1;}
//    return 0;
//     }

//     console.log(listCar.sort(asc));

     //soal 3 cara 1//
// function dsc(a, b){
//     if(a.year>b.year){
//         return -1;}
//     if(a.year<b.year){
//         return 1;}
//    return 0;
//     }

//     console.log(listCar.sort(dsc));
    

   //soal 3 cara 2//
//  console.log(listCar.sort((a, b) => {
//         return b.year - a.year;
//     }));


 //soal 3 cara 3//
// listCar.sort(function (a, b){
//     if(a.year<b.year)
//         return 1;
//     if(a.year>b.year)
//         return -1;
//    return 0;
//     });

//     console.log(listCar);
