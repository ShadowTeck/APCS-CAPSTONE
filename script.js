//Data Declarations
var year = getColumn("RollingStone: 500 Albums", "Year");
var artist = getColumn("RollingStone: 500 Albums", "Artist");
var album = getColumn("RollingStone: 500 Albums", "Album");
var albumArt = getColumn("RollingStone: 500 Albums", "Album Art");
var rank = getColumn("RollingStone: 500 Albums", "Album Rank");
var genre = getColumn("RollingStone: 500 Albums", "Genre");
var subgenre = getColumn("RollingStone: 500 Albums", "Subgenre");
var tempRank;
var tempId;
//ALBUM SEARCH CODE

function searchRank(){
  var rankNum = getNumber("rankInput");
  if(rankNum == isNaN){
    console.log(rankNum + " is not a rank number");
  } else {
    for(var i = 0; i < rank.length; i++){
      if(rankNum == rank[i]){
        rankNum--;
        setScreen("Output");
        setImageURL("outputImg", albumArt[rankNum]);
        setText("label11", "Rank: " + rank[rankNum]);
        setText("artistOutput", artist[rankNum]);
        setText("titleOutput", album[rankNum]);
        setText("yearOutput", year[rankNum]);
        setText("genreOutput", genre[rankNum]);
        setText("subgenreOutput", subgenre[rankNum]);
        break;
      }
    }
    
  }
}

function searchYear(){
  var yearNum = getNumber("yearInput");
  if(yearNum == isNaN){
    console.log(yearNum + " is not a rank number");
  } else {
    for(var i = 0; i < year.length; i++){
      if(yearNum == year[i]){
        yearNum--;
        setScreen("Output");
        setImageURL("outputImg", albumArt[i]);
        setText("label11", "Rank: " + rank[i]);
        setText("artistOutput", artist[i]);
        setText("titleOutput", album[i]);
        setText("yearOutput", year[i]);
        setText("genreOutput", genre[i]);
        setText("subgenreOutput", subgenre[i]);
        break;
      }
    }
    
  }
}

function searchArtist(){
  var artistNum = getText("artistInput");
  if(artistNum === ""){
    console.log(artistNum + " is not a word");
    setText("error", artistNum + " is not a word! Try again.");
  } else {
    for(var i = 0; i < year.length; i++){
      if(artistNum == artist[i]){
        //artistNum--;
        setScreen("Output");
        setImageURL("outputImg", albumArt[i]);
        setText("label11", "Rank: " + rank[i]);
        setText("artistOutput", artist[i]);
        setText("titleOutput", album[i]);
        setText("yearOutput", year[i]);
        setText("genreOutput", genre[i]);
        setText("subgenreOutput", subgenre[i]);
        break;
      }
    }
    
  }
}

function searchGenre(){
  var genreNum = getText("genreInput");
  if(genreNum === ""){
    console.log(genreNum + " is not a word");
    setText("error", genreNum + " is not a word! Try again.");
  } else {
    for(var i = 0; i < year.length; i++){
      if(genreNum == genre[i]){
        //artistNum--;
        setScreen("Output");
        setImageURL("outputImg", albumArt[i]);
        setText("label11", "Rank: " + rank[i]);
        setText("artistOutput", artist[i]);
        setText("titleOutput", album[i]);
        setText("yearOutput", year[i]);
        setText("genreOutput", genre[i]);
        setText("subgenreOutput", subgenre[i]);
        break;
      }
    }
    
  }
}

function searchAlbum(){
  var albumNum = getText("albumInput");
  if(albumNum === ""){
    console.log(albumNum + " is not a word");
    setText("error", albumNum + " is not a word! Try again.");
  } else {
    for(var i = 0; i < year.length; i++){
      if(albumNum == album[i]){
        //artistNum--;
        setScreen("Output");
        setImageURL("outputImg", albumArt[i]);
        setText("label11", "Rank: " + rank[i]);
        setText("artistOutput", artist[i]);
        setText("titleOutput", album[i]);
        setText("yearOutput", year[i]);
        setText("genreOutput", genre[i]);
        setText("subgenreOutput", subgenre[i]);
        break;
      }
    }
    
  }
}

//SORTING CODE

function sortRank() {
  var dropdownProp = getProperty("dropdown4", "index");
  if(dropdownProp == 0){
    setScreen("sortOutput");
    setStyle("sortOutput","height:2100px");
    setStyle("divApplab","overflow-y:scroll");
    tempRank = [];
    var tempAlbum = [];
    var tempAID = [];
    for(var i = 0; i < /*rank.length*/100; i++){
      tempRank[i] = "" + rank[i];
      tempId = i + "";
      textLabel(tempId, tempRank[i]);
      setPosition(tempId, 45, 90 + (i*20));
      for(var j = 0; j < 100; j++){
        tempAlbum[j] = "" + album[i];
        for(var k = 500; k < 600; k++){
          tempAID[k] = k + "";
        }
      }
      textLabel(tempAID[i+500], tempAlbum[i]);
      setPosition(tempAID[i+500], 75, 90 + (i*20));
      showElement("loading");
    }
    hideElement("loading");
  } else if(dropdownProp == 1){
    showElement("loading");
    setStyle("sortOutput","height:2130px");
    setStyle("divApplab","overflow-y:scroll");
    setScreen("sortOutput");
    var tempRankRev = [];
    var tempIdRev = [];
    var tempAlbumRev = [];
    var tempAIDRev = [];
    for(var l = 99; l >/*rank.length*/-1; l--){
      tempRankRev[l] = "" + rank[l];
      tempIdRev = l + "";
      textLabel(tempIdRev, tempRankRev[l]);
      setPosition(tempIdRev, 20, 2090 + (-Math.abs(l*20)));
      for(var t = 0; t < 100; t++){
        tempAlbumRev[t] = "" + album[t];
        for(var r = 500; r < 600; r++){
          tempAIDRev[r] = r + "";
        }
      }
      textLabel(tempAIDRev[l+500], tempAlbumRev[l]);
      setPosition(tempAIDRev[l+500], 60, 2090 + (-Math.abs(l*20)));
    }
    hideElement("loading");
  }
}

function bubbleSort(arr, arr2){
   var len = arr.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
           var temp = arr[j-1];
           var temp2 = arr2[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
           arr2[j-1] = arr2[j];
           arr2[j] = temp2;
        }
     }
   }
}

function bubbleSortTwo(arr, arr2){
   var len = arr.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1]<arr[j]){
           var temp = arr[j-1];
           var temp2 = arr2[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
           arr2[j-1] = arr2[j];
           arr2[j] = temp2;
        }
     }
   }
}

function sortYear() {
  var dropdownProp = getProperty("dropdown5", "index");
  if(dropdownProp == 0){
    showElement("loading");
    setScreen("sortOutput");
    var tempYear = [];
    var tempYearAlbum = [];
    var tempYearID = [];
    var tempYearAID = [];
    bubbleSort(year, album);
    setStyle("sortOutput","height:2130px");
    setStyle("divApplab","overflow-y:scroll");
    for(var i = 0; i < 100; i++){
      tempYear[i] = "" + year[i];
      tempYearID = i + "";
      tempYear.sort();
      textLabel(tempYearID, tempYear[i]);
      setPosition(tempYearID, 25, 90 + (i*20));
      for(var j = 0; j < 100; j++){
        tempYearAlbum[j] = "" + album[i];
        for(var k = 1000; k < 1150; k++){
          tempYearAID[k] = k + "";
        }
      }
      textLabel(tempYearAID[i+1000], tempYearAlbum[i]);
      setPosition(tempYearAID[i+1000], 75, 90 + (i*20));
    }
    hideElement("loading");
  } else if(dropdownProp == 1){
    setStyle("sortOutput","height:2130px");
    setStyle("divApplab","overflow-y:scroll");
    setScreen("sortOutput");
    showElement("loading");
    var tempYearRev = [];
    var tempYearAlbumRev = [];
    var tempYearIDRev = [];
    var tempYearAIDRev = [];
    bubbleSortTwo(year, album);
    for(var l = 99; l >/*rank.length*/-1; l--){
      tempYearRev[l] = "" + year[l];
      tempYearIDRev = l + "";
      textLabel(tempYearIDRev, tempYearRev[l]);
      setPosition(tempYearIDRev, 25, 2090 + (-Math.abs(l*20)));
      for(var t = 0; t < 100; t++){
        tempYearAlbumRev[t] = "" + album[t];
        for(var r = 500; r < 600; r++){
          tempYearAIDRev[r] = r + "";
        }
      }
      textLabel(tempYearAIDRev[l+500], tempYearAlbumRev[l]);
      setPosition(tempYearAIDRev[l+500], 75, 2090 + (-Math.abs(l*20)));
    }
    hideElement("loading");
  }
}

//ON EVENTS TO SWITCH PAGES
onEvent("homeButton", "click", function( ) {
  setScreen("Home");
});

onEvent("sortoutputButton", "click", function( ) {
  setScreen("Home");
});

onEvent("homeButto", "click", function( ) {
  setScreen("Home");
});

onEvent("homebuttonTwo", "click", function( ) {
  setScreen("Home");
});

onEvent("homebuttonThree", "click", function( ) {
  setScreen("Home");
});

onEvent("sort", "click", function( ) {
  setScreen("Sort");
});

onEvent("search", "click", function( ) {
  setScreen("Search");
});

onEvent("searchRank", "click", function( ) {
  searchRank();
});

onEvent("searchYear", "click", function( ) {
  searchYear();
});

onEvent("searchArtist", "click", function( ) {
  searchArtist();
});

onEvent("searchGenre", "click", function( ) {
  searchGenre();
});

onEvent("searchAlbum", "click", function( ) {
  searchAlbum();
});

onEvent("sortRank", "click", function( ) {
  sortRank();
});

onEvent("sortYear", "click", function( ) {
  sortYear();
});

//CITATIONS
/*
  IMAGES:
  Fig 1. Photograph of "Rolling Stones" logo, StickPNG 5/19/2021
  https://lh3.googleusercontent.com/proxy/9D0Qeup8zRDZT6h8j-vfm4DOtudkrxobr9WH1PqIOyFEiR13RSSnEWkGwaLY2HiELnuUjMzQByBwZ0wQ3GlD7ZAt8Or7DHeLCq1KSKT5IzRPnxNrKe4
*/

/*
  DATA:
  Data provided by "Rolling Stone: 500 albums" on Code.org web services
*/

