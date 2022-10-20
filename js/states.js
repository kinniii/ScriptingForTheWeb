var theStates = [
    ["AL" , "Alabama", "Montgomery", "Yellowhammer", "Camellia"],
    ["AK" , "Alaska", "Juneau", "Willow Ptarmigan", "Forget Me Not"],
    ["AZ" , "Arizona", "Phoenix", "Cactus Wren", "Saguaro Cactus Blossom"],
    ["AR" , "Arkansas", "Little Rock", "Mockingbird", "Apple Blossom"],
    ["CA" , "California", "Sacramento", "California Valley Quail", "California Poppy"],
    ["CO" , "Colorado", "Denver", "Lark Bunting", "Rocky Mountain Columbine"],
    ["CT" , "Connecticut", "Hartford", "Robin", "Mountain Laurel"],
    ["DE" , "Delaware", "Dover", "Blue Hen Chicken", "Peach Blossom"],
    ["FL" , "Florida", "Tallahassee", "Mockingbird", "Orange Blossom"],
    ["GA" , "Georgia", "Atlanta", "Brown Thrasher", "Cherokee Rose"],
    ["HI" , "Hawaii", "Honolulu", "Nene", "Pua Aloalo"],
    ["ID" , "Idaho", "Boise", "Mountain Bluebird", "Syringa-Mock Orange"],
    ["IL" , "Illinois", "Springfield", "Cardinal", "Purple Violet"],
    ["IN" , "Indiana", "Indianapolis", "Cardinal", "Peony"],
    ["IA" , "Iowa", "Des Moines", "Eastern Goldfinch", "Wild Prairie Rose"],
    ["KS" , "Kansas", "Topeka", "Western Meadowlark", "Sunflower"],
    ["KY" , "Kentucky", "Frankfort", "Cardinal", "Goldenrod"],
    ["LA" , "Louisiana", "Baton Rouge", "Eastern Brown Pelican", "Magnolia"],
    ["ME" , "Maine", "Augusta", "Chickadee", "White Pine Cone and Tassel"],
    ["MD" , "Maryland", "Annapolis", "Baltimore Oriole", "Black-Eyed Susan"],
    ["MA" , "Massachusetts", "Boston", "Chickadee", "Trailing-Arbutus"],
    ["MI" , "Michigan", "Lansing", "Robin", "Apple Blossom"],
    ["MN" , "Minnesota", "Saint Paul", "Common Loon", "Pink and White Lady Slipper"],
    ["MS" , "Mississippi", "Jackson", "Mockingbird", "Magnolia"],
    ["MO" , "Missouri", "Jefferson City", "Bluebird", "Hawthorn"],
    ["MT" , "Montana", "Helena", "Western Meadowlark", "Bitterroot"],
    ["NE" , "Nebraska", "Lincoln", "Western Meadowlark", "Goldenrod"],
    ["NV" , "Nevada", "Carson City", "Mountain Bluebird", "Sagebrush"],
    ["NH" , "New Hampshire", "Concord", "Purple Finch", "Purple Lilac"],
    ["NJ" , "New Jersey", "Trenton", "Eastern Goldfinch", "Violet"],
    ["NM" , "New Mexico", "Santa Fe", "Roadrunner", "Yucca Flower"],
    ["NY" , "New York", "Albany", "Bluebird", "Rose"],
    ["NC" , "North Carolina", "Raleigh", "Cardinal", "American Dogwood"],
    ["ND" , "North Dakota", "Bismarck", "Western Meadowlark", "Wild Prairie Rose"],
    ["OH" , "Ohio", "Columbus", "Cardinal", "Scarlet Carnation"],
    ["OK" , "Oklahoma", "Oklahoma City", "Scissor-tailed Flycatcher", "Mistletoe"],
    ["OR" , "Oregon", "Salem", "Western Meadowlark", "Oregon Grape"],
    ["PA" , "Pennsylvania", "Harrisburg", "Ruffed Grouse", "Mountain Laurel"],
    ["RI" , "Rhode Island", "Providence", "Rhode Island Red", "Violet"],
    ["SC" , "South Carolina", "Columbia", "Great Carolina Wren", "Yellow Jessamine"],
    ["SD" , "South Dakota", "Pierre", "Ring-Necked Pheasant", "Pasque Flower"],
    ["TN" , "Tennessee", "Nashville", "Mockingbird", "Iris"],
    ["TX" , "Texas", "Austin", "Mockingbird", "Bluebonnet"],
    ["UT" , "Utah", "Salt Lake City", "Common American Gull", "Sego Lily"],
    ["VT" , "Vermont", "Montpelier", "Hermit Thrush", "Red Clover"],
    ["VA" , "Virginia", "Richmond", "Cardinal", "American Dogwood"],
    ["WA" , "Washington", "Olympia", "Willow Goldfinch", "Coast Rhododendron"],
    ["WV" , "West Virginia", "Charleston", "Cardinal", "Rhododendron"],
    ["WI" , "Wisconsin", "Madison", "Robin", "Wood Violet"],
    ["WY" , "Wyoming", "Cheyenne", "Western Meadowlark", "Indian Paintbrush"]
    ]

    function displayStateInfo(myStateCode) {
        finalStateCode = myStateCode.toUpperCase()
        theStateName();
        function theStateName() {
             for (var i = 0; i < theStates.length; i++) {
                 if (theStates[i][0] == finalStateCode) {
                    finalStateName = theStates[i][1];
                }
             }
        }
        theStateCapital();
        function theStateCapital() {
            for (var i = 0; i < theStates.length; i++) {
                if (theStates[i][0] == finalStateCode) {
                   finalStateCapital = theStates[i][2];
               }
            }
        }
        theStateBird();
        function theStateBird() {
            for (var i = 0; i < theStates.length; i++) {
                if (theStates[i][0] == finalStateCode) {
                   finalStateBird = theStates[i][3];
               }
            }
        }
        theStateFlower();
        function theStateFlower() {
            for (var i = 0; i < theStates.length; i++) {
                if (theStates[i][0] == finalStateCode) {
                   finalStateFlower = theStates[i][4];
               }
            }
        }
        statesForm.searchResults.value = 
        "Search State Code: " + finalStateCode + "\n" + "\n" +
        "State Information:" + "\n" +
        " Name: " + finalStateName + "\n" +
        " Capital: " + finalStateCapital + "\n" +
        " State Bird: " + finalStateBird + "\n" +
        " State Flower: " + finalStateFlower;
  }
    