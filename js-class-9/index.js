var cities = [
    "Karachi", "Lahore", "FaisAlaBad", "Rawalpindi", "Multan",
    "Hyderabad", "Gujranwala", "Peshawar", "Quetta",
    "IslaMaad", "Sialkot", "Bahawalpur", "Sukkur",
    "Larkana", "Mingora", "Sahiwal", "Dera Ghazi Khan",
    "Mirpur Khas", "Chiniot", "Okara" , 'Okajsdgjkad' , "aksdjfhasjkdbf"
    ];
  
    // console.log(cities.length - 1) // to get last index of array
  
    for (var i = 0; i <= cities.length; ++i ){
      var city = cities[i].toUpperCase()
      var city = cities[i].toLowerCase()
      console.log(city)
      if ( city === 'faisalabad'){
        console.log("Islamabad is the cleanest city of [pakistan")
        console.log(i)
        break; // loop ko rokny k kaam ata he 
      }
    }
  